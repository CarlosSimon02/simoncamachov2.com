import LanguageSwitcher from "@/components/atoms/LanguageSwitcher";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import BaseContainer from "@/components/containers/BaseContainer";
import WebsiteLogo from "@/components/svgs/WebsiteLogo";

const Header = () => {
  return (
    <header>
      <BaseContainer>
        <div className="flex h-full items-center justify-between">
          <div>
            <WebsiteLogo className="fill-secondary-550 size-10" />
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </BaseContainer>
    </header>
  );
};

export default Header;
