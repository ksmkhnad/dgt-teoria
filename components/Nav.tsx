"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/app/providers";
import { useProgress } from "@/lib/useProgress";
import LanguageToggle from "./LanguageToggle";

export default function Nav() {
  const pathname = usePathname();
  const { t } = useI18n();
  const { streak, xp, ready } = useProgress();

  if (pathname?.startsWith("/onboarding")) return null;

  return (
    <header className="sticky top-0 z-10 bg-paper/90 dark:bg-paper-dark/90 backdrop-blur border-b hairline">
      <div className="mx-auto max-w-3xl px-5 h-14 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
        >
          <span className="inline-flex items-center justify-center h-6 px-1.5 bg-ink dark:bg-white text-paper dark:text-ink text-[10px] font-black">
            DGT
          </span>
          <span className="hidden sm:inline text-ink">{t("app.title")}</span>
        </Link>

        <div className="flex items-center gap-3">
          {ready && (
            <>
              <Link
                href="/stats"
                aria-label={t("stats.streak")}
                className="inline-flex items-baseline gap-1 text-xs font-mono tnum"
              >
                <span>🔥</span>
                <span className={streak > 0 ? "text-brand font-bold" : "text-ink-faint"}>
                  {streak}
                </span>
              </Link>
              <span className="text-ink-faint">·</span>
              <Link
                href="/stats"
                aria-label={t("xp.total")}
                className="inline-flex items-baseline gap-1 text-xs font-mono tnum text-ink"
              >
                <span>XP</span>
                <span className="font-bold">{xp}</span>
              </Link>
            </>
          )}
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
