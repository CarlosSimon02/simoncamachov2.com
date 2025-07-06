"use client";

import Moon from "@/app/assets/svgs/moon.svg";
import Sun from "@/app/assets/svgs/sun.svg";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative"
    >
      <Sun className="stroke-foreground-2 absolute size-5 scale-100 rotate-0 transition-all md:size-6 dark:scale-0 dark:-rotate-90" />
      <Moon className="stroke-foreground-2 size-5 scale-0 rotate-90 transition-all md:size-6 dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeToggle;
