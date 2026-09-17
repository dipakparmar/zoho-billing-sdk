"use client"

import type {
  ZohoCustomer,
  ZohoInvoice,
  ZohoPlan,
  ZohoSubscription,
} from "@dipakparmar/zoho-billing/types"
import {
  useBillingQuery,
  type BillingQueryResult,
  type UseBillingQueryOptions,
} from "./useBillingQuery"

/**
 * Active plans from your Zoho catalogue, for a pricing table.
 *
 * If the backend handler was configured with `allowedPlanCodes`, only those
 * come back - the browser never sees plans you do not sell self-serve.
 */
export function usePlans(
  options: UseBillingQueryOptions & { productId?: string } = {}
): BillingQueryResult<ZohoPlan[]> {
  const { productId, query, ...rest } = options
  return useBillingQuery<{ plans: ZohoPlan[] }, ZohoPlan[]>("/plans", {
    ...rest,
    query: { product_id: productId, ...query },
    // Catalogue changes rarely; a 5-minute window avoids refetching it on
    // every navigation.
    staleTimeMs: options.staleTimeMs ?? 5 * 60_000,
    select: (response) => response.plans ?? [],
  })
}

/** Every subscription belonging to the signed-in customer. */
export function useSubscriptions(
  options: UseBillingQueryOptions & { filterBy?: string } = {}
): BillingQueryResult<ZohoSubscription[]> {
  const { filterBy, query, ...rest } = options
  return useBillingQuery<
    { subscriptions: ZohoSubscription[] },
    ZohoSubscription[]
  >("/subscriptions", {
    ...rest,
    query: { filter_by: filterBy, ...query },
    select: (response) => response.subscriptions ?? [],
  })
}

/** One subscription. Pass `null`/`undefined` to hold off until the ID exists. */
export function useSubscription(
  subscriptionId: string | null | undefined,
  options: UseBillingQueryOptions = {}
): BillingQueryResult<ZohoSubscription> {
  return useBillingQuery<{ subscription: ZohoSubscription }, ZohoSubscription>(
    subscriptionId
      ? `/subscriptions/${encodeURIComponent(subscriptionId)}`
      : null,
    { ...options, select: (response) => response.subscription }
  )
}

/** The signed-in customer's billing profile. */
export function useCustomer(
  options: UseBillingQueryOptions = {}
): BillingQueryResult<ZohoCustomer> {
  return useBillingQuery<{ customer: ZohoCustomer }, ZohoCustomer>(
    "/customer",
    {
      ...options,
      select: (response) => response.customer,
    }
  )
}

/** Invoice history, optionally narrowed to one subscription. */
export function useInvoices(
  options: UseBillingQueryOptions & {
    subscriptionId?: string
    filterBy?: string
  } = {}
): BillingQueryResult<ZohoInvoice[]> {
  const { subscriptionId, filterBy, query, ...rest } = options
  return useBillingQuery<{ invoices: ZohoInvoice[] }, ZohoInvoice[]>(
    "/invoices",
    {
      ...rest,
      query: { subscription_id: subscriptionId, filter_by: filterBy, ...query },
      select: (response) => response.invoices ?? [],
    }
  )
}
