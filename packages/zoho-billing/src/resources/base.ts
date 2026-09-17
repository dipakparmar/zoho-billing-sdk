import type { ZohoBillingClient } from "../client"

/** Shared plumbing for resource namespaces. */
export abstract class ZohoResource {
  protected readonly client: ZohoBillingClient

  constructor(client: ZohoBillingClient) {
    this.client = client
  }
}

/**
 * Encode a path segment supplied by a caller.
 *
 * Codes like `plan_code` and `coupon_code` are user-authored and routinely
 * contain slashes, spaces, or `#`, any of which would silently reshape the URL
 * if interpolated raw.
 */
export function seg(value: string | number): string {
  return encodeURIComponent(String(value))
}
