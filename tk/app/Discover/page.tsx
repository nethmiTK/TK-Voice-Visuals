"use client";

import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";
import ScrollFillText from "../components/ScrollFillText";
import { motion } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const hubs = [
  {
    title: "BUSINESS IT SOLUTION",
    description: "Premium technical architectures.",
    items: ["PORTFOLIO WEBSITE", "WEB APP", "MOBILE APP", "DESKTOP APPLICATION"],
    href: "/Discover/RaRu",
  },
  {
    title: "VOICE OVER",
    description: "The sonics of authority.",
    items: ["Commercial Voice Over", "Documentary Narration", "News / Announcement Voice Over", "YouTube Series Voice Over"],
    href: "/Discover/Voxium",
  },
  {
    title: "VIDEO EDITING",
    description: "Cinematic storytelling for high-impact brand presence.",
    items: ["Commercial / Ad Video", "Podcast Video Editing", "Documentary Editing", "Social Media Video Editing"],
    href: "/Discover/eyeCatching",
  },
  {
    title: "CORE SERVICES",
    description: "Engineered growth for visionaries.",
    items: [],
    accent: true,
    href: "/Solutions",
  },
];

const whyChooseSteps = [
  {
    step: "01",
    label: "Think",
    description: "We start with strategy — understanding your brand, audience, and goals at a deeper level.",
    color: "#b10e6b",
    glow: "rgba(177,14,107,0.45)",
  },
  {
    step: "02",
    label: "Visualize",
    description: "Every concept is mapped into a visual blueprint before a single pixel is crafted.",
    color: "#890051",
    glow: "rgba(137,0,81,0.45)",
  },
  {
    step: "03",
    label: "Create",
    description: "Our team brings it to life — design, voice, video, and code — with elite precision.",
    color: "#b10e6b",
    glow: "rgba(177,14,107,0.45)",
  },
  {
    step: "04",
    label: "Reality",
    description: "We deliver results that transform your vision into a powerful, market-ready presence.",
    color: "#890051",
    glow: "rgba(137,0,81,0.45)",
  },
];

