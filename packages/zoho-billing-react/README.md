# @dipakparmar/zoho-billing-react

React hooks and headless components for Zoho Billing subscriptions.

Four entry points:

| Entry                                        | Environment     | Needs                                               |
| -------------------------------------------- | --------------- | --------------------------------------------------- |
| `@dipakparmar/zoho-billing-react`            | Client          | React 18+                                           |
| `@dipakparmar/zoho-billing-react/forms`      | Client          | React 19 (`useActionState`, `useOptimistic`, `use`) |
| `@dipakparmar/zoho-billing-react/server`     | **Server only** | React 19, Zoho credentials                          |
| `@dipakparmar/zoho-billing-react/components` | Client          | React 18+                                           |

No data-fetching library required, so it drops into an app whether or not it already uses TanStack Query or SWR.

> **Never import `/server` from a client component**, and never re-export it from the client barrel. It reaches `node:crypto` via the Zoho SDK, and crossing the `"use client"` boundary drags Node builtins into the browser bundle - which passes `dev`, typecheck, and unit tests, then fails only in a production build with a cryptic `Module not found` pointing somewhere unrelated. A test in this package bundles every client entry for the browser and asserts no Node builtins appear, so a regression fails fast.

## Architecture

These hooks **never call Zoho directly**, for two reasons: Zoho's API requires a client secret and refresh token, which cannot go in a browser bundle, and Zoho sends no CORS headers for browser origins.

```
React hooks  ->  your backend  ->  Zoho Billing API
                 (createZohoBillingHandler)
```

Mount `createZohoBillingHandler` from `@dipakparmar/zoho-billing/handler`, then point the provider at it. That handler is also where tenant isolation is enforced.

## Setup

```tsx
import { ZohoBillingProvider } from "@dipakparmar/zoho-billing-react"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ZohoBillingProvider baseUrl="/api/billing">{children}</ZohoBillingProvider>
  )
}
```

Options: `baseUrl` (default `/api/billing`), `headers` (object or function, resolved per request so rotating CSRF tokens work), `credentials` (default `same-origin`), `fetcher` for a custom transport, and `store` to share a cache across remounts.

## Queries

```tsx
import {
  useCustomer,
  useInvoices,
  usePlans,
  useSubscription,
  useSubscriptions,
} from "@dipakparmar/zoho-billing-react"

const { data: plans, isLoading } = usePlans()
const { data: subscriptions, refetch } = useSubscriptions()
const { data: subscription } = useSubscription(subscriptionId) // null/undefined defers
const { data: invoices } = useInvoices({ subscriptionId })
const { data: customer } = useCustomer()
```

Every query returns `{ data, error, isLoading, isRefreshing, refetch }`. `isRefreshing` distinguishes a background refresh (stale data still on screen) from a first load, so the UI does not blank out on revalidation.

Results are cached by URL and shared across components, concurrent requests for the same key are deduped, and reads go through `useSyncExternalStore` so they are concurrent-rendering safe. `staleTimeMs` defaults to 30s (5 minutes for `usePlans`, since a catalogue rarely changes).

## Mutations

```tsx
import {
  useCancelSubscription,
  usePauseSubscription,
  useReactivateSubscription,
  useResumeSubscription,
  useUpdateSubscription,
} from "@dipakparmar/zoho-billing-react"

function CancelButton({ subscriptionId }: { subscriptionId: string }) {
  const { mutate: cancel, isPending, error } = useCancelSubscription()

  return (
    <>
      <button disabled={isPending} onClick={() => void cancel(subscriptionId)}>
        {isPending ? "Cancelling..." : "Cancel at period end"}
      </button>
      {/* Immediate: cancel(subscriptionId, { cancelAtEnd: false }) */}
      {error ? <p role="alert">Could not cancel. Please try again.</p> : null}
    </>
  )
}
```

`mutate` both rethrows and exposes `error` as state, so you can `try`/`catch` or render. Subscription and invoice caches are invalidated on success, before `isPending` flips, so anything refetching sees the cleared cache rather than stale data. State updates are skipped if the component unmounted mid-flight, which is common given how slow billing round-trips are.

## Checkout (hosted pages)

Zoho's hosted pages are the Stripe Checkout analogue.

