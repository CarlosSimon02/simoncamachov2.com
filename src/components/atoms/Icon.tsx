import { iconPaths } from "@/data/iconPaths"; // Adjust the import path as needed
import React from "react";

type IconProps = {
  className?: string;
  color?: string;
  icon: keyof typeof iconPaths;
};

const Icon: React.FC<IconProps> = ({
  className = "",
  color = "currentcolor",
  icon,
}) => {
  const iconPath = iconPaths[icon];

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill={color}
      focusable="false"
      stroke={color}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      dangerouslySetInnerHTML={{ __html: iconPath }}
    />
  );
};

export default Icon;
