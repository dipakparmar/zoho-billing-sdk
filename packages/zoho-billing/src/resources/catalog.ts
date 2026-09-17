/** Catalogue resources: products, plans, addons, coupons, price books. */

import { ZohoResource, seg } from "./base"
import type { ZohoListParams, ZohoResponse } from "../types/common"
import type {
  CreateAddonParams,
  CreateCouponParams,
  CreatePlanParams,
  CreateProductParams,
  ListAddonsParams,
  ListPlansParams,
  UpdateAddonParams,
  UpdateCouponParams,
  UpdatePlanParams,
  ZohoAddon,
  ZohoCoupon,
  ZohoPlan,
  ZohoPricebook,
  ZohoProduct,
} from "../types/catalog"

export class Products extends ZohoResource {
  async create(params: CreateProductParams): Promise<ZohoProduct> {
    const response = await this.client.request<{ product: ZohoProduct }>(
      "/products",
      { method: "POST", body: params }
    )
    return response.product
  }

  async retrieve(productId: string): Promise<ZohoProduct> {
    const response = await this.client.request<{ product: ZohoProduct }>(
      `/products/${seg(productId)}`
    )
    return response.product
  }

  async update(
    productId: string,
    params: Partial<CreateProductParams>
  ): Promise<ZohoProduct> {
    const response = await this.client.request<{ product: ZohoProduct }>(
      `/products/${seg(productId)}`,
      { method: "PUT", body: params }
    )
    return response.product
  }

  async delete(productId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(`/products/${seg(productId)}`, {
      method: "DELETE",
    })
  }

  async list(params: ZohoListParams = {}): Promise<ZohoProduct[]> {
    const response = await this.client.request<{ products?: ZohoProduct[] }>(
      "/products",
      { query: params }
    )
    return response.products ?? []
  }

  listAll(params: ZohoListParams = {}): Promise<ZohoProduct[]> {
    return this.client.listAll<ZohoProduct>("/products", "products", {
      query: params,
    })
  }

  async markAsActive(productId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/products/${seg(productId)}/markasactive`,
      { method: "POST" }
    )
  }

  async markAsInactive(productId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/products/${seg(productId)}/markasinactive`,
      { method: "POST" }
    )
  }
}

export class Plans extends ZohoResource {
  async create(params: CreatePlanParams): Promise<ZohoPlan> {
    const response = await this.client.request<{ plan: ZohoPlan }>("/plans", {
      method: "POST",
      body: params,
    })
    return response.plan
  }

  async retrieve(planCode: string): Promise<ZohoPlan> {
    const response = await this.client.request<{ plan: ZohoPlan }>(
      `/plans/${seg(planCode)}`
    )
    return response.plan
  }

  async update(planCode: string, params: UpdatePlanParams): Promise<ZohoPlan> {
    const response = await this.client.request<{ plan: ZohoPlan }>(
      `/plans/${seg(planCode)}`,
      { method: "PUT", body: params }
    )
    return response.plan
  }

  async delete(planCode: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(`/plans/${seg(planCode)}`, {
      method: "DELETE",
    })
  }

  async list(params: ListPlansParams = {}): Promise<ZohoPlan[]> {
    const response = await this.client.request<{ plans?: ZohoPlan[] }>(
      "/plans",
      { query: params }
    )
    return response.plans ?? []
  }

  listAll(params: ListPlansParams = {}): Promise<ZohoPlan[]> {
    return this.client.listAll<ZohoPlan>("/plans", "plans", { query: params })
  }

  iterate(
    params: ListPlansParams = {}
  ): AsyncGenerator<ZohoPlan, void, undefined> {
    return this.client.paginate<ZohoPlan>("/plans", "plans", { query: params })
  }

  async markAsActive(planCode: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/plans/${seg(planCode)}/markasactive`,
      { method: "POST" }
    )
  }

  async markAsInactive(planCode: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/plans/${seg(planCode)}/markasinactive`,
      { method: "POST" }
    )
  }

  async markAsFree(planCode: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/plans/${seg(planCode)}/markasfree`,
      { method: "POST" }
    )
  }

  async markAsNonFree(planCode: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/plans/${seg(planCode)}/markasnonfree`,
      { method: "POST" }
    )
  }
}

