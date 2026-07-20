"use client";

import Link from "next/link";
import { useI18n } from "../providers";

export default function ReferencePage() {
  const { t } = useI18n();
  return (
    <div>
      <div className="mb-8 flex items-baseline justify-between">
        <div>
          <div className="overline mb-2">Menu · 06</div>
          <h1 className="text-3xl font-bold uppercase tracking-tight">
            {t("ref.title")}
          </h1>
        </div>
        <Link
          href="/"
          className="text-xs font-mono uppercase tracking-widest text-ink-soft"
        >
          ← {t("common.back")}
        </Link>
      </div>

      <Card num="01" title={t("ref.speed.title")}>
        <Table
          headers={[
            t("ref.speed.vehicle"),
            t("ref.speed.autopista"),
            t("ref.speed.conventional"),
            t("ref.speed.urban"),
          ]}
          rows={[
            [t("ref.speed.car"), "120", "90", "50"],
            [t("ref.speed.bus"), "100", "90", "50"],
            [t("ref.speed.truck"), "90", "80", "40"],
            [t("ref.speed.minAutopista"), "60", "—", "—"],
          ]}
        />
        <Footnote>{t("ref.speed.footnote")}</Footnote>
      </Card>

      <Card num="02" title={t("ref.bac.title")}>
        <Table
          headers={[
            t("ref.bac.category"),
            t("ref.bac.air"),
            t("ref.bac.blood"),
          ]}
          rows={[
            [t("ref.bac.general"), "0,25", "0,50"],
            [t("ref.bac.professional"), "0,15", "0,30"],
            [t("ref.bac.novice"), "0,15", "0,30"],
            [t("ref.bac.minor"), "0,00", "0,00"],
          ]}
        />
        <Footnote>{t("ref.bac.footnote")}</Footnote>
      </Card>

      <Card num="03" title={t("ref.itv.title")}>
        <Table
          headers={[
            t("ref.itv.vehicle"),
            t("ref.itv.first"),
            t("ref.itv.after"),
          ]}
          rows={[
            [t("ref.itv.turismo"), t("ref.itv.turismoFirst"), t("ref.itv.turismoAfter")],
            [t("ref.itv.moto"), t("ref.itv.motoFirst"), t("ref.itv.motoAfter")],
            [t("ref.itv.van"), t("ref.itv.vanFirst"), t("ref.itv.vanAfter")],
            [t("ref.itv.truck"), t("ref.itv.truckFirst"), t("ref.itv.truckAfter")],
          ]}
        />
      </Card>

      <Card num="04" title={t("ref.priority.title")}>
        <ol className="divide-y hairline border hairline">
          {["step1", "step2", "step3", "step4", "step5"].map((k) => (
            <li key={k} className="p-3 text-sm">
              {t(`ref.priority.${k}`)}
            </li>
          ))}
        </ol>
      </Card>

      <Card num="05" title={t("ref.pas.title")}>
        <div className="divide-y hairline border hairline">
          <PasRow letter="P" body={t("ref.pas.p")} />
          <PasRow letter="A" body={t("ref.pas.a")} />
          <PasRow letter="S" body={t("ref.pas.s")} />
        </div>
      </Card>

      <Card num="06" title={t("ref.adas.title")}>
        <div className="divide-y hairline border hairline">
          {[
            ["ABS", "abs"],
            ["ESP", "esp"],
            ["AEB", "aeb"],
            ["LKA / LDW", "lka"],
            ["TPMS", "tpms"],
            ["Hill holder", "hill_holder"],
            ["ADAS", "adas"],
          ].map(([acronym, id]) => (
            <Link
              key={id}
              href={`/glossary/${id}`}
              className="p-3 flex items-center justify-between hover:bg-paper-alt/60 dark:hover:bg-white/[0.03] transition"
            >
              <span className="font-mono font-bold text-sm">{acronym}</span>
              <span className="text-ink-faint">→</span>
            </Link>
          ))}
        </div>
      </Card>

      <p className="text-[10px] font-mono uppercase tracking-widest text-ink-faint mt-6 leading-relaxed">
        {t("ref.footer")}
      </p>
    </div>
  );
}

function Card({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <div className="flex items-baseline gap-3 mb-3">
        <div className="overline tnum">{num}</div>
        <h2 className="text-base font-bold uppercase tracking-wide">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | number)[][];
}) {
  return (
    <div className="overflow-x-auto -mx-5 sm:mx-0 border-t border-b hairline">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b hairline">
            {headers.map((h, i) => (
              <th
                key={i}
                className="py-2 px-4 text-[10px] font-mono font-bold uppercase tracking-widest text-ink-faint"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={i}
              className="border-b hairline last:border-0"
            >
              {r.map((c, j) => (
                <td
                  key={j}
                  className={`py-2 px-4 ${j === 0 ? "font-medium" : "font-mono tnum"}`}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Footnote({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-mono uppercase tracking-widest text-ink-faint mt-2 leading-relaxed">
      {children}
    </p>
  );
}

function PasRow({ letter, body }: { letter: string; body: string }) {
  return (
    <div className="p-3 flex gap-3 items-start">
      <span className="shrink-0 inline-flex items-center justify-center h-6 w-6 bg-ink text-paper dark:bg-white dark:text-ink font-bold text-xs">
        {letter}
      </span>
      <p className="text-sm leading-snug text-ink-soft">{body}</p>
    </div>
  );
}
