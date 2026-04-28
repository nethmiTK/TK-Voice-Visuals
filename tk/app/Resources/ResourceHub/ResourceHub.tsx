import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const creativeResources = [
	{
		title: "Design Templates",
		description: "Premium Figma and Adobe sets for corporate branding and editorial layouts.",
		cta: "Download Library",
		icon: "▭",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuAfFqsJHbs40WlARBIhGcB7PL3q9LClnVyEy6tM65oqtBu0ts9hGP9f_V_mptD0LXkSNVRdFqNHCZL5MMSQOlzsK6j-jobPKjKFw9wQeHE5IYElRJDxdOSkrMfA5oImxhskuRxxcu-Nhp6_Bmqmp7A2cUw9l4Ez2kymsu147y8pVXlHK4btE9pRvqFGJSkXFPP9Obx9HM_nzVBn6sa0SE8S2O5NBbRbYyHl6K_arHjO-mF_Seq-Nmi2m1hdA4ImGqdDkrtj9T8XEVX6",
	},
	{
		title: "The Font Vault",
		description: "Exclusive typefaces selected for modern authority.",
		cta: "Explore",
		icon: "A",
		accent: true,
	},
	{
		title: "Color Palettes",
		description: "2026 trend reports and hex hierarchies.",
		cta: "Browse",
		icon: "◌",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuBtuQVVF4ueJZWiOMLQQwzI2jl3CEcn5UtRfSvewJufnNEnrPdH5FocuAwpS_KdafedCvq9XbG13D8o9dULUse3E66K4HxKLbRoFIz3R-GXj1Pbhouf5GyfJ6L5mkhn3LU3hPei_rG5NmrI1F4pPUoHu9Zj7Vn4-TrdAANHopXK0-A6ebBW0iq5aPAHvCsKLP21dQG5Yv3novGqzkcMYdsfj9Run3j_f7jMalDSY80QxuvT2ONKENpntE_Yfw_SWjZd039gPcyBga_o",
	},
	{
		title: "Visual Systems",
		description: "Comprehensive grid guides and spatial logic for elite digital products.",
		cta: "Read",
		icon: "╱",
		wide: true,
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuBdFct1L_5btyOnIqcEOANDk9Wmhty53UorPwt0L3Bze170a_0GYdcQEfQu-3JC2sg8MgDay-G346xDMkbwrENbGfVNnGRnD5ilKSIs5-NvoA_cwdYmOxoe3jYDnRMacUNO05FWHtHujWayyIUcw1zmULccwXtdT-P2y6aVk9h1Fkk73czqrtUtcz31rrAqs23kiBcqopX7p5GjYEZRIIsE1VROJsKGmCi5gfRygzOdpDhUd9iWEOB_rpkvdT_suTWlxizGB6e8ryr2",
	},
];

const productionAssets = [
	{
		title: "High-Fidelity Audio",
		description: "Lossless sonic identities, ambient soundscapes, and professional voice tags.",
		bullets: ["96kHz / 24-bit Mastering", "Loopable Transitions"],
		cta: "Listen to Samples",
		icon: "▣",
	},
	{
		title: "Video Stock",
		description: "Curated 4K RAW footage for editorial storytelling and background textures.",
		bullets: ["Apple ProRes 422", "Cinematic LUTs Included"],
		cta: "Watch Library",
		icon: "▶",
	},
	{
		title: "4K Assets",
		description: "Ultra-high resolution textures, mockups, and environmental photography.",
		bullets: ["Transparent PNGs", "Displacement Maps"],
		cta: "View Gallery",
		icon: "◫",
	},
];

const toolkitItems = [
	{
		title: "Branding Analytics",
		description: "Real-time sentiment and authority tracking.",
		icon: "⟡",
	},
	{
		title: "Social Scheduler",
		description: "Automated multi-platform orchestration.",
		icon: "↗",
	},
	{
		title: "SEO Insights",
		description: "Deep-dive technical audits and rankings.",
		icon: "⌁",
	},
];

