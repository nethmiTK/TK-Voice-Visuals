"use client";

import Link from "next/link";
import Image from "next/image";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import FeaturedVoice from "./FeaturedVoice";
import ScrollFillText from "../../components/ScrollFillText";

const inter = Inter({ subsets: ["latin"], display: "swap" });


const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const services = [
  {
    title: "Elite Voice Recordings",
    description:
      "Our global roster features voices built for premium brands, cinematic launches, and polished product reveals.",
    tags: ["Cinematic", "Luxury"],
    tone: "soft",
  },
  {
    title: "Ad Voice & Identity",
    description:
      "30-second hooks, sonic logos, and campaign narrations that stay recognizable across every channel.",
    tags: ["Brand Voice", "Hooks"],
    tone: "strong",
  },
  {
    title: "Luxury Narration",
    description:
      "Elevating documentaries, launch films, and executive storytelling through calm, high-status delivery.",
    tags: ["Narration", "Prestige"],
    tone: "soft",
  },
  {
    title: "Professional Intros",
    description:
      "Podcast openers, event stings, and content intros designed to frame every first impression precisely.",
    tags: ["Podcast", "Broadcast"],
    tone: "wide",
  },
];

const methods = [
  {
    step: "01",
    title: "Audit",
    text: "We inspect the current sonic footprint and locate the gaps where voice can carry more authority.",
  },
  {
    step: "02",
    title: "Scripting",
    text: "We translate brand values into rhythm, pace, and phrasing that feel natural to speak and hear.",
  },
  {
    step: "03",
    title: "Casting",
    text: "We pair the right vocal texture to the emotional range, audience, and market position.",
  },
  {
    step: "04",
    title: "Production",
    text: "We finish with studio-grade mastering so the delivery lands clean across every platform.",
  },
];

