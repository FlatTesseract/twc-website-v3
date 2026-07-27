"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.15,
    });

    lenisRef.current = lenis;

    // Perf/leak fix: keep the rAF id so the loop is cancelled on unmount.
    // Previously the loop kept running (and stacked up a new loop on every
    // client-side navigation back to this page).
    let rafId = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