const studioItems = [
	{
		title: "Soundboard Packs",
		description: "Dynamic soundscapes for broadcast and streaming.",
		icon: "◍",
	},
	{
		title: "Lighting Presets",
		description: "Pre-calibrated curves for ARRI and RED sensors.",
		icon: "◌",
	},
	{
		title: "Motion Packs",
		description: "Smooth 60fps transitions and typography overlays.",
		icon: "⟲",
	},
];

const resourceCards = [
	{
		label: "Whitepaper",
		title: "The 2026 Visual Paradigm",
		description: "A deep dive into the shift from minimalist to editorial digital interfaces.",
		button: "Download PDF",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuC6sHIbZtoNJ_iqQ49o3ulrk9egU_ZHLzjRH1T__VoTxEGUfm2cAGT1Y9CzGJpP430mO6V2rZWPNVQTZM90fvzoHjagIXJ0JqmLU4jp51PN9VVGJB0ZB-Ff0wWk3Jvf1FNQaprkude2fRgo8OQlXfeK9dUcVNl-HnGT3gFxwwQsUsVUujhIaEbhGLuGMh8d-L5RC1N30GWekQLi4z_NRu2A3SPQBVi31aqR-TDXsgrjvTku5kKcX_P2QOV381we_mqbFKEgQN0eqSBP",
	},
	{
		label: "E-book",
		title: "Authority by Design",
		description: "How to build a consultancy brand that commands luxury pricing and elite clients.",
		button: "Download EPUB",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuCzELUx_SUhpisw5UHRF0qbL8Rsfynn6fpGhSyLA9LcjUciTZbPBcT9_oDXn2jF0NeFWGwP3DCzCUV3X9IciIpt4cTZjFuBOPhOrvJxbZLyD57TvDJx1DFekDmEDYyrE3gSYUey8PYASBoN1YExlxqlL-Dzzeop4CP4w5aBfcl_vJ8jnNTbYzXy97MwZKEYa8JjHMobVdQhhYB8bcmBxz1jlkA0kN_oVb1izK4BrjUoqYXQIBj57ViEdyygguQC4U_7Irg282kV60zS",
	},
	{
		label: "Report",
		title: "Q3 Industry Trends",
		description: "Quarterly analysis of creative service markets and pricing fluctuations.",
		button: "Access Data",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuArHYpzfMbPZ-xlafoCTYuaACTyUT8z70l-DEpDLF_nSIPkeSF_qn0WjPJXURFeC_s8jgmpaxtQbV69NQIL6l7Vc-UBT0WambjhjAwrDUvwoLMf6rhAnfng9YhnG_ug_NUQ4miKm_Q3Gn9tkuQvTHdjdkXHZGSFWCmJxFHJB941PjnEjEC3aLbv7mI76R52mXDqx57lbbhnVCLb0nDwTE-uO4Sf1XxOtXRT4r47Tl46ZxMVTiG0woB60f1d_RDTVH2D7x_Ac_-lztAm",
	},
];

