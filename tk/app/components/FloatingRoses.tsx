"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Basic SVG paths for a petal and a rose
const PetalSVG = () => (
	<svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M50 0C60 20 80 40 80 60C80 80 60 100 50 100C40 100 20 80 20 60C20 40 40 20 50 0Z" />
	</svg>
);

const RoseSVG = () => (
	<svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M50 10 C60 10, 70 20, 75 30 C85 30, 95 40, 90 55 C85 70, 75 80, 60 85 C55 95, 45 95, 40 85 C25 80, 15 70, 10 55 C5 40, 15 30, 25 30 C30 20, 40 10, 50 10 Z" opacity="0.8"/>
		<path d="M50 25 C55 25, 65 35, 65 45 C75 50, 75 60, 65 70 C55 75, 45 75, 35 70 C25 60, 25 50, 35 45 C35 35, 45 25, 50 25 Z" opacity="0.9"/>
		<path d="M50 40 C55 40, 60 45, 60 50 C60 55, 55 60, 50 60 C45 60, 40 55, 40 50 C40 45, 45 40, 50 40 Z" opacity="1"/>
	</svg>
);

interface ElementProps {
	id: number;
	type: 'petal' | 'rose';
	size: number;
	xStart: number;
	xEnd: number;
	yStart: number;
	yEnd: number;
	duration: number;
	delay: number;
	blur: number;
	opacity: number;
	rotateStart: number;
	rotateEnd: number;
}

export default function FloatingRoses() {
	const [elements, setElements] = useState<ElementProps[]>([]);

	useEffect(() => {
		// Generate random elements on the client to avoid hydration mismatch
		const count = 25; // 25 elements total
		const generated: ElementProps[] = Array.from({ length: count }).map((_, i) => {
			const type = Math.random() > 0.3 ? 'petal' : 'rose';
			const size = type === 'rose' ? Math.random() * 40 + 30 : Math.random() * 20 + 10;
			
			// Depth logic: larger items are "closer" (less blur, more opacity, faster)
			// smaller items are "farther" (more blur, less opacity, slower)
			const depth = Math.random(); // 0 to 1
			const blur = depth * 8; // 0px to 8px blur
			const opacity = 0.2 + (1 - depth) * 0.4; // 0.2 to 0.6
			const duration = 15 + depth * 25; // 15s to 40s
			
			return {
				id: i,
				type,
				size,
				xStart: Math.random() * 120 - 10, // -10vw to 110vw
				xEnd: Math.random() * 120 - 10,
				yStart: -20, // Start slightly above the top
				yEnd: 120, // End below the bottom
				duration,
				delay: Math.random() * -30, // Negative delay so they are already on screen
				blur,
				opacity,
				rotateStart: Math.random() * 360,
				rotateEnd: Math.random() * 360 + 360 * (Math.random() > 0.5 ? 1 : -1)
			};
		});

		setElements(generated);
	}, []);

	if (elements.length === 0) return null;

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
			{elements.map((el) => (
				<motion.div
					key={el.id}
					className="absolute text-white/80 mix-blend-screen"
					style={{
						width: el.size,
						height: el.size,
						filter: `blur(${el.blur}px)`,
						opacity: el.opacity,
					}}
					initial={{
						x: `${el.xStart}vw`,
						y: `${el.yStart}vh`,
						rotate: el.rotateStart,
					}}
					animate={{
						x: `${el.xEnd}vw`,
						y: `${el.yEnd}vh`,
						rotate: el.rotateEnd,
					}}
					transition={{
						duration: el.duration,
						delay: el.delay,
						repeat: Infinity,
						ease: "linear",
					}}
				>
					{el.type === 'rose' ? <RoseSVG /> : <PetalSVG />}
				</motion.div>
			))}
		</div>
	);
}
