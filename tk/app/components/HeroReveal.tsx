'use client';

/**
 * HeroReveal
 * ──────────
 * Scroll-controlled cinematic hero image reveal using GSAP ScrollTrigger.
 *
 * Designed for the top Hero section.
 * The hero pins (sticky) while scrolling.
 * As the user scrolls down, the image reveals LEFT → RIGHT through 20 vertical strip panels.
 * Once fully revealed, the section unpins so the user can continue smoothly.
 */

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Types ─────────────────────────────────────────────────────────── */

interface HeroRevealProps {
  /** Path to the hero image, e.g. "/site_img/ABOUT.jpg" */
  imageSrc: string;
  /** Solid background colour shown when the image is hidden */
  bgColor?: string;
  /** Hero text content rendered above the image */
  children: React.ReactNode;
}

/* ─── Component ─────────────────────────────────────────────────────── */

export default function HeroReveal({
  imageSrc,
  bgColor = '#fff8f8',
  children,
}: HeroRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const numStrips = 20; // 20 columns

  useGSAP(
    () => {
      // Create the timeline tied to ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%', // Scrolls for 200% of viewport height before unpinning
          pin: true,
          scrub: 1, // Smooth scrub
          anticipatePin: 1,
        },
      });

      // Fade out the scroll indicator quickly at the start of the scroll
      if (scrollIndicatorRef.current) {
        tl.to(scrollIndicatorRef.current, { opacity: 0, duration: 0.1 }, 0);
      }

      // Animate each strip's inner background opacity
      // stagger: 0.1 distributes the tweens across the timeline evenly.
      tl.to(
        '.hero-strip-bg',
        {
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: 'power1.inOut',
        },
        0 // start at timeline 0
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: bgColor,
      }}
    >
      <div
        ref={pinWrapRef}
        style={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* ── Image strip layer ──────────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
          }}
          aria-hidden="true"
        >
          {Array.from({ length: numStrips }).map((_, i) => {
            const stripWidthPct = 100 / numStrips;
            const leftPct = stripWidthPct * i;
            const overlapPx = 2; // Prevents 1px sub-pixel rendering gaps

            return (
              <div
                key={i}
                className="hero-strip"
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: `calc(${leftPct}% - ${i > 0 ? overlapPx : 0}px)`,
                  width: `calc(${stripWidthPct}% + ${(i > 0 ? overlapPx : 0) +
                    (i < numStrips - 1 ? overlapPx : 0)
                    }px)`,
                  overflow: 'hidden',
                }}
              >
                <div
                  className="hero-strip-bg"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: `calc(-${leftPct}vw + ${i > 0 ? overlapPx : 0}px)`,
                    width: '100vw',
                    height: '100%',
                    backgroundImage: `url(${imageSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0, // starts fully transparent
                    willChange: 'opacity',
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* ── Hero text content (children) ───────────────────────── */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children}
        </div>

        {/* ── Scroll indicator ───────────────────────── */}
        <div
          ref={scrollIndicatorRef}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            pointerEvents: 'none',
          }}
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#b10e6b]">
            Scroll
          </span>
          <div className="w-px h-12 bg-[#b10e6b]/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[#b10e6b] animate-[scroll-down_1.5s_ease-in-out_infinite]" />
          </div>
          <style>{`
            @keyframes scroll-down {
              0% { transform: translateY(-100%); }
              100% { transform: translateY(200%); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
