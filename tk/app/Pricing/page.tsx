import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const pricingTiers = [
  {
    title: "Business Website",
    badge: "Focused Mastery",
    subtitle: "Single Discipline",
    description: "Perfect for individuals and small businesses needing a professional online presence..",
    features: ["Company Profile Website", "Up to 5 Pages", "Responsive Design", "Contact Form", "Basic SEO Setup"],
    priceCta: "Get Started",
    featured: false,
  },
  {
    title: "Custom Business System",
    badge: "Custom Business System",
    subtitle: "Integrated Presence",
    description: "Ideal for businesses that need custom features and workflow automation.",
    features: [
      "Custom Web Application",
      "User Management",
      "Dashboard & Reports",
      "Database Integration",
      "Admin Panel",

    ],
    priceCta: "Scale Now",
    featured: true,
  },
  {
    title: "Vendor Management System",
    badge: "The Ecosystem",
    subtitle: "Full Ecosystem",
    description: "A complete multi-user platform with vendor and administration capabilities.",
    features: ["Vendor Panel & Admin Panel", "Role-Based Access Control", "Order & Product Management", "Analytics & Reports"],
    priceCta: "Contact Us",
    featured: false,
  },
];

const featureColumns = [
  {
    title: "Video",
    items: ["4K Production", "Editing", "Motion Graphics", "Scriptwriting"],
  },
  {
    title: "Voice",
    items: ["VO Recording", "Sound Design", "Podcast Setup", "Audio Strategy"],
  },
  {
    title: "Marketing",
    items: ["PPC Management", "Content Strategy", "SEO Optimization", "Analytics"],
  },
  {
    title: "Web",
    items: ["UI/UX Design", "Development", "Hosting", "Maintenance"],
  },
];

const faqItems = [
  {
    question: "How do you determine custom enterprise pricing?",
    answer:
      "Enterprise engagements are scoped based on output volume, platform complexity, and the level of strategic consulting required. We conduct a full audit before providing a detailed proposal.",
  },
  {
    question: "Can we mix and match services?",
    answer:
      "Yes. We can combine video, voice, marketing, and web into a tailored structure that fits your rollout schedule and brand goals.",
  },
  {
    question: "What is the typical turnaround time for Video?",
    answer:
      "Turnaround depends on the scope. Smaller social assets move quickly, while cinematic productions and larger campaigns are planned in phases.",
  },
];

