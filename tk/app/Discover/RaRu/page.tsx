import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "../../components/navbar";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

const playfair = Playfair_Display({
	subsets: ["latin"],
	weight: ["700"],
	style: ["normal", "italic"],
	display: "swap",
});

const serviceCards = [
	{
		title: "Strategic Precision",
		icon: "precision_manufacturing",
		text: "Data-driven roadmaps that align every pixel with your long-term business objectives.",
	},
	{
		title: "Global Infrastructure",
		icon: "public",
		text: "Scalable, secure, and blazing-fast cloud architectures built for worldwide reach.",
	},
	{
		title: "Conversion Engineering",
		icon: "trending_up",
		text: "Sophisticated UX/UI patterns designed to turn visitors into loyal brand advocates.",
	},
	{
		title: "Elite Support",
		icon: "verified_user",
		text: "24/7 white-glove maintenance and concierge-level technical assistance.",
	},
];

const packageCards = [
	{
		name: "Elite",
		price: "$4,900",
		description: "Foundational excellence for scaling startups.",
		features: ["Bespoke Brand UI", "5-Core Pages", "SEO Foundation"],
	},
	{
		name: "Visionary",
		price: "$12,500",
		description: "Complete market dominance for established brands.",
		features: ["Everything in Elite", "E-Commerce Integration", "Smart Automation Layer", "Premium Motion Graphics"],
		featured: true,
	},
	{
		name: "Enterprise",
		price: "Custom",
		description: "Infinite scale for global conglomerates.",
		features: ["Dedicated Dev Team", "Full API Infrastructure", "Global CDN Distribution"],
	},
];

const timeline = [
	{
		step: "1",
		title: "Discovery",
		text: "In-depth audit of your current digital footprint and competitor landscape.",
	},
	{
		step: "2",
		title: "Architecture",
		text: "Blueprinting the technical and visual stack for maximum scalability.",
	},
	{
		step: "3",
		title: "Engineering",
		text: "Agile development cycles with continuous high-fidelity feedback loops.",
	},
	{
		step: "4",
		title: "Expansion",
		text: "Launch and data-informed iterative optimization for perpetual growth.",
	},
];

