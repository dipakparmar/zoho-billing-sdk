/**
 * Error types for the Zoho Billing client.
 *
 * Zoho signals failure two ways: a non-2xx HTTP status, and a non-zero `code`
 * in an otherwise-200 JSON body. Both are normalised into a
 * `ZohoBillingError` subclass here so callers only have to handle one shape.
 */

export interface ZohoBillingErrorContext {
  /** Zoho's own numeric error code from the response body, when present. */
  code?: number
  /** HTTP status, when the failure came from a non-2xx response. */
  status?: number
  /** Raw parsed response body, for debugging or unmapped codes. */
  body?: unknown
  /** Method + path of the failing request, e.g. `GET /subscriptions`. */
  request?: string
  /** Underlying cause for transport failures. */
  cause?: unknown
}

export class ZohoBillingError extends Error {
  readonly code?: number
  readonly status?: number
  readonly body?: unknown
  readonly request?: string

  constructor(message: string, context: ZohoBillingErrorContext = {}) {
    super(message, { cause: context.cause })
    this.name = "ZohoBillingError"
    this.code = context.code
    this.status = context.status
    this.body = context.body
    this.request = context.request
  }
}

/** Credentials are missing, expired, or the token is for the wrong region. */
export class ZohoBillingAuthError extends ZohoBillingError {
  constructor(message: string, context: ZohoBillingErrorContext = {}) {
    super(message, context)
    this.name = "ZohoBillingAuthError"
  }
}

/** The token is valid but lacks the scope for this operation. */
export class ZohoBillingPermissionError extends ZohoBillingError {
  constructor(message: string, context: ZohoBillingErrorContext = {}) {
    super(message, context)
    this.name = "ZohoBillingPermissionError"
  }
}

/** The addressed resource does not exist in this organization. */
export class ZohoBillingNotFoundError extends ZohoBillingError {
  constructor(message: string, context: ZohoBillingErrorContext = {}) {
    super(message, context)
    this.name = "ZohoBillingNotFoundError"
  }
}

/** Request was rejected as malformed or business-rule invalid. */
export class ZohoBillingInvalidRequestError extends ZohoBillingError {
  constructor(message: string, context: ZohoBillingErrorContext = {}) {
    super(message, context)
    this.name = "ZohoBillingInvalidRequestError"
  }
}

/**
 * Zoho throttled the request. Zoho allows 100 requests/minute/organization and
 * also enforces a per-plan daily cap; both surface as HTTP 429.
 */
export class ZohoBillingRateLimitError extends ZohoBillingError {
  /** Seconds to wait before retrying, when Zoho sent a `Retry-After` header. */
  readonly retryAfter?: number

  constructor(
    message: string,
    context: ZohoBillingErrorContext & { retryAfter?: number } = {}
  ) {
    super(message, context)
    this.name = "ZohoBillingRateLimitError"
    this.retryAfter = context.retryAfter
  }
}

/** Zoho returned a 5xx. Safe to retry idempotent calls. */
export class ZohoBillingServerError extends ZohoBillingError {
  constructor(message: string, context: ZohoBillingErrorContext = {}) {
    super(message, context)
    this.name = "ZohoBillingServerError"
  }
}

/** The request never completed: DNS failure, socket error, timeout, abort. */
export class ZohoBillingConnectionError extends ZohoBillingError {
  constructor(message: string, context: ZohoBillingErrorContext = {}) {
    super(message, context)
    this.name = "ZohoBillingConnectionError"
  }
}

/**
 * Build the right error subclass for a failed response.
 *
 * Classification keys off HTTP status first because that is the one signal
 * Zoho sets consistently across modules; the body `code` is carried through
 * for callers that need to branch on a specific Zoho code.
 */
export function createZohoBillingError(
  message: string,
  context: ZohoBillingErrorContext & { retryAfter?: number }
): ZohoBillingError {
  const { status } = context
  if (status === 401) return new ZohoBillingAuthError(message, context)
  if (status === 403) return new ZohoBillingPermissionError(message, context)
  if (status === 404) return new ZohoBillingNotFoundError(message, context)
  if (status === 429) return new ZohoBillingRateLimitError(message, context)
  if (status !== undefined && status >= 500) {
    return new ZohoBillingServerError(message, context)
  }
  if (status !== undefined && status >= 400) {
    return new ZohoBillingInvalidRequestError(message, context)
  }
  // 2xx with a non-zero body code: Zoho accepted the request but rejected the
  // operation, which is a business-rule failure rather than a transport one.
  return new ZohoBillingInvalidRequestError(message, context)
}

/** True when retrying the same request could plausibly succeed. */
export function isRetryableError(error: unknown): boolean {
  return (
    error instanceof ZohoBillingRateLimitError ||
    error instanceof ZohoBillingServerError ||
    error instanceof ZohoBillingConnectionError
  )
}
