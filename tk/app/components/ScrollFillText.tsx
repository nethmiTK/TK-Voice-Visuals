"use client";

/**
 * ScrollFillText
 * ──────────────
 * SINGLE-LAYER scroll-linked typography fill.
 *
 * The text itself is ALWAYS color:transparent — it is invisible against
 * any background at 0% scroll progress.
 *
 * As the user scrolls through the element, #B10E6B (or any accentColor)
 * is revealed inside the actual glyph shapes via background-clip:text.
 *
 * Visual progression:
 *   0%   → text completely transparent / invisible
 *   50%  → 50% of glyph area filled with #B10E6B
 *   100% → entire glyph filled with #B10E6B
 *
 * NO dual layer. NO black text underneath. NO opacity tricks.
 * NO colored rectangle. Only the accent ink appears inside the letters.
 *
 * Respects prefers-reduced-motion (shows full accentColor immediately).
 */

import React, { useEffect, useRef } from "react";

type FillDirection = "left" | "right" | "top" | "bottom";
type TagName = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

export interface ScrollFillTextProps {
  /** Semantic HTML element to render (default: "p") */
  as?: TagName;
  children: React.ReactNode;
  /** Typography-only classes: size, weight, font-family, tracking, leading, etc.
   *  Do NOT pass text-color classes — color is handled internally. */
  className?: string;
  /** Layout / spacing classes applied to the outer wrapper div */
  wrapperClassName?: string;
  /** Direction the #B10E6B fill sweeps in (default: "left") */
  fillDirection?: FillDirection;
  /** Accent fill color — the ONLY visible color (default: #B10E6B) */
  accentColor?: string;
  /**
   * Viewport fraction at which fill begins (0–1, default: 0).
   * 0 = element enters the bottom of the viewport.
   */
  fillStart?: number;
  /**
   * Viewport fraction at which fill completes (0–1, default: 0.78).
   * 0.78 = element top is ~22% from the top of the viewport.
   */
  fillEnd?: number;
}

const GRADIENT_DIR: Record<FillDirection, string> = {
  left:   "to right",
  right:  "to left",
  top:    "to bottom",
  bottom: "to top",
};

export default function ScrollFillText({
  as: Tag = "p",
  children,
  className = "",
  wrapperClassName = "",
  fillDirection = "left",
  accentColor = "#B10E6B",
  fillStart = 0,
  fillEnd = 0.78,
}: ScrollFillTextProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rafRef    = useRef<number | undefined>(undefined);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const el = wrapper.firstElementChild as HTMLElement | null;
    if (!el) return;

    const gradDir = GRADIENT_DIR[fillDirection];

    // Reduced motion: immediately show full accent color
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.backgroundImage = `linear-gradient(${gradDir}, ${accentColor} 100%, transparent 100%)`;
      return;
    }

    const updateFill = () => {
      const rect = wrapper.getBoundingClientRect();
      const vh   = window.innerHeight;

      // progress = 0 when element top enters from the bottom of the viewport
      // progress = 1 when element has scrolled up to fillEnd threshold
      const range    = vh * (fillEnd - fillStart);
      const offset   = vh - rect.top - vh * fillStart;
      const progress = range <= 0 ? 0 : Math.max(0, Math.min(1, offset / range));

      const pct = `${(progress * 100).toFixed(2)}%`;
      // Only the filled portion shows accentColor; the rest is transparent
      el.style.backgroundImage = `linear-gradient(${gradDir}, ${accentColor} ${pct}, transparent ${pct})`;
    };

    const onScroll = () => {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateFill);
    };

    // Seed initial fill based on current scroll position
    updateFill();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    };
  }, [fillDirection, accentColor, fillStart, fillEnd]);

  const gradDir = GRADIENT_DIR[fillDirection];

  // ── Single text element ────────────────────────────────────────────────
  // color: transparent  →  text is invisible; only the background-clip
  // gradient paints #B10E6B inside the glyph shapes.
  // The background itself (black or any other) shows through the transparent
  // parts of the glyphs, giving the "ink flowing into letters" effect.
  return (
    <div ref={wrapperRef} className={wrapperClassName}>
      {React.createElement(
        Tag,
        {
          className,
          style: {
            // Text is ALWAYS transparent — never shows a base color
            color: "transparent",
            WebkitTextFillColor: "transparent",
            // background-clip:text paints only inside the glyph shapes
            backgroundImage: `linear-gradient(${gradDir}, ${accentColor} 0%, transparent 0%)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            backgroundSize: "100% 100%",
            // Prevent background from repeating or shifting
            backgroundRepeat: "no-repeat",
          } as React.CSSProperties,
        },
        children
      )}
    </div>
  );
}
