import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const services = [
  {
    title: "Elite Voice Recordings",
    description:
      "Our global roster features voices built for premium brands, cinematic launches, and polished product reveals.",
    tags: ["Cinematic", "Luxury"],
    tone: "soft",
  },
  {
    title: "Ad Voice & Identity",
    description:
      "30-second hooks, sonic logos, and campaign narrations that stay recognizable across every channel.",
    tags: ["Brand Voice", "Hooks"],
    tone: "strong",
  },
  {
    title: "Luxury Narration",
    description:
      "Elevating documentaries, launch films, and executive storytelling through calm, high-status delivery.",
    tags: ["Narration", "Prestige"],
    tone: "soft",
  },
  {
    title: "Professional Intros",
    description:
      "Podcast openers, event stings, and content intros designed to frame every first impression precisely.",
    tags: ["Podcast", "Broadcast"],
    tone: "wide",
  },
];

const methods = [
  {
    step: "01",
    title: "Audit",
    text: "We inspect the current sonic footprint and locate the gaps where voice can carry more authority.",
  },
  {
    step: "02",
    title: "Scripting",
    text: "We translate brand values into rhythm, pace, and phrasing that feel natural to speak and hear.",
  },
  {
    step: "03",
    title: "Casting",
    text: "We pair the right vocal texture to the emotional range, audience, and market position.",
  },
  {
    step: "04",
    title: "Production",
    text: "We finish with studio-grade mastering so the delivery lands clean across every platform.",
  },
];