```tsx
import {
  SubscribeButton,
  useHostedPageCheckout,
} from "@dipakparmar/zoho-billing-react"

// Headless component:
;<SubscribeButton
  planCode="pro-monthly"
  redirectUrl="https://app.example.com/billing/return"
  className="btn btn-primary"
>
  Upgrade to Pro
</SubscribeButton>

// Or drive it yourself:
const { checkout, isPending, error } = useHostedPageCheckout()
await checkout({
  kind: "new-subscription",
  plan: { plan_code: "pro-monthly" },
  redirect_url: window.location.origin + "/billing/return",
})
```

`customer_id` is never sent from the browser; the backend handler fills it in from the session, so a caller cannot open a checkout against another account.

`ManagePaymentMethodButton` opens the update-card page. Both components are unstyled and forward all button props.

### Verifying the outcome

```tsx
const { data: page } = useHostedPageResult(hostedPageId)

if (page?.status === "success") {
  // Safe to reflect the new subscription in the UI.
}
```

Landing on the return URL is **not** proof of payment; it can be visited directly. Do the authoritative check server-side before granting access. This hook always bypasses the cache, since a stale `created` would read as a failed checkout after the payment went through.

## Server Components

`createZohoBillingServer` gives you RSC-safe readers. Reads are wrapped in
React's `cache()`, so a layout, a page, and three components that each need the
subscription list produce exactly one Zoho call per request. That matters here
because Zoho's rate limit is 100 requests/minute for the _whole organization_,
shared by every user.

```ts
// lib/billing-server.ts
import { createZohoBillingServer } from "@dipakparmar/zoho-billing-react/server"
import { cacheTag } from "next/cache"
import { headers } from "next/headers"

export const billing = createZohoBillingServer({
  zoho,
  resolveSession: async () => {
    const session = await auth.api.getSession({ headers: await headers() })
    return session?.user.zohoCustomerId
      ? { customerId: session.user.zohoCustomerId }
      : null
  },
  cache: { tag: cacheTag },
  allowedPlanCodes: ["pro-monthly", "pro-yearly"],
})
```

```tsx
// app/billing/page.tsx  (server component)
export default async function BillingPage() {
  const subscriptions = await billing.getSubscriptions()
  return <SubscriptionList subscriptions={subscriptions} />
}
```

No reader takes a customer ID as an argument - identity is always re-derived
from your session, so an RSC cannot render another tenant's billing by passing
the wrong variable. `getSubscription(id)` checks ownership itself and throws
`ZohoBillingNotVisibleError` for both "missing" and "someone else's", which is
what you map to `notFound()`.

### Streaming with `use()`

Start the request in the server component without awaiting it, then unwrap it
in a client component inside a Suspense boundary. The page shells out
immediately instead of blocking on a billing round-trip.

```tsx
// page.tsx (server)
export default function Page() {
  const promise = billing.getSubscriptions() // no await
  return (
    <Suspense fallback={<Skeleton />}>
      <SubscriptionList promise={promise} />
    </Suspense>
  )
}

// SubscriptionList.tsx (client)
;("use client")
import { useSubscriptionPromise } from "@dipakparmar/zoho-billing-react/forms"

export function SubscriptionList({ promise }) {
  const subscriptions = useSubscriptionPromise(promise)
}
```

The promise must be created during the _server_ render; one created in a client
render is new each time and suspends forever. Pair the Suspense boundary with
an error boundary, since a rejection propagates.

## Server Actions

The package ships action _factories_, not actions. A `"use server"` module
turns every export into a public, network-reachable endpoint, and Server
Actions carry no automatic authorization - so pre-made actions would be
endpoints in your app that this package defines and you cannot see. You mark
your own module and re-export, keeping the security boundary reviewable in your
codebase:

```ts
// app/billing/actions.ts
"use server"

import { createZohoBillingActions } from "@dipakparmar/zoho-billing-react/server"
import { revalidateTag } from "next/cache"

const actions = createZohoBillingActions({
  zoho,
  resolveSession: async () => {
    /* same as above */
  },
  revalidate: (tag) => revalidateTag(tag),
  allowedPlanCodes: ["pro-monthly", "pro-yearly"],
})

export const cancelSubscription = actions.cancelSubscription
export const changePlan = actions.updateSubscription
```

