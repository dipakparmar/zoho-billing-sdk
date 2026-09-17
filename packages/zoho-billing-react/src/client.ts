/**
 * Browser-side transport.
 *
 * This never talks to Zoho. Zoho's API needs a client secret and refresh
 * token, and it sets no CORS headers for browser origins, so all calls go to
 * your own backend - the route handler exported by
 * `@dipakparmar/zoho-billing/handler`.
 */

export class ZohoBillingFetchError extends Error {
  readonly status: number
  /** Machine-readable error slug from the handler, e.g. `plan_not_allowed`. */
  readonly code?: string | number

  constructor(message: string, status: number, code?: string | number) {
    super(message)
    this.name = "ZohoBillingFetchError"
    this.status = status
    this.code = code
  }
}

export interface ZohoBillingFetcherOptions {
  /** Where the backend handler is mounted, e.g. `/api/billing`. */
  baseUrl: string
  /** Merged into every request; use for CSRF tokens or tenant headers. */
  headers?: Record<string, string> | (() => Record<string, string>)
  /** Defaults to `same-origin`, matching cookie-session auth. */
  credentials?: RequestCredentials
  fetch?: typeof globalThis.fetch
}

export interface ZohoBillingRequestInit {
  method?: "GET" | "POST" | "PUT" | "DELETE"
  body?: unknown
  query?: Record<string, string | number | boolean | undefined | null>
  signal?: AbortSignal
}

export type ZohoBillingFetcher = <T>(
  path: string,
  init?: ZohoBillingRequestInit
) => Promise<T>

export function createFetcher(
  options: ZohoBillingFetcherOptions
): ZohoBillingFetcher {
  const base = options.baseUrl.replace(/\/$/, "")
  const doFetch = options.fetch ?? globalThis.fetch

  return async function request<T>(
    path: string,
    init: ZohoBillingRequestInit = {}
  ): Promise<T> {
    const url = new URL(
      `${base}${path.startsWith("/") ? path : `/${path}`}`,
      // Relative baseUrls are the norm ("/api/billing"), so resolve against
      // the page origin. Guarded for SSR, where `location` is absent.
      typeof window === "undefined" ? "http://localhost" : window.location.href
    )
    for (const [key, value] of Object.entries(init.query ?? {})) {
      if (value === undefined || value === null) continue
      url.searchParams.set(key, String(value))
    }

    const extra =
      typeof options.headers === "function"
        ? options.headers()
        : options.headers
    const headers: Record<string, string> = {
      Accept: "application/json",
      ...extra,
    }
    if (init.body !== undefined) headers["Content-Type"] = "application/json"

    const response = await doFetch(url.toString(), {
      method: init.method ?? "GET",
      headers,
      credentials: options.credentials ?? "same-origin",
      body: init.body === undefined ? undefined : JSON.stringify(init.body),
      signal: init.signal,
    })

    const payload = await response.json().catch(() => null)

    if (!response.ok) {
      const message =
        (payload && typeof payload === "object" && "error" in payload
          ? String((payload as { error: unknown }).error)
          : null) ?? `Request failed with status ${response.status}`
      const code =
        payload && typeof payload === "object" && "code" in payload
          ? (payload as { code?: string | number }).code
          : undefined
      throw new ZohoBillingFetchError(message, response.status, code)
    }

    return payload as T
  }
}
