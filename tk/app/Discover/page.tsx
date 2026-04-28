import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const hubs = [
  {
    title: "Video Side",
    description: "Cinematic storytelling for high-impact brand presence.",
    items: ["Brand Promo", "Product Ad", "Social Media Reel", "Explainer Video"],
  },
  {
    title: "Voice Side",
    description: "The sonics of authority.",
    items: ["Voice Over Ad", "Narration", "Radio Commercial", "IVR / Phone Greeting"],
  },
  {
    title: "Marketing Side",
    description: "Engineered growth for visionaries.",
    items: ["Facebook Campaign", "Instagram Growth Campaign", "Lead Generation Campaign", "Awareness Campaign"],
    accent: true,
  },
  {
    title: "Web Side",
    description: "Digital destinations that command attention.",
    items: ["Business Website", "Landing Page", "E-commerce Site", "Booking System"],
  },
];

const whyChoose = [
  {
    title: "Editorial Quality",
    description: "Every frame and syllable is treated as a piece of art.",
  },
  {
    title: "Strategic Depth",
    description: "Every creative asset is built to support your bottom line.",
  },
  {
    title: "Unified Voice",
    description: "Video, voice, and web aligned into one brand system.",
  },
  {
    title: "Technical Excellence",
    description: "Performance and polish stay equally visible.",
  },
  {
    title: "Partnership Focused",
    description: "We work as an extension of your team.",
  },
];

export default function DiscoverPage() {
  return (
    <main className={`${inter.className} bg-[#fff8f8] text-[#25181d]`}>
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-40 md:px-8">
        <div className="max-w-4xl">
          <span className="mb-5 block text-xs font-bold uppercase tracking-[0.35em] text-[#890051]">Premium Solutions</span>
          <h1 className="text-[clamp(3rem,8vw,5rem)] font-black leading-[1.02] tracking-[-0.05em] text-[#25181d]">
            The Art of <span className="text-[#890051]">TK Voice &amp; Visuals</span>.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#574048]">
            We bridge the gap between high-fashion aesthetics and technical precision. Four specialized hubs are designed to elevate your brand's authority in the digital ecosystem.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/Consultancy" className="rounded-full bg-gradient-to-r from-[#890051] to-[#b10e6b] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
              Work with us
            </Link>
            <Link href="/Discover/RaRu" className="rounded-full border border-[#890051]/15 bg-white px-6 py-3 text-sm font-semibold text-[#890051] transition-colors hover:bg-[#fff0f3]">
              Explore RaRu
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          {hubs.map((hub, index) => (
            <article
              key={hub.title}
              className={`rounded-[24px] p-8 shadow-[0_18px_50px_rgba(177,14,107,0.05)] transition-transform hover:-translate-y-1 ${
                hub.accent
                  ? "bg-gradient-to-br from-[#b10e6b] to-[#890051] text-white lg:col-span-5"
                  : index === 0 || index === 3
                    ? "bg-white lg:col-span-7"
                    : "bg-[#ffe8ee] lg:col-span-5"
              }`}
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <h2 className={`text-3xl font-bold tracking-tight ${hub.accent ? "text-white" : "text-[#25181d]"}`}>{hub.title}</h2>
                  <p className={`mt-2 ${hub.accent ? "text-white/80" : "text-[#574048]"}`}>{hub.description}</p>
                </div>
                <div className={`h-12 w-12 rounded-full ${hub.accent ? "bg-white/20" : "bg-[#890051]/10"}`} />
              </div>

              <ul className="grid gap-4 sm:grid-cols-2">
                {hub.items.map((item) => (
                  <li key={item} className={`flex items-center gap-3 text-sm font-medium ${hub.accent ? "text-white/90" : "text-[#25181d]"}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${hub.accent ? "bg-white" : "bg-[#890051]"}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#fff0f3] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-black tracking-[-0.05em] text-[#25181d]">Why Choose Us</h2>
            <p className="mt-4 text-base leading-7 text-[#574048]">
              We don't just produce content; we curate experiences that define the elite 1% of digital brands.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyChoose.map((item, index) => (
              <article
                key={item.title}
                className={`min-h-[260px] rounded-[24px] p-6 text-white shadow-[0_20px_45px_rgba(0,0,0,0.12)] transition-transform hover:-translate-y-1 ${
                  index === 3 ? "bg-[#0b0c12] md:col-span-2 xl:col-span-2" : "bg-[#0b0c12]"
                }`}
              >
                <div className="flex h-full flex-col justify-end">
                  <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/80">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <div className="overflow-hidden rounded-[28px] bg-[#0b0c12] p-8 text-white shadow-[0_30px_70px_rgba(0,0,0,0.18)] md:p-12">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-[-0.05em]">Crafting the Ethereal.</h2>
            <p className="mt-5 text-lg leading-8 text-white/80">
              Ready to transform your brand into an authority? Let's build something exceptional together.
            </p>
            <Link href="/Consultancy" className="mt-8 inline-flex rounded-full bg-[#890051] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}