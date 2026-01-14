import { cookies } from "next/headers";
import ProjectBuilder from "@/components/ProjectBuilder";
import { getLocaleFromCookies, getStrings } from "@/lib/i18n";

export const metadata = {
  title: "Studio | Product Playground",
  description: "Create new project entries for the portfolio.",
};

export default async function StudioPage() {
  const locale = await getLocaleFromCookies(cookies());
  const strings = getStrings(locale);

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-sm md:p-8">
        <p className="text-sm font-medium text-blue-700">
          {strings.studio.eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900 font-[var(--font-display)]">
          {strings.studio.title}
        </h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          {strings.studio.body}
        </p>
      </section>

      <ProjectBuilder locale={locale} strings={strings} />

      <section className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6 text-sm text-slate-700">
        <h2 className="text-base font-semibold text-slate-900">
          {strings.studio.noteTitle}
        </h2>
        <p className="mt-2">{strings.studio.noteBody}</p>
      </section>
    </div>
  );
}
