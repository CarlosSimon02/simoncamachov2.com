import { cn } from "@/app/utils/cn";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import GhostButton from "../GhostButton";

type NavProps = {
  className?: string;
};

const navItems = [
  { href: "/#home", id: "home" },
  { href: "/#about", id: "about" },
  { href: "/#experience", id: "experience" },
  { href: "/#projects", id: "projects" },
  { href: "/#connect", id: "connect" },
];

const Nav = async ({ className }: NavProps) => {
  const t = await getTranslations("containers.navBar.links");

  return (
    <nav className={cn(className)} aria-label="Main">
      <ul className="flex items-center gap-3 md:gap-4 md:text-lg lg:gap-6">
        {navItems.map(({ href, id }) => (
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
