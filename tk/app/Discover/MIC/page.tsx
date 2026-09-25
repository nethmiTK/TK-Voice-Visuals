"use client";

import Link from "next/link";
import Image from "next/image";
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
              TK Voice Visuals
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
              className={`hero-wave hero-wave-${i % 7}`}
              style={{
                height: `${12 + Math.abs(Math.sin(i * 0.47)) * 55}px`,
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

        {/* WHATSAPP */}
        <a
          href="https://wa.me/94777858521"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#25D366]"
        >
          <FaWhatsapp className="text-[17px]" />
        </a>

        {/* FACEBOOK */}
        <a
          href="https://web.facebook.com/profile.php?id=61585810421141"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#1877F2]"
        >
          <FaFacebookF className="text-[15px]" />
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/nethmi-thalikoralage-5265032a0/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#0A66C2]"
        >
          <FaLinkedinIn className="text-[15px]" />
        </a>

      </div>

      {/* BOTTOM LABEL */}
      <div className="absolute bottom-6 left-6 z-20 sm:left-10 md:left-16">
        <p className="text-[8px] uppercase tracking-[0.35em] text-white/50 sm:text-[9px]">
          Voice / Visual / Story
        </p>
      </div>

     <style jsx>{`
  .hero-wave {
    display: block;
    width: 2px;
    border-radius: 999px;
    background: #c60046;
    transform-origin: center;
    animation-name: heroWave;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  .hero-wave-0 {
    animation-duration: 1.1s;
    animation-delay: 0s;
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
    <section
      id="pj8izd"
      className="relative min-h-[60vh] w-full overflow-hidden bg-[#f5e8eb]"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/voxium/2se.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />

        {/* ONLY ONE SOFT LAYER */}
        <div className="absolute inset-0 bg-[#f5e8eb]/20" />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}
      <div className="relative z-10 flex min-h-[60vh] w-full">
        {/* =======================================================
            LEFT IMAGE
        ======================================================== */}
        <div className="relative hidden w-[33%] shrink-0 md:block">
          <div className="left-image-wrap">
            <Image
              src="/voxium/left.jpg"
              alt="Voice visual"
              fill
              priority
              className="left-blended-image"
            />
          </div>
          {/* LEFT IMAGE + SMALL MESSAGE CARD */}
          <div className="relative hidden w-[27%] shrink-0 md:block">
            <div className="absolute inset-0 overflow-visible">

              {/* MAIN IMAGE */}
              <Image
                src="/voxium/left.jpg"
                alt="Voice visual"
                fill
                priority
                className="left-full-image"
              />

              {/* SMALL CARD BELOW IMAGE */}
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
          </div>
        </div>

        {/* =======================================================
            CENTER
        ======================================================== */}
        <div className="relative flex min-w-0 flex-1 flex-col justify-center px-6 py-16 sm:px-10 md:px-12 lg:px-16">
          {/* SMALL LABEL */}
          <p className="mb-4 text-[9px] uppercase tracking-[0.5em] text-[#62001d]/60">
            01 / Voice Identity
          </p>

          {/* MAIN TITLE */}
          <h2 className="text-[12vw] font-black leading-[0.78] tracking-[-0.07em] text-[#62001d] sm:text-[9vw] md:text-[7vw]">
            VISUAL
          </h2>

          <h2 className="ml-[12%] text-[12vw] font-black leading-[0.78] tracking-[-0.07em] text-[#62001d] sm:text-[9vw] md:text-[7vw]">
            THINK TO
          </h2>

          {/* =====================================================
              VOICE WHEEL
          ====================================================== */}
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

                      <span className="voice-wheel-dot">
                        ●
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* =====================================================
              FEATURED VOICE / CAR
          ====================================================== */}
          <div className="relative z-20 mt-6 max-w-[520px]">
            <FeaturedVoice />
          </div>
        </div>

        {/* =======================================================
            RIGHT CONTINUOUS VOICE STREAM
        ======================================================== */}
        <div className="relative hidden w-[4cm] shrink-0 overflow-hidden border-l border-[#62001d]/10 md:block">
          <div className="absolute inset-0 overflow-hidden">
            <div className="voice-stream">
              {/* SET 01 */}
              <div className="voice-stream-set">
                {voiceStreamLetters.map((letter, index) => (
                  <span
                    key={`first-${index}`}
                    className="select-none text-[42px] font-black leading-[0.8] text-[#62001d]/25"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </div>

              {/* SET 02
                  Exactly follows SET 01 */}
              <div className="voice-stream-set">
                {voiceStreamLetters.map((letter, index) => (
                  <span
                    key={`second-${index}`}
                    className="select-none text-[42px] font-black leading-[0.8] text-[#62001d]/25"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          ANIMATIONS + EFFECTS
      ========================================================== */}
      <style jsx>{`
        /* =======================================================
           LEFT IMAGE
           Background → Image emergence
        ======================================================== */

        .left-image-wrap {
          position: absolute;

          left: 0%;
          top: 0;

          width: 100%;
          height: 100%;

          overflow: hidden;

          background: transparent;
          border: none;
          outline: none;

          animation: leftImageReveal 1.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .left-blended-image {
          object-fit: cover;
          object-position: center;

          /*
            Keep the image itself clean.
            No dark box.
            No white box.
          */
          filter: saturate(0.92) contrast(0.96);

          transform: scale(1.06);

          /*
            Fade the edges into the existing background.
            This removes the obvious rectangular image shape.
          */
          -webkit-mask-image:
            linear-gradient(
              to right,
              transparent 0%,
              black 10%,
              black 90%,
              transparent 100%
            );

          mask-image:
            linear-gradient(
              to right,
              transparent 0%,
              black 10%,
              black 90%,
              transparent 100%
            );

          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;

          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;

          animation: leftImageScale 2.2s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }
        /* =======================================================
   SMALL BRAND MESSAGE CARD
======================================================= */

.brand-message-card {
  position: absolute;

  left: 8cm;
  top: calc(100% + 12cm);
    min-height: 158px; /* HEIGHT වැඩි කළා */


  width: 170px;

  padding: 10px;

  background: rgba(255, 255, 255, 0.72);

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  border: 1px solid rgba(98, 0, 29, 0.08);

  box-shadow: 0 15px 35px rgba(98, 0, 29, 0.08);

  z-index: 30;

  animation: brandCardReveal 1.2s
    cubic-bezier(0.22, 1, 0.36, 1)
    0.8s forwards;

  opacity: 0;
}


/* SMALL IMAGE ON TOP */

.brand-card-image {
  position: relative;

  width: 100%;
  height: 100px;

  overflow: hidden;
}


/* MESSAGE */

.brand-message-card p {
  margin: 9px 2px 3px;

  font-size: 8px;

  font-weight: 800;

  letter-spacing: 0.16em;

  line-height: 1.4;

  color: #62001d;

  text-transform: uppercase;
}


/* CARD ENTER ANIMATION */

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
        /*
          Image enters from the left and settles naturally.
        */
        @keyframes leftImageReveal {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /*
          Very subtle cinematic scale.
        */
        @keyframes leftImageScale {
          0% {
            transform: scale(1.12);
          }

          100% {
            transform: scale(1.06);
          }
        }


        /* =======================================================
           RIGHT SIDE
           CONTINUOUS VOICE VISUALS
        ======================================================== */

        .voice-stream {
          display: flex;
          flex-direction: column;

          width: max-content;
          height: max-content;

          animation: voiceMove 11s linear infinite;

          will-change: transform;
        }

        .voice-stream-set {
          display: flex;
          flex-direction: column;

          flex-shrink: 0;

          margin: 0;
          padding: 0;
        }

        .voice-stream span {
          display: block;

          height: 34px;

          margin: 0;
          padding: 0;

          line-height: 0.8;
        }

        @keyframes voiceMove {
          from {
            transform: translateY(0);
          }

          to {
            transform: translateY(-50%);
          }
        }


        /* =======================================================
           VOICE WHEEL
        ======================================================== */

        .voice-wheel {
          position: relative;

          width: 100%;

          overflow: hidden;

          white-space: nowrap;

          /*
            Slight fade on both sides.
            This makes the wheel feel like it enters/exits
            rather than appearing as a hard rectangular strip.
          */
          -webkit-mask-image:
            linear-gradient(
              to right,
              transparent 0%,
              black 8%,
              black 92%,
              transparent 100%
            );

          mask-image:
            linear-gradient(
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

          will-change: transform;
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

          text-transform: uppercase;
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


        /* =======================================================
           MOBILE
        ======================================================== */

        @media (max-width: 767px) {
          .voice-wheel-track {
            animation-duration: 14s;
          }
        }


        /* =======================================================
           ACCESSIBILITY
        ======================================================== */

        @media (prefers-reduced-motion: reduce) {
          .left-image-wrap,
          .left-blended-image,
          .voice-stream,
          .voice-wheel-track {
            animation: none;
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
            backgroundImage: "url('/voxium/hero.jpg')",
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
  const sectionRef = useRef<HTMLElement>(null);
  const mainVideoRef = useRef<HTMLVideoElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !mainVideoRef.current) return;

    const video = mainVideoRef.current;

    video.currentTime = 0;

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        try {
          video.muted = true;
          await video.play();
        } catch {
          // autoplay blocked
        }
      }
    };

    playVideo();
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#F4E7EB]"
    >
      <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-[58%_42%]">

        {/* =====================================================
            LEFT — FULL HEIGHT VIDEO
        ===================================================== */}
        <div className="relative min-h-[62vh] w-full overflow-hidden bg-[#2B0718] lg:min-h-screen">
          <video
            ref={mainVideoRef}
            src="/voxium/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Rose cinematic overlay */}
          <div className="absolute inset-0 bg-[#4A061F]/15 mix-blend-multiply" />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(20,0,10,0.18) 0%, rgba(74,6,31,0.03) 55%, rgba(244,231,235,0.08) 100%)",
            }}
          />

          {/* Video edge fade */}
          <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-r from-transparent to-[#F4E7EB]" />

          {/* Small label */}
          <div className="absolute left-5 top-5 z-10 sm:left-8 sm:top-8">
            <span className="text-[9px] font-medium uppercase tracking-[0.35em] text-white/75 sm:text-[10px]">
              TK / Motion Visuals
            </span>
          </div>

          {/* Bottom label */}
          <div className="absolute bottom-6 left-5 z-10 sm:bottom-8 sm:left-8">
            <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/75 sm:text-[10px]">
              <span>Voice</span>
              <span className="h-px w-6 bg-white/50" />
              <span>Visual</span>
              <span className="h-px w-6 bg-white/50" />
              <span>Story</span>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT — CONTENT CREATION
        ===================================================== */}
        <div className="relative flex min-h-[58vh] items-center overflow-hidden bg-[#F4E7EB] px-6 py-16 sm:px-10 md:px-14 lg:min-h-screen lg:px-[7vw]">

          {/* subtle rose shapes */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full bg-[#D98BA8]/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-[240px] w-[240px] rounded-full bg-[#8E3155]/10 blur-3xl" />

          <div className="relative z-10 w-full max-w-[620px]">

            {/* Number */}
            <div className="mb-8 flex items-center gap-4">
              <span className="text-[11px] font-medium tracking-[0.35em] text-[#8E3155]">
                02
              </span>

              <div className="h-px w-12 bg-[#8E3155]/40" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E3155]/70">
                Creative Direction
              </span>
            </div>

            {/* Main heading */}
            <h2
              className="font-[var(--font-cormorant)] text-[#4A061F]"
              style={{
                fontSize: "clamp(3.4rem, 7vw, 7rem)",
                lineHeight: 0.82,
                letterSpacing: "-0.045em",
              }}
            >
              Content
              <br />
              <span className="italic text-[#8E3155]">
                Creation.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-[500px] text-[14px] leading-[1.9] text-[#4A061F]/65 sm:text-[15px]">
              Ideas become stories when the right voice, visual language
              and creative direction come together. We create content
              designed to make brands visible, memorable and impossible
              to ignore.
            </p>

            {/* Divider */}
            <div className="my-9 h-px w-full max-w-[460px] bg-[#8E3155]/20" />

            {/* Content categories */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3">

              <div>
                <span className="mb-2 block text-[9px] uppercase tracking-[0.25em] text-[#8E3155]/60">
                  01
                </span>

                <h3 className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#4A061F]">
                  Social Content
                </h3>
              </div>

              <div>
                <span className="mb-2 block text-[9px] uppercase tracking-[0.25em] text-[#8E3155]/60">
                  02
                </span>

                <h3 className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#4A061F]">
                  Brand Stories
                </h3>
              </div>

              <div>
                <span className="mb-2 block text-[9px] uppercase tracking-[0.25em] text-[#8E3155]/60">
                  03
                </span>

                <h3 className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#4A061F]">
                  Visual Media
                </h3>
              </div>

              <div>
                <span className="mb-2 block text-[9px] uppercase tracking-[0.25em] text-[#8E3155]/60">
                  04
                </span>

                <h3 className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#4A061F]">
                  Reels
                </h3>
              </div>

              <div>
                <span className="mb-2 block text-[9px] uppercase tracking-[0.25em] text-[#8E3155]/60">
                  05
                </span>

                <h3 className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#4A061F]">
                  Campaigns
                </h3>
              </div>

              <div>
                <span className="mb-2 block text-[9px] uppercase tracking-[0.25em] text-[#8E3155]/60">
                  06
                </span>

                <h3 className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#4A061F]">
                  Direction
                </h3>
              </div>

            </div>

            {/* Bottom statement */}
            <div className="mt-12">
              <p className="font-[var(--font-cormorant)] text-[22px] italic leading-tight text-[#8E3155] sm:text-[25px]">
                Your idea deserves
                <br />
                an audience.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
 

// ======================================================
// GAME ADDICTER
// ======================================================

function GameAddicterSection() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const images = [
    {
      image: "/voxium/cards/1.jpg",
      title: "VOICE",
      text: "A strong voice creates presence, builds emotion, and keeps people listening.",
    },
    {
      image: "/voxium/cards/2.jpg",
      title: "STORY",
      text: "Every powerful idea becomes easier to remember when it is shaped into a story.",
    },
    {
      image: "/voxium/cards/3.jpg",
      title: "ATTENTION",
      text: "We create experiences that capture attention quickly and keep people engaged.",
    },
    {
      image: "/voxium/cards/4.jpg",
      title: "IMPACT",
      text: "Good communication creates an emotional impact that stays with people.",
    },
    {
      image: "/voxium/cards/5.jpg",
      title: "VISUAL",
      text: "Visual language gives ideas a shape that people can understand instantly.",
    },
    {
      image: "/voxium/cards/6.jpg",
      title: "MEMORY",
      text: "The strongest experiences stay in the mind long after the moment is gone.",
    },
    {
      image: "/voxium/cards/7.jpg",
      title: "IDEA",
      text: "Every memorable experience begins with a simple idea.",
    },
    {
      image: "/voxium/cards/8.jpg",
      title: "ENERGY",
      text: "Energy turns ordinary communication into something people want to experience.",
    },
    {
      image: "/voxium/cards/9.jpg",
      title: "MOTION",
      text: "Movement creates rhythm and gives visual experiences another layer of attention.",
    },
    {
      image: "/voxium/cards/10.jpg",
      title: "DESIGN",
      text: "Thoughtful design makes complex ideas feel simple and natural.",
    },
    {
      image: "/voxium/cards/11.jpg",
      title: "FOCUS",
      text: "Focused communication removes noise and makes the important message stand out.",
    },
    {
      image: "/voxium/cards/12.jpg",
      title: "EMOTION",
      text: "Emotion transforms information into something people actually remember.",
    },
    {
      image: "/voxium/cards/13.jpg",
      title: "DETAIL",
      text: "Small details can completely change how an experience feels.",
    },
    {
      image: "/voxium/cards/14.jpg",
      title: "EXPERIENCE",
      text: "Every element works together to create an experience worth remembering.",
    },
    {
      image: "/voxium/cards/15.jpg",
      title: "MEMORY",
      text: "The goal is simple: create something people remember.",
    },
  ];

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

  // Images change position every 3 seconds.
  // The boxes/layout NEVER change.
  const [imagePositions, setImagePositions] = useState<number[]>(
    Array.from({ length: 15 }, (_, index) => index)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setImagePositions((current) => {
        const next = [...current];

        const first = Math.floor(Math.random() * next.length);

        let second = Math.floor(Math.random() * next.length);

        while (second === first) {
          second = Math.floor(Math.random() * next.length);
        }

        [next[first], next[second]] = [next[second], next[first]];

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
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#3a0019]" />

      {/* CENTER TITLE */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 text-center mix-blend-screen">
        <h2 className="font-serif text-[8vw] italic leading-[0.7] tracking-[-0.07em] text-white/85">
          GAME
        </h2>

        <h2 className="mt-2 text-[5vw] font-black leading-[0.75] tracking-[-0.08em] text-white/85">
          ADDICTER
        </h2>
      </div>

      {/* TOP LABEL */}
      <div className="absolute left-6 top-7 z-40 sm:left-10 md:left-14">
        <p className="text-[8px] uppercase tracking-[0.5em] text-white/45">
          02 / Attention
        </p>
      </div>

      {/* IMAGE GRID */}
      <div className="relative z-20 grid min-h-screen w-full auto-rows-[18vh] grid-cols-4 gap-[3px] sm:grid-cols-6 sm:auto-rows-[25vh]">
        {imagePositions.map((imageIndex, positionIndex) => {
          const item = images[imageIndex];

          return (
            <div
              key={positionIndex}
              className={`group relative cursor-pointer overflow-hidden bg-[#4b0826] ${layouts[positionIndex]}`}
              onMouseEnter={() => setActiveImage(imageIndex)}
            >
              <AnimatePresence mode="sync">
                <motion.img
                  key={item.image}
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{
                    opacity: 0,
                    scale: 1.06,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                />
              </AnimatePresence>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-[#3a0019]/10 transition-all duration-500 group-hover:bg-transparent" />

              {/* TITLE */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#24000f]/80 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-[7px] uppercase tracking-[0.3em] text-white/80">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* FULLSCREEN ACTIVE IMAGE */}
      {activeImage !== null && (
        <div className="fixed inset-0 z-[999] overflow-hidden bg-[#24000f]">
          <img
            src={images[activeImage].image}
            alt={images[activeImage].title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#3a0019]/65" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#24000f] via-transparent to-[#3a0019]/20" />

          <div className="absolute left-6 top-7 sm:left-10 md:left-14">
            <p className="text-[8px] uppercase tracking-[0.5em] text-white/50">
              02 / {images[activeImage].title}
            </p>
          </div>

          <div className="absolute bottom-10 left-6 max-w-[520px] sm:left-10 md:bottom-14 md:left-14">
            <p className="mb-3 text-[9px] uppercase tracking-[0.4em] text-[#efb4c9]/65">
              {images[activeImage].title}
            </p>

            <p className="text-sm leading-[1.8] tracking-wide text-white/80 sm:text-base">
              {images[activeImage].text}
            </p>
          </div>

          <div className="absolute bottom-8 right-6 text-[7px] uppercase tracking-[0.35em] text-white/35 sm:right-10">
            Move cursor away
          </div>
        </div>
      )}
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
