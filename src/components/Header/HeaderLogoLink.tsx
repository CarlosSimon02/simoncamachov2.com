import WebsiteLogo from "@/app/assets/svgs/websiteLogo.svg";
import { cn } from "@/app/utils";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import GhostButton from "../GhostButton";

type HeaderLogoLinkProps = {
  className?: string;
};

const HeaderLogoLink = ({ className }: HeaderLogoLinkProps) => {
  const t = useTranslations("common");

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <GhostButton asChild>
        <Link href="/">
          <WebsiteLogo className="fill-accent size-8 md:size-10" />
          <span className="sr-only">{t("navigateToHome")}</span>
        </Link>
      </GhostButton>
    </div>
  );
};

export default HeaderLogoLink;
