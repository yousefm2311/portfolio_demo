import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-5xl px-4 pt-12 pb-14">
        <h1 className="text-2xl font-semibold">المشاريع</h1>
        <p className="mt-2 text-slate-600">اختار مشروع وافتح صفحة الـ Demo.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="rounded-2xl border border-slate-200 p-5 hover:bg-slate-50">
              <h2 className="font-semibold">{p.title}</h2>
              <p className="mt-1 text-sm text-slate-600">{p.tagline}</p>
              <div className="mt-3 text-xs text-slate-500">Stack: {p.stack.join(" • ")}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
