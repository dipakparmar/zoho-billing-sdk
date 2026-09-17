"use client"

import type {
  PauseSubscriptionParams,
  ResumeSubscriptionParams,
  UpdateSubscriptionParams,
  ZohoSubscription,
} from "@dipakparmar/zoho-billing/types"
import {
  useBillingMutation,
  type BillingMutationResult,
} from "./useBillingMutation"

const SUBSCRIPTION_CACHES = ["/subscriptions", "/invoices"]

function subscriptionPath(id: string, action?: string): string {
  const base = `/subscriptions/${encodeURIComponent(id)}`
  return action ? `${base}/${action}` : base
}

export interface CancelSubscriptionOptions {
  /**
   * `true` (the default) ends the subscription when the paid term expires;
   * `false` cuts access off immediately.
   */
  cancelAtEnd?: boolean
}

/** Cancel a subscription, at period end by default. */
export function useCancelSubscription(): BillingMutationResult<
  [subscriptionId: string, options?: CancelSubscriptionOptions],
  ZohoSubscription
> {
  return useBillingMutation<
    [string, CancelSubscriptionOptions?],
    ZohoSubscription
  >(
    async (fetcher, subscriptionId, options) => {
      const response = await fetcher<{ subscription: ZohoSubscription }>(
        subscriptionPath(subscriptionId, "cancel"),
        {
          method: "POST",
          body: { cancel_at_end: options?.cancelAtEnd ?? true },
        }
      )
      return response.subscription
    },
    { invalidate: SUBSCRIPTION_CACHES }
  )
}

export function useReactivateSubscription(): BillingMutationResult<
  [subscriptionId: string],
  ZohoSubscription
> {
  return useBillingMutation<[string], ZohoSubscription>(
    async (fetcher, subscriptionId) => {
      const response = await fetcher<{ subscription: ZohoSubscription }>(
        subscriptionPath(subscriptionId, "reactivate"),
        { method: "POST" }
      )
      return response.subscription
    },
    { invalidate: SUBSCRIPTION_CACHES }
  )
}

export function usePauseSubscription(): BillingMutationResult<
  [subscriptionId: string, params?: PauseSubscriptionParams],
  ZohoSubscription
> {
  return useBillingMutation<
    [string, PauseSubscriptionParams?],
    ZohoSubscription
  >(
    async (fetcher, subscriptionId, params) => {
      const response = await fetcher<{ subscription: ZohoSubscription }>(
        subscriptionPath(subscriptionId, "pause"),
        { method: "POST", body: params ?? {} }
      )
      return response.subscription
    },
    { invalidate: SUBSCRIPTION_CACHES }
  )
}

export function useResumeSubscription(): BillingMutationResult<
  [subscriptionId: string, params?: ResumeSubscriptionParams],
  ZohoSubscription
> {
  return useBillingMutation<
    [string, ResumeSubscriptionParams?],
    ZohoSubscription
  >(
    async (fetcher, subscriptionId, params) => {
      const response = await fetcher<{ subscription: ZohoSubscription }>(
        subscriptionPath(subscriptionId, "resume"),
        { method: "POST", body: params ?? {} }
      )
      return response.subscription
    },
    { invalidate: SUBSCRIPTION_CACHES }
  )
}

/**
 * Change plan, addons, or coupon.
 *
 * Set `end_of_term` explicitly: `false` applies the change now (prorated),
 * `true` defers it to the next renewal. Omitting it falls back to the Zoho
 * organization's default, which is easy to be surprised by.
 */
export function useUpdateSubscription(): BillingMutationResult<
  [subscriptionId: string, params: UpdateSubscriptionParams],
  ZohoSubscription
> {
  return useBillingMutation<
    [string, UpdateSubscriptionParams],
    ZohoSubscription
  >(
    async (fetcher, subscriptionId, params) => {
      const response = await fetcher<{ subscription: ZohoSubscription }>(
        subscriptionPath(subscriptionId),
        { method: "PUT", body: params }
      )
      return response.subscription
    },
    { invalidate: SUBSCRIPTION_CACHES }
  )
}
