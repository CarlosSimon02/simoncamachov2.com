import WebsiteLogo from "@/app/assets/svgs/websiteLogo.svg";
import { cn } from "@/app/utils";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import GhostButton from "../GhostButton";

type HeaderLogoLinkProps = {
  className?: string;
};

const HeaderLogoLink = async ({ className }: HeaderLogoLinkProps) => {
  const t = await getTranslations("common");

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div className="bg-foreground absolute top-0 -right-4 -z-10 h-[105%] w-[105%] opacity-[4%] dark:opacity-[4%]" />
      <GhostButton asChild>
        <Link href="/">
          <WebsiteLogo className="size-8 fill-current md:size-10" />
          <span className="sr-only">{t("navigateToHome")}</span>
        </Link>
      </GhostButton>
    </div>
  );
};

export default HeaderLogoLink;
