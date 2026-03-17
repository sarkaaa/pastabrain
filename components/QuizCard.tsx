"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Question } from "@/types";
import { MultipleChoice } from "./MultipleChoice";
import { TypeAnswer } from "./TypeAnswer";

type QuizCardProps = {
  question: Question;
  questionNumber: number;
  onAnswer: (isCorrect: boolean, answer: string) => void;
  onNext: () => void;
  isLast: boolean;
  answered: boolean;
};

const categoryLabels: Record<string, string> = {
  shapes: "Shapes",
  sauces: "Sauces",
  origins: "Origins",
  cooking: "Cooking",
};

const difficultyColours: Record<string, string> = {
  easy: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  medium: "bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-300",
  hard: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
};

export function QuizCard({
  question,
  questionNumber,
  onAnswer,
  onNext,
  isLast,
  answered,
}: QuizCardProps) {
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (answered) {
      nextButtonRef.current?.focus();
    }
  }, [answered]);

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-amber-100 bg-white p-6 shadow-md sm:p-8 dark:border-stone-700 dark:bg-stone-900">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-amber-100 px-3 py-1 font-semibold text-amber-900 text-xs uppercase tracking-wide dark:bg-amber-900/30 dark:text-amber-300">
          {categoryLabels[question.category] ?? question.category}
        </span>
        <span
          className={`rounded-full px-3 py-1 font-semibold text-xs uppercase tracking-wide ${difficultyColours[question.difficulty]}`}
        >
          {question.difficulty}
        </span>
        <span className="ml-auto font-medium text-stone-500 text-xs dark:text-stone-400">
          #{questionNumber}
        </span>
      </div>

      {question.image && (
        <div className="flex flex-col items-center gap-1">
          <div
            className={`flex items-center justify-center overflow-hidden rounded-2xl border border-amber-100 bg-amber-50 dark:border-stone-700 dark:bg-stone-800 ${
              question.category === "origins"
                ? "h-40 w-28 p-1 sm:h-48 sm:w-32"
                : "h-32 w-32 p-3 sm:h-40 sm:w-40"
            }`}
          >
            <Image
              src={question.image}
              alt={question.category === "origins" ? "Blind map hint" : "Pasta shape illustration"}
              width={question.category === "origins" ? 128 : 140}
              height={question.category === "origins" ? 192 : 140}
              className="h-full w-full object-contain"
            />
          </div>
          {question.category === "origins" && (
            <p className="text-stone-500 text-xs italic dark:text-stone-400">📍 Location hint</p>
          )}
        </div>
      )}

      <h2 className="font-semibold text-lg text-stone-800 leading-snug sm:text-xl dark:text-stone-100">
        {question.question}
      </h2>

      {question.type === "multiple-choice" ? (
        <MultipleChoice question={question} onAnswer={onAnswer} />
      ) : (
        <TypeAnswer question={question} onAnswer={onAnswer} />
      )}

      {answered && (
        <button
          ref={nextButtonRef}
          type="button"
          onClick={onNext}
          className="mt-2 w-full rounded-xl bg-stone-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white"
        >
          {isLast ? "See results" : "Next question →"}
        </button>
      )}
    </div>
  );
}
