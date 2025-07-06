import CSS from "@/app/assets/svgs/css.svg";
import Firebase from "@/app/assets/svgs/firebase.svg";
import HTML from "@/app/assets/svgs/html.svg";
import JavaScript from "@/app/assets/svgs/javascript.svg";
import MaterialUI from "@/app/assets/svgs/materialui.svg";
import MongoDB from "@/app/assets/svgs/mongodb.svg";
import NestJS from "@/app/assets/svgs/nestjs.svg";
import Next from "@/app/assets/svgs/nextjs.svg";
import React from "@/app/assets/svgs/react.svg";
import Sass from "@/app/assets/svgs/sass.svg";
import ShadCN from "@/app/assets/svgs/shadcn.svg";
import Tailwind from "@/app/assets/svgs/tailwind.svg";
import TypeScript from "@/app/assets/svgs/typescript.svg";
import { cn } from "@/app/utils/cn";
import ContentContainer from "@/components/containers/ContentContainer";

const technologies = [
  {
    name: "JavaScript",
    icon: JavaScript,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: TypeScript,
    color: "#3178C6",
  },
  {
    name: "HTML",
    icon: HTML,
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: CSS,
    color: "#1572B6",
  },
  {
    name: "Sass",
    icon: Sass,
    color: "#CC6699",
  },
  {
    name: "React",
    icon: React,
    color: "#00D8FF",
  },
  {
    name: "Next.js",
    icon: Next,
    color: "system",
  },
  {
    name: "NestJS",
    icon: NestJS,
    color: "#E0234E",
  },
  {
    name: "Tailwind",
    icon: Tailwind,
    color: "#06B6D4",
  },
  {
    name: "Firebase",
    icon: Firebase,
    color: "#FFCA28",
  },
  {
    name: "MongoDB",
    icon: MongoDB,
    color: "#47A248",
  },
  {
    name: "Material UI",
    icon: MaterialUI,
    color: "#007FFF",
  },
  {
    name: "Shadcn",
    icon: ShadCN,
    color: "system",
  },
];

type HeroSectionProps = {
  className?: string;
};

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <ContentContainer className={cn(className, "flex flex-col gap-7")}>
      <div className="relative flex items-baseline gap-2 md:gap-7 lg:gap-9">
        <span className="font-oswald text-foreground absolute bottom-3 text-5xl font-black opacity-[10%] md:text-6xl">
          01
        </span>
        <h2 className="font-montserrat text-accent text-2xl font-black md:text-3xl">
          About Me
        </h2>
      </div>
      <div className="flex flex-col gap-4 md:flex-row-reverse">
        <div className="flex max-w-[60ch] flex-col gap-2 md:flex-1 md:flex-shrink-1 md:flex-grow-4">
          <h3 className="font-oswald text-foreground text-xl">My Journey</h3>
          <p>
            Hi! I’m Simon. A self-taught programmer who realized code could
            build worlds—or at least, really fun retro games.
            <br />
            <br />
            My first encounter with coding was in 2018, when I stumbled on a
            YouTube video of someone building Tetris in C++. I was 16 and
            obsessed: Wait, you can just… make games? So I dove in, armed with
            C++ tutorials and dreams of recreating every pixelated classic I’d
            ever played (Snake, Frogger—you name it).
            <br />
            <br />
            Fast-forward to today: I’m a Software Engineer at a startup,
            wrangling Next.js, NestJS, and Stripe to build apps that actually
            earn money (a wild concept to 16-year-old-me). My proudest moment?
            Learning payment integrations and seeing strangers use—and pay
            for—something I helped create.
            <br />
            <br />
            But I’m itching for my next challenge. I love full-stack
            work—whether it’s crafting sleek UIs with shadcn or debugging
            backend mysteries. And while I didn’t take the traditional CS path,
            my time building systems and web apps proved something: code isn’t
            just about games; it’s about solving real problems.
            <br />
            <br />
            When I&apos;m not coding, I&apos;m probably at the gym, sleeping, or
            dead.
            <br />
            <br />I focus on clean fundamentals, building systems that are
            sustainable, easy to maintain, and built to last.
          </p>
        </div>
        <div className="h-72 w-full md:flex-1 md:flex-shrink-1 md:flex-grow-2"></div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-oswald text-foreground text-xl">My Skills</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="bg-bg-card flex items-center gap-4 rounded-xl p-2"
            >
              <div
                className={cn(
                  "flex items-center justify-center rounded-lg p-2 text-black dark:text-white",
                  technology.color === "system" && "bg-black/5 dark:bg-white/5"
                )}
                style={{
                  backgroundColor:
                    technology.color !== "system"
                      ? technology.color + "20"
                      : undefined,
                }}
              >
                <technology.icon className="size-6" />
              </div>
              <p className="text-foreground">{technology.name}</p>
            </div>
          ))}
        </div>
      </div>
    </ContentContainer>
  );
};

export default HeroSection;
