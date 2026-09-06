"use client";

import { Inter } from "next/font/google";
import ScrollFillText from "../components/ScrollFillText";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function ConsultancyPage() {
  return (
    <main className={`${inter.className} bg-[#fff8f8] text-[#25181d] min-h-screen`}>
      <div className="mx-auto max-w-[1400px] px-[5vw] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          {/* Left column: branding & sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#a90b66] mb-6">Strategic Partnership</p>
              <ScrollFillText
                as="h1"
                className="font-serif text-[64px] leading-[0.95] font-light tracking-tight"
                wrapperClassName="mb-6"
                fillDirection="top"
                fillEnd={0.8}
              >
                Initiate<br />Your <em>Consultation</em>
              </ScrollFillText>
              <ScrollFillText
                as="p"
                className="max-w-md leading-7"
                fillDirection="left"
                fillEnd={0.7}
              >
                Begin a partnership rooted in creative precision and strategic allure. Our senior consultants review every inquiry personally to ensure complete brand alignment.
              </ScrollFillText>
            </div>

            <div className="rounded-2xl bg-[#fff0f3] p-6">
              <ScrollFillText
                as="h4"
                className="font-display font-bold"
                wrapperClassName="mb-4"
                fillDirection="left"
                fillEnd={0.65}
              >
                Direct Channels
              </ScrollFillText>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#ffd9e4] flex items-center justify-center">☎</div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-[#8b7079]">Priority Line</div>
                    <div className="text-lg font-bold text-[#a90b66]">075 263 2946<br />077 785 8521</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#ffd9e4] flex items-center justify-center">✉</div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-[#8b7079]">Digital Office</div>
                    <div className="text-lg font-bold text-[#a90b66]">https://tkvoicevisuals.me</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Right column: form */}
          <section className="lg:col-span-8 bg-white/60 backdrop-blur-sm rounded-[2.5rem] p-8 lg:p-14 shadow-[0_100px_120px_-40px_rgba(0,0,0,0.03)]">
            <form className="space-y-12">
              {/* Step 1 */}
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#a90b66] text-white flex items-center justify-center font-bold">01</div>
                  <ScrollFillText
                    as="h2"
                    className="text-2xl font-display font-light"
                    fillDirection="left"
                    fillEnd={0.68}
                  >
                    Personal &amp; Professional Identity
                  </ScrollFillText>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input placeholder="Full name" className="rounded-xl p-4 bg-[#fff] placeholder:text-[#cbbec3] outline-none" />
                  <input placeholder="Email address" className="rounded-xl p-4 bg-[#fff] placeholder:text-[#cbbec3] outline-none" />
                  <input placeholder="Phone number" className="rounded-xl p-4 bg-[#fff] placeholder:text-[#cbbec3] outline-none" />
                  <input placeholder="Company name (optional)" className="rounded-xl p-4 bg-[#fff] placeholder:text-[#cbbec3] outline-none" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#a90b66] text-white flex items-center justify-center font-bold">02</div>
                  <ScrollFillText
                    as="h2"
                    className="text-2xl font-display font-light"
                    fillDirection="left"
                    fillEnd={0.68}
                  >
                    Engagement Context
                  </ScrollFillText>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <select className="rounded-xl p-4 bg-[#fff] outline-none">
                    <option>  Voice Over &amp; Strategy</option>
                    <option>Video Editing &amp; Creation</option>
                    <option>Web Design</option>
                    <option>Mobile App Develop</option>

                  </select>
                </div>

                <textarea placeholder="Project details" className="w-full rounded-xl p-4 min-h-[140px] bg-[#fff] placeholder:text-[#cbbec3] outline-none" />
              </div>

              {/* Step 3 */}
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#a90b66] text-white flex items-center justify-center font-bold">03</div>
                  <ScrollFillText
                    as="h2"
                    className="text-2xl font-display font-light"
                    fillDirection="left"
                    fillEnd={0.68}
                  >
                    Scheduling &amp; Assets
                  </ScrollFillText>
                </div>



                <div className="border-2 border-dashed border-[#e7cfd6] rounded-2xl p-8 text-center">
                  <div className="text-3xl text-[#e0b8c8]">⇪</div>
                  <p className="mt-4 text-sm text-[#8b7079]">Drag and drop files here (PDF, DOCX, ZIP — max 25MB)</p>
                </div>

              </div>

              <div className="mt-6">
                <button className="w-full rounded-full bg-gradient-to-b from-[#b10e6b] to-[#a90b66] py-6 text-white font-semibold text-lg shadow-[0_18px_34px_rgba(169,11,102,0.18)]">Submit Consultation Request →</button>
                <p className="mt-4 text-center text-[11px] text-[#8b7079]">Our team typically responds within 24 business hours to confirm your engagement.</p>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
