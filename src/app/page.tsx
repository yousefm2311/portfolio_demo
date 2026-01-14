import Link from "next/link";
import { projects } from "@/data/projects";

const filters = [
  "Realtime Chat",
  "Tracking",
  "Marketplace",
  "Orders",
  "Transit",
] as const;

export default function Home() {
  const featured = projects;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="mx-auto max-w-5xl px-4 pt-12 pb-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">Yousef • Full-Stack (Flutter + Node)</p>
            <h1 className="mt-2 text-3xl font-semibold leading-tight">
              مش بعرّض صور… هنا هتجرّب المنتج
            </h1>
            <p className="mt-3 text-slate-600 max-w-2xl">
              اختار نوع المشكلة اللي عندك، وشوف مشاريع بتتحل فعليًا — وبعدها افتح صفحة المشروع ودوس Demo.
            </p>
          </div>

          <Link
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50"
            href="/projects"
          >
            كل المشاريع
          </Link>
        </div>

        <div className="mt-8">
          <p className="text-sm font-medium text-slate-700">اختار التخصص:</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {filters.map((f) => (
              <span
                key={f}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 pb-14">
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="rounded-2xl border border-slate-200 p-5 hover:bg-slate-50 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold">{p.title}</h2>
                  <p className="mt-1 text-sm text-slate-600">{p.tagline}</p>
                </div>
                <span className="text-xs rounded-full border border-slate-200 px-2 py-1 text-slate-600">
                  {p.demo?.status === "live" ? "Demo Live" : "Demo قريبًا"}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.problemTags.slice(0, 3).map((t) => (
                  <span key={t} className="text-xs text-slate-600 border border-slate-200 rounded-full px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 text-xs text-slate-500">
                Stack: {p.stack.join(" • ")}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
