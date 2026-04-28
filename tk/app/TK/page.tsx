import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";

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
		<main className={`${inter.className} bg-[#fff8f8] text-[#25181d] min-h-screen`}>
			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-[5vw] pt-8 sm:pt-12 md:pt-20 pb-12 md:pb-20 overflow-hidden">
				<div className="absolute inset-0 opacity-20">
					<div className="absolute -top-20 -left-20 sm:-top-40 sm:-left-40 w-64 sm:w-96 md:w-[500px] h-64 sm:h-96 md:h-[500px] bg-[#b10e6b] rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
					<div className="absolute -bottom-20 -right-20 sm:-bottom-40 sm:-right-40 w-64 sm:w-96 md:w-[500px] h-64 sm:h-96 md:h-[500px] bg-[#890051] rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
				</div>

				<div className="relative z-10 max-w-6xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10">
					<div className="space-y-4 sm:space-y-6">
						<span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.35em] text-[#b10e6b] bg-[#ffd9e4] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
							Creative Excellence
						</span>
						<h1 className={`${playfair.className} text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem] font-light leading-[0.95] tracking-tighter`}>
							Voice <span className="italic font-light">and</span> <br className="hidden sm:block" />
							<span className="text-[#b10e6b]">Visual</span> <br className="hidden sm:block" />
							<span className="block sm:inline">Mastery</span>
						</h1>
					</div>

					<p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-[#574048] font-light px-2">
						Elevate your brand through cinematic visuals, strategic audio design, and digital innovation. We craft experiences that command attention and drive results.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6 md:pt-8">
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
					</div>
				</div>
			</section>

			{/* Services Overview */}
			<section className="px-4 sm:px-6 md:px-[5vw] py-12 sm:py-16 md:py-24 bg-[#ffe8ee] bg-opacity-50">
				<div className="mx-auto max-w-6xl">
					<div className="text-center mb-8 sm:mb-12 md:mb-16">
						<span className="text-xs sm:text-sm font-bold uppercase tracking-[0.35em] text-[#890051]">What We Do</span>
						<h2 className={`${playfair.className} mt-3 sm:mt-4 text-[1.75rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-light leading-tight tracking-tighter`}>
							Four Pillars of <br className="hidden sm:block" />
							<span>Excellence</span>
						</h2>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
						{[
							{
								title: "RaRu",
								description: "Digital ecosystems engineered for enterprise-scale brand presence.",
								href: "/Discover/RaRu",
								icon: "🏗️",
							},
							{
								title: "ADcraft",
								description: "Editorial storytelling that moves audiences through precision language.",
								href: "/Discover/ADcraft",
								icon: "✍️",
							},
							{
								title: "Voxium",
								description: "Premium audio design and voice production for sonic authority.",
								href: "/Discover/Voxium",
								icon: "🎙️",
							},
							{
								title: "eyeCatching",
								description: "Cinematic visuals and motion graphics that captivate instantly.",
								href: "/Discover/eyeCatching",
								icon: "🎬",
							},
						].map((service) => (
							<Link
								key={service.title}
								href={service.href}
								className="group p-4 sm:p-6 md:p-8 rounded-2xl bg-white hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border border-transparent hover:border-[#b10e6b]/20"
							>
								<div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">{service.icon}</div>
								<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#25181d] mb-1 sm:mb-2 group-hover:text-[#b10e6b] transition-colors">
									{service.title}
								</h3>
								<p className="text-xs sm:text-sm md:text-base text-[#574048]">{service.description}</p>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="px-4 sm:px-6 md:px-[5vw] py-12 sm:py-16 md:py-24">
				<div className="mx-auto max-w-6xl">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
						{[
							{ label: "Editorial Quality", desc: "Every frame and syllable treated as art." },
							{ label: "Strategic Depth", desc: "Creativity aligned with your business goals." },
							{ label: "Global Reach", desc: "Scalable solutions for worldwide impact." },
						].map((item, idx) => (
							<div key={idx} className="space-y-2 sm:space-y-3">
								<div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#ffd9e4] flex items-center justify-center text-base sm:text-lg font-bold text-[#b10e6b]">
									{idx + 1}
								</div>
								<h4 className="text-base sm:text-lg md:text-xl font-bold text-[#25181d]">{item.label}</h4>
								<p className="text-xs sm:text-sm md:text-base text-[#574048]">{item.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="px-4 sm:px-6 md:px-[5vw] py-12 sm:py-16 md:py-24 bg-gradient-to-r from-[#b10e6b] to-[#890051] text-white">
				<div className="mx-auto max-w-3xl text-center space-y-4 sm:space-y-6 md:space-y-8">
					<h2 className={`${playfair.className} text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-light leading-tight tracking-tighter`}>
						Ready to Create <em>Impact</em>?
					</h2>
					<p className="text-xs sm:text-sm md:text-lg max-w-xl mx-auto opacity-90 px-2">
						Let's transform your vision into a world-class digital reality. Schedule a consultation with our creative strategists today.
					</p>
					<Link
						href="/Consultancy"
						className="inline-block bg-white text-[#b10e6b] px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 rounded-full font-bold uppercase tracking-widest text-xs sm:text-sm hover:scale-105 transition-transform"
					>
						Book Consultation
					</Link>
				</div>
			</section>
		</main>
	);
}
 