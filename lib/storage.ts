import type {
  AnswerRecord,
  DailyProgress,
  GamificationState,
  Lang,
  ProgressState,
  ReviewState,
} from "./types";

const STORAGE_KEY = "dgt-progress-v1";
const LANG_KEY = "dgt-lang-v1";

const emptyReview: ReviewState = { streak: {}, lastSeen: {} };

const emptyGam: GamificationState = {
  xp: 0,
  dailyGoal: 10,
  daily: [],
  streakFreezes: 0,
};

const emptyProgress: ProgressState = {
  answers: [],
  review: emptyReview,
  examResults: [],
  gam: emptyGam,
};

function todayStr(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function daysBefore(dateStr: string, n: number): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() - n);
  return todayStr(dt);
}

export function loadProgress(): ProgressState {
  if (typeof window === "undefined") return emptyProgress;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress;
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return {
      answers: parsed.answers ?? [],
      review: parsed.review ?? emptyReview,
      examResults: parsed.examResults ?? [],
      gam: parsed.gam ?? emptyGam,
    };
  } catch {
    return emptyProgress;
  }
}

const PROGRESS_EVENT = "dgt:progress-changed";

export function saveProgress(state: ProgressState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent(PROGRESS_EVENT));
}

export function onProgressChanged(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(PROGRESS_EVENT, cb);
  return () => window.removeEventListener(PROGRESS_EVENT, cb);
}

function upsertToday(gam: GamificationState): DailyProgress {
  const today = todayStr();
  let entry = gam.daily.find((d) => d.date === today);
  if (!entry) {
    entry = { date: today, answered: 0, correct: 0, xp: 0 };
    gam.daily.push(entry);
    // Trim to last 60 days.
    gam.daily = gam.daily
      .sort((a, b) => (a.date < b.date ? -1 : 1))
      .slice(-60);
    entry = gam.daily.find((d) => d.date === today)!;
  }
  return entry;
}

const XP_CORRECT = 10;
const XP_STREAK_BONUS = 5; // + per each correct after 3 in a row
const XP_GOAL_BONUS = 20; // one-time when daily goal reached
const XP_EXAM_PASSED = 50;

export function recordAnswer(questionId: string, correct: boolean) {
  const state = loadProgress();
  const record: AnswerRecord = { questionId, correct, timestamp: Date.now() };
  state.answers.push(record);
  const prevStreak = state.review.streak[questionId] ?? 0;
  state.review.streak[questionId] = correct ? prevStreak + 1 : 0;
  state.review.lastSeen[questionId] = record.timestamp;

  const today = upsertToday(state.gam);
  today.answered++;
  const wasGoalReached = today.correct >= state.gam.dailyGoal;
  if (correct) {
    today.correct++;
    let gained = XP_CORRECT;
    // Correct-in-a-row bonus (within today).
    const last3 = state.answers.slice(-4, -1); // 3 before the current one
    if (last3.length === 3 && last3.every((a) => a.correct)) {
      gained += XP_STREAK_BONUS;
    }
    today.xp += gained;
    state.gam.xp += gained;
    // Daily goal bonus (once per day).
    if (!wasGoalReached && today.correct >= state.gam.dailyGoal) {
      today.xp += XP_GOAL_BONUS;
      state.gam.xp += XP_GOAL_BONUS;
    }
  }

  saveProgress(state);
}

export function recordExam(correct: number, total: number, passed: boolean) {
  const state = loadProgress();
  state.examResults.push({ correct, total, passed, timestamp: Date.now() });
  if (passed) {
    state.gam.xp += XP_EXAM_PASSED;
    const today = upsertToday(state.gam);
    today.xp += XP_EXAM_PASSED;
  }
  saveProgress(state);
}

export function resetProgress() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

export function loadLang(): Lang | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(LANG_KEY);
  if (v === "es" || v === "en" || v === "ru") return v;
  return null;
}

export function saveLang(lang: Lang) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LANG_KEY, lang);
}

// ─── Gamification selectors ──────────────────────────────────────────

export function getTodayProgress(state: ProgressState): DailyProgress {
  const today = todayStr();
  return (
    state.gam.daily.find((d) => d.date === today) ?? {
      date: today,
      answered: 0,
      correct: 0,
      xp: 0,
    }
  );
}

/**
 * Consecutive days ending today (or yesterday if today is empty) that met dailyGoal (correct answers).
 * Yesterday's incomplete day is a "grace" — streak still shows if today just hasn't started yet.
 */
export function getStreak(state: ProgressState): number {
  const goal = state.gam.dailyGoal;
  const byDate = new Map(state.gam.daily.map((d) => [d.date, d]));
  const today = todayStr();
  const todayEntry = byDate.get(today);
  const todayMet = (todayEntry?.correct ?? 0) >= goal;

  let cursor = todayMet ? today : daysBefore(today, 1);
  let streak = 0;

  // Allow up to 60 days lookback.
  for (let i = 0; i < 60; i++) {
    const e = byDate.get(cursor);
    if (e && e.correct >= goal) {
      streak++;
      cursor = daysBefore(cursor, 1);
    } else {
      break;
    }
  }
  return streak;
}

export function setDailyGoal(goal: number) {
  const state = loadProgress();
  state.gam.dailyGoal = Math.max(1, Math.min(100, Math.round(goal)));
  saveProgress(state);
}
