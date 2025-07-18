import audiophile from "@/app/assets/images/projects/audiophile.png";
import kanban from "@/app/assets/images/projects/kanban.png";
import pomodoro from "@/app/assets/images/projects/pomodoro.png";
import { cn } from "@/app/utils/cn";
import SectionTitle from "@/components/atoms/SectionTitle";
import { InteractiveGridPattern } from "@/components/base/InteractiveGridPattern";
import ContentContainer from "@/components/containers/ContentContainer";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

type HeroSectionProps = {
  className?: string;
};

const projects = [
  {
    title: "Kanban Web App",
    slug: "kanban",
    technologies: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
    image: kanban.src,
    description:
      "Kanban is a project management tool that helps you manage your projects and tasks.",
  },
  {
    title: "Audiophile E-commerce Website",
    slug: "audiophile",
    technologies: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
    image: audiophile.src,
    description:
      "Audiophile is a project management tool that helps you manage your projects and tasks.",
  },
  {
    title: "FEM Pomodoro App",
    slug: "pomodoro",
    technologies: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
    image: pomodoro.src,
    description:
      "Pomodoro is a project management tool that helps you manage your projects and tasks.",
  },
];

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <ContentContainer
      sectionId="projects"
      className={cn(className, "flex flex-col gap-7")}
    >
      <SectionTitle title="Projects" number={3} />
      <div
        className={cn(
          "grid gap-x-10 gap-y-14 overflow-hidden sm:gap-x-12 sm:gap-y-20",
          "md:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(24rem,1fr))]"
        )}
      >
        {projects.map((project) => (
          <div key={project.slug} className="flex flex-col gap-4">
            <div className="bg-bg-card relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-lg">
              <InteractiveGridPattern
                className={cn(
                  "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                  "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                )}
              />
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={1000}
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-oswald text-foreground text-2xl md:text-3xl">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology.name}
                    className="border-foreground-2 text-foreground-2 rounded-full border px-2 py-1 text-sm"
                  >
                    {technology.name}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                {project.description}
              </p>
              <Link
                href={project.slug}
                className={cn(
                  "text-accent font-oswald flex w-fit cursor-pointer items-center justify-start gap-2 text-lg",
                  "before:bg-accent before:h-[0.0625rem] before:w-12 before:transition-all before:duration-700 hover:before:w-20 before:hover:duration-150"
                )}
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>
    </ContentContainer>
  );
};

export default HeroSection;
