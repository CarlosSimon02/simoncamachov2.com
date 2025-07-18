import heroImage from "@/app/assets/images/hero.png";
import MapPin from "@/app/assets/svgs/mapPin.svg";
import { cn } from "@/app/utils/cn";
import Button from "@/components/base/Button";
import ContentContainer from "@/components/containers/ContentContainer";
import Image from "next/image";

type HeroSectionProps = {
  className?: string;
};

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <ContentContainer
      sectionId="home"
      className={cn(
        className,
        "flex flex-col items-center justify-between gap-16 md:flex-row md:gap-12 lg:gap-16"
      )}
    >
      <div className={cn("flex flex-col gap-5 md:gap-7 lg:gap-9")}>
        <div
          className={cn(
            "flex flex-col gap-3",
            "after:bg-accent after:-bottom-4 after:h-1 after:w-12 after:rounded-full lg:after:mt-2"
          )}
        >
          <div className="flex items-center gap-1">
            <MapPin className="stroke-foreground-2 size-5" />
            <span>Pampanga, Philippines</span>
          </div>
          <h1 className="font-montserrat text-accent text-[2.375rem] leading-none font-black md:text-5xl lg:text-6xl">
            Simon Camacho
          </h1>
          <h2 className="font-oswald text-foreground text-xl font-bold md:text-2xl lg:text-3xl">
            Software Engineer
          </h2>
        </div>
        <p className="max-w-[70ch] leading-[1.7] md:max-w-[40ch] md:leading-[1.9] lg:max-w-[50ch]">
          I am a developer who enjoys learning and expanding knowledge in the
          field of web. I am also determined to create solutions that provide
          excellent online experiences. Explore my portfolio to see my growing
          skills and dedication to quality development.
        </p>
        <div className="flex gap-4">
          <Button className="w-full max-w-36">Contact</Button>
          <Button variant="accent" className="w-full max-w-36">
            Resume
          </Button>
        </div>
      </div>
      <div className="relative max-w-[31.25rem] md:flex-1">
        <div className="relative mx-auto w-64 max-w-96 md:w-full">
          <Image
            src={heroImage.src}
            alt="Hero Image"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div className="font-oswald text-foreground class-text-decor absolute bottom-16 -z-10 text-9xl font-bold uppercase opacity-[4%] max-md:left-1/2 max-md:-translate-x-1/2 max-md:text-center md:text-[10rem] dark:opacity-[2%]">
          Carlos <span className="text-[10rem] md:text-[12rem]">Simon</span>
        </div>
      </div>
    </ContentContainer>
  );
};

export default HeroSection;
