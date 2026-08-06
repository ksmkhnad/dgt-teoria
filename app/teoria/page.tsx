"use client";

import Link from "next/link";
import { useI18n } from "@/app/providers";
import { getAllChapters } from "@/lib/theory";

export default function TeoriaIndex() {
  const { t, lang, sectionName } = useI18n();
  const chapters = getAllChapters();

  return (
    <div>
      <div className="mb-6 flex items-baseline justify-between">
        <div>
          <div className="overline mb-2">Menu · 09</div>
          <h1 className="text-3xl font-bold uppercase tracking-tight">
            {t("teoria.title")}
          </h1>
        </div>
        <Link
          href="/"
          className="text-xs font-mono uppercase tracking-widest text-ink-soft"
        >
          ← {t("common.back")}
        </Link>
      </div>

      <p className="text-sm text-ink-soft leading-relaxed mb-8">
        {t("teoria.intro")}
      </p>

      <div className="border hairline divide-y hairline">
        {chapters.map((c) => {
          const tr = c.translations[lang];
          return (
            <Link
              key={c.id}
              href={`/teoria/${c.id}`}
              className="block p-4 hover:bg-paper-alt/60 dark:hover:bg-white/[0.03] transition"
            >
              <div className="flex items-baseline gap-4">
                <div className="overline tnum shrink-0 w-14">
                  {t("teoria.temaLabel")} {c.tema}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-base font-bold uppercase tracking-wide">
                    {tr.title}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-ink-faint mt-0.5">
                    {sectionName(c.section)}
                  </div>
                  <p className="text-sm text-ink-soft mt-2 line-clamp-2 leading-relaxed">
                    {tr.overview}
                  </p>
                </div>
                <span className="text-ink-faint shrink-0">→</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
