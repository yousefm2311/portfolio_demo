import { cookies } from "next/headers";
import ProjectsBrowser from "@/components/ProjectsBrowser";
import { getProjects } from "@/lib/projects";
import { getLocaleFromCookies, getStrings } from "@/lib/i18n";

export const metadata = {
  title: "Projects | Product Playground",
  description: "Browse demo-first projects and filter by tags.",
};

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const locale = await getLocaleFromCookies(cookies());
  const strings = getStrings(locale);
  const projects = await getProjects();

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm font-medium text-blue-700">
          {strings.projectsPage.eyebrow}
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 font-[var(--font-display)]">
          {strings.projectsPage.title}
        </h1>
        <p className="text-slate-600">{strings.projectsPage.body}</p>
      </header>
      <ProjectsBrowser locale={locale} strings={strings} projects={projects} />
    </div>
  );
}
