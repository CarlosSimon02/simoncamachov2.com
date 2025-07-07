import { cn } from "@/app/utils/cn";
import SectionTitle from "@/components/atoms/SectionTitle";
import ContentContainer from "@/components/containers/ContentContainer";
import Timeline from "@/components/organisms/Timeline";

type HeroSectionProps = {
  className?: string;
};

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <ContentContainer className={cn(className, "flex flex-col gap-7")}>
      <SectionTitle title="Experience" number={2} />
      <Timeline className="mx-auto" />
    </ContentContainer>
  );
};

export default HeroSection;
