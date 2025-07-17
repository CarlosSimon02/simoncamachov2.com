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
      <div className="dark:hidden">
        <MoonIcon className="block size-6" />
        <span className="sr-only">{t("lightMode")}</span>
      </div>
      <div className="hidden dark:block">
        <SunIcon className="block size-6" />
        <span className="sr-only">{t("darkMode")}</span>
      </div>
    </GhostButton>
  );
};

export default ThemeToggle;
