"use client";

import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import FloatingRoses from "../components/FloatingRoses";

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

const services = [
	{
		number: "01",
		title: "Voice Over",
		short: "Give your idea a voice.",
		description:
			"Professional voice-over crafted for brands, advertisements, YouTube, social media, documentaries and creative content.",
		tags: ["Commercial", "YouTube", "Reels", "Brand Voice"],
		visual: "VOICE",
	},
	{
		number: "02",
		title: "Commercial & Ads",
		short: "Make people stop. Listen. Remember.",
		description:
			"Attention-grabbing commercial voice and creative advertising content designed to make your brand heard.",
		tags: ["FB Ads", "TV Ads", "Promotions", "Campaigns"],
		visual: "AD",
	},
	{
		number: "03",
		title: "Presentation",
		short: "Present with presence.",
		description:
			"Professional voice and visual presentation for products, services, businesses, events and important messages.",
		tags: ["Business", "Events", "Products", "Services"],
		visual: "PRESENT",
	},
	{
		number: "04",
		title: "Narration",
		short: "Turn information into a story.",
		description:
			"Emotional and natural narration for documentaries, educational videos, corporate stories and cinematic content.",
		tags: ["Documentary", "Storytelling", "Corporate", "Education"],
		visual: "STORY",
	},
	{
		number: "05",
		title: "Video & Visuals",
		short: "Make your vision visible.",
		description:
			"Creative video editing and visual content that transforms your raw ideas into engaging experiences.",
		tags: ["Video", "Reels", "Editing", "Visual Content"],
		visual: "VISUAL",
	},
	{
		number: "06",
		title: "Web Development",
		short: "Build your digital home.",
		description:
			"Modern websites, landing pages and business platforms designed around your brand, customers and goals.",
		tags: ["Websites", "Landing Pages", "Business", "Portfolio"],
		visual: "WEB",
	},
	{
		number: "07",
		title: "Mobile Apps",
		short: "Put your idea in their hands.",
		description:
			"Mobile applications built to turn your business idea, service or community into a practical digital experience.",
		tags: ["Android", "iOS", "Flutter", "Mobile"],
		visual: "APP",
	},
	{
		number: "08",
		title: "Custom Systems",
		short: "Tell us what you need. We build it.",
		description:
			"From booking systems and management platforms to completely custom digital products — if you can imagine it, we can design and develop the system around it.",
		tags: [
			"Management Systems",
			"Booking",
			"POS",
			"Custom Platforms",
		],
		visual: "SYSTEM",
	},
];

