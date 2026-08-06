"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useI18n } from "@/app/providers";
import QuestionCard from "@/components/QuestionCard";
import { getAllQuestions } from "@/lib/questions";
import { recordAnswer } from "@/lib/storage";
import { markDayComplete } from "@/lib/plan";
import { usePlan } from "@/lib/usePlan";
import type { Question } from "@/lib/types";

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function PlanTodayPage() {
  const router = useRouter();
  const { t } = useI18n();
  const { ready, state, currentDay, todayTask } = usePlan();

  const [seed, setSeed] = useState(0);
  const size = todayTask?.size ?? 10;

  // Always compute (idempotent, guarded by !todayTask return below). Depending
  // on todayTask directly is necessary — size alone may not change between the
  // initial null-task render and the real one, leaving the memo stuck at [].
  const questions: Question[] = useMemo(
    () => shuffle(getAllQuestions()).slice(0, size),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [size, seed]
  );

  const [i, setI] = useState(0);
  const [done, setDone] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    if (ready && !state) router.replace("/plan");
  }, [ready, state, router]);

  if (!ready || !state || !todayTask || currentDay == null) return <div />;

  const restart = () => {
    setSeed((s) => s + 1);
    setI(0);
    setDone(false);
    setCorrectCount(0);
  };

  if (done) {
    const pct = Math.round((correctCount / questions.length) * 100);
    return (
      <div className="max-w-md mx-auto py-4">
        <div className="overline mb-3">
          {t("plan.dayLabel")} <span className="tnum">{currentDay}</span> ·{" "}
          {t(`plan.focus.${todayTask.focus}`)}
        </div>
        <h1 className="text-4xl font-bold uppercase tracking-tight mb-8">
          {t("plan.session.results")}
        </h1>

        <div className="grid grid-cols-2 gap-px bg-line-soft dark:bg-neutral-800 border hairline mb-8">
          <MetricBox label={t("plan.session.accuracy")} value={`${pct}%`} />
          <MetricBox
            label={t("plan.questions")}
            value={`${correctCount}/${questions.length}`}
            accent
          />
        </div>

        <div className="space-y-2">
          <button
            onClick={() => {
              markDayComplete(currentDay);
              router.push("/plan");
            }}
            className="w-full py-3 bg-brand text-white font-bold uppercase tracking-widest text-sm active:translate-y-px transition-all"
          >
            {t("plan.session.markDone")}
          </button>
          <button
            onClick={restart}
            className="w-full py-3 border-2 hairline font-bold uppercase tracking-widest text-sm"
          >
            {t("result.retry")}
          </button>
          <Link
            href="/plan"
            className="block w-full py-3 border-2 hairline text-center font-bold uppercase tracking-widest text-sm"
          >
            {t("plan.session.next")}
          </Link>
        </div>
      </div>
    );
  }

  const q = questions[i];
  const progressPct = Math.round((i / questions.length) * 100);

  const onAnswer = (correct: boolean) => {
    recordAnswer(q.id, correct);
    if (correct) setCorrectCount((c) => c + 1);
  };

  const onNext = () => {
    if (i + 1 >= questions.length) setDone(true);
    else setI(i + 1);
  };

  return (
    <div className="pb-40 sm:pb-6">
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/plan"
          aria-label={t("common.back")}
          className="text-xl text-ink-faint hover:text-ink transition leading-none"
        >
          ×
        </Link>
        <div className="flex-1 flex items-center gap-2">
          <div className="flex-1 h-[3px] bg-ink/10 dark:bg-white/10">
            <div
              className="h-full bg-brand transition-all"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest tnum text-ink-soft">
            {i + 1}/{questions.length}
          </div>
        </div>
        <div className="text-[10px] font-mono uppercase tracking-widest tnum text-ink-faint">
          D<span>{currentDay}</span>
        </div>
      </div>

      <QuestionCard key={q.id} question={q} onAnswer={onAnswer} onNext={onNext} />
    </div>
  );
}

function MetricBox({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="bg-paper dark:bg-paper-dark p-4">
      <div className="overline mb-1">{label}</div>
      <div className={`text-3xl font-bold tnum ${accent ? "text-brand" : ""}`}>
        {value}
      </div>
    </div>
  );
}
