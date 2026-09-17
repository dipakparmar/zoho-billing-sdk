import type {
  ZohoAddress,
  ZohoCard,
  ZohoContactPerson,
  ZohoCustomField,
  ZohoGstTreatment,
  ZohoItemCustomField,
  ZohoListParams,
  ZohoNote,
  ZohoPaymentGateway,
  ZohoTag,
  ZohoTax,
} from "./common"

/**
 * Lifecycle states a subscription can be in.
 *
 * `live` and `trial` are the healthy states; `dunning` and `unpaid` mean
 * collection is failing; `non_renewing` is cancelled-at-period-end and still
 * grants access until `current_term_ends_at`.
 */
export type ZohoSubscriptionStatus =
  | "live"
  | "trial"
  | "dunning"
  | "unpaid"
  | "non_renewing"
  | "cancelled"
  | "creation_failed"
  | "cancelled_from_dunning"
  | "expired"
  | "trial_expired"
  | "future"
  | "paused"
  | (string & {})

export interface ZohoSubscriptionPlan {
  plan_code?: string
  name?: string
  quantity?: number
  price?: number
  discount?: number | string
  total?: number
  setup_fee?: number
  plan_description?: string
  description?: string
  tax_id?: string
  trial_days?: number
  tags?: ZohoTag[]
  item_custom_fields?: ZohoItemCustomField[]
}

export interface ZohoSubscriptionAddon {
  addon_code?: string
  name?: string
  addon_description?: string
  quantity?: number
  price?: number
  discount?: number | string
  total?: number
  tax_id?: string
  tags?: ZohoTag[]
  item_custom_fields?: ZohoItemCustomField[]
}

export interface ZohoSubscriptionCoupon {
  coupon_code?: string
  discount_amount?: number
}

export interface ZohoSubscriptionCustomer {
  customer_id?: string
  display_name?: string
  salutation?: string
  first_name?: string
  last_name?: string
  email?: string
  company_name?: string
  phone?: string
  mobile?: string
  billing_address?: ZohoAddress
  shipping_address?: ZohoAddress
  payment_terms?: number
  payment_terms_label?: string
}

export interface ZohoSubscription {
  subscription_id: string
  subscription_number?: string
  name?: string
  status?: ZohoSubscriptionStatus
  amount?: number
  created_at?: string
  activated_at?: string
  current_term_starts_at?: string
  current_term_ends_at?: string
  last_billing_at?: string
  next_billing_at?: string
  expires_at?: string
  pause_date?: string
  resume_date?: string
  interval?: number
  interval_unit?: string
  auto_collect?: boolean
  created_time?: string
  updated_time?: string
  reference_id?: string
  place_of_supply?: string
  salesperson_id?: string
  salesperson_name?: string
  child_invoice_id?: string
  currency_code?: string
  currency_symbol?: string
  end_of_term?: boolean
  product_id?: string
  product_name?: string
  trial_starts_at?: string
  trial_ends_at?: string
  cancelled_at?: string
  gst_treatment?: ZohoGstTreatment
  pricebook_id?: string
  is_metered_billing?: boolean
  bank_account_id?: string
  plan?: ZohoSubscriptionPlan
  addons?: ZohoSubscriptionAddon[]
  coupon?: ZohoSubscriptionCoupon
  card?: ZohoCard
  payment_terms?: number
  payment_terms_label?: string
  can_add_bank_account?: boolean
  customer?: ZohoSubscriptionCustomer
  custom_fields?: ZohoCustomField[]
  taxes?: ZohoTax[]
  contact_persons_associated?: ZohoContactPerson[]
  notes?: ZohoNote[]
  payment_gateways?: { payment_gateway?: ZohoPaymentGateway }[]
  unbilled_charge_id?: string
  can_charge_setup_fee_immediately?: boolean
  /** Present on list responses, which flatten a few customer fields. */
  customer_id?: string
  customer_name?: string
  email?: string
  plan_name?: string
}

