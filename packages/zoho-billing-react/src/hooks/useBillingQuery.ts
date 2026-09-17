"use client"

import { useCallback, useEffect, useSyncExternalStore } from "react"
import { useZohoBilling } from "../context"
import { buildKey, type CacheEntry } from "../store"

export interface UseBillingQueryOptions {
  /** Skip fetching, e.g. while an ID is still undefined. */
  enabled?: boolean
  query?: Record<string, string | number | boolean | undefined | null>
  /** Serve cache without refetching if it is younger than this (ms). */
  staleTimeMs?: number
}

export interface BillingQueryResult<T> {
  data: T | undefined
  error: unknown
  isLoading: boolean
  /** True on a background refresh, when stale data is still on screen. */
  isRefreshing: boolean
  refetch: () => Promise<T | undefined>
}

const DEFAULT_STALE_TIME_MS = 30_000

/**
 * Hoisted so `getSnapshot` returns the same reference every call. Returning a
 * fresh `{ status: "idle" }` literal would make React see a changed snapshot
 * on every read and re-render without end.
 */
const IDLE_ENTRY: CacheEntry<never> = { status: "idle" }

/**
 * Shared read primitive for the resource hooks.
 *
 * `TResponse` is the envelope the backend returns (`{ subscriptions: [...] }`)
 * and `TData` is what callers want. `select` unwraps one to the other and is
 * applied to `data` *and* `refetch`'s resolved value, so the two never
 * disagree about their shape.
 */
export function useBillingQuery<TResponse, TData = TResponse>(
  path: string | null,
  options: UseBillingQueryOptions & {
    select?: (response: TResponse) => TData
  } = {}
): BillingQueryResult<TData> {
  const { fetcher, store } = useZohoBilling()
  const {
    enabled = true,
    query,
    staleTimeMs = DEFAULT_STALE_TIME_MS,
    select,
  } = options

  const key = path === null ? null : buildKey(path, query)
  const active = enabled && key !== null

  const subscribe = useCallback(
    (listener: () => void) => (key ? store.subscribe(key, listener) : () => {}),
    [store, key]
  )

  const entry = useSyncExternalStore<CacheEntry<TResponse>>(
    subscribe,
    () =>
      key
        ? store.getSnapshot<TResponse>(key)
        : (IDLE_ENTRY as CacheEntry<TResponse>),
    // Server render: never report loading, so SSR output stays deterministic.
    () => IDLE_ENTRY as CacheEntry<TResponse>
  )

  // `select` is usually an inline arrow, so it is deliberately kept out of the
  // dependency lists below and read through a ref-like closure instead.
  const unwrap = useCallback(
    (response: TResponse | undefined): TData | undefined =>
      response === undefined
        ? undefined
        : select
          ? select(response)
          : (response as unknown as TData),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key]
  )

  const run = useCallback(
    async (force: boolean): Promise<TResponse | undefined> => {
      if (!key || !path) return undefined
      try {
        return await store.load<TResponse>(
          key,
          () => fetcher<TResponse>(path, { query }),
          { force }
        )
      } catch {
        // The error is already on the cache entry; swallow here so an
        // unattended refetch does not become an unhandled rejection.
        return undefined
      }
    },
    // `query` is typically an inline object; key it by the derived cache key,
    // which is a string and therefore actually stable.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [store, fetcher, path, key]
  )

  useEffect(() => {
    if (!active) return
    const fresh =
      entry.status === "success" &&
      entry.updatedAt !== undefined &&
      Date.now() - entry.updatedAt < staleTimeMs
    if (fresh || entry.status === "loading") return
    void run(false)
  }, [active, entry.status, entry.updatedAt, staleTimeMs, run])

  const refetch = useCallback(
    async (): Promise<TData | undefined> => unwrap(await run(true)),
    [run, unwrap]
  )

  return {
    data: unwrap(entry.data),
    error: entry.status === "error" ? entry.error : undefined,
    isLoading: entry.status === "loading" && entry.data === undefined,
    isRefreshing: entry.status === "loading" && entry.data !== undefined,
    refetch,
  }
}
