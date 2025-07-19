import { cn } from "./cn";

const commonContainer = cn(
  "mx-auto w-full max-w-[90rem]",
  "px-[1rem] sm:px-[2rem] lg:px-[3rem]"
);

export const container = {
  base: commonContainer,
  section: cn(commonContainer, "py-8 md:py-12 lg:py-16 xl:px-42 xl:py-20"),
  nav: "left-36 xl:left-42",
};

export const layoutHeights = {
  header: cn("h-[3.5rem] md:h-[4.5rem] lg:h-[5rem]"),
  heroSection: cn(
    "h-auto min-h-[calc(100vh-3.5rem)] py-14 md:min-h-[calc(100vh-4.5rem)] md:py-20 lg:min-h-[calc(100vh-5rem)]"
  ),
};