Every action re-resolves the session and re-checks ownership before mutating.
Action arguments come from the client and are exactly as trustworthy as a
request body, so `plan_code` and `quantity` go through the same
deny-by-default sanitisation as the HTTP handler - a `plan.price` smuggled in
here would otherwise be a free subscription.

Actions return a `{ status: "idle" | "success" | "error" }` union rather than
throwing, because an uncaught throw in a Server Action becomes an opaque
"an error occurred" in production. Error slugs are coarse and never contain
Zoho's own prose; `formatActionError` turns them into customer-facing copy.

### Cache invalidation

Tags come from `zohoBillingTags` and are applied by both the read and write
paths, so they cannot drift. This is deliberate: tag invalidation fails
_silently_ when the tag passed to `revalidateTag` does not exactly match the
one given to `cacheTag` - no type error, no runtime error, mutations just stay
invisible until natural expiry. Never hand-build a tag string; call the
builders.

## React 19 forms

```tsx
"use client"
import {
  CancelSubscriptionForm,
  ChangePlanForm,
  SubscriptionSubmitButton,
  useOptimisticSubscription,
} from "@dipakparmar/zoho-billing-react/forms"
import { cancelSubscription } from "@/app/billing/actions"

export function ManageSubscription({ subscription }) {
  const [optimistic, applyIntent] = useOptimisticSubscription(subscription)

  return (
    <>
      <StatusBadge status={optimistic?.status} />
      <CancelSubscriptionForm
        action={cancelSubscription}
        subscriptionId={subscription.subscription_id}
        cancelAtEnd
      />
    </>
  )
}
```

`SubscriptionSubmitButton` is a separate component on purpose: `useFormStatus`
reads the _parent_ form's state, so calling it in the component that renders
`<form>` always reports `pending: false` - the classic way to ship a
double-submittable billing button.

`useOptimisticSubscription` maps `cancel` to `non_renewing`, not `cancelled`,
since cancelling at period end leaves the customer the access they paid for.
React reverts the optimistic value automatically if the action fails, so there
is no rollback code to get wrong. It is presentation only; entitlement is still
decided server-side.

## Choosing an approach

| Situation                                    | Use                                   |
| -------------------------------------------- | ------------------------------------- |
| Server-rendered billing page in Next         | `/server` readers                     |
| Mutation in a Next app                       | `/server` action factories + `/forms` |
| Interactive client widget, or a non-Next app | client hooks + the HTTP handler       |
| Pricing table for anonymous visitors         | `getPlans()` from `/server`           |

The client hooks and the RSC/Action path are independent; use either or both.

## Display helpers

```tsx
import {
  formatAmount,
  formatBillingDate,
  formatSubscriptionStatus,
  isCancelledAtPeriodEnd,
  isSubscriptionEntitled,
  needsPaymentAttention,
} from "@dipakparmar/zoho-billing-react"

isSubscriptionEntitled(subscription) // should this user have access right now?
needsPaymentAttention(subscription) // dunning or unpaid
formatSubscriptionStatus("non_renewing") // "Cancels at period end"
formatAmount(50, "USD") // "$50.00"
```

`isSubscriptionEntitled` deliberately returns `true` for `non_renewing` (the customer paid for the current term) and `dunning` (collection is still retrying; locking someone out mid-retry churns customers whose card just needed a nudge).

`formatAmount` takes **major units**: Zoho's `amount: 50` means $50.00, unlike Stripe's cents.

These are presentation helpers. Enforce real entitlement on the server.

## API reference

Generated from source by TypeDoc into [`docs/`](docs/README.md), one file per
entry point:

| Module                             | Environment                                       |
| ---------------------------------- | ------------------------------------------------- |
| [`index`](docs/index.md)           | Client - provider, fetcher, store                 |
| [`hooks`](docs/hooks.md)           | Client - queries and mutations                    |
| [`components`](docs/components.md) | Client - checkout buttons                         |
| [`forms`](docs/forms.md)           | Client, React 19 - action forms, optimistic state |
| [`server`](docs/server.md)         | **Server only** - RSC readers, action factories   |

```bash
bun run docs        # regenerate
bun run docs:check  # fail if the committed output is stale
```

## Testing

```bash
bun test
```

Pass a stub transport to avoid the network:

```tsx
<ZohoBillingProvider fetcher={async () => ({ subscriptions: [] })}>
  <ComponentUnderTest />
</ZohoBillingProvider>
```
