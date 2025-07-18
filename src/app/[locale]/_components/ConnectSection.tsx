import { cn } from "@/app/utils/cn";
import SectionTitle from "@/components/atoms/SectionTitle";
import ContentContainer from "@/components/containers/ContentContainer";

type HeroSectionProps = {
  className?: string;
};

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <ContentContainer
      sectionId="connect"
      className={cn(className, "flex flex-col gap-7")}
    >
      <SectionTitle title="Connect" number={4} />
    </ContentContainer>
  );
};

export default HeroSection;