export default function TKPage() {
	const [activeService, setActiveService] = useState(0);

	const active = services[activeService];

	return (
		<main
			className={`${inter.className} min-h-screen w-full overflow-hidden text-white`}
			style={{
				backgroundImage: "url('/site_img/FIRSTPAGE%20BG.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
			}}
		>
			{/* ======================================================
          GLOBAL ATMOSPHERE
      ====================================================== */}

			<div className="fixed inset-0 z-0 pointer-events-none bg-black/25" />

			<div className="fixed inset-0 z-0 pointer-events-none">
				<div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-[#b10e6b]/10 blur-[140px]" />
				<div className="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] rounded-full bg-[#890051]/10 blur-[150px]" />
			</div>

			<div className="relative z-20">
				<FloatingRoses />
			</div>

			{/* ======================================================
          HERO
      ====================================================== */}

			<section className="relative z-10 min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-[6vw] py-20">
				<div className="max-w-7xl w-full mx-auto text-center">

					{/* Small Label */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						className="mb-8"
					>
						<span className="inline-flex items-center gap-3 text-[9px] sm:text-[10px] uppercase tracking-[0.45em] text-white/50">
							<span className="w-10 h-px bg-[#d889a8]" />
							Creative • Voice • Visual • Digital
							<span className="w-10 h-px bg-[#d889a8]" />
						</span>
					</motion.div>

					{/* TITLE */}
					<h1
						className={`${playfair.className} leading-[0.84] tracking-[-0.055em]`}
					>
						<motion.span
							initial={{ opacity: 0, x: -80 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="block text-[17vw] sm:text-[11vw] md:text-[9vw] lg:text-[8vw]"
						>
							Voice
						</motion.span>

						<motion.span
							initial={{
								opacity: 0,
								scale: 0.5,
								filter: "blur(20px)",
							}}
							animate={{
								opacity: 1,
								scale: 1,
								filter: "blur(0px)",
							}}
							transition={{
								duration: 1,
								delay: 0.25,
							}}
							className="
                block
                text-[#f2d9e2]
                text-[20vw]
                sm:text-[13vw]
                md:text-[10vw]
                lg:text-[9vw]
              "
						>
							TK
						</motion.span>

						<motion.span
							initial={{ opacity: 0, x: 80 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								duration: 0.8,
								delay: 0.5,
							}}
							className="block text-[17vw] sm:text-[11vw] md:text-[9vw] lg:text-[8vw]"
						>
							Visuals
						</motion.span>
					</h1>

					{/* TAGLINE */}
					<motion.div
						initial={{ opacity: 0, y: 25 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.7,
							delay: 0.8,
						}}
						className="mt-10"
					>
						<p
							className={`${playfair.className} italic text-xl sm:text-2xl md:text-3xl text-[#e6c3ce]`}
						>
							From an idea to an experience.
						</p>

						<p className="max-w-xl mx-auto mt-4 text-xs sm:text-sm leading-7 text-white/45">
							Voice. Visuals. Websites. Apps. Systems.
							<br />
							Everything your idea needs to move forward.
						</p>
					</motion.div>

					{/* BUTTONS */}
					<motion.div
						initial={{ opacity: 0, y: 25 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.7,
							delay: 1,
						}}
						className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
					>
						<Link
							href="/Consultancy"
							className="
                w-full sm:w-auto
                px-9 py-4
                rounded-full
                bg-gradient-to-r
                from-[#b10e6b]
                to-[#890051]
                text-white
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                shadow-xl
                shadow-[#b10e6b]/20
                transition-all
                duration-300
                hover:scale-105
              "
						>
							Tell Us Your Idea
						</Link>

						<a
							href="#services"
							className="
                w-full sm:w-auto
                px-9 py-4
                rounded-full
                border
                border-white/15
                bg-white/[0.03]
                backdrop-blur-md
                text-white/70
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                hover:border-[#d889a8]
                hover:text-white
                transition-all
              "
						>
							Explore What We Do
						</a>
					</motion.div>

					{/* SCROLL */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							duration: 1,
							delay: 1.5,
						}}
						className="absolute bottom-8 left-1/2 -translate-x-1/2"
					>
						<motion.div
							animate={{ y: [0, 8, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
							}}
							className="flex flex-col items-center gap-3"
						>
							<span className="text-[8px] tracking-[0.4em] uppercase text-white/25">
								Scroll
							</span>

							<div className="w-px h-10 bg-gradient-to-b from-[#d889a8] to-transparent" />
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* ======================================================
          BIG STATEMENT
      ====================================================== */}

			<section className="relative z-10 px-5 sm:px-8 md:px-[6vw] py-28 sm:py-36">
				<div className="max-w-7xl mx-auto">

					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<span className="text-[9px] uppercase tracking-[0.45em] text-[#d889a8]">
							One Studio. Many Possibilities.
						</span>

						<h2
							className={`
                ${playfair.className}
                mt-7
                text-5xl
                sm:text-7xl
                md:text-8xl
                lg:text-[9rem]
                leading-[0.85]
                tracking-[-0.04em]
              `}
						>
							You bring the
							<br />
							<span className="italic text-[#dcb7c3]">
								idea.
							</span>
						</h2>

						<div className="mt-10 flex flex-col md:flex-row md:items-end gap-8">
							<p className="max-w-xl text-sm sm:text-base leading-8 text-white/45">
								Maybe you need a voice.
								Maybe you need a website.
								Maybe you need a mobile app.
								Maybe you need an entire system.
							</p>

							<p
								className={`${playfair.className} text-2xl sm:text-3xl italic text-white/70`}
							>
								We create the next step.
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* ======================================================
          SERVICES
      ====================================================== */}

			<section
				id="services"
				className="relative z-10 px-5 sm:px-8 md:px-[6vw] py-20 sm:py-32"
			>
				<div className="max-w-7xl mx-auto">

					{/* HEADER */}
					<div className="grid lg:grid-cols-2 gap-10 mb-20">

						<div>
							<span className="text-[9px] uppercase tracking-[0.45em] text-[#d889a8]">
								What Can We Build For You?
							</span>

							<h2
								className={`
                  ${playfair.className}
                  mt-6
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  leading-[0.9]
                `}
							>
								More than
								<br />
								<span className="italic text-[#ddb9c5]">
									a service.
								</span>
							</h2>
						</div>

						<div className="lg:flex lg:items-end">
							<p className="max-w-xl text-sm leading-8 text-white/40">
								Choose what you need — or don't choose anything.
								Tell us your idea and we'll help you discover what it needs.
							</p>
						</div>
					</div>

					{/* SERVICE GRID */}
					<div className="grid lg:grid-cols-[0.85fr_1.15fr] border-t border-white/10">

						{/* SERVICE LIST */}
						<div className="border-r-0 lg:border-r border-white/10">

							{services.map((service, index) => {
								const selected = activeService === index;

								return (
									<motion.button
										key={service.number}
										onMouseEnter={() => setActiveService(index)}
										onClick={() => setActiveService(index)}
										initial={{
											opacity: 0,
											x: -20,
										}}
										whileInView={{
											opacity: 1,
											x: 0,
										}}
										viewport={{
											once: true,
										}}
										transition={{
											duration: 0.45,
											delay: index * 0.04,
										}}
										className={`
                      relative
                      group
                      w-full
                      text-left
                      flex
                      items-center
                      gap-4
                      px-2
                      sm:px-5
                      py-6
                      border-b
                      border-white/10
                      overflow-hidden
                      transition-all
                      duration-300
                      ${selected
												? "bg-white/[0.045]"
												: "hover:bg-white/[0.025]"
											}
                    `}
									>

										{/* ACTIVE LINE */}
										<motion.div
											animate={{
												scaleY: selected ? 1 : 0,
											}}
											className="
                        absolute
                        left-0
                        top-0
                        bottom-0
                        w-[2px]
                        origin-top
                        bg-[#d889a8]
                      "
										/>

										<span
											className={`
                        text-[9px]
                        tracking-[0.2em]
                        ${selected
													? "text-[#d889a8]"
													: "text-white/20"
												}
                      `}
										>
											{service.number}
										</span>

										<span
											className={`
                        ${playfair.className}
                        text-xl
                        sm:text-2xl
                        md:text-3xl
                        transition-all
                        ${selected
													? "text-white translate-x-1"
													: "text-white/40 group-hover:text-white/70"
												}
                      `}
										>
											{service.title}
										</span>

										<span
											className={`
                        ml-auto
                        transition-all
                        ${selected
													? "opacity-100 text-[#d889a8]"
													: "opacity-0"
												}
                      `}
										>
											→
										</span>
									</motion.button>
								);
							})}
						</div>

						{/* EXPERIENCE PANEL */}
						<div className="relative min-h-[600px] flex items-center px-3 sm:px-10 md:px-16 py-20 overflow-hidden">

							<AnimatePresence mode="wait">

								<motion.div
									key={active.number}
									initial={{
										opacity: 0,
										y: 30,
									}}
									animate={{
										opacity: 1,
										y: 0,
									}}
									exit={{
										opacity: 0,
										y: -20,
									}}
									transition={{
										duration: 0.4,
									}}
									className="relative z-10 w-full"
								>

									{/* GIANT WORD */}
									<motion.div
										initial={{
											opacity: 0,
											scale: 0.95,
										}}
										animate={{
											opacity: 1,
											scale: 1,
										}}
										transition={{
											duration: 0.7,
										}}
										className={`
                      ${playfair.className}
                      absolute
                      right-[-20px]
                      top-[-80px]
                      text-[5rem]
                      sm:text-[9rem]
                      md:text-[12rem]
                      font-bold
                      text-white/[0.025]
                      select-none
                      pointer-events-none
                      whitespace-nowrap
                    `}
									>
										{active.visual}
									</motion.div>

									<span className="text-[9px] uppercase tracking-[0.4em] text-[#d889a8]">
										{active.number} / TK CREATIVE
									</span>

									<h3
										className={`
                      ${playfair.className}
                      mt-7
                      text-5xl
                      sm:text-6xl
                      md:text-7xl
                      lg:text-8xl
                      leading-[0.88]
                    `}
									>
										{active.title}
									</h3>

									<p
										className={`
                      ${playfair.className}
                      mt-7
                      text-xl
                      sm:text-2xl
                      md:text-3xl
                      italic
                      text-[#d9afbc]
                    `}
									>
										{active.short}
									</p>

									<p className="max-w-xl mt-7 text-sm sm:text-base leading-8 text-white/45">
										{active.description}
									</p>

									{/* TAGS */}
									<div className="flex flex-wrap gap-2 mt-8">
										{active.tags.map((tag) => (
											<span
												key={tag}
												className="
                          px-4
                          py-2
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.025]
                          text-[8px]
                          sm:text-[9px]
                          uppercase
                          tracking-[0.18em]
                          text-white/40
                        "
											>
												{tag}
											</span>
										))}
									</div>

									{/* CTA */}
									<Link
										href="/Consultancy"
										className="
                      inline-flex
                      items-center
                      gap-4
                      mt-10
                      group
                      text-[9px]
                      uppercase
                      tracking-[0.3em]
                    "
									>
										<span
											className="
                        w-12
                        h-12
                        rounded-full
                        border
                        border-[#d889a8]
                        flex
                        items-center
                        justify-center
                        text-[#d889a8]
                        transition-all
                        duration-300
                        group-hover:bg-[#d889a8]
                        group-hover:text-[#500b2d]
                      "
										>
											→
										</span>

										Let's Build It
									</Link>
								</motion.div>

							</AnimatePresence>
						</div>
					</div>
				</div>
			</section>

			{/* ======================================================
          CUSTOM SYSTEM SECTION
      ====================================================== */}

			<section className="relative z-10 px-5 sm:px-8 md:px-[6vw] py-32 sm:py-44">

				<div className="max-w-7xl mx-auto">

					<div
						className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-[#d889a8]/20
              bg-gradient-to-br
              from-[#5c103c]/40
              via-black/20
              to-[#210818]/50
              p-8
              sm:p-12
              md:p-20
            "
					>

						{/* Decorative Circle */}
						<div
							className="
                absolute
                -right-32
                -top-32
                w-[450px]
                h-[450px]
                rounded-full
                border
                border-[#d889a8]/10
              "
						/>

						<div
							className="
                absolute
                -right-20
                -top-20
                w-[250px]
                h-[250px]
                rounded-full
                bg-[#b10e6b]/10
                blur-[80px]
              "
						/>

						<div className="relative z-10 max-w-4xl">

							<span className="text-[9px] uppercase tracking-[0.45em] text-[#d889a8]">
								Don't See What You Need?
							</span>

							<h2
								className={`
                  ${playfair.className}
                  mt-7
                  text-5xl
                  sm:text-6xl
                  md:text-8xl
                  leading-[0.88]
                `}
							>
								Tell us
								<br />
								<span className="italic text-[#e3c2cd]">
									what you imagine.
								</span>
							</h2>

							<p className="max-w-xl mt-8 text-sm sm:text-base leading-8 text-white/45">
								A school management system.
								A booking platform.
								A business dashboard.
								A POS.
								A mobile application.
								A completely new idea.
							</p>

							<p
								className={`
                  ${playfair.className}
                  mt-8
                  text-xl
                  sm:text-2xl
                  text-white/70
                `}
							>
								If you can describe it, we can start designing it.
							</p>

							<Link
								href="/Consultancy"
								className="
                  inline-flex
                  items-center
                  gap-5
                  mt-10
                  px-7
                  py-4
                  rounded-full
                  bg-[#b10e6b]
                  text-white
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  hover:bg-[#c51878]
                  hover:scale-105
                  transition-all
                "
							>
								Start With Your Idea
								<span>→</span>
							</Link>

						</div>
					</div>
				</div>
			</section>

			{/* ======================================================
          FINAL STATEMENT
      ====================================================== */}

			<section className="relative z-10 px-5 sm:px-8 md:px-[6vw] py-32 sm:py-44">

				<div className="max-w-6xl mx-auto text-center">

					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="text-[9px] uppercase tracking-[0.45em] text-white/25"
					>
						The TK Approach
					</motion.span>

					<motion.h2
						initial={{
							opacity: 0,
							y: 40,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
						}}
						viewport={{
							once: true,
						}}
						transition={{
							duration: 0.8,
						}}
						className={`
              ${playfair.className}
              mt-8
              text-5xl
              sm:text-7xl
              md:text-8xl
              lg:text-[9rem]
              leading-[0.85]
            `}
					>
						Think it.
						<br />
						<span className="italic text-[#d9b4c0]">
							Create it.
						</span>
					</motion.h2>

					<motion.p
						initial={{
							opacity: 0,
						}}
						whileInView={{
							opacity: 1,
						}}
						viewport={{
							once: true,
						}}
						transition={{
							duration: 0.8,
							delay: 0.3,
						}}
						className="
              max-w-xl
              mx-auto
              mt-10
              text-sm
              sm:text-base
              leading-8
              text-white/40
            "
					>
						From the voice people hear to the system they use —
						we create experiences around your idea.
					</motion.p>

					<Link
						href="/Consultancy"
						className="
              inline-flex
              mt-10
              px-9
              py-4
              rounded-full
              border
              border-[#b10e6b]
              text-[#e2b6c6]
              text-[9px]
              uppercase
              tracking-[0.3em]
              hover:bg-[#b10e6b]
              hover:text-white
              transition-all
            "
					>
						Start Your Project
					</Link>

				</div>
			</section>

			{/* ======================================================
          FOOTER
      ====================================================== */}

			<footer
				className="
          relative
          z-10
          border-t
          border-white/10
          px-5
          sm:px-8
          md:px-[6vw]
          py-10
        "
			>
				<div
					className="
            max-w-7xl
            mx-auto
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-5
          "
				>

					<div
						className={`
              ${playfair.className}
              text-xl
              text-white/70
            `}
					>
						TK Voice & Visuals
					</div>

					<div className="text-[9px] uppercase tracking-[0.25em] text-white/25">
						Voice • Visual • Digital
					</div>

					<div className="text-[9px] uppercase tracking-[0.2em] text-white/20">
						© {new Date().getFullYear()} TK
					</div>

				</div>
			</footer>
		</main>
	);
}