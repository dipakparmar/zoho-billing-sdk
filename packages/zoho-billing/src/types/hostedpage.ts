/**
 * Hosted pages are Zoho's equivalent of Stripe Checkout: a Zoho-hosted,
 * PCI-scoped page you redirect the customer to. Creating one returns a
 * short-lived URL plus a `hostedpage_id` you exchange for the resulting
 * subscription after the customer returns.
 */

import type { ZohoCustomField } from "./common"
import type {
  ZohoSubscription,
  ZohoSubscriptionAddon,
  ZohoSubscriptionCustomer,
  ZohoSubscriptionPlan,
} from "./subscription"

export type ZohoHostedPageStatus =
  | "created"
  | "success"
  | "failure"
  | "expired"
  | (string & {})

export interface ZohoHostedPage {
  hostedpage_id: string
  /**
   * `success` means the customer completed the page. Poll or verify this on
   * return before granting access - the redirect alone proves nothing.
   */
  status?: ZohoHostedPageStatus
  /** The URL to send the customer to. Short-lived; do not cache it. */
  url?: string
  action?: string
  expiring_time?: string
  created_time?: string
  /** Populated once the page has been completed. */
  data?: { subscription?: ZohoSubscription; [key: string]: unknown }
  [key: string]: unknown
}

interface HostedPageRedirects {
  /** Where Zoho sends the customer after success. */
  redirect_url?: string
}

export interface CreateSubscriptionHostedPageParams extends HostedPageRedirects {
  /** Existing customer. Mutually exclusive with `customer`. */
  customer_id?: string
  /** New customer captured on the hosted page. */
  customer?: ZohoSubscriptionCustomer
  plan: ZohoSubscriptionPlan & { plan_code: string }
  addons?: ZohoSubscriptionAddon[]
  coupon_code?: string
  reference_id?: string
  starts_at?: string
  custom_fields?: ZohoCustomField[]
  exclude_trial?: boolean
  exclude_setup_fee?: boolean
  can_charge_setup_fee_immediately?: boolean
  [key: string]: unknown
}

export interface UpdateSubscriptionHostedPageParams extends HostedPageRedirects {
  subscription_id: string
  plan?: ZohoSubscriptionPlan
  addons?: ZohoSubscriptionAddon[]
  coupon_code?: string
  end_of_term?: boolean
  [key: string]: unknown
}

export interface UpdateCardHostedPageParams extends HostedPageRedirects {
  customer_id: string
  [key: string]: unknown
}

export interface BuyOneTimeAddonHostedPageParams extends HostedPageRedirects {
  subscription_id: string
  addons: (ZohoSubscriptionAddon & { addon_code: string })[]
  [key: string]: unknown
}

export interface PaymentMethodHostedPageParams extends HostedPageRedirects {
  customer_id: string
  [key: string]: unknown
}

export interface InvoicePaymentHostedPageParams extends HostedPageRedirects {
  invoice_id: string
  [key: string]: unknown
}