export default function ResourceHub() {
	return (
		<main className={`${inter.className} min-h-screen bg-[#fff8f8] text-[#25181d] selection:bg-[#ffd9e4] selection:text-[#3e0022]`}>
			<section className="px-[5vw] pt-64 pb-32 text-center">
				<div className="mx-auto max-w-4xl">
					<span className="mb-6 block text-xs font-bold uppercase tracking-[0.2em] text-[#890051]">
						Curated Knowledge Hub
					</span>
					<h1 className="mb-8 text-[clamp(3.5rem,8vw,5rem)] font-black tracking-[-0.05em] leading-[1.05] text-[#25181d]">
						Resource Hub
					</h1>
					<p className="mx-auto max-w-2xl text-lg leading-8 text-[#574048] md:text-[1.15rem]">
						An elite repository of production assets, strategic toolkits, and creative essentials for the visionary consultant.
					</p>
				</div>
			</section>

			<section className="bg-white px-[5vw] py-32">
				<div className="mb-16 flex items-end justify-between gap-6">
					<div>
						<h2 className="mb-2 text-[clamp(1.8rem,4vw,2.75rem)] font-black tracking-[-0.04em] text-[#25181d]">
							Creative Resources
						</h2>
						<p className="text-[#574048]">The foundation of high-end visual storytelling.</p>
					</div>
					<Link href="/Resources" className="text-xs font-bold uppercase tracking-[0.32em] text-[#890051] transition-colors hover:text-[#b10e6b]">
						Browse All
					</Link>
				</div>

				<div className="grid gap-6 lg:grid-cols-12">
					<article className="overflow-hidden rounded-[24px] bg-[#ffe8ee] lg:col-span-8">
						<div className="grid h-full md:grid-cols-[1.1fr_0.9fr]">
							<div className="p-10 md:p-12">
								<div className="mb-6 text-3xl text-[#890051]">▭</div>
								<h3 className="mb-4 text-[clamp(1.5rem,3vw,2.2rem)] font-black tracking-[-0.04em] text-[#25181d]">
									Design Templates
								</h3>
								<p className="mb-8 max-w-md leading-7 text-[#574048]">
									Premium Figma and Adobe sets for corporate branding and editorial layouts.
								</p>
								<Link href="#" className="text-xs font-bold uppercase tracking-[0.22em] text-[#890051] transition-colors hover:text-[#b10e6b]">
									Download Library ↗
								</Link>
							</div>
							<div className="min-h-[240px] bg-[#fbe2e9] md:min-h-full">
								<img
									alt="Design templates"
									src={creativeResources[0].image}
									className="h-full w-full object-cover"
								/>
							</div>
						</div>
					</article>

					<article className="flex min-h-[320px] flex-col justify-end rounded-[24px] bg-[#890051] p-10 text-white lg:col-span-4">
						<div className="mb-auto text-3xl opacity-60">A</div>
						<h3 className="mb-4 text-[clamp(1.5rem,3vw,2.2rem)] font-black tracking-[-0.04em]">
							The Font Vault
						</h3>
						<p className="mb-8 text-white/82">Exclusive typefaces selected for modern authority.</p>
						<Link href="#" className="inline-flex w-fit rounded-full bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-[#890051]">
							Explore
						</Link>
					</article>

					<article className="rounded-[24px] bg-[#fbe2e9] p-8 lg:col-span-4">
						<div className="mb-8 h-40 overflow-hidden rounded-[18px] bg-[#b10e6b]">
							<img
								alt="Color palettes"
								src={creativeResources[2].image}
								className="h-full w-full object-cover opacity-70"
							/>
						</div>
						<h3 className="mb-2 text-[clamp(1.35rem,2.5vw,1.9rem)] font-black text-[#25181d]">Color Palettes</h3>
						<p className="text-[#574048]">2026 trend reports and hex hierarchies.</p>
					</article>

					<article className="overflow-hidden rounded-[24px] bg-[#fff0f3] lg:col-span-8">
						<div className="grid h-full md:grid-cols-[0.9fr_1.1fr]">
							<div className="min-h-[240px] bg-[#f5dce3] md:order-2">
								<img
									alt="Visual systems"
									src={creativeResources[3].image}
									className="h-full w-full object-cover"
								/>
							</div>
							<div className="p-10 md:p-12">
								<h3 className="mb-4 text-[clamp(1.5rem,3vw,2.2rem)] font-black tracking-[-0.04em] text-[#25181d]">
									Visual Systems
								</h3>
								<p className="mb-8 max-w-md leading-7 text-[#574048]">
									Comprehensive grid guides and spatial logic for elite digital products.
								</p>
								<div className="flex flex-wrap gap-3">
									<span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#890051]">Grid 4.0</span>
									<span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#890051]">Spatial</span>
								</div>
							</div>
						</div>
					</article>
				</div>
			</section>

			<section className="bg-[#fff8f8] px-[5vw] py-32">
				<div className="mb-16">
					<h2 className="mb-2 text-[clamp(1.8rem,4vw,2.75rem)] font-black tracking-[-0.04em] text-[#25181d]">
						Production Assets
					</h2>
					<p className="text-[#574048]">Fidelity that speaks before you do.</p>
				</div>

				<div className="grid gap-8 md:grid-cols-3">
					{productionAssets.map((asset) => (
						<article key={asset.title} className="rounded-[24px] bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-2">
							<div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffe8ee] text-2xl text-[#890051]">
								{asset.icon}
							</div>
							<h3 className="mb-4 text-[clamp(1.35rem,2.5vw,1.9rem)] font-black text-[#25181d]">{asset.title}</h3>
							<p className="mb-8 leading-7 text-[#574048]">{asset.description}</p>
							<ul className="mb-8 space-y-3 text-sm font-medium text-[#25181d]">
								{asset.bullets.map((bullet) => (
									<li key={bullet} className="flex items-center gap-3">
										<span className="h-1.5 w-1.5 rounded-full bg-[#890051]" />
										{bullet}
									</li>
								))}
							</ul>
							<Link href="#" className="text-xs font-bold uppercase tracking-[0.24em] text-[#890051]">
								{asset.cta} ↗
							</Link>
						</article>
					))}
				</div>
			</section>

			<section className="bg-[#fff0f3] px-[5vw] py-32">
				<div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-2 lg:items-center">
					<div>
						<h2 className="mb-6 text-[clamp(2rem,4vw,3rem)] font-black tracking-[-0.04em] text-[#25181d]">
							Work Essentials for Seamless Collaboration
						</h2>
						<p className="mb-12 max-w-xl text-lg leading-8 text-[#574048]">
							Streamline your project lifecycle with our battle-tested agency templates. From the first handshake to the final deliverable.
						</p>

						<div className="space-y-4">
							{[
								{ title: "Creative Briefs", description: "The blueprint for successful vision alignment." },
								{ title: "Strategy Templates", description: "Frameworks for market positioning and growth." },
								{ title: "Onboarding Guides", description: "Create a luxury experience from day one." },
							].map((item) => (
								<div key={item.title} className="flex items-center gap-4 rounded-[20px] bg-white px-6 py-5 transition-colors hover:bg-[#fff8f8]">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#b10e6b] text-white">✦</div>
									<div>
										<h3 className="font-bold text-[#25181d]">{item.title}</h3>
										<p className="text-sm text-[#574048]">{item.description}</p>
									</div>
									<span className="ml-auto text-[#890051]">+</span>
								</div>
							))}
						</div>
					</div>

					<div className="relative">
						<div className="overflow-hidden rounded-[28px] bg-[#fbe2e9] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
							<img
								alt="Work essentials"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4yiO6n7XGYv3MHdzSZxczLrRlTruZb41eSWVu_mWVMthlsEHv8H93n38pPNMAvidUzHCQsTtSzqtSb6zNVpCs0Y_nNVzYq3LgLmiHio2xRsVgoqgVsyFrWa-nmdUi9GoXqJTucZGAY8q_wTd9nFerogFM-8Psf6TFt2BpUrtCmHyL34oX6GXuTHgztlEUxrv-BHnh7v_hoZV0V7iUtiETye6b46dYQhLF4CRVcW-W_NN5jYjq9ZKxHXjssMFMi7MuSv5EHOxRcHFb"
								className="h-[540px] w-full object-cover"
							/>
						</div>
						<div className="absolute -bottom-8 left-8 max-w-xs rounded-[24px] bg-white p-6 shadow-[0_24px_60px_rgba(177,14,107,0.12)]">
							<div className="mb-2 text-2xl font-black text-[#25181d]">12k+</div>
							<p className="text-sm leading-6 text-[#574048]">Resources downloaded by top-tier agencies last quarter.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-[#fff8f8] px-[5vw] py-32">
				<div className="grid gap-12 md:grid-cols-2">
					<div>
						<h2 className="mb-4 text-[clamp(1.8rem,4vw,2.75rem)] font-black tracking-[-0.04em] text-[#25181d]">Agency Toolkit</h2>
						<p className="text-[#574048]">Operational excellence through digital automation.</p>
						<div className="mt-10 space-y-5">
							{toolkitItems.map((item) => (
								<div key={item.title} className="flex items-center gap-5 rounded-[22px] bg-[#ffe8ee] p-6 transition-colors hover:bg-[#b10e6b] hover:text-white">
									<div className="text-2xl text-[#890051] group-hover:text-white">{item.icon}</div>
									<div>
										<h3 className="font-bold text-inherit">{item.title}</h3>
										<p className="text-sm text-[#574048] group-hover:text-white/80">{item.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div>
						<h2 className="mb-4 text-[clamp(1.8rem,4vw,2.75rem)] font-black tracking-[-0.04em] text-[#25181d]">Studio Assets</h2>
						<p className="text-[#574048]">Digital soundboards and lighting for the modern studio.</p>
						<div className="mt-10 space-y-5">
							{studioItems.map((item) => (
								<div key={item.title} className="flex items-center gap-5 rounded-[22px] bg-[#fbe2e9] p-6">
									<div className="text-2xl text-[#890051]">{item.icon}</div>
									<div>
										<h3 className="font-bold text-[#25181d]">{item.title}</h3>
										<p className="text-sm text-[#574048]">{item.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="bg-[#f5dce3] px-[5vw] py-32">
				<div className="mb-16">
					<h2 className="mb-2 text-[clamp(1.8rem,4vw,2.75rem)] font-black tracking-[-0.04em] text-[#25181d]">
						Digital Resources
					</h2>
					<p className="text-[#574048]">Intellectual property for the digital age.</p>
				</div>

				<div className="flex gap-8 overflow-x-auto pb-8">
					{resourceCards.map((card) => (
						<article key={card.title} className="w-[320px] shrink-0 rounded-[24px] bg-white p-8">
							<div className="mb-8 flex h-56 items-center justify-center overflow-hidden rounded-[20px] bg-[#fff8f8]">
								<img alt={card.title} src={card.image} className="h-40 object-contain" />
							</div>
							<span className="mb-4 inline-block rounded-full bg-[#ffe8ee] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#890051]">
								{card.label}
							</span>
							<h3 className="mb-4 text-[1.5rem] font-black tracking-[-0.03em] text-[#25181d]">{card.title}</h3>
							<p className="mb-8 leading-7 text-[#574048]">{card.description}</p>
							<button className="w-full rounded-full bg-[#890051] py-4 text-sm font-bold uppercase tracking-[0.22em] text-white transition-transform hover:-translate-y-0.5">
								{card.button}
							</button>
						</article>
					))}
				</div>
			</section>

			<section className="bg-[#fff8f8] px-[5vw] py-24">
				<div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-12 md:flex-row md:items-start">
					<div className="max-w-sm">
						<h2 className="mb-8 text-2xl font-black text-[#25181d]">Ethereal Authority</h2>
						<p className="mb-8 leading-7 text-[#574048]">
							Defining the future of digital presence through the lens of elite editorial design.
						</p>
						<p className="text-xs font-bold uppercase tracking-[0.24em] text-[#890051]">
							© 2026 Ethereal Authority. All rights reserved.
						</p>
					</div>

					<div className="grid gap-12 sm:grid-cols-3">
						<div className="space-y-4">
							<div className="text-xs font-bold uppercase tracking-[0.24em] text-[#890051]">Agency</div>
							<Link href="#" className="block text-sm text-[#574048] hover:text-[#890051]">About Agency</Link>
							<Link href="#" className="block text-sm text-[#574048] hover:text-[#890051]">Case Studies</Link>
							<Link href="#" className="block text-sm text-[#574048] hover:text-[#890051]">Careers</Link>
						</div>
						<div className="space-y-4">
							<div className="text-xs font-bold uppercase tracking-[0.24em] text-[#890051]">Support</div>
							<Link href="#" className="block text-sm text-[#574048] hover:text-[#890051]">Privacy Policy</Link>
							<Link href="#" className="block text-sm text-[#574048] hover:text-[#890051]">Contact</Link>
						</div>
						<div className="space-y-4">
							<div className="text-xs font-bold uppercase tracking-[0.24em] text-[#890051]">Connect</div>
							<Link href="#" className="block text-sm text-[#574048] hover:text-[#890051]">LinkedIn</Link>
							<Link href="#" className="block text-sm text-[#574048] hover:text-[#890051]">Instagram</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
