/**
 * OAuth token handling for Zoho Billing.
 *
 * Zoho access tokens live one hour; refresh tokens are permanent. The manager
 * below exchanges a refresh token for access tokens, caches them until just
 * before expiry, and collapses concurrent refreshes into a single request so a
 * burst of parallel API calls does not mint (and burn quota on) N tokens.
 */

import { ZOHO_REGIONS, resolveRegion, type ZohoRegion } from "./config"
import { ZohoBillingAuthError, ZohoBillingConnectionError } from "./errors"

/** A cached access token plus the epoch-ms instant it stops being valid. */
export interface ZohoAccessToken {
  accessToken: string
  /** Epoch milliseconds. */
  expiresAt: number
}

/**
 * Persistence for access tokens. The default is per-process memory, which is
 * fine for a long-lived server but wasteful on serverless, where every cold
 * start re-refreshes. Supply a Redis/DB-backed store there instead.
 */
export interface ZohoTokenStore {
  get(key: string): Promise<ZohoAccessToken | null> | ZohoAccessToken | null
  set(key: string, token: ZohoAccessToken): Promise<void> | void
  delete?(key: string): Promise<void> | void
}

export class MemoryTokenStore implements ZohoTokenStore {
  #tokens = new Map<string, ZohoAccessToken>()

  get(key: string): ZohoAccessToken | null {
    return this.#tokens.get(key) ?? null
  }

  set(key: string, token: ZohoAccessToken): void {
    this.#tokens.set(key, token)
  }

  delete(key: string): void {
    this.#tokens.delete(key)
  }
}

/** Long-lived credentials; the client refreshes access tokens as needed. */
export interface ZohoRefreshTokenCredentials {
  clientId: string
  clientSecret: string
  refreshToken: string
}

/** A pre-obtained access token. The client will not refresh it. */
export interface ZohoStaticTokenCredentials {
  accessToken: string
}

/** Bring-your-own resolution, e.g. tokens brokered by another service. */
export interface ZohoCustomTokenCredentials {
  getAccessToken: () => Promise<string> | string
}

export type ZohoCredentials =
  | ZohoRefreshTokenCredentials
  | ZohoStaticTokenCredentials
  | ZohoCustomTokenCredentials

export function isRefreshTokenCredentials(
  credentials: ZohoCredentials
): credentials is ZohoRefreshTokenCredentials {
  return "refreshToken" in credentials
}

export function isStaticTokenCredentials(
  credentials: ZohoCredentials
): credentials is ZohoStaticTokenCredentials {
  return "accessToken" in credentials
}

export interface ZohoTokenManagerOptions {
  credentials: ZohoCredentials
  region?: ZohoRegion
  /** Overrides the region's accounts host. Mainly for tests and Zoho proxies. */
  accountsBaseUrl?: string
  tokenStore?: ZohoTokenStore
  /**
   * Refresh this many milliseconds before actual expiry, so a token does not
   * expire mid-flight on a slow request. Defaults to 2 minutes.
   */
  expiryLeewayMs?: number
  fetch?: typeof globalThis.fetch
}

interface ZohoTokenResponse {
  access_token?: string
  expires_in?: number
  api_domain?: string
  token_type?: string
  error?: string
}

const DEFAULT_EXPIRY_LEEWAY_MS = 2 * 60 * 1000

export class ZohoTokenManager {
  readonly #credentials: ZohoCredentials
  readonly #accountsBaseUrl: string
  readonly #store: ZohoTokenStore
  readonly #leewayMs: number
  readonly #fetch: typeof globalThis.fetch
  readonly #cacheKey: string
  /** In-flight refresh, shared by every caller that arrives while it runs. */
  #inflight: Promise<string> | null = null

