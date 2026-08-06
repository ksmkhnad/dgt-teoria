"use client";

import Link from "next/link";
import { useI18n } from "./providers";
import { useProgress } from "@/lib/useProgress";
import { useProfile } from "@/lib/useProfile";
import { daysUntil } from "@/lib/profile";
import { usePlan } from "@/lib/usePlan";
import { PLAN_TOTAL_DAYS } from "@/lib/plan";

export default function Home() {
  const { t } = useI18n();
  const { ready, streak, xp, today, dailyGoal } = useProgress();
  const { profile } = useProfile();
  const { state: planState, currentDay: planDay, todayTask: planTask, todayDone: planDone } = usePlan();

  const goalPct = Math.min(100, Math.round((today.correct / dailyGoal) * 100));
  const goalMet = today.correct >= dailyGoal;

  const days = profile?.targetDate ? daysUntil(profile.targetDate) : null;
  let examBadge: string | null = null;
  if (days != null) {
    if (days > 0) examBadge = t("home.examIn").replace("{n}", String(days));
    else if (days === 0) examBadge = t("home.examToday");
    else examBadge = t("home.examPassed");
  }

  const cards: {
    href: string;
    key: string;
    num: string;
  }[] = [
    { href: "/practice", key: "practice", num: "01" },
    { href: "/exam", key: "exam", num: "02" },
    { href: "/review", key: "review", num: "03" },
    { href: "/stats", key: "stats", num: "04" },
    { href: "/glossary", key: "glossary", num: "05" },
    { href: "/reference", key: "reference", num: "06" },
    { href: "/resources", key: "resources", num: "07" },
    { href: "/plan", key: "plan", num: "08" },
  ];

  return (
    <div>
      {/* Greeting */}
      <div className="mb-8">
        <div className="overline mb-2">{t("app.title")}</div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase">
          {profile?.name
            ? t("home.hi").replace("{name}", profile.name)
            : t("app.tagline")}
        </h1>
        {examBadge && (
          <div
            className={`mt-3 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest ${
              days != null && days <= 7 && days >= 0
                ? "text-brand"
                : "text-ink-soft"
            }`}
          >
            <span className="h-px w-4 bg-current" />
            <span>🎯 {examBadge}</span>
          </div>
        )}
      </div>

      {/* Stat strip */}
      <section className="border-t border-b hairline py-4 mb-6">
        <div className="grid grid-cols-3 divide-x hairline">
          <Stat label={t("stats.streak")} value={ready ? String(streak) : "—"} accent={streak > 0} />
          <Stat label={t("xp.total")} value={ready ? String(xp) : "—"} />
          <Stat
            label={t("goal.today")}
            value={`${today.correct}/${dailyGoal}`}
            accent={goalMet}
          />
        </div>

        <div className="mt-4">
          <div className="h-[3px] w-full bg-ink/10 dark:bg-white/10">
            <div
              className={`h-full transition-all ${
                goalMet ? "bg-brand" : "bg-ink dark:bg-white"
              }`}
              style={{ width: `${goalPct}%` }}
            />
          </div>
        </div>
      </section>

      {/* Plan banner — only when plan is active */}
      {planState && planTask && planDay != null && (
        <Link
          href={planDone ? "/plan" : "/plan/today"}
          className={`block mb-6 border-2 p-4 hover:bg-paper-alt/60 dark:hover:bg-white/[0.03] transition ${
            planDone
              ? "border-emerald-600 dark:border-emerald-500"
              : "border-brand"
          }`}
        >
          <div className="flex items-baseline justify-between mb-2">
            <div className="overline">
              {t("plan.today")} · {t("plan.dayLabel")}{" "}
              <span className="tnum">{planDay}</span> {t("plan.of")}{" "}
              <span className="tnum">{PLAN_TOTAL_DAYS}</span>
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-ink-faint">
              {t(`plan.focus.${planTask.focus}`)}
            </div>
          </div>
          {planDone ? (
            <div className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
              {t("plan.todayDone")}
            </div>
          ) : (
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold tnum text-brand">
                {planTask.size}
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-ink-soft">
                {t("plan.questions")}
              </span>
              <span className="ml-auto text-brand text-lg">→</span>
            </div>
          )}
        </Link>
      )}

      {/* Grid of entry cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line-soft dark:bg-neutral-800 border hairline">
        {cards.map((c) => (
          <Link
            key={c.key}
            href={c.href}
            className="group bg-paper dark:bg-paper-dark p-5 flex items-start justify-between hover:bg-paper-alt/60 dark:hover:bg-white/5 transition"
          >
            <div className="flex-1 min-w-0">
              <div className="overline mb-1 tnum">{c.num}</div>
              <div className="text-lg font-bold uppercase tracking-wide">
                {t(`home.${c.key}.title`)}
              </div>
              <div className="text-xs text-ink-soft mt-1 leading-relaxed">
                {t(`home.${c.key}.desc`)}
              </div>
            </div>
            <span className="text-ink-faint group-hover:text-brand transition ml-2">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="px-3 first:pl-0 last:pr-0">
      <div className="overline mb-1 truncate">{label}</div>
      <div
        className={`text-2xl font-bold tnum ${accent ? "text-brand" : ""}`}
      >
        {value}
      </div>
    </div>
  );
}
