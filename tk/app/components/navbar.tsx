"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavbarProps = {
  variant?: "default" | "raru";
  forceVisible?: boolean;
};

/* ─── desktop centre links ─────────────────────────────────────────── */
const centreLinks = [
  { href: "/TK",       label: "Services" },
  { href: "/MIC",      label: "Voice & Visuals" },
  { href: "/systemTK", label: "TK System" },
  { href: "/Workflow", label: "How it works" },
  { href: "/Pricing",  label: "Pricing" },
  { href: "/About",    label: "About" },
];

/* ─── mobile nav links ─────────────────────────────────────────────── */
const mobileLinks = [
  { href: "/TK",       label: "Services" },
  { href: "/MIC",      label: "Voice & Visuals" },
  { href: "/systemTK", label: "TK System" },
  { href: "/Workflow", label: "How it works" },
  { href: "/Pricing",  label: "Pricing" },
  { href: "/About",    label: "About" },
];

function RaRuNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isTkRoute = pathname?.toLowerCase().startsWith("/tk");

  /* Close mobile menu on Escape */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  /* Hide on root / splash */
  if (pathname === "/") {
    return null;
  }

  /* Transparent navbar on the MIC page */
  const isMicPage =
    pathname === "/MIC" ||
    pathname === "/Discover/MIC";

  const navBg = isMicPage
    ? "border-transparent shadow-none bg-transparent"
    : `border-y border-white/35 shadow-[0_20px_50px_rgba(5,7,18,0.18)] backdrop-blur-2xl ${
        isTkRoute ? "bg-[#fff8f8]" : "bg-white/20"
      }`;

  return (
    <>
      <nav
        className={`fixed top-0 z-50 left-0 right-0 w-full max-w-none rounded-none border-x-0 px-5 py-4 text-[#25181d] transition-all duration-300 ${navBg}`}
      >
        <div className="flex items-center justify-between gap-3 px-0 md:px-[5vw] w-full">

          {/* ── Mobile logo ─────────────────────────────────────── */}
          <Link
            href="/"
            className="md:hidden flex min-w-0 items-center gap-2.5 sm:gap-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/site_img/logobg.png"
              alt="TK Voice & Visuals"
              width={44}
              height={44}
              priority
              className="h-10 w-10 rounded-full object-cover ring-1"
            />
          </Link>

          {/* ── Desktop nav ─────────────────────────────────────── */}
          <div className="hidden items-center gap-6 xl:gap-8 md:flex">
            {/* Left links (before logo) */}
            {centreLinks.slice(0, 3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#25181d]/70 transition-colors hover:text-[#890051]"
              >
                {item.label}
              </Link>
            ))}

            {/* Centre logo */}
            <Link
              href="/"
              className="flex min-w-0 items-center mx-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Image
                src="/site_img/logobg.png"
                alt="TK Voice & Visuals"
                width={52}
                height={52}
                priority
                className="h-12 w-12 rounded-full object-cover ring-1"
              />
            </Link>

            {/* Right links (after logo) */}
            {centreLinks.slice(3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#25181d]/70 transition-colors hover:text-[#890051]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* ── Desktop CTA buttons ──────────────────────────────── */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/SignIn"
              className="rounded-full border border-[#b10e6b]/15 bg-white/45 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#890051] transition-colors hover:bg-white/70 hover:text-[#b10e6b]"
            >
              SignIn
            </Link>
            <Link
              href="/Consultancy"
              className="rounded-full bg-gradient-to-r from-[#890051] to-[#b10e6b] px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-transform hover:-translate-y-0.5 hover:opacity-95"
            >
              Consultancy
            </Link>
          </div>

          {/* ── Mobile: CTA + hamburger ──────────────────────────── */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/SignIn"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full border border-[#b10e6b]/15 bg-white/55 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#890051] shadow-sm transition-colors hover:bg-white/75"
            >
              SignIn
            </Link>
            <Link
              href="/Consultancy"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full bg-gradient-to-r from-[#890051] to-[#b10e6b] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Consultancy
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full border border-white/40 bg-white/45 text-[#890051] shadow-sm transition-colors hover:bg-white/70"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((current) => !current)}
            >
              <span className="text-xl leading-none">{mobileMenuOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </div>

        {/* ── Mobile menu panel ───────────────────────────────────── */}
        <div
          id="mobile-navigation"
          className={`overflow-hidden md:hidden transition-all duration-300 ease-out ${
            mobileMenuOpen
              ? "mt-4 max-h-[80vh] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="rounded-[24px] border border-white/45 bg-white/88 p-4 shadow-[0_18px_45px_rgba(5,7,18,0.14)] backdrop-blur-2xl">
            <div className="grid gap-4">
              <div className="rounded-[20px] border border-[#b10e6b]/10 bg-white/70 p-4">
                <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#857278]">
                  Navigate
                </div>
                <div className="grid gap-2">
                  {mobileLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between rounded-[16px] bg-white/80 px-4 py-3 text-sm font-semibold text-[#25181d] transition-colors hover:bg-[#f5dce3]/80"
                    >
                      <span>{item.label}</span>
                      <span className="text-[#b10e6b]">›</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <Link
                  href="/SignIn"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-[16px] border border-[#b10e6b]/15 bg-white/75 px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[#890051] transition-colors hover:bg-white"
                >
                  SignIn
                </Link>
                <Link
                  href="/Consultancy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-[16px] bg-gradient-to-r from-[#890051] to-[#b10e6b] px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-0.5"
                >
                  Consultancy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default function Navbar({ variant = "default", forceVisible = false }: NavbarProps) {
  const pathname = usePathname();
  const normalizedPathname = pathname?.toLowerCase();
  const isHomeRoute = normalizedPathname === "/";

  if (!forceVisible && isHomeRoute) return null;
  return <RaRuNavbar />;
}
