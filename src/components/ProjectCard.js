"use client";

import Image from "next/image";
import Link from "next/link";
import { getProblemLabel } from "@/lib/i18n";

export default function ProjectCard({ project, locale, strings, reason }) {
  const isLive = project.demo?.status === "live";
  const content = project.content?.[locale] || project.content?.ar || project;
  const mainImage = project.images?.[0];
  const mainImageAlt =
    mainImage?.alt?.[locale] || mainImage?.alt?.ar || mainImage?.alt?.en || "";
  const stackSeparator = strings.common?.listSeparator || ", ";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      {mainImage ? (
        <div className="mb-4 overflow-hidden rounded-xl border border-blue-100">
          <Image
            src={mainImage.src}
            alt={mainImageAlt}
            width={900}
            height={600}
            className="h-40 w-full object-cover transition group-hover:scale-[1.02]"
          />
        </div>
      ) : null}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 font-[var(--font-display)]">
            {content.title}
          </h3>
          <p className="mt-1 text-sm text-slate-600">{content.tagline}</p>
        </div>
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${
            isLive
              ? "bg-emerald-100 text-emerald-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {isLive ? strings.projectCard.live : strings.projectCard.soon}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.problems.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-blue-100 px-2.5 py-1 text-xs text-slate-600"
          >
            {getProblemLabel(locale, tag)}
          </span>
        ))}
      </div>

      {reason ? <p className="mt-3 text-xs text-blue-700">{reason}</p> : null}

      <div className="mt-auto pt-4 text-xs text-slate-500">
        {strings.projectCard.stack} {project.stack.join(stackSeparator)}
      </div>
    </Link>
  );
}
