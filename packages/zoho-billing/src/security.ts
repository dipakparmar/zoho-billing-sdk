/**
 * Input sanitisation for the browser trust boundary.
 *
 * Everything here exists because of one fact about the Zoho Billing API: a
 * large part of the subscription request body is *pricing input*, not just
 * resource selection. Per Zoho's own spec:
 *
 * - `plan.price` - "If a value is provided here, the plan's price for this
 *   subscription will be changed to the given value."
 * - `plan.setup_fee`, `plan.trial_days` - override the catalogue values.
 * - `plan.exclude_trial`, `plan.exclude_setup_fee`, `plan.billing_cycles`
 * - `addons[].price` - overrides the per-unit addon price.
 * - `exchange_rate` - scales the charged amount.
 * - `customer_id` on **update** - reassigns the subscription to a different
 *   customer.
 *
 * So forwarding a client-supplied body to Zoho means letting a caller set
 * their own price, grant themselves an unlimited trial, skip the setup fee, or
 * move a subscription between customers. Passing the body straight through is
 * the single most dangerous thing an integration can do.
 *
 * The functions below are therefore **deny-by-default allowlists**: only the
 * handful of fields that genuinely select *what* to buy survive, and
 * everything that decides *what it costs* is dropped and re-derived from your
 * Zoho catalogue. New fields Zoho adds later are dropped automatically rather
 * than silently becoming a new injection point.
 */

import { ZohoBillingError } from "./errors"

/**
 * Raised when client input is rejected at the trust boundary.
 *
 * `httpStatus` distinguishes malformed input (400) from input that is
 * well-formed but not permitted for this caller (403), so the handler does not
 * have to pattern-match on messages.
 */
export class ZohoBillingInputError extends ZohoBillingError {
  readonly httpStatus: number

  constructor(message: string, httpStatus = 400) {
    super(message)
    this.name = "ZohoBillingInputError"
    this.httpStatus = httpStatus
  }
}

/**
 * Upper bound on `quantity`. Zoho accepts enormous integers, which lets a
 * caller raise an absurd invoice or push a large payload through your account.
 */
export const MAX_QUANTITY = 1000

/** Cap on free-text codes, so a caller cannot push a huge string upstream. */
const MAX_CODE_LENGTH = 100

export interface SafePlanInput {
  plan_code: string
  quantity?: number
}

export interface SafeAddonInput {
  addon_code: string
  quantity?: number
}

function asString(value: unknown, field: string): string {
  if (typeof value !== "string" || value.length === 0) {
    throw new ZohoBillingInputError(`${field} must be a non-empty string.`)
  }
  if (value.length > MAX_CODE_LENGTH) {
    throw new ZohoBillingInputError(`${field} is too long.`)
  }
  return value
}

/**
 * Validate a quantity. Rejects non-integers, zero, negatives, and anything
 * over `MAX_QUANTITY`. A negative quantity is worth rejecting explicitly: it
 * can produce a negative line total, i.e. a credit.
 */
function asQuantity(value: unknown): number | undefined {
  if (value === undefined || value === null) return undefined
  const quantity = typeof value === "number" ? value : Number(value)
  if (!Number.isSafeInteger(quantity) || quantity < 1) {
    throw new ZohoBillingInputError("quantity must be a positive integer.")
  }
  if (quantity > MAX_QUANTITY) {
    throw new ZohoBillingInputError(`quantity may not exceed ${MAX_QUANTITY}.`)
  }
  return quantity
}

/**
 * Reduce a client-supplied plan object to `plan_code` plus an optional
 * `quantity`.
 *
 * Price, setup fee, trial days, discounts, tax IDs, and billing cycles are all
 * dropped: Zoho re-derives them from the catalogue when they are absent, which
 * is exactly what we want.
 */
export function sanitizePlanInput(input: unknown): SafePlanInput {
  if (!input || typeof input !== "object") {
    throw new ZohoBillingInputError("plan is required.")
  }
  const source = input as Record<string, unknown>
  const plan: SafePlanInput = {
    plan_code: asString(source.plan_code, "plan.plan_code"),
  }
  const quantity = asQuantity(source.quantity)
  if (quantity !== undefined) plan.quantity = quantity
  return plan
}

/** Same treatment for addons, which carry their own `price` override. */
export function sanitizeAddonsInput(input: unknown): SafeAddonInput[] {
  if (input === undefined || input === null) return []
  if (!Array.isArray(input)) {
    throw new ZohoBillingInputError("addons must be an array.")
  }
  if (input.length > 50) {
    throw new ZohoBillingInputError("Too many addons.")
  }
  return input.map((entry) => {
    if (!entry || typeof entry !== "object") {
      throw new ZohoBillingInputError("Each addon must be an object.")
    }
    const source = entry as Record<string, unknown>
    const addon: SafeAddonInput = {
      addon_code: asString(source.addon_code, "addon.addon_code"),
    }
    const quantity = asQuantity(source.quantity)
    if (quantity !== undefined) addon.quantity = quantity
    return addon
  })
}

/** Coupon codes are validated by Zoho; we only bound the shape. */
export function sanitizeCouponCode(input: unknown): string | undefined {
  if (input === undefined || input === null || input === "") return undefined
  return asString(input, "coupon_code")
}

