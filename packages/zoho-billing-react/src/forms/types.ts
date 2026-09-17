import type { ZohoSubscription } from "@dipakparmar/zoho-billing/types"

/**
 * Result shape returned by the Server Actions.
 *
 * Redeclared here, structurally identical to the one in `../server/actions`,
 * so client components can type against it without importing the server
 * module - which would pull `node:crypto` into the browser bundle.
 */
export type ZohoBillingFormState<T = ZohoSubscription> =
  | { status: "idle" }
  | { status: "success"; data: T; error?: undefined }
  | { status: "error"; error: string; data?: undefined }

export const IDLE_FORM_STATE: ZohoBillingFormState = { status: "idle" }

/** Signature a Server Action must have to drive `useActionState`. */
export type ZohoBillingFormAction<T = ZohoSubscription> = (
  previousState: ZohoBillingFormState<T>,
  formData: FormData
) => Promise<ZohoBillingFormState<T>>

/**
 * Map an action's error slug to a message for the customer.
 *
 * The slugs are deliberately coarse: the server never returns Zoho's own text,
 * so this is the only place user-facing wording is decided.
 */
export function formatActionError(error: string | undefined): string {
  if (!error) return ""
  const messages: Record<string, string> = {
    unauthorized: "Please sign in again to manage your subscription.",
    not_found: "That subscription is no longer available.",
    plan_not_allowed: "That plan is not available on your account.",
    addon_not_allowed: "That add-on is not available on your account.",
    billing_error:
      "Your billing provider rejected the change. Please try again shortly.",
    internal_error: "Something went wrong. Please try again.",
  }
  return messages[error] ?? "Something went wrong. Please try again."
}
