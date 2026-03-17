import Link from "next/link";

type ScoreScreenProps = {
  score: number;
  total: number;
  onRetry: () => void;
};

function getStars(score: number, total: number): string {
  const ratio = score / total;
  if (ratio >= 0.9) return "★★★";
  if (ratio >= 0.6) return "★★☆";
  return "★☆☆";
}

function getMessage(score: number, total: number): string {
  const ratio = score / total;
  if (ratio === 1) return "Perfect! You're a true pasta maestro! 🍝";
  if (ratio >= 0.8) return "Excellent! You really know your pasta!";
  if (ratio >= 0.6) return "Good job! A solid pasta knowledge.";
  if (ratio >= 0.4) return "Not bad! Keep exploring the pasta world.";
  return "Better luck next time — more pasta awaits!";
}

export function ScoreScreen({ score, total, onRetry }: ScoreScreenProps) {
  const percentage = Math.round((score / total) * 100);
  const stars = getStars(score, total);
  const message = getMessage(score, total);

  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl border border-amber-100 bg-white p-8 text-center shadow-md sm:p-10 dark:border-stone-700 dark:bg-stone-900">
      <div className="text-5xl">{stars}</div>

      <div>
        <p className="font-bold text-5xl text-amber-700 dark:text-amber-400">
          {score}
          <span className="text-2xl text-stone-500 dark:text-stone-400">/{total}</span>
        </p>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">{percentage}% correct</p>
      </div>

      <p className="font-medium text-lg text-stone-700 dark:text-stone-200">{message}</p>

      <div className="mt-2 flex w-full flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onRetry}
          className="flex-1 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-stone-900 transition-colors hover:bg-amber-400"
        >
          Play again
        </button>
        <Link
          href="/"
          className="flex-1 rounded-xl bg-stone-100 px-6 py-3 text-center font-semibold text-stone-800 transition-colors hover:bg-stone-200 dark:bg-stone-700 dark:text-stone-100 dark:hover:bg-stone-600"
        >
          Change category
        </Link>
      </div>
    </div>
  );
}
