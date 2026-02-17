import type { Context } from "@netlify/functions";
import { getStore } from "@netlify/blobs";
import { requireAuth, corsHeaders, jsonResponse } from "./_shared/auth-utils.ts";
import { DEFAULT_MINIMUM_ORDERS } from "./_shared/seed-data.ts";
import type { MinimumOrderEntry } from "./_shared/types.ts";

const STORE_NAME = "minimum-orders";
const KEY = "list";

async function getEntries(_context: Context): Promise<MinimumOrderEntry[]> {
  const store = getStore(STORE_NAME);
  const raw = await store.get(KEY);
  if (!raw) {
    await store.set(KEY, JSON.stringify(DEFAULT_MINIMUM_ORDERS));
    return DEFAULT_MINIMUM_ORDERS;
  }
  return JSON.parse(raw) as MinimumOrderEntry[];
}

async function saveEntries(
  _context: Context,
  entries: MinimumOrderEntry[]
): Promise<void> {
  const store = getStore(STORE_NAME);
  await store.set(KEY, JSON.stringify(entries));
}

export default async (request: Request, context: Context) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders() });
  }

  if (request.method === "GET") {
    const entries = await getEntries(context);
    return jsonResponse(entries.sort((a, b) => a.order - b.order));
  }

  const authError = requireAuth(request);
  if (authError) return authError;

  if (request.method === "POST") {
    const body = (await request.json()) as Omit<MinimumOrderEntry, "id">;
    const entries = await getEntries(context);
    const newEntry: MinimumOrderEntry = {
      ...body,
      id: crypto.randomUUID(),
    };
    entries.push(newEntry);
    await saveEntries(context, entries);
    return jsonResponse(newEntry, 201);
  }

  if (request.method === "PUT") {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    if (!id) return jsonResponse({ error: "Missing id parameter" }, 400);

    const body = (await request.json()) as Partial<MinimumOrderEntry>;
    const entries = await getEntries(context);
    const index = entries.findIndex((e) => e.id === id);
    if (index === -1) return jsonResponse({ error: "Entry not found" }, 404);

    entries[index] = { ...entries[index], ...body, id };
    await saveEntries(context, entries);
    return jsonResponse(entries[index]);
  }

  if (request.method === "DELETE") {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    if (!id) return jsonResponse({ error: "Missing id parameter" }, 400);

    const entries = await getEntries(context);
    const filtered = entries.filter((e) => e.id !== id);
    if (filtered.length === entries.length) {
      return jsonResponse({ error: "Entry not found" }, 404);
    }
    await saveEntries(context, filtered);
    return jsonResponse({ success: true });
  }

  return jsonResponse({ error: "Method not allowed" }, 405);
};

export const config = {
  path: "/api/minimum-orders",
};
