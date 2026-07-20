import { TERMS } from "@/data/terms";
import { TERM_CATEGORIES, type Lang, type Term, type TermCategory } from "./types";

export function getAllTerms(): Term[] {
  return TERMS;
}

export function getTermById(id: string): Term | undefined {
  return TERMS.find((t) => t.id === id);
}

export function getTermsByCategory(category: TermCategory): Term[] {
  return TERMS.filter((t) => t.category === category);
}

export function termCategoryCounts(): Record<TermCategory, number> {
  const out = Object.fromEntries(
    TERM_CATEGORIES.map((c) => [c, 0])
  ) as Record<TermCategory, number>;
  for (const t of TERMS) out[t.category]++;
  return out;
}

function normalise(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function searchTerms(query: string, _lang: Lang): Term[] {
  const q = normalise(query.trim());
  if (!q) return TERMS;
  return TERMS.filter((t) => {
    for (const l of ["es", "en", "ru"] as const) {
      const tr = t.translations[l];
      if (normalise(tr.term).includes(q)) return true;
      if (normalise(tr.definition).includes(q)) return true;
    }
    return false;
  });
}

export function sortTermsForLang(terms: Term[], lang: Lang): Term[] {
  return [...terms].sort((a, b) =>
    a.translations[lang].term.localeCompare(b.translations[lang].term, lang)
  );
}
