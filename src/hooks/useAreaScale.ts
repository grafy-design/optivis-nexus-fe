"use client";

// --- [TEMP_SCALE_START] Proportional scaling hook ---
// Temporary proportional scaling module.
// Calculates a uniform zoom factor: viewport width / design reference width.
// Zooms the ENTIRE layout (sidebar + header + content) uniformly.
//
// How to roll back:
//   1. Delete this file entirely.
//   2. Remove imports / usage in AppLayout.tsx (search for [TEMP_SCALE_START]).
//   3. Uncomment the @media breakpoints marked with [TEMP_SCALE_MODE_DISABLE].

import { useState, useEffect } from "react";

/** Figma design reference: total viewport width */
const DESIGN_VIEWPORT_WIDTH = 2560;

/** Minimum scale factor — prevents content from becoming unreadably small */
const MIN_SCALE = 0.55;

export function useAreaScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    let rafId: number;

    const compute = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const vw = window.innerWidth;
        const raw = vw / DESIGN_VIEWPORT_WIDTH;
        setScale(Math.max(MIN_SCALE, Math.min(1, raw)));
      });
    };

    compute();
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("resize", compute);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return { scale };
}

// --- [TEMP_SCALE_END] ---
