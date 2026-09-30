"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  SiJavascript, SiPython, SiKotlin, SiReact, SiNextdotjs, SiFlutter, 
  SiHtml5, SiCss, SiTailwindcss, SiSpringboot, SiNodedotjs, SiExpress, 
  SiMysql, SiMongodb, SiGit, SiGithub, SiPostman, 
  SiCloudinary 
} from 'react-icons/si';
import { FaJava, FaServer, FaEnvelope, FaCreditCard, FaPaintBrush, FaMobileAlt, FaPalette, FaUsers, FaArrowRight, FaCode, FaDatabase } from 'react-icons/fa';

// Tech stack data
const techStack = [
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
  { name: 'REST APIs', icon: FaServer, color: '#009688' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'MongoDB Atlas', icon: SiMongodb, color: '#47A248' },
  { name: 'MS SQL Server', icon: FaDatabase, color: '#CC2927' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'VS Code', icon: FaCode, color: '#007ACC' },
  { name: 'Cloudinary', icon: SiCloudinary, color: '#3448C5' },
  { name: 'EmailJS', icon: FaEnvelope, color: '#F0AD4E' },
  { name: 'Payments', icon: FaCreditCard, color: '#87CEFA' },
  { name: 'UI/UX Design', icon: FaPaintBrush, color: '#FF69B4' },
  { name: 'Responsive', icon: FaMobileAlt, color: '#20B2AA' },
  { name: 'Creative UI', icon: FaPalette, color: '#FFA07A' },
  { name: 'User-Centered', icon: FaUsers, color: '#9370DB' },
];

const projects = [
  {
    id: 1,
    title: "Oryza Villa",
    category: "Portfolio Example",
    description: "A stunning portfolio website built for Oryza Villa. Features seamless WhatsApp and Email integration for direct client communication.",
    tech: ["Next.js", "WhatsApp Integration", "Email Integration", "React", "Tailwind CSS"],
    video: "/website/1.mp4",
    color: "from-blue-500/20 to-purple-500/20",
    border: "border-blue-500/30"
  },
  {
    id: 2,
    title: "Ryuga Caregiving",
    category: "Portfolio Example",
    description: "A fully registered caregiving course platform. Provides students a quick, worthwhile path to real skills, hands-on experience, and internationally accepted certification. Features a fully backend registration system saving details to Excel, and a responsive UI with beautiful motion effects.",
    tech: ["React", "Framer Motion", "Design Principles", "Backend Data", "Excel Export"],
    video: "/website/2.mp4",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30"
  },
  {
    id: 3,
    title: "Memo Album Platform",
    category: "System Example / Company Project",
    description: "Digital Wedding Album & Vendor Management Platform. A platform for photographers and couples to create, customize, manage, and publish digital wedding albums. Includes templates, photographer/admin panels, media management, QR guest gallery access, publishing workflows, and payments.",
    tech: ["Next.js", "React", "MongoDB", "Tailwind CSS", "Cloudinary", "EmailJS", "REST APIs"],
    video: null,
    placeholder: "💍 Digital Wedding Memories",
    color: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/30"
  },
  {
    id: 4,
    title: "Ticket Manager Pro",
    category: "System Example",
    description: "A comprehensive complaint and ticket management system. Features a fully functional email notification system for supervisors and staff. Includes media, file, and audio handling, along with chat notifications and detailed bug tracking workflows.",
    tech: ["SQL", "React", "Email Flow", "Media Processing", "Real-time Alerts"],
    video: "/website/4.mp4",
    color: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/30"
  },
  {
    id: 5,
    title: "Global Ayurveda",
    category: "System Example",
    description: "A global Ayurvedic doctor channeling and consultation system. Connects patients from anywhere in the world with qualified Ayurvedic practitioners seamlessly with complete scheduling integration.",
    tech: ["MongoDB", "React", "Global Access", "System Architecture"],
    video: "/website/5.mp4",
    color: "from-green-500/20 to-lime-500/20",
    border: "border-green-500/30"
  },
  {
    id: 6,
    title: "Travel Trace System",
    category: "Real-world Mobile & Web System",
    description: "A fully-featured trail and travel tracking application system providing complete location histories, robust map services, and multi-device cross-platform synchronization capabilities.",
    tech: [
      "Flutter", "React 19", "Vite", "Tailwind 4", 
      "Java 21", "Spring Boot", "MySQL", "Cloudinary"
    ],
    video: null,
    placeholder: "🌍 Global Travel Tracking",
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30"
  },
  {
    id: 7,
    title: "Power Tools Store",
    category: "Business Website",
    description: "A highly-converting business website for a power tools company. Built with a modern frontend architecture focusing on client acquisition, detailed product categorization, and lead generation.",
    tech: ["Frontend Development", "UI/UX Design", "Responsive Web", "Lead Gen"],
    video: "/website/7.mp4",
    color: "from-yellow-500/20 to-amber-500/20",
    border: "border-yellow-500/30"
  }
];

