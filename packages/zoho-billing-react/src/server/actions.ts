/**
 * Server Action factories.
 *
 * ## Why this is a factory and not a `"use server"` module
 *
 * A module marked `"use server"` turns every export into a public,
 * network-reachable endpoint. If this package shipped pre-made actions, they
 * would be endpoints in *your* app that this package defines and you cannot
 * see - and Server Actions carry no automatic authorization. So the factory
 * returns plain functions, and you mark your own module `"use server"` and
 * re-export them. The security boundary stays in your codebase, where it is
 * reviewable:
 *
 * ```ts
 * // app/billing/actions.ts
 * "use server"
 *
 * import { createZohoBillingActions } from "@dipakparmar/zoho-billing-react/server"
 * import { revalidateTag } from "next/cache"
 *
 * const actions = createZohoBillingActions({
 *   zoho,
 *   resolveSession: async () => {
 *     const session = await auth.api.getSession({ headers: await headers() })
 *     return session?.user.zohoCustomerId
 *       ? { customerId: session.user.zohoCustomerId }
 *       : null
 *   },
 *   revalidate: (tag) => revalidateTag(tag),
 *   allowedPlanCodes: ["pro-monthly", "pro-yearly"],
 * })
 *
 * export const cancelSubscription = actions.cancelSubscription
 * export const updateSubscription = actions.updateSubscription
 * ```
 *
 * Every action re-resolves the session itself and re-checks ownership before
 * mutating. It never trusts a customer ID from its arguments, because a Server
 * Action's arguments come from the client and are exactly as trustworthy as a
 * request body.
 */

import type { ZohoBilling } from "@dipakparmar/zoho-billing"
import {
  ZohoBillingError,
  ZohoBillingInputError,
  assertCatalogAllowed,
  isOwnedByCustomer,
  sanitizeSubscriptionUpdate,
  type CatalogAllowlist,
} from "@dipakparmar/zoho-billing"
import type { ZohoSubscription } from "@dipakparmar/zoho-billing/types"
import { subscriptionWriteTags } from "./tags"
import {
  ZohoBillingNotVisibleError,
  ZohoBillingUnauthorizedError,
  type ZohoBillingServerSession,
} from "./data"

/**
 * Result shape for `useActionState`.
 *
 * A discriminated union rather than a thrown error: `useActionState` surfaces
 * the returned value directly into the form, and an uncaught throw in a Server
 * Action becomes an opaque "an error occurred" in production.
 */
export type ZohoBillingActionState<T = ZohoSubscription> =
  | { status: "idle" }
  | { status: "success"; data: T; error?: undefined }
  | { status: "error"; error: string; data?: undefined }

export const IDLE_ACTION_STATE: ZohoBillingActionState = { status: "idle" }

export interface ZohoBillingActionsOptions extends CatalogAllowlist {
  zoho: ZohoBilling
  resolveSession: () =>
    | Promise<ZohoBillingServerSession | null>
    | ZohoBillingServerSession
    | null
  /**
   * Invalidate a cache tag after a successful write. In Next, pass
   * `(tag) => revalidateTag(tag)`. Tags come from `./tags`, so they always
   * match what the read path applied.
   */
  revalidate?: (tag: string) => void | Promise<void>
  /** Called for unexpected failures. Defaults to `console.error`. */
  onError?: (error: unknown) => void
}

export interface ZohoBillingActions {
  cancelSubscription: (
    previousState: ZohoBillingActionState,
    formData: FormData
  ) => Promise<ZohoBillingActionState>
  reactivateSubscription: (
    previousState: ZohoBillingActionState,
    formData: FormData
  ) => Promise<ZohoBillingActionState>
  pauseSubscription: (
    previousState: ZohoBillingActionState,
    formData: FormData
  ) => Promise<ZohoBillingActionState>
  resumeSubscription: (
    previousState: ZohoBillingActionState,
    formData: FormData
  ) => Promise<ZohoBillingActionState>
  updateSubscription: (
    previousState: ZohoBillingActionState,
    formData: FormData
  ) => Promise<ZohoBillingActionState>
}

