// 37-day DGT study plan — five phases that build stamina progressively.
// Phase 1 (1-7)  : warmup     — 10 → 15 → 20 questions, no pressure
// Phase 2 (8-14) : build      — 20 → 25 → 30 questions, still no pressure
// Phase 3 (15-25): weak topics — 1 full test + drill on weakest section
// Phase 4 (26-34): exam mode  — 1-2 full tests, aim for 0-3 wrong
// Phase 5 (35-37): final      — light polish, don't burn out

export const PLAN_TOTAL_DAYS = 37;

export type PlanPhase = 1 | 2 | 3 | 4 | 5;
export type PlanFocus =
  | "warmup"
  | "build"
  | "weak_topics"
  | "exam_mode"
  | "final";

export interface DayTask {
  day: number;
  phase: PlanPhase;
  focus: PlanFocus;
  size: number;
  // Whether the day suggests running a full timed mock exam (Phase 4/5).
  suggestExam?: boolean;
}

export function getDayTask(day: number): DayTask {
  if (day <= 2) return { day, phase: 1, focus: "warmup", size: 10 };
  if (day <= 4) return { day, phase: 1, focus: "warmup", size: 15 };
  if (day <= 7) return { day, phase: 1, focus: "warmup", size: 20 };
  if (day <= 9) return { day, phase: 2, focus: "build", size: 20 };
  if (day <= 11) return { day, phase: 2, focus: "build", size: 25 };
  if (day <= 14) return { day, phase: 2, focus: "build", size: 30 };
  if (day <= 25) return { day, phase: 3, focus: "weak_topics", size: 30 };
  if (day <= 34) return { day, phase: 4, focus: "exam_mode", size: 30, suggestExam: true };
  return { day, phase: 5, focus: "final", size: 30, suggestExam: true };
}

// ─── Storage ─────────────────────────────────────────────────────

const PLAN_KEY = "dgt-plan-v1";
const PLAN_EVENT = "dgt:plan-changed";

export interface PlanState {
  startDate: string; // YYYY-MM-DD local
  completedDays: number[]; // 1..37
}

export function todayIso(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function loadPlan(): PlanState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(PLAN_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PlanState;
    if (!parsed.startDate || !Array.isArray(parsed.completedDays)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function savePlan(state: PlanState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(PLAN_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent(PLAN_EVENT));
}

export function startPlan(): PlanState {
  const state: PlanState = { startDate: todayIso(), completedDays: [] };
  savePlan(state);
  return state;
}

export function resetPlan() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(PLAN_KEY);
  window.dispatchEvent(new CustomEvent(PLAN_EVENT));
}

export function markDayComplete(day: number) {
  const state = loadPlan();
  if (!state) return;
  if (state.completedDays.includes(day)) return;
  state.completedDays.push(day);
  savePlan(state);
}

export function onPlanChanged(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(PLAN_EVENT, cb);
  return () => window.removeEventListener(PLAN_EVENT, cb);
}

// ─── Day computation ─────────────────────────────────────────────

// Days between two YYYY-MM-DD (local) dates.
function daysBetween(startIso: string, endIso: string): number {
  const [y1, m1, d1] = startIso.split("-").map(Number);
  const [y2, m2, d2] = endIso.split("-").map(Number);
  const a = new Date(y1, m1 - 1, d1).getTime();
  const b = new Date(y2, m2 - 1, d2).getTime();
  return Math.round((b - a) / (1000 * 60 * 60 * 24));
}

// The plan-day number for today, based on startDate.
// Day 1 is the start date itself. Capped at PLAN_TOTAL_DAYS.
export function getCurrentDay(state: PlanState, today = todayIso()): number {
  const diff = daysBetween(state.startDate, today);
  return Math.max(1, Math.min(PLAN_TOTAL_DAYS, diff + 1));
}

export function isDayComplete(state: PlanState, day: number): boolean {
  return state.completedDays.includes(day);
}
