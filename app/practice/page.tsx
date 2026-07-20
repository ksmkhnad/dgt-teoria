"use client";

import Link from "next/link";
import { useI18n } from "../providers";
import { sectionCounts } from "@/lib/questions";
import { SECTIONS } from "@/lib/types";

export default function PracticeIndex() {
  const { t, sectionName } = useI18n();
  const counts = sectionCounts();
  return (
    <div>
      <div className="mb-8">
        <div className="overline mb-2">Menu · 01</div>
        <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight">
          {t("practice.title")}
        </h1>
      </div>

      <div className="border hairline divide-y hairline">
        {SECTIONS.map((s, i) => {
          const n = counts[s];
          const disabled = n === 0;
          return (
            <Link
              key={s}
              href={disabled ? "#" : `/practice/${s}`}
              className={`flex items-center justify-between p-4 group ${
                disabled
                  ? "opacity-40 pointer-events-none"
                  : "hover:bg-paper-alt/60 dark:hover:bg-white/[0.03] transition"
              }`}
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="overline tnum w-6 shrink-0 text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0">
                  <div className="text-base font-bold uppercase tracking-wide">
                    {sectionName(s)}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-ink-faint mt-0.5">
                    <span className="tnum">{n}</span> {t("practice.questions")}
                  </div>
                </div>
              </div>
              <span className="text-ink-faint group-hover:text-brand transition">→</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
