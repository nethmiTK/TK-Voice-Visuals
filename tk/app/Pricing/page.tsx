import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const pricingTiers = [
  {
    title: "Starter",
    badge: "Focused Mastery",
    subtitle: "Single Discipline",
    description: "Perfect for brands needing high-impact Voice or Video as a standalone asset.",
    features: ["Premium Voice Production", "Cinematic Social Short-form", "Web Infrastructure"],
    priceCta: "Get Started",
    featured: false,
  },
  {
    title: "Growth",
    badge: "Most Strategic",
    subtitle: "Integrated Presence",
    description: "A synergy of cinematic video content and data-driven marketing strategy.",
    features: [
      "Full Video Strategy & Production",
      "Performance Marketing Overlay",
      "Brand Voice Architecture",
      "Monthly Growth Review",
    ],
    priceCta: "Scale Now",
    featured: true,
  },
  {
    title: "Enterprise",
    badge: "The Ecosystem",
    subtitle: "Full Ecosystem",
    description: "Total brand immersion. We become your outsourced creative and strategic department.",
    features: ["Bespoke Web Development", "All-Access Creative Studio", "Global Strategy Consulting"],
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
            Invest in Authority
          </h1>
          <p className="mt-8 max-w-2xl text-2xl font-light leading-relaxed text-[#574048]">
            Choose a strategic partner for your brand&apos;s evolution. We bridge the gap between vision and visceral impact.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-[5vw] pb-28 md:grid-cols-3">
        {pricingTiers.map((tier) => (
          <article
            key={tier.title}
            className={`flex flex-col rounded-[24px] p-8 transition-transform duration-500 hover:-translate-y-2 md:p-12 ${
              tier.featured
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
              className={`rounded-[16px] px-6 py-4 text-center text-sm font-bold transition-colors ${
                tier.featured
                  ? "bg-white text-[#890051] hover:bg-[#ffecf1]"
                  : "bg-[#ffe8ee] text-[#890051] hover:bg-[#f5dce3]"
              }`}
            >
              {tier.priceCta}
            </Link>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-[5vw] pb-28">
        <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15),0_18px_36px_-18px_rgba(0,0,0,0.2)]">
          <div className="flex min-h-[800px] flex-col md:flex-row">
            <div className="relative flex-1 overflow-hidden bg-white p-10 md:p-20">
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-black/5 to-transparent" />
              <div className="relative z-10">
                <h2 className="mb-12 font-serif text-4xl leading-tight text-[#890051] md:text-5xl">
                  I. Creative <br /> Foundations
                </h2>

                <div className="mb-16">
                  <h3 className="mb-8 border-b border-[#f5dce3] pb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#574048]">
                    Cinematic Video
                  </h3>
                  <ul className="space-y-6">
                    {[
                      ["Brand Manifesto Film", "from $8,500"],
                      ["Social Narrative Series (6)", "$4,200"],
                      ["Product Cinematography", "$3,800"],
                    ].map(([label, price]) => (
                      <li key={label} className="flex items-baseline justify-between gap-4">
                        <span className="text-lg font-medium text-[#25181d]">{label}</span>
                        <span className="flex-1 border-b border-dotted border-[#debec8] mx-4" />
                        <span className="font-bold text-[#890051]">{price}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-8 border-b border-[#f5dce3] pb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#574048]">
                    Vocal Authority
                  </h3>
                  <ul className="space-y-6">
                    {[
                      ["Audio Identity System", "$2,500"],
                      ["Podcast Production (Tier 1)", "$1,200/ep"],
                    ].map(([label, price]) => (
                      <li key={label} className="flex items-baseline justify-between gap-4">
                        <span className="text-lg font-medium text-[#25181d]">{label}</span>
                        <span className="flex-1 border-b border-dotted border-[#debec8] mx-4" />
                        <span className="font-bold text-[#890051]">{price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="hidden w-8 shrink-0 bg-[linear-gradient(to_right,transparent_48%,rgba(0,0,0,0.05)_50%,transparent_52%)] md:block" />

            <div className="relative flex-1 overflow-hidden bg-[#f3e5e6] p-10 md:p-20">
              <div className="absolute right-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-black/5 to-transparent" />
              <div className="relative z-10">
                <h2 className="mb-12 font-serif text-4xl leading-tight text-[#890051] md:text-5xl">
                  II. Digital <br /> Ecosystems
                </h2>

                <div className="mb-16">
                  <h3 className="mb-8 border-b border-[#debec8] pb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#574048]">
                    Strategic Marketing
                  </h3>
                  <ul className="space-y-6">
                    {[
                      ["Authority Positioning Audit", "$1,500"],
                      ["Growth Engine Management", "15% spend"],
                      ["Quarterly Brand Roadmap", "$3,000"],
                    ].map(([label, price]) => (
                      <li key={label} className="flex items-baseline justify-between gap-4">
                        <span className="text-lg font-medium text-[#25181d]">{label}</span>
                        <span className="flex-1 border-b border-dotted border-[#debec8] mx-4" />
                        <span className="font-bold text-[#890051]">{price}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-8 border-b border-[#debec8] pb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#574048]">
                    Web Architecture
                  </h3>
                  <ul className="space-y-6">
                    {[
                      ["Bespoke Experience Design", "from $12k"],
                      ["Immersive Landing Pages", "$2,800"],
                    ].map(([label, price]) => (
                      <li key={label} className="flex items-baseline justify-between gap-4">
                        <span className="text-lg font-medium text-[#25181d]">{label}</span>
                        <span className="flex-1 border-b border-dotted border-[#debec8] mx-4" />
                        <span className="font-bold text-[#890051]">{price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-8 -translate-x-1/2 bg-[linear-gradient(to_right,transparent_48%,rgba(0,0,0,0.06)_50%,transparent_52%)] md:block" />
        </div>

        <div className="mt-12 text-center text-sm italic text-[#574048] opacity-60">
          All services are printed on our core principles of excellence and impact.
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

      <section className="mx-auto max-w-7xl px-[5vw] py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[24px] bg-[#ffe8ee] p-8 md:col-span-2">
            <h2 className="max-w-md text-[clamp(2rem,4vw,3rem)] font-black tracking-[-0.05em] text-[#25181d]">
              Engineered for the visionary few.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#574048]">
              We don't just deliver files; we build the communicative foundations of your business. Our cross-discipline approach ensures your voice matches your visuals, and your visuals match your values.
            </p>
          </div>

          <div className="rounded-[24px] bg-[#890051] p-8 text-white">
            <div className="mt-auto flex h-full flex-col justify-end">
              <div className="text-6xl font-black">98%</div>
              <div className="mt-4 max-w-xs text-xs font-bold uppercase tracking-[0.2em] text-white/85">
                Client Retention Rate through Strategic Partnership
              </div>
            </div>
          </div>

          <div className="rounded-[24px] bg-[#eddfe0] p-3 md:col-span-1">
            <div className="h-full min-h-[220px] rounded-[20px] bg-[radial-gradient(circle_at_top,#25181d_0%,#574048_22%,#eddfe0_22%,#eddfe0_100%)] p-6 text-[#25181d]">
              <div className="mt-auto flex h-full items-end justify-center text-center text-xl font-bold">
                The Authority Protocol
              </div>
            </div>
          </div>

          <div className="rounded-[24px] bg-[#fbe2e9] p-8 md:col-span-2">
            <div className="flex items-center gap-6">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#890051] text-white">
                <span className="text-4xl">▣</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#25181d]">The Authority Protocol</h3>
                <p className="mt-2 text-[#574048]">
                  A proprietary 4-step onboarding process that identifies brand leakage and reinforces your market position.
                </p>
              </div>
            </div>
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