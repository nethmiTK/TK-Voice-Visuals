"use client";

import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import { usePageTransition } from "../components/TransitionProvider";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

/* ------------------------------------------------------------------
   WelcomeSnapshot
------------------------------------------------------------------ */
function WelcomeSnapshot() {
	return (
		<div
			style={{ backgroundColor: "#EFE8E8" }}
			className={`${inter.className} relative flex h-full w-full items-center justify-center overflow-hidden`}
		>
			{/* Soft pink atmospheric haze */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-[#b10e6b] opacity-20 blur-2xl" />
			</div>

			{/* Logo */}
			<img
				src="/site_img/logobg.png"
				alt="TK Voice & Visuals logo"
				width={240}
				height={240}
				className="relative z-10 h-[240px] w-[240px] object-contain"
			/>
		</div>
	);
}

/* ------------------------------------------------------------------
   Welcome Page
------------------------------------------------------------------ */
export default function Welcome() {
	const { triggerTransition } = usePageTransition();
	const triggered = useRef(false);

	/* ---------------------------------------------------------------
	   FIRE TRANSITION
	---------------------------------------------------------------- */
	const exit = useCallback(() => {
		if (triggered.current) return;

		triggered.current = true;

		triggerTransition("/TK", <WelcomeSnapshot />);
	}, [triggerTransition]);

	/* ---------------------------------------------------------------
	   AUTO NAVIGATION
	   
	   Page loads
		  ↓
	   Wait 1.5 seconds
		  ↓
	   Automatically go to /TK
	   
	   No click
	   No scroll
	   No swipe
	---------------------------------------------------------------- */
	useEffect(() => {
		const timer = window.setTimeout(() => {
			exit();
		}, 2500);

		return () => {
			window.clearTimeout(timer);
		};
	}, [exit]);

	/* ---------------------------------------------------------------
	   SCROLL / SWIPE
	   These still work if the user does it before the timer finishes.
	---------------------------------------------------------------- */
	useEffect(() => {
		const onWheel = (e: WheelEvent) => {
			if (e.deltaY > 0) {
				exit();
			}
		};

		let touchStartY = 0;

		const onTouchStart = (e: TouchEvent) => {
			touchStartY = e.touches[0].clientY;
		};

		const onTouchEnd = (e: TouchEvent) => {
			const touchEndY = e.changedTouches[0].clientY;

			if (touchStartY - touchEndY > 40) {
				exit();
			}
		};

		window.addEventListener("wheel", onWheel, {
			passive: true,
		});

		window.addEventListener("touchstart", onTouchStart, {
			passive: true,
		});

		window.addEventListener("touchend", onTouchEnd, {
			passive: true,
		});

		return () => {
			window.removeEventListener("wheel", onWheel);
			window.removeEventListener("touchstart", onTouchStart);
			window.removeEventListener("touchend", onTouchEnd);
		};
	}, [exit]);

	/* ---------------------------------------------------------------
	   UI
	---------------------------------------------------------------- */
	return (
		<div
			className={`${inter.className} relative flex min-h-screen items-center justify-center overflow-hidden`}
			style={{
				backgroundColor: "#EFE8E8",
			}}
			onClick={exit}
		>
			{/* Soft pink atmospheric haze */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-[#b10e6b] opacity-20 blur-2xl" />
			</div>

			{/* Central Logo */}
			<motion.img
				src="/site_img/logobg.png"
				alt="TK Voice & Visuals logo"
				width={240}
				height={240}
				className="relative z-10 h-[240px] w-[240px] object-contain"
				animate={{
					y: ["0mm", "-1mm", "0mm"],
				}}
				transition={{
					repeat: Infinity,
					duration: 2,
					ease: "easeInOut",
				}}
			/>
		</div>
	);
}