"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

type NavbarProps = {
  variant?: "default" | "raru";
  forceVisible?: boolean;
};

const solutionsMenu = [
  {
    href: "/Discover/RaRu",
    title: "RaRu",
    description: "Digital solutions hub with the full editorial system.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAuetVLbXiMia54Jmgy3kcFsspIIUC1-nnD5wykDiaMJ14iBftcr55eTnS_rtJPJWaECXx8f1h8mt18yPNx1wuWFSCPD1UND4Mt-gx8Ft9LB-C89de8vd7xr1OKBffy5DoH1GTYFu8hZPOKK3rF8kKmUVSu_0Pgg5C53Mk7buQ983uHlNsot-F2LeZxJCYcWnL5GFtHr2nGQQMHFyGzweMFX5IksNqPtweN2Mqo_AZyP6l7RCrkkFsg4XpcEHExFaxkNKXrOTRRMejb",
  },
  {
    href: "/Discover/ADcraft",
    title: "ADcraft",
    description: "Campaign-led creative, motion, and conversion work.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNEVLcrfIG3AIW1a0bjO4MzNQ5P8c_Qx5nTlOJtApxRxVbH6na0073OFYiyypOYRYrQMw9zUvZPx9YweBFDGyrXIoagwN39Z_jisQpmZhsgkVZIeS7wy1NKo9A6lZCG-bumQ3iFEDwpbAZDGzBRCtaqx_xL8Fdx2TkiCG977RipXt2aKchaXqb530mRVnPKDiv8BmorU3GEOQ-ybOyVClbL_8uxJf3l0roLthhNPxJGHbWE-xqay0u82ZcD0JXRAK8cO3E0m-VgZm_",
  },
];

function RaRuNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFullWidth, setIsFullWidth] = useState(false);
  const pathname = usePathname();
  const isSignInRoute = pathname?.toLowerCase().startsWith("/signin");
  const isTkRoute = pathname?.toLowerCase().startsWith("/tk");

  useEffect(() => {
    // Keep the navbar full-width on SignIn and TK landing routes.
    if (isSignInRoute || isTkRoute) {
      setIsFullWidth(true);
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    
    const handleScroll = () => {
      // Check if scrolled to bottom of page
      const scrollHeight = document.documentElement.scrollHeight;
      const currentScroll = window.innerHeight + window.scrollY;
      const isNearBottom = currentScroll >= scrollHeight - 200;
      setIsFullWidth(isNearBottom);
    };

    document.addEventListener("keydown", handleEscape);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSignInRoute, isTkRoute]);

  return (
    <>
      <nav
        onMouseLeave={() => setMenuOpen(false)}
        className={`fixed top-0 z-50 mx-auto rounded-none border-x-0 border-y border-white/35 bg-white/20 px-5 py-4 text-[#25181d] shadow-[0_20px_50px_rgba(5,7,18,0.18)] backdrop-blur-2xl transition-all duration-300 ${
          isFullWidth
            ? "left-0 right-0 w-full max-w-none"
            : "left-0 right-0 w-full max-w-none"
        }`}
      >
        <div className="flex items-center justify-between gap-5 px-0 md:px-[5vw]">
          <Link href="/" className={`${playfair.className} text-[20px] font-bold tracking-[-0.05em] text-[#890051] md:text-[24px]`}>
            TK Voice &amp; Visuals
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <div className="relative">
              <Link
                href="/Discover"
                onMouseEnter={() => setMenuOpen(true)}
                className="group flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#25181d]/70 transition-colors hover:text-[#890051]"
              >
                Solutions
                <span className={`text-[14px] transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`}>⌄</span>
              </Link>

              {menuOpen && (
                <div className="absolute left-0 top-[calc(100%+16px)] w-[760px] overflow-hidden rounded-[28px] border border-white/55 bg-white/72 shadow-[0_26px_80px_rgba(177,14,107,0.10)] backdrop-blur-2xl">
                  <div className="grid grid-cols-[1.1fr_1.5fr] gap-4 p-4">
                    <div className="rounded-[20px] border border-[#b10e6b]/8 bg-white/55 p-4">
                      <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#857278]">Discover</div>
                      <div className="space-y-2">
                        {[
                          { href: "/Discover/RaRu", label: "RaRu", desc: "Digital solutions hub" },
                          { href: "/Discover/ADcraft", label: "ADcraft", desc: "Campaign creative" },
                          { href: "/Discover/Nexora", label: "Nexora", desc: "Automation systems" },
                          { href: "/Discover/Voxium", label: "Voxium", desc: "Voice-led experiences" },
                          { href: "/Discover/eyeCatching", label: "eyeCatching", desc: "Editorial visuals" },
                        ].map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-start justify-between rounded-[16px] px-4 py-3 transition-colors hover:bg-[#f5dce3]/70"
                            onClick={() => setMenuOpen(false)}
                          >
                            <div>
                              <div className="text-[14px] font-semibold text-[#25181d]">{item.label}</div>
                              <div className="text-[12px] text-[#857278]">{item.desc}</div>
                            </div>
                            <div className="text-[18px] text-[#b10e6b]/45">›</div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {solutionsMenu.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="group relative overflow-hidden rounded-[20px] border border-white/50 bg-white/70 transition-transform hover:-translate-y-0.5"
                        >
                          <img alt={item.title} src={item.image} className="absolute inset-0 h-full w-full object-cover opacity-28 transition-transform duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-r from-white/78 via-white/44 to-[#f5dce3]/25" />
                          <div className="relative flex min-h-[126px] items-end p-4">
                            <div>
                              <div className="mb-1 text-[14px] font-semibold text-[#25181d]">{item.title}</div>
                              <div className="max-w-[250px] text-[12px] leading-5 text-[#6b4d57]">{item.description}</div>
                            </div>
                          </div>
                        </Link>
                      ))}

                      <div className="rounded-[18px] border border-[#b10e6b]/10 bg-white/55 p-4 text-center">
                        <Link href="/Discover/RaRu" onClick={() => setMenuOpen(false)} className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#890051] transition-colors hover:text-[#b10e6b]">
                          Explore all features ›
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {[
              { label: "How it works", href: "/Workflow" },
              { label: "Resources", href: "/Resources" },
              { label: "Pricing", href: "/Pricing" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#25181d]/62 transition-colors hover:text-[#890051]">
                {item.label}
              </Link>
            ))}

            <Link href="/About" className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#25181d]/62 transition-colors hover:text-[#890051]">
              About
            </Link>

          </div>

          <div className="flex items-center gap-3">
            <Link href="/SignIn" className="rounded-full border border-[#b10e6b]/15 bg-white/45 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#890051] transition-colors hover:bg-white/70 hover:text-[#b10e6b]">
              SignIn
            </Link>

            <Link href="/Consultancy" className="rounded-full bg-gradient-to-r from-[#890051] to-[#b10e6b] px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-transform hover:-translate-y-0.5 hover:opacity-95">
              Consultancy
            </Link>
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
