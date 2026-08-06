import { THEORY } from "@/data/theory";
import type { TheoryChapter } from "./types";

export function getAllChapters(): TheoryChapter[] {
  return THEORY;
}

export function getChapterById(id: string): TheoryChapter | undefined {
  return THEORY.find((c) => c.id === id);
}
