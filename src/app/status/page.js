import { cookies } from "next/headers";
import projects from "@/data/projects";
import { getLocaleFromCookies, getStrings } from "@/lib/i18n";

export const metadata = {
  title: "Status | Product Playground",
  description: "Demo systems status and reset schedule.",
};

export default async function StatusPage() {
  const locale = await getLocaleFromCookies(cookies());
  const strings = getStrings(locale);

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-sm md:p-8">
        <p className="text-sm font-medium text-blue-700">
          {strings.status.eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900 font-[var(--font-display)]">
          {strings.status.title}
        </h1>
        <p className="mt-3 text-slate-600">{strings.status.body}</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => {
          const content = project.content?.[locale] || project.content?.ar || project;
          return (
            <div
              key={project.slug}
              className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">
                  {content.title}
                </h2>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                  {strings.status.statusLabel}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{content.tagline}</p>
              <p className="mt-4 text-xs text-slate-500">
                {strings.status.schedule}
              </p>
            </div>
          );
        })}
      </section>

      <section className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6 text-sm text-slate-700">
        <h2 className="text-base font-semibold text-slate-900">
          {strings.status.privacyTitle}
        </h2>
        <p className="mt-2">{strings.status.privacyBody}</p>
      </section>
    </div>
  );
}