export class Addons extends ZohoResource {
  async create(params: CreateAddonParams): Promise<ZohoAddon> {
    const response = await this.client.request<{ addon: ZohoAddon }>(
      "/addons",
      {
        method: "POST",
        body: params,
      }
    )
    return response.addon
  }

  async retrieve(addonCode: string): Promise<ZohoAddon> {
    const response = await this.client.request<{ addon: ZohoAddon }>(
      `/addons/${seg(addonCode)}`
    )
    return response.addon
  }

  async update(
    addonCode: string,
    params: UpdateAddonParams
  ): Promise<ZohoAddon> {
    const response = await this.client.request<{ addon: ZohoAddon }>(
      `/addons/${seg(addonCode)}`,
      { method: "PUT", body: params }
    )
    return response.addon
  }

  async delete(addonCode: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(`/addons/${seg(addonCode)}`, {
      method: "DELETE",
    })
  }

  async list(params: ListAddonsParams = {}): Promise<ZohoAddon[]> {
    const response = await this.client.request<{ addons?: ZohoAddon[] }>(
      "/addons",
      { query: params }
    )
    return response.addons ?? []
  }

  listAll(params: ListAddonsParams = {}): Promise<ZohoAddon[]> {
    return this.client.listAll<ZohoAddon>("/addons", "addons", {
      query: params,
    })
  }

  async markAsActive(addonCode: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/addons/${seg(addonCode)}/markasactive`,
      { method: "POST" }
    )
  }

  async markAsInactive(addonCode: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/addons/${seg(addonCode)}/markasinactive`,
      { method: "POST" }
    )
  }
}

export class Coupons extends ZohoResource {
  async create(params: CreateCouponParams): Promise<ZohoCoupon> {
    const response = await this.client.request<{ coupon: ZohoCoupon }>(
      "/coupons",
      { method: "POST", body: params }
    )
    return response.coupon
  }

  async retrieve(couponCode: string): Promise<ZohoCoupon> {
    const response = await this.client.request<{ coupon: ZohoCoupon }>(
      `/coupons/${seg(couponCode)}`
    )
    return response.coupon
  }

  async update(
    couponCode: string,
    params: UpdateCouponParams
  ): Promise<ZohoCoupon> {
    const response = await this.client.request<{ coupon: ZohoCoupon }>(
      `/coupons/${seg(couponCode)}`,
      { method: "PUT", body: params }
    )
    return response.coupon
  }

  async delete(couponCode: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(`/coupons/${seg(couponCode)}`, {
      method: "DELETE",
    })
  }

  async list(params: ZohoListParams = {}): Promise<ZohoCoupon[]> {
    const response = await this.client.request<{ coupons?: ZohoCoupon[] }>(
      "/coupons",
      { query: params }
    )
    return response.coupons ?? []
  }

  listAll(params: ZohoListParams = {}): Promise<ZohoCoupon[]> {
    return this.client.listAll<ZohoCoupon>("/coupons", "coupons", {
      query: params,
    })
  }

  async markAsActive(couponCode: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/coupons/${seg(couponCode)}/markasactive`,
      { method: "POST" }
    )
  }

  async markAsInactive(couponCode: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/coupons/${seg(couponCode)}/markasinactive`,
      { method: "POST" }
    )
  }
}

export class Pricebooks extends ZohoResource {
  async list(params: ZohoListParams = {}): Promise<ZohoPricebook[]> {
    const response = await this.client.request<{
      pricebooks?: ZohoPricebook[]
    }>("/pricebooks", { query: params })
    return response.pricebooks ?? []
  }

  async retrieve(pricebookId: string): Promise<ZohoPricebook> {
    const response = await this.client.request<{ pricebook: ZohoPricebook }>(
      `/pricebooks/${seg(pricebookId)}`
    )
    return response.pricebook
  }

  async create(params: Record<string, unknown>): Promise<ZohoPricebook> {
    const response = await this.client.request<{ pricebook: ZohoPricebook }>(
      "/pricebooks",
      { method: "POST", body: params }
    )
    return response.pricebook
  }

  async delete(pricebookId: string): Promise<ZohoResponse> {
    return this.client.request<ZohoResponse>(
      `/pricebooks/${seg(pricebookId)}`,
      { method: "DELETE" }
    )
  }
}
