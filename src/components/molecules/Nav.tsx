import { cn } from "@/app/utils/cn";
import { Link } from "@/i18n/navigation";

type NavProps = {
  className?: string;
};

const Nav = ({ className }: NavProps) => {
  return (
    <nav
      className={cn(
        "font-oswald text-foreground-2 flex items-center gap-3 text-sm md:gap-4 md:text-base lg:gap-6 lg:text-lg",
        className
      )}
    >
      <ul className="font-oswald text-foreground-2 flex items-center gap-3 md:gap-4 md:text-lg lg:gap-6">
        <li>
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
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
