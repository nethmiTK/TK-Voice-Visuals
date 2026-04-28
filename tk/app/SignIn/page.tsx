import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

const playfair = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	display: "swap",
});

function ArrowIcon() {
	return (
		<svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-none stroke-current stroke-[2.2]">
			<path d="M5 12h11" strokeLinecap="round" />
			<path d="m12 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

function KeyIcon() {
	return (
		<svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-none stroke-current stroke-[1.9]">
			<circle cx="8.5" cy="11.5" r="3.5" />
			<path d="M11.5 11.5H20" strokeLinecap="round" />
			<path d="M16 11.5v2.5" strokeLinecap="round" />
			<path d="M18.5 11.5v1.5" strokeLinecap="round" />
		</svg>
	);
}

export default function SignInPage() {
	return (
		<div className={`${inter.className} relative min-h-screen overflow-hidden bg-[#fff8f8] text-[#25181d]`}>
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(177,14,107,0.18),transparent_38%),radial-gradient(circle_at_100%_100%,rgba(177,14,107,0.14),transparent_40%),linear-gradient(180deg,#f3dbe3_0%,#fff8f8_34%,#fff8f8_100%)]" />
			<div className="pointer-events-none absolute -left-24 top-0 h-[480px] w-[480px] rounded-full bg-[#b10e6b] opacity-30 blur-[130px]" />
			<div className="pointer-events-none absolute -right-32 bottom-0 h-[560px] w-[560px] rounded-full bg-[#b10e6b] opacity-25 blur-[150px]" />

			<main className="relative z-10 flex min-h-screen items-center justify-center px-[5vw] pb-10 pt-24 md:pb-12 md:pt-28">
				<section className="flex w-full max-w-[1460px] flex-col overflow-hidden rounded-[36px] bg-[#fff8f8]/84 shadow-[0_30px_120px_rgba(177,14,107,0.12)] ring-1 ring-white/50 backdrop-blur-[22px] lg:min-h-[810px] lg:flex-row">
					<div className="relative min-h-[420px] flex-1 overflow-hidden bg-[#890051] lg:min-h-full lg:basis-[57%]">
						<img alt="High-fashion editorial portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADOIkj-zBSMJjjkncqKJF0u9qsKJ_yWL2orHXW70oBHOL86gkt3OabGbUKP8ULCBxp5HUptQSJoy6Dnrmooh14tHQjQRfxLR_pwQoMwxI6--QdYs_fg6mWqT68JFGEWy_3qFfVOCoc0CnC5rAFgfzGqhCKIF9U6k2n6fl_eapEnHjdoIDT2h_8ot-u6bPeCrvo0C7c8sVuUUs75yqlhzvXEKUrM81OIJ0iWcb4p7p-D0jYCDTNz2nAwytwsWUysUQZSAjfxJpATi3P" className="absolute inset-0 h-full w-full object-cover" />
						<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(137,0,81,0.66)_0%,rgba(137,0,81,0.18)_42%,rgba(137,0,81,0)_100%),linear-gradient(180deg,rgba(8,3,7,0.18)_0%,rgba(137,0,81,0.04)_40%,rgba(137,0,81,0.88)_100%)]" />
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_34%,rgba(255,255,255,0.08),transparent_18%),linear-gradient(115deg,transparent_0%,transparent_42%,rgba(255,255,255,0.04)_50%,transparent_58%,transparent_100%)]" />
						<div className="absolute bottom-0 left-0 max-w-[520px] p-8 text-white md:p-12 lg:p-16">
							<div className="mb-7 h-[2px] w-16 bg-white/50" />
							<h1 className={`${playfair.className} text-[clamp(3.4rem,6vw,5.35rem)] italic leading-[0.9] tracking-[-0.045em] text-white`}>
								The New
								<br />
								Standard.
							</h1>
							<p className="mt-7 max-w-md text-[clamp(1rem,1.55vw,1.24rem)] leading-[1.68] text-white/78">
								Experience the convergence of elite visual storytelling and strategic creative intelligence.
							</p>
						</div>
					</div>

					<div className="flex flex-1 items-center bg-[#fff8f8]/92 px-8 py-12 md:px-14 lg:basis-[43%] lg:px-16 lg:py-16">
						<div className="mx-auto w-full max-w-[420px]">
							<div className="mb-14 md:mb-16">
								<span className="block text-[11px] font-bold uppercase tracking-[0.42em] text-[#b10e6b]">Elite Portal Access</span>
								<h2 className={`${playfair.className} mt-5 text-[clamp(3.15rem,4.8vw,4.5rem)] leading-[0.9] tracking-[-0.05em] text-[#2d2327]`}>
									Welcome
									<br />
									back
								</h2>
								<p className="mt-5 max-w-xs text-[15px] font-medium leading-6 text-[#857278] md:text-[16px]">Secure entry for members and creative partners.</p>
							</div>

							<form className="space-y-10">
								<div className="space-y-3">
									<label htmlFor="username" className="ml-1 block text-[11px] font-bold uppercase tracking-[0.32em] text-[#857278]">Username</label>
									<div className="flex items-center rounded-[22px] bg-[#f3e5e6]/70 px-6 py-5 transition-colors focus-within:bg-[#f5dce3]">
										<input id="username" name="username" type="text" placeholder="Enter your username" className="flex-1 bg-transparent text-[18px] font-medium text-[#25181d] placeholder:text-[#b19aa3] outline-none" />
										<span className="ml-4 text-[22px] font-medium leading-none text-[#b19aa3]">@</span>
									</div>
								</div>

								<div className="space-y-3">
									<div className="flex items-center justify-between px-1">
										<label htmlFor="password" className="block text-[11px] font-bold uppercase tracking-[0.32em] text-[#857278]">Password</label>
										<Link href="/Consultancy" className="text-[11px] font-bold uppercase tracking-[0.32em] text-[#b10e6b]/60 transition-colors hover:text-[#b10e6b]">Forgot?</Link>
									</div>
									<div className="flex items-center rounded-[22px] bg-[#f3e5e6]/70 px-6 py-5 transition-colors focus-within:bg-[#f5dce3]">
										<input id="password" name="password" type="password" placeholder="••••••••••" className="flex-1 bg-transparent text-[18px] font-medium text-[#25181d] placeholder:text-[#b19aa3] outline-none" />
										<span className="ml-4 text-[#b19aa3]"><KeyIcon /></span>
									</div>
								</div>

								<div className="pt-6">
									<button type="submit" className="flex w-full items-center justify-center gap-4 rounded-[18px] bg-gradient-to-r from-[#890051] via-[#b10e6b] to-[#cf1d76] px-10 py-6 text-[13px] font-bold uppercase tracking-[0.28em] text-white shadow-[0_18px_40px_rgba(177,14,107,0.28)] transition-transform hover:-translate-y-0.5">
										Enter Studio
										<ArrowIcon />
									</button>
								</div>
							</form>

							<div className="mt-16 border-t border-[#efd4dd] pt-8 text-center">
								<p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a58a95]">New Partner? <Link href="/Consultancy" className="font-bold text-[#b10e6b] transition-colors hover:text-[#890051]">Inquire for Access</Link></p>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className="relative z-10 flex flex-col items-center justify-between gap-6 px-[5vw] pb-8 pt-6 text-[10px] uppercase tracking-[0.34em] text-[#b89aa3] md:flex-row">
				<div className="text-center md:text-left">&copy; 2024 TK Voice &amp; Visuals. All rights reserved.</div>
				<div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
					<Link href="/" className="transition-colors hover:text-[#b10e6b]">Privacy Policy</Link>
					<Link href="/" className="transition-colors hover:text-[#b10e6b]">Terms of Service</Link>
					<Link href="/" className="font-bold text-[#b10e6b] transition-colors hover:text-[#890051]">Studio Hub</Link>
				</div>
			</footer>
		</div>
  );
}
