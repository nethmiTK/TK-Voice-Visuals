"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./footer.module.css";

export default function Footer() {
	const pathname = usePathname();
	const normalizedPathname = pathname?.toLowerCase();
	const isSignInRoute = normalizedPathname?.startsWith("/signin");
	const isRaRuRoute = normalizedPathname?.startsWith("/discover/raru");
	const isHomeRoute = normalizedPathname === "/" || normalizedPathname?.startsWith("/tk");

	if (isSignInRoute || isRaRuRoute || isHomeRoute) {
		return null;
	}

	return (
		<footer className={styles.footer}>
			<div className={styles.inner}>
				<div className={styles.grid}>
					<div>
						<div className={styles.brand}>TK VOICE &amp; VISUALS</div>
						<p className={styles.desc}>
							A global creative consortium specializing in the architecture of elite
							brand perception.
						</p>
					</div>


					<div>
						<div className={styles.heading}>Contact</div>
						<Link href="mailto:enquiries@tkvv.com" className={styles.mail}>
							https://tkvoicevisuals.me						</Link>
					</div>
				</div>
				{/* 
				<div className={styles.bottom}>
					<div>© 2026 TK Voice &amp; Visuals. All Rights Reserved.</div>
					<div className={styles.legal}>
						<Link href="/privacy" className={styles.link}>
							Privacy
						</Link>
						<Link href="/terms" className={styles.link}>
							Legal
						</Link>
						<Link href="/terms" className={styles.link}>
							Cookies
						</Link>
					</div>
				</div> */}
			</div>
		</footer>
	);
}
