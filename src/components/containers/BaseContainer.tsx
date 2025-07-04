import { cn } from "@/app/utils/cn";

type BaseContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const BaseContainer = ({ children, className }: BaseContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-[1rem] sm:px-[2rem] lg:px-[3rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BaseContainer;
