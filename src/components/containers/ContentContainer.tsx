import { cn } from "@/app/utils/cn";
import { JSX } from "react";
import SectionObserver from "../SectionObserver";
import BaseContainer from "./BaseContainer";

type ContentContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  sectionId: string;
};

const ContentContainer = ({
  children,
  className,
  sectionId,
  as = "section",
}: ContentContainerProps) => {
  return (
    <BaseContainer
      as={as}
      className={cn(
        "relative py-8 md:py-12 lg:py-16 xl:px-42 xl:py-20",
        className
      )}
    >
      <SectionObserver sectionId={sectionId} />
      {children}
    </BaseContainer>
  );
};

export default ContentContainer;
