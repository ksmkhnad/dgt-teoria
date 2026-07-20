"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { loadLang, saveLang } from "@/lib/storage";
import { loadProfile } from "@/lib/profile";
import { translate, sectionLabel, termCategoryLabel } from "@/lib/i18n";
import type { Lang, Section, TermCategory } from "@/lib/types";

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  sectionName: (s: Section) => string;
  termCategoryName: (c: TermCategory) => string;
}

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = loadLang();
    if (stored) setLangState(stored);
    setReady(true);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    saveLang(l);
  };

  const value = useMemo<I18nCtx>(
    () => ({
      lang,
      setLang,
      t: (k) => translate(lang, k),
      sectionName: (s) => sectionLabel(lang, s),
      termCategoryName: (c) => termCategoryLabel(lang, c),
    }),
    [lang]
  );

  if (!ready) {
    return <div className="min-h-screen" />;
  }

  return (
    <Ctx.Provider value={value}>
      <OnboardingGate />
      {children}
    </Ctx.Provider>
  );
}

function OnboardingGate() {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (pathname?.startsWith("/onboarding")) return;
    const profile = loadProfile();
    if (!profile) router.replace("/onboarding");
  }, [pathname, router]);
  return null;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
