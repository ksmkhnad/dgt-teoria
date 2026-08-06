"use client";

import Link from "next/link";
import { useI18n } from "@/app/providers";
import { usePlan } from "@/lib/usePlan";
import {
  getDayTask,
  isDayComplete,
  PLAN_TOTAL_DAYS,
  resetPlan,
  startPlan,
  type PlanPhase,
} from "@/lib/plan";

const PHASE_RANGES: Array<{ phase: PlanPhase; from: number; to: number }> = [
  { phase: 1, from: 1, to: 7 },
  { phase: 2, from: 8, to: 14 },
  { phase: 3, from: 15, to: 25 },
  { phase: 4, from: 26, to: 34 },
  { phase: 5, from: 35, to: 37 },
];

export default function PlanPage() {
  const { t } = useI18n();
  const { ready, state, currentDay, todayTask, todayDone } = usePlan();

  if (!ready) return <div />;

  return (
    <div>
      <div className="mb-8 flex items-baseline justify-between">
        <div>
          <div className="overline mb-2">Menu · 08</div>
          <h1 className="text-3xl font-bold uppercase tracking-tight">
            {t("plan.title")}
          </h1>
        </div>
        <Link
          href="/"
          className="text-xs font-mono uppercase tracking-widest text-ink-soft"
        >
          ← {t("common.back")}
        </Link>
      </div>

      {!state && (
        <StartCard t={t} onStart={() => startPlan()} />
      )}

      {state && currentDay != null && todayTask && (
        <TodayCard
          day={currentDay}
          size={todayTask.size}
          phase={todayTask.phase}
          focusLabel={t(`plan.focus.${todayTask.focus}`)}
          suggestExam={!!todayTask.suggestExam}
          done={todayDone}
          t={t}
        />
      )}

      {state && (
        <ProgressStrip
          completedCount={state.completedDays.length}
          t={t}
        />
      )}

      <div className="mt-10">
        <div className="overline mb-3">{t("plan.rules.title")}</div>
        <ul className="border hairline divide-y hairline">
          {["plan.rule1", "plan.rule2", "plan.rule3", "plan.rule4"].map((k, i) => (
            <li key={k} className="p-3 flex gap-3 text-sm">
              <span className="shrink-0 font-mono text-xs font-bold tnum text-ink-faint mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="leading-relaxed">{t(k)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 space-y-6">
        {PHASE_RANGES.map(({ phase, from, to }) => {
          const days = Array.from({ length: to - from + 1 }, (_, i) => from + i);
          const inThisPhase = state
            ? state.completedDays.filter((d) => d >= from && d <= to).length
            : 0;
          return (
            <section key={phase}>
              <div className="mb-2 flex items-baseline justify-between">
                <div>
                  <div className="overline">
                    {t("plan.phase")} · {phase}
                  </div>
                  <div className="text-base font-bold uppercase tracking-wide mt-1">
                    {t(`plan.phase${phase}.title`)}
                  </div>
                </div>
                {state && (
                  <div className="text-[10px] font-mono uppercase tracking-widest tnum text-ink-faint">
                    {inThisPhase}/{days.length}
                  </div>
                )}
              </div>
              <p className="text-sm text-ink-soft mb-3 leading-relaxed">
                {t(`plan.phase${phase}.desc`)}
              </p>
              <div className="flex flex-wrap gap-1">
                {days.map((d) => {
                  const task = getDayTask(d);
                  const done = state ? isDayComplete(state, d) : false;
                  const isCurrent = currentDay === d;
                  const cls = done
                    ? "bg-ink text-paper dark:bg-white dark:text-ink"
                    : isCurrent
                    ? "border-2 border-brand text-brand"
                    : "border hairline text-ink-soft";
                  return (
                    <div
                      key={d}
                      className={`h-9 min-w-[3.25rem] px-1.5 flex flex-col items-center justify-center font-mono text-[10px] tnum ${cls}`}
                      title={`Day ${d} · ${task.size}Q`}
                    >
                      <span className="font-bold">D{d}</span>
                      <span className="text-[9px] opacity-80">{task.size}Q</span>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {state && (
        <button
          onClick={() => {
            if (confirm(t("plan.resetConfirm"))) resetPlan();
          }}
          className="mt-10 text-[10px] font-mono uppercase tracking-widest text-brand hover:underline"
        >
          {t("plan.reset")}
        </button>
      )}
    </div>
  );
}

function StartCard({
  t,
  onStart,
}: {
  t: (k: string) => string;
  onStart: () => void;
}) {
  return (
    <section className="border hairline p-5 mb-8">
      <p className="text-ink-soft leading-relaxed mb-6">{t("plan.intro")}</p>
      <button
        onClick={onStart}
        className="w-full py-3 bg-ink dark:bg-white text-paper dark:text-ink font-bold uppercase tracking-widest text-sm active:translate-y-px transition-all"
      >
        {t("plan.startCta")}
      </button>
    </section>
  );
}

function TodayCard({
  day,
  size,
  phase,
  focusLabel,
  suggestExam,
  done,
  t,
}: {
  day: number;
  size: number;
  phase: number;
  focusLabel: string;
  suggestExam: boolean;
  done: boolean;
  t: (k: string) => string;
}) {
  return (
    <section
      className={`border-2 p-5 mb-8 ${
        done
          ? "border-emerald-600 dark:border-emerald-500"
          : "border-brand"
      }`}
    >
      <div className="flex items-baseline justify-between mb-3">
        <div className="overline">
          {t("plan.today")} · {t("plan.dayLabel")} <span className="tnum">{day}</span>{" "}
          {t("plan.of")} <span className="tnum">{PLAN_TOTAL_DAYS}</span>
        </div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-ink-faint">
          {t("plan.phase")} <span className="tnum">{phase}</span> · {focusLabel}
        </div>
      </div>

      <div className="flex items-baseline gap-3 mb-4">
        <div className="text-5xl font-bold tnum">{size}</div>
        <div className="text-sm uppercase font-mono tracking-widest text-ink-soft">
          {t("plan.questions")}
        </div>
      </div>

      {done ? (
        <div className="space-y-2">
          <div className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
            {t("plan.todayDone")}
          </div>
          <Link
            href="/plan/today"
            className="block w-full py-3 border-2 hairline text-center font-bold uppercase tracking-widest text-sm"
          >
            {t("plan.repeatSession")}
          </Link>
        </div>
      ) : (
        <div className="space-y-2">
          <Link
            href="/plan/today"
            className="block w-full py-3 bg-brand text-white text-center font-bold uppercase tracking-widest text-sm active:translate-y-px transition-all"
          >
            {t("plan.startSession")}
          </Link>
          {suggestExam && (
            <Link
              href="/exam"
              className="block w-full py-3 border-2 hairline text-center font-bold uppercase tracking-widest text-sm"
            >
              🎯 {t("plan.suggestExam")}
            </Link>
          )}
        </div>
      )}
    </section>
  );
}

function ProgressStrip({
  completedCount,
  t,
}: {
  completedCount: number;
  t: (k: string) => string;
}) {
  const pct = Math.round((completedCount / PLAN_TOTAL_DAYS) * 100);
  return (
    <section className="mb-6">
      <div className="flex items-baseline justify-between mb-2">
        <div className="overline">{t("plan.progress")}</div>
        <div className="text-[10px] font-mono uppercase tracking-widest tnum">
          <span className="text-brand font-bold">{completedCount}</span>/
          {PLAN_TOTAL_DAYS} {t("plan.completedDays")}
        </div>
      </div>
      <div className="h-[3px] bg-ink/10 dark:bg-white/10">
        <div
          className="h-full bg-brand transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </section>
  );
}