export default function PricingPage() {
  return (
    <main className={`${inter.className} bg-[#fff8f8] text-[#25181d] selection:bg-[#ffd9e4] selection:text-[#3e0022]`}>
      <section className="mx-auto max-w-7xl px-[5vw] pb-24 pt-40">
        <div className="max-w-4xl">
          <span className="mb-6 block text-xs font-bold uppercase tracking-[0.3em] text-[#890051]">
            Transparent Value
          </span>
          <h1 className="text-[clamp(3.5rem,8vw,5.5rem)] font-black leading-[0.92] tracking-[-0.05em] text-[#25181d]">
            TK VOICE & VISUALS          </h1>
          <p className="mt-8 max-w-2xl text-2xl font-light leading-relaxed text-[#574048]">
            Choose a strategic partner for your brand&apos;s evolution. We bridge the gap between vision and visceral impact.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-[5vw] pb-28 md:grid-cols-3">
        {pricingTiers.map((tier) => (
          <article
            key={tier.title}
            className={`flex flex-col rounded-[24px] p-8 transition-transform duration-500 hover:-translate-y-2 md:p-12 ${tier.featured
              ? "z-10 scale-[1.03] bg-[#b10e6b] text-white shadow-[0_40px_80px_rgba(177,14,107,0.2)]"
              : "bg-white shadow-[0_20px_45px_rgba(177,14,107,0.05)]"
              }`}
          >
            <div className="mb-10">
              <div className={`mb-4 text-xs font-bold uppercase tracking-[0.24em] ${tier.featured ? "text-white/75" : "text-[#574048]"}`}>
                {tier.badge}
              </div>
              <h2 className="text-4xl font-black tracking-[-0.04em]">{tier.title}</h2>
              <div className={`mt-2 text-lg font-bold ${tier.featured ? "text-white/90" : "text-[#890051]"}`}>{tier.subtitle}</div>
            </div>

            <p className={`mb-12 leading-7 ${tier.featured ? "text-white/80" : "text-[#574048]"}`}>{tier.description}</p>

            <div className="mb-12 flex-grow space-y-4">
              {tier.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <span className={`h-2 w-2 rounded-full ${tier.featured ? "bg-white" : "bg-[#890051]"}`} />
                  <span className={`text-sm ${tier.featured ? "text-white/90" : "text-[#25181d]"}`}>{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href="/Consultancy"
              className={`rounded-[16px] px-6 py-4 text-center text-sm font-bold transition-colors ${tier.featured
                ? "bg-white text-[#890051] hover:bg-[#ffecf1]"
                : "bg-[#ffe8ee] text-[#890051] hover:bg-[#f5dce3]"
                }`}
            >
              {tier.priceCta}
            </Link>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-[5vw] pb-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Voice Over */}
          <div className="rounded-[28px] border border-white/60 bg-white p-8 shadow-[0_20px_45px_rgba(177,14,107,0.05)] md:p-10 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] text-8xl">🎙️</div>
            <h2 className="mb-10 font-serif text-3xl leading-tight text-[#890051]">
              Voice Over
            </h2>
            <ul className="space-y-6 relative z-10 flex-grow">
              {[
                ["Basic Voice (up to 30s)", "1,500"],
                ["Basic Voice (up to 1m)", "2,500"],
                ["Narration (1-3m)", "4,000"],
                ["Documentary (per min)", "1,500"],
                ["Commercial (up to 1m)", "5,000"],
                ["Story Dubbing (up to 5m)", "7,500"],
                ["Character Voice", "from 3,000"],
              ].map(([label, price]) => (
                <li key={label} className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-medium text-[#25181d]">{label}</span>
                  <span className="flex-1 border-b border-dotted border-[#debec8] mx-2" />
                  <span className="font-bold text-[#890051] whitespace-nowrap"><span className="text-[10px] uppercase mr-1 opacity-70">LKR</span>{price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reel Editing */}
          <div className="rounded-[28px] border border-white/60 bg-white p-8 shadow-[0_20px_45px_rgba(177,14,107,0.05)] md:p-10 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] text-8xl">🎬</div>
            <h2 className="mb-10 font-serif text-3xl leading-tight text-[#890051]">
              Reel Editing
            </h2>
            <ul className="space-y-6 relative z-10 flex-grow">
              {[
                ["Basic Reel (up to 30s)", "2,500"],
                ["Standard Reel (up to 1m)", "3,500"],
                ["Premium Reel (up to 90s)", "5,000"],
                ["Cinematic Reel (up to 2m)", "7,500"],
              ].map(([label, price]) => (
                <li key={label} className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-medium text-[#25181d]">{label}</span>
                  <span className="flex-1 border-b border-dotted border-[#debec8] mx-2" />
                  <span className="font-bold text-[#890051] whitespace-nowrap"><span className="text-[10px] uppercase mr-1 opacity-70">LKR</span>{price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-8 border-t border-[#f5dce3] relative z-10">
               <h3 className="mb-6 font-bold text-[11px] uppercase tracking-[0.2em] text-[#574048]">Add-Ons</h3>
               <ul className="space-y-4">
                  {[
                    ["Sinhala/Eng Subtitles", "1,000"],
                    ["Custom Thumbnail", "1,500"],
                    ["Motion Graphics", "2,500+"],
                  ].map(([label, price]) => (
                    <li key={label} className="flex items-baseline justify-between gap-2">
                      <span className="text-xs text-[#574048]">{label}</span>
                      <span className="text-xs font-bold text-[#890051] whitespace-nowrap"><span className="text-[9px] uppercase mr-1 opacity-70">LKR</span>{price}</span>
                    </li>
                  ))}
               </ul>
            </div>
          </div>

          {/* Video Editing */}
          <div className="rounded-[28px] border border-white/60 bg-white p-8 shadow-[0_20px_45px_rgba(177,14,107,0.05)] md:p-10 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] text-8xl">🎥</div>
            <h2 className="mb-10 font-serif text-3xl leading-tight text-[#890051]">
              Video Editing
            </h2>
            <ul className="space-y-6 relative z-10 flex-grow">
              {[
                ["Basic Edit (up to 5m)", "6,000"],
                ["Standard Edit (up to 10m)", "10,000"],
                ["Premium Edit (up to 20m)", "18,000"],
                ["YouTube Video (up to 30m)", "25,000"],
              ].map(([label, price]) => (
                <li key={label} className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-medium text-[#25181d]">{label}</span>
                  <span className="flex-1 border-b border-dotted border-[#debec8] mx-2" />
                  <span className="font-bold text-[#890051] whitespace-nowrap"><span className="text-[10px] uppercase mr-1 opacity-70">LKR</span>{price}</span>
                </li>
              ))}
            </ul>
             <div className="mt-10 pt-8 border-t border-[#f5dce3] relative z-10">
               <h3 className="mb-6 font-bold text-[11px] uppercase tracking-[0.2em] text-[#574048]">Fast Delivery & Extras</h3>
               <ul className="space-y-4">
                  {[
                    ["24-Hour Express", "+50%"],
                    ["Extra Revisions", "1,000/rev"],
                  ].map(([label, price]) => (
                    <li key={label} className="flex items-baseline justify-between gap-2">
                      <span className="text-xs text-[#574048]">{label}</span>
                      <span className="text-xs font-bold text-[#890051] whitespace-nowrap">{price}</span>
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-28 border-y border-[#f5dce3]">
        <div className="mx-auto max-w-7xl px-[5vw]">
          <div className="text-center mb-16">
            <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#b10e6b]">Social Media</span>
            <h2 className="mb-6 font-serif text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-[#25181d]">Monthly Content Packages</h2>
            <p className="text-[#574048] text-lg max-w-2xl mx-auto leading-[1.8]">Consistent, high-quality content designed for serious creators and growing brands looking to dominate their niche.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "20,000",
                desc: "8 Reels (up to 30s), Basic Editing, Captions",
              },
              {
                name: "Growth",
                price: "40,000",
                desc: "16 Reels (up to 1 min), Advanced Editing, Custom Thumbnails",
                featured: true
              },
              {
                name: "Premium",
                price: "70,000",
                desc: "30 Reels (up to 1 min), Full Content Management, Priority Delivery",
              }
            ].map((pkg) => (
              <div key={pkg.name} className={`rounded-[24px] p-10 ${pkg.featured ? "bg-gradient-to-b from-[#b10e6b] to-[#a90b66] text-white shadow-2xl shadow-[#b10e6b]/30 scale-[1.02]" : "bg-[#fff8f8] text-[#25181d] border border-[#f5dce3]"}`}>
                <h3 className="text-2xl font-bold mb-3">{pkg.name}</h3>
                <p className={`text-sm leading-relaxed mb-6 ${pkg.featured ? "text-white/80" : "text-[#574048]"}`}>{pkg.desc}</p>
                <div className="text-4xl font-black mb-8"><span className="text-sm uppercase font-semibold mr-1 opacity-80">LKR</span>{pkg.price} <span className="text-sm font-normal opacity-70">/month</span></div>
                
                <div className={`pt-8 border-t ${pkg.featured ? "border-white/20" : "border-[#f5dce3]"}`}>
                  <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 ${pkg.featured ? "text-white/70" : "text-[#890051]"}`}>Included in all tiers</h4>
                  <ul className="space-y-4">
                    {["Basic Color Correction", "Royalty-Free Music", "1 Free Revision/Video", "Social Media Ready Export"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <span className={pkg.featured ? "text-white" : "text-[#b10e6b]"}>✓</span> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff0f3] py-24">
        <div className="mx-auto max-w-6xl px-[5vw]">
          <h2 className="mb-20 text-[clamp(2.25rem,5vw,3.5rem)] font-black tracking-[-0.05em] text-[#25181d]">
            Division Breakdown
          </h2>
          <div className="grid gap-10 border-t border-[#debec8] pt-12 md:grid-cols-4">
            {featureColumns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-6 text-xl font-bold text-[#25181d]">{column.title}</h3>
                <ul className="space-y-4 text-sm text-[#574048]">
                  {column.items.map((item) => (
                    <li key={item} className="flex items-center justify-between gap-4">
                      <span>{item}</span>
                      <span className="text-[#890051]">✓</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-[#f5dce3] py-24">
        <div className="mx-auto max-w-3xl px-[5vw]">
          <h2 className="mb-16 text-center text-[clamp(2rem,4vw,2.75rem)] font-black text-[#25181d]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <details key={faq.question} className="group rounded-[20px] bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-8 py-6 font-bold text-[#25181d]">
                  <span>{faq.question}</span>
                  <span className="transition-transform group-open:rotate-180">⌄</span>
                </summary>
                <div className="px-8 pb-6 text-sm leading-7 text-[#574048]">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-28 text-center">
        <div className="mx-auto max-w-3xl px-[5vw]">
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black tracking-[-0.05em] text-[#25181d]">
            Ready to Scale?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-xl leading-8 text-[#574048]">
            Transformation isn't a cost, it's an investment in your brand's longevity and authority.
          </p>
          <Link
            href="/Consultancy"
            className="mt-10 inline-flex rounded-[18px] bg-[#b10e6b] px-10 py-4 text-base font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            Book a Strategy Session
          </Link>
        </div>
      </section>
    </main>
  );
}