export interface CatalogAllowlist {
  /** Plan codes a caller may select. Omit to allow the whole catalogue. */
  allowedPlanCodes?: string[]
  /** Addon codes a caller may select. Omit to allow all addons. */
  allowedAddonCodes?: string[]
}

/**
 * Enforce catalogue allowlists.
 *
 * Without this, a caller can name any code in your Zoho org, including
 * internal, discounted, or staff plans that were never meant to be sold
 * self-serve.
 */
export function assertCatalogAllowed(
  { plan, addons }: { plan?: SafePlanInput; addons?: SafeAddonInput[] },
  allowlist: CatalogAllowlist
): void {
  const { allowedPlanCodes, allowedAddonCodes } = allowlist
  if (plan && allowedPlanCodes && !allowedPlanCodes.includes(plan.plan_code)) {
    throw new ZohoBillingInputError("plan_not_allowed", 403)
  }
  if (addons && allowedAddonCodes) {
    for (const addon of addons) {
      if (!allowedAddonCodes.includes(addon.addon_code)) {
        throw new ZohoBillingInputError("addon_not_allowed", 403)
      }
    }
  }
}

/**
 * Fields of an update a caller is trusted to set.
 *
 * The index signature exists only to stay assignable to the open-ended
 * `UpdateSubscriptionParams`. Safety comes from `sanitizeSubscriptionUpdate`
 * constructing these objects field by field, never from the type.
 */
export interface SafeSubscriptionUpdate {
  plan?: SafePlanInput
  addons?: SafeAddonInput[]
  coupon_code?: string
  end_of_term?: boolean
  [key: string]: unknown
}

/**
 * Reduce a client-supplied subscription update to the safe subset.
 *
 * `customer_id` is the one to note: Zoho's update endpoint accepts it, so a
 * forwarded body would let a caller *reassign a subscription to another
 * customer*. It is dropped here, along with all the pricing fields.
 */
export function sanitizeSubscriptionUpdate(
  input: unknown
): SafeSubscriptionUpdate {
  const source = (input ?? {}) as Record<string, unknown>
  const update: SafeSubscriptionUpdate = {}

  if (source.plan !== undefined) update.plan = sanitizePlanInput(source.plan)
  if (source.addons !== undefined) {
    update.addons = sanitizeAddonsInput(source.addons)
  }
  const coupon = sanitizeCouponCode(source.coupon_code)
  if (coupon) update.coupon_code = coupon
  // A boolean timing switch is safe: it decides when a change applies, not
  // what it costs. Anything non-boolean is ignored rather than coerced.
  if (typeof source.end_of_term === "boolean") {
    update.end_of_term = source.end_of_term
  }

  if (update.plan === undefined && update.addons === undefined && !coupon) {
    throw new ZohoBillingInputError("Nothing to update.")
  }
  return update
}

export interface RedirectUrlOptions {
  /**
   * Origins a redirect may point at. When omitted, only the origin the request
   * itself arrived on is accepted.
   */
  allowedOrigins?: string[]
  /** Origin of the incoming request, used as the default allowlist. */
  requestOrigin: string
}

/**
 * Validate a post-checkout redirect target.
 *
 * Zoho sends the customer to this URL after the hosted page, so an unchecked
 * value is a textbook open redirect: an attacker sends a victim through a
 * legitimate-looking checkout on your domain that lands on their phishing page
 * with the trust of your brand behind it.
 *
 * Only absolute `https:` URLs on an allowed origin pass. `http:` is permitted
 * for loopback so local development still works. Returns `undefined` when no
 * redirect was requested.
 */
export function resolveRedirectUrl(
  candidate: unknown,
  { allowedOrigins, requestOrigin }: RedirectUrlOptions
): string | undefined {
  if (candidate === undefined || candidate === null || candidate === "") {
    return undefined
  }
  if (typeof candidate !== "string") {
    throw new ZohoBillingInputError("redirect_url must be a string.")
  }

  let url: URL
  try {
    // Parsed as absolute only. A relative value would resolve against
    // whatever base we picked, which is not something to guess at here.
    url = new URL(candidate)
  } catch {
    throw new ZohoBillingInputError("redirect_url must be an absolute URL.")
  }

  const isLoopback =
    url.hostname === "localhost" ||
    url.hostname === "127.0.0.1" ||
    url.hostname === "[::1]"
  if (url.protocol !== "https:" && !(url.protocol === "http:" && isLoopback)) {
    // Blocks javascript:, data:, and plain http: on public hosts.
    throw new ZohoBillingInputError("redirect_url must use https.")
  }

  const allowed = allowedOrigins ?? [requestOrigin]
  if (!allowed.includes(url.origin)) {
    throw new ZohoBillingInputError("redirect_url origin is not allowed.")
  }

  return url.toString()
}

/**
 * Confirm a subscription belongs to a customer.
 *
 * Zoho returns the owner in two shapes depending on the endpoint - nested
 * under `customer` on a single read, flattened to `customer_id` on lists - so
 * both are checked. Comparing only one would let the other shape through as an
 * accidental `undefined === undefined` match, which is why the customer ID is
 * required to be a non-empty string.
 */
export function isOwnedByCustomer(
  subscription: { customer_id?: string; customer?: { customer_id?: string } },
  customerId: string
): boolean {
  if (!customerId) return false
  return (
    subscription.customer?.customer_id === customerId ||
    subscription.customer_id === customerId
  )
}
