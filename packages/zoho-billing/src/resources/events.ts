import { ZohoResource, seg } from "./base"
import type { ListEventsParams, ZohoEvent } from "../types/event"

/**
 * The events feed backing Zoho's webhooks.
 *
 * Webhooks are best-effort: an endpoint that is down during a delivery does
 * not get a replay. Polling this feed on a schedule, keyed by the last
 * `event_id` you processed, is how you close that gap.
 */
export class Events extends ZohoResource {
  async retrieve(eventId: string): Promise<ZohoEvent> {
    const response = await this.client.request<{ event: ZohoEvent }>(
      `/events/${seg(eventId)}`
    )
    return response.event
  }

  async list(params: ListEventsParams = {}): Promise<ZohoEvent[]> {
    const response = await this.client.request<{ events?: ZohoEvent[] }>(
      "/events",
      { query: params }
    )
    return response.events ?? []
  }

  listAll(params: ListEventsParams = {}): Promise<ZohoEvent[]> {
    return this.client.listAll<ZohoEvent>("/events", "events", {
      query: params,
    })
  }

  iterate(
    params: ListEventsParams = {}
  ): AsyncGenerator<ZohoEvent, void, undefined> {
    return this.client.paginate<ZohoEvent>("/events", "events", {
      query: params,
    })
  }
}
