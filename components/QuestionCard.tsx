"use client";

import { useState } from "react";
import { useI18n } from "@/app/providers";
import { getTermById } from "@/lib/terms";
import type { Question } from "@/lib/types";
import TermPopover from "./TermPopover";

interface Props {
  question: Question;
  onAnswer?: (correct: boolean, chosen: number) => void;
  onNext?: () => void;
  hideFeedback?: boolean;
  lockedChoice?: number | null;
}

export default function QuestionCard({
  question,
  onAnswer,
  onNext,
  hideFeedback,
  lockedChoice,
}: Props) {
  const { lang, t } = useI18n();
  const tr = question.translations[lang];
  const [chosen, setChosen] = useState<number | null>(lockedChoice ?? null);
  const [checked, setChecked] = useState<boolean>(lockedChoice != null);
  const [openTermId, setOpenTermId] = useState<string | null>(null);

  const termIds = (question.termIds ?? []).filter((id) => getTermById(id));
  const isCorrect = chosen === question.correctIndex;

  const pick = (i: number) => {
    if (checked) return;
    setChosen(i);
    if (hideFeedback) {
      onAnswer?.(i === question.correctIndex, i);
    }
  };

  const check = () => {
    if (chosen == null) return;
    setChecked(true);
    onAnswer?.(isCorrect, chosen);
  };

  return (
    <div className="flex flex-col">
      {question.imageUrl && (
        <div className="mb-6 flex justify-center border hairline p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={question.imageUrl}
            alt=""
            className="max-h-56 w-auto object-contain"
          />
        </div>
      )}

      <div className="overline mb-2">Q</div>
      <h2 className="text-xl sm:text-2xl font-bold leading-snug mb-4">
        {tr.text}
      </h2>

      {termIds.length > 0 && (
        <div className="mb-5 flex flex-wrap gap-1">
          {termIds.map((id) => {
            const term = getTermById(id)!;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setOpenTermId(id)}
                className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-mono uppercase tracking-widest border hairline text-ink-soft hover:text-brand hover:border-brand transition"
              >
                <span>{term.translations[lang].term}</span>
              </button>
            );
          })}
        </div>
      )}

      <ul className="space-y-2 mb-4">
        {tr.options.map((opt, i) => {
          const isChosen = chosen === i;
          const isRight = i === question.correctIndex;

          const base =
            "w-full text-left p-4 border-2 border-b-2 font-medium transition-all select-none";
          let state = "";

          if (checked && !hideFeedback) {
            if (isRight) {
              state = "border-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100";
            } else if (isChosen) {
              state = "border-brand bg-red-50 dark:bg-red-950/30 text-brand";
            } else {
              state = "border-line-soft dark:border-neutral-800 opacity-40";
            }
          } else if (isChosen) {
            state = "border-ink dark:border-white bg-paper-alt dark:bg-white/5";
          } else {
            state =
              "border-line-soft dark:border-neutral-800 bg-paper dark:bg-paper-dark hover:border-ink dark:hover:border-white active:translate-y-px";
          }

          return (
            <li key={i}>
              <button
                type="button"
                className={`${base} ${state}`}
                onClick={() => pick(i)}
                aria-pressed={isChosen}
                disabled={checked}
              >
                <span className="flex items-center gap-4">
                  <span
                    className={`shrink-0 inline-flex items-center justify-center h-7 w-7 font-mono text-xs font-bold border-2 ${
                      isChosen && !checked
                        ? "border-ink dark:border-white bg-ink text-paper dark:bg-white dark:text-ink"
                        : "border-line-soft dark:border-neutral-800 text-ink-faint"
                    }`}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="flex-1 leading-snug">{opt}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {!hideFeedback && !checked && (
        <button
          onClick={check}
          disabled={chosen == null}
          className="w-full mt-3 py-3 bg-ink dark:bg-white text-paper dark:text-ink font-bold uppercase tracking-widest text-sm disabled:opacity-30 active:translate-y-px transition-all"
        >
          {t("q.check")}
        </button>
      )}

      {checked && !hideFeedback && (
        <FeedbackSheet
          isCorrect={isCorrect}
          explanation={tr.explanation}
          options={tr.options}
          optionRationales={tr.optionRationales}
          correctIndex={question.correctIndex}
          videoUrl={question.videoUrl}
          onContinue={onNext}
          t={t}
        />
      )}

      <TermPopover termId={openTermId} onClose={() => setOpenTermId(null)} />
    </div>
  );
}

function FeedbackSheet({
  isCorrect,
  explanation,
  options,
  optionRationales,
  correctIndex,
  videoUrl,
  onContinue,
  t,
}: {
  isCorrect: boolean;
  explanation: string;
  options: string[];
  optionRationales?: string[];
  correctIndex: number;
  videoUrl?: string;
  onContinue?: () => void;
  t: (k: string) => string;
}) {
  const hasRationales =
    Array.isArray(optionRationales) && optionRationales.some(Boolean);
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t-4 max-h-[80vh] overflow-y-auto ${
        isCorrect
          ? "bg-paper dark:bg-paper-dark border-emerald-600"
          : "bg-paper dark:bg-paper-dark border-brand"
      } animate-[slideUp_.2s_ease-out]`}
    >
      <div className="mx-auto max-w-3xl px-5 pt-5 pb-6">
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`inline-flex items-center justify-center h-8 w-8 text-lg font-bold ${
              isCorrect ? "bg-emerald-600 text-white" : "bg-brand text-white"
            }`}
          >
            {isCorrect ? "✓" : "×"}
          </span>
          <div
            className={`text-sm font-mono uppercase tracking-widest font-bold ${
              isCorrect ? "text-emerald-700 dark:text-emerald-400" : "text-brand"
            }`}
          >
            {isCorrect ? t("lesson.correct") : t("lesson.wrong")}
          </div>
        </div>

        <p className="text-sm leading-relaxed text-ink-soft mb-4 pl-11">
          {explanation}
        </p>

        {hasRationales && (
          <div className="mb-4 border-t hairline pt-3">
            <div className="overline mb-2">{t("lesson.whyOthers")}</div>
            <ul className="space-y-2">
              {options.map((opt, i) => {
                if (i === correctIndex) return null;
                const rationale = optionRationales?.[i];
                if (!rationale) return null;
                return (
                  <li key={i} className="flex gap-3 items-start text-sm">
                    <span className="shrink-0 inline-flex items-center justify-center h-6 w-6 mt-0.5 font-mono text-[10px] font-bold border-2 border-line-soft dark:border-neutral-800 text-ink-soft">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="flex-1 leading-relaxed text-ink-soft">
                      <span className="font-medium text-ink">{opt}.</span>{" "}
                      {rationale}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {videoUrl && (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-3 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand hover:underline"
          >
            ▶ {t("lesson.watchVideo")}
          </a>
        )}

        {onContinue && (
          <button
            onClick={onContinue}
            className={`w-full py-3 text-paper dark:text-ink font-bold uppercase tracking-widest text-sm active:translate-y-px transition-all ${
              isCorrect ? "bg-emerald-600" : "bg-ink dark:bg-white"
            }`}
          >
            {t("lesson.continue")}
          </button>
        )}
      </div>
    </div>
  );
}
