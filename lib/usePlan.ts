"use client";

import { useEffect, useState } from "react";
import {
  getCurrentDay,
  getDayTask,
  isDayComplete,
  loadPlan,
  onPlanChanged,
  todayIso,
  type DayTask,
  type PlanState,
} from "./plan";

export function usePlan() {
  const [state, setState] = useState<PlanState | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setState(loadPlan());
    setReady(true);
    return onPlanChanged(() => setState(loadPlan()));
  }, []);

  if (!ready) {
    return {
      ready: false as const,
      state: null,
      currentDay: null as number | null,
      todayTask: null as DayTask | null,
      todayDone: false,
    };
  }

  if (!state) {
    return {
      ready: true as const,
      state: null,
      currentDay: null as number | null,
      todayTask: null as DayTask | null,
      todayDone: false,
    };
  }

  const currentDay = getCurrentDay(state, todayIso());
  const todayTask = getDayTask(currentDay);
  const todayDone = isDayComplete(state, currentDay);

  return {
    ready: true as const,
    state,
    currentDay,
    todayTask,
    todayDone,
  };
}
