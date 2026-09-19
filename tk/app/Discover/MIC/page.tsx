"use client";

import Link from "next/link";
import Image from "next/image";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import { useEffect, useState } from "react";
import FeaturedVoice from "./FeaturedVoice";
import ScrollFillText from "../../components/ScrollFillText";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

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

/* ─── CINEMATIC HERO ─────────────────────────────────────────── */
function VoxiumHero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();

  // scroll-based parallax
  const centerY = useTransform(scrollY, [0, 600], ["0%", "10%"]);
  const sideLeftX = useTransform(scrollY, [0, 600], ["0%", "-5%"]);
  const sideRightX = useTransform(scrollY, [0, 600], ["0%", "5%"]);
  const micY = useTransform(scrollY, [0, 600], ["0%", "-8%"]);
  const tkY = useTransform(scrollY, [0, 600], ["0%", "4%"]);
  // heroOpacity removed — no white fade on scroll

  // smooth mouse parallax
  const rawX = useSpring(mouse.x, { stiffness: 55, damping: 28 });
  const rawY = useSpring(mouse.y, { stiffness: 55, damping: 28 });

  const mMicX = useTransform(rawX, [-0.5, 0.5], ["-10px", "10px"]);
  const mCenterX = useTransform(rawX, [-0.5, 0.5], ["-14px", "14px"]);
  const mCenterY = useTransform(rawY, [-0.5, 0.5], ["-8px", "8px"]);
  const mSideL = useTransform(rawX, [-0.5, 0.5], ["8px", "-8px"]);
  const mSideR = useTransform(rawX, [-0.5, 0.5], ["-8px", "8px"]);
  const mTkX = useTransform(rawX, [-0.5, 0.5], ["-5px", "5px"]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <motion.section
      aria-label="Voxium Hero"
      style={{
        minHeight: "100svh",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* BG gradient — Fallback color while loading */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, #4a0b2e 0%, #2a0b1a 52%, #1a0610 100%)",
          zIndex: 0,
        }}
      >
        <Image
          src="/voxium/herobg.avif"
          alt=""
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.7,
            mixBlendMode: "overlay",
          }}
        />
      </div>

      {/* Vignette overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 82% 78% at 50% 50%, transparent 38%, rgba(14,5,11,0.78) 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* ── GHOST TK — LEFT ── */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
        style={{
          position: "absolute",
          left: "-10vw",
          top: "50%",
          translateY: "-50%",
          zIndex: 3,
          pointerEvents: "none",
          userSelect: "none",
          x: mTkX,
          y: tkY,
        }}
      >
        <span
          className={cormorant.className}
          style={{
            fontSize: "clamp(12rem, 26vw, 34rem)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 0.82,
            letterSpacing: "-0.04em",
            color: "rgba(215,170,180,0.065)",
            display: "block",
            whiteSpace: "nowrap",
          }}
        >
          TK
        </span>
      </motion.div>

      {/* ── GHOST TK — RIGHT ── */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
        style={{
          position: "absolute",
          right: "-10vw",
          top: "50%",
          translateY: "-50%",
          zIndex: 3,
          pointerEvents: "none",
          userSelect: "none",
          x: mSideR,
          y: tkY,
        }}
      >
        <span
          className={cormorant.className}
          style={{
            fontSize: "clamp(12rem, 26vw, 34rem)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 0.82,
            letterSpacing: "-0.04em",
            color: "rgba(215,170,180,0.065)",
            display: "block",
            whiteSpace: "nowrap",
          }}
        >
          TK
        </span>
      </motion.div>

      {/* ── SIDE IMAGE — LEFT REMOVED ── */}

      {/* ── SIDE IMAGE — RIGHT (mirrored) ── */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: 50, scale: 1.07 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "clamp(160px, 28vw, 420px)",
          height: "100%",
          zIndex: 4,
          x: mSideR,
          y: sideRightX,
        }}
      >
        {/* left-edge fade into center */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to left, rgba(37,19,31,0) 0%, rgba(37,19,31,0) 28%, rgba(37,19,31,0.88) 72%, rgba(37,19,31,1) 100%)",
            zIndex: 2,
          }}
        />
        {/* top/bottom fade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(37,19,31,0.6) 0%, transparent 20%, transparent 78%, rgba(37,19,31,0.8) 100%)",
            zIndex: 2,
          }}
        />
        <Image
          src="/voxium/heroleft.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 28vw"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            opacity: 0.30,
            filter: "brightness(0.5) blur(2.5px) saturate(0.55)",
            mixBlendMode: "multiply",
            transform: "scaleX(-1)",
          }}
        />
      </motion.div>

      {/* ── MIC — BACKGROUND MOOD LAYER (behind center image) ── */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        style={{
          position: "absolute",
          bottom: "-4vh",
          left: "-4vw",
          zIndex: 5,
          pointerEvents: "none",
          userSelect: "none",
          x: mMicX,
          y: micY,
        }}
      >
        <span
          className={cormorant.className}
          style={{
            fontSize: "clamp(18rem, 45vw, 68rem)",
            fontWeight: 600,
            fontStyle: "italic",
            lineHeight: 0.80,
            letterSpacing: "-0.04em",
            color: "#1a0d18", // Matches the dark background mood on sides
            opacity: 0.5,
            WebkitTextStroke: "1px rgba(189,0,94,0.15)",
            display: "block",
            whiteSpace: "nowrap",
          }}
        >
          MIC
        </span>
      </motion.div>

      {/* ── CENTER HERO IMAGE ── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1], delay: 0.0 }}
        style={{
          position: "absolute",
          left: "50%",
          top: "12vh",
          height: "85%",
          width: "clamp(240px, 44vw, 640px)",
          translateX: "-50%",
          zIndex: 8,
          x: mCenterX,
          y: centerY,
        }}
      >
        {/* top/bottom fade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(37,19,31,0.6) 0%, transparent 16%, transparent 70%, rgba(37,19,31,0.95) 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        {/* left/right bleed into sides */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(37,19,31,0.55) 0%, transparent 16%, transparent 84%, rgba(37,19,31,0.55) 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <Image
          src="/voxium/hero.png"
          alt="Voxium — The Sound of Authority"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 52vw"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            mixBlendMode: "multiply",
          }}
        />
      </motion.div>

      {/* ── MIC — FILL LAYER & TYPOGRAPHY DETAIL (over center image) ── */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
        style={{
          position: "absolute",
          bottom: "-4vh",
          left: "-4vw",
          zIndex: 10,
          pointerEvents: "none",
          userSelect: "none",
          x: mMicX,
          y: micY,
        }}
      >
        <div style={{ position: "relative" }}>
          {/* Mirrored repeated text */}
          <span
            className={cormorant.className}
            style={{
              position: "absolute",
              top: "-8%",
              left: "2%",
              fontSize: "clamp(18rem, 45vw, 68rem)",
              fontWeight: 600,
              fontStyle: "italic",
              lineHeight: 0.80,
              letterSpacing: "-0.04em",
              color: "#1a0d18",
              opacity: 0.2,
              transform: "scaleY(-1)",
              display: "block",
              whiteSpace: "nowrap",
              zIndex: -1,
            }}
          >
            MIC
          </span>

          {/* Main MIC text */}
          <span
            className={cormorant.className}
            style={{
              fontSize: "clamp(18rem, 45vw, 68rem)",
              fontWeight: 600,
              fontStyle: "italic",
              lineHeight: 0.80,
              letterSpacing: "-0.04em",
              color: "#990E53",
              opacity: 0.95,
              display: "block",
              whiteSpace: "nowrap",
            }}
          >
            MIC
          </span>

          {/* Thin secondary layout */}
          <span
            className={inter.className}
            style={{
              position: "absolute",
              bottom: "15%",
              left: "22%",
              fontSize: "clamp(0.65rem, 1.2vw, 1rem)",
              fontWeight: 300,
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "rgba(245, 232, 224, 0.7)",
              whiteSpace: "nowrap",
            }}
          >
          </span>
        </div>
      </motion.div>

      {/* ── TOP BAND ── */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          padding: "clamp(1.2rem,3vw,2rem) clamp(1.5rem,5vw,4rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          className={inter.className}
          style={{
            fontSize: "0.6rem",
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(245,232,224,0.38)",
          }}
        >
          Audio Division
        </span>
        <span
          className={cormorant.className}
          style={{
            fontSize: "clamp(1.1rem,2vw,1.5rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "rgba(245,232,224,0.65)",
            letterSpacing: "0.07em",
          }}
        >
          Voxium
        </span>
        <span
          className={inter.className}
          style={{
            fontSize: "0.6rem",
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(245,232,224,0.38)",
          }}
        >
          2024
        </span>
      </motion.div>

      {/* ── BOTTOM METADATA REMOVED ── */}

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.4 }}
        style={{
          position: "absolute",
          right: "clamp(1.2rem,2.5vw,2rem)",
          top: "50%",
          translateY: "-50%",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          pointerEvents: "none",
        }}
      >
        <span
          className={inter.className}
          style={{
            fontSize: "0.48rem",
            fontWeight: 700,
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "rgba(245,232,224,0.2)",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >

        </span>
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "38px",
            background: "linear-gradient(to bottom, rgba(210,165,175,0.45), transparent)",
          }}
        />
      </motion.div>
    </motion.section>
  );
}

