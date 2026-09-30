"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Inter, Playfair_Display } from 'next/font/google';
import { 
  SiJavascript, SiPython, SiKotlin, SiReact, SiNextdotjs, SiFlutter, 
  SiHtml5, SiCss, SiTailwindcss, SiSpringboot, SiNodedotjs, SiExpress, 
  SiMysql, SiMongodb, SiGit, SiGithub, SiPostman, 
  SiCloudinary 
} from 'react-icons/si';
import { FaJava, FaServer, FaEnvelope, FaCreditCard, FaPaintBrush, FaMobileAlt, FaPalette, FaUsers, FaArrowRight, FaCode, FaDatabase } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'], style: ['normal', 'italic'] });

// SVG Pulse Beams for hero
const GradientColors = () => (
  <>
    <stop stopColor="#A91068" stopOpacity="0" />
    <stop stopColor="#A91068" />
    <stop offset="0.325" stopColor="#ff6eb4" />
    <stop offset="1" stopColor="#fff0f8" stopOpacity="0" />
  </>
);

const PulseBeamsSVG = () => {
  const width = 858;
  const height = 434;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex flex-shrink-0 opacity-60"
    >
      {/* Static background paths */}
      <path d="M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5" stroke="rgba(255,255,255,0.08)" />
      <path d="M568 200H841C846.523 200 851 195.523 851 190V40" stroke="rgba(255,255,255,0.08)" />
      <path d="M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5" stroke="rgba(255,255,255,0.08)" />
      <path d="M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427" stroke="rgba(255,255,255,0.08)" />
      <path d="M380 168V17C380 11.4772 384.477 7 390 7H414" stroke="rgba(255,255,255,0.08)" />
      {/* Animated gradient beam paths */}
      <path d="M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5" stroke="url(#grad1)" strokeLinecap="round" strokeWidth="2" />
      <path d="M568 200H841C846.523 200 851 195.523 851 190V40" stroke="url(#grad2)" strokeWidth="2" />
      <path d="M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5" stroke="url(#grad3)" strokeWidth="2" />
      <path d="M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427" stroke="url(#grad4)" strokeWidth="2" />
      <path d="M380 168V17C380 11.4772 384.477 7 390 7H414" stroke="url(#grad5)" strokeWidth="2" />
      <defs>
        <motion.linearGradient animate={{ x1: [0, width * 1.2], x2: [0, width], y1: [height, height / 2], y2: [height * 1.2, height] }} transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 2 }} gradientUnits="userSpaceOnUse" id="grad1">
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient animate={{ x1: [0, width * 1.2], x2: [0, width], y1: [height, height / 2], y2: [height * 1.2, height] }} transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 3 }} id="grad2">
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient animate={{ x1: [0, width * 1.2], x2: [0, width], y1: [height, height / 2], y2: [height * 1.2, height] }} transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }} gradientUnits="userSpaceOnUse" id="grad3">
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient animate={{ x1: [0, width * 1.2], x2: [0, width], y1: [height, height / 2], y2: [height * 1.2, height] }} transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 2 }} gradientUnits="userSpaceOnUse" id="grad4">
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient animate={{ x1: [0, width * 1.2], x2: [0, width], y1: [height, height / 2], y2: [height * 1.2, height] }} transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 2 }} gradientUnits="userSpaceOnUse" id="grad5">
          <GradientColors />
        </motion.linearGradient>
      </defs>
      <circle cx="851" cy="34" r="6.5" fill="rgba(175,13,106,0.5)" stroke="rgba(175,13,106,0.8)" />
      <circle cx="770" cy="427" r="6.5" fill="rgba(175,13,106,0.5)" stroke="rgba(175,13,106,0.8)" />
      <circle cx="142" cy="427" r="6.5" fill="rgba(175,13,106,0.5)" stroke="rgba(175,13,106,0.8)" />
      <circle cx="6.5" cy="398.5" r="6" fill="rgba(175,13,106,0.5)" stroke="rgba(175,13,106,0.8)" />
      <circle cx="420.5" cy="6.5" r="6" fill="rgba(175,13,106,0.5)" stroke="rgba(175,13,106,0.8)" />
    </svg>
  );
};

function Counter({ from = 0, to, duration = 2.5, suffix = "", prefix = "" }: { from?: number, to: number, duration?: number, suffix?: string, prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          ref.current!.textContent = prefix + Math.round(value) + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration, suffix, prefix]);

  return <span ref={ref}>{prefix}{from}{suffix}</span>;
}

