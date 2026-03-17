import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-6 text-center text-sm text-stone-500 dark:text-stone-400">
      partly vibecoded, partly{" "}
      <Link
        href="https://pandacode.cz"
        target="_blank"
        rel="noopener noreferrer"
        className="text-amber-700 underline transition-colors hover:text-amber-800 hover:no-underline dark:text-amber-400 dark:hover:text-amber-300"
      >
        sarkaaa-coded
      </Link>
      . 100% made with 🫶🏻.
    </footer>
  );
}
