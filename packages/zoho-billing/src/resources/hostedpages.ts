import { ZohoResource, seg } from "./base"
import type { ZohoListParams } from "../types/common"
import type {
  BuyOneTimeAddonHostedPageParams,
  CreateSubscriptionHostedPageParams,
  InvoicePaymentHostedPageParams,
  PaymentMethodHostedPageParams,
  UpdateCardHostedPageParams,
  UpdateSubscriptionHostedPageParams,
  ZohoHostedPage,
} from "../types/hostedpage"

/**
 * Hosted pages: Zoho-hosted checkout flows, the closest analogue to Stripe
 * Checkout.
 *
 * The flow is: create a page, redirect the customer to `url`, and when they
 * come back, call `retrieve(hostedpage_id)` and confirm `status === "success"`
 * before granting anything. The redirect itself is not proof of payment - a
 * customer can hit the return URL directly.
 */
export class HostedPages extends ZohoResource {
  /** New subscription, optionally creating the customer at the same time. */
  async createSubscriptionPage(
    params: CreateSubscriptionHostedPageParams
  ): Promise<ZohoHostedPage> {
    const response = await this.client.request<{ hostedpage: ZohoHostedPage }>(
      "/hostedpages/newsubscription",
      { method: "POST", body: params }
    )
    return response.hostedpage
  }

  /** Upgrade/downgrade flow hosted by Zoho. */
  async createUpdateSubscriptionPage(
    params: UpdateSubscriptionHostedPageParams
  ): Promise<ZohoHostedPage> {
    const response = await this.client.request<{ hostedpage: ZohoHostedPage }>(
      "/hostedpages/updatesubscription",
      { method: "POST", body: params }
    )
    return response.hostedpage
  }

  async createUpdateCardPage(
    params: UpdateCardHostedPageParams
  ): Promise<ZohoHostedPage> {
    const response = await this.client.request<{ hostedpage: ZohoHostedPage }>(
      "/hostedpages/updatecard",
      { method: "POST", body: params }
    )
    return response.hostedpage
  }

  async createBuyOneTimeAddonPage(
    params: BuyOneTimeAddonHostedPageParams
  ): Promise<ZohoHostedPage> {
    const response = await this.client.request<{ hostedpage: ZohoHostedPage }>(
      "/hostedpages/buyonetimeaddon",
      { method: "POST", body: params }
    )
    return response.hostedpage
  }

  async createAddPaymentMethodPage(
    params: PaymentMethodHostedPageParams
  ): Promise<ZohoHostedPage> {
    const response = await this.client.request<{ hostedpage: ZohoHostedPage }>(
      "/hostedpages/addpaymentmethod",
      { method: "POST", body: params }
    )
    return response.hostedpage
  }

  async createUpdatePaymentMethodPage(
    params: PaymentMethodHostedPageParams
  ): Promise<ZohoHostedPage> {
    const response = await this.client.request<{ hostedpage: ZohoHostedPage }>(
      "/hostedpages/updatepaymentmethod",
      { method: "POST", body: params }
    )
    return response.hostedpage
  }

  async createInvoicePaymentPage(
    params: InvoicePaymentHostedPageParams
  ): Promise<ZohoHostedPage> {
    const response = await this.client.request<{ hostedpage: ZohoHostedPage }>(
      "/hostedpages/invoicepayment",
      { method: "POST", body: params }
    )
    return response.hostedpage
  }

  /**
   * Fetch a hosted page's outcome. Call this when the customer returns, and
   * treat anything other than `status === "success"` as not-yet-paid.
   */
  async retrieve(hostedPageId: string): Promise<ZohoHostedPage> {
    const response = await this.client.request<{ data: ZohoHostedPage }>(
      `/hostedpages/${seg(hostedPageId)}`
    )
    return response.data
  }

  async list(params: ZohoListParams = {}): Promise<ZohoHostedPage[]> {
    const response = await this.client.request<{
      hostedpages?: ZohoHostedPage[]
    }>("/hostedpages", { query: params })
    return response.hostedpages ?? []
  }
}
