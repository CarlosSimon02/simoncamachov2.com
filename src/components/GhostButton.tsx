import { cn } from "@/app/utils";
import { Slot } from "@radix-ui/react-slot";
import React from "react";

type GhostButtonProps = React.ComponentProps<"button"> & {
  asChild?: boolean;
  hoverDirection?: "up" | "bottom" | "left" | "right";
  hoverColor?: "accent";
  color?: "primary";
};

const hoverDirectionMap = {
  up: "[&>*]:bottom-0 [&>*]:group-hover:bottom-1",
  bottom: "[&>*]:top-0 [&>*]:group-hover:top-1",
  left: "[&>*]:right-0 [&>*]:group-hover:right-1",
  right: "[&>*]:left-0 [&>*]:group-hover:left-1",
} as const;

const hoverColorMap = {
  accent: "[&>*]:group-hover:text-accent",
};

const colorMap = {
  primary: "[&>*]:text-foreground",
};

const GhostButton = ({
  className,
  asChild = false,
  hoverDirection = "bottom",
  hoverColor = "accent",
  color = "primary",
  ...props
}: GhostButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(
        "group cursor-pointer",
        hoverDirectionMap[hoverDirection],
        hoverColorMap[hoverColor],
        colorMap[color],
        "[&>*:not(.sr-only)]:relative [&>*:not(.sr-only)]:transition-all [&>*:not(.sr-only)]:duration-300",
        className
      )}
      {...props}
    />
  );
};

export default GhostButton;