const pricing = [
  {
    name: "Essential",
    price: "$1,200",
    note: "Per Production Module",
    items: ["Single Voice Choice", "2 Rounds of Edits", "Standard Licensing", "Custom Sonic Identity"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "The Identity",
    price: "$4,500",
    note: "Complete Brand Sonic Suite",
    items: ["Premium Voice Roster", "Custom Sonic Logo (3-sec)", "Background Soundscapes", "Commercial Full Buyout"],
    cta: "Reserve Now",
    featured: true,
  },
  {
    name: "Elite Bespoke",
    price: "Custom",
    note: "Enterprise Level Scale",
    items: ["Global Language Suites", "Dedicated Creative Director", "Live Remote Direction", "Perpetual Usage"],
    cta: "Consultation",
    featured: false,
  },
];

function WaveBars({ className = "" }: { className?: string }) {
  const bars = [
    "h-5",
    "h-10",
    "h-7",
    "h-14",
    "h-8",
    "h-16",
    "h-10",
    "h-12",
    "h-7",
    "h-14",
    "h-6",
    "h-11",
    "h-8",
    "h-5",
    "h-9",
    "h-7",
    "h-4",
    "h-6",
  ];

  return (
    <div className={`flex items-end gap-1 overflow-hidden ${className}`}>
      {bars.map((bar, index) => (
        <span
          key={`${bar}-${index}`}
          className={`w-1.5 rounded-full ${index % 3 === 0 ? "bg-[#a90b66]/40" : index % 2 === 0 ? "bg-[#a90b66]" : "bg-white/25"} ${bar}`}
        />
      ))}
    </div>
  );
}

export default function VoxiumPage() {
  return (
    <main className={`${inter.className} bg-[#fff8f8] text-[#25181d]`}>
      <section className="relative min-h-[920px] overflow-hidden px-[5vw] pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(177,14,107,0.38),transparent_18%),radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.16),transparent_12%),linear-gradient(180deg,#431427_0%,#25131f_44%,#fff8f8_100%)]" />

        <div className="absolute inset-x-0 top-16 mx-auto h-[560px] w-[min(92vw,980px)] rounded-[48px] bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.22),transparent_20%),linear-gradient(135deg,rgba(255,255,255,0.14),rgba(0,0,0,0.05))] blur-0" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center text-white">
          <span className="mb-8 inline-flex rounded-full bg-white/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur-md">
            Audio Division
          </span>
          <h1 className={`${playfair.className} max-w-4xl text-[clamp(3rem,8vw,5rem)] font-light leading-[0.92] tracking-tight drop-shadow-[0_8px_24px_rgba(0,0,0,0.28)]`}>
            The Sound of <br /> <em className="text-[#ffb0cd]">Authority</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/82 md:text-2xl">
            Sculpting sonic presence with elite voice talent, refined pacing, and
            cinematic production. No stock imagery, no generic visuals, just a
            high-end editorial interface.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#samples"
              className="rounded-full bg-[#b10e6b] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-[0_16px_40px_rgba(177,14,107,0.35)] transition-transform hover:scale-[1.02]"
            >
              Listen to Samples
            </Link>
            <Link
              href="#pricing"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-colors hover:bg-white/18"
            >
              Download Media Kit
            </Link>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 pb-10 md:grid-cols-12">
          <div className="md:col-span-8 rounded-[28px] bg-white/12 p-8 backdrop-blur-sm md:h-[260px] md:p-10">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-4 h-16 w-28 rounded-[28px] border border-white/25 bg-[linear-gradient(180deg,#f9d0e0,#ffeff3)] opacity-90" />
                <p className="max-w-xl text-sm leading-7 text-white/84 md:text-base">
                  Hero composition can be described here with no external photos.
                  The structure relies on gradients, text blocks, waveform bars,
                  and editorial spacing instead of image assets.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/78">
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">Cinematic</span>
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">Luxury</span>
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">Clean Voice</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 rounded-[28px] bg-[#a90b66] p-8 text-white shadow-[0_24px_60px_rgba(169,11,102,0.28)] md:h-[260px]">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/12 text-3xl">
                  ✦
                </div>
                <h2 className="text-center text-3xl font-bold">Ad Voice &amp; Identity</h2>
              </div>
              <p className="text-center text-sm leading-6 text-white/80">
                30-second hooks, sonic marks, and narrations that hold memory
                without needing any imagery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-[5vw] py-28">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-[#25181d] md:text-6xl">
              Sonic Architecture
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#574048] md:text-lg">
              From the first syllable to the final mix, the interface presents a
              full premium audio service page without using photographs.
            </p>
          </div>
          <Link href="#portfolio" className="border-b-2 border-[#a90b66] pb-1 text-sm font-bold uppercase tracking-[0.25em] text-[#a90b66]">
            View Portfolio
          </Link>
        </div>

        <div id="portfolio" className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {services.map((service, index) => {
            const cardTone =
              service.tone === "strong"
                ? "bg-[#a90b66] text-white shadow-[0_20px_60px_rgba(169,11,102,0.2)]"
                : service.tone === "wide"
                  ? "bg-[#ffe8ee] text-[#25181d]"
                  : "bg-white text-[#25181d]";

            const sizeClass =
              index === 0
                ? "md:col-span-8 md:min-h-[420px]"
                : index === 1
                  ? "md:col-span-4 md:min-h-[420px]"
                  : index === 2
                    ? "md:col-span-4 md:min-h-[270px]"
                    : "md:col-span-8 md:min-h-[270px]";

            return (
              <article
                key={service.title}
                className={`relative overflow-hidden rounded-[28px] p-8 ${cardTone} ${sizeClass}`}
              >
                {index === 0 ? (
                  <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[radial-gradient(circle_at_30%_30%,rgba(177,14,107,0.2),transparent_30%),linear-gradient(145deg,rgba(255,255,255,0.22),rgba(0,0,0,0.08))] md:block" />
                ) : null}

                <div className="relative z-10 flex h-full flex-col justify-between gap-10">
                  <div>
                    <div className="mb-6 text-4xl text-[#a90b66]">
                      {index === 0 ? "◌" : index === 1 ? "◉" : index === 2 ? "◎" : "◍"}
                    </div>
                    <h3 className={`max-w-md text-2xl font-bold md:text-3xl ${index === 1 ? "text-white" : ""}`}>
                      {service.title}
                    </h3>
                    <p className={`mt-4 max-w-md text-sm leading-7 ${index === 1 ? "text-white/82" : "text-[#574048]"}`}>
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] ${index === 1 ? "bg-white/12 text-white" : "bg-[#fff4f7] text-[#a90b66]"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="samples" className="bg-[#3c2b31] px-[5vw] py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-5xl">The Voxium Experience</h2>
            <p className="mt-4 text-white/55">Sample our range of professional vocal textures.</p>
          </div>

          <div className="space-y-6">
            <div className="rounded-[24px] bg-white/10 p-6 backdrop-blur-md md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#a90b66] text-2xl font-bold">
                  ▶
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.24em] text-white/82">
                    <span>Deep Authority • Male • English (UK)</span>
                    <span className="text-white/40">00:15</span>
                  </div>
                  <div className="mt-5">
                    <WaveBars className="h-16" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] bg-white/10 p-6 opacity-70 backdrop-blur-md md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-2xl font-bold">
                  ▶
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.24em] text-white/82">
                    <span>Sophisticated Whisper • Female • French Accent</span>
                    <span className="text-white/40">00:12</span>
                  </div>
                  <div className="mt-5">
                    <WaveBars className="h-16 opacity-35" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[5vw] py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-bold md:text-5xl">The Voxium Method</h2>
          <div className="mt-20 grid gap-10 md:grid-cols-4">
            {methods.map((method) => (
              <article key={method.step} className="relative">
                <div className="absolute -top-10 left-0 text-8xl font-black text-[#a90b66]/5">{method.step}</div>
                <h3 className="relative mb-4 text-xl font-bold">{method.title}</h3>
                <p className="relative text-sm leading-7 text-[#574048]">{method.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#ffeff3] px-[5vw] py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold md:text-5xl">Pricing Models</h2>
            <p className="mt-4 text-[#574048]">Scalable solutions for voices that demand to be heard.</p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {pricing.map((plan) => (
              <article
                key={plan.name}
                className={`flex h-full flex-col rounded-[28px] p-8 shadow-sm ${plan.featured ? "bg-[#26181f] text-white shadow-[0_24px_60px_rgba(38,24,31,0.24)] md:-translate-y-6" : "bg-white text-[#25181d]"}`}
              >
                {plan.featured ? (
                  <span className="mb-4 inline-flex w-fit rounded bg-[#a90b66] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white">
                    Popular Choice
                  </span>
                ) : null}
                <div className="mb-8">
                  <h3 className={`mb-4 text-lg font-bold uppercase tracking-[0.22em] ${plan.featured ? "text-[#ffb0cd]" : "text-[#a90b66]"}`}>
                    {plan.name}
                  </h3>
                  <div className="text-5xl font-black">{plan.price}</div>
                  <p className={`mt-2 text-xs italic ${plan.featured ? "text-white/45" : "text-[#574048]"}`}>{plan.note}</p>
                </div>

                <ul className="mb-10 flex-1 space-y-4 text-sm">
                  {plan.items.map((item, index) => (
                    <li key={item} className="flex items-center gap-3 font-medium">
                      <span className={plan.featured ? "text-[#ffb0cd]" : "text-[#a90b66]"}>{index === 3 && plan.name === "Essential" ? "◦" : "✓"}</span>
                      <span className={plan.featured ? "text-white/88" : "text-[#25181d]"}>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/Consultancy"
                  className={`rounded-full px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] transition-transform hover:scale-[1.01] ${plan.featured ? "bg-[#a90b66] text-white" : "border border-[#a90b66] text-[#a90b66]"}`}
                >
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}