const pricing = [
  {
    name: "Essential",
    price: "$1,200",
    note: "Per Production Module",
    items: ["Single Voice Choice", "2 Rounds of Edits", "Standard Licensing", "Custom Sonic Identity"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "The Identity",
    price: "$4,500",
    note: "Complete Brand Sonic Suite",
    items: ["Premium Voice Roster", "Custom Sonic Logo (3-sec)", "Background Soundscapes", "Commercial Full Buyout"],
    cta: "Reserve Now",
    featured: true,
  },
  {
    name: "Elite Bespoke",
    price: "Custom",
    note: "Enterprise Level Scale",
    items: ["Global Language Suites", "Dedicated Creative Director", "Live Remote Direction", "Perpetual Usage"],
    cta: "Consultation",
    featured: false,
  },
];

function WaveBars({ className = "" }: { className?: string }) {
  const bars = [
    "h-5",
    "h-10",
    "h-7",
    "h-14",
    "h-8",
    "h-16",
    "h-10",
    "h-12",
    "h-7",
    "h-14",
    "h-6",
    "h-11",
    "h-8",
    "h-5",
    "h-9",
    "h-7",
    "h-4",
    "h-6",
  ];

  return (
    <div className={`flex items-end gap-1 overflow-hidden ${className}`}>
      {bars.map((bar, index) => (
        <span
          key={`${bar}-${index}`}
          className={`w-1.5 rounded-full ${index % 3 === 0 ? "bg-[#a90b66]/40" : index % 2 === 0 ? "bg-[#a90b66]" : "bg-white/25"} ${bar}`}
        />
      ))}
    </div>
  );
}

 const heroTracks = [
  { label: "Track 01", src: "/audio/1.mp3" },
  { label: "Track 02", src: "/audio/2.mp3" },
  { label: "Track 03", src: "/audio/3.mp3" },
  { label: "Track 04", src: "/audio/4.mp3" },
];

const WAVE_H = [6, 14, 8, 18, 10, 16, 5, 12, 18, 7, 14, 9, 16, 6, 11, 18, 8, 13, 6, 15];

function HeroAudioCard({ inter, cormorant }: { inter: { className: string }; cormorant: { className: string } }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const loadAndPlay = (idx: number) => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.src = heroTracks[idx].src;
    audioRef.current.load();
    audioRef.current.play().catch(() => { });
    setActiveIdx(idx);
    setPlaying(true);
  };

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (playing) { audioRef.current.pause(); setPlaying(false); }
    else { audioRef.current.play().catch(() => { }); setPlaying(true); }
  };

  const handlePrev = () => loadAndPlay((activeIdx - 1 + heroTracks.length) % heroTracks.length);
  const handleNext = () => loadAndPlay((activeIdx + 1) % heroTracks.length);

  /* 30-second auto-advance */
  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => {
      handleNext();
    }, 30000);
    return () => clearTimeout(t);
  }, [playing, activeIdx]);

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const currentTime = audioRef.current.currentTime;
    setProgress(Math.min(currentTime / 30, 1));
  };

  return (
    <div
      style={{
        position: "absolute",
        right: 0,
        bottom: 0,
        width: "55vw",
        height: "80px",
        zIndex: 25,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderTopLeftRadius: "24px",
      }}
    >
      {/* Background Image */}
      <Image
        src="/voxium/trackbg.jpg"
        alt="Track Background"
        fill
        style={{ objectFit: "cover", opacity: 0.85 }}
      />

      {/* Progress Bar (Top edge) */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "rgba(255,255,255,0.1)" }}>
        <div style={{ height: "100%", width: `${progress * 100}%`, background: "#FA0069", transition: "width 0.1s linear" }} />
      </div>

      {/* Controls */}
      <div style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", gap: "2.5rem" }}>
        {/* Prev */}
        <button onClick={handlePrev} aria-label="Previous"
          style={{ background: "transparent", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.7)", transition: "color 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.color = "#FA0069"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" /></svg>
        </button>

        {/* Play / Pause */}
        <button
          onClick={handlePlayPause}
          aria-label={playing ? "Pause" : "Play"}
          style={{
            width: 54, height: 54, borderRadius: "50%",
            background: "#FA0069",
            border: playing ? "2px solid rgba(255,255,255,0.85)" : "2px solid transparent",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
            boxShadow: playing
              ? "0 0 20px rgba(250,0,105,0.8), 0 0 10px rgba(255,255,255,0.2)"
              : "0 4px 12px rgba(250,0,105,0.4)",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
        >
          {playing ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><rect x="5" y="4" width="4" height="16" /><rect x="15" y="4" width="4" height="16" /></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
          )}
        </button>

        {/* Next */}
        <button onClick={handleNext} aria-label="Next"
          style={{ background: "transparent", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.7)", transition: "color 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.color = "#FA0069"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zm2.5-6 5.5 3.9V8.1z" /><path d="M16 6h2v12h-2z" /></svg>
        </button>
      </div>

      <audio ref={audioRef} preload="none" onTimeUpdate={handleTimeUpdate} onEnded={handleNext} />
    </div>
  );
}

/* ─── CINEMATIC HERO (no framer-motion) ───────────────────────────── */
function VoxiumHero() {
  return (
    <section
      aria-label="MIC Hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100svh",
        minHeight: "600px",
        overflow: "hidden",
        background: "#170b10",
      }}
    >
      {/* =====================================================
          HERO BACKGROUND
      ===================================================== */}

      <Image
        src="/voxium/herobg.png"
        alt="MIC — Voice Over"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center center",
        }}
      />

      {/* =====================================================
          VOICE OVER LABEL
      ===================================================== */}

      <div className="waveform-label">
        <span>Sri Lankan</span>
        <span>Research Voice visuals Artist</span>
      </div>

      {/* =====================================================
          ROSE AUDIO WAVEFORM
      ===================================================== */}

      <div className="hero-waveform" aria-hidden="true">
        {[
          8,
          12,
          10,
          16,
          13,
          22,
          14,
          30,
          18,
          12,
          26,
          35,
          17,
          42,
          24,
          14,
          31,
          20,
          48,
          28,
          18,
          36,
          22,
          52,
          30,
          19,
          43,
          27,
          38,
          20,
          31,
          16,
          26,
          12,
          19,
          10,
        ].map((height, index) => (
          <span
            key={index}
            className="wave-bar"
            style={{
              height: `${height}px`,
              animationDelay: `${index * 0.045}s`,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          ROSE MOVING SVG PULSE LINES
          
          NOTE:
          Static/base lines are HIDDEN.
          Only the moving bright rose lights are visible.
      ===================================================== */}

      <div className="hero-pulse-lines" aria-hidden="true">
        <svg
          viewBox="0 0 858 434"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* =================================================
              MOVING ROSE LIGHTS ONLY
          ================================================= */}

          <path
            d="M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
            className="pulse-beam beam-1"
          />

          <path
            d="M568 200H841C846.523 200 851 195.523 851 190V40"
            className="pulse-beam beam-2"
          />

          <path
            d="M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5"
            className="pulse-beam beam-3"
          />

          <path
            d="M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427"
            className="pulse-beam beam-4"
          />

          <path
            d="M380 168V17C380 11.4772 384.477 7 390 7H414"
            className="pulse-beam beam-5"
          />
        </svg>
      </div>

      {/* =====================================================
          SOCIAL ICONS
      ===================================================== */}

      <div className="hero-socials">

        {/* WhatsApp */}
        <Link
          href="https://wa.me/94777858521"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="social-icon"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M21 11.5a8.5 8.5 0 0 1-12.8 7.35L3 20l1.15-5.05A8.5 8.5 0 1 1 21 11.5Z" />

            <path d="M8.5 8.5c.3-.7.6-.7.9-.7h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.6.7c-.1.2-.1.3 0 .5.3.6 1.2 1.5 2.4 2 .2.1.4.1.5-.1l.7-.8c.1-.2.3-.2.5-.1l1.7.8c.2.1.3.3.2.5-.2.8-.9 1.4-1.7 1.5-1.2.1-2.7-.5-4.1-1.7-1.2-1-2.1-2.2-2.4-3.2-.2-.7-.1-1.5.3-2.1Z" />
          </svg>
        </Link>

        {/* Facebook */}
        <Link
          href="https://web.facebook.com/profile.php?id=61585810421141"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="social-icon"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1Z" />
          </svg>
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/nethmi-thalikoralage-5265032a0/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="social-icon"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect
              x="4"
              y="4"
              width="16"
              height="16"
              rx="2"
            />

            <path d="M8 10v6" />

            <path d="M8 7.5v.01" />

            <path d="M12 16v-3.2a2.3 2.3 0 0 1 4.6 0V16" />

            <path d="M12 10v6" />
          </svg>
        </Link>

      </div>

      {/* =====================================================
          STYLES
      ===================================================== */}

      <style jsx>{`

        /* =====================================================
           VOICE OVER LABEL
        ===================================================== */

        .waveform-label {
          position: absolute;
          left: 10%;
          top: calc(50% - 48px);

          z-index: 12;

          display: flex;
          align-items: center;

          gap: 6px;

          font-family: Arial, sans-serif;

          font-size: 10px;
          font-weight: 500;

          letter-spacing: 1.4px;

          text-transform: uppercase;

          white-space: nowrap;

          pointer-events: none;
          user-select: none;
        }

        .waveform-label span:first-child {
          color: rgba(255, 255, 255, 0.9);

          text-shadow:
            0 0 8px rgba(255, 255, 255, 0.12);
        }

        .waveform-label span:last-child {
          color: rgba(255, 220, 130, 0.95);

          font-size: 17px;
          font-weight: 400;

          line-height: 2.5px;

          letter-spacing: 1px;

          transform: scaleY(0.75);
          transform-origin: left center;

          text-shadow: none;
        }


        /* =====================================================
           ROSE AUDIO WAVEFORM
        ===================================================== */

        .hero-waveform {
          position: absolute;

          left: 10%;
          top: 50%;

          transform: translateY(-50%);

          z-index: 11;

          width: 420px;
          height: 55px;

          display: flex;
          align-items: flex-end;
          justify-content: flex-start;

          gap: 4px;

          pointer-events: none;
        }

        .wave-bar {
          width: 4px;

          min-height: 5px;

          display: block;

          border-radius: 999px;

          background: linear-gradient(
            to top,
            #c92f52,
            #f04d70
          );

          box-shadow:
            0 0 7px rgba(240, 77, 112, 0.45),
            0 0 14px rgba(240, 77, 112, 0.18);

          transform-origin: bottom;

          animation:
            audioWave 0.75s ease-in-out infinite alternate;
        }

        @keyframes audioWave {

          0% {
            transform: scaleY(0.55);
            opacity: 0.55;
          }

          100% {
            transform: scaleY(1);
            opacity: 1;
          }

        }


        /* =====================================================
           ROSE MOVING SVG PULSE LINES

           IMPORTANT:
           NO STATIC LINE.
           ONLY BRIGHT MOVING SEGMENT.
        ===================================================== */

        .hero-pulse-lines {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          z-index: 9;

          pointer-events: none;

          overflow: hidden;
        }

        .hero-pulse-lines svg {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          overflow: visible;
        }

        /* =====================================================
           MOVING ROSE LIGHT
        ===================================================== */

        .pulse-beam {
          fill: none;

          stroke: #f04d70;

          stroke-width: 2.5;

          stroke-linecap: round;
          stroke-linejoin: round;

          /*
            ONLY SMALL BRIGHT SEGMENT
            is visible and travels
          */

          stroke-dasharray: 75 900;

          stroke-dashoffset: 900;

          filter:
            drop-shadow(
              0 0 4px rgba(240, 77, 112, 0.95)
            )
            drop-shadow(
              0 0 10px rgba(240, 77, 112, 0.65)
            )
            drop-shadow(
              0 0 20px rgba(240, 77, 112, 0.35)
            );

          animation:
            rosePulseTravel 4s linear infinite;
        }

        .beam-1 {
          animation-delay: 0s;
        }

        .beam-2 {
          animation-delay: 0.8s;
        }

        .beam-3 {
          animation-delay: 1.6s;
        }

        .beam-4 {
          animation-delay: 2.4s;
        }

        .beam-5 {
          animation-delay: 3.2s;
        }

        @keyframes rosePulseTravel {

          0% {
            stroke-dashoffset: 900;
            opacity: 0;
          }

          8% {
            opacity: 1;
          }

          45% {
            opacity: 1;
          }

          75% {
            opacity: 0.8;
          }

          100% {
            stroke-dashoffset: -900;
            opacity: 0;
          }

        }


        /* =====================================================
           SOCIAL ICONS
        ===================================================== */

        .hero-socials {
          position: fixed;

          right: clamp(1.2rem, 2.5vw, 2rem);

          top: 50%;

          transform: translateY(-50%);

          z-index: 9999;

          display: flex;

          flex-direction: column;

          gap: 1.2rem;
        }

        .social-icon {
          width: 42px;
          height: 42px;

          display: flex;

          align-items: center;
          justify-content: center;

          color: rgba(245, 232, 224, 0.75);

          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .social-icon:hover {
          color: #ffffff;

          transform: scale(1.1);
        }


        /* =====================================================
           TABLET / MOBILE
        ===================================================== */

        @media (max-width: 768px) {

          section {
            height: 62svh !important;

            min-height: 420px !important;

            max-height: 650px;
          }

          section :global(img) {
            object-fit: cover !important;

            object-position: 66% center !important;
          }


          /* MOBILE LABEL */

          .waveform-label {
            left: 10%;

            top: calc(50% - 42px);

            font-size: 8px;

            letter-spacing: 1px;

            gap: 4px;
          }

          .waveform-label span:last-child {
            font-size: 6px;

            line-height: 2.5px;

            letter-spacing: 0.8px;
          }


          /* MOBILE WAVEFORM */

          .hero-waveform {
            left: 10%;

            top: 50%;

            transform: translateY(-50%);

            width: 250px;

            height: 45px;

            gap: 3px;
          }

          .wave-bar {
            width: 3px;
          }


          /* MOBILE PULSE LINES */

          .hero-pulse-lines {
            width: 125%;

            left: -12.5%;

            height: 100%;
          }

          .pulse-beam {
            stroke-width: 2;
          }


          /* MOBILE SOCIAL */

          .hero-socials {
            position: fixed;

            right: 0.65rem;
            left: auto;

            top: 50%;
            bottom: auto;

            transform: translateY(-50%);

            flex-direction: column;

            gap: 0.7rem;

            padding: 0;

            background: transparent;

            backdrop-filter: none;
            -webkit-backdrop-filter: none;
          }

          .social-icon {
            width: 38px;
            height: 38px;

            color: rgba(245, 232, 224, 0.85);
          }

          .social-icon svg {
            width: 21px;
            height: 21px;
          }

        }


        /* =====================================================
           SMALL PHONES
        ===================================================== */

        @media (max-width: 400px) {

          section {
            height: 58svh !important;

            min-height: 380px !important;
          }

          section :global(img) {
            object-position: 68% center !important;
          }


          /* SMALL LABEL */

          .waveform-label {
            left: 10%;

            top: calc(50% - 38px);

            font-size: 7px;

            letter-spacing: 0.8px;

            gap: 3px;
          }

          .waveform-label span:last-child {
            font-size: 5.5px;

            line-height: 2.5px;

            letter-spacing: 0.7px;
          }


          /* SMALL WAVEFORM */

          .hero-waveform {
            left: 10%;

            top: 50%;

            transform: translateY(-50%);

            width: 220px;

            height: 40px;

            gap: 2.5px;
          }

          .wave-bar {
            width: 2.5px;
          }


          /* SMALL PULSE LINES */

          .hero-pulse-lines {
            width: 145%;

            left: -22.5%;

            height: 100%;
          }

          .pulse-beam {
            stroke-width: 1.8;
          }


          /* SMALL SOCIAL */

          .hero-socials {
            right: 0.45rem;

            gap: 0.45rem;
          }

          .social-icon {
            width: 34px;
            height: 34px;
          }

          .social-icon svg {
            width: 19px;
            height: 19px;
          }

        }

      `}
      </style>
    </section>
  );
}
export default function VoxiumPage() {
  return (
    <main className={`${inter.className} bg-[#fff8f8] text-[#25181d]`}>
      <VoxiumHero />

      {/* ── AUDIO SHOWCASE SECTION ── */}
<section
  id="pj8izd"
  style={{
    position: "relative",
    width: "100%",
    minHeight: "60vh",
    overflow: "visible",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: "6rem",
  }}
>
  {/* MAIN BACKGROUND — 2se.jpg */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      zIndex: 0,
    }}
  >
    <Image
      src="/voxium/2se.jpg"
      alt=""
      fill
      style={{
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
  </div>

  {/* LEFT SIDE EXTRA IMAGE */}
  <div
    style={{
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: "40%",
      zIndex: 5,
      overflow: "hidden",
      pointerEvents: "none",

      maskImage:
        "linear-gradient(to right, black 0%, black 45%, transparent 100%)",
      WebkitMaskImage:
        "linear-gradient(to right, black 0%, black 45%, transparent 100%)",
    }}
  >
    <Image
      src="/voxium/left.jpg"
      alt=""
      fill
      style={{
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
  </div>

  {/* VISUAL THINK TO */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      transform: "translateY(-50%)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingInline: "3rem",
      pointerEvents: "none",
      zIndex: 30,
    }}
  >
    <span
      className={cormorant.className}
      style={{
        fontSize: "clamp(4rem, 11vw, 14rem)",
        fontWeight: 700,
        fontStyle: "italic",
        color: "rgba(255, 220, 235, 0.35)",
        letterSpacing: "0.05em",
        lineHeight: 1,
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}
    >
      VISUAL THINK TO
    </span>

    <span
      className={cormorant.className}
      style={{
        fontSize: "clamp(4rem, 11vw, 14rem)",
        fontWeight: 700,
        fontStyle: "italic",
        color: "rgba(255, 220, 235, 0.35)",
        letterSpacing: "0.05em",
        lineHeight: 1,
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}
    />
  </div>

  {/* FeaturedVoice */}
  <div
    style={{
      position: "relative",
      zIndex: 10,
      width: "100%",
    }}
  >
    <FeaturedVoice />
  </div>
</section>
 
 {/* ================= ABOUT SECTION ================= */}
<section className="relative min-h-screen w-full overflow-hidden bg-[#AD0E48] text-white">

  {/* LEFT SMALL VERTICAL LABEL */}
  <div className="absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 md:block">
    <div className="flex items-center gap-3 [writing-mode:vertical-rl] rotate-180">
      <span className="text-[10px] uppercase tracking-[0.35em] opacity-70">
        Beyond the ordinary
      </span>

      <span className="h-20 w-[1px] bg-white/50" />

      <span className="text-[11px] font-medium uppercase tracking-[0.3em]">
        2026
      </span>
    </div>
  </div>


  {/* HUGE ABOUT — BOTTOM LEFT */}
{/* VERTICAL ABOUT LETTERS */}
<div
  className="
    pointer-events-none
    absolute
    bottom-[-2vw]
    left-[8%]
    z-10
    flex
    flex-col
    select-none
    font-black
    uppercase
    text-transparent
    leading-[0.62]
    tracking-[-0.06em]
    [-webkit-text-stroke:1px_rgba(255,255,255,0.9)]
    text-[13vw]
    md:text-[11vw]
    lg:text-[9vw]
  "
>
  <span>A</span>
  <span>B</span>
  <span>O</span>
  <span>U</span>
  <span>T</span>
</div>

  {/* MAIN CONTENT */}
  <div className="relative z-20 mx-auto flex min-h-screen max-w-[1400px] items-center px-6 py-24 md:px-12 lg:px-20">

    <div className="ml-auto w-full max-w-[650px]">

      {/* TOP SMALL TEXT */}
      <div className="mb-8 flex items-center gap-4">
        <span className="h-px w-12 bg-white/70" />

        <span className="text-[10px] uppercase tracking-[0.35em] text-white/80">
          About
        </span>
      </div>


      {/* RIGHT SIDE CONTENT BOX */}
      <div className="border border-white/45 p-7 md:p-10 lg:p-12">

        {/* HEADING */}
        <h2 className="mb-6 text-4xl font-light uppercase tracking-[-0.03em] md:text-5xl lg:text-6xl">
          Hall
        </h2>

        {/* DESCRIPTION */}
        <p className="max-w-xl text-sm leading-7 text-white/80 md:text-base md:leading-8">
          A space created to bring together ideas, memories and
          stories through a carefully crafted visual experience.
          Every detail is designed with simplicity, emotion and
          intention.
        </p>


        {/* DIVIDER */}
        <div className="my-8 h-px w-full bg-white/20" />


        {/* SMALL INFORMATION */}
        <div className="grid grid-cols-2 gap-8">

          <div>
            <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-white/50">
              Focus
            </p>

            <p className="text-sm uppercase tracking-[0.12em]">
              Creative
            </p>
          </div>


          <div>
            <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-white/50">
              Experience
            </p>

            <p className="text-sm uppercase tracking-[0.12em]">
              Visual Stories
            </p>
          </div>

        </div>

      </div>


      {/* BOTTOM SMALL TEXT */}
      <div className="mt-6 flex items-center justify-between text-[9px] uppercase tracking-[0.3em] text-white/50">
        <span>Est. 2026</span>
        <span>Scroll to explore</span>
      </div>

    </div>

  </div>


  {/* RIGHT EDGE VERTICAL TEXT */}
  <div className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 md:block">
    <span className="[writing-mode:vertical-rl] text-[9px] uppercase tracking-[0.4em] text-white/50">
      Creative Space — About
    </span>
  </div>

</section>
{/* =============== END ABOUT SECTION =============== */}
  {/*  CINEMATIC VIDEO / IS THAT JOKE */}
<section
  style={{
    position: "relative",
    width: "100%",
    minHeight: "100svh",
    background: "#62001D",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  {/* MAIN VIDEO */}
  <video
    src="/voxium/video.mp4"
    autoPlay
    muted
    playsInline
    loop={false}
    preload="auto"
    style={{
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",

      width: "min(760px, 52vw)",
      height: "min(520px, 62vh)",

      objectFit: "cover",

      borderRadius: "4px",

      zIndex: 5,

      boxShadow:
        "0 30px 100px rgba(0,0,0,0.35)",
    }}
  />

  {/* LEFT TEXT */}
  <div
    className="cinematic-side-text cinematic-left-text"
    style={{
      position: "absolute",
      left: "7vw",
      top: "50%",
      transform: "translateY(-50%)",

      zIndex: 8,

      color: "rgba(255,255,255,0.92)",

      fontSize: "clamp(2rem, 4vw, 5rem)",

      fontFamily: cormorant.style.fontFamily,

      fontStyle: "italic",

      lineHeight: 0.9,

      letterSpacing: "-0.03em",
    }}
  >
    VOICE
    <br />
    <span style={{ opacity: 0.55 }}>and</span>
    <br />
    VISUAL
  </div>


  {/* RIGHT TEXT */}
  <div
    className="cinematic-side-text cinematic-right-text"
    style={{
      position: "absolute",
      right: "7vw",
      top: "50%",
      transform: "translateY(-50%)",

      zIndex: 8,

      color: "rgba(255,255,255,0.92)",

      fontSize: "clamp(2rem, 4vw, 5rem)",

      fontFamily: cormorant.style.fontFamily,

      fontStyle: "italic",

      lineHeight: 0.9,

      letterSpacing: "-0.03em",

      textAlign: "right",
    }}
  >
    SOUND
    <br />
    <span style={{ opacity: 0.55 }}>becomes</span>
    <br />
    STORY
  </div>


  {/* IS THAT JOKE */}
  <div
    className="is-that-joke"
    style={{
      position: "absolute",

      left: "50%",
      top: "50%",

      transform: "translate(-50%, -50%)",

      zIndex: 15,

      opacity: 0,

      pointerEvents: "none",

      whiteSpace: "nowrap",

      fontFamily: cormorant.style.fontFamily,

      fontSize: "clamp(3rem, 8vw, 10rem)",

      fontStyle: "italic",

      fontWeight: 400,

      letterSpacing: "-0.04em",

      color: "#fff",
    }}
  >
    IS THAT JOKE
  </div>


  {/* SMALL CIRCLE VIDEO — V2 */}
  <div
    className="v2-circle-video"
    style={{
      position: "absolute",

      left: "50%",
      top: "50%",

      transform: "translate(-50%, -50%) scale(0.1)",

      width: "190px",
      height: "190px",

      borderRadius: "50%",

      overflow: "hidden",

      zIndex: 20,

      opacity: 0,

      pointerEvents: "none",

      border: "1px solid rgba(255,255,255,0.25)",

      boxShadow:
        "0 20px 80px rgba(0,0,0,0.4)",
    }}
  >
    <video
      src="/voxium/V2.mp4"
      autoPlay
      muted
      loop
      playsInline
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>


  {/* CINEMATIC NUMBER */}
  <div
    style={{
      position: "absolute",

      left: "5vw",
      bottom: "4rem",

      zIndex: 10,

      color: "rgba(255,255,255,0.3)",

      fontSize: "9px",

      letterSpacing: "0.35em",

      textTransform: "uppercase",
    }}
  >
    01 / VOICE & VISUALS
  </div>


  {/* =====================================================
      ANIMATION
  ===================================================== */}
  <style jsx>{`

    .cinematic-side-text {
      animation: sideTextFade 10s ease forwards;
    }

    @keyframes sideTextFade {
      0% {
        opacity: 1;
      }

      75% {
        opacity: 1;
      }

      100% {
        opacity: 0;
      }
    }


    /*
      Video stays visible for the opening 30 sec.
      Then fades away.
    */
    section:hover .cinematic-side-text {
      animation-play-state: running;
    }


    .is-that-joke {
      animation: jokeReveal 30s linear forwards;
    }

    @keyframes jokeReveal {

      0% {
        opacity: 0;
        transform: translate(-90vw, -50%) scale(0.8);
      }

      78% {
        opacity: 0;
        transform: translate(-90vw, -50%) scale(0.8);
      }

      84% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }

      96% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }

      100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(1.05);
      }
    }


    .v2-circle-video {
      animation: v2Reveal 30s linear forwards;
    }

    @keyframes v2Reveal {

      0% {
        opacity: 0;
        transform:
          translate(-50%, -50%)
          scale(0.1);
      }

      78% {
        opacity: 0;
        transform:
          translate(-50%, -50%)
          scale(0.1);
      }

      84% {
        opacity: 1;
        transform:
          translate(-50%, -50%)
          scale(1);
      }

      94% {
        opacity: 1;
        transform:
          translate(-50%, -50%)
          scale(1);
      }

      100% {
        opacity: 1;
        transform:
          translate(-50%, -50%)
          scale(1);
      }
    }


    @media (max-width: 768px) {

      .cinematic-left-text {
        left: 5vw !important;
      }

      .cinematic-right-text {
        right: 5vw !important;
      }

      .cinematic-side-text {
        font-size: 2rem !important;
      }

      .v2-circle-video {
        width: 130px !important;
        height: 130px !important;
      }

    }

  `}</style>
</section>



{/* =========================================================
    SECTION 02 — GAME ADDICTER
========================================================= */}
<section
  style={{
    position: "relative",

    width: "100%",

    minHeight: "75vh",

    background: "#62001D",

    overflow: "hidden",

    display: "flex",

    alignItems: "center",
  }}
>
  {/* BACKGROUND SHAPE */}
  <div
    style={{
      position: "absolute",

      left: "-8%",

      top: "15%",

      width: "55%",

      height: "70%",

      borderRadius: "50%",

      background:
        "rgba(255,255,255,0.035)",

      transform:
        "rotate(-12deg)",

      zIndex: 1,
    }}
  />


  {/* SMALL LABEL */}
  <div
    style={{
      position: "absolute",

      left: "7vw",

      top: "4rem",

      color: "rgba(255,255,255,0.5)",

      fontSize: "9px",

      letterSpacing: "0.35em",

      textTransform: "uppercase",

      zIndex: 5,
    }}
  >
    CREATIVE DIRECTION
  </div>


  {/* GAME ADDICTER */}
  <div
    style={{
      position: "relative",

      zIndex: 10,

      width: "100%",

      paddingLeft: "7vw",
    }}
  >
    <h2
      className={cormorant.className}
      style={{
        margin: 0,

        fontSize: "clamp(6rem, 15vw, 18rem)",

        fontWeight: 400,

        fontStyle: "italic",

        lineHeight: 0.7,

        letterSpacing: "-0.06em",

        color: "#fff",

        whiteSpace: "nowrap",
      }}
    >
      GAME
    </h2>

    <h2
      className={cormorant.className}
      style={{
        margin: 0,

        marginLeft: "17vw",

        marginTop: "1rem",

        fontSize: "clamp(5rem, 13vw, 16rem)",

        fontWeight: 400,

        fontStyle: "italic",

        lineHeight: 0.7,

        letterSpacing: "-0.06em",

        color: "rgba(255,255,255,0.92)",

        whiteSpace: "nowrap",
      }}
    >
      ADDICTER
    </h2>
  </div>


  {/* OVERLAPPING SMALL SHAPE */}
  <div
    style={{
      position: "absolute",

      right: "7vw",

      bottom: "5rem",

      width: "150px",

      height: "150px",

      borderRadius: "50% 50% 12px 50%",

      border:
        "1px solid rgba(255,255,255,0.22)",

      transform:
        "rotate(24deg)",

      zIndex: 4,
    }}
  />


  <div
    style={{
      position: "absolute",

      right: "9vw",

      bottom: "7rem",

      width: "95px",

      height: "95px",

      borderRadius: "50%",

      background:
        "rgba(255,255,255,0.08)",

      zIndex: 5,
    }}
  />

</section>



{/* =========================================================
    SECTION 03 — 5 YOUTUBE WORKS
========================================================= */}
<section
  style={{
    position: "relative",

    width: "100%",

    minHeight: "100vh",

    background: "#f7e8ec",

    padding:
      "10rem 5vw 12rem",

    overflow: "hidden",
  }}
>

  {/* HEADER */}
  <div
    style={{
      position: "relative",

      zIndex: 5,

      marginBottom: "5rem",
    }}
  >

    <div
      style={{
        fontSize: "9px",

        letterSpacing: "0.4em",

        textTransform: "uppercase",

        color: "#62001D",

        marginBottom: "1rem",
      }}
    >
      SELECTED WORK
    </div>

    <h2
      className={cormorant.className}
      style={{
        margin: 0,

        fontSize: "clamp(4rem, 8vw, 10rem)",

        fontWeight: 400,

        fontStyle: "italic",

        lineHeight: 0.8,

        letterSpacing: "-0.04em",

        color: "#62001D",
      }}
    >
      Stories in Motion
    </h2>

  </div>


  {/* 5 VIDEO GRID */}
  <div
    style={{
      position: "relative",

      display: "grid",

      gridTemplateColumns:
        "repeat(12, 1fr)",

      gap: "1.5rem",

      alignItems: "start",
    }}
  >

    {/* VIDEO 01 */}
    <div
      style={{
        gridColumn: "span 5",

        marginTop: "0",
      }}
    >
      <div className="youtube-card">
        <iframe
          src="https://www.youtube.com/embed/D0LLwh6Wr_Y?rel=0"
          title="Selected Work 01"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <div className="youtube-label">
        01 / VOICE
      </div>
    </div>


    {/* VIDEO 02 — LOWER */}
    <div
      style={{
        gridColumn: "span 4",

        marginTop: "8rem",
      }}
    >
      <div className="youtube-card">
        <iframe
          src="https://www.youtube.com/embed/aXM2PvfkoOE?rel=0"
          title="Selected Work 02"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <div className="youtube-label">
        02 / VISUAL
      </div>
    </div>


    {/* VIDEO 03 — EVEN LOWER */}
    <div
      style={{
        gridColumn: "span 3",

        marginTop: "14rem",
      }}
    >
      <div className="youtube-card">
        <iframe
          src="https://www.youtube.com/embed/qNiNd_taMT0?rel=0"
          title="Selected Work 03"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <div className="youtube-label">
        03 / STORY
      </div>
    </div>


    {/* VIDEO 04 — BACK UP */}
    <div
      style={{
        gridColumn: "span 4",

        marginTop: "3rem",
      }}
    >
      <div className="youtube-card">
        <iframe
          src="https://www.youtube.com/embed/qNiNd_taMT0?rel=0"
          title="Selected Work 04"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <div className="youtube-label">
        04 / FILM
      </div>
    </div>


    {/* VIDEO 05 — LARGE */}
    <div
      style={{
        gridColumn: "span 5",

        marginTop: "-2rem",
      }}
    >
      <div className="youtube-card youtube-card-large">
        <iframe
          src="https://www.youtube.com/embed/qNiNd_taMT0?rel=0"
          title="Selected Work 05"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <div className="youtube-label">
        05 / EXPERIENCE
      </div>
    </div>

  </div>


  <style jsx>{`

    .youtube-card {
      position: relative;

      width: 100%;

      aspect-ratio: 16 / 9;

      overflow: hidden;

      background: #62001D;

      border-radius: 4px;

      box-shadow:
        0 25px 70px
        rgba(98,0,29,0.16);

      transition:
        transform 0.5s ease,
        box-shadow 0.5s ease;
    }


    .youtube-card:hover {
      transform:
        translateY(-8px);

      box-shadow:
        0 35px 90px
        rgba(98,0,29,0.25);
    }


    .youtube-card iframe {
      position: absolute;

      inset: 0;

      width: 100%;
      height: 100%;

      border: 0;
    }


    .youtube-label {
      margin-top: 1rem;

      font-size: 9px;

      font-weight: 600;

      letter-spacing: 0.32em;

      text-transform: uppercase;

      color: #62001D;
    }


    @media (max-width: 768px) {

      section {
        min-height: auto !important;
      }

      .youtube-card {
        border-radius: 3px;
      }

    }

  `}</style>

</section>
    </main>
  );
}