export default function DiscoverPage({ isEmbedded = false }: { isEmbedded?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinSectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // We animate the circles "filling" up. They start invisible and scale 0.
    // The timeline is scrubbed by ScrollTrigger over the pinned area.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinSectionRef.current,
        start: "top top",
        end: "+=300%", // The user has to scroll 300% of viewport height to complete
        pin: true,
        scrub: 1, // Smooth scrubbing
        anticipatePin: 1,
      }
    });

    // For each circle and plus sign, we animate them sequentially
    const items = gsap.utils.toArray(".timeline-item");
    
    items.forEach((item, i) => {
      // The circle itself wrapper
      const circleWrap = (item as HTMLElement).querySelector(".circle-wrap");
      // The fill overlay (starts from bottom)
      const fillOverlay = (item as HTMLElement).querySelector(".circle-fill");
      // Text inside
      const textWrap = (item as HTMLElement).querySelector(".text-wrap");
      
      const isCircle = (item as HTMLElement).classList.contains("step-circle");
      
      if (isCircle) {
        tl.fromTo(circleWrap, 
          { opacity: 0, scale: 0.8 }, 
          { opacity: 1, scale: 1, duration: 0.5 }
        )
        .fromTo(fillOverlay, 
          { clipPath: "inset(100% 0 0 0)" }, // start fully clipped at bottom
          { clipPath: "inset(0% 0 0 0)", duration: 1, ease: "power1.inOut" } // fill up
        )
        .fromTo(textWrap, 
          { opacity: 0, y: 10 }, 
          { opacity: 1, y: 0, duration: 0.5 },
          "<0.5" // start fading text in halfway through fill
        );
      } else {
        // It's a plus sign
        tl.fromTo(item, 
          { opacity: 0, scale: 0 }, 
          { opacity: 1, scale: 1, duration: 0.5 }
        );
      }
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className={`${inter.className} ${isEmbedded ? "bg-transparent text-white" : "bg-[#fff8f8] text-[#25181d]"}`}>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-40 md:px-8">
        <div className="max-w-4xl">
          <span className="mb-5 block text-xs font-bold uppercase tracking-[0.35em] text-[#890051]">Premium Solutions</span>
          <ScrollFillText
            as="h1"
            className="text-[clamp(3rem,8vw,5rem)] font-black leading-[1.02] tracking-[-0.05em]"
            wrapperClassName="mb-7"
            fillDirection="top"
            fillEnd={0.82}
          >
            The Art of TK Voice &amp; Visuals.
          </ScrollFillText>
          <ScrollFillText
            as="p"
            className="max-w-2xl text-lg leading-8"
            wrapperClassName="mt-7"
            fillDirection="left"
            fillEnd={0.72}
          >
            We bridge the gap between high-fashion aesthetics and technical precision. Four specialized hubs are designed to elevate your brand&apos;s authority in the digital ecosystem.
          </ScrollFillText>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/Consultancy" className="rounded-full bg-gradient-to-r from-[#890051] to-[#b10e6b] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
              Work with us
            </Link>
            <Link href="/Discover/RaRu" className="rounded-full border border-[#890051]/15 bg-white px-6 py-3 text-sm font-semibold text-[#890051] transition-colors hover:bg-[#fff0f3]">
              Explore TK
            </Link>
          </div>
        </div>
      </section>

      {/* Service Hubs */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          {hubs.map((hub, index) => (
            <motion.div
              key={hub.title}
              initial={index === 3 ? { opacity: 0, x: -80 } : { opacity: 0, y: 30 }}
              whileInView={index === 3 ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              className={`lg:col-span-${index === 0 || index === 3 ? "7" : "5"} ${index === 3 ? "lg:col-span-5" : ""}`}
            >
              <motion.article
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 + index * 0.5, ease: "easeInOut" }}
                className={`h-full rounded-[24px] shadow-[0_18px_50px_rgba(177,14,107,0.05)] transition-transform hover:-translate-y-1 ${hub.accent
                    ? "bg-gradient-to-br from-[#b10e6b] to-[#890051] text-white"
                    : index === 0 || index === 3
                      ? "bg-white"
                      : "bg-[#ffe8ee]"
                  }`}
              >
                <Link href={hub.href} className={`block h-full w-full p-8 cursor-pointer ${hub.accent && hub.items.length === 0 ? "flex flex-col items-center justify-center text-center" : ""}`}>
                  {hub.accent && hub.items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center space-y-4 py-8">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="17" x2="12" y2="22"></line>
                          <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 11.2V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3v5.2a2 2 0 0 1-1.11 1.35l-1.78.9A2 2 0 0 0 5 15.24Z"></path>
                        </svg>
                      </div>
                      <h2 className={`text-4xl md:text-5xl font-bold tracking-tight text-white ${playfair.className}`}>{hub.title}</h2>
                      <p className="text-white/80 max-w-xs">{hub.description}</p>
                    </div>
                  ) : (
                    <>
                      <div className="mb-8 flex items-start justify-between gap-4">
                        <div>
                          {hub.accent ? (
                            <h2 className="text-3xl font-bold tracking-tight text-white">{hub.title}</h2>
                          ) : (
                            <ScrollFillText
                              as="h2"
                              className="text-3xl font-bold tracking-tight"
                              fillDirection="left"
                              fillEnd={0.7}
                            >
                              {hub.title}
                            </ScrollFillText>
                          )}
                          <p className={`mt-2 ${hub.accent ? "text-white/80" : "text-[#574048]"}`}>{hub.description}</p>
                        </div>
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${hub.accent ? "bg-white/20 text-white" : "bg-[#890051]/10 text-[#890051]"}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="17" x2="12" y2="22"></line>
                            <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 11.2V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3v5.2a2 2 0 0 1-1.11 1.35l-1.78.9A2 2 0 0 0 5 15.24Z"></path>
                          </svg>
                        </div>
                      </div>

                      <ul className="grid gap-4 sm:grid-cols-2">
                        {hub.items.map((item) => (
                          <li key={item} className={`flex items-center gap-3 text-sm font-medium ${hub.accent ? "text-white/90" : "text-[#25181d]"}`}>
                            <span className={`h-1.5 w-1.5 rounded-full ${hub.accent ? "bg-white" : "bg-[#890051]"}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </Link>
              </motion.article>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose TK — Scroll-progress GSAP Pinning */}
      <section
        ref={pinSectionRef}
        className={`${isEmbedded ? "bg-transparent" : "bg-[#fff0f3]"} relative flex items-center justify-center min-h-[100vh] w-full overflow-hidden`}
      >
        <div className="w-full px-6 py-20 md:px-8 mx-auto max-w-7xl flex flex-col items-center">

          {/* Section heading */}
          <div className="mx-auto mb-10 md:mb-16 max-w-3xl text-center">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.35em] text-[#b10e6b]">
              Our Process
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-[-0.05em] uppercase mb-4 text-white">
              WHY CHOOSE TK?
            </h2>
            <p className="text-sm sm:text-base leading-7 text-white/60 max-w-xl mx-auto">
              We transform your ideas into powerful digital, creative, and technology solutions — from concept to reality.
            </p>
          </div>

          {/* Circles row — pinned by GSAP */}
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-4 w-full">
            {whyChooseSteps.map((step, index) => (
              <div key={step.label} className="flex flex-col items-center md:flex-row md:items-start flex-1 w-full md:w-auto">
                
                {/* Circle Item */}
                <div className="timeline-item step-circle flex flex-col items-center text-center">
                  <div className="circle-wrap relative flex items-center justify-center rounded-full w-40 h-40 md:w-48 md:h-48 shadow-2xl overflow-hidden border-2 border-white/10" style={{ background: '#111' }}>
                    {/* The "Fill" overlay */}
                    <div 
                      className="circle-fill absolute inset-0"
                      style={{ background: `radial-gradient(circle at 50% 50%, ${step.color}ee, ${step.color})` }}
                    />
                    <span className="relative z-10 text-lg md:text-xl font-black uppercase tracking-widest text-white drop-shadow-lg px-2">
                      {step.label}
                    </span>
                  </div>
                  <div className="text-wrap mt-4 max-w-[150px] md:max-w-[170px]">
                    <p className="text-xs md:text-sm leading-5 md:leading-6 text-white/70">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Plus Connector (skip after last) */}
                {index < whyChooseSteps.length - 1 && (
                  <div className="timeline-item timeline-plus flex items-center justify-center shrink-0 my-4 md:my-0 md:mx-2 lg:mx-4 h-auto md:h-48">
                    <span className="flex items-center justify-center text-3xl md:text-4xl font-black text-[#b10e6b]">
                      +
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom tagline */}
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-[clamp(0.9rem,2vw,1.2rem)] font-light tracking-widest text-white/40 uppercase flex flex-col md:flex-row items-center gap-2 md:gap-4 justify-center">
              <span>Think</span>
              <span className="hidden md:inline text-[#b10e6b]">&rarr;</span>
              <span className="md:hidden text-[#b10e6b]">&darr;</span>
              <span>Visualize</span>
              <span className="hidden md:inline text-[#b10e6b]">&rarr;</span>
              <span className="md:hidden text-[#b10e6b]">&darr;</span>
              <span>Create</span>
              <span className="hidden md:inline text-[#b10e6b]">&rarr;</span>
              <span className="md:hidden text-[#b10e6b]">&darr;</span>
              <span>Reality</span>
            </p>
            <p className="mt-4 text-xs md:text-sm text-white/30 tracking-[0.2em] uppercase">
              Your Vision.&nbsp; Our Expertise.&nbsp; Real Results.
            </p>
          </div>

        </div>
      </section>

      {/* Dark CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <div className="overflow-hidden rounded-[28px] bg-[#0b0c12] p-8 shadow-[0_30px_70px_rgba(0,0,0,0.18)] md:p-12">
          <div className="max-w-2xl">
            <ScrollFillText
              as="h2"
              className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-[-0.05em]"
              wrapperClassName="mb-5"
              fillDirection="top"
              fillEnd={0.8}
            >
              Crafting the Ethereal.
            </ScrollFillText>
            <ScrollFillText
              as="p"
              className="text-lg leading-8"
              wrapperClassName="mt-5"
              fillDirection="left"
              fillEnd={0.7}
            >
              Ready to transform your brand into an authority? Let&apos;s build something exceptional together.
            </ScrollFillText>
            <Link href="/Consultancy" className="mt-8 inline-flex rounded-full bg-[#890051] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}