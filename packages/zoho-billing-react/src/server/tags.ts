/**
 * Cache tag construction.
 *
 * These live in one module on purpose. Tag-based invalidation fails *silently*
 * when the tag passed to `revalidateTag`/`updateTag` does not exactly match
 * the one passed to `cacheTag`: no type error, no runtime error, mutations
 * just stay invisible until the cache expires on its own. Reconstructing a
 * "equivalent-looking" tag at the call site is how that happens, so both sides
 * call the same builders here and can never drift.
 */

const PREFIX = "zoho-billing"

export const zohoBillingTags = {
  /** Every cached entry for one customer. Invalidate on any change. */
  customer(customerId: string): string {
    return `${PREFIX}:customer:${customerId}`
  },
  /** A customer's subscription list. */
  subscriptions(customerId: string): string {
    return `${PREFIX}:subscriptions:${customerId}`
  },
  /** One subscription. */
  subscription(subscriptionId: string): string {
    return `${PREFIX}:subscription:${subscriptionId}`
  },
  /** A customer's invoices. */
  invoices(customerId: string): string {
    return `${PREFIX}:invoices:${customerId}`
  },
  /** The shared plan catalogue, which is not customer-scoped. */
  plans(): string {
    return `${PREFIX}:plans`
  },
} as const

/**
 * Every tag touched by a subscription write.
 *
 * Mutations should invalidate this whole set rather than picking tags by hand:
 * a plan change alters the subscription, the customer's list, and the invoices
 * raised by the proration, and missing one leaves stale data on screen.
 */
export function subscriptionWriteTags(
  customerId: string,
  subscriptionId?: string
): string[] {
  const tags = [
    zohoBillingTags.customer(customerId),
    zohoBillingTags.subscriptions(customerId),
    zohoBillingTags.invoices(customerId),
  ]
  if (subscriptionId) tags.push(zohoBillingTags.subscription(subscriptionId))
  return tags
}
