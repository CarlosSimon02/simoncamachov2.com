import EmailIcon from "@/app/assets/svgs/email.svg";
import FacebookIcon from "@/app/assets/svgs/facebook.svg";
import GitHubIcon from "@/app/assets/svgs/github.svg";
import LinkedInIcon from "@/app/assets/svgs/linkedin.svg";
import RedditIcon from "@/app/assets/svgs/reddit.svg";
import { cn } from "@/app/utils/cn";

type SocialsProps = {
  className?: string;
};

const socials = [
  {
    name: "GitHub",
    icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    name: "Facebook",
    icon: FacebookIcon,
  },
  {
    name: "Reddit",
    icon: RedditIcon,
  },
  {
    name: "Email",
    icon: EmailIcon,
  },
];

const Socials = ({ className }: SocialsProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      {socials.map((social) => (
        <div key={social.name}>
          <social.icon className="fill-foreground-2 stroke-foreground-2 size-10 opacity-40" />
        </div>
      ))}
    </div>
  );
};

export default Socials;
