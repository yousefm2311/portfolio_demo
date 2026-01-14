import { NextResponse } from "next/server";
import projects from "@/data/projects";

export const dynamic = "force-dynamic";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const { projectSlug, endpointKey, payload, locale } = body || {};

  const project = projects.find((item) => item.slug === projectSlug);
  const endpoint = project?.apiPlayground?.endpoints?.find(
    (item) => item.key === endpointKey
  );

  const fallbackMessage =
    locale === "ar"
      ? "تم تنفيذ الطلب التجريبي بنجاح."
      : "Mock request executed successfully.";
  const fallback = {
    ok: true,
    data: {
      message: fallbackMessage,
      echo: payload || null,
    },
  };

  return NextResponse.json({
    ...(endpoint?.mockResponse || fallback),
    meta: {
      projectSlug: project?.slug || "unknown",
      endpointKey: endpointKey || "unknown",
      receivedAt: new Date().toISOString(),
    },
  });
}
