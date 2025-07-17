"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/DropdownMenu";
import { languages } from "@/i18n/config";
import { usePathname, useRouter } from "@/i18n/navigation";
import { CheckIcon, LanguageIcon } from "@heroicons/react/24/outline";
import { Locale, useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import GhostButton from "../GhostButton";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("common.languageDropdown");
  const [, startTransition] = useTransition();
  const locale = useLocale();

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
      <DropdownMenuContent align="end" className="">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <language.icon className="size-4" />
              <span>{language.name}</span>
            </div>
            {locale === language.code && (
              <CheckIcon className="size-5" aria-hidden="true" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
