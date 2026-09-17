/** Shapes shared across every Zoho Billing module. */

export type ZohoQueryValue = string | number | boolean | undefined | null
export type ZohoQueryParams = Record<string, ZohoQueryValue>

/** Envelope Zoho wraps every response in. `code: 0` means success. */
export interface ZohoResponse {
  code: number
  message: string
}

/** Pagination metadata returned alongside list endpoints. */
export interface ZohoPageContext {
  page?: number
  per_page?: number
  has_more_page?: boolean
  report_name?: string
  applied_filter?: string
  sort_column?: string
  sort_order?: string
  total?: number
}

export interface ZohoListResponse<_T> extends ZohoResponse {
  page_context?: ZohoPageContext
}

/** Common query parameters accepted by list endpoints. */
export interface ZohoListParams extends ZohoQueryParams {
  page?: number
  /** Zoho's default and maximum is 200. */
  per_page?: number
  filter_by?: string
  sort_column?: string
  sort_order?: "A" | "D"
  search_text?: string
}

export interface ZohoAddress {
  attention?: string
  street?: string
  city?: string
  state?: string
  country?: string
  zip?: string | number
  fax?: string | number
}

export interface ZohoCustomField {
  index?: number
  label?: string
  value?: string
  data_type?: string
  api_name?: string
}

export interface ZohoItemCustomField {
  label?: string
  value?: string
}

export interface ZohoTag {
  tag_id?: string
  tag_option_id?: string
}

export interface ZohoTax {
  tax_id?: string
  tax_name?: string
  tax_amount?: string | number
}

export interface ZohoNote {
  note_id?: string
  description?: string
  commented_by?: string
  commented_time?: string
}

export interface ZohoCommunicationPreference {
  is_email_enabled?: boolean
  is_sms_enabled?: boolean
  is_whatsapp_enabled?: boolean
}

export interface ZohoContactPerson {
  contact_person_id?: string
  contact_person_name?: string
  first_name?: string
  last_name?: string
  contact_person_email?: string
  email?: string
  phone?: string
  mobile?: string
  is_primary_contact?: boolean
  communication_preference?: ZohoCommunicationPreference
}

/**
 * Payment gateways Zoho Billing can route a subscription through. Kept as a
 * union with a `(string & {})` escape hatch so a newly supported gateway does
 * not become a type error before the package catches up.
 */
export type ZohoPaymentGateway =
  | "test_gateway"
  | "payflow_pro"
  | "stripe"
  | "2checkout"
  | "authorize_net"
  | "payments_pro"
  | "forte"
  | "worldpay"
  | "wepay"
  | (string & {})

export interface ZohoCard {
  card_id?: string
  last_four_digits?: number | string
  payment_gateway?: ZohoPaymentGateway
  expiry_month?: number
  expiry_year?: number
  status?: string
}

export type ZohoIntervalUnit = "days" | "weeks" | "months" | "years"

/** GST treatment, required for India-registered Zoho organizations. */
export type ZohoGstTreatment =
  | "business_gst"
  | "business_none"
  | "consumer"
  | "overseas"
  | (string & {})
