"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { getProblemLabel } from "@/lib/i18n";

export default function ProblemPicker({ locale, strings, projects = [] }) {
  const [selected, setSelected] = useState([]);

  const allProblems = useMemo(() => {
    const keys = Array.from(
      new Set(projects.flatMap((project) => project.problems || []))
    );
    return keys.sort((a, b) =>
      getProblemLabel(locale, a).localeCompare(getProblemLabel(locale, b))
    );
  }, [locale, projects]);

  const toggleTag = (tag) => {
    setSelected((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
    );
  };

  const recommended = useMemo(() => {
    if (selected.length === 0) {
      return [];
    }

    return projects
      .map((project) => {
        const matches = (project.problems || []).filter((tag) =>
          selected.includes(tag)
        );
        return {
          project,
          matches,
          score: matches.length,
        };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [selected, projects]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {allProblems.map((tag) => {
          const isActive = selected.includes(tag);
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
        {selected.length > 0 ? (
          <button
            type="button"
            onClick={() => setSelected([])}
            className="rounded-full border border-transparent bg-blue-50 px-3 py-1 text-sm text-blue-700 transition hover:bg-blue-100"
          >
            {strings.problemPicker.clear}
          </button>
        ) : null}
      </div>

      <div className="rounded-2xl border border-blue-100 bg-white/80 p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 font-[var(--font-display)]">
              {strings.problemPicker.title}
            </h3>
            <p className="text-sm text-slate-600">
              {selected.length === 0
                ? strings.problemPicker.hintEmpty
                : strings.problemPicker.hintResults}
            </p>
          </div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700">
            {selected.length === 0
              ? strings.problemPicker.badgeNone
              : strings.problemPicker.badgeCount.replace(
                  "{count}",
                  selected.length
                )}
          </span>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {recommended.length > 0
              ? recommended.map((item) => {
                  const matchLabels = item.matches.map((tag) =>
                    getProblemLabel(locale, tag)
                  );
                  return (
                    <motion.div
                      key={item.project.slug}
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ProjectCard
                        project={item.project}
                        locale={locale}
                        strings={strings}
                        reason={strings.problemPicker.reason.replace(
                          "{tags}",
                          matchLabels.join(strings.common.listSeparator)
                        )}
                      />
                    </motion.div>
                  );
                })
              : selected.length > 0 && (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="rounded-2xl border border-dashed border-blue-100 bg-blue-50/40 p-6 text-sm text-slate-600">
                      {strings.problemPicker.empty}
                    </div>
                  </motion.div>
                )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
