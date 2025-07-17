"use client";

import { SunIcon } from "@heroicons/react/24/outline";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import GhostButton from "../GhostButton";

const ThemeToggle = () => {
  const t = useTranslations("common.themeToggle");
  const { setTheme, theme } = useTheme();

  return (
    <GhostButton onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <MoonIcon className="block size-6 dark:hidden" />
      <SunIcon className="hidden size-6 dark:block" />
      <span className="sr-only">
        {theme === "dark" ? t("lightMode") : t("darkMode")}
      </span>
    </GhostButton>
  );
};

export default ThemeToggle;
