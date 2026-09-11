"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "BUSINESS IT SOLUTION",
    items: [
      "PORTFOLIO WEBSITE",
      "WEB APP",
      "MOBILE APP",
      "DESKTOP APPLICATION"
    ],
    bg: "bg-gradient-to-br from-[#1a1c29] to-[#0b0c12]",
    accent: "bg-[#890051]"
  },
  {
    id: 2,
    title: "VOICE OVER",
    items: [
      "Commercial Voice Over",
      "Documentary Narration",
      "News / Announcement Voice Over",
      "YouTube Series Voice Over"
    ],
    bg: "bg-gradient-to-br from-[#b10e6b] to-[#890051]",
    accent: "bg-white"
  },
  {
    id: 3,
    title: "VIDEO EDITING",
    items: [
      "Commercial / Ad Video",
      "Podcast Video Editing",
      "Documentary Editing",
      "Social Media Video Editing"
    ],
    bg: "bg-[#fff0f3]",
    textColor: "text-[#25181d]",
    accent: "bg-[#b10e6b]"
  },
  {
    id: 4,
    title: "DIGITAL MARKETING",
    items: [
      "Facebook Campaign",
      "Instagram Growth Campaign",
      "Lead Generation",
      "Brand Awareness"
    ],
    bg: "bg-gradient-to-br from-[#25181d] to-[#120c0f]",
    accent: "bg-[#b10e6b]"
  }
];

export default function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[450px] sm:h-[400px] overflow-hidden rounded-[32px] shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`absolute inset-0 flex flex-col justify-center p-8 md:p-16 ${slides[currentIndex].bg} ${slides[currentIndex].textColor || "text-white"}`}
        >
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between h-full">
            <div className="flex-1">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl font-black tracking-tight mb-4"
              >
                {slides[currentIndex].title}
              </motion.h3>
              <div className={`h-2 w-24 rounded-full ${slides[currentIndex].accent} mb-8`} />
            </div>
            
            <div className="flex-1 w-full">
              <ul className="grid gap-4 sm:grid-cols-2">
                {slides[currentIndex].items.map((item, idx) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="flex items-center gap-3 font-medium text-lg"
                  >
                    <span className={`h-2 w-2 rounded-full ${slides[currentIndex].accent}`} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === idx 
                ? "w-10 bg-white" 
                : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
