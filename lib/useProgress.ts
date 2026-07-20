"use client";

import { useEffect, useState } from "react";
import {
  getStreak,
  getTodayProgress,
  loadProgress,
  onProgressChanged,
} from "./storage";
import type { ProgressState } from "./types";

export function useProgress() {
  const [state, setState] = useState<ProgressState | null>(null);

  useEffect(() => {
    setState(loadProgress());
    return onProgressChanged(() => setState(loadProgress()));
  }, []);

  if (!state) {
    return {
      ready: false as const,
      state: null,
      xp: 0,
      streak: 0,
      today: { date: "", answered: 0, correct: 0, xp: 0 },
      dailyGoal: 10,
    };
  }

  return {
    ready: true as const,
    state,
    xp: state.gam.xp,
    streak: getStreak(state),
    today: getTodayProgress(state),
    dailyGoal: state.gam.dailyGoal,
  };
}
