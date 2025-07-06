import React from "@/app/assets/svgs/react.svg";
import { cn } from "@/app/utils/cn";
import ContentContainer from "@/components/containers/ContentContainer";

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
      <div className="flex flex-col gap-2">
        <h3 className="font-oswald text-foreground text-xl">My Journey</h3>
        <p>
          Hi there! I’m Josh. I’m a passionate introvert who loves building
          things with code. My first experience with programming was when I was
          12, but I didn’t last long: I was a big fan of computer-animated TV
          shows like Reboot, and I decided I wanted to do “computer graphics”.
          <br />
          <br />
          My mom bought me a C++ Reference Manual. It was several hundred pages,
          and totally inscrutable to me. Years later, I decided to try learning
          Python. It was a radically different experience. I distinctly remember
          the moment it clicked; I was watching The Price is Right, and they
          were spinning the big wheel. A contestant landed on 0.70, and it made
          me wonder: statistically, what was their best move? It occurred to me:
          I had the skills to build a simulation! So I threw together a Python
          script that would run thousands of simulations to work out what the
          right answer was. 15 minutes later, I had the answer.
          <br />
          <br />
          My burgeoning skillset was a superpower: I could derive answers that
          were previously off-limits to me. It was magic. Since then, I’ve been
          honing my skills and learning Javascript. I recently graduated from
          Apex College’s 12-week intensive Web Development Bootcamp program. I’m
          seeking a full-time role where I can help a company achieve their
          goals
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-oswald text-foreground text-xl">My Skills</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-bg-card flex items-center gap-4 rounded-xl p-2">
            <div className="flex items-center justify-center rounded-lg bg-[#00D8FF]/10 p-2">
              <React className="size-6" />
            </div>
            <p className="text-foreground">React</p>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default HeroSection;
