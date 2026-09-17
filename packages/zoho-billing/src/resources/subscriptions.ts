import { ZohoResource, seg } from "./base"
import type { ZohoResponse } from "../types/common"
import type {
  AddChargeParams,
  BuyOneTimeAddonParams,
  CancelSubscriptionParams,
  CreateSubscriptionParams,
  ExtendSubscriptionParams,
  ListSubscriptionsParams,
  PauseSubscriptionParams,
  PostponeRenewalParams,
  ResumeSubscriptionParams,
  ScheduledChange,
  SubscriptionActivity,
  UpdateSubscriptionParams,
  ZohoSubscription,
} from "../types/subscription"
import type { ZohoInvoice } from "../types/billing"
import type {
  ZohoContactPerson,
  ZohoCustomField,
  ZohoNote,
} from "../types/common"

export interface SubscriptionResponse extends ZohoResponse {
  subscription: ZohoSubscription
}

export interface SubscriptionListResponse extends ZohoResponse {
  subscriptions: ZohoSubscription[]
}

/** The subscription lifecycle: the core of the Zoho Billing API. */
export class Subscriptions extends ZohoResource {
  /**
   * Create a subscription. Pass `customer_id` for an existing customer, or a
   * `customer` object to create one in the same call.
   */
  async create(params: CreateSubscriptionParams): Promise<ZohoSubscription> {
    const response = await this.client.request<SubscriptionResponse>(
      "/subscriptions",
      { method: "POST", body: params }
    )
    return response.subscription
  }

  async retrieve(subscriptionId: string): Promise<ZohoSubscription> {
    const response = await this.client.request<SubscriptionResponse>(
      `/subscriptions/${seg(subscriptionId)}`
    )
    return response.subscription
  }

  /**
   * Change the plan, addons, or coupon on a subscription.
   *
   * Whether the change applies immediately (prorated) or at renewal depends on
   * `end_of_term`; leaving it unset defers to the organization's setting, so
   * set it explicitly when the timing matters.
   */
  async update(
    subscriptionId: string,
    params: UpdateSubscriptionParams
  ): Promise<ZohoSubscription> {
    const response = await this.client.request<SubscriptionResponse>(
      `/subscriptions/${seg(subscriptionId)}`,
      { method: "PUT", body: params }
    )
    return response.subscription
  }

