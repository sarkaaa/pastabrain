"use client";

import { useState } from "react";
import type { AnswerState, Question } from "@/types";

type MultipleChoiceProps = {
  question: Question;
  onAnswer: (isCorrect: boolean, selected: string) => void;
};

export function MultipleChoice({ question, onAnswer }: MultipleChoiceProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>("unanswered");

  const options = question.options ?? [];

  function handleSelect(option: string) {
    if (answerState !== "unanswered") return;

    const isCorrect = option === question.correctAnswer;
    setSelected(option);
    setAnswerState(isCorrect ? "correct" : "incorrect");
    onAnswer(isCorrect, option);
  }

  function getButtonStyle(option: string): string {
    const base =
      "w-full text-left px-5 py-4 rounded-xl border-2 font-medium transition-all duration-200 text-sm sm:text-base";

    if (answerState === "unanswered") {
      return `${base} border-amber-200 bg-white text-stone-800 cursor-pointer hover:border-amber-400 hover:bg-amber-50 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:hover:border-amber-600 dark:hover:bg-stone-700`;
    }

    if (option === question.correctAnswer) {
      return `${base} border-green-500 bg-green-50 text-green-800 cursor-default dark:bg-green-900/20 dark:text-green-300`;
    }

    if (option === selected && answerState === "incorrect") {
      return `${base} border-red-400 bg-red-50 text-red-800 cursor-default dark:bg-red-900/20 dark:text-red-300`;
    }

    return `${base} border-stone-200 bg-stone-50 text-stone-500 cursor-default dark:border-stone-700 dark:bg-stone-800/50 dark:text-stone-500`;
  }

  return (
    <div className="flex flex-col gap-3">
      {options.map((option, index) => {
        const labels = ["A", "B", "C", "D"];
        return (
          <button
            key={option}
            type="button"
            onClick={() => handleSelect(option)}
            disabled={answerState !== "unanswered"}
            className={getButtonStyle(option)}
          >
            <span className="inline-flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-900 text-xs dark:bg-amber-900/30 dark:text-amber-300">
                {labels[index] ?? index + 1}
              </span>
              {option}
            </span>
          </button>
        );
      })}

      {answerState !== "unanswered" && (
        <p
          className={`mt-1 text-center font-semibold text-sm ${
            answerState === "correct"
              ? "text-green-700 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {answerState === "correct"
            ? "✓ Correct!"
            : `✗ Incorrect — the answer is: ${question.correctAnswer}`}
        </p>
      )}
    </div>
  );
}
