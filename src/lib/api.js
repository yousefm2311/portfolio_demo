
export async function createDemoSession(locale) {
  const response = await fetch("/api/demo-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ locale }),
  });

  if (!response.ok) {
    throw new Error("تعذر إنشاء جلسة الديمو.");
  }

  return response.json();
}

export async function sendMockRequest({
  projectSlug,
  endpointKey,
  payload,
  locale,
}) {
  const response = await fetch("/api/mock-api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ projectSlug, endpointKey, payload, locale }),
  });

  if (!response.ok) {
    throw new Error("تعذر تنفيذ الطلب التجريبي.");
  }

  return response.json();
}
