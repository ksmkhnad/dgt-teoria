import { QUESTIONS } from "@/data/questions";
import type { Question, Section } from "./types";
import { SECTIONS } from "./types";

export function getAllQuestions(): Question[] {
  return QUESTIONS;
}

export function getBySection(section: Section): Question[] {
  return QUESTIONS.filter((q) => q.section === section);
}

export function getById(id: string): Question | undefined {
  return QUESTIONS.find((q) => q.id === id);
}

export function sectionCounts(): Record<Section, number> {
  const out = Object.fromEntries(SECTIONS.map((s) => [s, 0])) as Record<Section, number>;
  for (const q of QUESTIONS) out[q.section]++;
  return out;
}

function shuffle<T>(arr: T[], seed?: number): T[] {
  const copy = arr.slice();
  let m = copy.length;
  let s = seed ?? Date.now();
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  while (m) {
    const i = Math.floor(rand() * m--);
    [copy[m], copy[i]] = [copy[i], copy[m]];
  }
  return copy;
}

export function buildExam(size = 30): Question[] {
  const pool = shuffle(QUESTIONS);
  return pool.slice(0, Math.min(size, pool.length));
}
