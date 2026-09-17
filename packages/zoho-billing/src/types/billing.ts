/** Money-movement types: invoices, payments, credit notes, refunds. */

import type {
  ZohoAddress,
  ZohoCustomField,
  ZohoGstTreatment,
  ZohoListParams,
  ZohoPaymentGateway,
  ZohoTax,
} from "./common"

export type ZohoInvoiceStatus =
  | "draft"
  | "sent"
  | "overdue"
  | "paid"
  | "void"
  | "unpaid"
  | "partially_paid"
  | "payment_initiated"
  | "pending"
  | (string & {})

export interface ZohoLineItem {
  item_id?: string
  line_item_id?: string
  name?: string
  description?: string
  code?: string
  quantity?: number
  price?: number
  discount?: number | string
  item_total?: number
  tax_id?: string
  tax_name?: string
  tax_percentage?: number
  unit?: string
  [key: string]: unknown
}

export interface ZohoInvoice {
  invoice_id: string
  invoice_number?: string
  status?: ZohoInvoiceStatus
  date?: string
  due_date?: string
  customer_id?: string
  customer_name?: string
  subscription_id?: string
  currency_id?: string
  currency_code?: string
  exchange_rate?: number
  reference_number?: string
  payment_terms?: number
  payment_terms_label?: string
  payment_expected_date?: string
  last_payment_date?: string
  discount?: number
  discount_type?: string
  is_discount_before_tax?: boolean
  is_inclusive_tax?: boolean
  line_items?: ZohoLineItem[]
  shipping_charge?: number
  adjustment?: number
  adjustment_description?: string
  sub_total?: number
  tax_total?: number
  total?: number
  taxes?: ZohoTax[]
  payment_made?: number
  credits_applied?: number
  tax_amount_withheld?: number
  balance?: number
  write_off_amount?: number
  allow_partial_payments?: boolean
  price_precision?: number
  is_emailed?: boolean
  reminders_sent?: number
  last_reminder_sent_date?: string
  billing_address?: ZohoAddress
  shipping_address?: ZohoAddress
  notes?: string
  terms?: string
  custom_fields?: ZohoCustomField[]
  template_id?: string
  template_name?: string
  created_time?: string
  last_modified_time?: string
  salesperson_id?: string
  salesperson_name?: string
  /** Public payment link for this invoice. */
  invoice_url?: string
  has_attachment?: boolean
  is_viewed_by_client?: boolean
  client_viewed_time?: string
  gst_no?: string
  gst_treatment?: ZohoGstTreatment
  place_of_supply?: string
  payment_reminder_enabled?: boolean
  ach_payment_initiated?: boolean
  [key: string]: unknown
}

export interface ListInvoicesParams extends ZohoListParams {
  customer_id?: string
  subscription_id?: string
  /** e.g. `Status.Paid`, `Status.Unpaid`, `Status.Overdue`, `Status.Void`. */
  filter_by?: string
  invoice_number?: string
  reference_number?: string
  date_start?: string
  date_end?: string
}

export interface CollectInvoicePaymentParams {
  /** Card to charge. Omit to use the customer's default. */
  card_id?: string
  account_id?: string
  bank_account_id?: string
  payment_gateway?: ZohoPaymentGateway
  [key: string]: unknown
}

export interface EmailInvoiceParams {
  to_mail_ids?: string[]
  cc_mail_ids?: string[]
  subject?: string
  body?: string
  send_customer_statement?: boolean
  send_attachment?: boolean
  [key: string]: unknown
}

export interface AddInvoiceLineItemsParams {
  line_items: ZohoLineItem[]
  [key: string]: unknown
}

export type ZohoPaymentStatus =
  | "success"
  | "failure"
  | "pending"
  | (string & {})

export interface ZohoPayment {
  payment_id: string
  payment_mode?: string
  mode?: string
  amount?: number
  amount_refunded?: number
  date?: string
  status?: ZohoPaymentStatus
  reference_number?: string
  description?: string
  customer_id?: string
  customer_name?: string
  email?: string
  autotransaction?: Record<string, unknown>
  autotransaction_id?: string
  payment_gateway?: ZohoPaymentGateway
  gateway_transaction_id?: string
  gateway_error_message?: string
  card_id?: string
  last_four_digits?: number | string
  expiry_month?: number
  expiry_year?: number
  invoices?: { invoice_id?: string; amount_applied?: number }[]
  exchange_rate?: number
  currency_code?: string
  [key: string]: unknown
}

export interface CreatePaymentParams {
  customer_id: string
  /** Payment amount in the customer's currency. */
  amount: number
  date?: string
  /** e.g. `cash`, `check`, `banktransfer`, `creditcard`. */
  payment_mode?: string
  reference_number?: string
  description?: string
  exchange_rate?: number
  /** Invoices to apply this payment against. */
  invoices?: { invoice_id: string; amount_applied: number }[]
  account_id?: string
  [key: string]: unknown
}

export interface ListPaymentsParams extends ZohoListParams {
  customer_id?: string
  filter_by?: string
  reference_number?: string
  date_start?: string
  date_end?: string
}

export interface RefundPaymentParams {
  amount: number
  date?: string
  description?: string
  reference_number?: string
  /** `true` refunds through the gateway; `false` records an offline refund. */
  from_account_id?: string
  [key: string]: unknown
}

export interface ZohoCreditNote {
  creditnote_id: string
  creditnote_number?: string
  date?: string
  status?: string
  transaction_id?: string
  customer_id?: string
  customer_name?: string
  email?: string
  total?: number
  balance?: number
  creditnote_items?: ZohoLineItem[]
  currency_code?: string
  [key: string]: unknown
}

export interface CreateCreditNoteParams {
  customer_id: string
  creditnote_items: ZohoLineItem[]
  date?: string
  reference_number?: string
  notes?: string
  [key: string]: unknown
}

export interface ZohoRefund {
  refund_id: string
  creditnote_id?: string
  payment_id?: string
  date?: string
  amount?: number
  description?: string
  reference_number?: string
  [key: string]: unknown
}
