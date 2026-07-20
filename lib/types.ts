export type Lang = "es" | "en" | "ru";

export const LANGS: Lang[] = ["es", "en", "ru"];

export const SECTIONS = [
  "signs",
  "priorities",
  "alcohol_drugs",
  "safety",
  "mechanics",
  "admin",
  "driving_conditions",
  "others",
] as const;

export type Section = (typeof SECTIONS)[number];

export interface QuestionTranslation {
  text: string;
  options: string[];
  explanation: string;
}

export interface Question {
  id: string;
  section: Section;
  correctIndex: number;
  translations: Record<Lang, QuestionTranslation>;
  // Path under /public, e.g. "/questions/sign-give-way.png". Optional.
  imageUrl?: string;
  // Source attribution — page/section in the DGT manual we derived from.
  source?: string;
  // Glossary term IDs to surface as tappable in the question text.
  termIds?: string[];
}

export interface AnswerRecord {
  questionId: string;
  correct: boolean;
  timestamp: number;
}

export interface ReviewState {
  // Per question: how many correct-in-a-row since last wrong.
  // 0 = wrong most recently, 1 = one correct, 2+ = graduated.
  streak: Record<string, number>;
  lastSeen: Record<string, number>;
}

export interface DailyProgress {
  // YYYY-MM-DD in local time.
  date: string;
  answered: number;
  correct: number;
  xp: number;
}

export interface GamificationState {
  xp: number;
  dailyGoal: number;
  daily: DailyProgress[];
  streakFreezes: number;
}

export interface ProgressState {
  answers: AnswerRecord[];
  review: ReviewState;
  examResults: { passed: boolean; correct: number; total: number; timestamp: number }[];
  gam: GamificationState;
}

export const TERM_CATEGORIES = [
  "vehicles",
  "persons",
  "roads",
  "signs",
  "maneuvers",
  "safety",
  "documentation",
  "mechanics_adas",
] as const;

export type TermCategory = (typeof TERM_CATEGORIES)[number];

export interface TermTranslation {
  term: string;
  definition: string;
  example?: string;
}

export interface Term {
  id: string;
  category: TermCategory;
  translations: Record<Lang, TermTranslation>;
  relatedTerms?: string[];
  source?: string;
}
