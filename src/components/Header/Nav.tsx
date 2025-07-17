import { cn } from "@/app/utils/cn";
import { NAV_ITEMS } from "@/constants/navigation";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import GhostButton from "../GhostButton";

type NavProps = {
  className?: string;
};

const Nav = async ({ className }: NavProps) => {
  const t = await getTranslations("containers.navBar.links");

  return (
    <nav className={cn(className)} aria-label="Main">
      <ul className="flex items-center gap-3 md:gap-4 md:text-lg lg:gap-6">
        {NAV_ITEMS.map(({ href, id }) => (
          <li key={id}>
            <GhostButton asChild color="secondary" className="font-oswald">
              <Link href={href}>
                <span>{t(id)}</span>
              </Link>
            </GhostButton>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
