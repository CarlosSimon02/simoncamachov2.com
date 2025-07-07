import { cn } from "@/app/utils/cn";
import { JSX } from "react";
import BaseContainer from "./BaseContainer";

type ContentContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

const ContentContainer = ({
  children,
  className,
  as = "section",
}: ContentContainerProps) => {
  return (
    <BaseContainer
      as={as}
      className={cn("py-8 md:py-12 lg:py-16 xl:px-42 xl:py-20", className)}
    >
      {children}
    </BaseContainer>
  );
};

export default ContentContainer;
