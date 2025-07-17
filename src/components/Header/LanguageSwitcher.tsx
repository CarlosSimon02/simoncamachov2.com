"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/DropdownMenu";
import { languages } from "@/i18n/config";
import { usePathname, useRouter } from "@/i18n/navigation";
import { LanguageIcon } from "@heroicons/react/24/outline";
import { Locale, useTranslations } from "next-intl";
import { useTransition } from "react";
import GhostButton from "../GhostButton";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("common.languageDropdown");
  const [, startTransition] = useTransition();

  const handleLanguageChange = (nextLocale: Locale) => {
    startTransition(() => {
      router.push(pathname, { locale: nextLocale });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <GhostButton aria-label={t("label")}>
          <LanguageIcon className="size-6" />
        </GhostButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
