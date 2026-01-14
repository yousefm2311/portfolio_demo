import Link from "next/link";
import { cookies } from "next/headers";
import ProblemPicker from "@/components/ProblemPicker";
import { getProjects } from "@/lib/projects";
import { getLocaleFromCookies, getStrings } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export default async function Home() {
  const locale = await getLocaleFromCookies(cookies());
  const strings = getStrings(locale);
  const projects = await getProjects();

  return (
    <div className="space-y-14">
      <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm font-medium text-blue-700">
            {strings.home.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl font-[var(--font-display)]">
            {strings.home.headline}
          </h1>
          <p className="text-lg text-slate-600">{strings.home.body}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              {strings.home.primaryCta}
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-medium text-blue-700 transition hover:border-blue-300 hover:bg-blue-50"
            >
              {strings.home.secondaryCta}
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 font-[var(--font-display)]">
            {strings.home.howTitle}
          </h2>
          <div className="mt-5 space-y-4 text-sm text-slate-600">
            {strings.home.steps.map((step, index) => (
              <div key={step.title} className="flex gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="font-medium text-slate-800">{step.title}</p>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-slate-900 font-[var(--font-display)]">
            {strings.home.pickerTitle}
          </h2>
          <p className="text-slate-600">{strings.home.pickerBody}</p>
        </div>
        <ProblemPicker locale={locale} strings={strings} projects={projects} />
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {strings.home.features.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm"
          >
            <h3 className="text-base font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{item.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
