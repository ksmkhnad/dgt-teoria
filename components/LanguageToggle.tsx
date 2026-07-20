"use client";

import { useI18n } from "@/app/providers";
import type { Lang } from "@/lib/types";

const OPTIONS: { code: Lang; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

export default function LanguageToggle() {
  const { lang, setLang } = useI18n();
  return (
    <div className="inline-flex items-center text-[10px] font-mono font-bold uppercase tracking-widest">
      {OPTIONS.map((o, i) => (
        <button
          key={o.code}
          onClick={() => setLang(o.code)}
          className={`px-1.5 py-0.5 transition ${
            lang === o.code
              ? "text-brand"
              : "text-ink-faint hover:text-ink"
          } ${i > 0 ? "border-l hairline" : ""}`}
          aria-pressed={lang === o.code}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
