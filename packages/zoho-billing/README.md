# @dipakparmar/zoho-billing

A Stripe-style Node SDK for the [Zoho Billing](https://www.zoho.com/billing/api/v1/) (formerly Zoho Subscriptions) v1 API.

Zero runtime dependencies. Uses global `fetch`, so it runs on Node 18+, Bun, Deno, and edge runtimes.

Built from Zoho's official OpenAPI documents, so paths, parameters, and event types match the published spec.

## Install

The package is workspace-internal:

```json
{ "dependencies": { "@dipakparmar/zoho-billing": "workspace:*" } }
```

## Quick start

```ts
import { ZohoBilling } from "@dipakparmar/zoho-billing"

const zoho = new ZohoBilling({
  organizationId: process.env.ZOHO_ORGANIZATION_ID!,
  region: "us",
  credentials: {
    clientId: process.env.ZOHO_CLIENT_ID!,
    clientSecret: process.env.ZOHO_CLIENT_SECRET!,
    refreshToken: process.env.ZOHO_REFRESH_TOKEN!,
  },
})

const subscription = await zoho.subscriptions.create({
  customer_id: "903000000021976",
  plan: { plan_code: "pro-monthly", quantity: 1 },
  auto_collect: true,
})
```

Or from environment variables:

```ts
import { createZohoBillingFromEnv } from "@dipakparmar/zoho-billing"

const zoho = createZohoBillingFromEnv()
```

Reads `ZOHO_ORGANIZATION_ID`, `ZOHO_CLIENT_ID`, `ZOHO_CLIENT_SECRET`, `ZOHO_REFRESH_TOKEN`, and optionally `ZOHO_REGION`.

## Getting credentials

1. Create a **Self Client** at [api-console.zoho.com](https://api-console.zoho.com) in the same data centre as your Zoho Billing org.
2. Generate a grant token with scopes such as `ZohoSubscriptions.subscriptions.ALL`, `ZohoSubscriptions.customers.ALL`, `ZohoSubscriptions.plans.READ`, `ZohoSubscriptions.invoices.ALL`, `ZohoSubscriptions.hostedpages.ALL`.
3. Exchange it for a refresh token against your region's accounts host (`https://accounts.zoho.com/oauth/v2/token` for US).
4. Find your organization ID:

```ts
const [org] = await zoho.organizations.list()
console.log(org?.organization_id)
```

### Regions

A token minted in one data centre is not valid in another, and each has its own hosts. Set `region` to match where the org actually lives, otherwise you get a confusing 401.

| Region | API host              | Accounts host           |
| ------ | --------------------- | ----------------------- |
| `us`   | `www.zohoapis.com`    | `accounts.zoho.com`     |
| `eu`   | `www.zohoapis.eu`     | `accounts.zoho.eu`      |
| `in`   | `www.zohoapis.in`     | `accounts.zoho.in`      |
| `au`   | `www.zohoapis.com.au` | `accounts.zoho.com.au`  |
| `jp`   | `www.zohoapis.jp`     | `accounts.zoho.jp`      |
| `uk`   | `www.zohoapis.uk`     | `accounts.zoho.uk`      |
| `ca`   | `www.zohoapis.ca`     | `accounts.zohocloud.ca` |
| `sa`   | `www.zohoapis.sa`     | `accounts.zoho.sa`      |
| `cn`   | `www.zohoapis.com.cn` | `accounts.zoho.com.cn`  |

## Resources

| Namespace                                                                           | Covers                                                                                                                                                                         |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `zoho.subscriptions`                                                                | All 32 subscription endpoints: create, update, cancel, reactivate, pause, resume, postpone, extend, coupons, cards, charges, addons, notes, scheduled changes, metered billing |
| `zoho.customers`                                                                    | Customers, contact persons, cards, transactions, reference lookup                                                                                                              |
| `zoho.plans` / `zoho.addons` / `zoho.coupons` / `zoho.products` / `zoho.pricebooks` | Catalogue                                                                                                                                                                      |
| `zoho.invoices`                                                                     | Retrieve, list, collect, email, void, write off, usage line items                                                                                                              |
| `zoho.payments` / `zoho.creditNotes` / `zoho.refunds`                               | Money movement                                                                                                                                                                 |
| `zoho.hostedPages`                                                                  | Zoho-hosted checkout (the Stripe Checkout analogue)                                                                                                                            |
| `zoho.events`                                                                       | The webhook events feed                                                                                                                                                        |
| `zoho.organizations`                                                                | Org discovery                                                                                                                                                                  |

Anything not wrapped is reachable through the underlying client:

```ts
const result = await zoho.client.request<{ taxes: unknown[] }>(
  "/settings/taxes"
)
```

## Subscription lifecycle

```ts
// Cancel at the end of the paid term (default) - the subscription becomes
// `non_renewing` and the customer keeps access until `current_term_ends_at`.
await zoho.subscriptions.cancel(id)

// Cancel immediately.
await zoho.subscriptions.cancel(id, { cancel_at_end: false })

await zoho.subscriptions.reactivate(id)
await zoho.subscriptions.pause(id, { resume_date: "2026-09-01" })

// Upgrade. Set end_of_term explicitly: false applies now and prorates, true
// defers to renewal. Omitting it falls back to the org's default setting.
await zoho.subscriptions.update(id, {
  plan: { plan_code: "enterprise-monthly" },
  end_of_term: false,
  prorate: true,
})
```

## Pagination

Zoho pages at 200 records max. Three ways to consume a list:

```ts
// One page.
const { subscriptions, response } = await zoho.subscriptions.list({
  per_page: 50,
})
response.page_context?.has_more_page

// Every page, buffered.
const all = await zoho.subscriptions.listAll({
  filter_by: "SubscriptionStatus.ACTIVE",
})

// Streamed, for large accounts.
for await (const subscription of zoho.subscriptions.iterate()) {
  console.log(subscription.subscription_id)
}
```

## Errors

Zoho signals failure two ways: a non-2xx status, and a non-zero `code` in an otherwise-200 body. Both are normalised into one hierarchy.

```ts
import {
  ZohoBillingAuthError,
  ZohoBillingNotFoundError,
  ZohoBillingRateLimitError,
} from "@dipakparmar/zoho-billing/errors"

try {
  await zoho.subscriptions.retrieve(id)
} catch (error) {
  if (error instanceof ZohoBillingNotFoundError) return null
  if (error instanceof ZohoBillingRateLimitError) {
    // Already retried internally; this means retries were exhausted.
  }
  throw error
}
```

`ZohoBillingError` exposes `code` (Zoho's numeric code), `status`, `body`, and `request`.

### Retries

Rate limits (429), 5xx, and connection failures are retried with exponential backoff and full jitter, honouring `Retry-After`. Jitter matters because Zoho's limit of 100 requests/minute is **per organization**: without it, parallel workers throttled together retry in lockstep and re-trip the limit.

A 401 additionally triggers one forced token refresh and retry, covering tokens revoked out from under a warm cache.

## Token handling

Access tokens last one hour and are cached in memory, refreshed two minutes before expiry. Concurrent refreshes collapse into a single request.

On serverless, every cold start re-refreshes. Supply a shared store:

```ts
const zoho = new ZohoBilling({
  // ...
  tokenStore: {
    async get(key) {
      const raw = await redis.get(key)
      return raw ? JSON.parse(raw) : null
    },
    async set(key, token) {
      await redis.set(key, JSON.stringify(token), { EX: 3600 })
    },
    async delete(key) {
      await redis.del(key)
    },
  },
})
```

## Webhooks

> **Zoho does not sign webhook payloads.** Unlike Stripe's `Stripe-Signature` HMAC, Zoho only lets you attach Basic auth, custom headers, or query parameters to the webhook URL. Authenticity therefore rests on a shared secret, which proves the caller knows the secret but _not_ that the body is unmodified.

Consequences worth designing around:

- Serve the endpoint over HTTPS only; the secret travels in clear text.
- Treat the payload as a **notification, not as truth**. For anything that grants access or moves money, re-fetch the resource from the API using the ID in the payload.
- Webhook delivery is best-effort with no replay. Poll `zoho.events.list()` on a schedule to backfill anything missed while your endpoint was down.

```ts
import {
  constructEvent,
  getEventResource,
} from "@dipakparmar/zoho-billing/webhooks"

export async function POST(request: Request) {
  const body = await request.text()

  let event
  try {
    event = constructEvent({
      payload: body,
      providedSecret: request.headers.get("x-zoho-webhook-secret"),
      secret: process.env.ZOHO_WEBHOOK_SECRET!,
    })
  } catch {
    return new Response("unauthorized", { status: 401 })
  }

  switch (event.event_type) {
    case "subscription_cancelled": {
      const id = getEventResource(event, "subscription")?.subscription_id
      // Re-fetch rather than trusting the payload.
      const subscription = await zoho.subscriptions.retrieve(id!)
      await revokeAccess(subscription)
      break
    }
    case "payment_declined":
      await notifyBillingFailure(event)
      break
  }

  return new Response("ok")
}
```

All 39 documented event types are typed as `ZohoEventType`.

## Backend handler for the React package

`@dipakparmar/zoho-billing-react` calls your app, never Zoho directly. Mount the handler it expects:

```ts
// app/api/billing/[...route]/route.ts
import { createZohoBillingHandler } from "@dipakparmar/zoho-billing/handler"

const handler = createZohoBillingHandler({
  zoho,
  basePath: "/api/billing",
  authorize: async (request) => {
    const session = await auth.api.getSession({ headers: request.headers })
    if (!session?.user.zohoCustomerId) return null
    return { customerId: session.user.zohoCustomerId }
  },
  // Restrict self-serve checkout to what you actually sell.
  allowedPlanCodes: ["starter-monthly", "pro-monthly", "pro-yearly"],
  allowedAddonCodes: ["extra-seats"],
  allowedRedirectOrigins: ["https://app.example.com"],
})

export { handler as GET, handler as POST, handler as PUT }
```

### Security model

Everything past `authorize` is treated as hostile input.

**Tenant isolation.** Lists are forced to the session's `customer_id`; one in
the query string is ignored. Single reads and **every mutation** verify
ownership _before_ calling Zoho, so a mismatched caller cannot cancel someone
else's subscription. A mismatch returns 404, not 403, so it does not confirm
the ID exists.

**No body is forwarded to Zoho.** This is the part that matters most, and it is
specific to Zoho: much of the subscription request body is _pricing input_, not
just resource selection. Per Zoho's own spec, `plan.price` "will be changed to
the given value" if supplied; `plan.setup_fee`, `plan.trial_days`,
`exclude_setup_fee`, `exclude_trial`, and `billing_cycles` override the
catalogue; `addons[].price` overrides addon pricing; `exchange_rate` scales the
charged amount; and `customer_id` **on update** reassigns the subscription to a
different customer.

Forwarding a client body therefore lets a caller set their own price, grant
themselves an unlimited trial, or move a subscription between accounts. So
bodies go through the deny-by-default allowlists in
`@dipakparmar/zoho-billing/security`: only `plan_code`, `addon_code`, `quantity`,
`coupon_code`, and `end_of_term` survive, and everything that decides _what it
costs_ is re-derived from your Zoho catalogue. Fields Zoho adds in future are
dropped automatically rather than silently becoming new injection points.

**Redirect validation.** `redirect_url` is where Zoho sends the customer after
checkout, so an unchecked value is an open redirect wearing your brand. Only
absolute `https:` URLs on an allowed origin pass (`http:` on loopback for local
dev). Defaults to the request's own origin; set `allowedRedirectOrigins` if
checkout returns elsewhere.

**Other measures.** `quantity` must be a positive integer under
`MAX_QUANTITY` (a negative one produces a credit). Plan and addon codes can be
restricted with `allowedPlanCodes` / `allowedAddonCodes`. Responses are
`Cache-Control: no-store`. Zoho's own error prose is hidden by default
(`exposeUpstreamErrors`) since its messages are written for the account holder.

You can use these directly if you build your own endpoint:

```ts
import {
  sanitizeSubscriptionUpdate,
  assertCatalogAllowed,
  resolveRedirectUrl,
  isOwnedByCustomer,
} from "@dipakparmar/zoho-billing/security"
```

## Hosted pages (checkout)

```ts
const page = await zoho.hostedPages.createSubscriptionPage({
  customer_id: customerId,
  plan: { plan_code: "pro-monthly" },
  redirect_url: "https://app.example.com/billing/return",
})
// Redirect the customer to page.url, then on return:
const result = await zoho.hostedPages.retrieve(hostedPageId)
if (result.status === "success") {
  /* grant access */
}
```

Always verify `status` server-side. Landing on the return URL proves nothing; anyone can visit it directly.

## API reference

Generated from source by TypeDoc into [`docs/`](docs/README.md):

| Module                         | Covers                                                    |
| ------------------------------ | --------------------------------------------------------- |
| [`index`](docs/index.md)       | `ZohoBilling`, resource namespaces, client, token manager |
| [`security`](docs/security.md) | Input sanitisation for the browser trust boundary         |
| [`handler`](docs/handler.md)   | `createZohoBillingHandler`                                |
| [`webhooks`](docs/webhooks.md) | Event parsing and verification                            |
| [`errors`](docs/errors.md)     | Error hierarchy                                           |
| [`types`](docs/types.md)       | Every Zoho resource type                                  |

```bash
bun run docs        # regenerate
bun run docs:check  # fail if the committed output is stale
```

Regenerate whenever you change a public signature or a doc comment. The output
is committed, so `docs:check` catches drift in review - generated docs that
have silently diverged from the source are worse than none, because they get
trusted.

This reference is the _what_. The narrative sections above are the _why_, and
are hand-written: TypeDoc can tell you `sanitizeSubscriptionUpdate` takes an
`unknown`, not why it drops `customer_id`.

## Testing

Inject a stub transport:

```ts
const zoho = new ZohoBilling({
  organizationId: "org-1",
  credentials: { accessToken: "test" },
  apiBaseUrl: "https://api.test",
  fetch: myStubFetch,
})
```

```bash
bun test
```

## Known gaps

- Modules outside core billing (projects, tasks, time entries, expenses, custom modules, quotes, items) are not wrapped. Reach them via `zoho.client.request()`.
- Bulk operations (`/subscriptions/bulkcancel`, `/subscriptions/compute`) are not wrapped.
- `ZohoRegion` includes `uk`; confirm availability for your account before using it.
