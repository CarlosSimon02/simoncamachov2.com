import WebsiteLogo from "@/app/assets/svgs/websiteLogo.svg";
import { cn } from "@/app/utils";
import { Link } from "@/i18n/navigation";

type HeaderLogoLinkProps = {
  className?: string;
};

const HeaderLogoLink = ({ className }: HeaderLogoLinkProps) => {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div className="bg-foreground absolute top-0 -right-4 -z-10 h-[105%] w-[105%] opacity-[4%] dark:opacity-[4%]" />
      <Link href="/" className="group cursor-pointer">
        <WebsiteLogo className="fill-foreground group-hover:fill-accent cubic-bezier(0.4, 0, 0.2, 1) relative top-0 size-8 rotate-0 transition-all duration-300 group-hover:top-2 group-hover:rotate-6 md:size-10" />
      </Link>
    </div>
  );
};

export default HeaderLogoLink;
