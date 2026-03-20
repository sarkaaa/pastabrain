import { translationsEn } from "@/lib/t/translations";
import { translationsCs } from "@/lib/t/translations.cs";

export type Lang = "en" | "cs";

export type T = {
  // Home page
  tagline: string;
  pickCategory: string;
  pickDifficulty: string;
  diffAll: string;
  catAll: string;
  catAllDesc: string;
  catShapes: string;
  catShapesDesc: string;
  catSauces: string;
  catSaucesDesc: string;
  catOrigins: string;
  catOriginsDesc: string;
  catCooking: string;
  catCookingDesc: string;
  // Quiz chrome
  loadingQuiz: string;
  back: string;
  locationHint: string;
  nextQuestion: string;
  seeResults: string;
  // Type-answer form
  typeYourAnswer: string;
  yourAnswerPlaceholder: string;
  submitAnswer: string;
  // Feedback messages
  correct: string;
  closeEnough: (answer: string) => string;
  incorrect: (answer: string) => string;
  incorrectMulti: (answer: string) => string;
  // Progress bar
  questionOf: (current: number, total: number) => string;
  // Score screen
  percentCorrect: (pct: number) => string;
  scorePerfect: string;
  scoreExcellent: string;
  scoreGood: string;
  scoreOk: string;
  scoreBad: string;
  playAgain: string;
  changeCategory: string;
  // Incorrect answers review
  reviewTitle: string;
  yourAnswer: string;
  correctAnswer: string;
  // Difficulty labels
  easy: string;
  medium: string;
  hard: string;
  // Header aria-labels
  viewOnGitHub: string;
  switchDark: string;
  switchLight: string;
  switchLanguage: string;
  // Alt text
  altBlindMap: string;
  altPastaShape: string;
  // Footer
  footerText: string;
  footerLinkLabel: string;
};

export const translations: Record<Lang, T> = {
  en: translationsEn,
  cs: translationsCs,
};
