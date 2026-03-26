"use client";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  snap?: boolean;
}

export function Section({ children, className, id, snap = true }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        snap && "snap-start snap-always",
        className
      )}
    >
      {children}
    </section>
  );
}
