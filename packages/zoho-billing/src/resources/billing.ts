/** Money-movement resources: invoices, payments, credit notes, refunds. */

import { ZohoResource, seg } from "./base"
import type { ZohoResponse } from "../types/common"
import type {
  AddInvoiceLineItemsParams,
  CollectInvoicePaymentParams,
  CreateCreditNoteParams,
  CreatePaymentParams,
  EmailInvoiceParams,
  ListInvoicesParams,
  ListPaymentsParams,
  RefundPaymentParams,
  ZohoCreditNote,
  ZohoInvoice,
  ZohoPayment,
  ZohoRefund,
} from "../types/billing"

export class Invoices extends ZohoResource {
  async retrieve(invoiceId: string): Promise<ZohoInvoice> {
    const response = await this.client.request<{ invoice: ZohoInvoice }>(
      `/invoices/${seg(invoiceId)}`
    )
    return response.invoice
  }

  async list(params: ListInvoicesParams = {}): Promise<ZohoInvoice[]> {
    const response = await this.client.request<{ invoices?: ZohoInvoice[] }>(
      "/invoices",
      { query: params }
    )
    return response.invoices ?? []
  }

  listAll(params: ListInvoicesParams = {}): Promise<ZohoInvoice[]> {
    return this.client.listAll<ZohoInvoice>("/invoices", "invoices", {
      query: params,
    })
  }

  iterate(
    params: ListInvoicesParams = {}
  ): AsyncGenerator<ZohoInvoice, void, undefined> {
    return this.client.paginate<ZohoInvoice>("/invoices", "invoices", {
      query: params,
    })
  }

  async delete(invoiceId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(`/invoices/${seg(invoiceId)}`, {
      method: "DELETE",
    })
  }

  /** Move a draft invoice to `sent` without emailing it. */
  async markAsSent(invoiceId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/invoices/${seg(invoiceId)}/sent`,
      { method: "POST" }
    )
  }

  async void(invoiceId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/invoices/${seg(invoiceId)}/void`,
      { method: "POST" }
    )
  }

  /** Reverse a void, returning the invoice to `open`. */
  async convertToOpen(invoiceId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/invoices/${seg(invoiceId)}/converttoopen`,
      { method: "POST" }
    )
  }

  async writeOff(invoiceId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/invoices/${seg(invoiceId)}/writeoff`,
      { method: "POST" }
    )
  }

  async cancelWriteOff(invoiceId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/invoices/${seg(invoiceId)}/cancelwriteoff`,
      { method: "POST" }
    )
  }

  /** Charge the customer's stored payment method for an outstanding invoice. */
  async collect(
    invoiceId: string,
    params: CollectInvoicePaymentParams = {}
  ): Promise<{ payment?: ZohoPayment }> {
    return this.client.request<{ payment?: ZohoPayment }>(
      `/invoices/${seg(invoiceId)}/collect`,
      { method: "POST", body: params }
    )
  }

  async email(
    invoiceId: string,
    params: EmailInvoiceParams = {}
  ): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/invoices/${seg(invoiceId)}/email`,
      { method: "POST", body: params }
    )
  }

  /** Apply available customer credits against an invoice. */
  async applyCredits(
    invoiceId: string,
    params: Record<string, unknown>
  ): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/invoices/${seg(invoiceId)}/credits`,
      { method: "POST", body: params }
    )
  }

  /** Add usage charges to a pending metered-billing invoice. */
  async addLineItems(
    invoiceId: string,
    params: AddInvoiceLineItemsParams
  ): Promise<ZohoInvoice> {
    const response = await this.client.request<{ invoice: ZohoInvoice }>(
      `/invoices/${seg(invoiceId)}/lineitems`,
      { method: "POST", body: params }
    )
    return response.invoice
  }

  async deleteLineItem(
    invoiceId: string,
    itemId: string
  ): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/invoices/${seg(invoiceId)}/lineitems/${seg(itemId)}`,
      { method: "DELETE" }
    )
  }
}

