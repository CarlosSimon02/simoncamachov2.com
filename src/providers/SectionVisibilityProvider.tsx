"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type SectionVisibilityContextType = {
  visibleSection: string | null;
  setVisibleSection: (section: string | null) => void;
};

const VisibilityContext = createContext<SectionVisibilityContextType | null>(
  null
);

export const useSectionVisibilityContext = () => {
  const context = useContext(VisibilityContext);

  if (!context) {
    throw new Error(
      "useVisibilityContext must be used within a VisibilityProvider"
    );
  }

  return context;
};

export const SectionVisibilityProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [visibleSection, setVisibleSection] = useState<string | null>(null);

  return (
    <VisibilityContext.Provider value={{ visibleSection, setVisibleSection }}>
      {children}
    </VisibilityContext.Provider>
  );
};
