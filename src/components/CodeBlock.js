"use client";

import { useState } from "react";

export default function CodeBlock({ code, label, strings }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!code) {
      return;
    }

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-slate-950 text-slate-100">
      {label ? (
        <div className="border-b border-slate-800 px-4 py-2 text-xs text-slate-400">
          {label}
        </div>
      ) : null}
      <button
        type="button"
        onClick={handleCopy}
        className="absolute left-3 top-3 rounded-full border border-slate-700 px-3 py-1 text-[11px] text-slate-200 transition hover:border-slate-500"
      >
        {copied ? strings.common.copied : strings.common.copy}
      </button>
      <pre className="overflow-x-auto p-4 text-xs leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
