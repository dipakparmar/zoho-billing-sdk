/**
 * Transport layer for the Zoho Billing API: URL building, auth headers,
 * retry/backoff, error normalisation, and auto-pagination.
 */

import {
  ZohoTokenManager,
  type ZohoCredentials,
  type ZohoTokenStore,
} from "./auth"
import {
  ZOHO_BILLING_API_PATH,
  ZOHO_ORG_HEADER,
  ZOHO_REGIONS,
  resolveRegion,
  type ZohoRegion,
} from "./config"
import {
  ZohoBillingConnectionError,
  ZohoBillingError,
  createZohoBillingError,
  isRetryableError,
} from "./errors"
import type {
  ZohoListResponse,
  ZohoPageContext,
  ZohoQueryParams,
} from "./types/common"

export interface ZohoBillingClientOptions {
  /** Zoho organization ID. Find it via `GET /organizations`. */
  organizationId: string
  credentials: ZohoCredentials
  /** Data centre the Zoho org lives in. Defaults to `us`. */
  region?: ZohoRegion
  /** Overrides the region's API host (e.g. a mock server in tests). */
  apiBaseUrl?: string
  /** Overrides the region's OAuth accounts host. */
  accountsBaseUrl?: string
  /** Path prefix after the host. Defaults to `/billing/v1`. */
  apiPath?: string
  tokenStore?: ZohoTokenStore
  /** Retries for throttled, 5xx, and connection failures. Defaults to 3. */
  maxRetries?: number
  /** Per-request timeout in milliseconds. Defaults to 30000. */
  timeoutMs?: number
  /** Injected for tests; defaults to the global `fetch`. */
  fetch?: typeof globalThis.fetch
  /** Extra headers merged into every request. */
  defaultHeaders?: Record<string, string>
}

export interface ZohoRequestOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE"
  /** Query parameters. `undefined` and `null` values are dropped. */
  query?: ZohoQueryParams
  /** JSON request body. */
  body?: unknown
  /** Per-request header overrides. */
  headers?: Record<string, string>
  /** Aborts the request (in addition to the configured timeout). */
  signal?: AbortSignal
  /** Overrides `maxRetries` for this call. */
  maxRetries?: number
}

const DEFAULT_MAX_RETRIES = 3
const DEFAULT_TIMEOUT_MS = 30_000
const DEFAULT_PER_PAGE = 200

export class ZohoBillingClient {
  readonly #organizationId: string
  readonly #baseUrl: string
  readonly #tokens: ZohoTokenManager
  readonly #maxRetries: number
  readonly #timeoutMs: number
  readonly #fetch: typeof globalThis.fetch
  readonly #defaultHeaders: Record<string, string>

