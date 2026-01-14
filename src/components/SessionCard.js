"use client";

import { useEffect, useState } from "react";
import { createDemoSession } from "@/lib/api";

export default function SessionCard({ locale, strings }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const [now, setNow] = useState(Date.now());
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const createSession = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await createDemoSession(locale);
      setSession(data);
    } catch (err) {
      setError(strings.session.error);
    } finally {
      setLoading(false);
    }
  };

  const remainingMs = session
    ? new Date(session.expiresAt).getTime() - now
    : 0;
  const isExpired = session && remainingMs <= 0;
  const minutes = Math.max(0, Math.floor(remainingMs / 60000));
  const seconds = Math.max(0, Math.floor((remainingMs % 60000) / 1000));
  const countdown = session
    ? `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`
    : "--:--";

  return (
    <div
      id="session"
      className="rounded-2xl border border-blue-100 bg-white/80 p-6 shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 font-[var(--font-display)]">
            {strings.session.title}
          </h3>
          <p className="text-sm text-slate-600">{strings.session.subtitle}</p>
        </div>
        <button
          type="button"
          onClick={createSession}
          disabled={loading}
          className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? strings.session.loading : strings.session.button}
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-600">
        <span className="rounded-full bg-blue-50 px-3 py-1">
          {strings.session.duration}
        </span>
        <span className="rounded-full bg-blue-50 px-3 py-1">
          {strings.session.countdown.replace("{time}", countdown)}
        </span>
      </div>

      {error ? <p className="mt-3 text-sm text-rose-600">{error}</p> : null}

      {session ? (
        <div className="mt-5 space-y-4">
          <div className="rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-sm text-slate-700">
            <p>
              {strings.session.token} {session.token}
            </p>
            <p>
              {strings.session.expiresAt}{" "}
              {new Date(session.expiresAt).toLocaleString(
                locale === "ar" ? "ar-EG" : "en-US"
              )}
            </p>
            <p className="mt-1 text-xs text-slate-500">{session.note}</p>
          </div>

          {isExpired ? (
            <p className="text-sm text-amber-700">{strings.session.expired}</p>
          ) : (
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-blue-100 bg-white px-4 py-3">
                <h4 className="text-sm font-semibold text-slate-800">
                  {strings.session.client}
                </h4>
                <p className="mt-1 text-xs text-slate-600">
                  {strings.session.email} {session.accounts.client.email}
                </p>
                <p className="text-xs text-slate-600">
                  {strings.session.password} {session.accounts.client.password}
                </p>
              </div>
              <div className="rounded-xl border border-blue-100 bg-white px-4 py-3">
                <h4 className="text-sm font-semibold text-slate-800">
                  {strings.session.provider}
                </h4>
                <p className="mt-1 text-xs text-slate-600">
                  {strings.session.email} {session.accounts.provider.email}
                </p>
                <p className="text-xs text-slate-600">
                  {strings.session.password} {session.accounts.provider.password}
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p className="mt-4 text-sm text-slate-500">{strings.session.empty}</p>
      )}
    </div>
  );
}
