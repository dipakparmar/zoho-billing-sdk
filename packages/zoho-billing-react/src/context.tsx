"use client"

import {
  createContext,
  useContext,
  useMemo,
  useRef,
  type ReactNode,
} from "react"
import {
  createFetcher,
  type ZohoBillingFetcher,
  type ZohoBillingFetcherOptions,
} from "./client"
import { BillingStore } from "./store"

export interface ZohoBillingContextValue {
  fetcher: ZohoBillingFetcher
  store: BillingStore
}

const ZohoBillingContext = createContext<ZohoBillingContextValue | null>(null)

export interface ZohoBillingProviderProps extends Partial<
  Omit<ZohoBillingFetcherOptions, "baseUrl">
> {
  /** Where your backend mounts the handler. Defaults to `/api/billing`. */
  baseUrl?: string
  /**
   * Supply your own transport, e.g. to route through an existing API client.
   * Takes precedence over `baseUrl`.
   */
  fetcher?: ZohoBillingFetcher
  /** Share one cache across provider remounts. Mostly useful in tests. */
  store?: BillingStore
  children: ReactNode
}

export function ZohoBillingProvider({
  baseUrl = "/api/billing",
  fetcher,
  store,
  headers,
  credentials,
  fetch: fetchImpl,
  children,
}: ZohoBillingProviderProps) {
  // `headers` is nearly always written as an inline object or arrow, so its
  // identity changes every render. Reading it through a ref keeps the fetcher
  // (and therefore the whole context value, and therefore every hook that
  // depends on it) stable while still picking up the latest value.
  const optionsRef = useRef({ headers, credentials, fetchImpl })
  optionsRef.current = { headers, credentials, fetchImpl }

  const value = useMemo<ZohoBillingContextValue>(
    () => ({
      fetcher:
        fetcher ??
        createFetcher({
          baseUrl,
          credentials: optionsRef.current.credentials,
          fetch: optionsRef.current.fetchImpl,
          headers: () => {
            const current = optionsRef.current.headers
            return typeof current === "function" ? current() : (current ?? {})
          },
        }),
      store: store ?? new BillingStore(),
    }),
    [fetcher, baseUrl, store]
  )

  return (
    <ZohoBillingContext.Provider value={value}>
      {children}
    </ZohoBillingContext.Provider>
  )
}

export function useZohoBilling(): ZohoBillingContextValue {
  const context = useContext(ZohoBillingContext)
  if (!context) {
    throw new Error(
      "useZohoBilling must be used inside a <ZohoBillingProvider>."
    )
  }
  return context
}
