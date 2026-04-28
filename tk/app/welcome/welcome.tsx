"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export default function Welcome() {
	const router = useRouter();
	const [stage, setStage] = useState<"loading" | "reveal" | "redirect">("loading");

	useEffect(() => {
		const loadingTimer = window.setTimeout(() => {
			setStage("reveal");
		}, 3000);

		const redirectTimer = window.setTimeout(() => {
			setStage("redirect");
			router.push("/TK");
		}, 5000);

		return () => {
			window.clearTimeout(loadingTimer);
			window.clearTimeout(redirectTimer);
		};
	}, [router]);

	return (
		<div
			className={`${inter.className} relative flex min-h-screen items-center justify-center overflow-hidden cursor-none`}
			style={{ backgroundColor: "#EFE8E8" }}
		>
			<div className="pointer-events-none absolute inset-0 opacity-30">
				<div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b10e6b] blur-3xl animate-pulse" />
				<div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b10e6b]/15" />
				<div className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b10e6b]/20 shadow-[0_0_0_1px_rgba(177,14,107,0.08)]" />
			</div>

			<div className="relative z-10 flex flex-col items-center justify-center px-6 py-12">
				{stage === "loading" ? (
					<motion.div
						initial={{ opacity: 0, scale: 0.75, rotate: -8 }}
						animate={{ opacity: 1, scale: 1, rotate: 0 }}
						transition={{ duration: 1.1, ease: "easeOut" }}
						className="relative h-[240px] w-[240px] rounded-full bg-white/62 p-4 shadow-[0_0_0_1px_rgba(177,14,107,0.12),0_30px_120px_rgba(177,14,107,0.22)] ring-1 ring-white/80 backdrop-blur-xl md:h-[320px] md:w-[320px]"
					>
						<motion.div
							animate={{ scale: [1, 1.04, 1], opacity: [0.88, 1, 0.88] }}
							transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
							className="absolute inset-0 rounded-full border border-[#b10e6b]/22"
						/>
						<div className="absolute inset-3 rounded-full border border-[#b10e6b]/12" />
						<Image
							src="/site_img/logo.jpg"
							alt="TK Voice & Visuals logo"
							width={320}
							height={320}
							priority
							className="h-full w-full rounded-full object-cover"
						/>
					</motion.div>
				) : stage === "reveal" ? (
					<motion.div
						initial={{ scale: 0.85, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.8 }}
						className="relative h-[260px] w-[260px] rounded-full bg-white/62 p-4 shadow-[0_0_0_1px_rgba(177,14,107,0.12),0_30px_120px_rgba(177,14,107,0.22)] ring-1 ring-white/80 backdrop-blur-xl md:h-[340px] md:w-[340px]"
					>
						<div className="absolute inset-0 rounded-full border border-[#b10e6b]/22" />
						<div className="absolute inset-3 rounded-full border border-[#b10e6b]/12" />
						<Image
							src="/site_img/logo.jpg"
							alt="TK Voice & Visuals logo"
							width={340}
							height={340}
							priority
							className="h-full w-full rounded-full object-cover"
						/>
					</motion.div>
				) : null}
			</div>
		</div>
	);
}