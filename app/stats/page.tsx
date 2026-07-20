"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useI18n } from "../providers";
import { loadProgress, resetProgress } from "@/lib/storage";
import { clearProfile } from "@/lib/profile";
import { getById } from "@/lib/questions";
import { SECTIONS, type ProgressState, type Section } from "@/lib/types";

function useProgressState() {
  const [state, setState] = useState<ProgressState | null>(null);
  useEffect(() => setState(loadProgress()), []);
  return [state, () => setState(loadProgress())] as const;
}

export default function StatsPage() {
  const { t, sectionName } = useI18n();
  const [state, refresh] = useProgressState();

  const stats = useMemo(() => {
    if (!state) return null;
    const answered = state.answers.length;
    const correct = state.answers.filter((a) => a.correct).length;
    const accuracy = answered ? Math.round((correct / answered) * 100) : 0;

    const bySection: Record<Section, { total: number; correct: number }> = Object.fromEntries(
      SECTIONS.map((s) => [s, { total: 0, correct: 0 }])
    ) as Record<Section, { total: number; correct: number }>;

    for (const a of state.answers) {
      const q = getById(a.questionId);
      if (!q) continue;
      bySection[q.section].total++;
      if (a.correct) bySection[q.section].correct++;
    }

    const days = new Set(
      state.answers.map((a) => new Date(a.timestamp).toISOString().slice(0, 10))
    );
    let streak = 0;
    const cursor = new Date();
    while (days.has(cursor.toISOString().slice(0, 10))) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    }

    const exams = state.examResults.length;
    const passed = state.examResults.filter((e) => e.passed).length;
    const examPassRate = exams ? Math.round((passed / exams) * 100) : 0;

    const coveredSections = SECTIONS.filter((s) => bySection[s].total > 0).length;
    const coverage = coveredSections / SECTIONS.length;
    const readiness = Math.round(accuracy * 0.7 + coverage * 100 * 0.3);

    return { answered, accuracy, bySection, streak, exams, examPassRate, readiness };
  }, [state]);

  if (!stats) return <div />;

  const onReset = () => {
    if (confirm(t("stats.resetConfirm"))) {
      resetProgress();
      clearProfile();
      refresh();
    }
  };

  return (
    <div>
      <div className="mb-8 flex items-baseline justify-between">
        <div>
          <div className="overline mb-2">Menu · 04</div>
          <h1 className="text-3xl font-bold uppercase tracking-tight">
            {t("stats.title")}
          </h1>
        </div>
        <Link
          href="/"
          className="text-xs font-mono uppercase tracking-widest text-ink-soft"
        >
          ← {t("common.back")}
        </Link>
      </div>

      <section className="border hairline grid grid-cols-2 divide-x divide-y hairline mb-8">
        <StatCell label={t("stats.answered")} value={stats.answered} />
        <StatCell label={t("stats.accuracy")} value={`${stats.accuracy}%`} />
        <StatCell
          label={t("stats.streak")}
          value={`${stats.streak} ${t("common.days")}`}
        />
        <StatCell
          label={t("stats.readiness")}
          value={`${stats.readiness}%`}
          accent
        />
        <StatCell label={t("stats.exams")} value={stats.exams} />
        <StatCell label={t("stats.examPassRate")} value={`${stats.examPassRate}%`} />
      </section>

      <div className="overline mb-3">{t("stats.bySection")}</div>
      <div className="border hairline divide-y hairline mb-10">
        {SECTIONS.map((s) => {
          const b = stats.bySection[s];
          const acc = b.total ? Math.round((b.correct / b.total) * 100) : 0;
          return (
            <div key={s} className="p-3">
              <div className="flex items-baseline justify-between text-sm mb-2">
                <span className="font-bold uppercase tracking-wide">
                  {sectionName(s)}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest tnum text-ink-faint">
                  {b.correct}/{b.total} · {acc}%
                </span>
              </div>
              <div className="h-[2px] bg-ink/10 dark:bg-white/10">
                <div
                  className="h-full bg-ink dark:bg-white"
                  style={{ width: b.total ? `${acc}%` : "0%" }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={onReset}
        className="text-[10px] font-mono uppercase tracking-widest text-brand hover:underline"
      >
        {t("stats.reset")}
      </button>
    </div>
  );
}

function StatCell({
  label,
  value,
  accent,
}: {
  label: string;
  value: string | number;
  accent?: boolean;
}) {
  return (
    <div className="p-4 bg-paper dark:bg-paper-dark">
      <div className="overline mb-1 truncate">{label}</div>
      <div className={`text-2xl font-bold tnum ${accent ? "text-brand" : ""}`}>
        {value}
      </div>
    </div>
  );
}
