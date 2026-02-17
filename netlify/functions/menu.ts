import type { Context } from "@netlify/functions";
import { getStore } from "@netlify/blobs";
import { requireAuth, corsHeaders, jsonResponse } from "./_shared/auth-utils.ts";
import { DEFAULT_MENU_ITEMS } from "./_shared/seed-data.ts";
import type { MenuItem } from "./_shared/types.ts";

const STORE_NAME = "menu";
const KEY = "items";

function migrateItem(item: Record<string, unknown>): MenuItem {
  const hasLegacyPrice = "price" in item && typeof item.price === "number";
  const hasNewPrices = "priceDelivery" in item && "priceInStore" in item;
  if (hasLegacyPrice && !hasNewPrices) {
    const price = item.price as number;
    return { ...item, priceDelivery: price, priceInStore: price + 2 } as MenuItem;
  }
  return item as MenuItem;
}

async function getItems(context: Context): Promise<MenuItem[]> {
  const store = getStore(STORE_NAME);
  const raw = await store.get(KEY);
  if (!raw) {
    await store.set(KEY, JSON.stringify(DEFAULT_MENU_ITEMS));
    return DEFAULT_MENU_ITEMS;
  }
  const parsed = JSON.parse(raw) as Record<string, unknown>[];
  const items = parsed.map(migrateItem);
  const needsMigration = parsed.some((p) => "price" in p && !("priceDelivery" in p));
  if (needsMigration) {
    const migrated = items.map((item) => {
      const { price, ...rest } = item as MenuItem & { price?: number };
      return rest;
    });
    await saveItems(context, migrated);
    return migrated;
  }
  return items;
}

async function saveItems(_context: Context, items: MenuItem[]): Promise<void> {
  const store = getStore(STORE_NAME);
  await store.set(KEY, JSON.stringify(items));
}

export default async (request: Request, context: Context) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders() });
  }

  if (request.method === "GET") {
    const items = await getItems(context);
    return jsonResponse(items);
  }

  const authError = requireAuth(request);
  if (authError) return authError;

  if (request.method === "POST") {
    const body = (await request.json()) as Omit<MenuItem, "id">;
    const items = await getItems(context);
    const newItem: MenuItem = {
      ...body,
      id: crypto.randomUUID(),
    };
    items.push(newItem);
    await saveItems(context, items);
    return jsonResponse(newItem, 201);
  }

  if (request.method === "PUT") {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    if (!id) return jsonResponse({ error: "Missing id parameter" }, 400);

    const body = (await request.json()) as Partial<MenuItem>;
    const items = await getItems(context);
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) return jsonResponse({ error: "Item not found" }, 404);

    items[index] = { ...items[index], ...body, id };
    await saveItems(context, items);
    return jsonResponse(items[index]);
  }

  if (request.method === "DELETE") {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    if (!id) return jsonResponse({ error: "Missing id parameter" }, 400);

    const items = await getItems(context);
    const filtered = items.filter((item) => item.id !== id);
    if (filtered.length === items.length) {
      return jsonResponse({ error: "Item not found" }, 404);
    }
    await saveItems(context, filtered);
    return jsonResponse({ success: true });
  }

  return jsonResponse({ error: "Method not allowed" }, 405);
};

export const config = {
  path: "/api/menu",
};
