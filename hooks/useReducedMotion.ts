"use client";

import { useEffect, useState } from "react";

/**
 * Returns true if the user has requested reduced motion.
 * Safe for SSR: defaults to false until mounted on the client.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  return reduced;
}

/**
 * Returns true once we know the viewport is at or below the given width.
 * Used to simplify 3D scenes on phones/tablets. Defaults to false on the
 * server so SSR always renders the full-fidelity markup first.
 */
export function useIsSmallScreen(breakpointPx = 768): boolean {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpointPx}px)`);
    setSmall(mq.matches);
    const listener = (e: MediaQueryListEvent) => setSmall(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, [breakpointPx]);

  return small;
}
