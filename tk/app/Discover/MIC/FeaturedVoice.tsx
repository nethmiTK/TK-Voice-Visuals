"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

const voiceSamples = [
  {
    category: "Track 01",
    description: "Voice sample — professional voice over recording.",
    audio: "/audio/1.mp3",
  },
  {
    category: "Track 02",
    description: "Voice sample — professional voice over recording.",
    audio: "/audio/2.mp3",
  },
  {
    category: "Track 03",
    description: "Voice sample — professional voice over recording.",
    audio: "/audio/3.mp3",
  },
  {
    category: "Track 04",
    description: "Voice sample — professional voice over recording.",
    audio: "/audio/4.mp3",
  },
];


export default function FeaturedVoice() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const pad = (i: number) => String(i + 1).padStart(2, "0");

  const handleToggle = (index: number) => {
    if (activeIndex === index) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play().catch(() => { });
        setIsPlaying(true);
      }
    } else {
      setActiveIndex(index);
      setIsPlaying(true);
      setProgress(0);
    }
  };

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
      className="relative w-full overflow-hidden text-white bg-transparent"
    >

      {/* ── CONTENT GRID ── */}
      <div className="relative z-10 mx-auto flex flex-col items-center w-full max-w-[1440px]">
        {/* ─────────── CENTERED CONTENT ─────────── */}
        <div className="flex flex-col items-center justify-center px-[5vw] py-12 lg:px-16 w-full">
          {/* Section Heading */}
          <div className="mb-10 text-center">
            <h2
              className={`${cormorant.className} text-[clamp(3rem,7vw,5.5rem)] font-700 italic leading-[0.95] tracking-wide text-white`}
            >
              REALITY
            </h2>
            <span
              className={`${cormorant.className} block text-[clamp(2.2rem,5vw,4rem)] font-300 italic tracking-[0.08em] text-[#990E53]`}
            >
              TK  VOICE
            </span>
          </div>

          {/* ── GLASS CARD ── */}
          <div
            className="w-full max-w-[560px] overflow-hidden rounded-[18px] shadow-2xl shadow-black/40"
            style={{
              background: "rgba(30, 8, 20, 0.45)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            {/* Card Header — circular profile */}
            <div
              className="flex items-center gap-4 px-6 py-5"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Circular profile image */}
              <div
                style={{
                  position: "relative",
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  overflow: "hidden",
                  flexShrink: 0,
                  border: "2px solid rgba(153,14,83,0.6)",
                  boxShadow: "0 0 12px rgba(153,14,83,0.35)",
                }}
              >
                <Image
                  src="/voxium/sample.png"
                  alt="Voice Artist"
                  fill
                  sizes="64px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div className="flex-1">
                <h3 className={`${inter.className} text-[15px] font-bold text-white`}>
                  TK Voice
                </h3>
                <p className={`${inter.className} mt-0.5 text-[11px] font-medium tracking-wide text-white/50`}>
                  Professional Voice Over Artist
                </p>
              </div>
            </div>

            {/* ── Track list ── */}
            <div className="px-2 py-2">
              {voiceSamples.map((sample, index) => {
                const isActive = activeIndex === index;
                const isActiveAndPlaying = isActive && isPlaying;

                return (
                  <div
                    key={sample.category}
                    onClick={() => handleToggle(index)}
                    className={`group relative flex cursor-pointer items-center gap-4 rounded-xl px-4 py-3.5 transition-all duration-300 ${isActive ? "bg-white/[0.08]" : "hover:bg-white/[0.04]"
                      }`}
                  >
                    {isActive && (
                      <div
                        className="absolute bottom-0 left-0 h-[2px] rounded-full bg-[#990E53] transition-all duration-200 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    )}

                    <div className="relative flex h-8 w-8 shrink-0 items-center justify-center text-sm">
                      {isActiveAndPlaying ? (
                        <svg className="h-4 w-4 fill-current text-[#990E53]" viewBox="0 0 24 24">
                          <rect x="6" y="4" width="4" height="16" />
                          <rect x="14" y="4" width="4" height="16" />
                        </svg>
                      ) : isActive ? (
                        <svg className="h-4 w-4 fill-current text-[#990E53] ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      ) : (
                        <>
                          <span className={`${inter.className} text-xs font-semibold text-white/30 group-hover:hidden`}>
                            {pad(index)}
                          </span>
                          <svg className="hidden h-4 w-4 fill-current text-white group-hover:block ml-0.5" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p
                        className={`${inter.className} truncate text-[13px] font-semibold transition-colors ${isActive ? "text-[#990E53]" : "text-white/90"
                          }`}
                      >
                        {sample.category}
                      </p>
                      <p
                        className={`${inter.className} mt-0.5 truncate text-[10px] leading-snug ${isActive ? "text-white/50" : "text-white/25"
                          }`}
                      >
                        {sample.description}
                      </p>
                    </div>

                    <div className="flex h-6 w-16 shrink-0 items-center justify-end">
                      {isActiveAndPlaying ? (
                        <div className="flex items-center gap-[3px] h-full">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <motion.div
                              key={i}
                              animate={{ height: ["18%", "90%", "18%"] }}
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
                        <span className={`${inter.className} text-[11px] text-white/25`}>
                          0:30
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile profile image ── */}
      <div className="relative z-10 flex justify-center pb-16 lg:hidden">
        <div
          style={{
            position: "relative",
            width: "clamp(160px, 50vw, 260px)",
            aspectRatio: "1 / 1",
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid rgba(153,14,83,0.5)",
            boxShadow: "0 0 40px rgba(153,14,83,0.2)",
          }}
        >
          <Image
            src="/voxium/sample.png"
            alt="Voice Artist"
            fill
            sizes="(max-width: 1024px) 260px, 33vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
      </div>

      <audio
        ref={audioRef}
        preload="none"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        className="hidden"
      />
    </section>
  );
}
