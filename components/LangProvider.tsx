"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { type Lang, type T, translations } from "@/lib/translations";

type LangContextValue = {
  lang: Lang;
  toggleLang: () => void;
  t: T;
};

const LangContext = createContext<LangContextValue>({
  lang: "en",
  toggleLang: () => {},
  t: translations.en,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "en" || stored === "cs") setLang(stored);
  }, []);

  function toggleLang() {
    const next: Lang = lang === "en" ? "cs" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  }

  return (
    <LangContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
