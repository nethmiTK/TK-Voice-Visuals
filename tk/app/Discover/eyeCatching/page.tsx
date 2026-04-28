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

export default function EyeCatchingPage() {
  return (
    <main className={`${inter.className} bg-[#fff8f8] text-[#25181d] min-h-screen`}>
      <div className="mx-auto max-w-[1400px] px-[5vw] py-24">
        {/* Hero */}
        <section className="relative rounded-[32px] overflow-hidden bg-gradient-to-b from-[#0b0b0b] via-transparent to-[#fff8f8] p-16 mb-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/45 via-transparent to-transparent" />
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="text-sm uppercase tracking-widest text-[#a90b66] mb-6">Visual Story &amp; Motion</span>
            <h1 className="text-white font-display font-light text-[48px] md:text-[64px] leading-tight max-w-3xl">
              Capturing the <span className="italic font-normal">Unseen</span>
              <br /> Essence.
            </h1>
            <p className="text-white/90 mt-6 max-w-2xl">Elite video production and visual storytelling for brands that demand cinematic authority and emotional resonance.</p>

            <div className="mt-8 flex gap-4">
              <button className="bg-gradient-to-b from-[#b10e6b] to-[#a90b66] text-white px-8 py-3 rounded-full font-semibold shadow-lg">View Showreel</button>
              <button className="bg-white/10 text-white px-8 py-3 rounded-full border border-white/20">Our Process</button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-display font-light">Elite Capabilities</h2>
            <div className="w-24 h-1 rounded-full bg-[#b10e6b]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bg-white rounded-2xl overflow-hidden shadow-sm p-6 flex flex-col justify-end h-[340px] bg-[linear-gradient(180deg,#1f1f1f_0%,#0f0f0f_100%)]">
              <div className="text-white max-w-lg">
                <h3 className="text-2xl font-display italic">Cinematic Promos</h3>
                <p className="mt-2 text-white/80">High-impact brand anthems and product launches designed to command attention in seconds.</p>
              </div>
            </div>

            <div className="md:col-span-4 bg-white rounded-2xl overflow-hidden shadow-sm p-6 h-[340px] bg-gradient-to-br from-[#702042] to-[#4b0831] text-white">
              <h3 className="text-2xl font-display italic">Motion Graphics</h3>
              <p className="mt-2 text-white/80">Fluid, sophisticated animation that brings static brands to dynamic life.</p>
            </div>

            <div className="md:col-span-4 bg-white rounded-2xl overflow-hidden shadow-sm p-6 h-[220px] bg-[linear-gradient(180deg,#2b1f1f,transparent)] text-white">
              <h3 className="text-2xl font-display italic">Reels &amp; Vertical</h3>
              <p className="mt-2 text-white/80">Viral-engineered short-form content that maintains editorial prestige.</p>
            </div>

            <div className="md:col-span-8 bg-white rounded-2xl overflow-hidden shadow-sm p-6 h-[220px] bg-[linear-gradient(180deg,#0f1320,transparent)] text-white">
              <h3 className="text-2xl font-display italic">Visual Strategy</h3>
              <p className="mt-2 text-white/80">Comprehensive direction from color theory to narrative architecture.</p>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-24 bg-[#fff0f3] rounded-2xl p-12">
          <div className="md:flex md:items-end md:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-sm uppercase tracking-widest text-[#b10e6b]">The Methodology</span>
              <h2 className="text-4xl font-display font-light mt-4">Architecting Visual Authority.</h2>
            </div>
            <p className="max-w-sm text-[#574048]">A rigorous four-stage pipeline from abstract concept to technical perfection.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <div className="p-6 bg-white rounded-2xl">
              <div className="text-[64px] text-[#b10e6b]/10 font-black">01</div>
              <h4 className="mt-2 text-xl font-display">Concept</h4>
              <p className="mt-2 text-sm text-[#665c5d]">Deep-dive research into brand psychology to forge a unique narrative hook.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <div className="text-[64px] text-[#b10e6b]/10 font-black">02</div>
              <h4 className="mt-2 text-xl font-display">Storyboarding</h4>
              <p className="mt-2 text-sm text-[#665c5d]">Frame-by-frame visualization of the rhythm and visual choreography.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <div className="text-[64px] text-[#b10e6b]/10 font-black">03</div>
              <h4 className="mt-2 text-xl font-display">Filming</h4>
              <p className="mt-2 text-sm text-[#665c5d]">Elite-tier production with top-of-the-line optics and lighting arrays.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <div className="text-[64px] text-[#b10e6b]/10 font-black">04</div>
              <h4 className="mt-2 text-xl font-display">Post-Production</h4>
              <p className="mt-2 text-sm text-[#665c5d]">Masterful color grading, sound design, and precision editing.</p>
            </div>
          </div>
        </section>

        {/* Before / After Mock */}
        <section className="mb-24">
          <div className="rounded-[48px] overflow-hidden bg-[#25181d] h-[480px] relative">
            <div className="absolute inset-0 flex">
              <div className="w-1/2 h-full bg-gradient-to-b from-black/60 to-black/30" />
              <div className="w-1/2 h-full bg-gradient-to-b from-[#2b0a1a] to-[#401426]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-full w-1 bg-white/20 relative flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white text-[#25181d] flex items-center justify-center shadow-lg">⇆</div>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-[#8b7079]">Drag to reveal the power of our technical post-production mastery.</p>
        </section>

        {/* Testimonials + CTA */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-primary text-xl mb-4">★★★★★</div>
              <p className="italic text-sm">&quot;eyeCtching didn&apos;t just film a commercial; they captured our brand&apos;s soul.&quot;</p>
              <div className="mt-6 font-bold">Elena Vancorp</div>
              <div className="text-xs uppercase text-[#8b7079]">CEO, Lumina Haute Couture</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-primary text-xl mb-4">★★★★★</div>
              <p className="italic text-sm">&quot;Their motion graphics work is otherworldly.&quot;</p>
              <div className="mt-6 font-bold">Marcus Thorne</div>
              <div className="text-xs uppercase text-[#8b7079]">Creative Director, Veta Film Group</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-primary text-xl mb-4">★★★★★</div>
              <p className="italic text-sm">&quot;The editorial finesse elevated our product launch beyond expectations.&quot;</p>
              <div className="mt-6 font-bold">Sarah Lee</div>
              <div className="text-xs uppercase text-[#8b7079]">Brand Lead, Aster Co.</div>
            </div>
          </div>

          <div className="rounded-3xl bg-[#b10e6b] text-white p-12 text-center">
            <h3 className="text-2xl mb-4">Ready to define your visual authority?</h3>
            <p className="mb-6 text-sm text-white/90">Limited production slots available. Secure your consultation today.</p>
            <button className="bg-white text-[#b10e6b] px-8 py-3 rounded-full font-semibold">Begin the Collaboration</button>
          </div>
        </section>
      </div>
    </main>
  );
}
