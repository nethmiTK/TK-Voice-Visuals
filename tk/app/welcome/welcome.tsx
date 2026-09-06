"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export default function Welcome() {
	const router = useRouter();
	const [stage, setStage] = useState<"loading" | "reveal" | "exit">("loading");

	useEffect(() => {
		// Stage 1 → reveal: logo fully visible
		const revealTimer = window.setTimeout(() => {
			setStage("reveal");
		}, 3000);

		// Stage 2 → exit: scale-up blow-out animation starts
		const exitTimer = window.setTimeout(() => {
			setStage("exit");
		}, 4400);

		// Stage 3 → navigate after exit animation completes (~700ms)
		const redirectTimer = window.setTimeout(() => {
			router.push("/TK");
		}, 5100);

		return () => {
			window.clearTimeout(revealTimer);
			window.clearTimeout(exitTimer);
			window.clearTimeout(redirectTimer);
		};
	}, [router]);

	return (
		<AnimatePresence mode="wait">
			{stage !== "exit" ? (
				<motion.div
					key="splash"
					className={`${inter.className} relative flex min-h-screen items-center justify-center overflow-hidden cursor-none`}
					style={{ backgroundColor: "#EFE8E8" }}
					exit={{ scale: 1.15, opacity: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
				>
					{/* Background glow blobs */}
					<div className="pointer-events-none absolute inset-0 opacity-30">
						<div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b10e6b] blur-3xl animate-pulse" />
						<div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b10e6b]/15" />
						<div className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b10e6b]/20 shadow-[0_0_0_1px_rgba(177,14,107,0.08)]" />
					</div>

					<div className="relative z-10 flex flex-col items-center justify-center px-6 py-12">
						<motion.div
							initial={{ opacity: 0, scale: 0.75, rotate: -8 }}
							animate={{ opacity: 1, scale: 1, rotate: 0 }}
							transition={{ duration: 1.1, ease: "easeOut" }}
							className="relative h-[100px] w-[100px] rounded-full bg-white/62 p-3 shadow-[0_0_0_1px_rgba(177,14,107,0.12),0_24px_96px_rgba(177,14,107,0.2)] ring-1 ring-white/80 backdrop-blur-xl md:h-[80px] md:w-[80px]"
						>
							<motion.div
								animate={{ scale: [1, 1.04, 1], opacity: [0.88, 1, 0.88] }}
								transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
								className="absolute inset-0 rounded-full border border-[#b10e6b]/22"
							/>
							<div className="absolute inset-3 rounded-full border border-[#b10e6b]/12" />
							<img
								src="/site_img/logo.jpg"
								alt="TK Voice & Visuals logo"
								width={280}
								height={280}
								className="h-full w-full rounded-full object-cover"
							/>
						</motion.div>
					</div>
				</motion.div>
			) : (
				/* Exit stage: full-screen overlay that scales up and fades out */
				<motion.div
					key="exit-overlay"
					className="fixed inset-0 z-50 flex items-center justify-center"
					style={{ backgroundColor: "#EFE8E8" }}
					initial={{ scale: 1, opacity: 1 }}
					animate={{ scale: 1.3, opacity: 0 }}
					transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
				>
					<div className="pointer-events-none absolute inset-0 opacity-30">
						<div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b10e6b] blur-3xl" />
					</div>
					<motion.div
						initial={{ scale: 1 }}
						animate={{ scale: 1.5 }}
						transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
						className="relative h-[100px] w-[100px] rounded-full bg-white/62 p-3 shadow-[0_0_0_1px_rgba(177,14,107,0.12),0_24px_96px_rgba(177,14,107,0.2)] ring-1 ring-white/80 backdrop-blur-xl"
					>
						<img
							src="/site_img/logo.jpg"
							alt="TK Voice & Visuals logo"
							width={280}
							height={280}
							className="h-full w-full rounded-full object-cover"
						/>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}