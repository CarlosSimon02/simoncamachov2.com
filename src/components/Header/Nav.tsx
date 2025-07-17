import { cn } from "@/app/utils/cn";
import { Link } from "@/i18n/navigation";
import GhostButton from "../GhostButton";

type NavProps = {
  className?: string;
};

const navItems = [
  {
    href: "/#home",
    label: "Home",
  },
  {
    href: "/#about",
    label: "About",
  },
  {
    href: "/#experience",
    label: "Experience",
  },
  {
    href: "/#projects",
    label: "Projects",
  },
  {
    href: "/#connect",
    label: "Connect",
  },
];

const Nav = ({ className }: NavProps) => {
  return (
    <nav className={cn(className)} aria-label="Main">
      <ul className="flex items-center gap-3 md:gap-4 md:text-lg lg:gap-6">
        {navItems.map(({ href, label }) => (
          <li key={label}>
            <GhostButton asChild color="secondary" className="font-oswald">
              <Link href={href}>
                <span>{label}</span>
              </Link>
            </GhostButton>
          </li>
        ))}
        {/* <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Experience</Link>
        </li>
        <li>
          <Link href="/">Projects</Link>
        </li>
        <li>
          <Link href="/">Connect</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
