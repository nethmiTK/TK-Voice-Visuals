"use client";

import Image from "next/image";
import Link from "next/link";
import {
	FaFacebookF,
	FaWhatsapp,
	FaLinkedinIn,
	FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative w-full overflow-hidden border-t border-[#ead8de] bg-gradient-to-r from-[#fff8f8] via-[#f8e8ed] to-[#fff8f8] text-[#25181d]">

			{/* Soft decorative glow */}
			<div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#b10e6b]/5 blur-3xl" />
			<div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#890051]/5 blur-3xl" />

			<div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-[5vw]">

				{/* ─────────────────────────────────────────────
            MAIN FOOTER
        ───────────────────────────────────────────── */}
				<div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">

					{/* ───────────── Brand ───────────── */}
					<div className="lg:col-span-4">

						<Link
							href="/"
							className="inline-flex items-center gap-3"
						>
							<Image
								src="/site_img/logobg.png"
								alt="TK Voice & Visuals"
								width={58}
								height={58}
								className="h-14 w-14 rounded-full object-cover shadow-sm ring-1 ring-[#b10e6b]/10"
							/>

							<div>
								<div className="text-lg font-semibold tracking-tight text-[#25181d]">
									TK Voice & Visuals
								</div>

								<div className="text-[9px] uppercase tracking-[0.35em] text-[#a90b66]">
									Vision to Reality
								</div>
							</div>
						</Link>

						<p className="mt-6 max-w-sm text-sm leading-7 text-[#6f5d63]">
							Creative voice, visual storytelling and digital solutions
							designed to turn ideas into meaningful experiences.
						</p>

						{/* Social icons */}
						<div className="mt-7 flex items-center gap-3">

							<a
								href="https://www.facebook.com/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook"
								className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#b10e6b]/15 bg-white/70 transition-all duration-300 hover:-translate-y-1 hover:bg-[#890051]"
							>
								<FaFacebookF className="text-[#890051] transition-colors group-hover:text-white" />
							</a>

							<a
								href="https://wa.me/94752632946"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="WhatsApp"
								className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#b10e6b]/15 bg-white/70 transition-all duration-300 hover:-translate-y-1 hover:bg-[#890051]"
							>
								<FaWhatsapp className="text-[#890051] transition-colors group-hover:text-white" />
							</a>

							<a
								href="https://www.instagram.com/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
								className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#b10e6b]/15 bg-white/70 transition-all duration-300 hover:-translate-y-1 hover:bg-[#890051]"
							>
								<FaInstagram className="text-[#890051] transition-colors group-hover:text-white" />
							</a>

							<a
								href="https://www.linkedin.com/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#b10e6b]/15 bg-white/70 transition-all duration-300 hover:-translate-y-1 hover:bg-[#890051]"
							>
								<FaLinkedinIn className="text-[#890051] transition-colors group-hover:text-white" />
							</a>

						</div>
					</div>


					{/* ───────────── Explore ───────────── */}
					<div className="lg:col-span-2">

						<h3 className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a90b66]">
							Explore
						</h3>

						<div className="flex flex-col gap-4">

							<Link
								href="/TK"
								className="text-sm text-[#5f4d54] transition-colors hover:text-[#890051]"
							>
								Services
							</Link>

							<Link
								href="/MIC"
								className="text-sm text-[#5f4d54] transition-colors hover:text-[#890051]"
							>
								Voice & Visuals
							</Link>

							<Link
								href="/systemTK"
								className="text-sm text-[#5f4d54] transition-colors hover:text-[#890051]"
							>
								TK System
							</Link>

							<Link
								href="/Workflow"
								className="text-sm text-[#5f4d54] transition-colors hover:text-[#890051]"
							>
								How It Works
							</Link>

							<Link
								href="/Pricing"
								className="text-sm text-[#5f4d54] transition-colors hover:text-[#890051]"
							>
								Pricing
							</Link>

						</div>
					</div>


					{/* ───────────── Company ───────────── */}
					<div className="lg:col-span-2">

						<h3 className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a90b66]">
							Company
						</h3>

						<div className="flex flex-col gap-4">

							<Link
								href="/About"
								className="text-sm text-[#5f4d54] transition-colors hover:text-[#890051]"
							>
								About
							</Link>

							<Link
								href="/Consultancy"
								className="text-sm text-[#5f4d54] transition-colors hover:text-[#890051]"
							>
								Consultancy
							</Link>

							<Link
								href="/SignIn"
								className="text-sm text-[#5f4d54] transition-colors hover:text-[#890051]"
							>
								Sign In
							</Link>

						</div>
					</div>


					{/* ───────────── Contact ───────────── */}
					<div className="lg:col-span-4">

						<h3 className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a90b66]">
							Start a Conversation
						</h3>

						<div className="rounded-[24px] border border-white/80 bg-white/55 p-6 shadow-[0_20px_60px_rgba(89,18,54,0.06)] backdrop-blur-xl">

							{/* Phone */}
							<a
								href="tel:+94752632946"
								className="group mb-5 flex items-start gap-4"
							>
								<div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#f7dce5] text-[#a90b66] transition-colors group-hover:bg-[#890051] group-hover:text-white">
									☎
								</div>

								<div>
									<p className="text-[9px] uppercase tracking-[0.2em] text-[#8b7079]">
										Priority Line
									</p>

									<p className="mt-1 text-sm font-semibold leading-6 text-[#25181d]">
										075 263 2946
										<br />
										077 785 8521
									</p>
								</div>
							</a>


							{/* Website */}
							<a
								href="https://tkvoicevisuals.me"
								target="_blank"
								rel="noopener noreferrer"
								className="group mb-5 flex items-start gap-4"
							>
								<div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#f7dce5] text-[#a90b66] transition-colors group-hover:bg-[#890051] group-hover:text-white">
									◉
								</div>

								<div>
									<p className="text-[9px] uppercase tracking-[0.2em] text-[#8b7079]">
										Digital Office
									</p>

									<p className="mt-1 text-sm font-semibold text-[#25181d]">
										tkvoicevisuals.me
									</p>
								</div>
							</a>


							{/* CTA */}
							<Link
								href="/Consultancy"
								className="mt-2 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#890051] to-[#b10e6b] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white shadow-[0_12px_30px_rgba(169,11,102,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(169,11,102,0.25)]"
							>
								Start a Project →
							</Link>

						</div>
					</div>

				</div>


				{/* ─────────────────────────────────────────────
            DIVIDER
        ───────────────────────────────────────────── */}
				<div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-[#d9b8c4] to-transparent" />


				{/* ─────────────────────────────────────────────
            BOTTOM
        ───────────────────────────────────────────── */}
				<div className="flex flex-col items-center justify-between gap-5 text-xs text-[#8b7079] md:flex-row">

					<span>
						© {currentYear} TK Voice & Visuals. All rights reserved.
					</span>

					<div className="flex flex-wrap justify-center gap-x-5 gap-y-2">

						<Link
							href="/privacy-policy"
							className="transition-colors hover:text-[#890051]"
						>
							Privacy Policy
						</Link>

						<Link
							href="/security-policy"
							className="transition-colors hover:text-[#890051]"
						>
							Security Policy
						</Link>

						<Link
							href="/terms-of-service"
							className="transition-colors hover:text-[#890051]"
						>
							Terms Of Service
						</Link>

						<Link
							href="/legal-policy"
							className="transition-colors hover:text-[#890051]"
						>
							Legal Policy
						</Link>

						<Link
							href="/SignIn"
							className="font-medium text-[#890051] transition-colors hover:text-[#b10e6b]"
						>
							Sign In
						</Link>

					</div>

				</div>

			</div>
		</footer>
	);
};

export default Footer;