const techStack = [
  { name: 'Java', icon: FaJava },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Python', icon: SiPython },
  { name: 'Kotlin', icon: SiKotlin },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'REST APIs', icon: FaServer },
  { name: 'MySQL', icon: SiMysql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MS SQL Server', icon: FaDatabase },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Postman', icon: SiPostman },
  { name: 'VS Code', icon: FaCode },
  { name: 'Cloudinary', icon: SiCloudinary },
  { name: 'UI/UX Design', icon: FaPaintBrush },
  { name: 'Responsive', icon: FaMobileAlt },
];

const projects = [
  {
    id: 1,
    title: "Oryza Villa",
    category: "Portfolio Example",
    description: "A stunning portfolio website built for Oryza Villa. Features seamless WhatsApp and Email integration for direct client communication.",
    tech: ["Next.js", "WhatsApp Integration", "Email Integration", "React", "Tailwind CSS"],
    video: "/website/1.mp4",
  },
  {
    id: 2,
    title: "Ryuga Caregiving",
    category: "Portfolio Example",
    description: "A fully registered caregiving course platform. Provides students a quick, worthwhile path to real skills, hands-on experience, and internationally accepted certification.",
    tech: ["React", "Framer Motion", "Backend Data", "Excel Export"],
    video: "/website/2.mp4",
  },
  {
    id: 3,
    title: "Memo Album Platform",
    category: "System Example / Company Project",
    description: "Digital Wedding Album & Vendor Management Platform. Includes templates, photographer/admin panels, media management, QR guest gallery access, publishing workflows, and payments.",
    tech: ["Next.js", "React", "MongoDB", "Cloudinary", "EmailJS"],
    video: null,
    placeholder: "💍 Digital Wedding Memories",
  },
  {
    id: 4,
    title: "Ticket Manager Pro",
    category: "System Example",
    description: "A comprehensive complaint and ticket management system. Features a fully functional email notification system for supervisors and staff.",
    tech: ["SQL", "React", "Email Flow", "Media Processing"],
    video: "/website/4.mp4",
  },
  {
    id: 5,
    title: "Global Ayurveda",
    category: "System Example",
    description: "A global Ayurvedic doctor channeling and consultation system. Connects patients from anywhere in the world with qualified Ayurvedic practitioners seamlessly.",
    tech: ["MongoDB", "React", "Global Access", "System Architecture"],
    video: "/website/5.mp4",
  },
  {
    id: 6,
    title: "Travel Trace System",
    category: "Real-world Mobile & Web System",
    description: "A fully-featured trail and travel tracking application system providing complete location histories, robust map services, and multi-device cross-platform synchronization.",
    tech: ["Flutter", "React 19", "Vite", "Spring Boot", "MySQL"],
    video: null,
    placeholder: "🌍 Global Travel Tracking",
  },
  {
    id: 7,
    title: "Power Tools Store",
    category: "Business Website",
    description: "A highly-converting business website for a power tools company. Built with a modern frontend architecture focusing on client acquisition and lead generation.",
    tech: ["Frontend Development", "UI/UX Design", "Responsive Web"],
    video: "/website/7.mp4",
  }
];

const experiences = [
  {
    company: "CodeBuilderIT",
    role: "Software Developer",
    duration: "1 Year",
    location: "Sri Lanka",
    description: [
      "Developed and maintained web applications using modern frontend and backend technologies.",
      "Worked on MemoAlbum, a digital wedding album and vendor management platform for photographers and couples.",
      "Contributed to album templates, admin and photographer panels, media management, QR guest galleries, publishing workflows, payment integration, and API features.",
      "Currently working on SmartSBooking, a tourism and accommodation platform covering villas, hotels, cabanas, and related booking and management services, with a focus on frontend development and UI design."
    ]
  },
  {
    company: "Asipiya International (PVT) Ltd.",
    role: "Software Engineer Intern",
    duration: "Internship",
    location: "Sri Lanka",
    description: [
      "Worked on the Asipiya Ticket Manager, a complaint and ticket management system.",
      "Contributed to a Pawning Management System and development activities related to Asipiya.lk."
    ]
  }
];

const certificates = [
  { id: 1, title: "AI Chatbot Mastery", file: "/certit/AI Chatbot-TK.(udemy-amazonaws.com).pdf", color: "bg-[#A91068]" },
  { id: 2, title: "Tech Certification", file: "/certit/CERTIFY.jpeg", color: "bg-[#25181d]" },
  { id: 3, title: "MS SQL Server 2022", file: "/certit/CertificateOfCompletion_Microsoft SQL Server 2022 Essential Training.pdf", color: "bg-[#b10e6b]" },
  { id: 4, title: "Python Moratuwa Campus", file: "/certit/Python_Moratuwa _Campus.pdf", color: "bg-[#574048]" },
  { id: 5, title: "AWS Training", file: "/certit/aws training.pdf", color: "bg-[#A91068]" },
  { id: 6, title: "Azure ML Expert", file: "/certit/azure-ml.pdf", color: "bg-[#25181d]" },
  { id: 7, title: "Diploma Examination", file: "/certit/diploma exam.jpeg", color: "bg-[#b10e6b]" },
  { id: 8, title: "Diploma Award", file: "/certit/diploma.jpeg", color: "bg-[#574048]" },
  { id: 9, title: "IT Essentials", file: "/certit/it essential.pdf", color: "bg-[#A91068]" },
  { id: 10, title: "INCO 2024 Recognition", file: null, color: "bg-[#25181d]", text: "Demonstrated exceptional technical capabilities and business acumen at the Beyond Business INCO 2024 exhibition." },
];