  constructor(options: ZohoBillingClientOptions) {
    if (!options.organizationId) {
      throw new ZohoBillingError(
        "organizationId is required. Fetch it once from GET /organizations."
      )
    }
    const region = resolveRegion(options.region)
    const host = (options.apiBaseUrl ?? ZOHO_REGIONS[region].api).replace(
      /\/$/,
      ""
    )
    const path = (options.apiPath ?? ZOHO_BILLING_API_PATH).replace(/\/$/, "")

    this.#organizationId = options.organizationId
    this.#baseUrl = `${host}${path}`
    this.#maxRetries = options.maxRetries ?? DEFAULT_MAX_RETRIES
    this.#timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS
    this.#fetch = options.fetch ?? globalThis.fetch
    this.#defaultHeaders = options.defaultHeaders ?? {}
    this.#tokens = new ZohoTokenManager({
      credentials: options.credentials,
      region,
      accountsBaseUrl: options.accountsBaseUrl,
      tokenStore: options.tokenStore,
      fetch: this.#fetch,
    })
  }

  get organizationId(): string {
    return this.#organizationId
  }

  /**
   * Issue one API call and return the parsed body.
   *
   * Retries throttled, 5xx, and connection failures with exponential backoff.
   * A 401 is retried exactly once after force-refreshing the access token,
   * which covers tokens revoked or rotated out from under a warm cache.
   */
  async request<T>(path: string, options: ZohoRequestOptions = {}): Promise<T> {
    const maxRetries = options.maxRetries ?? this.#maxRetries
    const label = `${options.method ?? "GET"} ${path}`
    let attempt = 0
    let refreshedAfterAuthFailure = false

    for (;;) {
      try {
        return await this.#send<T>(path, options, label)
      } catch (error) {
        // A stale cached token: drop it and retry once with a fresh one.
        const isAuthFailure =
          error instanceof ZohoBillingError && error.status === 401
        if (
          isAuthFailure &&
          !refreshedAfterAuthFailure &&
          this.#tokens.canRefresh
        ) {
          refreshedAfterAuthFailure = true
          await this.#tokens.invalidate()
          continue
        }

        if (!isRetryableError(error) || attempt >= maxRetries) throw error

        await sleep(backoffDelayMs(attempt, error))
        attempt += 1
      }
    }
  }

  async #send<T>(
    path: string,
    options: ZohoRequestOptions,
    label: string
  ): Promise<T> {
    const url = this.#buildUrl(path, options.query)
    const accessToken = await this.#tokens.getAccessToken()

    const headers: Record<string, string> = {
      ...this.#defaultHeaders,
      Accept: "application/json",
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      [ZOHO_ORG_HEADER]: this.#organizationId,
      ...options.headers,
    }

    const method = options.method ?? "GET"
    let payload: string | undefined
    if (options.body !== undefined) {
      payload = JSON.stringify(options.body)
      headers["Content-Type"] ??= "application/json"
    }

    // Compose the caller's signal with our timeout so either can abort.
    const timeoutSignal = AbortSignal.timeout(this.#timeoutMs)
    const signal = options.signal
      ? AbortSignal.any([options.signal, timeoutSignal])
      : timeoutSignal

    let response: Response
    try {
      response = await this.#fetch(url, {
        method,
        headers,
        body: payload,
        signal,
      })
    } catch (cause) {
      // A caller-initiated abort is intentional; surface it as-is rather than
      // dressing it up as a retryable connection failure.
      if (options.signal?.aborted) throw cause
      throw new ZohoBillingConnectionError(
        `Request to Zoho Billing failed: ${label}`,
        { cause, request: label }
      )
    }

    const body = await parseBody(response)

    if (!response.ok) {
      throw createZohoBillingError(extractMessage(body, response), {
        status: response.status,
        code: extractCode(body),
        body,
        request: label,
        retryAfter: parseRetryAfter(response),
      })
    }

    // Zoho also reports failures as HTTP 200 with a non-zero body `code`.
    const code = extractCode(body)
    if (code !== undefined && code !== 0) {
      throw createZohoBillingError(extractMessage(body, response), {
        status: response.status,
        code,
        body,
        request: label,
      })
    }

    return body as T
  }

  #buildUrl(path: string, query?: ZohoQueryParams): string {
    const url = new URL(
      `${this.#baseUrl}${path.startsWith("/") ? path : `/${path}`}`
    )
    for (const [key, value] of Object.entries(query ?? {})) {
      if (value === undefined || value === null) continue
      url.searchParams.set(key, String(value))
    }
    return url.toString()
  }

  /**
   * Walk every page of a list endpoint, yielding items one at a time.
   *
   * Zoho paginates with `page`/`per_page` and reports continuation via
   * `page_context.has_more_page`. When that field is absent, fall back to
   * "a full page came back, so try the next one" - stopping early on a short
   * page, which is the only safe read without the flag.
   */
  async *paginate<T>(
    path: string,
    key: string,
    options: ZohoRequestOptions = {}
  ): AsyncGenerator<T, void, undefined> {
    const perPage = Number(options.query?.per_page ?? DEFAULT_PER_PAGE)
    let page = Number(options.query?.page ?? 1)

    for (;;) {
      // The array's key varies per module (`subscriptions`, `invoices`, ...),
      // so it is read dynamically rather than typed into the envelope.
      const response = await this.request<
        ZohoListResponse<T> & Record<string, unknown>
      >(path, {
        ...options,
        query: { ...options.query, page, per_page: perPage },
      })

      const items = response[key]
      if (!Array.isArray(items)) return
      for (const item of items as T[]) yield item

      if (!hasNextPage(response.page_context, items.length, perPage)) return
      page += 1
    }
  }

  /** Collect every page of a list endpoint into a single array. */
  async listAll<T>(
    path: string,
    key: string,
    options: ZohoRequestOptions = {}
  ): Promise<T[]> {
    const results: T[] = []
    for await (const item of this.paginate<T>(path, key, options)) {
      results.push(item)
    }
    return results
  }
}

function hasNextPage(
  context: ZohoPageContext | undefined,
  received: number,
  perPage: number
): boolean {
  if (context?.has_more_page !== undefined) return context.has_more_page
  return received >= perPage && received > 0
}

async function parseBody(response: Response): Promise<unknown> {
  const contentType = response.headers.get("content-type") ?? ""
  if (!contentType.includes("json")) {
    const text = await response.text()
    return text ? { message: text } : null
  }
  try {
    return await response.json()
  } catch {
    return null
  }
}

function extractCode(body: unknown): number | undefined {
  if (body && typeof body === "object" && "code" in body) {
    const code = (body as { code: unknown }).code
    if (typeof code === "number") return code
  }
  return undefined
}

function extractMessage(body: unknown, response: Response): string {
  if (body && typeof body === "object" && "message" in body) {
    const message = (body as { message: unknown }).message
    if (typeof message === "string" && message) return message
  }
  return `Zoho Billing returned HTTP ${response.status}.`
}

function parseRetryAfter(response: Response): number | undefined {
  const header = response.headers.get("retry-after")
  if (!header) return undefined
  const seconds = Number(header)
  return Number.isFinite(seconds) ? seconds : undefined
}

/**
 * Exponential backoff with full jitter, honouring `Retry-After` when Zoho
 * sends one. Jitter matters here because the rate limit is per organization:
 * without it, parallel workers throttled together retry in lockstep and
 * re-trip the limit.
 */
function backoffDelayMs(attempt: number, error: unknown): number {
  const retryAfter =
    error && typeof error === "object" && "retryAfter" in error
      ? (error as { retryAfter?: number }).retryAfter
      : undefined
  if (retryAfter !== undefined) return retryAfter * 1000

  const base = Math.min(1000 * 2 ** attempt, 20_000)
  return Math.round(base * (0.5 + Math.random() * 0.5))
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