export class Payments extends ZohoResource {
  /** Record an offline payment (cash, cheque, bank transfer). */
  async create(params: CreatePaymentParams): Promise<ZohoPayment> {
    const response = await this.client.request<{ payment: ZohoPayment }>(
      "/payments",
      { method: "POST", body: params }
    )
    return response.payment
  }

  async retrieve(paymentId: string): Promise<ZohoPayment> {
    const response = await this.client.request<{ payment: ZohoPayment }>(
      `/payments/${seg(paymentId)}`
    )
    return response.payment
  }

  async update(
    paymentId: string,
    params: Partial<CreatePaymentParams>
  ): Promise<ZohoPayment> {
    const response = await this.client.request<{ payment: ZohoPayment }>(
      `/payments/${seg(paymentId)}`,
      { method: "PUT", body: params }
    )
    return response.payment
  }

  async delete(paymentId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(`/payments/${seg(paymentId)}`, {
      method: "DELETE",
    })
  }

  async list(params: ListPaymentsParams = {}): Promise<ZohoPayment[]> {
    const response = await this.client.request<{ payments?: ZohoPayment[] }>(
      "/payments",
      { query: params }
    )
    return response.payments ?? []
  }

  listAll(params: ListPaymentsParams = {}): Promise<ZohoPayment[]> {
    return this.client.listAll<ZohoPayment>("/payments", "payments", {
      query: params,
    })
  }

  async refund(
    paymentId: string,
    params: RefundPaymentParams
  ): Promise<ZohoRefund> {
    const response = await this.client.request<{ refund: ZohoRefund }>(
      `/payments/${seg(paymentId)}/refunds`,
      { method: "POST", body: params }
    )
    return response.refund
  }
}

export class CreditNotes extends ZohoResource {
  async create(params: CreateCreditNoteParams): Promise<ZohoCreditNote> {
    const response = await this.client.request<{ creditnote: ZohoCreditNote }>(
      "/creditnotes",
      { method: "POST", body: params }
    )
    return response.creditnote
  }

  async retrieve(creditNoteId: string): Promise<ZohoCreditNote> {
    const response = await this.client.request<{ creditnote: ZohoCreditNote }>(
      `/creditnotes/${seg(creditNoteId)}`
    )
    return response.creditnote
  }

  async delete(creditNoteId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/creditnotes/${seg(creditNoteId)}`,
      { method: "DELETE" }
    )
  }

  async void(creditNoteId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/creditnotes/${seg(creditNoteId)}/void`,
      { method: "POST" }
    )
  }

  async convertToOpen(creditNoteId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/creditnotes/${seg(creditNoteId)}/converttoopen`,
      { method: "POST" }
    )
  }

  async email(
    creditNoteId: string,
    params: Record<string, unknown> = {}
  ): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/creditnotes/${seg(creditNoteId)}/email`,
      { method: "POST", body: params }
    )
  }

  /** Offset open invoices with this credit note's balance. */
  async applyToInvoices(
    creditNoteId: string,
    params: Record<string, unknown>
  ): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/creditnotes/${seg(creditNoteId)}/invoices`,
      { method: "POST", body: params }
    )
  }

  /** Refund a credit note's balance back to the customer. */
  async refund(
    creditNoteId: string,
    params: Record<string, unknown>
  ): Promise<ZohoRefund> {
    const response = await this.client.request<{
      creditnote_refund: ZohoRefund
    }>(`/creditnotes/${seg(creditNoteId)}/refunds`, {
      method: "POST",
      body: params,
    })
    return response.creditnote_refund
  }
}

export class Refunds extends ZohoResource {
  async retrieve(refundId: string): Promise<ZohoRefund> {
    const response = await this.client.request<{
      creditnote_refund: ZohoRefund
    }>(`/creditnotes/refunds/${seg(refundId)}`)
    return response.creditnote_refund
  }
}
