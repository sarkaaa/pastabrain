"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ProgressBar } from "@/components/ProgressBar";
import { QuizCard } from "@/components/QuizCard";
import { ScoreScreen } from "@/components/ScoreScreen";
import { questions as allQuestions } from "@/data/questions";
import { getQuizQuestions } from "@/lib/shuffleQuestions";
import type { Category, Question } from "@/types";

const QUESTIONS_PER_QUIZ = 10;

export function QuizPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const rawCategory = searchParams.get("category") ?? "all";
  const category: Category | "all" = (
    ["all", "shapes", "sauces", "origins", "cooking"].includes(rawCategory) ? rawCategory : "all"
  ) as Category | "all";

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [, setAnswers] = useState<Record<string, string>>({});
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const initQuiz = useCallback(() => {
    const selected = getQuizQuestions(allQuestions, category, QUESTIONS_PER_QUIZ);
    setQuestions(selected);
    setCurrentIndex(0);
    setScore(0);
    setAnswers({});
    setAnswered(false);
    setFinished(false);
  }, [category]);

  useEffect(() => {
    initQuiz();
  }, [initQuiz]);

  function handleAnswer(isCorrect: boolean, answer: string) {
    const question = questions[currentIndex];
    setAnswers((prev) => ({ ...prev, [question.id]: answer }));
    if (isCorrect) setScore((s) => s + 1);
    setAnswered(true);
  }

  function handleNext() {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= questions.length) {
      setFinished(true);
    } else {
      setCurrentIndex(nextIndex);
      setAnswered(false);
    }
  }

  if (questions.length === 0) {
    return (
      <main className="flex items-center justify-center">
        <p className="text-stone-500 dark:text-stone-400">Loading quiz…</p>
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
            className="font-medium text-sm text-stone-600 transition-colors hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200"
          >
            ← Back
          </button>
          <span className="font-extrabold text-lg text-stone-800 dark:text-stone-100">
            Pasta<span className="text-amber-700 dark:text-amber-400">Brain</span>
          </span>
          <div className="w-12" />
        </div>

        {!finished ? (
          <>
            <ProgressBar current={currentIndex + (answered ? 1 : 0)} total={questions.length} />
            <QuizCard
              key={questions[currentIndex].id}
              question={questions[currentIndex]}
              questionNumber={currentIndex + 1}
              onAnswer={handleAnswer}
              onNext={handleNext}
              isLast={currentIndex === questions.length - 1}
              answered={answered}
            />
          </>
        ) : (
          <ScoreScreen score={score} total={questions.length} onRetry={initQuiz} />
        )}
      </div>
    </main>
  );
}
