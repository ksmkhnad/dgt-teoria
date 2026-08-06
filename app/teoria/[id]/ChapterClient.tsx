"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useI18n } from "@/app/providers";
import { getChapterById } from "@/lib/theory";
import { getTermById } from "@/lib/terms";

export default function ChapterClient({ id }: { id: string }) {
  const router = useRouter();
  const { t, lang, sectionName } = useI18n();
  const chapter = getChapterById(id);

  useEffect(() => {
    if (!chapter) router.replace("/teoria");
  }, [chapter, router]);

  if (!chapter) return null;

  const tr = chapter.translations[lang];
  const relatedTerms = (chapter.termIds ?? [])
    .map((tid) => getTermById(tid))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <div>
      <div className="mb-6 flex items-baseline justify-between">
        <Link
          href="/teoria"
          className="text-xs font-mono uppercase tracking-widest text-ink-soft"
        >
          ← {t("common.back")}
        </Link>
        <div className="text-[10px] font-mono uppercase tracking-widest text-ink-faint">
          {sectionName(chapter.section)}
        </div>
      </div>

      <div className="overline mb-2">
        {t("teoria.temaLabel")} · {chapter.tema}
      </div>
      <h1 className="text-4xl font-bold uppercase tracking-tight leading-tight">
        {tr.title}
      </h1>

      <section className="mt-8">
        <div className="overline mb-2">{t("teoria.overview")}</div>
        <p className="text-base leading-relaxed">{tr.overview}</p>
      </section>

      <section className="mt-8">
        <div className="overline mb-3">{t("teoria.keyFacts")}</div>
        <ol className="border hairline divide-y hairline">
          {tr.keyFacts.map((fact, i) => (
            <li key={i} className="p-4 flex gap-4">
              <span className="shrink-0 font-mono text-xs font-bold tnum text-ink-faint mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed">{fact}</p>
            </li>
          ))}
        </ol>
      </section>

      {relatedTerms.length > 0 && (
        <section className="mt-8">
          <div className="overline mb-3">{t("teoria.relatedTerms")}</div>
          <div className="flex flex-wrap gap-1">
            {relatedTerms.map((term) => (
              <Link
                key={term.id}
                href={`/glossary/${term.id}`}
                className="text-xs font-bold uppercase tracking-wide px-2.5 py-1.5 border hairline hover:border-ink dark:hover:border-white transition"
              >
                {term.translations[lang].term}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-10">
        <Link
          href={`/practice/${chapter.section}`}
          className="block w-full py-3 bg-ink dark:bg-white text-paper dark:text-ink font-bold uppercase tracking-widest text-sm text-center active:translate-y-px transition-all"
        >
          {t("teoria.practiceCta")} →
        </Link>
      </section>

      {chapter.sourceStartPage && (
        <div className="mt-6 text-[10px] font-mono uppercase tracking-widest text-ink-faint">
          {t("teoria.sourcePage")} <span className="tnum">{chapter.sourceStartPage}</span>
        </div>
      )}
    </div>
  );
}
