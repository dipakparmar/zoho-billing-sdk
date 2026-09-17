import { ZohoResource, seg } from "./base"

export interface ZohoOrganization {
  organization_id: string
  name?: string
  contact_name?: string
  email?: string
  currency_code?: string
  currency_symbol?: string
  time_zone?: string
  country?: string
  fiscal_year_start_month?: string
  is_default_org?: boolean
  [key: string]: unknown
}

/**
 * Organizations are Zoho's tenant boundary. Every other call is scoped to one
 * via the organization header, so this is the first endpoint to hit when
 * setting up: it tells you which `organizationId` to configure.
 */
export class Organizations extends ZohoResource {
  async list(): Promise<ZohoOrganization[]> {
    const response = await this.client.request<{
      organizations?: ZohoOrganization[]
    }>("/organizations")
    return response.organizations ?? []
  }

  async retrieve(organizationId: string): Promise<ZohoOrganization> {
    const response = await this.client.request<{
      organization: ZohoOrganization
    }>(`/organizations/${seg(organizationId)}`)
    return response.organization
  }
}