export function createZohoBillingActions(
  options: ZohoBillingActionsOptions
): ZohoBillingActions {
  const { zoho, resolveSession, revalidate, onError, ...allowlist } = options

  /**
   * Shared prologue for every action: resolve identity, load the subscription,
   * and confirm ownership *before* handing control to the mutation. Returning
   * the loaded subscription means the ownership read is never skipped.
   */
  async function withOwnedSubscription(
    formData: FormData,
    mutate: (
      subscriptionId: string,
      session: ZohoBillingServerSession
    ) => Promise<ZohoSubscription>
  ): Promise<ZohoBillingActionState> {
    try {
      const session = await resolveSession()
      if (!session?.customerId) throw new ZohoBillingUnauthorizedError()

      const subscriptionId = formData.get("subscription_id")
      if (typeof subscriptionId !== "string" || !subscriptionId) {
        throw new ZohoBillingInputError("subscription_id is required.")
      }

      const existing = await zoho.subscriptions.retrieve(subscriptionId)
      if (!isOwnedByCustomer(existing, session.customerId)) {
        throw new ZohoBillingNotVisibleError()
      }

      const data = await mutate(subscriptionId, session)

      for (const tag of subscriptionWriteTags(
        session.customerId,
        subscriptionId
      )) {
        await revalidate?.(tag)
      }

      return { status: "success", data }
    } catch (error) {
      return toErrorState(error, onError)
    }
  }

  return {
    cancelSubscription: (_previousState, formData) =>
      withOwnedSubscription(formData, (id) =>
        zoho.subscriptions.cancel(id, {
          // Only an explicit opt-in cancels immediately; the default leaves
          // the customer the access they already paid for.
          cancel_at_end: formData.get("cancel_at_end") !== "false",
        })
      ),

    reactivateSubscription: (_previousState, formData) =>
      withOwnedSubscription(formData, (id) =>
        zoho.subscriptions.reactivate(id)
      ),

    pauseSubscription: (_previousState, formData) =>
      withOwnedSubscription(formData, (id) =>
        zoho.subscriptions.pause(id, pickDate(formData, "resume_date"))
      ),

    resumeSubscription: (_previousState, formData) =>
      withOwnedSubscription(formData, (id) =>
        zoho.subscriptions.resume(id, pickDate(formData, "resume_date"))
      ),

    updateSubscription: (_previousState, formData) =>
      withOwnedSubscription(formData, (id) => {
        // Same deny-by-default path as the HTTP handler. Server Action
        // arguments are client input; `plan.price` here would be a free plan.
        const update = sanitizeSubscriptionUpdate({
          plan: formData.get("plan_code")
            ? {
                plan_code: formData.get("plan_code"),
                quantity: formData.get("quantity") ?? undefined,
              }
            : undefined,
          coupon_code: formData.get("coupon_code") ?? undefined,
          end_of_term: formData.get("end_of_term") === "true",
        })
        assertCatalogAllowed(update, allowlist)
        return zoho.subscriptions.update(id, update)
      }),
  }
}

/** Extract a `yyyy-mm-dd` field, ignoring anything else. */
function pickDate(formData: FormData, field: string): Record<string, string> {
  const value = formData.get(field)
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)
    ? { [field]: value }
    : {}
}

/**
 * Convert a thrown error into form state.
 *
 * Only messages we authored are shown. Zoho's own prose and internal
 * exceptions are replaced with a generic string, since Server Action return
 * values are serialised straight to the browser.
 */
function toErrorState(
  error: unknown,
  onError?: (error: unknown) => void
): ZohoBillingActionState {
  if (error instanceof ZohoBillingUnauthorizedError) {
    return { status: "error", error: "unauthorized" }
  }
  if (error instanceof ZohoBillingNotVisibleError) {
    return { status: "error", error: "not_found" }
  }
  if (error instanceof ZohoBillingInputError) {
    return { status: "error", error: error.message }
  }
  if (error instanceof ZohoBillingError) {
    ;(onError ?? defaultOnError)(error)
    return { status: "error", error: "billing_error" }
  }
  ;(onError ?? defaultOnError)(error)
  return { status: "error", error: "internal_error" }
}

function defaultOnError(error: unknown): void {
  console.error("[zoho-billing] server action error", error)
}
