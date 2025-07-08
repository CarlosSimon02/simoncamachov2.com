import { cn } from "@/app/utils/cn";
import BaseContainer from "../containers/BaseContainer";
import Socials from "./Socials";
import VerticalLines from "./VerticalLines";

type ContentNumberSpyProps = {
  className?: string;
};

const ContentNumberSpy = ({ className }: ContentNumberSpyProps) => {
  return (
    <BaseContainer className="fixed top-0 left-1/2 -z-10 flex h-screen -translate-x-1/2 items-center justify-between gap-4 max-xl:hidden">
      <Socials />
      <VerticalLines />
      <div className={cn("flex flex-col gap-4 pr-2", className)}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="font-oswald text-foreground-2 text-xl font-bold opacity-40"
          >
            {String(index).padStart(2, "0")}
          </div>
        ))}
      </div>
    </BaseContainer>
  );
};

export default ContentNumberSpy;
