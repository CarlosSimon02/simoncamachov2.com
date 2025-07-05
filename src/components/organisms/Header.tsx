import LanguageSwitcher from "@/components/atoms/LanguageSwitcher";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import BaseContainer from "@/components/containers/BaseContainer";
import WebsiteLogo from "@/components/svgs/WebsiteLogo";
import Nav from "../molecules/Nav";
import Hamburger from "../svgs/Hamburger";

const Header = () => {
  return (
    <BaseContainer as="header" className="pt-3 md:pt-4 lg:pt-6">
      <div className="flex h-full items-center justify-between">
        <div className="flex items-center gap-10 md:gap-16 lg:gap-28">
          <WebsiteLogo className="fill-foreground size-8 md:size-10" />
          <Nav className="hidden md:block" />
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <LanguageSwitcher />
          <ThemeToggle />
          <Hamburger className="fill-foreground-2 size-6 md:hidden md:size-8" />
        </div>
      </div>
    </BaseContainer>
  );
};

export default Header;
