"use client"

import { useCallback } from "react"
import type { ZohoHostedPage } from "@dipakparmar/zoho-billing/types"
import {
  useBillingMutation,
  type BillingMutationResult,
} from "./useBillingMutation"
import {
  useBillingQuery,
  type BillingQueryResult,
  type UseBillingQueryOptions,
} from "./useBillingQuery"

/** Which hosted-page flow to open. */
export type HostedPageKind =
  | "new-subscription"
  | "update-subscription"
  | "update-card"

export interface CreateHostedPageParams {
  kind: HostedPageKind
  /** Required for `new-subscription`; optional plan change otherwise. */
  plan?: { plan_code: string; quantity?: number; price?: number }
  /** Required for `update-subscription`. */
  subscription_id?: string
  addons?: { addon_code: string; quantity?: number }[]
  coupon_code?: string
  /** Where Zoho returns the customer. Include a marker you can read back. */
  redirect_url?: string
  [key: string]: unknown
}

/**
 * Create a Zoho hosted page (their Checkout equivalent).
 *
 * `customer_id` is never sent from the browser - the backend handler fills it
 * in from the session, so a caller cannot open a checkout against someone
 * else's account.
 */
export function useCreateHostedPage(): BillingMutationResult<
  [params: CreateHostedPageParams],
  ZohoHostedPage
> {
  return useBillingMutation<[CreateHostedPageParams], ZohoHostedPage>(
    async (fetcher, params) => {
      const { kind, ...body } = params
      const response = await fetcher<{ hostedpage: ZohoHostedPage }>(
        `/hosted-pages/${kind}`,
        { method: "POST", body }
      )
      return response.hostedpage
    },
    { invalidate: [] }
  )
}

/**
 * Only allow navigation to an absolute https URL.
 *
 * Blocks `javascript:` and `data:` targets, which would otherwise execute in
 * our own origin. `http:` is permitted on loopback so local development and
 * Zoho's sandbox still work.
 */
export function assertSafeCheckoutUrl(candidate: string): void {
  let url: URL
  try {
    url = new URL(candidate)
  } catch {
    throw new Error("Hosted page URL was not a valid absolute URL.")
  }
  const isLoopback =
    url.hostname === "localhost" ||
    url.hostname === "127.0.0.1" ||
    url.hostname === "[::1]"
  if (url.protocol !== "https:" && !(url.protocol === "http:" && isLoopback)) {
    throw new Error("Hosted page URL must use https.")
  }
}

export interface UseHostedPageCheckoutResult {
  /** Create the page and send the browser to it. */
  checkout: (params: CreateHostedPageParams) => Promise<void>
  isPending: boolean
  error: unknown
}

/**
 * One-call checkout: create the hosted page, then navigate to it.
 *
 * Throws if Zoho returns a page without a URL, rather than leaving the caller
 * to think a redirect happened when it did not.
 */
export function useHostedPageCheckout(): UseHostedPageCheckoutResult {
  const { mutate, isPending, error } = useCreateHostedPage()

  const checkout = useCallback(
    async (params: CreateHostedPageParams) => {
      const page = await mutate(params)
      if (!page.url) {
        throw new Error("Zoho did not return a hosted page URL.")
      }
      // Defence in depth: this URL comes from our backend, but navigating to
      // an unvalidated string is how a compromised or misconfigured response
      // turns into `javascript:` execution on our own origin.
      assertSafeCheckoutUrl(page.url)
      window.location.assign(page.url)
    },
    [mutate]
  )

  return { checkout, isPending, error }
}

/**
 * Read a hosted page's outcome after the customer is redirected back.
 *
 * Check `data?.status === "success"` before granting anything. Landing on the
 * return URL is not proof of payment - it can be visited directly.
 */
export function useHostedPageResult(
  hostedPageId: string | null | undefined,
  options: UseBillingQueryOptions = {}
): BillingQueryResult<ZohoHostedPage> {
  return useBillingQuery<{ hostedpage: ZohoHostedPage }, ZohoHostedPage>(
    hostedPageId ? `/hosted-pages/${encodeURIComponent(hostedPageId)}` : null,
    // Always hit the network: a cached "created" would read as a failed
    // checkout when the payment has since gone through.
    { staleTimeMs: 0, ...options, select: (response) => response.hostedpage }
  )
}
