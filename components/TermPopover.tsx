"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useI18n } from "@/app/providers";
import { getTermById } from "@/lib/terms";
import type { Lang } from "@/lib/types";

const LANG_LABEL: Record<Lang, string> = { es: "ES", en: "EN", ru: "RU" };

interface Props {
  termId: string | null;
  onClose: () => void;
}

export default function TermPopover({ termId, onClose }: Props) {
  const { t, termCategoryName } = useI18n();

  useEffect(() => {
    if (!termId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [termId, onClose]);

  if (!termId) return null;
  const term = getTermById(termId);
  if (!term) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex items-start justify-between gap-3 p-4 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-wide text-neutral-500">
              {termCategoryName(term.category)}
            </div>
            <h2 className="text-lg font-bold leading-tight mt-0.5 truncate">
              {term.translations.es.term}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="p-4 space-y-3">
          {(["es", "en", "ru"] as Lang[]).map((l) => {
            const tr = term.translations[l];
            return (
              <div
                key={l}
                className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-3"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center justify-center h-5 min-w-[1.75rem] px-1.5 rounded bg-brand text-white text-[10px] font-bold">
                    {LANG_LABEL[l]}
                  </span>
                  <span className="font-semibold">{tr.term}</span>
                </div>
                <p className="text-sm leading-relaxed">{tr.definition}</p>
              </div>
            );
          })}

          <Link
            href={`/glossary/${term.id}`}
            className="block text-center text-sm text-brand font-semibold py-2"
            onClick={onClose}
          >
            {t("glossary.title")} →
          </Link>
        </div>
      </div>
    </div>
  );
}
