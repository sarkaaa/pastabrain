"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useLang } from "@/components/LangProvider";
import { ProgressBar } from "@/components/ProgressBar";
import { QuizCard } from "@/components/QuizCard";
import { ScoreScreen } from "@/components/ScoreScreen";
import type { Category, DifficultyFilter } from "@/types";
import { useQuiz } from "./useQuiz";

export function QuizPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t } = useLang();

  const rawCategory = searchParams.get("category") ?? "all";
  const category = (
    ["all", "shapes", "sauces", "origins", "cooking"].includes(rawCategory) ? rawCategory : "all"
  ) as Category | "all";

  const rawDifficulty = searchParams.get("difficulty") ?? "all";
  const difficulty = (
    ["all", "easy", "medium", "hard"].includes(rawDifficulty) ? rawDifficulty : "all"
  ) as DifficultyFilter;

  const {
    translatedQuestions,
    translatedIncorrectAnswers,
    currentIndex,
    score,
    answered,
    finished,
    initQuiz,
    handleAnswer,
    handleNext,
  } = useQuiz(category, difficulty);

  if (translatedQuestions.length === 0) {
    return (
      <main className="flex items-center justify-center">
        <p className="text-stone-500 dark:text-stone-400">{t.loadingQuiz}</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center px-4 py-10 sm:py-16">
      <div className="flex w-full max-w-xl flex-col gap-6">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="cursor-pointer font-medium text-sm text-stone-600 transition-colors hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200"
          >
            {t.back}
          </button>
          <span className="font-extrabold text-lg text-stone-800 dark:text-stone-100">
            Pasta<span className="text-amber-700 dark:text-amber-400">Brain</span>
          </span>
          <div className="w-12" />
        </div>

        {!finished ? (
          <>
            <ProgressBar
              current={currentIndex + (answered ? 1 : 0)}
              total={translatedQuestions.length}
            />
            <QuizCard
              key={translatedQuestions[currentIndex].id}
              question={translatedQuestions[currentIndex]}
              questionNumber={currentIndex + 1}
              onAnswer={handleAnswer}
              onNext={handleNext}
              isLast={currentIndex === translatedQuestions.length - 1}
              answered={answered}
            />
          </>
        ) : (
          <ScoreScreen
            score={score}
            total={translatedQuestions.length}
            incorrectAnswers={translatedIncorrectAnswers}
            onRetry={initQuiz}
          />
        )}
      </div>
    </main>
  );
}
