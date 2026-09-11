"use client";

import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import DiscoverPage from "../Discover/page";
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

export default function TKPage() {
	return (
		<main 
			className={`${inter.className} text-white w-full flex flex-col`}
			style={{ 
				backgroundImage: "url('/site_img/FIRSTPAGE%20BG.png')", 
				backgroundSize: 'cover', 
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed'
			}}
		>
			{/* Hero Section */}
			<section className="relative min-h-[calc(100vh-64px)] w-full flex items-center justify-center px-4 sm:px-6 md:px-[5vw] pt-8 sm:pt-12 md:pt-20 pb-12 md:pb-20">
				<div className="absolute inset-0 opacity-20 pointer-events-none z-0">
					<div className="absolute -top-20 -left-20 sm:-top-40 sm:-left-40 w-64 sm:w-96 md:w-[500px] h-64 sm:h-96 md:h-[500px] bg-[#b10e6b] rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
					<div className="absolute -bottom-20 -right-20 sm:-bottom-40 sm:-right-40 w-64 sm:w-96 md:w-[500px] h-64 sm:h-96 md:h-[500px] bg-[#890051] rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
				</div>
				
				{/* Floating Roses Layer */}
				<FloatingRoses />

				<div className="relative z-10 max-w-6xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10">
					<div className="space-y-4 sm:space-y-6">
						<br></br>
						<h1 className={`${playfair.className} text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem] font-light leading-[0.95] tracking-tighter`}>
							{/* "Voice" — slides in from the left */}
							<motion.span
								className="block"
								initial={{ opacity: 0, x: -60 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.7, ease: "easeOut" }}
							>
								Voice
							</motion.span>

							{/* "TK" — glowing scale-up entrance */}
							<motion.span
								className="text-[#f5dce3] block"
								initial={{ opacity: 0, scale: 0.6, filter: "blur(12px)" }}
								animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
								transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
							>
								TK
							</motion.span>

							{/* "Visuals" — slides in from the right */}
							<motion.span
								className="block sm:inline"
								initial={{ opacity: 0, x: 60 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
							>
								Visuals
							</motion.span>
						</h1>
					</div>

					{/* Tagline */}
					<motion.p
						className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-white/80 font-light px-2"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.8 }}
					>
						Visual Think To Reality
					</motion.p>

					{/* Buttons */}
					<motion.div
						className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6 md:pt-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 1.0 }}
					>
						<Link
							href="/Consultancy"
							className="w-full sm:w-auto bg-gradient-to-r from-[#b10e6b] to-[#890051] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-semibold uppercase tracking-widest text-xs sm:text-sm hover:scale-105 transition-transform shadow-lg shadow-[#b10e6b]/20"
						>
							Start Your Journey
						</Link>
						<Link
							href="/Discover"
							className="w-full sm:w-auto border-2 border-[#b10e6b] text-[#b10e6b] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-semibold uppercase tracking-widest text-xs sm:text-sm hover:bg-[#fff0f3] transition-colors"
						>
							Explore Solutions
						</Link>
					</motion.div>
				</div>
			</section>

			{/* Discover Section Content */}
			<div className="w-full bg-transparent">
				<DiscoverPage isEmbedded={true} />
			</div>
		</main>
	);
}
