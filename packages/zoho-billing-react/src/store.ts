/**
 * A tiny cache + subscription store behind the query hooks.
 *
 * Deliberately dependency-free: this package should drop into an app whether
 * or not it already uses TanStack Query or SWR. It covers what billing UI
 * actually needs - shared cache across components, request dedupe, and
 * invalidation after a mutation - and nothing more.
 */

export type EntryStatus = "idle" | "loading" | "success" | "error"

export interface CacheEntry<T = unknown> {
  status: EntryStatus
  data?: T
  error?: unknown
  /** Epoch ms of the last successful load, for staleness checks. */
  updatedAt?: number
}

const IDLE: CacheEntry = { status: "idle" }

export class BillingStore {
  #cache = new Map<string, CacheEntry>()
  #listeners = new Map<string, Set<() => void>>()
  #inflight = new Map<string, Promise<unknown>>()

  subscribe(key: string, listener: () => void): () => void {
    let set = this.#listeners.get(key)
    if (!set) {
      set = new Set()
      this.#listeners.set(key, set)
    }
    set.add(listener)
    return () => {
      set.delete(listener)
      if (set.size === 0) this.#listeners.delete(key)
    }
  }

  /**
   * Must return a referentially stable value for unchanged state, or
   * `useSyncExternalStore` re-renders forever.
   */
  getSnapshot<T>(key: string): CacheEntry<T> {
    return (this.#cache.get(key) as CacheEntry<T>) ?? (IDLE as CacheEntry<T>)
  }

  #set(key: string, entry: CacheEntry): void {
    this.#cache.set(key, entry)
    for (const listener of this.#listeners.get(key) ?? []) listener()
  }

  /**
   * Load `key`, deduping concurrent callers.
   *
   * Two components mounting with the same key in the same tick share one
   * request instead of racing.
   */
  async load<T>(
    key: string,
    fetcher: () => Promise<T>,
    { force = false }: { force?: boolean } = {}
  ): Promise<T> {
    const existing = this.#inflight.get(key)
    if (existing && !force) return existing as Promise<T>

    const current = this.getSnapshot<T>(key)
    // Keep showing the previous data while refetching, so a background
    // refresh does not blank the UI.
    this.#set(key, { ...current, status: "loading" })

    const promise = fetcher()
      .then((data) => {
        this.#set(key, { status: "success", data, updatedAt: Date.now() })
        return data
      })
      .catch((error: unknown) => {
        this.#set(key, { ...this.getSnapshot<T>(key), status: "error", error })
        throw error
      })
      .finally(() => {
        // Only clear if still ours; a forced reload may have replaced it.
        if (this.#inflight.get(key) === promise) this.#inflight.delete(key)
      })

    this.#inflight.set(key, promise)
    return promise
  }

  /** Write a value directly, e.g. from a mutation response. */
  setData<T>(key: string, data: T): void {
    this.#set(key, { status: "success", data, updatedAt: Date.now() })
  }

  /**
   * Drop cached entries whose key starts with `prefix` and notify their
   * subscribers so mounted hooks refetch.
   */
  invalidate(prefix: string): void {
    // Deleting the current key while iterating a Map is well-defined in JS, so
    // no snapshot copy is needed here.
    for (const key of this.#cache.keys()) {
      if (!key.startsWith(prefix)) continue
      this.#cache.delete(key)
      this.#inflight.delete(key)
      for (const listener of this.#listeners.get(key) ?? []) listener()
    }
  }

  clear(): void {
    const keys = [...this.#cache.keys()]
    this.#cache.clear()
    this.#inflight.clear()
    for (const key of keys) {
      for (const listener of this.#listeners.get(key) ?? []) listener()
    }
  }
}

export function buildKey(
  path: string,
  query?: Record<string, unknown>
): string {
  const entries = Object.entries(query ?? {})
    .filter(([, value]) => value !== undefined && value !== null)
    // Sorted so `{a,b}` and `{b,a}` produce the same key and share a cache slot.
    .sort(([a], [b]) => a.localeCompare(b))
  if (entries.length === 0) return path
  const search = entries.map(([k, v]) => `${k}=${String(v)}`).join("&")
  return `${path}?${search}`
}
