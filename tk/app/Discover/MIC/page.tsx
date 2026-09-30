"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FeaturedVoice from "./FeaturedVoice";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  style: ["normal", "italic"],
});

/* ======================================================
   HERO
====================================================== */

function VoxiumHero() {
  return (
    <section
      className={`${inter.variable} relative min-h-screen w-full overflow-hidden bg-black`}
    >
      <div className="absolute inset-0">
        <Image
          src="/voxium/herobg.png"
          alt="Voxium Hero"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/10" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.03) 50%, rgba(0,0,0,0.18) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full px-5 sm:px-10 md:px-16 lg:px-20">
          <div className="max-w-[800px]">
            <p className="mb-5 text-[9px] font-medium uppercase tracking-[0.38em] text-[#DF2085]/80 sm:mb-6 sm:text-xs">
              Sri Lankan Research Voice visuals Artist
            </p>

            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-[var(--font-inter)] text-[16vw] font-black leading-[0.78] tracking-[-0.075em] text-[#FFA3D0] sm:text-[14vw] md:text-[11vw] lg:text-[9.5vw]"
            >
              TK Voice Visuals
            </motion.h1>

            <p className="mt-6 max-w-[530px] text-[10px] uppercase leading-[1.8] tracking-[0.22em] text-[#DF2085]/75 sm:mt-7 sm:text-sm sm:tracking-[0.28em]">
              Voice that makes you listen.
              <br />
              Visuals that make you stay.
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[12%] left-0 z-10 w-full overflow-hidden">
        <div className="flex h-[70px] items-center justify-center gap-[2px] opacity-90 sm:h-[90px] sm:gap-[3px]">
          {Array.from({ length: 95 }).map((_, i) => {
            const height = Math.round(
              12 + Math.abs(Math.sin(i * 0.47)) * 55
            );

            return (
              <span
                key={i}
                className={`hero-wave hero-wave-${i % 7}`}
                style={{ height: `${height}px` }}
              />
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 z-[8] h-[30%] w-full overflow-hidden opacity-50">
        <svg
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M0 220 C180 150 260 270 440 200 S700 150 850 215 S1100 270 1440 180"
            fill="none"
            stroke="#d1004b"
            strokeWidth="1"
          />

          <path
            d="M0 250 C180 180 280 280 450 220 S720 170 900 235 S1120 285 1440 205"
            fill="none"
            stroke="#d1004b"
            strokeWidth="1"
          />

          <path
            d="M0 270 C180 210 300 300 470 240 S740 190 920 255 S1160 300 1440 220"
            fill="none"
            stroke="#d1004b"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="fixed right-3 top-1/2 z-[50] flex -translate-y-1/2 flex-col gap-2 sm:right-7 sm:gap-3">
        <a
          href="https://wa.me/94777858521"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#25D366] sm:h-9 sm:w-9"
        >
          <FaWhatsapp className="text-[15px] sm:text-[17px]" />
        </a>

        <a
          href="https://web.facebook.com/profile.php?id=61585810421141"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#1877F2] sm:h-9 sm:w-9"
        >
          <FaFacebookF className="text-[13px] sm:text-[15px]" />
        </a>

        <a
          href="https://www.linkedin.com/in/nethmi-thalikoralage-5265032a0/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#0A66C2] sm:h-9 sm:w-9"
        >
          <FaLinkedinIn className="text-[13px] sm:text-[15px]" />
        </a>
      </div>

      <style jsx>{`
        .hero-wave {
          display: block;
          width: 2px;
          border-radius: 999px;
          background: #c60046;
          transform-origin: center;
          animation: heroWave 1.2s ease-in-out infinite alternate;
        }

        .hero-wave-0 {
          animation-duration: 1.1s;
        }

        .hero-wave-1 {
          animation-duration: 1.18s;
          animation-delay: -0.035s;
        }

        .hero-wave-2 {
          animation-duration: 1.26s;
          animation-delay: -0.07s;
        }

        .hero-wave-3 {
          animation-duration: 1.34s;
          animation-delay: -0.105s;
        }

        .hero-wave-4 {
          animation-duration: 1.42s;
          animation-delay: -0.14s;
        }

        .hero-wave-5 {
          animation-duration: 1.5s;
          animation-delay: -0.175s;
        }

        .hero-wave-6 {
          animation-duration: 1.58s;
          animation-delay: -0.21s;
        }

        @keyframes heroWave {
          0% {
            transform: scaleY(0.45);
            opacity: 0.35;
          }

          100% {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-wave {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

/* ======================================================
   AUDIO SHOWCASE
====================================================== */

const voiceStreamLetters = [
  "V",
  "O",
  "I",
  "C",
  "E",
  " ",
  "V",
  "I",
  "S",
  "U",
  "A",
  "L",
  "S",
];

const voiceWheelItems = [
  "COMMERCIAL VOICE",
  "INSPIRATIONAL VOICE OVER",
  "NEWS",
  "DUBBING & SERIES",
  "DOCUMENTARY",
];

function AudioShowcase() {
  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden bg-[#3F001F]">
      <div className="absolute inset-0">
        <Image
          src="/voxium/2se.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#f5e8eb]/20" />
      </div>

      <div className="relative z-10 flex min-h-[60vh] w-full">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative hidden w-[27%] shrink-0 md:block"
        >
          <div className="absolute inset-0 overflow-visible">
            <Image
              src="/voxium/left.jpg"
              alt="Voice visual"
              fill
              className="left-full-image object-cover"
            />

            <div className="brand-message-card">
              <div className="brand-card-image">
                <Image
                  src="/voxium/sampless.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <p>ENHANCE YOUR BRAND</p>
            </div>
          </div>
        </motion.div>

        <div className="relative flex min-w-0 flex-1 flex-col justify-center px-5 py-16 sm:px-10 md:px-12 lg:px-16">
          <p className="mb-4 text-[9px] uppercase tracking-[0.5em] text-[#62001d]/60">
            Voice Identity
          </p>

          <h2 className="text-[15vw] font-black leading-[0.78] tracking-[-0.07em] text-[#9E004E] sm:text-[10vw] md:text-[7vw]">
            VISUAL
          </h2>

          <h2 className="ml-[8%] text-[15vw] font-black leading-[0.78] tracking-[-0.07em] text-[#9E004E] sm:text-[10vw] md:text-[7vw]">
            THINK TO
          </h2>

          <div className="relative mt-8 w-full overflow-hidden">
            <div className="voice-wheel">
              <div className="voice-wheel-track">
                {[...voiceWheelItems, ...voiceWheelItems].map(
                  (item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="voice-wheel-item"
                    >
                      <span>{item}</span>
                      <span className="voice-wheel-dot">●</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="relative z-20 mt-6 w-full max-w-[520px]">
            <FeaturedVoice />
          </div>
        </div>

        <div className="relative hidden w-[4cm] shrink-0 overflow-hidden border-l border-[#62001d]/10 md:block">
          <div className="absolute inset-0 overflow-hidden">
            <div className="voice-stream">
              {[1, 2].map((set) => (
                <div className="voice-stream-set" key={set}>
                  {voiceStreamLetters.map((letter, index) => (
                    <span
                      key={`${set}-${index}`}
                      className="select-none text-[42px] font-black leading-[0.8] text-[#62001d]/25"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .left-full-image {
          object-position: center;
          filter: saturate(0.92) contrast(0.96);
          transform: scale(1.06);

          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );

          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .brand-message-card {
          position: absolute;
          left: 8cm;
          top: calc(100% + 12cm);
          min-height: 158px;
          width: 170px;
          padding: 10px;
          background: #ff4aa3;
          border: 1px solid rgba(98, 0, 29, 0.08);
          box-shadow: 0 15px 35px rgba(98, 0, 29, 0.08);
          z-index: 30;
          animation: brandCardReveal 1.2s
            cubic-bezier(0.22, 1, 0.36, 1) 0.8s forwards;
          opacity: 0;
        }

        .brand-card-image {
          position: relative;
          width: 100%;
          height: 100px;
          overflow: hidden;
        }

        .brand-message-card p {
          margin: 9px 2px 3px;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.16em;
          color: #62001d;
          text-transform: uppercase;
        }

        @keyframes brandCardReveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .voice-stream {
          display: flex;
          flex-direction: column;
          width: max-content;
          animation: voiceMove 11s linear infinite;
        }

        .voice-stream-set {
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }

        .voice-stream span {
          display: block;
          height: 34px;
        }

        @keyframes voiceMove {
          from {
            transform: translateY(0);
          }

          to {
            transform: translateY(-50%);
          }
        }

        .voice-wheel {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;

          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );

          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
        }

        .voice-wheel-track {
          display: flex;
          width: max-content;
          align-items: center;
          animation: wheelMove 18s linear infinite;
        }

        .voice-wheel-item {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-shrink: 0;
          padding-right: 22px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.28em;
          color: #62001d;
        }

        .voice-wheel-dot {
          font-size: 7px;
          opacity: 0.45;
        }

        @keyframes wheelMove {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .voice-stream,
          .voice-wheel-track,
          .brand-message-card {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

/* ======================================================
   ABOUT
====================================================== */

function AboutScrollSection() {
  return (
    <section className="relative overflow-hidden bg-[#9E004E]">
      <div className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-[#9E004E] sm:min-h-[70vh] md:min-h-[80vh]">
        <div
  className="relative z-10 select-none text-[25vw] font-black leading-none tracking-[-0.09em] text-[#FFA3D0] md:text-[22vw] lg:text-[20vw]"
>
  ABOUT
</div>
      </div>

      {/* SAME ABOUT BACKGROUND */}
      <div className="bg-[#9E004E] px-5 sm:px-8 md:px-10 lg:px-20">
        {[
          {
            num: "01",
            label: "ABOUT",
            title: <>Voice & Visuals</>,
            text: [
              "People are naturally drawn to what they hear and what they see. In a world where attention is becoming harder to capture, ordinary content is no longer enough. The next step is creating content that makes people stop, listen, watch, and remember.",
              "That’s where powerful voice and captivating visuals come together — turning simple ideas into experiences that people can connect with.",
            ],
            ending: (
              <>
                <span className="text-[#E7A0B8]">Addictive Voice.</span>
                <br />
                Captivating Visuals.
              </>
            ),
          },
          {
            num: "02",
            label: "WHY CHOOSE US",
            title: <>Why Choose Us</>,
            text: [
              "Every brand has something worth saying. Our job is to make sure people actually stop and listen.",
              "We combine voice, visuals, storytelling and technology to create content that feels clear, memorable and emotionally connected.",
            ],
            ending: (
              <>
                Hear it.
                <br />
                <span className="text-[#E7A0B8]">See it.</span>
                <br />
                Remember it.
              </>
            ),
          },
        ].map((item, index) => (
          <div
            key={item.num}
            className={`flex min-h-[85vh] items-center py-20 sm:py-24 md:min-h-screen ${
              index === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[800px] md:w-[68%] lg:w-[55%]"
            >
              <div
                className={`relative ${
                  index === 0
                    ? "border-l-[2px] pl-5 sm:pl-7 md:pl-10 lg:pl-14"
                    : "border-r-[2px] pr-5 text-right sm:pr-7 md:pr-10 lg:pr-14"
                } border-[#E7A0B8]`}
              >
                <div
                  className={`mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4 ${
                    index === 1 ? "justify-end" : ""
                  }`}
                >
                  {index === 1 && (
                    <span className="text-[10px] font-bold tracking-[0.3em] text-white/60">
                      {item.label}
                    </span>
                  )}

                  <span className="text-[10px] font-bold tracking-[0.35em] text-[#E7A0B8]">
                    {item.num}
                  </span>

                  {index === 0 && (
                    <span className="text-[10px] font-bold tracking-[0.3em] text-white/60">
                      {item.label}
                    </span>
                  )}
                </div>

                <h3 className="mb-6 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl md:text-5xl lg:mb-8 lg:text-7xl">
                  {item.title}
                </h3>

                {item.text.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-5 text-sm font-medium leading-[1.85] text-white/85 sm:text-base md:text-lg lg:text-xl"
                  >
                    {paragraph}
                  </p>
                ))}

                <div className="mt-7 text-xl font-black text-white sm:text-2xl md:text-3xl">
                  {item.ending}
                </div>
              </div>
            </motion.div>
          </div>
        ))}

        <div className="flex min-h-[80vh] items-center justify-center py-20 sm:py-24 md:min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[800px] text-center md:w-[68%] lg:w-[55%]"
          >
            <div className="relative border-t-[2px] border-[#E7A0B8] pt-7">
              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="text-[10px] font-bold tracking-[0.35em] text-[#E7A0B8]">
                  03
                </span>

                <span className="text-[10px] font-bold tracking-[0.3em] text-white/60">
                  OUR APPROACH
                </span>
              </div>

              <h3 className="mb-6 text-3xl font-black text-white sm:text-5xl lg:text-7xl">
                Built to Be
                <br />
                <span className="text-[#E7A0B8]">Remembered.</span>
              </h3>

              <p className="text-sm font-medium leading-[1.85] text-white/85 sm:text-base md:text-lg lg:text-xl">
                We don’t simply create content. We build experiences around
                ideas — combining sound, visuals and storytelling to give every
                message its own identity.
              </p>

              <div className="mt-8">
                <span className="inline-block border border-[#E7A0B8]/50 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white/70 sm:text-xs">
                  Voice × Visual
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ======================================================
   CINEMATIC VIDEO SECTION
====================================================== */

function CinematicSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const video3Ref = useRef<HTMLVideoElement>(null);
  const video4Ref = useRef<HTMLVideoElement>(null);

  const [sectionVisible, setSectionVisible] = useState(false);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const isHoverDevice = () => {
    if (typeof window === "undefined") return false;

    return window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
  };

  const stopVideo = (video: HTMLVideoElement | null) => {
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    video.muted = true;
  };

  const activateVideo = async (
    video: HTMLVideoElement | null,
    number: number
  ) => {
    if (!sectionVisible) return;

    if (activeVideo && activeVideo !== number) {
      if (activeVideo === 1) stopVideo(video1Ref.current);
      if (activeVideo === 2) stopVideo(video2Ref.current);
      if (activeVideo === 3) stopVideo(video3Ref.current);
      if (activeVideo === 4) stopVideo(video4Ref.current);
    }

    setActiveVideo(number);

    if (video) {
      video.currentTime = 0;
      video.muted = false;

      try {
        await video.play();
      } catch {
        try {
          video.muted = true;
          await video.play();
        } catch {
          setActiveVideo(null);
        }
      }
    }
  };

  const deactivateVideo = (
    video: HTMLVideoElement | null,
    number: number
  ) => {
    if (video) stopVideo(video);

    setActiveVideo((current) =>
      current === number ? null : current
    );
  };

  const handleTouch = async (
    video: HTMLVideoElement | null,
    number: number
  ) => {
    if (!sectionVisible) return;

    if (activeVideo === number) {
      deactivateVideo(video, number);
      return;
    }

    await activateVideo(video, number);
  };

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;

        setSectionVisible(visible);

        if (!visible) {
          stopVideo(video1Ref.current);
          stopVideo(video2Ref.current);
          stopVideo(video3Ref.current);
          stopVideo(video4Ref.current);
          setActiveVideo(null);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      stopVideo(video1Ref.current);
      stopVideo(video2Ref.current);
      stopVideo(video3Ref.current);
      stopVideo(video4Ref.current);
    };
  }, []);

  const videos = [
    {
      number: 1,
      category: "CONTENT",
      image: "/voxium/vebg.jpg",
      video: "/voxium/videojoke.mp4",
      ref: video1Ref,
    },
    {
      number: 2,
      category: "BRAND",
      image: "/voxium/covervideo.jpeg",
      video: "/voxium/V2.mp4",
      ref: video2Ref,
    },
    {
      number: 3,
      category: "PROMO",
      image: "/voxium/v.png",
      isYouTube: true,
      youtubeId: "Rb8T0Pw_UhY",
      ref: null,
    },
    {
      number: 4,
      category: "SHOWREEL",
      image: "/voxium/vs.png",
      isYouTube: true,
      youtubeId: "AF6Zj4u8OEg",
      ref: null,
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#E887B7] text-[#990E53]"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-16 lg:py-20 xl:px-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 flex flex-col gap-7 sm:mb-14 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.4em] text-[#990E53]/70 sm:text-[10px]">
              Content Creation
            </p>

            <h2 className="text-[15vw] font-black leading-[0.76] tracking-[-0.08em] text-[#990E53] sm:text-[11vw] md:text-[8vw] lg:text-[7vw]">
              MAKE IT
              <br />
              MOVING.
            </h2>
          </div>

          <p className="max-w-[330px] text-xs leading-6 text-[#990E53]/70 sm:text-sm">
            Visual stories designed to make people stop, watch and remember
            your brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-16">
          {videos.map((item, index) => {
            const isActive = activeVideo === item.number;

            return (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  x: -100,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group mx-auto w-full max-w-[390px]"
              >
                <div className="mb-3 flex items-center justify-end border-b border-[#990E53]/25 pb-2">

                  <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#990E53]/65">
                    {item.category}
                  </span>
                </div>

                <div
                  className="relative mx-auto w-full cursor-pointer overflow-hidden rounded-[3px] bg-[#990E53]/10 shadow-[0_25px_70px_rgba(153,14,83,0.18)]"
                  onMouseEnter={() => {
                    if (isHoverDevice()) {
                      activateVideo(item.ref ? item.ref.current : null, item.number);
                    }
                  }}
                  onMouseLeave={() => {
                    if (isHoverDevice()) {
                      deactivateVideo(item.ref ? item.ref.current : null, item.number);
                    }
                  }}
                  onClick={() => {
                    if (!isHoverDevice()) {
                      handleTouch(item.ref ? item.ref.current : null, item.number);
                    }
                  }}
                >
                  <div className="relative aspect-[9/16] w-full overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={`${item.category} visual`}
                      draggable={false}
                      animate={{
                        scale: isActive ? 1.04 : 1,
                        opacity: isActive ? 0 : 1,
                      }}
                      transition={{
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    {!item.isYouTube ? (
                      <video
                        ref={item.ref}
                        src={item.video}
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                          isActive
                            ? "scale-100 opacity-100"
                            : "scale-[1.04] opacity-0"
                        }`}
                      />
                    ) : (
                      isActive && (
                        <iframe
                          src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&playsinline=1`}
                          title="YouTube short"
                          allow="autoplay; encrypted-media"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      )
                    )}

                    <div
                      className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                        isActive
                          ? "bg-[#990E53]/0"
                          : "bg-[#990E53]/10"
                      }`}
                    />

                    <motion.div
                      animate={{
                        opacity: isActive ? 0 : 1,
                        scale: isActive ? 1.15 : 1,
                      }}
                      transition={{ duration: 0.45 }}
                      className="pointer-events-none absolute inset-0 flex items-center justify-center"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E887B7]/90 bg-[#990E53]/65 backdrop-blur-md sm:h-16 sm:w-16">
                        <span className="ml-1 text-sm text-[#E887B7]">
                          ▶
                        </span>
                      </div>
                    </motion.div>

                    <div
                      className={`absolute left-4 top-4 transition-all duration-500 sm:left-5 sm:top-5 ${
                        isActive
                          ? "-translate-y-2 opacity-0"
                          : "translate-y-0 opacity-100"
                      }`}
                    >
                      <span className="rounded-full border border-[#E887B7]/70 bg-[#990E53]/55 px-3 py-1.5 text-[7px] font-bold uppercase tracking-[0.25em] text-[#E887B7] backdrop-blur-md">
                        {item.category}
                      </span>
                    </div>

                    <div
                      className={`absolute bottom-4 right-4 transition-all duration-500 sm:bottom-5 sm:right-5 ${
                        isActive
                          ? "translate-y-2 opacity-0"
                          : "translate-y-0 opacity-100"
                      }`}
                    >
                      <span className="rounded-full bg-[#E887B7]/80 px-3 py-1.5 text-[7px] font-bold uppercase tracking-[0.22em] text-[#990E53]">
                        Hover / Tap
                      </span>
                    </div>

                    {isActive && !isHoverDevice() && (
                      <div
                        className="absolute right-4 top-4 sm:right-5 sm:top-5 z-20"
                        onClick={(e) => {
                          e.stopPropagation();
                          deactivateVideo(item.ref?.current || null, item.number);
                        }}
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E887B7]/70 bg-[#990E53]/80 text-[#E887B7] backdrop-blur-md">
                          ✕
                        </span>
                      </div>
                    )}

                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 10,
                      }}
                      className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5"
                    >
                      <span className="rounded-full border border-[#E887B7]/60 bg-[#990E53]/60 px-3 py-1.5 text-[7px] font-bold uppercase tracking-[0.22em] text-[#E887B7] backdrop-blur-md">
                        Playing
                      </span>
                    </motion.div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#990E53]/70">
                    Vertical Film
                  </span>

                  <span className="text-[8px] font-bold tracking-[0.2em] text-[#990E53]/50">
                    9 : 16
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="mt-12 border-t border-[#990E53]/25 pt-8 sm:mt-16 sm:pt-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h3 className="max-w-[850px] text-[9vw] font-black leading-[0.82] tracking-[-0.06em] text-[#990E53] sm:text-[6vw] md:text-[4.5vw]">
              YOUR BRAND
              <br />
              DESERVES A SCENE.
            </h3>

            <p className="max-w-[260px] text-xs leading-5 text-[#990E53]/65">
              From the first frame to the final impression, every visual has a
              purpose.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ======================================================
   GAME ADDICTER
====================================================== */

function GameAddicterSection() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const images = Array.from({ length: 15 }, (_, i) => ({
    image: `/voxium/cards/${(i % 11) + 1}.jpg`,
    title: [
      "VOICE",
      "STORY",
      "ATTENTION",
      "IMPACT",
      "VISUAL",
      "MEMORY",
      "IDEA",
      "ENERGY",
      "MOTION",
      "DESIGN",
      "FOCUS",
      "EMOTION",
      "DETAIL",
      "EXPERIENCE",
      "MEMORY",
    ][i],
    text: [
      "A strong voice creates presence, builds emotion, and keeps people listening.",
      "Every powerful idea becomes easier to remember when it is shaped into a story.",
      "We create experiences that capture attention quickly and keep people engaged.",
      "Good communication creates an emotional impact that stays with people.",
      "Visual language gives ideas a shape that people can understand instantly.",
      "The strongest experiences stay in the mind long after the moment is gone.",
      "Every memorable experience begins with a simple idea.",
      "Energy turns ordinary communication into something people want to experience.",
      "Movement creates rhythm and gives visual experiences another layer of attention.",
      "Thoughtful design makes complex ideas feel simple and natural.",
      "Focused communication removes noise and makes the important message stand out.",
      "Emotion transforms information into something people actually remember.",
      "Small details can completely change how an experience feels.",
      "Every element works together to create an experience worth remembering.",
      "The goal is simple: create something people remember.",
    ][i],
  }));

  const layouts = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-3",
    "col-span-2 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-2",
    "col-span-1 row-span-3",
    "col-span-2 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
  ];

  const [positions, setPositions] = useState(
    Array.from({ length: 15 }, (_, i) => i)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((current) => {
        const next = [...current];

        const a = Math.floor(Math.random() * next.length);
        let b = Math.floor(Math.random() * next.length);

        while (a === b) {
          b = Math.floor(Math.random() * next.length);
        }

        [next[a], next[b]] = [next[b], next[a]];

        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-[#3a0019] text-white"
      onMouseLeave={() => setActiveImage(null)}
    >
       

      <div className="absolute left-5 top-6 z-40 sm:left-10 sm:top-7 md:left-14">
        <p className="text-[7px] uppercase tracking-[0.45em] text-white/45 sm:text-[8px]">
          02 / Attention
        </p>
      </div>

      <div className="relative z-20 grid min-h-screen w-full auto-rows-[16vh] grid-cols-2 gap-[2px] sm:auto-rows-[25vh] sm:grid-cols-6">
        {positions.map((imageIndex, positionIndex) => {
          const item = images[imageIndex];

          return (
            <div
              key={positionIndex}
              className={`group relative cursor-pointer overflow-hidden bg-[#4b0826] ${layouts[positionIndex]}`}
              onMouseEnter={() => setActiveImage(imageIndex)}
              onClick={() =>
                setActiveImage((current) =>
                  current === imageIndex ? null : imageIndex
                )
              }
            >
              <AnimatePresence mode="sync">
                <motion.img
                  key={item.image}
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.8 }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-[#3a0019]/10 transition-all duration-500 group-hover:bg-transparent" />
            </div>
          );
        })}
      </div>

      {activeImage !== null && (
        <div
          className="fixed inset-0 z-[999] overflow-hidden bg-[#24000f]"
          onClick={() => setActiveImage(null)}
        >
          <button 
            onClick={(e) => { e.stopPropagation(); setActiveImage(null); }}
            className="absolute top-6 right-6 z-[1000] text-white/70 hover:text-white text-4xl font-light transition-colors"
          >
            ×
          </button>
          <img
            src={images[activeImage].image}
            alt={images[activeImage].title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#3a0019]/65" />

          <div className="absolute bottom-8 left-5 max-w-[520px] sm:bottom-10 sm:left-10 md:bottom-14 md:left-14">
            <p className="mb-3 text-[8px] uppercase tracking-[0.4em] text-[#efb4c9]/65">
              {images[activeImage].title}
            </p>

            <p className="text-xs leading-[1.8] tracking-wide text-white/80 sm:text-base">
              {images[activeImage].text}
            </p>
          </div>

          <div className="absolute bottom-6 right-5 text-[6px] uppercase tracking-[0.35em] text-white/35 sm:right-10">
            Tap to close
          </div>
        </div>
      )}
    </section>
  );
}

/* ======================================================
   YOUTUBE WORKS
====================================================== */

const youtubeWorks = [
  {
    id: "01",
    category: "VOICE",
    video: "D0LLwh6Wr_Y",
    span: "md:col-span-5",
    margin: "md:mt-0",
  },
  {
    id: "02",
    category: "VISUAL",
    video: "aXM2PvfkoOE",
    span: "md:col-span-4",
    margin: "md:mt-20",
  },
  {
    id: "03",
    category: "STORY",
    video: "qNiNd_taMT0",
    span: "md:col-span-3",
    margin: "md:mt-[-20px]",
  },
  {
    id: "04",
    category: "FILM",
    video: "qNiNd_taMT0",
    span: "md:col-span-4",
    margin: "md:mt-16",
  },
  {
    id: "05",
    category: "EXPERIENCE",
    video: "qNiNd_taMT0",
    span: "md:col-span-5",
    margin: "md:mt-[-30px]",
  },
];

function YouTubeWorksSection() {
  return (
    <section className="relative w-full overflow-hidden px-5 py-20 text-[#DF2085] sm:px-10 sm:py-24 md:px-16 lg:px-20">
      {/* BACKGROUND IMAGE */}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/voxium/3se.jpg')",
        }}
      />

      {/* SOFT OVERLAY */}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#f7e8ec]/70"
      />

      {/* CONTENT */}

      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* ANIMATED TITLE */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mb-14 flex flex-col justify-between gap-8 sm:mb-20 md:flex-row md:items-end"
        >
          <div className="overflow-hidden">
            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-4 text-[8px] uppercase tracking-[0.5em] text-[#62001d]/45 sm:mb-5 sm:text-[9px]"
            >
              Selected Works
            </motion.p>

            <div className="overflow-hidden">
              <motion.h2
                variants={{
                  hidden: {
                    opacity: 0,
                    y: "110%",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[16vw] font-black leading-[0.72] tracking-[-0.08em]"
              >
                Recent
              </motion.h2>
            </div>

            <div className="ml-[10%] mt-3 overflow-hidden sm:ml-[15%]">
              <motion.h3
                variants={{
                  hidden: {
                    opacity: 0,
                    y: "110%",
                    rotate: 4,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                  },
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-[var(--font-cormorant)] text-[14vw] italic leading-[0.7] tracking-[-0.05em] sm:text-[10vw] md:text-[7vw]"
              >
                screen
              </motion.h3>
            </div>
          </div>

          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                x: -100,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[300px] text-[10px] uppercase leading-[1.9] tracking-[0.18em] text-[#62001d]/50 sm:text-xs"
          >
            Stories in motion.
            <br />
            Voices with identity.
            <br />
            Visuals with purpose.
          </motion.p>
        </motion.div>

        {/* YOUTUBE GRID */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-6">
          {youtubeWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: false,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group ${work.span} ${work.margin}`}
            >
              <div className="relative aspect-video overflow-hidden bg-[#62001d]">
                <iframe
                  src={`https://www.youtube.com/embed/${work.video}`}
                  title={`YouTube Work ${work.id}`}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />

                <div className="pointer-events-none absolute inset-0 border border-[#62001d]/10" />
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-[#62001d]/15 pt-3">
                <span className="text-[8px] font-semibold tracking-[0.35em] sm:text-[9px]">
                  {work.id}
                </span>

                <span className="text-[7px] uppercase tracking-[0.35em] text-[#62001d]/50 sm:text-[8px]">
                  {work.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================================================
   SECTION SPACER
====================================================== */

function SectionSpacer() {
  const categories = [
    "COMMERCIAL VOICE",
    "INSPIRATIONAL VOICE OVER",
    "NEWS",
    "DUBBING & SERIES",
    "DOCUMENTARY",
  ];

  return (
    <div className="relative h-[1cm] w-full overflow-hidden bg-[#E887B7]">
      {/* IRREGULAR IMAGE EDGE */}

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/voxium/foot.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          clipPath:
            "polygon(0% 18%, 4% 10%, 8% 14%, 12% 8%, 16% 16%, 20% 11%, 24% 17%, 28% 9%, 32% 15%, 36% 11%, 40% 18%, 44% 10%, 48% 15%, 52% 9%, 56% 17%, 60% 11%, 64% 16%, 68% 8%, 72% 15%, 76% 10%, 80% 17%, 84% 9%, 88% 15%, 92% 11%, 96% 16%, 100% 9%, 100% 100%, 0% 100%)",
        }}
      />

      {/* MOVING CATEGORY TEXT */}

      <div className="absolute inset-0 z-10 flex items-center overflow-hidden">
        <div className="section-category-track">
          {[...categories, ...categories].map((category, index) => (
            <div
              key={`${category}-${index}`}
              className="flex shrink-0 items-center"
            >
              <span className="px-5 text-[7px] font-black uppercase tracking-[0.28em] text-[#62001d] sm:px-7 sm:text-[8px]">
                {category}
              </span>

              <span className="text-[6px] text-[#62001d]/55">
                ●
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SOFT BLEND */}

      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-[#E887B7]/20 via-transparent to-[#E887B7]/20" />

      <style jsx>{`
        .section-category-track {
          display: flex;
          width: max-content;
          align-items: center;
          animation: sectionCategoryMove 22s linear infinite;
        }

        @keyframes sectionCategoryMove {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .section-category-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

/* ======================================================
   MAIN PAGE
====================================================== */

export default function VoxiumPage() {
  return (
    <main
      className={`${inter.variable} ${cormorant.variable} min-h-screen w-full overflow-x-hidden`}
    >
      {/* 01 — HERO */}

      <VoxiumHero />

      <SectionSpacer />

      {/* 02 — AUDIO */}

      <AudioShowcase />

      <SectionSpacer />

      {/* 03 — ABOUT */}

      <AboutScrollSection />

      <SectionSpacer />

      {/* 04 — CINEMATIC */}

      <CinematicSection />

      <SectionSpacer />

      {/* 05 — GAME */}

      <GameAddicterSection />

      <SectionSpacer />

      {/* 06 — YOUTUBE */}

      <YouTubeWorksSection />


    </main>
  );
}