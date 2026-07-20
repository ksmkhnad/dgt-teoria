"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useI18n } from "@/app/providers";
import { getTermById } from "@/lib/terms";
import type { Lang } from "@/lib/types";

const LANG_LABEL: Record<Lang, string> = { es: "ES", en: "EN", ru: "RU" };

export default function TermDetailClient({ id }: { id: string }) {
  const router = useRouter();
  const { t, termCategoryName } = useI18n();
  const term = getTermById(id);

  useEffect(() => {
    if (!term) router.replace("/glossary");
  }, [term, router]);

  if (!term) return null;

  return (
    <div>
      <div className="mb-6 flex items-baseline justify-between">
        <Link
          href="/glossary"
          className="text-xs font-mono uppercase tracking-widest text-ink-soft"
        >
          ← {t("common.back")}
        </Link>
        <div className="text-[10px] font-mono uppercase tracking-widest text-ink-faint">
          {termCategoryName(term.category)}
        </div>
      </div>

      <div className="overline mb-2">Term</div>
      <h1 className="text-4xl font-bold uppercase tracking-tight leading-none">
        {term.translations.es.term}
      </h1>
      <div className="text-xs font-mono uppercase tracking-widest text-ink-soft mt-3">
        {term.translations.en.term}
        <span className="mx-2 text-ink-faint">/</span>
        {term.translations.ru.term}
      </div>

      {term.imageUrl && (
        <figure className="mt-6 border hairline p-6 flex flex-col items-center bg-paper-alt/40 dark:bg-white/[0.02]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={term.imageUrl}
            alt={term.translations.es.term}
            className="max-h-40 w-auto object-contain"
          />
          {term.imageCredit && (
            <figcaption className="mt-3 text-[10px] font-mono uppercase tracking-widest text-ink-faint">
              {term.imageCredit}
            </figcaption>
          )}
        </figure>
      )}

      <div className="mt-8 border hairline divide-y hairline">
        {(["es", "en", "ru"] as Lang[]).map((l) => {
          const tr = term.translations[l];
          return (
            <section key={l} className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest bg-ink text-paper dark:bg-white dark:text-ink px-1.5 py-0.5">
                  {LANG_LABEL[l]}
                </span>
                <span className="font-bold uppercase tracking-wide text-sm">
                  {tr.term}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">
                {tr.definition}
              </p>
              {tr.example && (
                <div className="mt-2 text-sm">
                  <span className="overline mr-2">{t("glossary.example")}</span>
                  <span className="italic text-ink-soft">{tr.example}</span>
                </div>
              )}
            </section>
          );
        })}
      </div>

      {term.relatedTerms && term.relatedTerms.length > 0 && (
        <div className="mt-8">
          <div className="overline mb-3">{t("glossary.related")}</div>
          <div className="flex flex-wrap gap-1">
            {term.relatedTerms.map((rid) => {
              const r = getTermById(rid);
              if (!r) return null;
              return (
                <Link
                  key={rid}
                  href={`/glossary/${rid}`}
                  className="text-xs font-bold uppercase tracking-wide px-2.5 py-1.5 border hairline hover:border-ink dark:hover:border-white transition"
                >
                  {r.translations.es.term}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {term.source && (
        <div className="mt-8 text-[10px] font-mono uppercase tracking-widest text-ink-faint">
          {t("glossary.source")}: {term.source}
        </div>
      )}
    </div>
  );
}
