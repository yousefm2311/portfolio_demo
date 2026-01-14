"use client";

import { useState } from "react";
import { sendMockRequest } from "@/lib/api";
import CodeBlock from "./CodeBlock";

export default function ApiPlayground({ project, locale, strings }) {
  const endpoints = project.apiPlayground?.endpoints || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const activeEndpoint = endpoints[activeIndex];
  const activeLabel =
    activeEndpoint?.label?.[locale] ||
    activeEndpoint?.label?.ar ||
    activeEndpoint?.label ||
    "";
  const sampleBody =
    activeEndpoint?.sampleBody?.[locale] || activeEndpoint?.sampleBody || {};

  const handleSend = async () => {
    if (!activeEndpoint) {
      return;
    }

    setLoading(true);
    setError("");
    try {
      const data = await sendMockRequest({
        projectSlug: project.slug,
        endpointKey: activeEndpoint.key,
        payload: sampleBody,
        locale,
      });
      setResponse(data);
    } catch (err) {
      setError(strings.apiPlayground.error);
    } finally {
      setLoading(false);
    }
  };

  if (endpoints.length === 0) {
    return (
      <div className="rounded-2xl border border-blue-100 bg-white/80 p-6 text-sm text-slate-600">
        {strings.apiPlayground.empty}
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
      <div className="space-y-3">
        <p className="text-sm font-semibold text-slate-700">
          {strings.apiPlayground.listTitle}
        </p>
        {endpoints.map((endpoint, index) => {
          const isActive = index === activeIndex;
          const label = endpoint.label?.[locale] || endpoint.label?.ar || endpoint.label;
          return (
            <button
              key={endpoint.key}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`w-full rounded-xl border px-3 py-2 text-start text-sm transition ${
                isActive
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-blue-100 bg-white text-slate-600 hover:border-blue-200"
              }`}
            >
              <div className="text-xs text-blue-200/80">
                {endpoint.method}
              </div>
              <div className="font-medium">{label}</div>
            </button>
          );
        })}
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs text-slate-500">{strings.apiPlayground.baseUrl}</p>
              <p className="text-sm font-medium text-slate-800">
                {project.apiPlayground.baseUrl}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                {strings.apiPlayground.note}
              </p>
            </div>
            <button
              type="button"
              onClick={handleSend}
              disabled={loading}
              className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? strings.apiPlayground.sending : strings.apiPlayground.send}
            </button>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">
              {activeEndpoint.method}
            </span>
            <span className="rounded-full border border-blue-100 bg-white px-3 py-1 text-slate-600">
              {activeEndpoint.path}
            </span>
            {activeLabel ? (
              <span className="rounded-full border border-blue-100 bg-white px-3 py-1 text-slate-600">
                {activeLabel}
              </span>
            ) : null}
          </div>
        </div>

        {error ? <p className="text-sm text-rose-600">{error}</p> : null}

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-700">
              {strings.apiPlayground.sampleBody}
            </p>
            <CodeBlock
              code={JSON.stringify(sampleBody, null, 2)}
              strings={strings}
            />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-700">
              {strings.apiPlayground.response}
            </p>
            <CodeBlock
              code={
                response
                  ? JSON.stringify(response, null, 2)
                  : strings.apiPlayground.placeholder
              }
              strings={strings}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
