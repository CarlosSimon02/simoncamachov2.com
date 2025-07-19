"use client";

import Hamburger from "@/app/assets/svgs/hamburger.svg";
import { cn, styles } from "@/app/utils";
import { useEffect, useState } from "react";
import HeaderLogoLink from "./HeaderLogoLink";
import LanguageSwitcher from "./LanguageSwitcher";
import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 64); // 64px = 4rem
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        className,
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled && "bg-background/90 shadow-sm backdrop-blur-md"
      )}
    >
      <div
        className={cn(
          styles.container.base,
          styles.layoutHeights.header,
          "relative flex items-center justify-between"
        )}
      >
        <HeaderLogoLink className="h-full" />
        <Nav className={cn("absolute hidden md:block", styles.container.nav)} />
        <div className="flex items-center gap-4 md:gap-6">
          <LanguageSwitcher />
          <ThemeToggle />
          <Hamburger className="fill-foreground size-6 md:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;
