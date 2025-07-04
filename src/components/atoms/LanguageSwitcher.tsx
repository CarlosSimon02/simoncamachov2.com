"use client";

import { Select, SelectContent, SelectItem } from "@/components/base/Select";
import { usePathname, useRouter } from "@/i18n/navigation";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Globe } from "lucide-react";
import { Locale } from "next-intl";
import { useTransition } from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  const handleSelectChange = (value: string) => {
    const nextLocale = value as Locale;
    startTransition(() => {
      router.push(pathname, { locale: nextLocale });
    });
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectPrimitive.Trigger>
        <Globe className="size-[1.2rem]" />
      </SelectPrimitive.Trigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="fil">Filipino</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
