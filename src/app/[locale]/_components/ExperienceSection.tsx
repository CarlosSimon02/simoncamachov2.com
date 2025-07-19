import { cn } from "@/app/utils/cn";
import SectionTitle from "@/components/atoms/SectionTitle";
import ContentContainer from "@/components/containers/ContentContainer";
import Timeline from "@/components/organisms/Timeline";

type HeroSectionProps = {
  className?: string;
};

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <ContentContainer
      sectionId="experience "
      className={cn(className, "flex flex-col gap-7")}
    >
      <SectionTitle title="Experience" number={2} />
      <div className="flex flex-col gap-4 md:mb-12 md:flex-row-reverse">
        <Timeline className="mx-auto max-w-2xl" />
        <div className="w-full md:flex-1 md:flex-shrink-1 md:flex-grow-2"></div>
      </div>
    </ContentContainer>
  );
};

export default HeroSection;
