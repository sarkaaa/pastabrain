"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLang } from "@/components/LangProvider";
import type { Category, DifficultyFilter } from "@/types";

type CategoryCard = {
  id: Category | "all";
  label: string;
  description: string;
  emoji: string;
};

type DifficultyOption = {
  id: DifficultyFilter;
  label: string;
  activeClass: string;
};

export default function HomePage() {
  const { t } = useLang();
  const [difficulty, setDifficulty] = useState<DifficultyFilter>(() => {
    if (typeof window === "undefined") return "all";
    const saved = localStorage.getItem("difficulty");
    return saved && (["all", "easy", "medium", "hard"] as string[]).includes(saved)
      ? (saved as DifficultyFilter)
      : "all";
  });

  useEffect(() => {
    localStorage.setItem("difficulty", difficulty);
  }, [difficulty]);

  const difficultyOptions: DifficultyOption[] = [
    {
      id: "all",
      label: t.diffAll,
      activeClass: "bg-amber-500 text-stone-900 border-amber-500",
    },
    {
      id: "easy",
      label: t.easy,
      activeClass: "bg-green-500 text-white border-green-500",
    },
    {
      id: "medium",
      label: t.medium,
      activeClass: "bg-amber-400 text-stone-900 border-amber-400",
    },
    {
      id: "hard",
      label: t.hard,
      activeClass: "bg-red-500 text-white border-red-500",
    },
  ];

  const categories: CategoryCard[] = [
    { id: "all", label: t.catAll, description: t.catAllDesc, emoji: "🍝" },
    { id: "shapes", label: t.catShapes, description: t.catShapesDesc, emoji: "🌀" },
    { id: "sauces", label: t.catSauces, description: t.catSaucesDesc, emoji: "🫙" },
    { id: "origins", label: t.catOrigins, description: t.catOriginsDesc, emoji: "🗺️" },
    { id: "cooking", label: t.catCooking, description: t.catCookingDesc, emoji: "👨‍🍳" },
  ];

  return (
    <main className="flex flex-col items-center px-4 py-8 sm:py-10">
      <div className="flex w-full max-w-xl flex-col items-center gap-8">
        <div className="flex flex-col gap-3 text-center">
          <div className="text-6xl">🍝</div>
          <h1 className="font-extrabold text-4xl text-stone-800 tracking-tight sm:text-5xl dark:text-stone-100">
            Pasta<span className="text-amber-700 dark:text-amber-400">Brain</span>
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-300">{t.tagline}</p>
        </div>

        <div className="flex w-full flex-col gap-3">
          <h2 className="text-center font-semibold text-sm text-stone-600 uppercase tracking-widest dark:text-stone-400">
            {t.pickDifficulty}
          </h2>
          <div className="flex gap-2">
            {difficultyOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setDifficulty(opt.id)}
                className={`flex-1 rounded-xl border-2 px-3 py-2 font-semibold text-sm capitalize transition-all ${
                  difficulty === opt.id
                    ? opt.activeClass
                    : "border-stone-200 bg-white text-stone-600 hover:border-stone-300 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-400 dark:hover:border-stone-600"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col gap-4">
          <h2 className="text-center font-semibold text-sm text-stone-600 uppercase tracking-widest dark:text-stone-400">
            {t.pickCategory}
          </h2>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/quiz?category=${cat.id}&difficulty=${difficulty}`}
              className="group flex items-center gap-4 rounded-2xl border-2 border-amber-100 bg-white px-5 py-4 transition-all hover:border-amber-300 hover:bg-amber-50 dark:border-stone-700 dark:bg-stone-900 dark:hover:border-amber-700 dark:hover:bg-stone-800"
            >
              <span className="text-3xl">{cat.emoji}</span>
              <div className="flex flex-col">
                <span className="font-semibold text-stone-800 transition-colors group-hover:text-amber-800 dark:text-stone-100 dark:group-hover:text-amber-400">
                  {cat.label}
                </span>
                <span className="text-sm text-stone-600 dark:text-stone-400">
                  {cat.description}
                </span>
              </div>
              <span className="ml-auto text-stone-400 text-xl transition-colors group-hover:text-amber-700 dark:text-stone-500 dark:group-hover:text-amber-400">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
