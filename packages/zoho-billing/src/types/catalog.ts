/** Product catalogue types: products, plans, addons, coupons, price books. */

import type {
  ZohoCustomField,
  ZohoIntervalUnit,
  ZohoListParams,
  ZohoTag,
} from "./common"

export type ZohoStatus = "active" | "inactive" | (string & {})

/**
 * How a plan or addon converts quantity into price.
 *
 * `unit` charges price x quantity; `tiered` charges each bracket at its own
 * rate; `volume` charges every unit at the rate of the bracket the total lands
 * in; `package` charges per block of units.
 */
export type ZohoPricingScheme =
  | "unit"
  | "tiered"
  | "volume"
  | "package"
  | (string & {})

export interface ZohoPriceBracket {
  start_quantity?: number
  end_quantity?: number
  price?: number
}

export interface ZohoProduct {
  product_id: string
  name?: string
  description?: string
  email_ids?: string
  redirect_url?: string
  status?: ZohoStatus
  created_time?: string
  updated_time?: string
  [key: string]: unknown
}

export interface CreateProductParams {
  name: string
  description?: string
  email_ids?: string
  redirect_url?: string
  [key: string]: unknown
}

export interface ZohoPlan {
  plan_code: string
  name?: string
  status?: ZohoStatus
  recurring_price?: number
  pricing_scheme?: ZohoPricingScheme
  price_brackets?: ZohoPriceBracket[]
  type?: string
  unit?: string
  unit_name?: string
  interval?: number
  interval_unit?: ZohoIntervalUnit
  billing_cycles?: number
  trial_period?: number
  setup_fee?: number
  description?: string
  product_id?: string
  product_name?: string
  addons?: { addon_code?: string; name?: string }[]
  tags?: ZohoTag[]
  custom_fields?: ZohoCustomField[]
  created_time?: string
  updated_time?: string
  [key: string]: unknown
}

export interface CreatePlanParams {
  plan_code: string
  name: string
  /** Price per interval. */
  recurring_price: number
  /** Number of `interval_unit`s between charges. */
  interval?: number
  interval_unit?: ZohoIntervalUnit
  /** Total number of cycles before the plan expires. Omit for perpetual. */
  billing_cycles?: number
  /** Free trial length in days. */
  trial_period?: number
  setup_fee?: number
  description?: string
  product_id?: string
  pricing_scheme?: ZohoPricingScheme
  price_brackets?: ZohoPriceBracket[]
  unit?: string
  tax_id?: string
  addons?: { addon_code: string }[]
  custom_fields?: ZohoCustomField[]
  [key: string]: unknown
}

export type UpdatePlanParams = Partial<Omit<CreatePlanParams, "plan_code">>

export interface ListPlansParams extends ZohoListParams {
  product_id?: string
  /** e.g. `PlanStatus.Active`, `PlanStatus.Inactive`. */
  filter_by?: string
}

/** Addons are billed alongside a plan: `recurring` or `one_time`. */
export type ZohoAddonType = "recurring" | "one_time" | (string & {})

export interface ZohoAddon {
  addon_code: string
  name?: string
  description?: string
  status?: ZohoStatus
  type?: ZohoAddonType
  unit?: string
  unit_name?: string
  price_brackets?: ZohoPriceBracket[]
  pricing_scheme?: ZohoPricingScheme
  interval_unit?: ZohoIntervalUnit
  applicable_to_all_plans?: boolean
  plans?: { plan_code?: string }[]
  product_id?: string
  tags?: ZohoTag[]
  custom_fields?: ZohoCustomField[]
  created_time?: string
  updated_time?: string
  [key: string]: unknown
}

export interface CreateAddonParams {
  addon_code: string
  name: string
  unit_name?: string
  pricing_scheme?: ZohoPricingScheme
  price_brackets: ZohoPriceBracket[]
  type?: ZohoAddonType
  interval_unit?: ZohoIntervalUnit
  description?: string
  product_id?: string
  /** When false, restrict availability with `plans`. */
  applicable_to_all_plans?: boolean
  plans?: { plan_code: string }[]
  tax_id?: string
  custom_fields?: ZohoCustomField[]
  [key: string]: unknown
}

export type UpdateAddonParams = Partial<Omit<CreateAddonParams, "addon_code">>

export interface ListAddonsParams extends ZohoListParams {
  product_id?: string
  plan_code?: string
  filter_by?: string
}

/** `once` applies to one invoice; `forever` to every renewal. */
export type ZohoCouponDuration = "once" | "forever" | (string & {})
export type ZohoDiscountBy = "percentage" | "flat" | (string & {})

export interface ZohoCoupon {
  coupon_code: string
  name?: string
  description?: string
  type?: string
  duration?: ZohoCouponDuration
  status?: ZohoStatus
  discount_by?: ZohoDiscountBy
  discount_value?: number
  product_id?: string
  max_redemption?: number
  redemption_count?: number
  expiry_at?: string
  apply_to_plans?: boolean
  plans?: { plan_code?: string }[]
  apply_to_addons?: boolean
  addons?: { addon_code?: string }[]
  created_time?: string
  updated_time?: string
  [key: string]: unknown
}

export interface CreateCouponParams {
  coupon_code: string
  name: string
  discount_by: ZohoDiscountBy
  /** A percentage when `discount_by` is `percentage`, else a flat amount. */
  discount_value: number
  duration?: ZohoCouponDuration
  description?: string
  product_id?: string
  max_redemption?: number
  expiry_at?: string
  apply_to_plans?: boolean
  plans?: { plan_code: string }[]
  apply_to_addons?: boolean
  addons?: { addon_code: string }[]
  [key: string]: unknown
}

export type UpdateCouponParams = Partial<
  Omit<CreateCouponParams, "coupon_code">
>

export interface ZohoPricebook {
  pricebook_id: string
  name?: string
  description?: string
  currency_code?: string
  status?: ZohoStatus
  pricebook_items?: unknown[]
  [key: string]: unknown
}
