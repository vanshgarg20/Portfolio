import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "dark";

  const stored = window.localStorage.getItem("theme") as Theme | null;
  if (stored === "light" || stored === "dark") return stored;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.toggle("dark", isDark);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        inline-flex items-center justify-center
        h-8 w-8 sm:h-9 sm:w-9
        rounded-full
        border border-slate-300 dark:border-slate-600/60
        bg-white/70 dark:bg-slate-900/60
        text-slate-800 dark:text-slate-200
        shadow-sm backdrop-blur-sm
        hover:border-cyan-400
        hover:text-cyan-600 dark:hover:text-cyan-300
        transition-all duration-200
      "
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
      ) : (
        <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
      )}
    </button>
  );
}
