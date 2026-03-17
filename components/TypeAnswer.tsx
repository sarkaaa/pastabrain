"use client";

import { useEffect, useRef, useState } from "react";
import { type AnswerCheckResult, checkTypeAnswer } from "@/lib/shuffleQuestions";
import type { Question } from "@/types";

type TypeAnswerProps = {
  question: Question;
  onAnswer: (isCorrect: boolean, typed: string) => void;
};

export function TypeAnswer({ question, onAnswer }: TypeAnswerProps) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<AnswerCheckResult | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (result !== null || input.trim() === "") return;

    const checkResult = checkTypeAnswer(input, question);
    setResult(checkResult);
    onAnswer(checkResult !== "incorrect", input.trim());
  }

  const submitted = result !== null;
  const isCorrect = result === "correct" || result === "close";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="type-answer-input"
          className="font-medium text-sm text-stone-600 dark:text-stone-300"
        >
          Type your answer:
        </label>
        <input
          ref={inputRef}
          id="type-answer-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={submitted}
          placeholder="Your answer…"
          className={`w-full rounded-xl border-2 px-4 py-3 text-base outline-none transition-colors ${
            submitted
              ? isCorrect
                ? "border-green-500 bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                : "border-red-400 bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300"
              : "border-amber-200 bg-white text-stone-800 focus:border-amber-500 focus:bg-amber-50 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:placeholder-stone-500 dark:focus:border-amber-500 dark:focus:bg-stone-700"
          }`}
        />
      </div>

      {!submitted && (
        <button
          type="submit"
          disabled={input.trim() === ""}
          className="w-full rounded-xl bg-amber-500 px-6 py-3 font-semibold text-stone-900 transition-colors hover:bg-amber-400 disabled:cursor-not-allowed disabled:bg-amber-200 disabled:text-stone-500 dark:disabled:bg-stone-700 dark:disabled:text-stone-500"
        >
          Submit answer
        </button>
      )}

      {submitted && (
        <p
          className={`text-center font-semibold text-sm ${
            isCorrect ? "text-green-700 dark:text-green-400" : "text-red-600 dark:text-red-400"
          }`}
        >
          {result === "correct" && "✓ Correct!"}
          {result === "close" && `✓ Close enough! (correct: ${question.correctAnswer})`}
          {result === "incorrect" && `✗ Not quite — the answer is: ${question.correctAnswer}`}
        </p>
      )}
    </form>
  );
}
