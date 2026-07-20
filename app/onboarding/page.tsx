"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/app/providers";
import { loadProfile, saveProfile, type AuthProvider } from "@/lib/profile";
import type { Lang } from "@/lib/types";

type Step = "lang" | "welcome" | "auth" | "name" | "date" | "done";

const STEPS: Step[] = ["lang", "welcome", "auth", "name", "date", "done"];

export default function OnboardingPage() {
  const router = useRouter();
  const { t, lang, setLang } = useI18n();
  const [step, setStep] = useState<Step>("lang");
  const [name, setName] = useState("");
  const [targetDate, setTargetDate] = useState<string>("");
  const [authProvider, setAuthProvider] = useState<AuthProvider>("guest");

  useEffect(() => {
    if (loadProfile()) router.replace("/");
  }, [router]);

  const currentIndex = STEPS.indexOf(step);
  const goNext = () => {
    const next = STEPS[currentIndex + 1];
    if (next) setStep(next);
  };
  const goBack = () => {
    const prev = STEPS[currentIndex - 1];
    if (prev) setStep(prev);
  };

  const finish = () => {
    saveProfile({
      name: name.trim() || (lang === "es" ? "Amigo" : lang === "ru" ? "Друг" : "Friend"),
      targetDate: targetDate || null,
      authProvider,
      onboardedAt: Date.now(),
    });
    router.replace("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-paper dark:bg-paper-dark">
      {/* Progress */}
      <div className="pt-8 px-5">
        <div className="mx-auto max-w-md flex items-center gap-4">
          {step !== "lang" ? (
            <button
              onClick={goBack}
              className="text-xl text-ink-faint hover:text-ink transition leading-none"
              aria-label={t("onboarding.back")}
            >
              ←
            </button>
          ) : (
            <span className="w-3" />
          )}
          <div className="flex-1 flex gap-1">
            {STEPS.map((s, i) => (
              <div
                key={s}
                className={`h-[3px] flex-1 transition ${
                  i <= currentIndex ? "bg-ink dark:bg-white" : "bg-ink/15 dark:bg-white/15"
                }`}
              />
            ))}
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest tnum text-ink-soft">
            {currentIndex + 1}/{STEPS.length}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-5">
        <div className="mx-auto w-full max-w-md py-10">
          {step === "lang" && (
            <LangStep lang={lang} setLang={setLang} onNext={goNext} t={t} />
          )}
          {step === "welcome" && <WelcomeStep onNext={goNext} t={t} />}
          {step === "auth" && (
            <AuthStep
              onPick={(p) => {
                setAuthProvider(p);
                goNext();
              }}
              t={t}
            />
          )}
          {step === "name" && (
            <NameStep value={name} onChange={setName} onNext={goNext} t={t} />
          )}
          {step === "date" && (
            <DateStep value={targetDate} onChange={setTargetDate} onNext={goNext} t={t} />
          )}
          {step === "done" && (
            <DoneStep name={name} onFinish={finish} t={t} />
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Steps ──────────────────────────────────────────────────────────

const LANGS: { code: Lang; label: string; native: string }[] = [
  { code: "es", label: "Español", native: "SPANISH" },
  { code: "en", label: "English", native: "ENGLISH" },
  { code: "ru", label: "Русский", native: "RUSSIAN" },
];

function StepHeading({
  overline,
  title,
  subtitle,
}: {
  overline?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      {overline && <div className="overline mb-3">{overline}</div>}
      <h1 className="text-3xl font-bold uppercase tracking-tight leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm text-ink-soft mt-3 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

function PrimaryButton({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full py-3 bg-ink dark:bg-white text-paper dark:text-ink font-bold uppercase tracking-widest text-sm disabled:opacity-30 active:translate-y-px transition-all"
    >
      {children}
    </button>
  );
}

function SecondaryButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full py-3 border-2 hairline font-bold uppercase tracking-widest text-sm"
    >
      {children}
    </button>
  );
}

function LangStep({
  lang,
  setLang,
  onNext,
  t,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  onNext: () => void;
  t: (k: string) => string;
}) {
  return (
    <div>
      <StepHeading
        overline="Step 01"
        title={t("onboarding.lang.title")}
        subtitle={t("onboarding.lang.subtitle")}
      />
      <div className="border hairline divide-y hairline mb-8">
        {LANGS.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`w-full p-4 flex items-center justify-between text-left transition ${
              lang === l.code
                ? "bg-paper-alt dark:bg-white/5"
                : "hover:bg-paper-alt/60 dark:hover:bg-white/[0.03]"
            }`}
          >
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-ink-faint mb-1">
                {l.native}
              </div>
              <div className="text-lg font-bold">{l.label}</div>
            </div>
            {lang === l.code && (
              <span className="text-brand font-mono text-lg">●</span>
            )}
          </button>
        ))}
      </div>
      <PrimaryButton onClick={onNext}>{t("onboarding.next")}</PrimaryButton>
    </div>
  );
}

function WelcomeStep({
  onNext,
  t,
}: {
  onNext: () => void;
  t: (k: string) => string;
}) {
  return (
    <div>
      <div className="overline mb-6">DGT · Teoría · 2024</div>
      <h1 className="text-4xl sm:text-5xl font-bold uppercase leading-none tracking-tight mb-6">
        {t("onboarding.welcome.title")}
      </h1>
      <div className="w-12 h-px bg-ink dark:bg-white mb-6" />
      <p className="text-ink-soft mb-10 leading-relaxed">
        {t("onboarding.welcome.subtitle")}
      </p>
      <PrimaryButton onClick={onNext}>{t("onboarding.welcome.cta")}</PrimaryButton>
    </div>
  );
}

function AuthStep({
  onPick,
  t,
}: {
  onPick: (p: AuthProvider) => void;
  t: (k: string) => string;
}) {
  const placeholders: {
    provider: Exclude<AuthProvider, "guest">;
    labelKey: string;
    icon: React.ReactNode;
    cls: string;
  }[] = [
    {
      provider: "google",
      labelKey: "onboarding.auth.google",
      icon: <GoogleIcon />,
      cls: "border-line-soft dark:border-neutral-800",
    },
    {
      provider: "apple",
      labelKey: "onboarding.auth.apple",
      icon: <AppleIcon />,
      cls: "border-line-soft dark:border-neutral-800",
    },
    {
      provider: "email",
      labelKey: "onboarding.auth.email",
      icon: <span className="text-base">✉</span>,
      cls: "border-line-soft dark:border-neutral-800",
    },
  ];
  return (
    <div>
      <StepHeading
        overline="Step 03"
        title={t("onboarding.auth.title")}
        subtitle={t("onboarding.auth.subtitle")}
      />
      <div className="space-y-2 mb-4">
        {placeholders.map((p) => (
          <button
            key={p.provider}
            disabled
            className={`w-full py-3 px-4 border-2 ${p.cls} flex items-center gap-3 opacity-50 cursor-not-allowed relative`}
          >
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] font-mono uppercase tracking-widest bg-ink text-paper dark:bg-white dark:text-ink px-1.5 py-0.5">
              {t("onboarding.auth.soon")}
            </span>
            {p.icon}
            <span className="font-bold text-sm">{t(p.labelKey)}</span>
          </button>
        ))}
      </div>
      <div className="my-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-line-soft dark:bg-neutral-800" />
        <div className="text-[10px] font-mono uppercase tracking-widest text-ink-faint">
          OR
        </div>
        <div className="h-px flex-1 bg-line-soft dark:bg-neutral-800" />
      </div>
      <PrimaryButton onClick={() => onPick("guest")}>
        {t("onboarding.auth.guest")}
      </PrimaryButton>
      <p className="text-[11px] text-ink-faint text-center mt-4 leading-relaxed">
        {t("onboarding.auth.notice")}
      </p>
    </div>
  );
}

function NameStep({
  value,
  onChange,
  onNext,
  t,
}: {
  value: string;
  onChange: (s: string) => void;
  onNext: () => void;
  t: (k: string) => string;
}) {
  return (
    <div>
      <StepHeading
        overline="Step 04"
        title={t("onboarding.name.title")}
        subtitle={t("onboarding.name.subtitle")}
      />
      <input
        autoFocus
        type="text"
        maxLength={40}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t("onboarding.name.placeholder")}
        className="w-full px-4 py-3 border-2 border-line-soft dark:border-neutral-800 bg-paper dark:bg-paper-dark text-lg font-semibold focus:outline-none focus:border-ink dark:focus:border-white"
      />
      <div className="mt-8">
        <PrimaryButton onClick={onNext} disabled={value.trim().length < 1}>
          {t("onboarding.next")}
        </PrimaryButton>
      </div>
    </div>
  );
}

