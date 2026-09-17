"use client"

import { use } from "react"

/**
 * Unwrap a promise handed down from a Server Component.
 *
 * The pattern this enables: a server component *starts* the Zoho request but
 * does not await it, passes the promise to a client component, and the client
 * unwraps it inside a Suspense boundary. The page shells out immediately
 * instead of blocking on a billing round-trip that can take seconds.
 *
 * ```tsx
 * // page.tsx (server)
 * export default function Page() {
 *   const subscriptionsPromise = billing.getSubscriptions() // no await
 *   return (
 *     <Suspense fallback={<Skeleton />}>
 *       <SubscriptionList promise={subscriptionsPromise} />
 *     </Suspense>
 *   )
 * }
 *
 * // SubscriptionList.tsx (client)
 * "use client"
 * export function SubscriptionList({ promise }) {
 *   const subscriptions = useSubscriptionPromise(promise)
 * }
 * ```
 *
 * Two things to know. The promise must be created in the server component's
 * render, not inside the client component - one created during a client render
 * is a new promise each time and suspends forever. And a rejection propagates
 * to the nearest error boundary, so pair the Suspense boundary with one.
 */
export function useSubscriptionPromise<T>(promise: Promise<T>): T {
  return use(promise)
}

/** Alias for readability when the promise is not subscription-shaped. */
export const useBillingPromise = useSubscriptionPromise
