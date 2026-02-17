import type { Context } from "@netlify/functions";
import { getStore } from "@netlify/blobs";
import { requireAuth, corsHeaders, jsonResponse } from "./_shared/auth-utils.ts";
import { DEFAULT_BUSINESS_INFO } from "./_shared/seed-data.ts";
import type { BusinessInfo } from "./_shared/types.ts";

const STORE_NAME = "info";
const KEY = "business";

async function getInfo(_context: Context): Promise<BusinessInfo> {
  const store = getStore(STORE_NAME);
  const raw = await store.get(KEY);
  if (!raw) {
    await store.set(KEY, JSON.stringify(DEFAULT_BUSINESS_INFO));
    return DEFAULT_BUSINESS_INFO;
  }
  return JSON.parse(raw) as BusinessInfo;
}

async function saveInfo(_context: Context, info: BusinessInfo): Promise<void> {
  const store = getStore(STORE_NAME);
  await store.set(KEY, JSON.stringify(info));
}

export default async (request: Request, context: Context) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders() });
  }

  if (request.method === "GET") {
    const info = await getInfo(context);
    return jsonResponse(info);
  }

  if (request.method === "PUT") {
    const authError = requireAuth(request);
    if (authError) return authError;

    const body = (await request.json()) as BusinessInfo;
    if (!body.phone || !body.address || !body.hours) {
      return jsonResponse({ error: "Missing required fields: phone, address, hours" }, 400);
    }
    await saveInfo(context, body);
    return jsonResponse(body);
  }

  return jsonResponse({ error: "Method not allowed" }, 405);
};

export const config = {
  path: "/api/info",
};
