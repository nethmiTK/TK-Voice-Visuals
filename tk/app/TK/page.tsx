import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";
import DiscoverPage from "../Discover/page";

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
			className={`${inter.className} text-[#25181d] w-full flex flex-col`}
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
				<div className="absolute inset-0 opacity-20 pointer-events-none">
					<div className="absolute -top-20 -left-20 sm:-top-40 sm:-left-40 w-64 sm:w-96 md:w-[500px] h-64 sm:h-96 md:h-[500px] bg-[#b10e6b] rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
					<div className="absolute -bottom-20 -right-20 sm:-bottom-40 sm:-right-40 w-64 sm:w-96 md:w-[500px] h-64 sm:h-96 md:h-[500px] bg-[#890051] rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
				</div>

				<div className="relative z-10 max-w-6xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10">
					<div className="space-y-4 sm:space-y-6">
						<br></br>
						<h1 className={`${playfair.className} text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem] font-light leading-[0.95] tracking-tighter`}>
							Voice <span className="italic font-light"> </span> <br className="hidden sm:block" />
							<span className="text-[#b10e6b]">TK</span> <br className="hidden sm:block" />
							<span className="block sm:inline">Visuals</span>
						</h1>
					</div>

					<p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-[#574048] font-light px-2">
						Visual Think To Reality					</p>

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

			{/* Discover Section Content */}
			<div className="w-full bg-transparent">
				<DiscoverPage isEmbedded={true} />
			</div>
		</main>
	);
}
