"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";
import type { Category } from "@/types";

type CategoryCard = {
  id: Category | "all";
  label: string;
  description: string;
  emoji: string;
};

export default function HomePage() {
  const { t } = useLang();

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

        <div className="flex w-full flex-col gap-4">
          <h2 className="text-center font-semibold text-sm text-stone-600 uppercase tracking-widest dark:text-stone-400">
            {t.pickCategory}
          </h2>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/quiz?category=${cat.id}`}
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
