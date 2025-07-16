import Hamburger from "@/app/assets/svgs/hamburger.svg";
import { cn, styles } from "@/app/utils";
import LanguageSwitcher from "@/components/atoms/LanguageSwitcher";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import Nav from "../molecules/Nav";
import HeaderLogoLink from "./HeaderLogoLink";

const Header = () => {
  return (
    <header>
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
