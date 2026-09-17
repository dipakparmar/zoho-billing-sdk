/**
 * Data-centre configuration for the Zoho Billing API.
 *
 * Zoho partitions accounts by region. An access token minted in one region is
 * not valid in another, and each region has its own API host and OAuth
 * accounts host, so the region must match wherever the Zoho org actually
 * lives. Getting this wrong surfaces as a confusing 401.
 */

export type ZohoRegion =
  | "us"
  | "eu"
  | "in"
  | "au"
  | "jp"
  | "uk"
  | "ca"
  | "sa"
  | "cn"

export interface ZohoRegionHosts {
  /** Host serving the Billing REST API. */
  api: string
  /** Host serving the OAuth token endpoints. */
  accounts: string
}

export const ZOHO_REGIONS: Record<ZohoRegion, ZohoRegionHosts> = {
  us: {
    api: "https://www.zohoapis.com",
    accounts: "https://accounts.zoho.com",
  },
  eu: { api: "https://www.zohoapis.eu", accounts: "https://accounts.zoho.eu" },
  in: { api: "https://www.zohoapis.in", accounts: "https://accounts.zoho.in" },
  au: {
    api: "https://www.zohoapis.com.au",
    accounts: "https://accounts.zoho.com.au",
  },
  jp: { api: "https://www.zohoapis.jp", accounts: "https://accounts.zoho.jp" },
  uk: { api: "https://www.zohoapis.uk", accounts: "https://accounts.zoho.uk" },
  ca: {
    api: "https://www.zohoapis.ca",
    accounts: "https://accounts.zohocloud.ca",
  },
  sa: { api: "https://www.zohoapis.sa", accounts: "https://accounts.zoho.sa" },
  cn: {
    api: "https://www.zohoapis.com.cn",
    accounts: "https://accounts.zoho.com.cn",
  },
}

/** Path prefix for the Billing v1 API, appended to the region's API host. */
export const ZOHO_BILLING_API_PATH = "/billing/v1"

/**
 * Header Zoho uses to scope a request to one organization. The name still says
 * "subscriptions" even on Zoho Billing - that is the documented header, not a
 * typo left over from the product rename.
 */
export const ZOHO_ORG_HEADER = "X-com-zoho-subscriptions-organizationid"

export function isZohoRegion(value: string): value is ZohoRegion {
  return Object.hasOwn(ZOHO_REGIONS, value)
}

/**
 * Resolve a region string, falling back to `us` when unset. Throws on an
 * unknown region rather than silently defaulting, because a silent default
 * points requests at the wrong data centre.
 */
export function resolveRegion(region: string | undefined): ZohoRegion {
  if (!region) return "us"
  const normalized = region.trim().toLowerCase()
  if (!isZohoRegion(normalized)) {
    throw new Error(
      `Unknown Zoho region "${region}". Expected one of: ${Object.keys(ZOHO_REGIONS).join(", ")}`
    )
  }
  return normalized
}
