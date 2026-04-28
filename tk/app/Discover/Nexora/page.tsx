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

export default function NexoraPage() {
  return (
    <main className={`${inter.className} bg-[#fff8f8] text-[#25181d] min-h-screen`}>
      <div className="mx-auto max-w-[1400px] px-[5vw] py-24">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="inline-block text-xs uppercase tracking-widest text-[#b10e6b] bg-[#ffd9e4] px-3 py-1 rounded-full">Growth Campaign Lab</span>
            <h1 className={`${playfair.className} mt-6 text-[clamp(3.5rem,8vw,5rem)] font-light leading-[0.95] tracking-tight`}>Scale Beyond the<br/><em>Algorithm.</em></h1>
            <p className="mt-6 text-lg text-[#574048] max-w-xl">Nexora transforms social fragments into high-conversion growth engines. We don&apos;t just post; we dominate the feed through predictive data.</p>
            <div className="mt-8 flex gap-4">
              <button className="bg-gradient-to-b from-[#b10e6b] to-[#a90b66] text-white px-8 py-3 rounded-full font-semibold shadow-lg">Launch Campaign</button>
              <button className="bg-[#fff0f3] text-[#25181d] px-8 py-3 rounded-full border border-[#f3d8df]">Case Studies</button>
            </div>
          </div>

          {/* Visual card + metrics (SVG placeholders) */}
          <div>
            <div className="rounded-2xl bg-white p-6 shadow-[0_40px_100px_-20px_rgba(137,0,81,0.08)]">
              <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#2b0a1a] to-[#401426] aspect-[16/9] mb-6 flex items-center justify-center text-white">
                {/* stylized SVG mock dashboard */}
                <svg width="70%" height="70%" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                      <stop offset="0" stopColor="#ffb0cd" />
                      <stop offset="1" stopColor="#a90b66" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="800" height="450" rx="16" fill="url(#g1)" opacity="0.08" />
                  <g fill="none" stroke="#fff" strokeOpacity="0.9" strokeWidth="6">
                    <path d="M40 340 L160 220 L280 260 L400 180 L520 200 L640 140 L760 200" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#fff8fb] rounded-xl p-4">
                  <div className="text-[10px] uppercase text-[#8b7079] tracking-widest">Daily Conversion</div>
                  <div className="text-2xl font-black text-[#b10e6b]">+342%</div>
                </div>
                <div className="bg-[#fff8fb] rounded-xl p-4">
                  <div className="text-[10px] uppercase text-[#8b7079] tracking-widest">Reach Velocity</div>
                  <div className="text-2xl font-black text-[#005104]">9.2M</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Growth Systems */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className={`${playfair.className} text-[clamp(2.5rem,6vw,4rem)] font-light`}>Core Growth Systems</h2>
            <p className="text-[#574048] mt-3">Hyper-targeted modules designed for aggressive market capture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bg-white rounded-2xl p-12 min-h-[320px] shadow-sm">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#fff0f3] flex items-center justify-center text-[#b10e6b] font-bold">FB</div>
                <div>
                  <h3 className="text-2xl font-bold">Facebook Scale Engine</h3>
                  <p className="mt-2 text-[#574048]">Multi-stage funnel architectures that turn scrolling into loyal brand advocacy. We exploit the Meta algorithm to its logical limit.</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#fff0f3] text-sm">CAPI Integration</span>
                <span className="px-3 py-1 rounded-full bg-[#fff0f3] text-sm">Lookalike V3</span>
                <span className="px-3 py-1 rounded-full bg-[#fff0f3] text-sm">Dynamic Creative</span>
              </div>
            </div>

            <div className="md:col-span-4 bg-gradient-to-br from-[#b10e6b] to-[#7b0f3f] text-white rounded-2xl p-12 min-h-[320px] shadow-sm relative overflow-hidden">
              <div className="absolute top-6 right-6 opacity-10 text-6xl">★</div>
              <h3 className="text-2xl font-bold mb-4">Instagram Growth Lab</h3>
              <p className="opacity-90">Aesthetic dominance paired with viral reach mechanics. Reels, Stories, and Grid perfection.</p>
              <div className="mt-8">
                <button className="bg-white/10 px-4 py-2 rounded-full border border-white/20">Explore Growth</button>
              </div>
            </div>

            <div className="md:col-span-5 bg-[#fff0f3] rounded-2xl p-12 min-h-[260px]">
              <h3 className="text-2xl font-bold mb-4">Precision Ads Strategy</h3>
              <p className="text-[#574048]">Media buying isn&apos;t a cost; it&apos;s an investment with a strictly defined ROI. No wasted impressions.</p>
              <div className="mt-6 border-t pt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#b10e6b] text-white flex items-center justify-center font-bold">94%</div>
                <div className="text-sm">Average ROAS improvement within first 30 days.</div>
              </div>
            </div>

            <div className="md:col-span-7 bg-white rounded-2xl p-12 min-h-[260px]">
              <h3 className="text-2xl font-bold mb-4">Audience Reach Mastery</h3>
              <p className="text-[#574048]">We map the digital DNA of your perfect customer. Behavioral targeting that bypasses the noise and hits the intent.</p>
            </div>
          </div>
        </section>

        {/* Campaigns That Convert */}
        <section className="mb-20 bg-[#3b2c31] text-[#ffecf1] rounded-3xl p-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8">
              <div>
                <h2 className="text-4xl font-bold">Campaigns That Convert.</h2>
                <p className="mt-4 opacity-90">Nexora isn&apos;t about vanity metrics. We measure success in the language of revenue and retention.</p>
              </div>
              <div className="text-6xl font-black opacity-20">ROI</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 p-8 rounded-2xl">
                <p className="text-primary-fixed-dim font-bold mb-2">Fintech Disruptor</p>
                <p className="text-3xl font-black">12.4x ROAS</p>
                <p className="mt-4 text-sm opacity-80">Social acquisition campaign that lowered CPA by 44% in under six weeks.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl">
                <p className="text-primary-fixed-dim font-bold mb-2">Luxury E-com</p>
                <p className="text-3xl font-black">2.1M Reach</p>
                <p className="mt-4 text-sm opacity-80">Organic-first growth strategy that doubled recurring revenue through social loops.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl">
                <p className="text-primary-fixed-dim font-bold mb-2">SaaS Enterprise</p>
                <p className="text-3xl font-black">89% Growth</p>
                <p className="mt-4 text-sm opacity-80">B2B thought leadership campaign resulting in 500+ MQLs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology + FAQ summary */}
        <section className="mb-20 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold">The Nexora Methodology</h3>
            <p className="text-[#574048] mt-4">Precision is the difference between spending and investing. Our four-phase deployment ensures maximum efficiency.</p>
            <div className="mt-6 p-6 bg-[#fff0f3] rounded-2xl">
              <div className="font-bold text-3xl">14 Days</div>
              <div className="text-sm text-[#8b7079]">Average setup time from audit to first live launch.</div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="p-6 bg-white rounded-2xl">
              <p className="text-sm font-bold text-[#b10e6b]">01. Research</p>
              <h4 className="mt-2 font-bold">Algorithm &amp; Competitor Audit</h4>
              <p className="mt-2 text-[#574048]">We dismantle competitors&apos; funnels and identify white space in your market&apos;s attention habits.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <p className="text-sm font-bold text-[#b10e6b]">02. Targeting</p>
              <h4 className="mt-2 font-bold">Audience Persona Engineering</h4>
              <p className="mt-2 text-[#574048]">Custom segments based on intent, interest, and lifestyle.</p>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="mb-12">
          <div className="rounded-3xl bg-[#b10e6b] text-white p-12 text-center">
            <h3 className="text-2xl mb-4">Ready to scale beyond the algorithm?</h3>
            <p className="mb-6 text-white/90">Book a strategic briefing with our Growth Lab.</p>
            <button className="bg-white text-[#b10e6b] px-8 py-3 rounded-full font-semibold">Book Briefing</button>
          </div>
        </section>
      </div>
    </main>
  );
}