export default function VoxiumPage() {
  return (
    <main className={`${inter.className} bg-[#fff8f8] text-[#25181d]`}>
      <VoxiumHero />

      <section className="relative mx-auto max-w-7xl px-[5vw] py-28 bg-[#990E53] rounded-[28px] overflow-hidden mt-12 mb-12">
        {/* Background Image with Fallback Color */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/voxium/arcbg.jpg"
            alt="Sonic Architecture Background"
            fill
            style={{ objectFit: "cover", objectPosition: "center", opacity: 0.3 }}
          />
        </div>
        
        <div className="relative z-10 mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <ScrollFillText as="h2" className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Sonic Architecture
            </ScrollFillText>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
              From the first syllable to the final mix, the interface presents a
              full premium audio service page without using photographs.
            </p>
          </div>
          <Link href="#portfolio" className="border-b-2 border-white/60 pb-1 text-sm font-bold uppercase tracking-[0.25em] text-white hover:border-white">
            View Portfolio
          </Link>
        </div>
      </section>

      <div id="portfolio" className="mx-auto max-w-7xl px-[5vw] grid grid-cols-1 gap-8 md:grid-cols-12 mb-28">
          {services.map((service, index) => {
            const cardTone =
              service.tone === "strong"
                ? "bg-[#a90b66] text-white shadow-[0_20px_60px_rgba(169,11,102,0.2)]"
                : service.tone === "wide"
                  ? "bg-[#ffe8ee] text-[#25181d]"
                  : "bg-white text-[#25181d]";

            const sizeClass =
              index === 0
                ? "md:col-span-8 md:min-h-[420px]"
                : index === 1
                  ? "md:col-span-4 md:min-h-[420px]"
                  : index === 2
                    ? "md:col-span-4 md:min-h-[270px]"
                    : "md:col-span-8 md:min-h-[270px]";

            return (
              <article
                key={service.title}
                className={`relative overflow-hidden rounded-[28px] p-8 ${cardTone} ${sizeClass}`}
              >
                {index === 0 ? (
                  <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[radial-gradient(circle_at_30%_30%,rgba(177,14,107,0.2),transparent_30%),linear-gradient(145deg,rgba(255,255,255,0.22),rgba(0,0,0,0.08))] md:block" />
                ) : null}

                <div className="relative z-10 flex h-full flex-col justify-between gap-10">
                  <div>
                    <div className="mb-6 text-4xl text-[#a90b66]">
                      {index === 0 ? "◌" : index === 1 ? "◉" : index === 2 ? "◎" : "◍"}
                    </div>
                    <h3 className={`max-w-md text-2xl font-bold md:text-3xl ${index === 1 ? "text-white" : ""}`}>
                      {service.title}
                    </h3>
                    <p className={`mt-4 max-w-md text-sm leading-7 ${index === 1 ? "text-white/82" : "text-[#574048]"}`}>
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] ${index === 1 ? "bg-white/12 text-white" : "bg-[#fff4f7] text-[#a90b66]"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      <FeaturedVoice />

      <section className="px-[5vw] py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollFillText as="h2" className="text-center text-4xl font-bold md:text-5xl">
            The Voxium Method
          </ScrollFillText>
          <div className="mt-20 grid gap-10 md:grid-cols-4">
            {methods.map((method) => (
              <article key={method.step} className="relative">
                <div className="absolute -top-10 left-0 text-8xl font-black text-[#a90b66]/5">{method.step}</div>
                <h3 className="relative mb-4 text-xl font-bold">{method.title}</h3>
                <p className="relative text-sm leading-7 text-[#574048]">{method.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#ffeff3] px-[5vw] py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <ScrollFillText as="h2" className="text-4xl font-bold md:text-5xl">
              Pricing Models
            </ScrollFillText>
            <p className="mt-4 text-[#574048]">Scalable solutions for voices that demand to be heard.</p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {pricing.map((plan) => (
              <article
                key={plan.name}
                className={`flex h-full flex-col rounded-[28px] p-8 shadow-sm ${plan.featured ? "bg-[#26181f] text-white shadow-[0_24px_60px_rgba(38,24,31,0.24)] md:-translate-y-6" : "bg-white text-[#25181d]"}`}
              >
                {plan.featured ? (
                  <span className="mb-4 inline-flex w-fit rounded bg-[#a90b66] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white">
                    Popular Choice
                  </span>
                ) : null}
                <div className="mb-8">
                  <h3 className={`mb-4 text-lg font-bold uppercase tracking-[0.22em] ${plan.featured ? "text-[#ffb0cd]" : "text-[#a90b66]"}`}>
                    {plan.name}
                  </h3>
                  <div className="text-5xl font-black">{plan.price}</div>
                  <p className={`mt-2 text-xs italic ${plan.featured ? "text-white/45" : "text-[#574048]"}`}>{plan.note}</p>
                </div>

                <ul className="mb-10 flex-1 space-y-4 text-sm">
                  {plan.items.map((item, index) => (
                    <li key={item} className="flex items-center gap-3 font-medium">
                      <span className={plan.featured ? "text-[#ffb0cd]" : "text-[#a90b66]"}>{index === 3 && plan.name === "Essential" ? "◦" : "✓"}</span>
                      <span className={plan.featured ? "text-white/88" : "text-[#25181d]"}>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/Consultancy"
                  className={`rounded-full px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] transition-transform hover:scale-[1.01] ${plan.featured ? "bg-[#a90b66] text-white" : "border border-[#a90b66] text-[#a90b66]"}`}
                >
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}