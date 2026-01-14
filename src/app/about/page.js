import { cookies } from "next/headers";
import { getLocaleFromCookies, getStrings } from "@/lib/i18n";

export const metadata = {
  title: "About | Product Playground",
  description: "Profile and services overview.",
};

export default async function AboutPage() {
  const locale = await getLocaleFromCookies(cookies());
  const strings = getStrings(locale);

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-sm md:p-8">
        <p className="text-sm font-medium text-blue-700">
          {strings.about.eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900 font-[var(--font-display)]">
          {strings.about.title}
        </h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          {strings.about.body}
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            {strings.about.skillsTitle}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {strings.about.skills.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            {strings.about.offerTitle}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {strings.about.offers.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6 text-sm text-slate-700">
        <h2 className="text-base font-semibold text-slate-900">
          {strings.about.styleTitle}
        </h2>
        <p className="mt-2">{strings.about.styleBody}</p>
      </section>
    </div>
  );
}
