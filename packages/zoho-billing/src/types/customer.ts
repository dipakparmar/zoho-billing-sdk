import type {
  ZohoAddress,
  ZohoContactPerson,
  ZohoCustomField,
  ZohoGstTreatment,
  ZohoListParams,
  ZohoTag,
} from "./common"

export interface ZohoCustomer {
  customer_id: string
  display_name?: string
  salutation?: string
  first_name?: string
  last_name?: string
  email?: string
  company_name?: string
  phone?: string
  mobile?: string
  department?: string
  designation?: string
  website?: string
  status?: string
  currency_code?: string
  currency_id?: string
  currency_symbol?: string
  billing_address?: ZohoAddress
  shipping_address?: ZohoAddress
  contact_persons?: ZohoContactPerson[]
  payment_terms?: number
  payment_terms_label?: string
  gst_treatment?: ZohoGstTreatment
  gst_no?: string
  place_of_supply?: string
  tax_id?: string
  tax_name?: string
  is_taxable?: boolean
  tax_exemption_id?: string
  tax_exemption_code?: string
  price_precision?: number
  notes?: string
  reference_id?: string
  outstanding_receivable_amount?: number
  unused_credits_receivable_amount?: number
  ach_supported?: boolean
  custom_fields?: ZohoCustomField[]
  tags?: ZohoTag[]
  created_time?: string
  updated_time?: string
  zcrm_account_id?: string
  zcrm_contact_id?: string
  [key: string]: unknown
}

export interface CreateCustomerParams {
  display_name: string
  salutation?: string
  first_name?: string
  last_name?: string
  email?: string
  company_name?: string
  phone?: string
  mobile?: string
  website?: string
  currency_code?: string
  billing_address?: ZohoAddress
  shipping_address?: ZohoAddress
  contact_persons?: ZohoContactPerson[]
  payment_terms?: number
  payment_terms_label?: string
  gst_treatment?: ZohoGstTreatment
  gst_no?: string
  place_of_supply?: string
  tax_id?: string
  is_taxable?: boolean
  tax_exemption_id?: string
  notes?: string
  /**
   * Your own identifier for this customer. Also the lookup key for
   * `customers.getByReference`, which is the idiomatic way to map an
   * application user onto a Zoho customer without storing Zoho's ID.
   */
  reference_id?: string
  custom_fields?: ZohoCustomField[]
  [key: string]: unknown
}

export type UpdateCustomerParams = Partial<CreateCustomerParams>

export interface ListCustomersParams extends ZohoListParams {
  /** e.g. `Status.Active`, `Status.Inactive`. */
  filter_by?: string
  email?: string
  display_name?: string
  phone?: string
}

export interface ZohoTransaction {
  transaction_id?: string
  transaction_type?: string
  date?: string
  amount?: number
  status?: string
  currency_code?: string
  [key: string]: unknown
}
