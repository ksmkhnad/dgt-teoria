"use client";

import Link from "next/link";
import { useI18n } from "../providers";
import type { Lang } from "@/lib/types";

interface Channel {
  key: string;
  name: string;
  handle: string;
  url: string;
  langs: Lang[];
  descKey: string;
}

const CHANNELS: Channel[] = [
  {
    key: "estudia",
    name: "Estudia el Teórico",
    handle: "@estudiaelteorico",
    url: "https://www.youtube.com/@estudiaelteorico",
    langs: ["es"],
    descKey: "resources.estudia.desc",
  },
];

const METHODOLOGY_KEYS = [
  "resources.tip.wholeQuestion",
  "resources.tip.hierarchy",
  "resources.tip.absolutes",
  "resources.tip.numbers",
  "resources.tip.similar",
];

export default function ResourcesPage() {
  const { t } = useI18n();
  return (
    <div>
      <div className="mb-8 flex items-baseline justify-between">
        <div>
          <div className="overline mb-2">Menu · 07</div>
          <h1 className="text-3xl font-bold uppercase tracking-tight">
            {t("resources.title")}
          </h1>
        </div>
        <Link
          href="/"
          className="text-xs font-mono uppercase tracking-widest text-ink-soft"
        >
          ← {t("common.back")}
        </Link>
      </div>

      <section className="mb-10">
        <div className="overline mb-3">01 · {t("resources.methodology.title")}</div>
        <p className="text-sm leading-relaxed text-ink-soft mb-5">
          {t("resources.methodology.intro")}
        </p>
        <ol className="border hairline divide-y hairline">
          {METHODOLOGY_KEYS.map((k, i) => (
            <li key={k} className="p-4 flex gap-4">
              <span className="shrink-0 font-mono text-xs font-bold tnum text-ink-faint mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed">{t(k)}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <div className="overline mb-3">02 · {t("resources.channels.title")}</div>
        <div className="space-y-3">
          {CHANNELS.map((c) => (
            <a
              key={c.key}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border hairline p-4 hover:border-ink dark:hover:border-white transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <div className="text-lg font-bold uppercase tracking-wide">
                      {c.name}
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-ink-faint">
                      {c.handle}
                    </div>
                    <div className="flex gap-1">
                      {c.langs.map((l) => (
                        <span
                          key={l}
                          className="text-[10px] font-mono uppercase tracking-widest bg-ink text-paper dark:bg-white dark:text-ink px-1.5 py-0.5"
                        >
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-ink-soft leading-relaxed mt-2">
                    {t(c.descKey)}
                  </p>
                </div>
                <span className="shrink-0 text-brand font-mono text-xs uppercase tracking-widest">
                  {t("resources.channel.watch")} →
                </span>
              </div>
            </a>
          ))}
        </div>
        <p className="text-[10px] font-mono uppercase tracking-widest text-ink-faint mt-4 leading-relaxed">
          {t("resources.disclaimer")}
        </p>
      </section>
    </div>
  );
}
