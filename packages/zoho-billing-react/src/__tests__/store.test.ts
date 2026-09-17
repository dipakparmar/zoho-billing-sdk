import { describe, expect, test } from "bun:test"
import { BillingStore, buildKey } from "../store"

describe("buildKey", () => {
  test("returns the bare path when there is no query", () => {
    expect(buildKey("/subscriptions")).toBe("/subscriptions")
  })

  test("drops undefined and null values", () => {
    expect(buildKey("/plans", { product_id: undefined, filter_by: null })).toBe(
      "/plans"
    )
  })

  test("sorts keys so argument order does not fragment the cache", () => {
    // Two components passing the same filters in different orders must share
    // one cache entry, not trigger two requests.
    expect(buildKey("/subs", { b: 2, a: 1 })).toBe(
      buildKey("/subs", { a: 1, b: 2 })
    )
  })
})

describe("BillingStore", () => {
  test("returns a stable idle snapshot for unknown keys", () => {
    // useSyncExternalStore re-renders forever if getSnapshot returns a fresh
    // object each call.
    const store = new BillingStore()
    expect(store.getSnapshot("/missing")).toBe(store.getSnapshot("/missing"))
    expect(store.getSnapshot("/missing").status).toBe("idle")
  })

  test("moves through loading to success", async () => {
    const store = new BillingStore()
    const states: string[] = []
    store.subscribe("/k", () => states.push(store.getSnapshot("/k").status))

    await store.load("/k", async () => ({ value: 1 }))

    expect(states).toEqual(["loading", "success"])
    expect(store.getSnapshot<{ value: number }>("/k").data).toEqual({
      value: 1,
    })
  })

  test("records errors and rejects the caller", async () => {
    const store = new BillingStore()
    const failure = new Error("boom")

    await expect(
      store.load("/k", async () => {
        throw failure
      })
    ).rejects.toThrow("boom")

    const entry = store.getSnapshot("/k")
    expect(entry.status).toBe("error")
    expect(entry.error).toBe(failure)
  })

  test("dedupes concurrent loads of the same key", async () => {
    let calls = 0
    const store = new BillingStore()
    const fetcher = async () => {
      calls += 1
      await new Promise((resolve) => setTimeout(resolve, 5))
      return calls
    }

    const results = await Promise.all([
      store.load("/k", fetcher),
      store.load("/k", fetcher),
      store.load("/k", fetcher),
    ])

    expect(calls).toBe(1)
    expect(results).toEqual([1, 1, 1])
  })

  test("force bypasses dedupe", async () => {
    let calls = 0
    const store = new BillingStore()
    const fetcher = async () => ++calls

    await store.load("/k", fetcher)
    await store.load("/k", fetcher, { force: true })

    expect(calls).toBe(2)
  })

  test("keeps previous data visible while refetching", async () => {
    // Blanking the UI during a background refresh is a visible regression.
    const store = new BillingStore()
    await store.load("/k", async () => "first")

    let seenDuringLoad: unknown
    store.subscribe("/k", () => {
      const entry = store.getSnapshot("/k")
      if (entry.status === "loading") seenDuringLoad = entry.data
    })

    await store.load("/k", async () => "second", { force: true })

    expect(seenDuringLoad).toBe("first")
    expect(store.getSnapshot("/k").data).toBe("second")
  })

  test("invalidate clears matching keys and notifies them", () => {
    const store = new BillingStore()
    store.setData("/subscriptions", [1])
    store.setData("/subscriptions/sub_1", { id: "sub_1" })
    store.setData("/invoices", [2])

    let notified = 0
    store.subscribe("/subscriptions/sub_1", () => notified++)

    store.invalidate("/subscriptions")

    expect(store.getSnapshot("/subscriptions").status).toBe("idle")
    expect(store.getSnapshot("/subscriptions/sub_1").status).toBe("idle")
    expect(store.getSnapshot("/invoices").status).toBe("success")
    expect(notified).toBe(1)
  })

  test("unsubscribe stops further notifications", () => {
    const store = new BillingStore()
    let calls = 0
    const unsubscribe = store.subscribe("/k", () => calls++)

    store.setData("/k", 1)
    unsubscribe()
    store.setData("/k", 2)

    expect(calls).toBe(1)
  })

  test("clear empties the cache and notifies every key", () => {
    const store = new BillingStore()
    store.setData("/a", 1)
    store.setData("/b", 2)
    let notified = 0
    store.subscribe("/a", () => notified++)

    store.clear()

    expect(store.getSnapshot("/a").status).toBe("idle")
    expect(store.getSnapshot("/b").status).toBe("idle")
    expect(notified).toBe(1)
  })
})
