"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useI18n } from "../providers";
import { getAllTerms, searchTerms, sortTermsForLang } from "@/lib/terms";
import { TERM_CATEGORIES, type TermCategory } from "@/lib/types";

export default function GlossaryIndex() {
  const { t, lang, termCategoryName } = useI18n();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<TermCategory | "all">("all");

  const filtered = useMemo(() => {
    let list = query.trim() ? searchTerms(query, lang) : getAllTerms();
    if (cat !== "all") list = list.filter((x) => x.category === cat);
    return sortTermsForLang(list, lang);
  }, [query, cat, lang]);

  return (
    <div>
      <div className="mb-6 flex items-baseline justify-between">
        <div>
          <div className="overline mb-2">Menu · 05</div>
          <h1 className="text-3xl font-bold uppercase tracking-tight">
            {t("glossary.title")}
          </h1>
        </div>
        <Link
          href="/"
          className="text-xs font-mono uppercase tracking-widest text-ink-soft"
        >
          ← {t("common.back")}
        </Link>
      </div>

      <div className="sticky top-14 -mx-5 px-5 pt-3 pb-2 bg-paper/95 dark:bg-paper-dark/95 backdrop-blur border-b hairline z-[5]">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("glossary.searchPlaceholder")}
          className="w-full px-3 py-2 border-2 border-line-soft dark:border-neutral-800 bg-paper dark:bg-paper-dark text-sm focus:outline-none focus:border-ink dark:focus:border-white"
        />
        <div className="mt-2 flex gap-1 overflow-x-auto pb-1">
          <CategoryChip active={cat === "all"} onClick={() => setCat("all")}>
            {t("glossary.all")}
          </CategoryChip>
          {TERM_CATEGORIES.map((c) => (
            <CategoryChip key={c} active={cat === c} onClick={() => setCat(c)}>
              {termCategoryName(c)}
            </CategoryChip>
          ))}
        </div>
      </div>

      <ul className="mt-2 border hairline divide-y hairline">
        {filtered.length === 0 && (
          <li className="text-center text-sm text-ink-soft py-8">
            {t("glossary.empty")}
          </li>
        )}
        {filtered.map((term) => {
          const primary = term.translations[lang];
          const es = term.translations.es.term;
          return (
            <li key={term.id}>
              <Link
                href={`/glossary/${term.id}`}
                className="block p-4 hover:bg-paper-alt/60 dark:hover:bg-white/[0.03] transition"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <div className="font-bold uppercase tracking-wide">
                    {primary.term}
                  </div>
                  {lang !== "es" && (
                    <div className="text-[10px] font-mono uppercase tracking-widest text-ink-faint truncate">
                      {es}
                    </div>
                  )}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-ink-faint mt-0.5">
                  {termCategoryName(term.category)}
                </div>
                <p className="text-sm mt-2 line-clamp-2 text-ink-soft leading-relaxed">
                  {primary.definition}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function CategoryChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-widest whitespace-nowrap transition ${
        active
          ? "bg-ink text-paper dark:bg-white dark:text-ink"
          : "bg-transparent text-ink-soft hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
