import heroImage from "@/app/assets/images/hero.png";
import { cn } from "@/app/utils/cn";
import Button from "@/components/base/Button";
import ContentContainer from "@/components/containers/ContentContainer";
import { MapPin } from "lucide-react";
import Image from "next/image";

type HeroSectionProps = {
  className?: string;
};

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <ContentContainer
      className={cn(
        className,
        "flex flex-col items-center justify-center gap-9"
      )}
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <MapPin className="size-4" />
          <span>Pampanga, Philippines</span>
        </div>
        <div>
          <h1 className="font-montserrat text-accent text-4xl font-black">
            Simon Camacho
          </h1>
          <h2 className="font-oswald text-foreground text-2xl font-bold">
            Software Engineer
          </h2>
        </div>
        <p>
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
      <div className="relative">
        <div className="relative w-72">
          <Image
            src={heroImage.src}
            alt="Hero Image"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div className="font-oswald text-foreground class-text-decor absolute bottom-16 left-1/2 -z-10 -translate-x-1/2 text-center text-9xl font-bold uppercase opacity-[4%]">
          Simon Camacho
        </div>
      </div>
    </ContentContainer>
  );
};

export default HeroSection;
