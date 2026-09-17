/** Presentation helpers for subscription state. */

import type { ZohoSubscription } from "@dipakparmar/zoho-billing/types"

/**
 * Statuses under which the customer should still have access.
 *
 * `non_renewing` is included on purpose: the subscription is cancelled but the
 * paid term has not ended, so cutting access off now would be taking back time
 * the customer already paid for. `dunning` is included too - collection is
 * retrying, and locking someone out mid-retry churns customers whose card just
 * needed a nudge.
 */
const ENTITLED_STATUSES = new Set([
  "live",
  "trial",
  "non_renewing",
  "dunning",
  "future",
])

/** True when the subscription should currently grant access. */
export function isSubscriptionEntitled(
  subscription: Pick<ZohoSubscription, "status"> | null | undefined
): boolean {
  if (!subscription?.status) return false
  return ENTITLED_STATUSES.has(subscription.status)
}

/** True when billing needs the customer's attention (failed or missed payment). */
export function needsPaymentAttention(
  subscription: Pick<ZohoSubscription, "status"> | null | undefined
): boolean {
  return subscription?.status === "dunning" || subscription?.status === "unpaid"
}

/** True when cancelled but still inside the paid term. */
export function isCancelledAtPeriodEnd(
  subscription: Pick<ZohoSubscription, "status"> | null | undefined
): boolean {
  return subscription?.status === "non_renewing"
}

/** Human-readable label for a Zoho subscription status. */
export function formatSubscriptionStatus(status: string | undefined): string {
  if (!status) return "Unknown"
  const labels: Record<string, string> = {
    live: "Active",
    trial: "Trial",
    dunning: "Payment failed",
    unpaid: "Unpaid",
    non_renewing: "Cancels at period end",
    cancelled: "Cancelled",
    cancelled_from_dunning: "Cancelled (payment failed)",
    creation_failed: "Setup failed",
    expired: "Expired",
    trial_expired: "Trial expired",
    future: "Scheduled",
    paused: "Paused",
  }
  return labels[status] ?? status.replaceAll("_", " ")
}

/**
 * Format a Zoho amount for display.
 *
 * Zoho returns the amount as a plain number in major units (50 means $50.00),
 * not in cents the way Stripe does - passing it straight to a cents-based
 * formatter would show the price 100x too small.
 */
export function formatAmount(
  amount: number | undefined,
  currencyCode = "USD",
  locale?: string
): string {
  if (amount === undefined || Number.isNaN(amount)) return ""
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
  }).format(amount)
}

/** Format a Zoho `yyyy-mm-dd` date for display, tolerating empty strings. */
export function formatBillingDate(
  date: string | undefined,
  locale?: string,
  options: Intl.DateTimeFormatOptions = { dateStyle: "medium" }
): string {
  if (!date) return ""
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return date
  return new Intl.DateTimeFormat(locale, options).format(parsed)
}
