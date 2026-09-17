/**
 * React Server Component data layer.
 *
 * > **Never import this from a client component, and never re-export it from
 * > the package's client barrel.** It pulls in `@dipakparmar/zoho-billing`,
 * > which reaches `node:crypto`. Importing it across the `"use client"`
 * > boundary drags Node builtins into the browser bundle - something that
 * > passes `dev`, typecheck, and unit tests, then fails only in a production
 * > build with a cryptic `Module not found` pointing at unrelated
 * > `node_modules`. Import it via `@dipakparmar/zoho-billing-react/server` only.
 *
 * Every function here re-derives the caller's identity from your session and
 * enforces ownership server-side. Nothing accepts a customer ID as an
 * argument, so an RSC cannot accidentally render another tenant's billing data
 * by passing the wrong variable.
 */

import { cache } from "react"
import type { ZohoBilling } from "@dipakparmar/zoho-billing"
import { isOwnedByCustomer } from "@dipakparmar/zoho-billing"
import type {
  ZohoCustomer,
  ZohoInvoice,
  ZohoPlan,
  ZohoSubscription,
} from "@dipakparmar/zoho-billing/types"
import { zohoBillingTags } from "./tags"

/** Thrown when there is no signed-in customer. Map to a redirect. */
export class ZohoBillingUnauthorizedError extends Error {
  constructor() {
    super("No Zoho customer is associated with the current session.")
    this.name = "ZohoBillingUnauthorizedError"
  }
}

/**
 * Thrown when a resource does not exist *or* belongs to someone else. The two
 * cases are deliberately indistinguishable so the error cannot be used to
 * probe for valid IDs. Map to `notFound()`.
 */
export class ZohoBillingNotVisibleError extends Error {
  constructor() {
    super("Subscription not found.")
    this.name = "ZohoBillingNotVisibleError"
  }
}

export interface ZohoBillingServerSession {
  customerId: string
}

/**
 * Hooks into a framework's tag-based cache.
 *
 * Kept as adapters so this package does not hard-depend on Next.js. In a Next
 * app, pass `cacheTag` from `next/cache` as `tag`.
 */
export interface ZohoBillingCacheAdapter {
  /** Tag the surrounding `use cache` scope. */
  tag?: (...tags: string[]) => void
}

export interface ZohoBillingServerOptions {
  zoho: ZohoBilling
  /**
   * Resolve the signed-in customer, e.g. from cookies. Return `null` when
   * nobody is signed in. Required - identity is never taken from an argument.
   */
  resolveSession: () =>
    | Promise<ZohoBillingServerSession | null>
    | ZohoBillingServerSession
    | null
  cache?: ZohoBillingCacheAdapter
  /** Restrict which plans are visible in server-rendered pricing tables. */
  allowedPlanCodes?: string[]
}

export interface ZohoBillingServer {
  /** The current session, or `null`. Deduped per request. */
  getSession: () => Promise<ZohoBillingServerSession | null>
  /** The current session, throwing `ZohoBillingUnauthorizedError` if absent. */
  requireSession: () => Promise<ZohoBillingServerSession>
  getCustomer: () => Promise<ZohoCustomer>
  getSubscriptions: () => Promise<ZohoSubscription[]>
  /** One subscription, or `ZohoBillingNotVisibleError` if not the caller's. */
  getSubscription: (subscriptionId: string) => Promise<ZohoSubscription>
  getInvoices: (options?: { subscriptionId?: string }) => Promise<ZohoInvoice[]>
  getPlans: (options?: { productId?: string }) => Promise<ZohoPlan[]>
}

/**
 * Build the RSC data layer.
 *
 * Reads are wrapped in React's `cache()`, so rendering a layout, a page, and
 * three components that each need the subscription list produces exactly one
 * Zoho call per request. That matters more here than usual: Zoho's rate limit
 * is 100 requests/minute for the whole organization, shared by every user.
 */
export function createZohoBillingServer(
  options: ZohoBillingServerOptions
): ZohoBillingServer {
  const {
    zoho,
    resolveSession,
    cache: cacheAdapter,
    allowedPlanCodes,
  } = options

  const getSession = cache(
    async (): Promise<ZohoBillingServerSession | null> => resolveSession()
  )

  const requireSession = async (): Promise<ZohoBillingServerSession> => {
    const session = await getSession()
    if (!session?.customerId) throw new ZohoBillingUnauthorizedError()
    return session
  }

  const getCustomer = cache(async (): Promise<ZohoCustomer> => {
    const { customerId } = await requireSession()
    cacheAdapter?.tag?.(zohoBillingTags.customer(customerId))
    return zoho.customers.retrieve(customerId)
  })

  const getSubscriptions = cache(async (): Promise<ZohoSubscription[]> => {
    const { customerId } = await requireSession()
    cacheAdapter?.tag?.(
      zohoBillingTags.customer(customerId),
      zohoBillingTags.subscriptions(customerId)
    )
    return zoho.subscriptions.listAll({ customer_id: customerId })
  })

  const getSubscription = cache(
    async (subscriptionId: string): Promise<ZohoSubscription> => {
      const { customerId } = await requireSession()
      const subscription = await zoho.subscriptions.retrieve(subscriptionId)
      // Ownership is checked here, not by the caller. An RSC that renders
      // `params.id` straight from the URL is otherwise an IDOR.
      if (!isOwnedByCustomer(subscription, customerId)) {
        throw new ZohoBillingNotVisibleError()
      }
      cacheAdapter?.tag?.(
        zohoBillingTags.customer(customerId),
        zohoBillingTags.subscription(subscriptionId)
      )
      return subscription
    }
  )

  const getInvoices = cache(
    async (
      options: { subscriptionId?: string } = {}
    ): Promise<ZohoInvoice[]> => {
      const { customerId } = await requireSession()
      cacheAdapter?.tag?.(
        zohoBillingTags.customer(customerId),
        zohoBillingTags.invoices(customerId)
      )
      return zoho.invoices.list({
        customer_id: customerId,
        subscription_id: options.subscriptionId,
        per_page: 50,
      })
    }
  )

  // The catalogue is shared, so it is not session-scoped and does not require
  // a signed-in customer - a pricing page can render for anonymous visitors.
  const getPlans = cache(
    async (options: { productId?: string } = {}): Promise<ZohoPlan[]> => {
      cacheAdapter?.tag?.(zohoBillingTags.plans())
      const plans = await zoho.plans.list({
        filter_by: "PlanStatus.ACTIVE",
        product_id: options.productId,
      })
      return allowedPlanCodes
        ? plans.filter((plan) => allowedPlanCodes.includes(plan.plan_code))
        : plans
    }
  )

  return {
    getSession,
    requireSession,
    getCustomer,
    getSubscriptions,
    getSubscription,
    getInvoices,
    getPlans,
  }
}
