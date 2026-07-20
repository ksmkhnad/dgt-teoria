export type AuthProvider = "guest" | "google" | "apple" | "email";

export interface Profile {
  name: string;
  // "YYYY-MM-DD" or null.
  targetDate: string | null;
  authProvider: AuthProvider;
  onboardedAt: number;
}

const PROFILE_KEY = "dgt-profile-v1";
const PROFILE_EVENT = "dgt:profile-changed";

export function loadProfile(): Profile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Profile;
    if (!parsed.name || !parsed.onboardedAt) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveProfile(p: Profile) {
  if (typeof window === "undefined") return;
  localStorage.setItem(PROFILE_KEY, JSON.stringify(p));
  window.dispatchEvent(new CustomEvent(PROFILE_EVENT));
}

export function clearProfile() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(PROFILE_KEY);
  window.dispatchEvent(new CustomEvent(PROFILE_EVENT));
}

export function onProfileChanged(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(PROFILE_EVENT, cb);
  return () => window.removeEventListener(PROFILE_EVENT, cb);
}

export function daysUntil(targetDate: string): number | null {
  if (!targetDate) return null;
  const [y, m, d] = targetDate.split("-").map(Number);
  const target = new Date(y, m - 1, d);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const ms = target.getTime() - today.getTime();
  return Math.round(ms / (1000 * 60 * 60 * 24));
}
