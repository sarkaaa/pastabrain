export type QuestionType = "multiple-choice" | "type-answer";

export type Category = "shapes" | "sauces" | "origins" | "cooking";

export type Difficulty = "easy" | "medium" | "hard";

export type Question = {
  id: string;
  question: string;
  type: QuestionType;
  options?: string[];
  correctAnswer: string;
  aliases?: string[];
  category: Category;
  difficulty: Difficulty;
  image?: string;
};

export type QuizSession = {
  questions: Question[];
  currentIndex: number;
  score: number;
  answers: Record<string, string>;
};

export type AnswerState = "unanswered" | "correct" | "incorrect";