  constructor(options: ZohoTokenManagerOptions) {
    const region = resolveRegion(options.region)
    this.#credentials = options.credentials
    this.#accountsBaseUrl = (
      options.accountsBaseUrl ?? ZOHO_REGIONS[region].accounts
    ).replace(/\/$/, "")
    this.#store = options.tokenStore ?? new MemoryTokenStore()
    this.#leewayMs = options.expiryLeewayMs ?? DEFAULT_EXPIRY_LEEWAY_MS
    this.#fetch = options.fetch ?? globalThis.fetch
    this.#cacheKey = buildCacheKey(options.credentials, region)
  }

  /**
   * Return a usable access token, refreshing if the cached one is missing or
   * within the leeway window of expiring.
   */
  async getAccessToken(): Promise<string> {
    if (isStaticTokenCredentials(this.#credentials)) {
      return this.#credentials.accessToken
    }
    if (!isRefreshTokenCredentials(this.#credentials)) {
      return this.#credentials.getAccessToken()
    }

    const cached = await this.#store.get(this.#cacheKey)
    if (cached && cached.expiresAt - this.#leewayMs > Date.now()) {
      return cached.accessToken
    }

    // Collapse concurrent refreshes. Every caller awaits the same promise, and
    // the slot is cleared afterwards so a later expiry triggers a fresh one.
    this.#inflight ??= this.#refresh().finally(() => {
      this.#inflight = null
    })
    return this.#inflight
  }

  /**
   * Drop the cached token so the next call refreshes. Used when Zoho rejects a
   * token we believed was still valid (e.g. revoked server-side).
   */
  async invalidate(): Promise<void> {
    await this.#store.delete?.(this.#cacheKey)
  }

  /** True when this manager can mint a new token after a 401. */
  get canRefresh(): boolean {
    return isRefreshTokenCredentials(this.#credentials)
  }

  async #refresh(): Promise<string> {
    if (!isRefreshTokenCredentials(this.#credentials)) {
      throw new ZohoBillingAuthError(
        "Cannot refresh: client was constructed without refresh-token credentials."
      )
    }

    const url = `${this.#accountsBaseUrl}/oauth/v2/token`
    const body = new URLSearchParams({
      refresh_token: this.#credentials.refreshToken,
      client_id: this.#credentials.clientId,
      client_secret: this.#credentials.clientSecret,
      grant_type: "refresh_token",
    })

    let response: Response
    try {
      response = await this.#fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      })
    } catch (cause) {
      throw new ZohoBillingConnectionError(
        "Failed to reach the Zoho OAuth token endpoint.",
        { cause, request: `POST ${url}` }
      )
    }

    const payload = (await safeJson(response)) as ZohoTokenResponse | null

    // Zoho returns HTTP 200 with an `error` field for bad grants, so status
    // alone is not enough to tell success from failure here.
    if (!response.ok || !payload?.access_token) {
      throw new ZohoBillingAuthError(
        `Zoho refused the token refresh${payload?.error ? `: ${payload.error}` : ""}.`,
        { status: response.status, body: payload, request: `POST ${url}` }
      )
    }

    const expiresInSeconds = payload.expires_in ?? 3600
    const token: ZohoAccessToken = {
      accessToken: payload.access_token,
      expiresAt: Date.now() + expiresInSeconds * 1000,
    }
    await this.#store.set(this.#cacheKey, token)
    return token.accessToken
  }
}

/**
 * Namespace cached tokens by credential + region so two clients in one process
 * (different orgs, or sandbox vs production) never read each other's tokens.
 * The refresh token itself is not used as the key - it is a long-lived secret,
 * and store keys tend to end up in logs.
 */
function buildCacheKey(
  credentials: ZohoCredentials,
  region: ZohoRegion
): string {
  if (isRefreshTokenCredentials(credentials)) {
    return `zoho:${region}:${credentials.clientId}`
  }
  return `zoho:${region}:static`
}

async function safeJson(response: Response): Promise<unknown> {
  try {
    return await response.json()
  } catch {
    return null
  }
}
