// SectionObserverClient.tsx
"use client";

import { useSectionVisibilityContext } from "@/providers/SectionVisibilityProvider";
import { useEffect, useRef } from "react";

type SectionObserverProps = {
  sectionId: string;
  threshold?: number;
  rootMargin?: string;
};

const SectionObserver = ({
  sectionId,
  threshold = 0.5,
  rootMargin = "0px",
}: SectionObserverProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { setVisibleSection } = useSectionVisibilityContext();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleSection(sectionId);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [sectionId, setVisibleSection, threshold, rootMargin]);

  return (
    <div
      ref={ref}
      data-section-id={sectionId}
      className="absolute inset-0 -z-99"
    />
  );
};

export default SectionObserver;
