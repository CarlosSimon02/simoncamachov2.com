import { cn } from "@/app/utils/cn";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "accent";
};

const Button = ({ className, children, variant = "primary" }: ButtonProps) => {
  return (
    <button
      className={cn(
        className,
        "rounded-full px-6 py-2 font-semibold uppercase md:px-8 md:py-3",
        variant === "primary" && "bg-foreground text-background",
        variant === "accent" && "border-accent text-accent border-[0.0625rem]"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
