import { questionsCz } from "@/data/questions.cs";
import type { Lang } from "@/lib/translations";
import type { Category, DifficultyFilter, Question } from "@/types";

export function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function filterByCategory(questions: Question[], category: Category | "all"): Question[] {
  if (category === "all") return questions;
  return questions.filter((q) => q.category === category);
}

export function filterByDifficulty(
  questions: Question[],
  difficulty: DifficultyFilter,
): Question[] {
  if (difficulty === "all") return questions;
  return questions.filter((q) => q.difficulty === difficulty);
}

export function getQuizQuestions(
  questions: Question[],
  category: Category | "all",
  limit = 10,
  difficulty: DifficultyFilter = "all",
): Question[] {
  const byCategory = filterByCategory(questions, category);
  const byDifficulty = filterByDifficulty(byCategory, difficulty);
  const shuffled = shuffleArray(byDifficulty);
  return shuffled.slice(0, limit);
}

export function applyTranslations(questions: Question[], lang: Lang): Question[] {
  if (lang === "en") return questions;
  return questions.map((q) => {
    const tr = questionsCz[q.id];
    if (!tr) return q;
    return { ...q, ...tr };
  });
}

export function normaliseAnswer(answer: string): string {
  return answer.trim().toLowerCase();
}

function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

function isFuzzyMatch(input: string, target: string, threshold = 0.8): boolean {
  if (input === target) return true;
  const maxLen = Math.max(input.length, target.length);
  if (maxLen === 0) return true;
  const similarity = 1 - levenshtein(input, target) / maxLen;
  return similarity >= threshold;
}

export type AnswerCheckResult = "correct" | "close" | "incorrect";

export function checkTypeAnswer(userInput: string, question: Question): AnswerCheckResult {
  const normalised = normaliseAnswer(userInput);
  const correct = normaliseAnswer(question.correctAnswer);

  const targets = [correct, ...(question.aliases ?? []).map(normaliseAnswer)];

  for (const target of targets) {
    if (normalised === target) return "correct";
  }
  for (const target of targets) {
    if (isFuzzyMatch(normalised, target)) return "close";
  }
  return "incorrect";
}
