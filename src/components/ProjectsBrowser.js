"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { getProblemLabel } from "@/lib/i18n";

export default function ProjectsBrowser({ locale, strings, projects = [] }) {
  const [activeTags, setActiveTags] = useState([]);

  const allTags = useMemo(() => {
    const keys = Array.from(
      new Set(projects.flatMap((project) => project.problems || []))
    );
    return keys.sort((a, b) =>
      getProblemLabel(locale, a).localeCompare(getProblemLabel(locale, b))
    );
  }, [locale, projects]);

  const toggleTag = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
    );
  };

  const filtered = useMemo(() => {
    if (activeTags.length === 0) {
      return projects;
    }

    return projects.filter((project) =>
      activeTags.every((tag) => (project.problems || []).includes(tag))
    );
  }, [activeTags, projects]);

  const activeLabels = activeTags.map((tag) => getProblemLabel(locale, tag));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        {allTags.map((tag) => {
          const isActive = activeTags.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              onClick={() => toggleTag(tag)}
              className={`rounded-full border px-3 py-1 text-sm transition ${
                isActive
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-blue-100 bg-white text-slate-600 hover:border-blue-200"
              }`}
            >
              {getProblemLabel(locale, tag)}
            </button>
          );
        })}
        {activeTags.length > 0 ? (
          <button
            type="button"
            onClick={() => setActiveTags([])}
            className="rounded-full border border-transparent bg-blue-50 px-3 py-1 text-sm text-blue-700 transition hover:bg-blue-100"
          >
            {strings.projectsBrowser.clear}
          </button>
        ) : null}
      </div>

      <div className="flex items-center justify-between text-sm text-slate-600">
        <span>
          {strings.projectsBrowser.count.replace("{count}", filtered.length)}
        </span>
        {activeTags.length > 0 ? (
          <span>
            {strings.projectsBrowser.activeFilters.replace(
              "{filters}",
              activeLabels.join(strings.common.listSeparator)
            )}
          </span>
        ) : (
          <span>{strings.projectsBrowser.noFilters}</span>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((project) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ProjectCard project={project} locale={locale} strings={strings} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
