export type Lang = "en" | "cs";

export type T = {
  // Home page
  tagline: string;
  pickCategory: string;
  pickDifficulty: string;
  diffAll: string;
  catAll: string;
  catAllDesc: string;
  catShapes: string;
  catShapesDesc: string;
  catSauces: string;
  catSaucesDesc: string;
  catOrigins: string;
  catOriginsDesc: string;
  catCooking: string;
  catCookingDesc: string;
  // Quiz chrome
  loadingQuiz: string;
  back: string;
  locationHint: string;
  nextQuestion: string;
  seeResults: string;
  // Type-answer form
  typeYourAnswer: string;
  yourAnswerPlaceholder: string;
  submitAnswer: string;
  // Feedback messages
  correct: string;
  closeEnough: (answer: string) => string;
  incorrect: (answer: string) => string;
  incorrectMulti: (answer: string) => string;
  // Progress bar
  questionOf: (current: number, total: number) => string;
  // Score screen
  percentCorrect: (pct: number) => string;
  scorePerfect: string;
  scoreExcellent: string;
  scoreGood: string;
  scoreOk: string;
  scoreBad: string;
  playAgain: string;
  changeCategory: string;
  // Incorrect answers review
  reviewTitle: string;
  yourAnswer: string;
  correctAnswer: string;
  // Difficulty labels
  easy: string;
  medium: string;
  hard: string;
  // Header aria-labels
  viewOnGitHub: string;
  switchDark: string;
  switchLight: string;
  switchLanguage: string;
  // Alt text
  altBlindMap: string;
  altPastaShape: string;
  // Footer
  footerText: string;
  footerLinkLabel: string;
};

export const translations: Record<Lang, T> = {
  en: {
    tagline: "Test your knowledge of the world's greatest food.",
    pickCategory: "Pick a category",
    pickDifficulty: "Pick a difficulty",
    diffAll: "All",
    catAll: "All categories",
    catAllDesc: "A mix of shapes, sauces, origins & cooking",
    catShapes: "Shapes",
    catShapesDesc: "Can you name every pasta shape?",
    catSauces: "Sauces",
    catSaucesDesc: "From Carbonara to Puttanesca",
    catOrigins: "Origins",
    catOriginsDesc: "Where does your favourite pasta come from?",
    catCooking: "Cooking",
    catCookingDesc: "Tips, techniques & Italian secrets",
    loadingQuiz: "Loading quiz…",
    back: "← Back",
    locationHint: "📍 Location hint",
    nextQuestion: "Next question →",
    seeResults: "See results",
    typeYourAnswer: "Type your answer:",
    yourAnswerPlaceholder: "Your answer…",
    submitAnswer: "Submit answer",
    correct: "✓ Correct!",
    closeEnough: (answer) => `✓ Close enough! (correct: ${answer})`,
    incorrect: (answer) => `✗ Not quite — the answer is: ${answer}`,
    incorrectMulti: (answer) => `✗ Incorrect — the answer is: ${answer}`,
    questionOf: (current, total) => `Question ${current} of ${total}`,
    percentCorrect: (pct) => `${pct}% correct`,
    scorePerfect: "Perfect! You're a true pasta maestro! 🍝",
    scoreExcellent: "Excellent! You really know your pasta!",
    scoreGood: "Good job! A solid pasta knowledge.",
    scoreOk: "Not bad! Keep exploring the pasta world.",
    scoreBad: "Better luck next time — more pasta awaits!",
    playAgain: "Play again",
    changeCategory: "Change category",
    reviewTitle: "Where you went wrong",
    yourAnswer: "Your answer",
    correctAnswer: "Correct answer",
    easy: "easy",
    medium: "medium",
    hard: "hard",
    viewOnGitHub: "View project on GitHub",
    switchDark: "Switch to dark mode",
    switchLight: "Switch to light mode",
    switchLanguage: "Přepnout do češtiny",
    altBlindMap: "Blind map hint",
    altPastaShape: "Pasta shape illustration",
    footerText: "partly vibecoded, partly",
    footerLinkLabel: "sarkaaa-coded",
  },
  cs: {
    tagline: "Otestuj svoje znalosti o nejlepším jídle světa.",
    pickCategory: "Vyber kategorii",
    pickDifficulty: "Vyber obtížnost",
    diffAll: "Vše",
    catAll: "Všechny kategorie",
    catAllDesc: "Mix tvarů, omáček, původu a vaření",
    catShapes: "Tvary",
    catShapesDesc: "Znáš všechny druhy těstovin?",
    catSauces: "Omáčky",
    catSaucesDesc: "Od Carbonary po Puttanesqu",
    catOrigins: "Původ",
    catOriginsDesc: "Odkud pochází tvá oblíbená těstovina?",
    catCooking: "Vaření",
    catCookingDesc: "Tipy, techniky a italská tajemství",
    loadingQuiz: "Načítám kvíz…",
    back: "← Zpět",
    locationHint: "📍 Nápověda polohy",
    nextQuestion: "Další otázka →",
    seeResults: "Zobrazit výsledky",
    typeYourAnswer: "Napiš svou odpověď:",
    yourAnswerPlaceholder: "Tvoje odpověď…",
    submitAnswer: "Odeslat odpověď",
    correct: "✓ Správně!",
    closeEnough: (answer) => `✓ Téměř správně! (správně: ${answer})`,
    incorrect: (answer) => `✗ Bohužel — správná odpověď je: ${answer}`,
    incorrectMulti: (answer) => `✗ Špatně — správná odpověď je: ${answer}`,
    questionOf: (current, total) => `Otázka ${current} z ${total}`,
    percentCorrect: (pct) => `${pct}% správně`,
    scorePerfect: "Perfektní! Jsi skutečný mistr těstovin! 🍝",
    scoreExcellent: "Výborně! Opravdu znáš těstoviny!",
    scoreGood: "Dobrá práce! Solidní znalost těstovin.",
    scoreOk: "Docela dobré! Prozkoumej ještě víc světa těstovin.",
    scoreBad: "Příště to bude lepší — těstoviny na tebe čekají!",
    playAgain: "Hrát znovu",
    changeCategory: "Změnit kategorii",
    reviewTitle: "Kde jsi chyboval(a)",
    yourAnswer: "Tvoje odpověď",
    correctAnswer: "Správná odpověď",
    easy: "lehké",
    medium: "střední",
    hard: "těžké",
    viewOnGitHub: "Zobrazit projekt na GitHubu",
    switchDark: "Přepnout na tmavý režim",
    switchLight: "Přepnout na světlý režim",
    switchLanguage: "Switch to English",
    altBlindMap: "Nápověda na slepé mapě",
    altPastaShape: "Ilustrace tvaru těstovin",
    footerText: "zčásti vibecoded, zčásti",
    footerLinkLabel: "sarkaaa-coded",
  },
};
