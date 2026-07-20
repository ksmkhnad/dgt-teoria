"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useI18n } from "../providers";
import QuestionCard from "@/components/QuestionCard";
import { getById } from "@/lib/questions";
import { loadProgress, recordAnswer } from "@/lib/storage";
import type { Question } from "@/lib/types";

export default function ReviewPage() {
  const { t } = useI18n();
  const [queue, setQueue] = useState<Question[]>([]);
  const [i, setI] = useState(0);
  const [started, setStarted] = useState(false);

  const refreshQueue = () => {
    const state = loadProgress();
    const ids = Object.entries(state.review.streak)
      .filter(([, streak]) => streak < 2)
      .filter(([id]) => (state.review.lastSeen[id] ?? 0) > 0)
      .map(([id]) => id);
    const qs = ids
      .map(getById)
      .filter((q): q is Question => Boolean(q))
      .sort((a, b) => {
        const sa = state.review.streak[a.id] ?? 0;
        const sb = state.review.streak[b.id] ?? 0;
        return sa - sb;
      });
    setQueue(qs);
    setI(0);
  };

  useEffect(() => {
    refreshQueue();
  }, []);

  const pending = queue.length;

  if (!started || pending === 0) {
    return (
      <div className="max-w-md mx-auto py-4">
        <div className="overline mb-2">Menu · 03</div>
        <h1 className="text-4xl font-bold uppercase tracking-tight mb-6">
          {t("review.title")}
        </h1>
        <div className="w-12 h-px bg-ink dark:bg-white mb-6" />
        {pending === 0 ? (
          <p className="text-ink-soft mb-10 leading-relaxed">
            {t("review.empty")}
          </p>
        ) : (
          <p className="text-ink-soft mb-10 leading-relaxed">
            <span className="font-mono tnum">{pending}</span> {t("review.pending")}
          </p>
        )}
        <div className="space-y-2">
          {pending > 0 && (
            <button
              onClick={() => setStarted(true)}
              className="w-full py-3 bg-ink dark:bg-white text-paper dark:text-ink font-bold uppercase tracking-widest text-sm active:translate-y-px transition-all"
            >
              {t("review.start")}
            </button>
          )}
          <Link
            href="/"
            className="block w-full py-3 border-2 hairline text-center font-bold uppercase tracking-widest text-sm"
          >
            ← {t("common.back")}
          </Link>
        </div>
      </div>
    );
  }

  const q = queue[i];
  const onAnswer = (correct: boolean) => {
    recordAnswer(q.id, correct);
  };
  const onNext = () => {
    if (i + 1 >= queue.length) {
      refreshQueue();
      setStarted(false);
    } else {
      setI(i + 1);
    }
  };

  return (
    <div className="pb-40 sm:pb-6">
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/"
          className="text-xl text-ink-faint hover:text-ink transition leading-none"
        >
          ×
        </Link>
        <div className="flex-1 flex items-center gap-2">
          <div className="flex-1 h-[3px] bg-ink/10 dark:bg-white/10">
            <div
              className="h-full bg-ink dark:bg-white transition-all"
              style={{ width: `${(i / queue.length) * 100}%` }}
            />
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest tnum text-ink-soft">
            {i + 1}/{queue.length}
          </div>
        </div>
      </div>
      <QuestionCard
        key={q.id}
        question={q}
        onAnswer={onAnswer}
        onNext={onNext}
      />
    </div>
  );
}