export default function SystemTKPortfolio() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 font-sans overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 sm:px-12 lg:px-24">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Profile Picture */}
          <div className="relative mb-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-40 w-40 sm:h-48 sm:w-48 rounded-full overflow-hidden border-2 border-white/10 p-1 bg-black">
              <Image 
                src="/site_img/dp.jpeg" 
                alt="Profile Picture" 
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Crafting Digital <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Masterpieces
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mb-10"
          >
            "I am dedicated to blending creativity with technology to deliver meaningful digital solutions, exceptional user experiences and value-driven results for clients and businesses."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a href="#projects" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2">
              Let's Talk <FaArrowRight className="text-sm" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Stack Marquee Section */}
      <section className="py-16 border-y border-white/5 bg-black/20 backdrop-blur-sm relative overflow-hidden flex">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex gap-12 items-center px-6 w-max"
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {/* Double the array to create seamless loop */}
          {[...techStack, ...techStack].map((tech, index) => (
            <div key={index} className="flex flex-col items-center gap-3 group min-w-[100px]">
              <div 
                className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white/10 group-hover:border-white/20"
              >
                <tech.icon className="text-3xl text-gray-400 group-hover:text-white transition-colors" style={{ color: tech.color }} />
              </div>
              <span className="text-xs font-medium text-gray-500 group-hover:text-gray-300 transition-colors whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-32 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="mb-24 text-center sm:text-left flex flex-col sm:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-3">Selected Works</h2>
            <h3 className="text-4xl sm:text-5xl font-bold">Featured Projects</h3>
          </div>
          <p className="text-gray-400 max-w-md text-sm sm:text-base">
            A curated selection of my latest digital creations, spanning from high-converting landing pages to complex web applications and fully integrated systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-24 md:gap-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center group/card`}
            >
              {/* Media Container */}
              <div className="w-full lg:w-[55%]">
                <div className={`relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br ${project.color} border border-white/10 group-hover/card:${project.border} transition-all duration-500 shadow-2xl`}>
                  {project.video ? (
                    <video 
                      src={project.video} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl font-bold text-white/40 group-hover/card:scale-105 transition-transform duration-700 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent p-8 text-center leading-snug">
                      {project.placeholder}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 mix-blend-multiply" />
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-[45%] flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono py-1 px-3 rounded-full border border-white/10 bg-white/5 text-gray-300">
                    0{project.id}
                  </span>
                  <span className="text-sm font-medium text-purple-400 tracking-wide uppercase">
                    {project.category}
                  </span>
                </div>
                
                <h4 className="text-3xl sm:text-4xl font-bold mb-6 transition-all duration-300 leading-tight">
                  {project.title}
                </h4>
                
                <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium py-2 px-4 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="self-start flex items-center gap-3 text-sm font-bold text-white hover:text-purple-400 transition-colors group">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-purple-400 group-hover:bg-purple-400/10 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                    <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300 text-lg" />
                  </div>
                  <span className="tracking-widest uppercase text-xs">View Details</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 p-12 sm:p-20 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          <FaCode className="text-5xl text-purple-500 mx-auto mb-8 opacity-70" />
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">Ready to build something amazing?</h2>
          <p className="text-gray-400 mb-10 text-xl max-w-2xl mx-auto leading-relaxed">
            Let's collaborate to bring your vision to life. I am dedicated to delivering exceptional user experiences and value-driven results for clients.
          </p>
          <a href="mailto:hello@example.com" className="inline-block px-12 py-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(168,85,247,0.4)] text-lg">
            Start a Project
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/10 bg-black/40 backdrop-blur-md">
        <p className="font-medium tracking-wide">© {new Date().getFullYear()} Designed & Built with ❤️ and Modern Tech.</p>
      </footer>
    </main>
  );
}
