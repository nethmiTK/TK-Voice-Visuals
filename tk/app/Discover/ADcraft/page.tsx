import Image from "next/image";

export default function ADcraftPage() {
  return (
    <main className="min-h-screen bg-[#fff8f8] text-[#26191f]">
      <div className="mx-auto max-w-[1280px] px-[5vw] pb-[110px] pt-[34px]">
        <p className="mt-[18px] text-center text-[10px] uppercase tracking-[0.34em] text-[rgba(169,11,102,0.62)]">
          Division: Editorial Adcraft
        </p>

        <h1 className="mx-auto mt-6 max-w-[780px] text-center font-serif text-[clamp(58px,10vw,108px)] font-light leading-[0.9]">
          Words That <em>Command</em> Attention.
        </h1>

        <section className="mt-[50px] grid items-start gap-[42px] lg:grid-cols-[0.9fr_1.1fr]">
          <p className="max-w-[280px] pt-7 text-[15px] leading-[1.65] text-[#5c4a51]">
            ADcraft is the high-fashion editorial division of TK Voice &amp; Visuals.
            We don&apos;t just write copy; we engineer resonance through phonetic
            precision.
          </p>

          <div className="relative w-full max-w-[520px] justify-self-end lg:justify-self-end">
            <Image
              className="block aspect-[5/6] w-full object-cover"
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury pen on textured paper"
              width={900}
              height={1080}
            />

            <Image
              className="absolute -bottom-[38px] -left-[38px] aspect-square w-[120px] border-[8px] border-[#fff8f8] object-cover max-[620px]:-bottom-[18px] max-[620px]:-left-[18px] max-[620px]:w-[92px]"
              src="https://images.unsplash.com/photo-1566454825481-9c5c0f2d0f3f?auto=format&fit=crop&w=500&q=80"
              alt="Golden textured paper detail"
              width={220}
              height={220}
            />
          </div>
        </section>

        <section className="mt-[130px] bg-[#ffeff3] px-8 pb-[70px] pt-[58px]">
          <h2 className="m-0 font-serif text-[clamp(42px,7vw,68px)] font-light">
            The Voice Matrix
          </h2>
          <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#8b737b]">
            Calibrating Psychological Resonance
          </p>

          <div className="mt-[30px] grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { id: "Tone: 01", name: "Ethereal" },
              { id: "Tone: 02", name: "Provocative" },
              { id: "Tone: 03", name: "Stoic" },
              { id: "Tone: 04", name: "Vivacious" },
            ].map((tone) => (
              <article
                key={tone.id}
                className="flex min-h-[148px] flex-col justify-between bg-white p-[18px]"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8a737a]">
                  {tone.id}
                </span>
                <h3 className="font-serif text-[36px] font-light italic">
                  {tone.name}
                </h3>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-[140px] grid gap-[54px] lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h3 className="m-0 font-serif text-[clamp(42px,6vw,70px)] font-light leading-[0.95]">
              Editorial Services.
            </h3>
            <p className="mt-4 max-w-[350px] leading-[1.65] text-[#78666d]">
              We provide a spectrum of linguistic architecture tailored to the
              modern luxury landscape.
            </p>
          </div>

          <div>
            <Image
              className="aspect-[16/10] w-full object-cover"
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
              alt="Vintage typewriter"
              width={1280}
              height={800}
            />

            <h4 className="mb-[6px] mt-[14px] text-right font-serif text-[38px] font-light italic">
              Narrative Strategy
            </h4>
            <p className="mb-[18px] ml-auto max-w-[420px] text-right leading-[1.65] text-[#78666d]">
              Crafting the foundational story that binds your brand. We design
              the mythos that makes products unforgettable.
            </p>

            <div className="grid gap-7 md:grid-cols-2">
              <article>
                <Image
                  className="aspect-square w-full object-cover"
                  src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=900&q=80"
                  alt="Minimal desk"
                  width={700}
                  height={700}
                />
                <h5 className="mb-1 mt-3 font-serif text-[30px] font-light">
                  Ad Copywriting
                </h5>
                <p className="text-[13px] leading-[1.6] text-[#84727a]">
                  Precision-engineered conversion copy for high-ticket acquisition.
                </p>
              </article>

              <article>
                <Image
                  className="aspect-square w-full object-cover"
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80"
                  alt="Book under cinematic light"
                  width={700}
                  height={700}
                />
                <h5 className="mb-1 mt-3 font-serif text-[30px] font-light">
                  Visual Scripts
                </h5>
                <p className="text-[13px] leading-[1.6] text-[#84727a]">
                  Cinematic narratives for brand films and digital storytelling.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="mt-[128px] bg-[#1d1219] px-[34px] py-[66px] text-[#f9f0f3] max-[620px]:px-[22px] max-[620px]:py-[50px]">
          <div className="flex items-end justify-between gap-4">
            <h3 className="m-0 font-serif text-[clamp(44px,6vw,74px)] font-light italic">
              Editorial Standards
            </h3>
            <span className="font-sans text-[clamp(42px,6vw,72px)] text-[rgba(249,240,243,0.17)]">
              TK-04
            </span>
          </div>

          <div className="mt-[42px] grid gap-[26px] lg:grid-cols-3">
            <article className="border-t border-[rgba(169,11,102,0.7)] pt-[14px]">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#a90b66]">
                Phase 01
              </div>
              <h4 className="my-[10px] font-serif text-[32px] font-light">
                Etymological Audit
              </h4>
              <p className="m-0 leading-[1.7] text-[rgba(249,240,243,0.73)]">
                We analyze the historical weight and emotional frequency of every
                key term used in your brand&apos;s vocabulary.
              </p>
            </article>

            <article className="border-t border-[rgba(169,11,102,0.7)] pt-[14px]">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#a90b66]">
                Phase 02
              </div>
              <h4 className="my-[10px] font-serif text-[32px] font-light">
                Phonetic Sculpting
              </h4>
              <p className="m-0 leading-[1.7] text-[rgba(249,240,243,0.73)]">
                Sentences are read aloud to test for rhythmic elegance and oral
                delivery, ensuring the words feel as good as they look.
              </p>
            </article>

            <article className="border-t border-[rgba(169,11,102,0.7)] pt-[14px]">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#a90b66]">
                Phase 03
              </div>
              <h4 className="my-[10px] font-serif text-[32px] font-light">
                Prestige Validation
              </h4>
              <p className="m-0 leading-[1.7] text-[rgba(249,240,243,0.73)]">
                The final copy is benchmarked against elite editorial standards
                to verify its ability to command premium pricing and authority.
              </p>
            </article>
          </div>
        </section>

        <section className="mx-auto mt-[124px] max-w-[940px] text-center">
          <div className="text-2xl text-[rgba(169,11,102,0.48)]">✦</div>
          <blockquote className="mb-6 mt-[10px] font-serif text-[clamp(34px,5vw,60px)] font-light italic leading-[1.05]">
            &ldquo;ADcraft didn&apos;t just write our copy; they gave our brand a soul.
            The conversion rate increase was secondary to the sheer prestige
            their words added to our identity.&rdquo;
          </blockquote>

          <div className="inline-flex flex-col items-center gap-[7px]">
            <Image
              className="h-[58px] w-[58px] rounded-full object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
              alt="Portrait of Elena Voci"
              width={116}
              height={116}
            />
            <span className="text-[11px] uppercase tracking-[0.2em]">Elena Voci</span>
            <span className="text-[10px] uppercase tracking-[0.17em] text-[#a90b66]">
              Director, L&apos;Aura Global
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
