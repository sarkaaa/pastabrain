import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LangProvider } from "@/components/LangProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PastaBrain — Pasta Quiz",
  description: "Test your knowledge of pasta shapes, sauces, origins, and cooking techniques.",
  openGraph: {
    title: "PastaBrain — Pasta Quiz",
    description: "Test your knowledge of pasta shapes, sauces, origins, and cooking techniques.",
  },
};

/* Anti-FOUC: read theme from localStorage before first paint and apply the class */
const themeScript = `
(function() {
  try {
    var t = localStorage.getItem('theme');
    var dark = t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', dark);
  } catch(e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: required to prevent flash of unstyled theme */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <div className="absolute inset-0 z-[-1] bg-dot-grid dark:opacity-10" aria-hidden="true"></div>
      <body
        className={`${geist.className} flex min-h-screen flex-col bg-amber-50 dark:bg-stone-950`}
      >
        <ThemeProvider>
          <LangProvider>
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </LangProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
