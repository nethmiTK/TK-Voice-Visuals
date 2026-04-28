import { Inter } from "next/font/google";

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
              <h1 className="font-serif text-[64px] leading-[0.95] font-light tracking-tight">Initiate<br/>Your <em>Consultation</em></h1>
              <p className="mt-6 max-w-md text-[#574048] leading-7">Begin a partnership rooted in creative precision and strategic allure. Our senior consultants review every inquiry personally to ensure complete brand alignment.</p>
            </div>

            <div className="rounded-2xl bg-[#fff0f3] p-6">
              <h4 className="font-display font-bold mb-4">Direct Channels</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#ffd9e4] flex items-center justify-center">☎</div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-[#8b7079]">Priority Line</div>
                    <div className="text-lg font-bold text-[#a90b66]">+1 (800) TK-ELITE</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#ffd9e4] flex items-center justify-center">✉</div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-[#8b7079]">Digital Office</div>
                    <div className="text-lg font-bold text-[#a90b66]">concierge@tkvoicevisuals.com</div>
                  </div>
                </div>
              </div>
              <blockquote className="mt-6 italic text-sm text-[#6b5a5e]">&quot;Modernism is not a style; it is an attitude of strategic clarity and purposeful design.&quot;</blockquote>
              <div className="mt-4 text-[10px] uppercase tracking-widest text-[#8b7079] font-bold">Rafael Rajapaksa, CEO</div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-[#fff] shadow-[0_40px_80px_rgba(169,11,102,0.04)]">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#f3e5e6] to-[#fff8f8] flex items-end p-6">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#8b7079]">Colombo HQ</div>
                  <div className="text-xl font-display">Innovation Hub</div>
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
                  <h2 className="text-2xl font-display font-light">Personal &amp; Professional Identity</h2>
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
                  <h2 className="text-2xl font-display font-light">Engagement Context</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <select className="rounded-xl p-4 bg-[#fff] outline-none">
                    <option>Brand Voice &amp; Strategy</option>
                    <option>Editorial Adcraft</option>
                    <option>Vocal Production</option>
                  </select>
                  <select className="rounded-xl p-4 bg-[#fff] outline-none">
                    <option>$25k - $50k</option>
                    <option>$50k - $100k</option>
                    <option>$100k+</option>
                  </select>
                </div>

                <textarea placeholder="Project details" className="w-full rounded-xl p-4 min-h-[140px] bg-[#fff] placeholder:text-[#cbbec3] outline-none" />
              </div>

              {/* Step 3 */}
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#a90b66] text-white flex items-center justify-center font-bold">03</div>
                  <h2 className="text-2xl font-display font-light">Scheduling &amp; Assets</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button type="button" className="rounded-xl bg-[#fff0f3] p-4">Oct 24<br/><span className="block font-bold">09:00 AM</span></button>
                  <button type="button" className="rounded-xl bg-[#a90b66] p-4 text-white shadow-lg">Oct 25<br/><span className="block font-bold">11:30 AM</span></button>
                  <button type="button" className="rounded-xl bg-[#fff0f3] p-4">Oct 26<br/><span className="block font-bold">02:00 PM</span></button>
                  <button type="button" className="rounded-xl bg-[#fff0f3] p-4">Oct 28<br/><span className="block font-bold">10:00 AM</span></button>
                </div>

                <div className="border-2 border-dashed border-[#e7cfd6] rounded-2xl p-8 text-center">
                  <div className="text-3xl text-[#e0b8c8]">⇪</div>
                  <p className="mt-4 text-sm text-[#8b7079]">Drag and drop files here (PDF, DOCX, ZIP — max 25MB)</p>
                </div>

                <div>
                  <div className="flex items-center gap-6">
                    <label className="inline-flex items-center gap-3 text-sm">
                      <input type="radio" name="contact" defaultChecked className="w-4 h-4 text-[#a90b66]" />
                      <span>Email</span>
                    </label>
                    <label className="inline-flex items-center gap-3 text-sm">
                      <input type="radio" name="contact" className="w-4 h-4 text-[#a90b66]" />
                      <span>Phone Call</span>
                    </label>
                    <label className="inline-flex items-center gap-3 text-sm">
                      <input type="radio" name="contact" className="w-4 h-4 text-[#a90b66]" />
                      <span>WhatsApp</span>
                    </label>
                  </div>
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
