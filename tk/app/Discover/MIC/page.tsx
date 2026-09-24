"use client";

import Link from "next/link";
import Image from "next/image";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FeaturedVoice from "./FeaturedVoice";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  style: ["normal", "italic"],
});

// ======================================================
// HERO
// ======================================================

const heroTracks = [
  {
    title: "Voice Identity",
    category: "VOICE",
    src: "/voxium/voice1.mp3",
  },
  {
    title: "Visual Story",
    category: "VISUAL",
    src: "/voxium/voice2.mp3",
  },
  {
    title: "Brand Experience",
    category: "STORY",
    src: "/voxium/voice3.mp3",
  },
];

function VoxiumHero() {
  return (
    <section
      className={`${inter.variable} relative min-h-screen w-full overflow-hidden bg-black`}
    >
      {/* BACKGROUND */}
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

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="max-w-[800px]">
            <p
              className="mb-6 text-[10px] font-medium uppercase tracking-[0.42em] text-white/80 sm:text-xs"
            >
              Sri Lankan / Research Voice visuals Artist
            </p>

            <h1
              className="font-[var(--font-inter)] text-[17vw] font-black leading-[0.78] tracking-[-0.075em] text-white sm:text-[14vw] md:text-[11vw] lg:text-[9.5vw]"
            >
              VOXIUM
            </h1>

            <p className="mt-7 max-w-[530px] text-xs uppercase leading-[1.8] tracking-[0.28em] text-white/75 sm:text-sm">
              Voice that makes you listen.
              <br />
              Visuals that make you stay.
            </p>
          </div>
        </div>
      </div>

      {/* WAVEFORM */}
      <div className="pointer-events-none absolute bottom-[14%] left-0 z-10 w-full overflow-hidden">
        <div className="flex h-[90px] items-center justify-center gap-[3px] opacity-90">
          {Array.from({ length: 95 }).map((_, i) => (
            <span
              key={i}
              className="block w-[2px] rounded-full bg-[#c60046]"
              style={{
                height: `${12 + Math.abs(Math.sin(i * 0.47)) * 55}px`,
                animation: `heroWave ${
                  1.1 + (i % 7) * 0.08
                }s ease-in-out infinite alternate`,
                animationDelay: `${i * -0.035}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* MOVING PULSE LINES */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-[8] h-[32%] w-full overflow-hidden opacity-50">
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

      {/* SOCIAL ICONS */}
      <div className="fixed right-5 top-1/2 z-[50] flex -translate-y-1/2 flex-col gap-3 sm:right-7">
        <a
          href="https://wa.me/94777858521"
          target="_blank"
          rel="noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-[11px] text-white backdrop-blur-md transition hover:bg-[#c60046]"
        >
          WA
        </a>

        <a
          href="https://web.facebook.com/profile.php?id=61585810421141"
          target="_blank"
          rel="noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-[11px] text-white backdrop-blur-md transition hover:bg-[#c60046]"
        >
          FB
        </a>

        <a
          href="https://www.linkedin.com/in/nethmi-thalikoralage-5265032a0/"
          target="_blank"
          rel="noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-[11px] text-white backdrop-blur-md transition hover:bg-[#c60046]"
        >
          IN
        </a>
      </div>

      {/* BOTTOM LABEL */}
      <div className="absolute bottom-6 left-6 z-20 sm:left-10 md:left-16">
        <p className="text-[8px] uppercase tracking-[0.35em] text-white/50 sm:text-[9px]">
          Voice / Visual / Story
        </p>
      </div>

      <style jsx>{`
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
      `}</style>
    </section>
  );
}

// ======================================================
// AUDIO SHOWCASE
// ======================================================

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
  " ",
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

function AudioShowcase() {
  return (
    <section
      id="pj8izd"
      className="relative min-h-[60vh] w-full overflow-hidden bg-[#f5e8eb]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/voxium/2se.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.13]"
        />
      </div>

      <div className="relative z-10 flex min-h-[60vh] w-full flex-col md:flex-row">
        {/* LEFT IMAGE */}
        <div className="relative hidden w-[25%] overflow-hidden md:block">
          <Image
            src="/voxium/left.jpg"
            alt="Voice visual"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#62001d]/10" />
        </div>

        {/* CENTER */}
        <div className="flex w-full flex-1 flex-col justify-center px-6 py-16 sm:px-10 md:w-[50%] md:px-12 lg:px-16">
          <p className="mb-4 text-[9px] uppercase tracking-[0.5em] text-[#62001d]/60">
            01 / Voice Identity
          </p>

          <h2 className="text-[12vw] font-black leading-[0.78] tracking-[-0.07em] text-[#62001d] sm:text-[9vw] md:text-[7vw]">
            VISUAL
          </h2>

          <h2 className="ml-[12%] text-[12vw] font-black leading-[0.78] tracking-[-0.07em] text-[#62001d] sm:text-[9vw] md:text-[7vw]">
            THINK TO
          </h2>

          <div className="mt-10 max-w-[520px]">
            <FeaturedVoice />
          </div>
        </div>

        {/* RIGHT VOICE STREAM */}
        <div className="relative hidden w-[4cm] shrink-0 overflow-hidden border-l border-[#62001d]/10 md:block">
          <div className="absolute inset-0 flex items-center">
            <div className="voice-stream flex whitespace-nowrap">
              {[0, 1].map((set) => (
                <div key={set} className="flex flex-col">
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
        .voice-stream {
          animation: voiceMove 14s linear infinite;
        }

        @keyframes voiceMove {
          0% {
            transform: translateY(0);
          }

          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </section>
  );
}

// ======================================================
// ABOUT SCROLL SECTION
// ======================================================

const aboutSlides = [
  {
    number: "01",
    label: "ABOUT",
    title: "Voice & Visuals",
    text: `People are naturally drawn to what they hear and what they see. In a world where attention is becoming harder to capture, ordinary content is no longer enough. The next step is creating content that makes people stop, listen, watch, and remember.`,
    secondText: `That’s where powerful voice and captivating visuals come together — turning simple ideas into experiences that people can connect with.`,
    highlight: "Addictive Voice. Captivating Visuals.",
    footer: "Content that stays with you.",
  },

  {
    number: "02",
    label: "WHY CHOOSE US",
    title: "Why Choose Us",
    text: `Because content should do more than simply exist. It should create a feeling, build attention, and leave something behind in the mind of the audience.`,
    secondText: `We combine voice, visuals, editing, storytelling and digital thinking into one connected creative direction — so every piece of content feels intentional.`,
    highlight: "One idea. One identity. One experience.",
    footer: "Built to be noticed.",
  },

  {
    number: "03",
    label: "OUR APPROACH",
    title: "Built to Be Remembered",
    text: `Every project starts with a simple question: how can this idea become something people actually want to experience?`,
    secondText: `From the first word to the final frame, we focus on rhythm, emotion, visual identity and clarity — creating work that feels alive instead of simply looking finished.`,
    highlight: "Voice creates attention. Visuals create memory.",
    footer: "Ideas into experiences.",
  },
];

function AboutScrollSection() {
  return (
    <section className="relative overflow-hidden bg-[#4A061F]">

      {/* =====================================================
          ABOUT TITLE
          DARK ROSE BACKGROUND
          TRACKBG ONLY INSIDE LETTERS
      ===================================================== */}
      <div
        className="
          relative
          min-h-[80vh]
          flex
          items-center
          justify-center
          overflow-hidden
          bg-[#4A061F]
        "
      >

        {/* ABOUT LETTERS */}
        <div
          className="
            relative
            z-10
            text-[24vw]
            md:text-[22vw]
            lg:text-[20vw]
            font-black
            tracking-[-0.09em]
            leading-none
            select-none
          "
          style={{
            color: "transparent",
            backgroundImage: "url('/voxium/trackbg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ABOUT
        </div>

      </div>


      {/* =====================================================
          NORMAL PAGE SCROLL
          NO STICKY
          NO SCREEN LOCK
      ===================================================== */}
      <div className="bg-[#4A061F] px-5 md:px-10 lg:px-20">

        {/* =================================================
            CARD 01 — LEFT
        ================================================= */}
        <div
          className="
            min-h-screen
            flex
            items-center
            justify-start
            py-24
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              x: -180,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.45,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              w-full
              md:w-[68%]
              lg:w-[55%]
              max-w-[800px]
            "
          >

            <div
              className="
                relative
                border-l-[3px]
                border-[#E7A0B8]
                pl-7
                md:pl-10
                lg:pl-14
              "
            >

              <div className="mb-6 flex items-center gap-4">

                <span
                  className="
                    text-xs
                    tracking-[0.35em]
                    font-bold
                    text-[#E7A0B8]
                  "
                >
                  01
                </span>

                <span
                  className="
                    text-xs
                    tracking-[0.3em]
                    font-bold
                    text-white/60
                  "
                >
                  ABOUT
                </span>

              </div>

              <h3
                className="
                  text-4xl
                  md:text-5xl
                  lg:text-7xl
                  font-black
                  tracking-[-0.05em]
                  text-white
                  mb-8
                "
              >
                Voice & Visuals
              </h3>

              <p
                className="
                  text-base
                  md:text-lg
                  lg:text-xl
                  leading-[1.85]
                  text-white/85
                  font-medium
                "
              >
                People are naturally drawn to what they hear and what they
                see. In a world where attention is becoming harder to capture,
                ordinary content is no longer enough. The next step is
                creating content that makes people stop, listen, watch, and
                remember.
              </p>

              <p
                className="
                  mt-6
                  text-base
                  md:text-lg
                  lg:text-xl
                  leading-[1.85]
                  text-white/85
                  font-medium
                "
              >
                That’s where powerful voice and captivating visuals come
                together — turning simple ideas into experiences that people
                can connect with.
              </p>

              <div className="mt-8">

                <div
                  className="
                    text-2xl
                    md:text-3xl
                    font-black
                    text-white
                  "
                >
                  <span className="text-[#E7A0B8]">
                    Addictive Voice.
                  </span>
                  <br />
                  Captivating Visuals.
                </div>

                <p
                  className="
                    mt-3
                    text-xs
                    md:text-sm
                    uppercase
                    tracking-[0.15em]
                    text-white/45
                    font-bold
                  "
                >
                  Content that stays with you.
                </p>

              </div>

            </div>

          </motion.div>

        </div>


        {/* =================================================
            CARD 02 — RIGHT
        ================================================= */}
        <div
          className="
            min-h-screen
            flex
            items-center
            justify-end
            py-24
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              x: 180,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.45,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              w-full
              md:w-[68%]
              lg:w-[55%]
              max-w-[800px]
            "
          >

            <div
              className="
                relative
                border-r-[3px]
                border-[#E7A0B8]
                pr-7
                md:pr-10
                lg:pr-14
                text-right
              "
            >

              <div
                className="
                  mb-6
                  flex
                  items-center
                  justify-end
                  gap-4
                "
              >

                <span
                  className="
                    text-xs
                    tracking-[0.3em]
                    font-bold
                    text-white/60
                  "
                >
                  WHY CHOOSE US
                </span>

                <span
                  className="
                    text-xs
                    tracking-[0.35em]
                    font-bold
                    text-[#E7A0B8]
                  "
                >
                  02
                </span>

              </div>

              <h3
                className="
                  text-4xl
                  md:text-5xl
                  lg:text-7xl
                  font-black
                  tracking-[-0.05em]
                  text-white
                  mb-8
                "
              >
                Why Choose Us
              </h3>

              <p
                className="
                  text-base
                  md:text-lg
                  lg:text-xl
                  leading-[1.85]
                  text-white/85
                  font-medium
                "
              >
                Every brand has something worth saying. Our job is to make
                sure people actually stop and listen.
              </p>

              <p
                className="
                  mt-6
                  text-base
                  md:text-lg
                  lg:text-xl
                  leading-[1.85]
                  text-white/85
                  font-medium
                "
              >
                We combine voice, visuals, storytelling and technology to
                create content that feels clear, memorable and emotionally
                connected.
              </p>

              <div className="mt-8">

                <div
                  className="
                    text-2xl
                    md:text-3xl
                    font-black
                    text-white
                  "
                >
                  Hear it.
                  <br />
                  <span className="text-[#E7A0B8]">
                    See it.
                  </span>
                  <br />
                  Remember it.
                </div>

              </div>

            </div>

          </motion.div>

        </div>


        {/* =================================================
            CARD 03 — CENTER
        ================================================= */}
        <div
          className="
            min-h-screen
            flex
            items-center
            justify-center
            py-24
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 160,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.45,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              w-full
              md:w-[68%]
              lg:w-[55%]
              max-w-[800px]
              text-center
            "
          >

            <div
              className="
                relative
                border-t-[3px]
                border-[#E7A0B8]
                pt-8
              "
            >

              <div
                className="
                  mb-6
                  flex
                  items-center
                  justify-center
                  gap-4
                "
              >

                <span
                  className="
                    text-xs
                    tracking-[0.35em]
                    font-bold
                    text-[#E7A0B8]
                  "
                >
                  03
                </span>

                <span
                  className="
                    text-xs
                    tracking-[0.3em]
                    font-bold
                    text-white/60
                  "
                >
                  OUR APPROACH
                </span>

              </div>

              <h3
                className="
                  text-4xl
                  md:text-5xl
                  lg:text-7xl
                  font-black
                  tracking-[-0.05em]
                  text-white
                  mb-8
                "
              >
                Built to Be
                <br />
                <span className="text-[#E7A0B8]">
                  Remembered.
                </span>
              </h3>

              <p
                className="
                  text-base
                  md:text-lg
                  lg:text-xl
                  leading-[1.85]
                  text-white/85
                  font-medium
                "
              >
                We don’t simply create content. We build experiences around
                ideas — combining sound, visuals and storytelling to give
                every message its own identity.
              </p>

              <div className="mt-8">

                <span
                  className="
                    inline-block
                    px-6
                    py-3
                    border
                    border-white/25
                    text-xs
                    md:text-sm
                    tracking-[0.15em]
                    uppercase
                    text-white/65
                    font-bold
                  "
                >
                  Voice × Visual × Story
                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
// ======================================================
// CINEMATIC VIDEO SECTION
// ======================================================

function CinematicSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#62001d] text-white">
      {/* MAIN VIDEO */}
      <div className="absolute inset-0">
        <video
          src="/voxium/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-[#62001d]/45" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
        <div className="grid w-full max-w-[1300px] gap-16 lg:grid-cols-2 lg:items-center">
          {/* LEFT */}
          <div>
            <p className="mb-7 text-[9px] uppercase tracking-[0.5em] text-white/55">
              Sound / Emotion / Identity
            </p>

            <h2 className="font-[var(--font-inter)] text-[17vw] font-black leading-[0.75] tracking-[-0.08em] sm:text-[12vw] lg:text-[8vw]">
              VOICE
            </h2>

            <h2 className="ml-[14%] font-[var(--font-cormorant)] text-[16vw] italic leading-[0.7] tracking-[-0.05em] text-white/85 sm:text-[11vw] lg:text-[7.5vw]">
              and
            </h2>

            <h2 className="font-[var(--font-inter)] text-[17vw] font-black leading-[0.75] tracking-[-0.08em] sm:text-[12vw] lg:text-[8vw]">
              VISUAL
            </h2>
          </div>

          {/* RIGHT */}
          <div className="relative flex min-h-[520px] items-center justify-center">
            <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-right lg:block">
              <p className="font-[var(--font-inter)] text-[5vw] font-black leading-[0.8] tracking-[-0.06em] text-white/90">
                SOUND
              </p>

              <p className="font-[var(--font-cormorant)] text-[6vw] italic leading-[0.75] text-white/70">
                becomes
              </p>

              <p className="font-[var(--font-inter)] text-[5vw] font-black leading-[0.8] tracking-[-0.06em] text-white/90">
                STORY
              </p>
            </div>

            {/* CIRCLE VIDEO */}
            <div className="relative z-20 h-[250px] w-[250px] overflow-hidden rounded-full border border-white/30 sm:h-[330px] sm:w-[330px]">
              <video
                src="/voxium/V2.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#62001d]/10" />
            </div>

            {/* JOKE */}
            <div className="absolute bottom-0 left-0 z-30">
              <p className="jokeReveal text-[9px] uppercase tracking-[0.5em] text-white/60">
                IS THAT JOKE
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .jokeReveal {
          animation: jokeReveal 3s ease-in-out infinite alternate;
        }

        @keyframes jokeReveal {
          0% {
            opacity: 0.15;
            transform: translateY(20px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

// ======================================================
// GAME ADDICTER
// ======================================================

function GameAddicterSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#62001d] text-white">
      <div className="absolute left-[8%] top-[18%] h-[180px] w-[180px] rounded-full border border-white/10" />

      <div className="absolute right-[10%] top-[25%] h-[90px] w-[90px] rotate-45 border border-white/10" />

      <div className="absolute bottom-[15%] left-[30%] h-[1px] w-[40%] bg-white/10" />

      <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20">
        <p className="mb-10 text-[9px] uppercase tracking-[0.5em] text-white/45">
          02 / Attention
        </p>

        <h2
          className={`${cormorant.variable} font-[var(--font-cormorant)] text-[22vw] italic leading-[0.68] tracking-[-0.07em] sm:text-[17vw] md:text-[14vw]`}
        >
          GAME
        </h2>

        <h2 className="ml-[15%] text-[18vw] font-black leading-[0.72] tracking-[-0.08em] sm:text-[14vw] md:text-[11vw]">
          ADDICTER
        </h2>

        <p className="mt-12 max-w-[500px] text-xs uppercase leading-[1.9] tracking-[0.25em] text-white/55">
          We create voice and visual experiences designed to hold attention
          longer, communicate clearly, and stay in the mind.
        </p>
      </div>
    </section>
  );
}

// ======================================================
// YOUTUBE WORKS
// ======================================================

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
    <section className="relative w-full overflow-hidden bg-[#f7e8ec] px-6 py-24 text-[#62001d] sm:px-10 md:px-16 lg:px-20">
      <div className="mx-auto max-w-[1500px]">
        {/* HEADER */}
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.5em] text-[#62001d]/45">
              03 / Selected Works
            </p>

            <h2 className="text-[15vw] font-black leading-[0.72] tracking-[-0.08em] sm:text-[11vw] md:text-[8vw]">
              5 YOUTUBE
            </h2>

            <h3 className="ml-[15%] mt-3 font-[var(--font-cormorant)] text-[13vw] italic leading-[0.7] tracking-[-0.05em] sm:text-[10vw] md:text-[7vw]">
              works
            </h3>
          </div>

          <p className="max-w-[300px] text-xs uppercase leading-[1.9] tracking-[0.22em] text-[#62001d]/50">
            Stories in motion.
            <br />
            Voices with identity.
            <br />
            Visuals with purpose.
          </p>
        </div>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-6">
          {youtubeWorks.map((work) => (
            <div
              key={work.id}
              className={`group ${work.span} ${work.margin}`}
            >
              <div className="relative aspect-video overflow-hidden bg-black">
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
                <span className="text-[9px] font-semibold tracking-[0.35em]">
                  {work.id}
                </span>

                <span className="text-[8px] uppercase tracking-[0.35em] text-[#62001d]/50">
                  {work.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================================================
// MAIN PAGE
// ======================================================

export default function VoxiumPage() {
  return (
    <main
      className={`${inter.variable} ${cormorant.variable} min-h-screen w-full overflow-x-hidden`}
    >
      {/* 01 — HERO */}
      <VoxiumHero />

      {/* AUDIO SHOWCASE */}
      <AudioShowcase />

      {/* 02 — ABOUT
          ONE SECTION / 3 SCROLL STATES */}
      <AboutScrollSection />

      {/* CINEMATIC VIDEO */}
      <CinematicSection />

      {/* 03 — GAME ADDICTER */}
      <GameAddicterSection />

      {/* 04 — YOUTUBE WORKS */}
      <YouTubeWorksSection />
    </main>
  );
}
