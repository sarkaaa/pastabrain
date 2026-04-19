"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useLang } from "@/components/LangProvider";
import { questions as allQuestions } from "@/data/questions";
import { applyTranslations, getQuizQuestions } from "@/lib/shuffleQuestions";
import type { Category, DifficultyFilter, IncorrectAnswer, Question } from "@/types";

const QUESTIONS_PER_QUIZ = 10;

export function useQuiz(category: Category | "all", difficulty: DifficultyFilter) {
  const { lang } = useLang();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState<IncorrectAnswer[]>([]);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const translatedQuestions = useMemo(() => applyTranslations(questions, lang), [questions, lang]);

  const translatedIncorrectAnswers = useMemo(
    () =>
      incorrectAnswers.map((item) => {
        const original = questions.find((q) => q.id === item.questionId);
        if (!original) return item;
        const [translated] = applyTranslations([original], lang);
        const userAnswer =
          item.userAnswerOptionIndex !== undefined
            ? (translated.options?.[item.userAnswerOptionIndex] ?? item.userAnswer)
            : item.userAnswer;
        return {
          ...item,
          question: translated.question,
          userAnswer,
          correctAnswer: translated.correctAnswer,
        };
      }),
    [incorrectAnswers, questions, lang],
  );

  const initQuiz = useCallback(() => {
    const selected = getQuizQuestions(allQuestions, category, QUESTIONS_PER_QUIZ, difficulty);
    setQuestions(selected);
    setCurrentIndex(0);
    setScore(0);
    setIncorrectAnswers([]);
    setAnswered(false);
    setFinished(false);
  }, [category, difficulty]);

  useEffect(() => {
    initQuiz();
  }, [initQuiz]);

  function handleAnswer(isCorrect: boolean, answer: string) {
    const question = translatedQuestions[currentIndex];
    if (isCorrect) {
      setScore((s) => s + 1);
    } else {
      const userAnswerOptionIndex =
        question.type === "multiple-choice" ? question.options?.indexOf(answer) : undefined;
      setIncorrectAnswers((prev) => [
        ...prev,
        {
          questionId: question.id,
          question: question.question,
          userAnswer: answer,
          ...(userAnswerOptionIndex !== undefined && userAnswerOptionIndex !== -1
            ? { userAnswerOptionIndex }
            : {}),
          correctAnswer: question.correctAnswer,
        },
      ]);
    }
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

  return {
    translatedQuestions,
    translatedIncorrectAnswers,
    currentIndex,
    score,
    answered,
    finished,
    initQuiz,
    handleAnswer,
    handleNext,
  };
}
