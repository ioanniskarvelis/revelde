import type { Context } from "@netlify/functions";
import { getStore } from "@netlify/blobs";
import { requireAuth, corsHeaders, jsonResponse } from "./_shared/auth-utils.ts";

const STORE_KEYS: [string, string][] = [
  ["menu", "items"],
  ["offers", "list"],
  ["info", "business"],
  ["minimum-orders", "list"],
];

export default async (request: Request, _context: Context) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders() });
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const authError = requireAuth(request);
  if (authError) return authError;

  try {
    for (const [storeName, key] of STORE_KEYS) {
      const store = getStore(storeName);
      await store.delete(key);
    }
    return jsonResponse({
      success: true,
      message: `Cleared all data. Seed data will be applied on next request.`,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return jsonResponse({ error: `Reset failed: ${message}` }, 500);
  }
};

export const config = {
  path: "/api/reset",
};
