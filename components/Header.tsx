"use client";

import { SiGithub as GithubIcon } from "@icons-pack/react-simple-icons";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useLang } from "./LangProvider";
import { useTheme } from "./ThemeProvider";

const GITHUB_URL = "https://github.com/sarkaaa/pastabrain";

export function Header() {
  const { theme, toggle } = useTheme();
  const { lang, toggleLang, t } = useLang();

  return (
    <header className="absolute top-0 right-0 left-0 px-4 pt-3 sm:pt-4">
      <div className="mx-auto flex max-w-xl items-center justify-end gap-1">
        <button
          type="button"
          onClick={toggleLang}
          aria-label={t.switchLanguage}
          className="rounded-lg px-2 py-1.5 font-semibold text-stone-500 text-xs transition-colors hover:bg-stone-100 hover:text-stone-800 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100"
        >
          {lang === "en" ? "CZ" : "EN"}
        </button>

        <Link
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.viewOnGitHub}
          className="rounded-lg p-2 text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-800 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100"
        >
          <GithubIcon className="h-5 w-5" aria-hidden="true" />
        </Link>
        <button
          type="button"
          onClick={toggle}
          aria-label={theme === "light" ? t.switchDark : t.switchLight}
          className="cursor-pointer rounded-lg p-2 text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-800 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100"
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Sun className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
}
