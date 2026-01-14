import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  const demoLive = project.demo?.status === "live" && project.demo.url;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-5xl px-4 pt-10 pb-14">
        <Link href="/projects" className="text-sm text-slate-600 hover:underline">
          ← رجوع للمشاريع
        </Link>

        <header className="mt-4 rounded-3xl border border-slate-200 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold">{project.title}</h1>
              <p className="mt-2 text-slate-600">{project.tagline}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.problemTags.map((t) => (
                  <span key={t} className="text-xs text-slate-700 border border-slate-200 rounded-full px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 text-sm text-slate-600">
                <span className="font-medium text-slate-800">Stack:</span>{" "}
                {project.stack.join(" • ")}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={demoLive ? project.demo!.url : "#"}
                className={`rounded-2xl px-4 py-2 text-sm text-center border ${
                  demoLive
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-slate-100 text-slate-500 cursor-not-allowed"
                }`}
              >
                {demoLive ? "جرّب التطبيق الآن" : "Demo قريبًا"}
              </a>
              {project.demo?.note && (
                <p className="text-xs text-slate-500 max-w-xs">
                  {project.demo.note}
                </p>
              )}
            </div>
          </div>
        </header>

        <section className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 p-6">
            <h2 className="font-semibold">Highlights</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {project.highlights.map((h) => (
                <li key={h}>• {h}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6">
            <h2 className="font-semibold">Behind the scenes</h2>
            <p className="mt-3 text-sm text-slate-600">
              هنا هنحط لاحقًا: Architecture Diagram + API Flow + Decisions (ليه Socket.io؟ ليه Mongo؟).
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
