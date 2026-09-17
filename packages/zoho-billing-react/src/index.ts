/**
 * React bindings for Zoho Billing.
 *
 * ```tsx
 * <ZohoBillingProvider baseUrl="/api/billing">
 *   <BillingPage />
 * </ZohoBillingProvider>
 *
 * function BillingPage() {
 *   const { data: subscriptions, isLoading } = useSubscriptions()
 *   const cancel = useCancelSubscription()
 *   // ...
 * }
 * ```
 *
 * These hooks call your backend, not Zoho: Zoho's API requires a client
 * secret and sends no CORS headers, so mount
 * `createZohoBillingHandler` from `@dipakparmar/zoho-billing/handler` and point
 * `baseUrl` at it.
 */

export {
  ZohoBillingProvider,
  useZohoBilling,
  type ZohoBillingContextValue,
  type ZohoBillingProviderProps,
} from "./context"
export {
  createFetcher,
  ZohoBillingFetchError,
  type ZohoBillingFetcher,
  type ZohoBillingFetcherOptions,
  type ZohoBillingRequestInit,
} from "./client"
export {
  BillingStore,
  buildKey,
  type CacheEntry,
  type EntryStatus,
} from "./store"
export * from "./hooks/index"
export * from "./components/index"
export * from "./utils"
