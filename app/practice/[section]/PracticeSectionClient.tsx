"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useI18n } from "@/app/providers";
import QuestionCard from "@/components/QuestionCard";
import { getBySection } from "@/lib/questions";
import { recordAnswer } from "@/lib/storage";
import { SECTIONS, type Question, type Section } from "@/lib/types";
import { useProgress } from "@/lib/useProgress";

const STARTING_HEARTS = 5;

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function PracticeSectionClient({
  section,
}: {
  section: string;
}) {
  const router = useRouter();
  const { t, sectionName } = useI18n();
  const { xp: xpBefore } = useProgress();

  const valid = (SECTIONS as readonly string[]).includes(section);
  const sectionKey = section as Section;

  const [seed, setSeed] = useState(0);
  const questions: Question[] = useMemo(
    () => (valid ? shuffle(getBySection(sectionKey)) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sectionKey, valid, seed]
  );
  const [i, setI] = useState(0);
  const [done, setDone] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [hearts, setHearts] = useState(STARTING_HEARTS);
  const [xpStart, setXpStart] = useState<number | null>(null);

  useEffect(() => {
    if (!valid) router.replace("/practice");
  }, [valid, router]);

  useEffect(() => {
    if (xpStart == null) setXpStart(xpBefore);
  }, [xpBefore, xpStart]);

  if (!valid) return null;
  if (questions.length === 0) {
    return (
      <div>
        <Link href="/practice" className="text-xs font-mono uppercase tracking-widest text-ink-soft">
          ← {t("common.back")}
        </Link>
        <p className="mt-4">No questions in this section yet.</p>
      </div>
    );
  }

  const restart = () => {
    setSeed((s) => s + 1);
    setI(0);
    setDone(false);
    setCorrectCount(0);
    setHearts(STARTING_HEARTS);
    setXpStart(null);
  };

  if (hearts <= 0) {
    return (
      <ResultScreen
        section={sectionName(sectionKey)}
        variant="failed"
        title={t("hearts.outOfHearts")}
        correct={correctCount}
        total={i}
        xpBefore={xpStart ?? xpBefore}
        onRetry={restart}
        t={t}
      />
    );
  }

  if (done) {
    return (
      <ResultScreen
        section={sectionName(sectionKey)}
        variant={correctCount === questions.length ? "perfect" : "done"}
        correct={correctCount}
        total={questions.length}
        xpBefore={xpStart ?? xpBefore}
        onRetry={restart}
        t={t}
      />
    );
  }

  const q = questions[i];
  const progressPct = Math.round((i / questions.length) * 100);

  const onAnswer = (correct: boolean) => {
    recordAnswer(q.id, correct);
    if (correct) setCorrectCount((c) => c + 1);
    else setHearts((h) => h - 1);
  };

  const onNext = () => {
    if (i + 1 >= questions.length) setDone(true);
    else setI(i + 1);
  };

  return (
    <div className="pb-40 sm:pb-6">
      {/* Progress + hearts */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/practice"
          aria-label={t("common.back")}
          className="text-xl text-ink-faint hover:text-ink transition leading-none"
        >
          ×
        </Link>
        <div className="flex-1 flex items-center gap-2">
          <div className="flex-1 h-[3px] bg-ink/10 dark:bg-white/10">
            <div
              className="h-full bg-ink dark:bg-white transition-all"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest tnum text-ink-soft">
            {i + 1}/{questions.length}
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-brand">♥</span>
          <span className="text-sm font-mono font-bold tnum text-ink">
            {hearts}
          </span>
        </div>
      </div>

      <QuestionCard key={q.id} question={q} onAnswer={onAnswer} onNext={onNext} />
    </div>
  );
}

function ResultScreen({
  section,
  variant,
  title,
  correct,
  total,
  xpBefore,
  onRetry,
  t,
}: {
  section: string;
  variant: "perfect" | "done" | "failed";
  title?: string;
  correct: number;
  total: number;
  xpBefore: number;
  onRetry: () => void;
  t: (k: string) => string;
}) {
  const { xp: xpNow, streak } = useProgress();
  const xpEarned = Math.max(0, xpNow - xpBefore);
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  const heading =
    variant === "perfect"
      ? t("result.perfect")
      : variant === "failed"
      ? title || t("hearts.outOfHearts")
      : t("result.title");

  return (
    <div className="max-w-md mx-auto py-4">
      <div className="overline mb-3">{section}</div>
      <h1 className="text-4xl font-bold uppercase tracking-tight leading-tight mb-8">
        {heading}
      </h1>

      <div className="grid grid-cols-2 gap-px bg-line-soft dark:bg-neutral-800 border hairline mb-6">
        <MetricBox label={t("result.accuracy")} value={`${pct}%`} />
        <MetricBox
          label={t("result.xpEarned")}
          value={`+${xpEarned}`}
          accent
        />
      </div>

      {streak > 0 && variant !== "failed" && (
        <div className="border hairline border-brand text-brand p-3 mb-6 text-xs font-mono uppercase tracking-widest">
          🔥 {t("result.streakUp")} · <span className="tnum">{streak}</span>{" "}
          {streak === 1 ? t("streak.day") : t("streak.days")}
        </div>
      )}

      <div className="space-y-2">
        <button
          onClick={onRetry}
          className="w-full py-3 bg-ink dark:bg-white text-paper dark:text-ink font-bold uppercase tracking-widest text-sm active:translate-y-px transition-all"
        >
          {variant === "failed" ? t("hearts.retry") : t("result.retry")}
        </button>
        <Link
          href="/practice"
          className="block w-full py-3 border-2 hairline text-center font-bold uppercase tracking-widest text-sm"
        >
          {t("result.done")}
        </Link>
      </div>
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
