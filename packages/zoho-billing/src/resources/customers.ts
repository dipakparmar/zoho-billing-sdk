import { ZohoResource, seg } from "./base"
import type { ZohoCard, ZohoContactPerson, ZohoResponse } from "../types/common"
import type {
  CreateCustomerParams,
  ListCustomersParams,
  UpdateCustomerParams,
  ZohoCustomer,
  ZohoTransaction,
} from "../types/customer"

interface CustomerResponse extends ZohoResponse {
  customer: ZohoCustomer
}

export class Customers extends ZohoResource {
  async create(params: CreateCustomerParams): Promise<ZohoCustomer> {
    const response = await this.client.request<CustomerResponse>("/customers", {
      method: "POST",
      body: params,
    })
    return response.customer
  }

  async retrieve(customerId: string): Promise<ZohoCustomer> {
    const response = await this.client.request<CustomerResponse>(
      `/customers/${seg(customerId)}`
    )
    return response.customer
  }

  /**
   * Look up a customer by the `reference_id` you assigned.
   *
   * This is the clean way to bridge your user table to Zoho without persisting
   * Zoho's own IDs on your side.
   */
  async getByReference(referenceId: string): Promise<ZohoCustomer> {
    const response = await this.client.request<CustomerResponse>(
      `/customers/reference/${seg(referenceId)}`
    )
    return response.customer
  }

  async update(
    customerId: string,
    params: UpdateCustomerParams
  ): Promise<ZohoCustomer> {
    const response = await this.client.request<CustomerResponse>(
      `/customers/${seg(customerId)}`,
      { method: "PUT", body: params }
    )
    return response.customer
  }

  async delete(customerId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(`/customers/${seg(customerId)}`, {
      method: "DELETE",
    })
  }

  async list(params: ListCustomersParams = {}): Promise<ZohoCustomer[]> {
    const response = await this.client.request<
      ZohoResponse & { customers?: ZohoCustomer[] }
    >("/customers", { query: params })
    return response.customers ?? []
  }

  listAll(params: ListCustomersParams = {}): Promise<ZohoCustomer[]> {
    return this.client.listAll<ZohoCustomer>("/customers", "customers", {
      query: params,
    })
  }

  iterate(
    params: ListCustomersParams = {}
  ): AsyncGenerator<ZohoCustomer, void, undefined> {
    return this.client.paginate<ZohoCustomer>("/customers", "customers", {
      query: params,
    })
  }

  async markAsActive(customerId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/customers/${seg(customerId)}/markasactive`,
      { method: "POST" }
    )
  }

  async markAsInactive(customerId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/customers/${seg(customerId)}/markasinactive`,
      { method: "POST" }
    )
  }

  /** Invoices, payments, and credits for a customer, newest first. */
  async listTransactions(customerId: string): Promise<ZohoTransaction[]> {
    const response = await this.client.request<{
      transactions?: ZohoTransaction[]
    }>("/transactions", { query: { customer_id: customerId } })
    return response.transactions ?? []
  }

  async listCards(customerId: string): Promise<ZohoCard[]> {
    const response = await this.client.request<{ cards?: ZohoCard[] }>(
      `/customers/${seg(customerId)}/cards`
    )
    return response.cards ?? []
  }

  async retrieveCard(customerId: string, cardId: string): Promise<ZohoCard> {
    const response = await this.client.request<{ card: ZohoCard }>(
      `/customers/${seg(customerId)}/cards/${seg(cardId)}`
    )
    return response.card
  }

  async deleteCard(customerId: string, cardId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/customers/${seg(customerId)}/cards/${seg(cardId)}`,
      { method: "DELETE" }
    )
  }

  async listContactPersons(customerId: string): Promise<ZohoContactPerson[]> {
    const response = await this.client.request<{
      contactpersons?: ZohoContactPerson[]
    }>(`/customers/${seg(customerId)}/contactpersons`)
    return response.contactpersons ?? []
  }

  async createContactPerson(
    customerId: string,
    params: ZohoContactPerson
  ): Promise<ZohoContactPerson> {
    const response = await this.client.request<{
      contactperson: ZohoContactPerson
    }>(`/customers/${seg(customerId)}/contactpersons`, {
      method: "POST",
      body: params,
    })
    return response.contactperson
  }

  async updateContactPerson(
    customerId: string,
    contactPersonId: string,
    params: ZohoContactPerson
  ): Promise<ZohoContactPerson> {
    const response = await this.client.request<{
      contactperson: ZohoContactPerson
    }>(`/customers/${seg(customerId)}/contactpersons/${seg(contactPersonId)}`, {
      method: "PUT",
      body: params,
    })
    return response.contactperson
  }

  async deleteContactPerson(
    customerId: string,
    contactPersonId: string
  ): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/customers/${seg(customerId)}/contactpersons/${seg(contactPersonId)}`,
      { method: "DELETE" }
    )
  }
}
