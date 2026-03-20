"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";
import type { IncorrectAnswer } from "@/types";

type ScoreScreenProps = {
  score: number;
  total: number;
  incorrectAnswers: IncorrectAnswer[];
  onRetry: () => void;
};

function getStars(score: number, total: number): string {
  if (score === 0) return "☆☆☆";

  const ratio = score / total;
  if (ratio >= 0.9) return "★★★";
  if (ratio >= 0.6) return "★★☆";
  return "★☆☆";
}

export function ScoreScreen({ score, total, incorrectAnswers, onRetry }: ScoreScreenProps) {
  const { t } = useLang();
  const percentage = Math.round((score / total) * 100);
  const stars = getStars(score, total);

  function getMessage(): string {
    const ratio = score / total;
    if (ratio === 1) return t.scorePerfect;
    if (ratio >= 0.8) return t.scoreExcellent;
    if (ratio >= 0.6) return t.scoreGood;
    if (ratio >= 0.4) return t.scoreOk;
    return t.scoreBad;
  }

  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl border border-amber-100 bg-white p-8 text-center shadow-md sm:p-10 dark:border-stone-700 dark:bg-stone-900">
      <div className="text-5xl">{stars}</div>

      <div>
        <p className="font-bold text-5xl text-amber-700 dark:text-amber-400">
          {score}
          <span className="text-2xl text-stone-500 dark:text-stone-400">/{total}</span>
        </p>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
          {t.percentCorrect(percentage)}
        </p>
      </div>

      <p className="font-medium text-lg text-stone-700 dark:text-stone-200">{getMessage()}</p>

      <div className="mt-2 flex w-full flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onRetry}
          className="flex-1 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-stone-900 transition-colors hover:bg-amber-400"
        >
          {t.playAgain}
        </button>
        <Link
          href="/"
          className="flex-1 rounded-xl bg-stone-100 px-6 py-3 text-center font-semibold text-stone-800 transition-colors hover:bg-stone-200 dark:bg-stone-700 dark:text-stone-100 dark:hover:bg-stone-600"
        >
          {t.changeCategory}
        </Link>
      </div>

      {incorrectAnswers.length > 0 && (
        <div className="w-full border-amber-100 border-t pt-6 dark:border-stone-700">
          <h3 className="mb-4 text-left font-bold text-base text-stone-700 dark:text-stone-200">
            {t.reviewTitle}
          </h3>
          <ul className="flex flex-col gap-4">
            {incorrectAnswers.map((item) => (
              <li
                key={item.question}
                className="rounded-xl border border-stone-200 bg-stone-50 p-4 text-left dark:border-stone-700 dark:bg-stone-800"
              >
                <p className="mb-2 font-semibold text-sm text-stone-800 dark:text-stone-100">
                  {item.question}
                </p>
                <p className="text-red-600 text-sm dark:text-red-400">
                  <span className="font-medium">{t.yourAnswer}:</span> {item.userAnswer}
                </p>
                <p className="text-green-700 text-sm dark:text-green-400">
                  <span className="font-medium">{t.correctAnswer}:</span> {item.correctAnswer}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
