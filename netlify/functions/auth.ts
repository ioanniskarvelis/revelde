import type { Context } from "@netlify/functions";
import { createToken, corsHeaders, jsonResponse } from "./_shared/auth-utils.ts";

export default async (request: Request, _context: Context) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders() });
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const { username, password } = (await request.json()) as {
      username: string;
      password: string;
    };

    const adminUser = process.env.ADMIN_USER;
    const adminPass = process.env.ADMIN_PASS;

    if (!adminUser || !adminPass) {
      return jsonResponse({ error: "Server misconfigured" }, 500);
    }

    if (username !== adminUser || password !== adminPass) {
      return jsonResponse({ error: "Invalid credentials" }, 401);
    }

    const token = createToken(username);
    return jsonResponse({ token });
  } catch {
    return jsonResponse({ error: "Invalid request body" }, 400);
  }
};

export const config = {
  path: "/api/auth",
};
