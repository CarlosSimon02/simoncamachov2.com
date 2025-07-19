"use client";

import { cn } from "@/app/utils/cn";
import { NAV_ITEMS } from "@/constants/navigation";
import { Link } from "@/i18n/navigation";
import { useSectionVisibilityContext } from "@/providers/SectionVisibilityProvider";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import GhostButton from "../GhostButton";

type NavProps = {
  className?: string;
};

const Nav = ({ className }: NavProps) => {
  const t = useTranslations("containers.navBar.links");
  const { visibleSection } = useSectionVisibilityContext();

  useEffect(() => {
    if (visibleSection) {
      console.log(visibleSection);
    }
  }, [visibleSection]);

  return (
    <nav className={cn(className)} aria-label="Main">
      <ul className="flex items-center gap-3 md:gap-4 md:text-lg lg:gap-6">
        {NAV_ITEMS.map(({ href, id }, index) => (
          <li key={id} className="flex items-center">
            {index === NAV_ITEMS.length - 1 && (
              <div
                className={cn(
                  "bg-foreground-2 mr-0 h-[0.0625rem] w-0 transition-all duration-300",
                  visibleSection === id &&
                    "bg-foreground mr-3 w-[5rem] md:mr-4 lg:mr-6"
                )}
              />
            )}
            <GhostButton
              asChild
              color={visibleSection === id ? "primary" : "secondary"}
              className={cn("font-oswald")}
            >
              <Link href={href}>
                <span>{t(id)}</span>
              </Link>
            </GhostButton>
            {index !== NAV_ITEMS.length - 1 && (
              <div
                className={cn(
                  "bg-foreground-2 ml-0 h-[0.0625rem] w-0 transition-all duration-300",
                  visibleSection === id &&
                    "bg-foreground ml-3 w-[5rem] md:ml-4 lg:ml-6"
                )}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