export interface CreateSubscriptionParams {
  /** Existing customer. Mutually exclusive with `customer`. */
  customer_id?: string
  /** New customer to create alongside the subscription. */
  customer?: ZohoSubscriptionCustomer
  plan: ZohoSubscriptionPlan & { plan_code: string }
  addons?: ZohoSubscriptionAddon[]
  coupon_code?: string
  reference_id?: string
  starts_at?: string
  exchange_rate?: number
  place_of_supply?: string
  salesperson_name?: string
  custom_fields?: ZohoCustomField[]
  /** `true` charges the card automatically each renewal; `false` bills offline. */
  auto_collect?: boolean
  template_id?: string
  payment_terms?: number
  payment_terms_label?: string
  card_id?: string
  bank_account_id?: string
  contactpersons?: { contactperson_id?: string }[]
  /** Skips the plan's trial period for this subscription. */
  exclude_trial?: boolean
  /** Skips the plan's setup fee for this subscription. */
  exclude_setup_fee?: boolean
  /** Bills the setup fee immediately instead of at trial end. */
  can_charge_setup_fee_immediately?: boolean
  payment_gateways?: { payment_gateway?: ZohoPaymentGateway }[]
  gst_treatment?: ZohoGstTreatment
  gst_no?: string
  pricebook_id?: string
  is_metered_billing?: boolean
  [key: string]: unknown
}

export interface UpdateSubscriptionParams {
  plan?: ZohoSubscriptionPlan
  addons?: ZohoSubscriptionAddon[]
  coupon_code?: string
  reference_id?: string
  exchange_rate?: number
  custom_fields?: ZohoCustomField[]
  auto_collect?: boolean
  card_id?: string
  payment_terms?: number
  payment_terms_label?: string
  salesperson_name?: string
  /**
   * `true` defers the change to the next renewal; `false` applies it now and
   * prorates. Defaults to Zoho's org-level setting when omitted.
   */
  end_of_term?: boolean
  /** Prorate the mid-term change. */
  prorate?: boolean
  [key: string]: unknown
}

export interface ListSubscriptionsParams extends ZohoListParams {
  customer_id?: string
  reference_contains?: string
  /**
   * e.g. `SubscriptionStatus.ACTIVE`, `SubscriptionStatus.LIVE`,
   * `SubscriptionStatus.TRIAL`, `SubscriptionStatus.CANCELLED`, or
   * `SubscriptionMode.ONLINE` / `SubscriptionMode.OFFLINE`.
   */
  filter_by?: string
}

export interface CancelSubscriptionParams {
  /**
   * `true` cancels at the end of the current term (the subscription becomes
   * `non_renewing` and access continues); `false` cancels immediately.
   */
  cancel_at_end?: boolean
}

export interface BuyOneTimeAddonParams {
  addons: (ZohoSubscriptionAddon & { addon_code: string })[]
  exchange_rate?: number
  [key: string]: unknown
}

export interface AddChargeParams {
  amount: number
  description?: string
  account_id?: string
  tax_id?: string
  [key: string]: unknown
}

export interface PostponeRenewalParams {
  /** New renewal date, `yyyy-mm-dd`. */
  renewal_at: string
}

export interface PauseSubscriptionParams {
  /** Date to pause on, `yyyy-mm-dd`. Defaults to immediately. */
  pause_date?: string
  /** Date to auto-resume on, `yyyy-mm-dd`. */
  resume_date?: string
  [key: string]: unknown
}

export interface ResumeSubscriptionParams {
  resume_date?: string
  [key: string]: unknown
}

export interface ExtendSubscriptionParams {
  /** Number of `interval_unit`s to extend the current term by. */
  extend_by?: number
  extend_to?: string
  [key: string]: unknown
}

export interface ScheduledChange {
  plan?: ZohoSubscriptionPlan
  addons?: ZohoSubscriptionAddon[]
  coupon?: ZohoSubscriptionCoupon
  scheduled_at?: string
  [key: string]: unknown
}

export interface SubscriptionActivity {
  activity_id?: string
  description?: string
  activity_type?: string
  operation_type?: string
  time?: string
  performed_by?: string
  [key: string]: unknown
}
