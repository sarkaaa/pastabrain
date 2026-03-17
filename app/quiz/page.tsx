import { Suspense } from "react";
import { QuizPageContent } from "./QuizPageContent";

export default function QuizPage() {
  return (
    <Suspense
      fallback={
        <main className="flex items-center justify-center bg-amber-50">
          <p className="text-stone-500">Loading quiz…</p>
        </main>
      }
    >
      <QuizPageContent />
    </Suspense>
  );
}
