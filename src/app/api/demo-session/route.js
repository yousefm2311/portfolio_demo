import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

export const dynamic = "force-dynamic";

export async function POST(request) {
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString();
  const token = `demo_${randomUUID().split("-")[0]}`;
  const body = await request.json().catch(() => ({}));
  const locale = body?.locale === "en" ? "en" : "ar";
  const note =
    locale === "en"
      ? "Temporary demo session only. Data resets periodically."
      : "جلسة مؤقتة للتجربة فقط. البيانات بتتصفّر تلقائيًا كل فترة.";

  return NextResponse.json({
    token,
    expiresAt,
    accounts: {
      client: {
        email: "client@demo.local",
        password: "Demo-Client-123",
      },
      provider: {
        email: "provider@demo.local",
        password: "Demo-Provider-456",
      },
    },
    note,
  });
}
