import Link from "next/link";

export default function DemoPhoneFrame({ url, strings }) {
  return (
    <section className="rounded-2xl border border-blue-100 bg-white/80 p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            {strings.projectPage.demoPreviewTitle}
          </h2>
          <p className="text-sm text-slate-600">
            {strings.projectPage.demoPreviewBody}
          </p>
        </div>
        {url ? (
          <Link
            href={url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50"
          >
            {strings.projectPage.demoPreviewOpen}
          </Link>
        ) : null}
      </div>

      {url ? (
        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="relative mx-auto w-full max-w-[320px] rounded-[48px] border border-slate-200 bg-slate-900 p-3 shadow-xl">
            <div className="absolute left-1/2 top-3 h-6 w-24 -translate-x-1/2 rounded-full bg-slate-800" />
            <div className="overflow-hidden rounded-[36px] bg-white">
              <iframe
                title={strings.projectPage.demoPreviewTitle}
                src={url}
                className="h-[560px] w-full"
                loading="lazy"
              />
            </div>
          </div>
          <p className="text-xs text-slate-500">
            {strings.projectPage.demoPreviewHint}
          </p>
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 p-6 text-sm text-slate-600">
          {strings.projectPage.demoPreviewEmpty}
        </div>
      )}
    </section>
  );
}
