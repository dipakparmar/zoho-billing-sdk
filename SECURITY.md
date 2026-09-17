# Security

## Reporting a vulnerability

Please report security issues privately through
[GitHub Security Advisories](https://github.com/dipakparmar/zoho-billing-sdk/security/advisories/new)
rather than a public issue.

## Threat model

Two properties of the Zoho Billing API drive the design of this SDK, and both
are easy to get wrong in an integration.

### 1. Much of the request body is pricing input

Zoho's subscription API does not just select _what_ to buy - it also accepts
_what it costs_. Per Zoho's own specification:

- `plan.price` - "If a value is provided here, the plan's price for this
  subscription will be changed to the given value."
- `plan.setup_fee`, `plan.trial_days` - override the catalogue values.
- `plan.exclude_trial`, `plan.exclude_setup_fee`, `plan.billing_cycles`
- `addons[].price` - overrides the per-unit addon price.
- `exchange_rate` - scales the charged amount.
- `customer_id` **on update** - reassigns the subscription to another customer.

Forwarding a browser-supplied body to Zoho therefore lets a caller set their
own price, grant themselves an unlimited trial, skip the setup fee, or move a
subscription between accounts.

The `security` module implements deny-by-default allowlists for this. Only
`plan_code`, `addon_code`, `quantity`, `coupon_code`, and `end_of_term`
survive; everything that decides cost is re-derived from your Zoho catalogue.
Fields Zoho adds in future are dropped automatically rather than becoming new
injection points.

**If you build your own endpoint instead of using `createZohoBillingHandler`,
use these helpers.** Never spread a client body into a Zoho call.

### 2. Zoho does not sign webhooks

Unlike Stripe's `Stripe-Signature` HMAC, Zoho only supports HTTP Basic auth,
custom headers, or query parameters on the webhook URL. Authenticity rests on a
shared secret, which proves the caller knows the secret but **not** that the
body is unmodified.

Consequences:

- Serve the endpoint over HTTPS only; the secret travels in clear text.
- Treat payloads as _notifications_, not truth. For anything that grants access
  or moves money, re-fetch the resource from the API by ID.
- Delivery is best-effort with no replay. Poll `events.list()` to backfill.

## Other measures

- Ownership is verified **before** any mutation, not after, and a mismatch
  returns 404 rather than 403 so it cannot be used to probe for valid IDs.
- Redirect targets are validated against an origin allowlist; `javascript:`
  and `data:` URLs are rejected. An unchecked post-checkout redirect is an
  open redirect carrying your brand's trust.
- `quantity` is bounded and must be a positive integer - a negative quantity
  produces a credit.
- Webhook secrets are compared in constant time.
- Billing responses are `Cache-Control: no-store`.
- Upstream Zoho error prose is hidden from clients by default.
