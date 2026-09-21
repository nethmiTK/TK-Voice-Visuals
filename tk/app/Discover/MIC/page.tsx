"use client";

import Link from "next/link";
import Image from "next/image";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
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

/* ─── HERO AUDIO CARD ─────────────────────────────────────────────── */
const heroTracks = [
  { label: "Track 01", src: "/audio/1.mp3" },
  { label: "Track 02", src: "/audio/2.mp3" },
  { label: "Track 03", src: "/audio/3.mp3" },
  { label: "Track 04", src: "/audio/4.mp3" },
];

function HeroAudioCard({ inter, cormorant }: { inter: { className: string }; cormorant: { className: string } }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleTrack = (idx: number) => {
    if (!audioRef.current) return;
    if (activeIdx === idx) {
      if (playing) { audioRef.current.pause(); setPlaying(false); }
      else { audioRef.current.play().catch(() => {}); setPlaying(true); }
    } else {
      audioRef.current.pause();
      audioRef.current.src = heroTracks[idx].src;
      audioRef.current.load();
      audioRef.current.play().catch(() => {});
      setActiveIdx(idx);
      setPlaying(true);
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        left: "3%",
        top: "55%",
        width: "clamp(200px, 22vw, 310px)",
        zIndex: 15,
        borderRadius: "18px",
        overflow: "hidden",
        background: "rgba(255,255,255,0.10)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.22)",
        boxShadow: "0 12px 40px rgba(0,0,0,0.22)",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.8rem 1rem", borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
        <div style={{ position: "relative", width: 42, height: 42, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2px solid rgba(153,14,83,0.65)", boxShadow: "0 0 10px rgba(153,14,83,0.3)" }}>
          <Image src="/voxium/sample.png" alt="TK Voice" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
        </div>
        <div>
          <p className={inter.className} style={{ fontSize: "12px", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>TK Voice</p>
          <p className={inter.className} style={{ fontSize: "9px", fontWeight: 500, color: "rgba(255,255,255,0.5)", marginTop: "2px", letterSpacing: "0.04em" }}>Professional Voice Over Artist</p>
        </div>
      </div>

      {/* Track list */}
      <div style={{ padding: "0.4rem 0.5rem" }}>
        {heroTracks.map((t, idx) => {
          const isActive = activeIdx === idx;
          const isPlaying = isActive && playing;
          return (
            <div
              key={t.src}
              onClick={() => handleTrack(idx)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.45rem 0.6rem",
                borderRadius: "10px",
                cursor: "pointer",
                background: isActive ? "rgba(255,255,255,0.10)" : "transparent",
                transition: "background 0.2s",
              }}
            >
              {/* Play/Pause icon */}
              <div style={{ width: 26, height: 26, borderRadius: "50%", background: isActive ? "#7E003F" : "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.2s" }}>
                {isPlaying ? (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><rect x="5" y="4" width="4" height="16"/><rect x="15" y="4" width="4" height="16"/></svg>
                ) : (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                )}
              </div>
              <span className={inter.className} style={{ fontSize: "11px", fontWeight: isActive ? 700 : 500, color: isActive ? "#fff" : "rgba(255,255,255,0.65)", flex: 1 }}>{t.label}</span>
              {/* Animated bars when playing */}
              {isPlaying && (
                <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: "14px" }}>
                  {[1,2,3,4].map((b) => (
                    <span key={b} style={{ display: "inline-block", width: "2px", borderRadius: "1px", background: "#7E003F", animation: `heroBar${b} ${0.5 + b * 0.1}s ease-in-out infinite alternate`, height: `${4 + b * 3}px` }} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <audio ref={audioRef} onEnded={() => setPlaying(false)} />

      <style>{`
        @keyframes heroBar1 { from { height:4px } to { height:12px } }
        @keyframes heroBar2 { from { height:7px } to { height:4px } }
        @keyframes heroBar3 { from { height:10px } to { height:6px } }
        @keyframes heroBar4 { from { height:5px } to { height:13px } }
      `}</style>
    </div>
  );
}

/* ─── CINEMATIC HERO (no framer-motion) ───────────────────────────── */
function VoxiumHero() {
  return (
    <section
      aria-label="MIC Hero"
      style={{
        minHeight: "100svh",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* LEFT BACKGROUND — solid hot pink */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "#FF3398",
          zIndex: 0,
          clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
        }}
      />

      {/* RIGHT BACKGROUND gradient */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, #4a0b2e 0%, #2a0b1a 52%, #1a0610 100%)",
          zIndex: 0,
          clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
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
            WebkitMaskImage: "radial-gradient(ellipse at center, black 10%, transparent 70%)",
            maskImage: "radial-gradient(ellipse at center, black 10%, transparent 70%)",
          }}
        />
      </div>

      {/* Vignette overlay (right side) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 82% 78% at 50% 50%, transparent 38%, rgba(14,5,11,0.78) 100%)",
          zIndex: 2,
          pointerEvents: "none",
          clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
        }}
      />

      {/* ── LEFT SIDE "MIC" TEXT ── */}
      <div
        style={{
          position: "absolute",
          left: "15%",
          top: "30%",
          transform: "translateY(-50%)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <span
          className={cormorant.className}
          style={{
            fontSize: "clamp(10rem, 22vw, 28rem)",
            fontWeight: 600,
            color: "#7E003F",
            display: "block",
            lineHeight: 1,
          }}
        >
          MIC
        </span>
      </div>

      {/* ── PROFILE CARD — bottom-left with audio player ── */}
      <HeroAudioCard inter={inter} cormorant={cormorant} />

      {/* ── SIDE IMAGE — RIGHT ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 0,
          top: "10vh",
          width: "clamp(160px, 28vw, 420px)",
          height: "90%",
          zIndex: 4,
          WebkitMaskImage: "radial-gradient(ellipse at 100% 50%, black 0%, transparent 60%)",
          maskImage: "radial-gradient(ellipse at 100% 50%, black 0%, transparent 60%)",
        }}
      >
        <Image
          src="/voxium/heroleft.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 28vw"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            transform: "scaleX(-1)",
          }}
        />
      </div>

      {/* ── CENTER HERO IMAGE ── */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "20vh",
          height: "80%",
          width: "clamp(240px, 44vw, 640px)",
          transform: "translateX(-50%)",
          zIndex: 8,
        }}
      >
        <Image
          src="/voxium/hero.png"
          alt="MIC — Voice Over"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 52vw"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
      </div>

      {/* ── SOCIAL ICONS — RIGHT ── */}
      <div
        style={{
          position: "absolute",
          right: "clamp(1.2rem, 2.5vw, 2rem)",
          top: "40%",
          transform: "translateY(-50%)",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
        }}
      >
        <Link href="https://wa.me/94777858521" target="_blank" rel="noopener noreferrer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(245,232,224,0.65)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.2s" }} onMouseEnter={e => (e.currentTarget.style.stroke = "white")} onMouseLeave={e => (e.currentTarget.style.stroke = "rgba(245,232,224,0.65)")}>
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </Link>
        <Link href="https://web.facebook.com/profile.php?id=61585810421141" target="_blank" rel="noopener noreferrer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(245,232,224,0.65)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.2s" }} onMouseEnter={e => (e.currentTarget.style.stroke = "white")} onMouseLeave={e => (e.currentTarget.style.stroke = "rgba(245,232,224,0.65)")}>
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </Link>
        <Link href="https://www.linkedin.com/in/nethmi-thalikoralage-5265032a0/" target="_blank" rel="noopener noreferrer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(245,232,224,0.65)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.2s" }} onMouseEnter={e => (e.currentTarget.style.stroke = "white")} onMouseLeave={e => (e.currentTarget.style.stroke = "rgba(245,232,224,0.65)")}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
          </svg>
        </Link>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "38px",
            background: "linear-gradient(to bottom, rgba(210,165,175,0.45), transparent)",
          }}
        />
      </div>
    </section>
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