export default function SystemTKPortfolio() {
  const [fullscreenVideo, setFullscreenVideo] = useState<string | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  // Derive a MotionValue for the gradient background-position (top-level, not inside JSX)
  const titleBgPos = useTransform(scrollYProgress, [0, 0.6], ["100% 0", "0% 0"]);

  return (
    <main className={`${inter.className} min-h-screen bg-[#FCFCFC] text-[#25181d] selection:bg-[#A91068]/30 overflow-x-hidden relative`}>

      {/* Fullscreen Video Modal */}
      {fullscreenVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          onClick={() => setFullscreenVideo(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl font-light z-10 transition-colors"
            onClick={() => setFullscreenVideo(null)}
          >
            ×
          </button>
          <video
            src={fullscreenVideo}
            autoPlay
            controls
            playsInline
            className="max-w-[95vw] max-h-[95vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[100svh] flex overflow-hidden">
        {/* Background Video with Normal Colors */}
        <video 
          src="/it.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Gradient overlay matching rose theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#2d0c1e]/60 to-black/80 z-0" />
        
        {/* SVG Pulse Beams Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <PulseBeamsSVG />
        </div>

        {/* Hero Center Text — Scroll-fill color title */}
        <div className="relative z-20 w-full flex flex-col items-center justify-center px-6 gap-6">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className={`${playfair.className} text-5xl sm:text-7xl lg:text-9xl font-light tracking-wider drop-shadow-2xl text-center leading-tight`}
            style={{
              background: 'linear-gradient(to right, #A91068 50%, #ffffff 50%)',
              backgroundSize: '200% 100%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundPosition: titleBgPos,
            }}
          >
            About TK System
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="h-px w-32 bg-[#A91068]"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className={`${playfair.className} text-white/70 text-lg sm:text-xl italic text-center max-w-xl`}
          >
            Blending creativity with technology to deliver exceptional digital experiences.
          </motion.p>
        </div>
      </section>

      {/* At a Glance Section (Pink Background) */}
      <section className="py-24 px-6 bg-[#A91068] text-white">
        <div className="max-w-7xl mx-auto pl-0 lg:pl-24 flex flex-col items-center">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/70 mb-16 text-center">
            At a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <span className={`${playfair.className} text-5xl sm:text-7xl font-bold mb-4`}>
                <Counter to={2} suffix=" Years" />
              </span>
              <span className="text-sm uppercase tracking-widest font-medium opacity-90">Experience</span>
            </div>
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <span className={`${playfair.className} text-5xl sm:text-7xl font-bold mb-4`}>
                <Counter to={100} suffix="%" />
              </span>
              <span className="text-sm uppercase tracking-widest font-medium opacity-90">Customer Satisfaction</span>
            </div>
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <span className={`${playfair.className} text-5xl sm:text-7xl font-bold mb-4`}>
                <Counter to={10} suffix="+" />
              </span>
              <span className="text-sm uppercase tracking-widest font-medium opacity-90">Projects Completed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section (White Background) */}
      <section className="py-32 px-6 sm:px-12 lg:px-24 bg-[#FCFCFC]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#A91068] mb-4">Professional Journey</h2>
              <h3 className={`${playfair.className} text-5xl font-light text-[#25181d] leading-tight mb-8`}>
                Experience
              </h3>
              <p className="text-[#574048] leading-relaxed border-l-2 border-[#A91068] pl-6">
                A track record of engineering robust solutions, from startup web platforms to enterprise-grade management systems.
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-[#f5dce3] hover:shadow-2xl transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                  <h4 className="text-2xl font-bold text-[#25181d]">{exp.role}</h4>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#A91068] bg-[#fbe2e9] px-4 py-1.5 rounded-full w-fit">
                    {exp.duration}
                  </span>
                </div>
                <div className="text-sm font-semibold text-[#574048] mb-8 flex items-center gap-2 uppercase tracking-widest">
                  {exp.company} <span className="text-[#A91068]">•</span> {exp.location}
                </div>
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm sm:text-base text-[#574048] leading-relaxed flex items-start gap-4">
                      <span className="text-[#A91068] mt-1 text-[10px]">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section (Pink Background) */}
      <section id="projects" className="py-32 px-6 sm:px-12 lg:px-24 bg-[#A91068] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-white/70 mb-4">
              Selected Works
            </h2>
            <h3 className={`${playfair.className} text-4xl sm:text-6xl font-light mb-6`}>
              Featured Projects
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-24 lg:gap-32">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center"
              >
                {/* Content Container — Always LEFT */}
                <div className="w-full lg:w-[40%] flex flex-col justify-center order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] font-bold py-1.5 px-4 rounded-full bg-white text-[#A91068]">
                      0{project.id}
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/80 uppercase">
                      {project.category}
                    </span>
                  </div>
                  
                  <h4 className={`${playfair.className} text-3xl sm:text-4xl lg:text-5xl font-light mb-6 leading-tight`}>
                    {project.title}
                  </h4>
                  
                  <p className="text-white/90 mb-10 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-wider py-2 px-5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white hover:text-[#A91068] transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.video && (
                    <button
                      onClick={() => setFullscreenVideo(project.video!)}
                      className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white border border-white/30 hover:border-white hover:bg-white/10 rounded-full py-3 px-6 w-fit transition-all duration-300 group"
                    >
                      <span className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-[#A91068] flex items-center justify-center transition-colors">▶</span>
                      Watch Full Screen
                    </button>
                  )}
                </div>

                {/* Media Container — Always RIGHT */}
                <div className="w-full lg:w-[60%] order-1 lg:order-2">
                  <div
                    className="relative rounded-2xl overflow-hidden aspect-video bg-black shadow-2xl group cursor-pointer border border-white/20 hover:border-[#A91068] transition-colors duration-500"
                    onClick={() => project.video && setFullscreenVideo(project.video)}
                  >
                    {project.video ? (
                      <>
                        <video 
                          src={project.video} 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.08]"
                        />
                        {/* Click to fullscreen hint */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40">
                            <span className="text-white text-2xl ml-1">▶</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-2xl sm:text-4xl font-light text-white/50 bg-[#25181d] p-8 text-center">
                        {project.placeholder}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee Section (White Background) */}
      <section className="py-16 bg-[#FCFCFC] relative overflow-hidden flex border-y border-[#f5dce3]">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FCFCFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FCFCFC] to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex gap-12 items-center px-6 w-max"
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <div key={index} className="flex flex-col items-center gap-3 group min-w-[100px]">
              <div className="w-16 h-16 rounded-2xl bg-white border border-[#fbe2e9] shadow-sm flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:border-[#A91068]/30">
                <tech.icon className="text-3xl transition-colors opacity-60 group-hover:opacity-100 group-hover:text-[#A91068] text-[#25181d]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#574048] group-hover:text-[#A91068] transition-colors whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Certificates Section (Pink Background) */}
      <section className="bg-[#A91068]">
        {/* Certificate Importance Text */}
        <div className="py-24 px-6 sm:px-12 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-white/70 mb-6">
            Validating Excellence
          </h2>
          <h3 className={`${playfair.className} text-4xl sm:text-5xl font-light mb-8`}>
            The Importance of Certifications
          </h3>
          <p className="text-white/90 leading-relaxed text-sm sm:text-base">
            In the rapidly evolving world of technology, staying ahead requires continuous learning and validation. These certifications are more than just milestones; they represent a deep commitment to mastering modern architectures, ensuring code quality, and delivering industry-standard solutions. They guarantee that every system built is backed by proven, globally recognized expertise.
          </p>
        </div>
        
        {/* Seamless Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-0">
          {certificates.map((cert) => (
            <div key={cert.id} className={`relative aspect-square group overflow-hidden ${cert.color === 'bg-[#A91068]' || cert.color === 'bg-[#b10e6b]' ? 'bg-[#9a0a5d]' : cert.color} cursor-pointer border border-white/5`}>
              {/* Normal State: Solid Color Block */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center transition-opacity duration-500 z-10 group-hover:opacity-0 pointer-events-none">
                <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#A91068] text-xl">✦</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold tracking-wide uppercase leading-tight">
                  {cert.title}
                </h4>
              </div>

              {/* Hover Reveal State: Embedded Image/PDF or Text Content */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-white">
                {cert.file ? (
                  cert.file.endsWith('.pdf') ? (
                    <iframe src={`${cert.file}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`} className="w-full h-full pointer-events-none border-none" />
                  ) : (
                    <img src={cert.file} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={cert.title} />
                  )
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-6 bg-[#FCFCFC] text-center border-4 border-[#A91068]/20">
                    <p className="text-sm text-[#574048] font-medium leading-relaxed">{cert.text}</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
