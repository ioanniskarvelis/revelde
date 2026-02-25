import crypto from "node:crypto";

const TOKEN_EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours

function getSecret(): string {
  const secret = process.env.ADMIN_PASS;
  if (!secret) throw new Error("ADMIN_PASS env var not set");
  return secret;
}

export function createToken(username: string): string {
  const payload = JSON.stringify({
    user: username,
    exp: Date.now() + TOKEN_EXPIRY_MS,
  });
  const signature = crypto
    .createHmac("sha256", getSecret())
    .update(payload)
    .digest("hex");
  const payloadB64 = Buffer.from(payload).toString("base64url");
  return `${payloadB64}.${signature}`;
}

export function verifyToken(token: string): { user: string } | null {
  try {
    const [payloadB64, signature] = token.split(".");
    if (!payloadB64 || !signature) return null;

    const payload = Buffer.from(payloadB64, "base64url").toString();
    const expectedSig = crypto
      .createHmac("sha256", getSecret())
      .update(payload)
      .digest("hex");

    if (signature !== expectedSig) return null;

    const data = JSON.parse(payload) as { user: string; exp: number };
    if (data.exp < Date.now()) return null;

    return { user: data.user };
  } catch {
    return null;
  }
}

export function requireAuth(request: Request): Response | null {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const token = authHeader.slice(7);
  const payload = verifyToken(token);
  if (!payload) {
    return new Response(JSON.stringify({ error: "Invalid or expired token" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  return null;
}

export function corsHeaders(): Record<string, string> {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  };
}

export function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, max-age=0",
      Pragma: "no-cache",
      ...corsHeaders(),
    },
  });
}
