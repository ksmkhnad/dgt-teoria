"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useI18n } from "../providers";
import QuestionCard from "@/components/QuestionCard";
import { buildExam } from "@/lib/questions";
import { recordAnswer, recordExam } from "@/lib/storage";
import type { Question } from "@/lib/types";

const EXAM_SIZE = 30;
const EXAM_SECONDS = 30 * 60;
const MAX_WRONG = 3;

type Phase = "intro" | "running" | "results";

export default function ExamPage() {
  const { t } = useI18n();
  const [phase, setPhase] = useState<Phase>("intro");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [i, setI] = useState(0);
  const [remaining, setRemaining] = useState(EXAM_SECONDS);
  const timerRef = useRef<number | null>(null);

  const start = () => {
    const qs = buildExam(EXAM_SIZE);
    setQuestions(qs);
    setAnswers(new Array(qs.length).fill(null));
    setI(0);
    setRemaining(EXAM_SECONDS);
    setPhase("running");
  };

  const finish = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    let correct = 0;
    questions.forEach((q, idx) => {
      const chosen = answers[idx];
      const isCorrect = chosen === q.correctIndex;
      if (chosen != null) recordAnswer(q.id, isCorrect);
      if (isCorrect) correct++;
    });
    const wrong = questions.length - correct;
    const passed = wrong <= MAX_WRONG;
    recordExam(correct, questions.length, passed);
    setPhase("results");
  };

  useEffect(() => {
    if (phase !== "running") return;
    timerRef.current = window.setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          window.clearInterval(timerRef.current!);
          timerRef.current = null;
          setTimeout(finish, 0);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const mmss = useMemo(() => {
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }, [remaining]);

  if (phase === "intro") {
    return (
      <div className="max-w-md mx-auto py-4">
        <div className="overline mb-2">Menu · 02</div>
        <h1 className="text-4xl font-bold uppercase tracking-tight mb-6">
          {t("exam.title")}
        </h1>
        <div className="w-12 h-px bg-ink dark:bg-white mb-6" />
        <p className="text-ink-soft mb-10 leading-relaxed">{t("exam.intro")}</p>
        <button
          onClick={start}
          className="w-full py-3 bg-ink dark:bg-white text-paper dark:text-ink font-bold uppercase tracking-widest text-sm active:translate-y-px transition-all"
        >
          {t("exam.start")}
        </button>
      </div>
    );
  }

  if (phase === "results") {
    const correct = questions.reduce(
      (n, q, idx) => n + (answers[idx] === q.correctIndex ? 1 : 0),
      0
    );
    const wrong = questions.length - correct;
    const passed = wrong <= MAX_WRONG;
    return (
      <div>
        <div
          className={`border-2 p-6 mb-6 ${
            passed
              ? "border-emerald-600 text-emerald-700 dark:text-emerald-400"
              : "border-brand text-brand"
          }`}
        >
          <div className="overline mb-2">Result</div>
          <div className="text-4xl font-bold uppercase tracking-tight">
            {passed ? t("exam.passed") : t("exam.failed")}
          </div>
          <div className="text-xs font-mono uppercase tracking-widest tnum mt-3">
            {t("exam.score")} · {correct}/{questions.length}
          </div>
        </div>
        <div className="flex justify-between mb-6">
          <Link
            href="/"
            className="text-xs font-mono uppercase tracking-widest text-ink-soft"
          >
            ← {t("common.back")}
          </Link>
          <button
            onClick={start}
            className="px-4 py-2 bg-ink dark:bg-white text-paper dark:text-ink font-bold uppercase tracking-widest text-xs"
          >
            {t("exam.retry")}
          </button>
        </div>
        <div className="space-y-6">
          {questions.map((q, idx) => (
            <QuestionCard key={q.id} question={q} lockedChoice={answers[idx]} />
          ))}
        </div>
      </div>
    );
  }

  // running
  const q = questions[i];
  const onAnswer = (_correct: boolean, chosen: number) => {
    setAnswers((prev) => {
      const next = prev.slice();
      next[i] = chosen;
      return next;
    });
    setTimeout(() => {
      if (i + 1 >= questions.length) return;
      setI((v) => v + 1);
    }, 150);
  };

  const answeredCount = answers.filter((a) => a != null).length;
  const canSubmit = answeredCount === questions.length;

  return (
    <div>
      <div className="flex items-center justify-between mb-6 pb-3 border-b hairline">
        <div className="text-[10px] font-mono uppercase tracking-widest tnum text-ink-soft">
          {t("exam.question")} {i + 1}/{questions.length}
        </div>
        <div className="text-sm font-mono font-bold tnum">
          {mmss}
        </div>
      </div>
      <QuestionCard
        key={q.id}
        question={q}
        onAnswer={onAnswer}
        hideFeedback
        lockedChoice={answers[i]}
      />
      <div className="mt-6 flex justify-between items-center gap-3 flex-wrap">
        <div className="flex gap-2">
          <button
            onClick={() => setI(Math.max(0, i - 1))}
            disabled={i === 0}
            className="px-3 py-2 border-2 hairline disabled:opacity-30 font-mono text-sm"
          >
            ←
          </button>
          <button
            onClick={() => setI(Math.min(questions.length - 1, i + 1))}
            disabled={i >= questions.length - 1}
            className="px-3 py-2 border-2 hairline disabled:opacity-30 font-mono text-sm"
          >
            →
          </button>
        </div>
        <button
          onClick={() => {
            if (!canSubmit) {
              if (!confirm(t("exam.confirmSubmit"))) return;
            }
            finish();
          }}
          className="px-4 py-2 bg-ink dark:bg-white text-paper dark:text-ink font-bold uppercase tracking-widest text-xs active:translate-y-px transition-all"
        >
          {t("exam.submit")} <span className="tnum">({answeredCount}/{questions.length})</span>
        </button>
      </div>
    </div>
  );
}
