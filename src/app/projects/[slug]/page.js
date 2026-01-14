import Link from "next/link";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import Tabs from "@/components/Tabs";
import SessionCard from "@/components/SessionCard";
import ApiPlayground from "@/components/ApiPlayground";
import DemoPhoneFrame from "@/components/DemoPhoneFrame";
import ProjectGallery from "@/components/ProjectGallery";
import { getProjectBySlug } from "@/lib/projects";
import { getLocaleFromCookies, getProblemLabel, getStrings } from "@/lib/i18n";

const allowedTabs = ["overview", "demo", "under-the-hood", "api"];

export const dynamic = "force-dynamic";

export default async function ProjectPage({ params, searchParams }) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const locale = await getLocaleFromCookies(cookies());
  const strings = getStrings(locale);

  const project = await getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const content = project.content?.[locale] || project.content?.ar || project;
  const currentTab =
    typeof resolvedSearchParams?.tab === "string"
      ? resolvedSearchParams.tab
      : "overview";
  const activeTab = allowedTabs.includes(currentTab) ? currentTab : "overview";
  const isLive = project.demo?.status === "live";
  const demoNote = project.demo?.note?.[locale] || project.demo?.note || "";
  const webPreviewUrl = project.demo?.webPreviewUrl || "";

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-medium text-blue-700">
              {strings.projectPage.eyebrow}
            </p>
            <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl font-[var(--font-display)]">
              {content.title}
            </h1>
            <p className="max-w-2xl text-slate-600">{content.tagline}</p>
            <div className="flex flex-wrap gap-2">
              {project.problems.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-blue-100 px-3 py-1 text-xs text-slate-600"
                >
                  {getProblemLabel(locale, tag)}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={isLive ? project.demo.url : "#"}
              target={isLive ? "_blank" : undefined}
              rel={isLive ? "noreferrer" : undefined}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                isLive
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "cursor-not-allowed bg-slate-200 text-slate-500"
              }`}
              aria-disabled={!isLive}
            >
              {strings.projectPage.liveCta}
            </a>
            <Link
              href={`/projects/${project.slug}?tab=demo#session`}
              className="rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-medium text-blue-700 transition hover:border-blue-300 hover:bg-blue-50"
            >
              {strings.projectPage.sessionCta}
            </Link>
          </div>
        </div>
      </section>

      <Tabs
        currentTab={activeTab}
        basePath={`/projects/${project.slug}`}
        strings={strings}
      />

      {activeTab === "overview" && (
        <section className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <div className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">
                  {strings.projectPage.storyTitle}
                </h2>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <div>
                    <p className="font-semibold text-slate-800">
                      {strings.projectPage.problem}
                    </p>
                    <p>{content.story.problem}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">
                      {strings.projectPage.solution}
                    </p>
                    <p>{content.story.solution}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">
                      {strings.projectPage.result}
                    </p>
                    <p>{content.story.result}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">
                  {strings.projectPage.highlights}
                </h2>
                <ul className="mt-4 list-disc space-y-2 ps-5 text-sm text-slate-600">
                  {content.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                {strings.projectPage.techStack}
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs text-blue-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <ProjectGallery images={project.images} locale={locale} strings={strings} />
        </section>
      )}

      {activeTab === "demo" && (
        <section className="space-y-6">
          <DemoPhoneFrame url={webPreviewUrl} strings={strings} />

          <div className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  {strings.projectPage.demoStatus}
                </h2>
                <p className="text-sm text-slate-600">
                  {isLive ? strings.projectPage.demoLive : strings.projectPage.demoSoon}
                </p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  isLive
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {isLive ? strings.common.live : strings.common.comingSoon}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-600">{demoNote}</p>
          </div>

          <SessionCard locale={locale} strings={strings} />
        </section>
      )}

      {activeTab === "under-the-hood" && (
        <section className="space-y-6">
          <div className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              {strings.projectPage.architecture}
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              {content.architecture.overview}
            </p>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              {strings.projectPage.decisions}
            </h2>
            <ul className="mt-4 list-disc space-y-2 ps-5 text-sm text-slate-600">
              {content.architecture.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {activeTab === "api" && (
        <section className="space-y-6">
          <ApiPlayground project={project} locale={locale} strings={strings} />
        </section>
      )}

      <section className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6 text-sm text-slate-700">
        <h2 className="text-base font-semibold text-slate-900">
          {strings.projectPage.trustTitle}
        </h2>
        <p className="mt-2">{strings.projectPage.trustBody}</p>
      </section>
    </div>
  );
}
