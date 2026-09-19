"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

/* ────────────────────────────────────────────────────────
   VOICE SAMPLES CONFIG — swap audio paths when ready
   ──────────────────────────────────────────────────────── */
const voiceSamples = [
  {
    category: "Commercial",
    description:
      "Engaging and memorable voice for advertisements and brand campaigns.",
    audio: "/voxium/audio/commercial.mp3",
  },
  {
    category: "Documentary",
    description:
      "Natural, expressive narration for documentaries and storytelling.",
    audio: "/voxium/audio/documentary.mp3",
  },
  {
    category: "News",
    description: "Clear, confident delivery for news and broadcast content.",
    audio: "/voxium/audio/news.mp3",
  },
  {
    category: "Dubbing & Series",
    description:
      "Expressive character and dialogue performance for series and video content.",
    audio: "/voxium/audio/dubbing.mp3",
  },
  {
    category: "Motivational & Inspirational Voice Over",
    description:
      "Warm, powerful delivery for motivational and inspirational content.",
    audio: "/voxium/audio/motivational.mp3",
  },
];

export default function FeaturedVoice() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const pad = (i: number) => String(i + 1).padStart(2, "0");

  /* ── toggle play / pause ── */
  const handleToggle = (index: number) => {
    if (activeIndex === index) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play().catch(() => {});
        setIsPlaying(true);
      }
    } else {
      setActiveIndex(index);
      setIsPlaying(true);
      setProgress(0);
    }
  };

  /* ── load & play when activeIndex changes ── */
  useEffect(() => {
    if (activeIndex !== null && audioRef.current) {
      audioRef.current.src = voiceSamples[activeIndex].audio;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.warn("Audio playback failed:", err);
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  /* ── 30-second limit + progress ── */
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const t = audio.currentTime;
    const max = Math.min(audio.duration || 30, 30);
    setProgress((t / max) * 100);
    if (t >= 30) advanceToNext();
  };

  const handleEnded = () => advanceToNext();

  const advanceToNext = () => {
    if (activeIndex === null) return;
    const next = (activeIndex + 1) % voiceSamples.length;
    setActiveIndex(next);
    setProgress(0);
    setIsPlaying(true);
  };

  return (
    <section
      id="samples"
      className="relative w-full overflow-hidden text-white"
      style={{ minHeight: "100vh" }}
    >
      {/* ── BACKGROUND IMAGE ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/voxium/bgsecond.jpg"
          alt=""
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Lightened overlay to keep it "not dark" but still readable */}
        <div className="absolute inset-0 bg-white/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#1a0610]/40" />
      </div>

      {/* ── CONTENT GRID ── */}
      <div className="relative z-10 mx-auto grid min-h-[100vh] max-w-[1440px] grid-cols-1 lg:grid-cols-2">
        {/* ─────────── LEFT COLUMN ─────────── */}
        <div className="flex flex-col justify-center px-[5vw] py-20 lg:px-16 lg:py-28">
          {/* Section Heading */}
          <div className="mb-10">
            <h2
              className={`${cormorant.className} text-[clamp(3rem,7vw,5.5rem)] font-700 italic leading-[0.95] tracking-wide text-white`}
            >
              FEATURED
            </h2>
            <span
              className={`${cormorant.className} block text-[clamp(2.2rem,5vw,4rem)] font-300 italic tracking-[0.08em] text-[#990E53]`}
            >
              VOICE
            </span>
          </div>

          {/* ── CARD ── */}
          <div className="w-full max-w-[560px] overflow-hidden rounded-[18px] border border-white/[0.06] bg-[#3a0c22]/80 shadow-2xl shadow-black/40 backdrop-blur-md">
            {/* Card Header — profile row */}
            <div className="flex items-center gap-4 border-b border-white/[0.06] px-6 py-5">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src="/voxium/bgsecond.jpg"
                  alt="Voice Artist"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div className="flex-1">
                <h3
                  className={`${inter.className} text-[15px] font-bold text-white`}
                >
                  TK Voice
                </h3>
                <p
                  className={`${inter.className} mt-0.5 text-[11px] font-medium tracking-wide text-white/50`}
                >
                  Professional Voice Over Artist
                </p>
              </div>
              {/* WhatsApp icon button */}
              <Link
                href="https://wa.me/94752607696?text=Hi%2C%20can%20you%20service%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#990E53] text-white transition-transform hover:scale-110 active:scale-95"
                aria-label="Chat on WhatsApp"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </Link>
            </div>

            {/* ── Track list ── */}
            {/* Show max ~4 tracks, scroll for the rest */}
            <div className="px-2 py-2 max-h-[280px] overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#990E53 transparent' }}>
              {voiceSamples.map((sample, index) => {
                const isActive = activeIndex === index;
                const isActiveAndPlaying = isActive && isPlaying;

                return (
                  <div
                    key={sample.category}
                    onClick={() => handleToggle(index)}
                    className={`group relative flex cursor-pointer items-center gap-4 rounded-xl px-4 py-3.5 transition-all duration-300 ${
                      isActive
                        ? "bg-white/[0.08]"
                        : "hover:bg-white/[0.04]"
                    }`}
                  >
                    {/* Progress bar underneath active row */}
                    {isActive && (
                      <div
                        className="absolute bottom-0 left-0 h-[2px] rounded-full bg-[#990E53] transition-all duration-200 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    )}

                    {/* Number / Play-Pause */}
                    <div className="relative flex h-8 w-8 shrink-0 items-center justify-center text-sm">
                      {isActiveAndPlaying ? (
                        /* Pause icon */
                        <svg
                          className="h-4 w-4 fill-current text-[#990E53]"
                          viewBox="0 0 24 24"
                        >
                          <rect x="6" y="4" width="4" height="16" />
                          <rect x="14" y="4" width="4" height="16" />
                        </svg>
                      ) : isActive ? (
                        /* Play icon */
                        <svg
                          className="h-4 w-4 fill-current text-[#990E53] ml-0.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      ) : (
                        <>
                          <span
                            className={`${inter.className} text-xs font-semibold text-white/30 group-hover:hidden`}
                          >
                            {pad(index)}
                          </span>
                          <svg
                            className="hidden h-4 w-4 fill-current text-white group-hover:block ml-0.5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </>
                      )}
                    </div>

                    {/* Category info */}
                    <div className="flex-1 min-w-0">
                      <p
                        className={`${inter.className} truncate text-[13px] font-semibold transition-colors ${
                          isActive ? "text-[#990E53]" : "text-white/90"
                        }`}
                      >
                        {sample.category}
                      </p>
                      <p
                        className={`${inter.className} mt-0.5 truncate text-[10px] leading-snug ${
                          isActive
                            ? "text-white/50"
                            : "text-white/25"
                        }`}
                      >
                        {sample.description}
                      </p>
                    </div>

                    {/* Waveform / duration indicator */}
                    <div className="flex h-6 w-16 shrink-0 items-center justify-end">
                      {isActiveAndPlaying ? (
                        <div className="flex items-center gap-[3px] h-full">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <motion.div
                              key={i}
                              animate={{
                                height: ["18%", "90%", "18%"],
                              }}
                              transition={{
                                duration: 0.7 + i * 0.08,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.12,
                              }}
                              className="w-[3px] rounded-full bg-[#990E53]"
                            />
                          ))}
                        </div>
                      ) : (
                        <span
                          className={`${inter.className} text-[11px] text-white/25`}
                        >
                          0:30
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Card Footer — WhatsApp CTA */}
            <div className="border-t border-white/[0.06] px-6 py-4">
              <Link
                href="https://wa.me/94752607696?text=Hi%2C%20can%20you%20service%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#990E53] to-[#6a0738] py-3 transition-all hover:shadow-lg hover:shadow-[#990E53]/20 active:scale-[0.98]"
              >
                <svg
                  className="h-4 w-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span
                  className={`${inter.className} text-[11px] font-bold uppercase tracking-[0.18em] text-white`}
                >
                  Chat on WhatsApp
                </span>
              </Link>
              <p
                className={`${inter.className} mt-2 text-center text-[9px] tracking-[0.15em] text-white/30 uppercase`}
              >
                Available for voice-over projects
              </p>
            </div>
          </div>
        </div>

        {/* ─────────── RIGHT COLUMN — Large Profile Image ─────────── */}
        <div className="relative hidden lg:block">
          {/* Large cinematic profile image */}
          <div className="absolute inset-0">
            <Image
              src="/voxium/bgsecond.jpg"
              alt="Voice Artist"
              fill
              priority
              style={{
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
            {/* left fade into the card column */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a0610] via-[#1a0610]/40 to-transparent w-[40%]" />
            {/* bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0610] via-transparent to-transparent opacity-70" />
            {/* top fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a0610] via-transparent to-transparent opacity-40" />
          </div>
        </div>
      </div>

      {/* ── Mobile profile image (shown below card on small screens) ── */}
      <div className="relative z-10 block lg:hidden">
        <div className="relative mx-auto aspect-[16/10] w-full max-w-[560px] overflow-hidden rounded-2xl mx-[5vw]">
          <Image
            src="/voxium/bgsecond.jpg"
            alt="Voice Artist"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0610] via-transparent to-transparent opacity-80" />
        </div>
      </div>

      {/* ── Hidden HTML5 Audio ── */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        className="hidden"
      />
    </section>
  );
}
