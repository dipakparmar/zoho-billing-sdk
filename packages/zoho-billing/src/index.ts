/**
 * Zoho Billing SDK for Node.
 *
 * ```ts
 * const zoho = new ZohoBilling({
 *   organizationId: process.env.ZOHO_ORGANIZATION_ID!,
 *   region: "us",
 *   credentials: {
 *     clientId: process.env.ZOHO_CLIENT_ID!,
 *     clientSecret: process.env.ZOHO_CLIENT_SECRET!,
 *     refreshToken: process.env.ZOHO_REFRESH_TOKEN!,
 *   },
 * })
 *
 * const subscription = await zoho.subscriptions.create({
 *   customer_id: "903000000021976",
 *   plan: { plan_code: "pro-monthly" },
 * })
 * ```
 */

import { ZohoBillingClient, type ZohoBillingClientOptions } from "./client"
import { Subscriptions } from "./resources/subscriptions"
import { Customers } from "./resources/customers"
import {
  Addons,
  Coupons,
  Plans,
  Pricebooks,
  Products,
} from "./resources/catalog"
import { CreditNotes, Invoices, Payments, Refunds } from "./resources/billing"
import { HostedPages } from "./resources/hostedpages"
import { Events } from "./resources/events"
import { Organizations } from "./resources/organizations"

export type ZohoBillingOptions = ZohoBillingClientOptions

/** Entry point. One instance per Zoho organization. */
export class ZohoBilling {
  /** Escape hatch for endpoints this SDK does not wrap yet. */
  readonly client: ZohoBillingClient

  readonly subscriptions: Subscriptions
  readonly customers: Customers
  readonly products: Products
  readonly plans: Plans
  readonly addons: Addons
  readonly coupons: Coupons
  readonly pricebooks: Pricebooks
  readonly invoices: Invoices
  readonly payments: Payments
  readonly creditNotes: CreditNotes
  readonly refunds: Refunds
  readonly hostedPages: HostedPages
  readonly events: Events
  readonly organizations: Organizations

  constructor(options: ZohoBillingOptions) {
    this.client = new ZohoBillingClient(options)
    this.subscriptions = new Subscriptions(this.client)
    this.customers = new Customers(this.client)
    this.products = new Products(this.client)
    this.plans = new Plans(this.client)
    this.addons = new Addons(this.client)
    this.coupons = new Coupons(this.client)
    this.pricebooks = new Pricebooks(this.client)
    this.invoices = new Invoices(this.client)
    this.payments = new Payments(this.client)
    this.creditNotes = new CreditNotes(this.client)
    this.refunds = new Refunds(this.client)
    this.hostedPages = new HostedPages(this.client)
    this.events = new Events(this.client)
    this.organizations = new Organizations(this.client)
  }
}

/**
 * Build a client from environment variables.
 *
 * Reads `ZOHO_ORGANIZATION_ID`, `ZOHO_CLIENT_ID`, `ZOHO_CLIENT_SECRET`,
 * `ZOHO_REFRESH_TOKEN`, and optionally `ZOHO_REGION`. Throws listing every
 * missing variable at once rather than one per run.
 */
export function createZohoBillingFromEnv(
  env: Record<string, string | undefined> = process.env,
  overrides: Partial<ZohoBillingOptions> = {}
): ZohoBilling {
  const required = [
    "ZOHO_ORGANIZATION_ID",
    "ZOHO_CLIENT_ID",
    "ZOHO_CLIENT_SECRET",
    "ZOHO_REFRESH_TOKEN",
  ] as const
  const missing = required.filter((key) => !env[key])
  if (missing.length > 0) {
    throw new Error(
      `Missing Zoho Billing environment variables: ${missing.join(", ")}`
    )
  }

  return new ZohoBilling({
    organizationId: env.ZOHO_ORGANIZATION_ID!,
    region: (env.ZOHO_REGION as ZohoBillingOptions["region"]) ?? "us",
    credentials: {
      clientId: env.ZOHO_CLIENT_ID!,
      clientSecret: env.ZOHO_CLIENT_SECRET!,
      refreshToken: env.ZOHO_REFRESH_TOKEN!,
    },
    ...overrides,
  })
}

export {
  ZohoBillingClient,
  type ZohoBillingClientOptions,
  type ZohoRequestOptions,
} from "./client"
export {
  ZOHO_BILLING_API_PATH,
  ZOHO_ORG_HEADER,
  ZOHO_REGIONS,
  isZohoRegion,
  resolveRegion,
  type ZohoRegion,
  type ZohoRegionHosts,
} from "./config"
export {
  MemoryTokenStore,
  ZohoTokenManager,
  type ZohoAccessToken,
  type ZohoCredentials,
  type ZohoCustomTokenCredentials,
  type ZohoRefreshTokenCredentials,
  type ZohoStaticTokenCredentials,
  type ZohoTokenManagerOptions,
  type ZohoTokenStore,
} from "./auth"
export * from "./errors"
export * from "./types/index"
export * from "./webhooks"
export {
  Subscriptions,
  type SubscriptionListResponse,
  type SubscriptionResponse,
} from "./resources/subscriptions"
export { Customers } from "./resources/customers"
export {
  Addons,
  Coupons,
  Plans,
  Pricebooks,
  Products,
} from "./resources/catalog"
export { CreditNotes, Invoices, Payments, Refunds } from "./resources/billing"
export { HostedPages } from "./resources/hostedpages"
export { Events } from "./resources/events"
export { Organizations, type ZohoOrganization } from "./resources/organizations"
export * from "./security"