function DateStep({
  value,
  onChange,
  onNext,
  t,
}: {
  value: string;
  onChange: (s: string) => void;
  onNext: () => void;
  t: (k: string) => string;
}) {
  const todayStr = new Date().toISOString().slice(0, 10);
  return (
    <div>
      <StepHeading
        overline="Step 05"
        title={t("onboarding.date.title")}
        subtitle={t("onboarding.date.subtitle")}
      />
      <input
        type="date"
        min={todayStr}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border-2 border-line-soft dark:border-neutral-800 bg-paper dark:bg-paper-dark text-lg font-semibold focus:outline-none focus:border-ink dark:focus:border-white"
      />
      <div className="mt-8 space-y-2">
        <PrimaryButton onClick={onNext}>{t("onboarding.next")}</PrimaryButton>
        <SecondaryButton
          onClick={() => {
            onChange("");
            onNext();
          }}
        >
          {t("onboarding.date.skip")}
        </SecondaryButton>
      </div>
    </div>
  );
}

function DoneStep({
  name,
  onFinish,
  t,
}: {
  name: string;
  onFinish: () => void;
  t: (k: string) => string;
}) {
  const displayName = name.trim() || "Friend";
  return (
    <div>
      <div className="overline mb-3">Ready</div>
      <h1 className="text-4xl sm:text-5xl font-bold uppercase leading-none tracking-tight mb-6">
        {t("onboarding.done.title").replace("{name}", displayName)}
      </h1>
      <div className="w-12 h-px bg-ink dark:bg-white mb-6" />
      <p className="text-ink-soft mb-10 leading-relaxed">
        {t("onboarding.done.subtitle")}
      </p>
      <PrimaryButton onClick={onFinish}>
        {t("onboarding.done.cta")}
      </PrimaryButton>
    </div>
  );
}

// ─── Brand icons ────────────────────────────────────────────────────

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}
