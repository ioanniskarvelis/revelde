import type { Context } from "@netlify/functions";
import { getStore } from "@netlify/blobs";
import { requireAuth, corsHeaders, jsonResponse } from "./_shared/auth-utils.ts";
import { DEFAULT_OFFERS } from "./_shared/seed-data.ts";
import type { ComboOffer } from "./_shared/types.ts";

const STORE_NAME = "offers";
const KEY = "list";

async function getOffers(_context: Context): Promise<ComboOffer[]> {
  const store = getStore(STORE_NAME);
  const raw = await store.get(KEY);
  if (!raw) {
    await store.set(KEY, JSON.stringify(DEFAULT_OFFERS));
    return DEFAULT_OFFERS;
  }
  return JSON.parse(raw) as ComboOffer[];
}

async function saveOffers(_context: Context, offers: ComboOffer[]): Promise<void> {
  const store = getStore(STORE_NAME);
  await store.set(KEY, JSON.stringify(offers));
}

export default async (request: Request, context: Context) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders() });
  }

  if (request.method === "GET") {
    const offers = await getOffers(context);
    const activeOnly = new URL(request.url).searchParams.get("active");
    const result = activeOnly === "true" ? offers.filter((o) => o.active) : offers;
    return jsonResponse(result);
  }

  const authError = requireAuth(request);
  if (authError) return authError;

  if (request.method === "POST") {
    const body = (await request.json()) as Omit<ComboOffer, "id">;
    const offers = await getOffers(context);
    const newOffer: ComboOffer = {
      ...body,
      id: crypto.randomUUID(),
    };
    offers.push(newOffer);
    await saveOffers(context, offers);
    return jsonResponse(newOffer, 201);
  }

  if (request.method === "PUT") {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    if (!id) return jsonResponse({ error: "Missing id parameter" }, 400);

    const body = (await request.json()) as Partial<ComboOffer>;
    const offers = await getOffers(context);
    const index = offers.findIndex((o) => o.id === id);
    if (index === -1) return jsonResponse({ error: "Offer not found" }, 404);

    offers[index] = { ...offers[index], ...body, id };
    await saveOffers(context, offers);
    return jsonResponse(offers[index]);
  }

  if (request.method === "DELETE") {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    if (!id) return jsonResponse({ error: "Missing id parameter" }, 400);

    const offers = await getOffers(context);
    const filtered = offers.filter((o) => o.id !== id);
    if (filtered.length === offers.length) {
      return jsonResponse({ error: "Offer not found" }, 404);
    }
    await saveOffers(context, filtered);
    return jsonResponse({ success: true });
  }

  return jsonResponse({ error: "Method not allowed" }, 405);
};

export const config = {
  path: "/api/offers",
};