  /** Permanently delete a subscription and its history. Rarely what you want. */
  async delete(subscriptionId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/subscriptions/${seg(subscriptionId)}`,
      { method: "DELETE" }
    )
  }

  /** One page of subscriptions. Use `listAll`/`iterate` to walk every page. */
  async list(params: ListSubscriptionsParams = {}): Promise<{
    subscriptions: ZohoSubscription[]
    response: SubscriptionListResponse
  }> {
    const response = await this.client.request<SubscriptionListResponse>(
      "/subscriptions",
      { query: params }
    )
    return { subscriptions: response.subscriptions ?? [], response }
  }

  /** Every subscription across all pages. */
  listAll(params: ListSubscriptionsParams = {}): Promise<ZohoSubscription[]> {
    return this.client.listAll<ZohoSubscription>(
      "/subscriptions",
      "subscriptions",
      { query: params }
    )
  }

  /** Stream subscriptions page by page without buffering them all. */
  iterate(
    params: ListSubscriptionsParams = {}
  ): AsyncGenerator<ZohoSubscription, void, undefined> {
    return this.client.paginate<ZohoSubscription>(
      "/subscriptions",
      "subscriptions",
      { query: params }
    )
  }

  /**
   * Cancel a subscription.
   *
   * Defaults to cancelling at the end of the current term, which leaves the
   * customer with the access they already paid for. Pass
   * `{ cancel_at_end: false }` to cut access off immediately.
   */
  async cancel(
    subscriptionId: string,
    params: CancelSubscriptionParams = {}
  ): Promise<ZohoSubscription> {
    const response = await this.client.request<SubscriptionResponse>(
      `/subscriptions/${seg(subscriptionId)}/cancel`,
      { method: "POST", query: { cancel_at_end: params.cancel_at_end ?? true } }
    )
    return response.subscription
  }

  /** Bring a cancelled or expired subscription back to `live`. */
  async reactivate(subscriptionId: string): Promise<ZohoSubscription> {
    const response = await this.client.request<SubscriptionResponse>(
      `/subscriptions/${seg(subscriptionId)}/reactivate`,
      { method: "POST" }
    )
    return response.subscription
  }

  /** Pause billing and access, optionally scheduling the pause and resume. */
  async pause(
    subscriptionId: string,
    params: PauseSubscriptionParams = {}
  ): Promise<ZohoSubscription> {
    const response = await this.client.request<SubscriptionResponse>(
      `/subscriptions/${seg(subscriptionId)}/pause`,
      { method: "POST", body: params }
    )
    return response.subscription
  }

  async resume(
    subscriptionId: string,
    params: ResumeSubscriptionParams = {}
  ): Promise<ZohoSubscription> {
    const response = await this.client.request<SubscriptionResponse>(
      `/subscriptions/${seg(subscriptionId)}/resume`,
      { method: "POST", body: params }
    )
    return response.subscription
  }

  /** Push the next renewal date out without changing anything else. */
  async postpone(
    subscriptionId: string,
    params: PostponeRenewalParams
  ): Promise<ZohoSubscription> {
    const response = await this.client.request<SubscriptionResponse>(
      `/subscriptions/${seg(subscriptionId)}/postpone`,
      { method: "POST", body: params }
    )
    return response.subscription
  }

  /** Lengthen the current term, e.g. to hand out goodwill time. */
  async extend(
    subscriptionId: string,
    params: ExtendSubscriptionParams
  ): Promise<ZohoSubscription> {
    const response = await this.client.request<SubscriptionResponse>(
      `/subscriptions/${seg(subscriptionId)}/extend`,
      { method: "POST", body: params }
    )
    return response.subscription
  }

  /** Charge for a one-time addon outside the normal renewal cycle. */
  async buyOneTimeAddon(
    subscriptionId: string,
    params: BuyOneTimeAddonParams
  ): Promise<{ subscription?: ZohoSubscription; invoice?: ZohoInvoice }> {
    return this.client.request<{
      subscription?: ZohoSubscription
      invoice?: ZohoInvoice
    }>(`/subscriptions/${seg(subscriptionId)}/buyonetimeaddon`, {
      method: "POST",
      body: params,
    })
  }

  /** Add an ad-hoc charge, raising an invoice immediately. */
  async addCharge(
    subscriptionId: string,
    params: AddChargeParams
  ): Promise<{ invoice?: ZohoInvoice }> {
    return this.client.request<{ invoice?: ZohoInvoice }>(
      `/subscriptions/${seg(subscriptionId)}/charge`,
      { method: "POST", body: params }
    )
  }

  async applyCoupon(
    subscriptionId: string,
    couponCode: string
  ): Promise<ZohoSubscription> {
    const response = await this.client.request<SubscriptionResponse>(
      `/subscriptions/${seg(subscriptionId)}/coupons/${seg(couponCode)}`,
      { method: "POST" }
    )
    return response.subscription
  }

  async removeCoupon(subscriptionId: string): Promise<ZohoSubscription> {
    const response = await this.client.request<SubscriptionResponse>(
      `/subscriptions/${seg(subscriptionId)}/coupons`,
      { method: "DELETE" }
    )
    return response.subscription
  }

  /** Point the subscription at a different stored card. */
  async updateCard(
    subscriptionId: string,
    cardId: string
  ): Promise<ZohoSubscription> {
    const response = await this.client.request<SubscriptionResponse>(
      `/subscriptions/${seg(subscriptionId)}/card`,
      { method: "POST", body: { card_id: cardId } }
    )
    return response.subscription
  }

  async removeCard(subscriptionId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/subscriptions/${seg(subscriptionId)}/card`,
      { method: "DELETE" }
    )
  }

  /**
   * Switch between online (auto-charge the card) and offline (invoice the
   * customer) collection.
   */
  async setAutoCollect(
    subscriptionId: string,
    autoCollect: boolean
  ): Promise<ZohoSubscription> {
    const response = await this.client.request<SubscriptionResponse>(
      `/subscriptions/${seg(subscriptionId)}/autocollect`,
      { method: "POST", body: { auto_collect: autoCollect } }
    )
    return response.subscription
  }

  /** Changes queued to apply at the next renewal. */
  async listScheduledChanges(
    subscriptionId: string
  ): Promise<ScheduledChange | undefined> {
    const response = await this.client.request<{
      scheduled_changes?: ScheduledChange
    }>(`/subscriptions/${seg(subscriptionId)}/scheduledchanges`)
    return response.scheduled_changes
  }

  async deleteScheduledChanges(subscriptionId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/subscriptions/${seg(subscriptionId)}/scheduledchanges`,
      { method: "DELETE" }
    )
  }

  /** Audit trail for this subscription. */
  async listRecentActivities(
    subscriptionId: string
  ): Promise<SubscriptionActivity[]> {
    const response = await this.client.request<{
      recent_activities?: SubscriptionActivity[]
    }>(`/subscriptions/${seg(subscriptionId)}/recentactivities`)
    return response.recent_activities ?? []
  }

  async updateReference(
    subscriptionId: string,
    referenceId: string
  ): Promise<ZohoSubscription> {
    const response = await this.client.request<SubscriptionResponse>(
      `/subscriptions/${seg(subscriptionId)}/reference`,
      { method: "POST", body: { reference_id: referenceId } }
    )
    return response.subscription
  }

  async updateSalesperson(
    subscriptionId: string,
    salespersonName: string
  ): Promise<ZohoSubscription> {
    const response = await this.client.request<SubscriptionResponse>(
      `/subscriptions/${seg(subscriptionId)}/salesperson`,
      { method: "POST", body: { salesperson_name: salespersonName } }
    )
    return response.subscription
  }

  /** Override the invoice-facing description of a plan or addon line. */
  async updateLineItemDescription(
    subscriptionId: string,
    planOrAddonCode: string,
    description: string
  ): Promise<ZohoSubscription> {
    const response = await this.client.request<SubscriptionResponse>(
      `/subscriptions/${seg(subscriptionId)}/lineitems/${seg(planOrAddonCode)}`,
      { method: "POST", body: { description } }
    )
    return response.subscription
  }

  async addContactPersons(
    subscriptionId: string,
    contactPersonIds: string[]
  ): Promise<ZohoContactPerson[]> {
    const response = await this.client.request<{
      contactpersons?: ZohoContactPerson[]
    }>(`/subscriptions/${seg(subscriptionId)}/contactpersons`, {
      method: "POST",
      body: {
        contactpersons: contactPersonIds.map((id) => ({
          contactperson_id: id,
        })),
      },
    })
    return response.contactpersons ?? []
  }

  async getCustomFields(subscriptionId: string): Promise<ZohoCustomField[]> {
    const response = await this.client.request<{
      custom_fields?: ZohoCustomField[]
    }>(`/subscriptions/${seg(subscriptionId)}/customfields`)
    return response.custom_fields ?? []
  }

  async updateCustomFields(
    subscriptionId: string,
    customFields: ZohoCustomField[]
  ): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/subscriptions/${seg(subscriptionId)}/customfields`,
      { method: "POST", body: { custom_fields: customFields } }
    )
  }

  async listNotes(subscriptionId: string): Promise<ZohoNote[]> {
    const response = await this.client.request<{ notes?: ZohoNote[] }>(
      `/subscriptions/${seg(subscriptionId)}/notes`
    )
    return response.notes ?? []
  }

  async addNote(
    subscriptionId: string,
    description: string
  ): Promise<ZohoNote | undefined> {
    const response = await this.client.request<{ note?: ZohoNote }>(
      `/subscriptions/${seg(subscriptionId)}/notes`,
      { method: "POST", body: { description } }
    )
    return response.note
  }

  async deleteNote(
    subscriptionId: string,
    noteId: string
  ): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/subscriptions/${seg(subscriptionId)}/notes/${seg(noteId)}`,
      { method: "DELETE" }
    )
  }

  /**
   * Hold renewal invoices in `pending` until usage line items are added.
   * Required for usage-based billing.
   */
  async enableMeteredBilling(subscriptionId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/subscriptions/${seg(subscriptionId)}/meteredbilling/enable`,
      { method: "POST" }
    )
  }

  async disableMeteredBilling(subscriptionId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/subscriptions/${seg(subscriptionId)}/meteredbilling/disable`,
      { method: "POST" }
    )
  }
}
