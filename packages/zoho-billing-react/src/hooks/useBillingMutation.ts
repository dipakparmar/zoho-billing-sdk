"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useZohoBilling } from "../context"

export interface BillingMutationState<T> {
  data: T | undefined
  error: unknown
  isPending: boolean
}

export interface BillingMutationResult<
  TArgs extends unknown[],
  T,
> extends BillingMutationState<T> {
  mutate: (...args: TArgs) => Promise<T>
  reset: () => void
}

export interface UseBillingMutationOptions {
  /**
   * Cache key prefixes to drop after a successful mutation, so mounted
   * queries refetch. Defaults to `["/subscriptions"]`.
   */
  invalidate?: string[]
}

/**
 * Shared write primitive.
 *
 * `mutate` rethrows so callers can `try`/`catch`, while the same error is also
 * exposed as state for rendering.
 */
export function useBillingMutation<TArgs extends unknown[], T>(
  run: (
    fetcher: ReturnType<typeof useZohoBilling>["fetcher"],
    ...args: TArgs
  ) => Promise<T>,
  options: UseBillingMutationOptions = {}
): BillingMutationResult<TArgs, T> {
  const { fetcher, store } = useZohoBilling()
  const [state, setState] = useState<BillingMutationState<T>>({
    data: undefined,
    error: undefined,
    isPending: false,
  })

  // Billing mutations are slow (Zoho round-trip plus gateway), so a component
  // unmounting mid-flight is routine. Writing state after that is a leak.
  const mountedRef = useRef(true)
  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  const runRef = useRef(run)
  runRef.current = run
  const invalidateRef = useRef(options.invalidate)
  invalidateRef.current = options.invalidate

  const mutate = useCallback(
    async (...args: TArgs): Promise<T> => {
      setState({ data: undefined, error: undefined, isPending: true })
      try {
        const data = await runRef.current(fetcher, ...args)
        // Invalidate before reporting success, so a component that refetches
        // on `isPending` flipping false sees the cleared cache, not stale data.
        for (const prefix of invalidateRef.current ?? ["/subscriptions"]) {
          store.invalidate(prefix)
        }
        if (mountedRef.current) {
          setState({ data, error: undefined, isPending: false })
        }
        return data
      } catch (error) {
        if (mountedRef.current) {
          setState({ data: undefined, error, isPending: false })
        }
        throw error
      }
    },
    [fetcher, store]
  )

  const reset = useCallback(() => {
    setState({ data: undefined, error: undefined, isPending: false })
  }, [])

  return { ...state, mutate, reset }
}