function MaterialIcon({ name, filled = false }: { name: string; filled?: boolean }) {
	return (
		<span
			className="material-symbols-outlined"
			style={{ fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24` }}
		>
			{name}
		</span>
	);
}

export default function RaRuPage() {
	return (
		<main className={`${inter.className} bg-[#fff8f8] text-[#25181d] selection:bg-[#b10e6b]/20`}>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
			<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700&display=swap" rel="stylesheet" />

			<Navbar variant="raru" forceVisible />

			<section className="relative min-h-screen overflow-hidden px-[5vw] pb-16 pt-32">
				<div className="pointer-events-none absolute inset-0">
					<img
						className="h-full w-full object-cover opacity-10"
						alt="Abstract futuristic digital network with glowing nodes and lines"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuetVLbXiMia54Jmgy3kcFsspIIUC1-nnD5wykDiaMJ14iBftcr55eTnS_rtJPJWaECXx8f1h8mt18yPNx1wuWFSCPD1UND4Mt-gx8Ft9LB-C89de8vd7xr1OKBffy5DoH1GTYFu8hZPOKK3rF8kKmUVSu_0Pgg5C53Mk7buQ983uHlNsot-F2LeZxJCYcWnL5GFtHr2nGQQMHFyGzweMFX5IksNqPtweN2Mqo_AZyP6l7RCrkkFsg4XpcEHExFaxkNKXrOTRRMejb"
					/>
				</div>
				<div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
					<span className="mb-6 inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#b10e6b]">Digital Excellence Redefined</span>
					<h1 className={`${playfair.className} text-[clamp(3.4rem,7.5vw,7.7rem)] italic leading-[0.92] tracking-[-0.05em] text-[#25181d]`}>
						Architecting Your <br /> <span className="text-[#b10e6b]">Digital Legacy</span>
					</h1>
					<p className="mt-8 max-w-3xl text-[clamp(1rem,1.45vw,1.25rem)] leading-[1.7] text-[#574048]">
						Elite digital solutions for visionary brands. We blend high-fashion aesthetics with industrial-grade engineering to build your future.
					</p>
					<div className="mt-12 flex flex-col gap-6 sm:flex-row">
						<button className="rounded-2xl bg-gradient-to-b from-[#b10e6b] to-[#a90b66] px-10 py-5 text-lg font-bold tracking-tight text-white shadow-xl shadow-[#b10e6b]/20 transition-transform hover:scale-[1.02]">
							Start Your Project
						</button>
						<button className="rounded-2xl bg-[#fff0f3] px-10 py-5 text-lg font-bold tracking-tight text-[#25181d] transition-colors hover:bg-white hover:shadow-lg">
							View Case Studies
						</button>
					</div>
				</div>
			</section>

			<section className="overflow-hidden bg-[#fff0f3] py-24">
				<div className="px-[5vw] text-center">
					<p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8b7079]">Partnered with Industry Titans</p>
				</div>
				<div className="mt-12 flex items-center justify-between gap-16 overflow-x-auto px-[5vw] opacity-40 grayscale transition-all duration-700 hover:grayscale-0">
					{["LUMINA", "vogue.tech", "AXION", "SILICA", "NEO-GEN", "AVANT"].map((item) => (
						<span key={item} className="shrink-0 text-3xl font-bold tracking-tighter first:font-black last:font-black">
							{item}
						</span>
					))}
				</div>
			</section>

			<section className="bg-[#fff8f8] px-[5vw] py-32">
				<div className="mb-24 grid grid-cols-1 items-end gap-16 lg:grid-cols-12">
					<div className="lg:col-span-8">
						<h2 className={`${playfair.className} mb-8 text-[clamp(2.6rem,5vw,4.8rem)] italic leading-tight text-[#25181d]`}>The RaRu Distinction</h2>
						<p className="max-w-3xl text-[clamp(1.05rem,1.5vw,1.2rem)] leading-[1.72] text-[#574048]">
							We don't just build websites; we engineer digital equity. Our approach combines surgical precision with a global mindset.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
					{serviceCards.map((card) => (
						<div key={card.title} className="rounded-[24px] bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
							<div className="mb-8 flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#fbe2e9] text-[#b10e6b]">
								<MaterialIcon name={card.icon} filled />
							</div>
							<h3 className="mb-4 text-2xl font-bold tracking-tight text-[#25181d]">{card.title}</h3>
							<p className="leading-[1.7] text-[#574048]">{card.text}</p>
						</div>
					))}
				</div>
			</section>

			<section className="bg-[#fff0f3] px-[5vw] py-32">
				<div className="mx-auto max-w-7xl">
					<h2 className={`${playfair.className} mb-24 text-center text-[clamp(2.5rem,4.6vw,4.4rem)] italic text-[#25181d]`}>Core Divisions</h2>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						<div className="group relative h-[500px] overflow-hidden rounded-[24px] md:col-span-2">
							<img
								className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
								alt="Minimalist luxury office with high-end tech setup"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNEVLcrfIG3AIW1a0bjO4MzNQ5P8c_Qx5nTlOJtApxRxVbH6na0073OFYiyypOYRYrQMw9zUvZPx9YweBFDGyrXIoagwN39Z_jisQpmZhsgkVZIeS7wy1NKo9A6lZCG-bumQ3iFEDwpbAZDGzBRCtaqx_xL8Fdx2TkiCG977RipXt2aKchaXqb530mRVnPKDiv8BmorU3GEOQ-ybOyVClbL_8uxJf3l0roLthhNPxJGHbWE-xqay0u82ZcD0JXRAK8cO3E0m-VgZm_"
							/>
							<div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#25181d]/90 via-[#25181d]/20 to-transparent p-12">
								<h3 className="mb-4 text-[clamp(2rem,4vw,3.2rem)] font-bold text-white">Business Websites</h3>
								<p className="mb-6 max-w-md text-white/80">Digital flagships for corporate entities seeking dominance in their market niche.</p>
								<Link href="#" className="flex items-center gap-2 font-bold text-[#ffb0cd] transition-all hover:gap-4">
									Explore Capabilities <MaterialIcon name="arrow_right_alt" />
								</Link>
							</div>
						</div>

						<div className="group relative h-[500px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#7b0f3f] to-[#4b0831] p-12 text-white">
							<div>
								<div className="mb-6 text-5xl font-bold">⚙️</div>
								<h3 className={`${playfair.className} mb-4 text-[clamp(1.9rem,3vw,2.75rem)] italic`}>Smart Systems</h3>
								<p className="text-[1.05rem] leading-[1.75] text-white/90">API-first automation that streamlines your operational flow.</p>
							</div>
							<div className="mt-8 border-t border-white/20 pt-8 text-sm text-white/80">Custom-built for high-performance operations</div>
						</div>

						<div className="group relative overflow-hidden rounded-[24px] md:col-span-3">
							<img
								className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
								alt="High-end fashion boutique interior with elegant product displays"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuyDvnAbQnmSAaWY9yxNeA5foqqZc3PKRqqrgdXdSaGvXfZ39jrUVv5IyiPWRnN8m5EcUmU1EPTyhb4ZqikpilwYwJjPN-WqKUlKblJtyVurLYXnlqr6rEDy9J9CBJOjgNXzGSJ0c4wNi4F5lfFjzkkBsKuvHp1arAJ-okoZ5gu4QTz76tuipjiydPRDJqY7kRCFTQnEpPRFnU4Kp5Cw4pK8Bek8zMjqLF6PRlEAn29-nz4bbMSeOPmGleUnVemO7PC8zF8yr98CbI"
							/>
							<div className="absolute inset-0 flex items-center justify-center bg-[#25181d]/40 transition-colors group-hover:bg-[#25181d]/25">
								<div className="text-center">
									<h3 className={`${playfair.className} mb-6 text-[clamp(2.2rem,4.5vw,4.4rem)] italic text-white`}>Luxury E-Commerce</h3>
									<button className="rounded-full bg-white px-12 py-4 text-xs font-bold uppercase tracking-[0.24em] text-[#25181d]">The Boutique Experience</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-[#fff8f8] px-[5vw] py-32">
				<div className="mb-24 flex flex-col justify-between gap-8 md:flex-row md:items-baseline">
					<h2 className={`${playfair.className} text-[clamp(2.5rem,4.8vw,4.9rem)] italic leading-tight text-[#25181d]`}>Digital<br />Architecture.</h2>
					<div className="max-w-md">
						<p className="mb-6 text-[1.05rem] leading-[1.7] text-[#574048]">Selected works from our 2024-2025 archive. Each project is a bespoke creation tailored to specific brand DNA.</p>
						<div className="flex flex-wrap gap-4 text-sm">
							<span className="border-b-2 border-[#b10e6b] pb-1 font-bold text-[#b10e6b]">All Works</span>
							{["FinTech", "Luxe-Living", "SaaS"].map((item) => (
								<span key={item} className="cursor-pointer text-[#8b7079] transition-colors hover:text-[#b10e6b]">
									{item}
								</span>
							))}
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-16 md:grid-cols-2">
					<div className="space-y-8">
						<div className="aspect-[4/5] overflow-hidden rounded-[24px] bg-[#fbe2e9]">
							<img className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0" alt="Sleek modern web design showcase on a high-res monitor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv_5ovRFoontlbxnT-9FdYvtPgypAjdkQB8mkut1r7U7cmU7rRr-CBbDKZpPc48TbgrI0--I-ok0fvbd7CndGxxbS-ba0cSPvS9w-2cEsO6STwsQ_0hal0O4weunMXvluZfgIGMxQJ-hqiip9Xi3ufKkKVsq3QPUAiooAS4dgCxZ5dgJkEalUQsdJBePV5mb1Xs1KmWFJcBP90urqzY65aifmIfo5uo64IkO78-03UonUzV9mMlac7pz3vWmRDpq3Q5jtpHiG2CmZ4" />
						</div>
						<div>
							<h4 className="mb-2 text-sm font-bold uppercase tracking-tighter text-[#b10e6b]">01. THE QUARTZ PROTOCOL</h4>
							<p className="text-2xl font-bold tracking-tight text-[#25181d]">Redefining Digital Banking for HNWIs</p>
						</div>
					</div>
					<div className="space-y-8 md:mt-24">
						<div className="aspect-[4/5] overflow-hidden rounded-[24px] bg-[#fbe2e9]">
							<img className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0" alt="Collaborative design team working in a bright airy studio space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-omBWG7HAI-849hLLjD1aCASQewG72O3UO9yF_UGMysAEydY10mZxW9YM07WeYRSR0kZnWW4k1qH1IHd4zI8AKI4vzBtxJSALCgsYgYj4n7VOL9yFJMTV0ZjylIHJonqQMBsLGkDuFjKnVXzQ5m-NPAFiFgh9w3bOKfbvmL1NAXnCeBitkWb7Fp7ZtHK3R7XgUpOtOyPyzMpyN-uiGy9lu9aI8BKBVSQ5Gv1Mucxbn_mDIEloFMVRA2AkGCSKBKTU5K8aKC9k00sT" />
						</div>
						<div>
							<h4 className="mb-2 text-sm font-bold uppercase tracking-tighter text-[#b10e6b]">02. VELOCITY LABS</h4>
							<p className="text-2xl font-bold tracking-tight text-[#25181d]">AI-Driven Logistics Dashboard</p>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-[#fff0f3] px-[5vw] py-32">
				<div className="mb-24 text-center">
					<h2 className={`${playfair.className} mb-6 text-[clamp(2.5rem,4.4vw,4.3rem)] italic text-[#25181d]`}>Investment Packages</h2>
					<p className="mx-auto max-w-xl text-[#574048]">Transparent tiers for every stage of your digital evolution.</p>
				</div>
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
					{packageCards.map((item) => (
						<div key={item.name} className={`${item.featured ? "scale-[1.02] bg-gradient-to-b from-[#b10e6b] to-[#a90b66] text-white shadow-2xl shadow-[#b10e6b]/30" : "bg-white"} flex flex-col justify-between rounded-[24px] p-12`}>
							<div>
								<h3 className="mb-2 text-2xl font-bold">{item.name}</h3>
								<p className={`mb-8 text-sm ${item.featured ? "text-white/70" : "text-[#574048]"}`}>{item.description}</p>
								<div className="mb-8">
									<span className="text-4xl font-black">{item.price}</span>
									{item.price !== "Custom" && <span className={item.featured ? "text-white/60" : "text-[#8b7079]"}>/mo</span>}
								</div>
								<ul className="mb-12 space-y-4">
									{item.features.map((feature) => (
										<li key={feature} className={`flex items-center gap-3 text-sm ${item.featured ? "text-white" : "text-[#25181d]"}`}>
											<MaterialIcon name="check_circle" filled /> {feature}
										</li>
									))}
								</ul>
							</div>
							<button className={`w-full rounded-xl py-4 font-bold transition-all ${item.featured ? "bg-white text-[#b10e6b] hover:scale-95" : "border-2 border-[#b10e6b] text-[#b10e6b] hover:bg-[#b10e6b] hover:text-white"}`}>
								{item.featured ? "Start My Era" : item.name === "Enterprise" ? "Enquire Now" : "Select Plan"}
							</button>
						</div>
					))}
				</div>
			</section>

			<section className="bg-[#fff8f8] px-[5vw] py-32">
				<h2 className={`${playfair.className} mb-24 text-center text-[clamp(2.5rem,4.4vw,4.3rem)] italic text-[#25181d]`}>The Growth Sequence</h2>
				<div className="relative grid grid-cols-1 gap-12 md:grid-cols-4">
					<div className="absolute left-0 right-0 top-1/2 z-0 hidden h-0.5 -translate-y-1/2 bg-[#fbe2e9] md:block" />
					{timeline.map((item) => (
						<div key={item.step} className="relative z-10 text-center">
							<div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-[#b10e6b] to-[#a90b66] text-white font-bold">{item.step}</div>
							<h4 className="mb-2 font-bold text-[#25181d]">{item.title}</h4>
							<p className="px-4 text-sm leading-6 text-[#574048]">{item.text}</p>
						</div>
					))}
				</div>
			</section>

			<section className="bg-[#fff0f3] px-[5vw] py-32">
				<div className="mx-auto max-w-4xl text-center">
					<div className="mb-8 text-6xl text-[#b10e6b]">“</div>
					<p className={`${playfair.className} mb-12 text-[clamp(1.8rem,3.3vw,3.4rem)] italic leading-[1.45] text-[#25181d]`}>
						"TK Voice &amp; Visuals didn't just build a portal; they crafted a digital experience that mirrors the luxury of our physical showrooms. Our conversion rates have seen a 40% uplift since launch."
					</p>
					<div className="flex items-center justify-center gap-4">
						<img className="h-16 w-16 rounded-full object-cover" alt="Professional portrait of a luxury brand CEO" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9WVofFCdXs8HTqKTsoZSQJC08xqBY9SkuTLU8rbvUFe_3l8c2KEYe0MvJG_1onLPynF2DEYBLBGYsOXt6c2TZnZAL_vyYLjh2kzoHwZp1ZCOMydouUleOsj2T1Nw7J8S8RjQCqSYXJcvAKlHaGLGD0her_ZXaSG5YJluXnUlTET2nPW7mfOZuzqZtOg7BInECOtIS5rUrWzxliQLm8c4bpwTpihkzLXR6iDjp8Fp8fK_mLEZrnvAJ3Z-AYnlmKw_yCujlXzRu2pi3" />
						<div className="text-left">
							<p className="text-lg font-bold text-[#25181d]">Julian Saint-Amour</p>
							<p className="text-sm uppercase tracking-widest text-[#8b7079]">CEO, Lumina International</p>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-[#fff8f8] px-[5vw] py-32">
				<div className="relative overflow-hidden rounded-[28px] bg-[#25181d] p-16 text-center text-white md:p-24">
					<div className="absolute inset-0 opacity-20">
						<img className="h-full w-full object-cover" alt="Blurred tech background with subtle highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDltGIER7mKFaskoXy8TCt98NngoFSO5btyl42MQ-J8O92_Wgr60Zk7cj4JBlO5trv1ZZpJ9TiKiPkPfldNOdrLraG5E55hznFrvRw6S-uxEgz_5gJmmFV0VpXdTXa-BsrCXOi7KZf2fCwt0irzFcO9cG9Rpz5DzCPg0L2nzagEl1ZrHQQKjqp_THvJgullQF2DSchH65lbIErNOzdoTsrzItrNEiRpzYrMKGLOYz1Ev5u_WYjWyGF7jNGid40abLRlLhXABQF3CWig" />
					</div>
					<div className="relative z-10">
						<h2 className={`${playfair.className} mb-10 text-[clamp(2.6rem,5vw,4.9rem)] italic leading-tight text-white`}>Ready to define your<br />digital era?</h2>
						<button className="rounded-2xl bg-gradient-to-b from-[#b10e6b] to-[#a90b66] px-12 py-5 text-lg font-bold text-white shadow-2xl shadow-[#b10e6b]/40 transition-transform hover:scale-105">
							Schedule Your Consultation
						</button>
					</div>
				</div>
			</section>

			<footer className="w-full border-t-0 bg-[#ffffff] px-[5vw] py-24">
				<div className="mx-auto flex max-w-[1600px] flex-col gap-16 md:flex-row md:items-start md:justify-between">
					<div>
						<div className="mb-6 text-lg font-black text-[#25181d]">TK Voice &amp; Visuals</div>
						<p className="mb-8 max-w-xs text-sm leading-relaxed text-[#665c5d]">Crafting elite digital infrastructure for the visionaries of tomorrow.</p>
						<div className="flex gap-6 text-[10px] uppercase tracking-widest text-[#665c5d]">
							<Link href="#" className="transition-colors hover:text-[#b10e6b]">LinkedIn</Link>
							<Link href="#" className="transition-colors hover:text-[#b10e6b]">Instagram</Link>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-16 md:grid-cols-3">
						<div>
							<h5 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-[#25181d]">Capabilities</h5>
							<ul className="space-y-4 text-sm text-[#665c5d]">
								<li><Link href="#" className="transition-colors hover:text-[#b10e6b]">Digital Strategy</Link></li>
								<li><Link href="#" className="transition-colors hover:text-[#b10e6b]">UI/UX Design</Link></li>
								<li><Link href="#" className="transition-colors hover:text-[#b10e6b]">Web Systems</Link></li>
							</ul>
						</div>
						<div>
							<h5 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-[#25181d]">Company</h5>
							<ul className="space-y-4 text-sm text-[#665c5d]">
								<li><Link href="#" className="transition-colors hover:text-[#b10e6b]">About</Link></li>
								<li><Link href="#" className="transition-colors hover:text-[#b10e6b]">Careers</Link></li>
								<li><Link href="#" className="transition-colors hover:text-[#b10e6b]">Contact</Link></li>
							</ul>
						</div>
						<div className="col-span-2 md:col-span-1">
							<p className="mb-4 text-sm leading-relaxed text-[#665c5d]">&copy; 2026 TK Voice &amp; Visuals. All rights reserved.</p>
							<div className="flex gap-4 text-[10px] uppercase tracking-widest text-[#665c5d]">
								<Link href="#" className="transition-colors hover:text-[#b10e6b]">Privacy Policy</Link>
								<Link href="#" className="transition-colors hover:text-[#b10e6b]">Terms of Service</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</main>
	);
}