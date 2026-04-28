'use client';

import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function WorkflowPage() {
  return (
    <div className={`${inter.className} bg-[#fff8f8] text-[#25181d]`}>
      {/* Hero Section: From Idea to Impact */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 px-[5vw] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-20 filter grayscale"
            alt="Creative studio"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL4UCMmoSu8daauyWLcvpAZ19-kD0GCbLNWYvkDFWwkHwpUIzkCE5-nRa_l6DmZjOUaGQpK7hWo2UlhE52aMEObq0Nro8aNA0y4nQlmmkEqewzIMjA08PkE3ztekJPO5uAftsDwpF6TKHdIh9FWp-aZAS2Rd3haI5Ui7yw5fCH7hAjNhmBWBQbXP_b9z2Dv7WKNTW_DE6csMpyikUrxBqU6z7Ao93Sl57fN-XCCLHKMg0yPFOOgPu3Hwwu39VzS0GjF0tM3lRQ2Dym"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fff8f8] to-[#fff8f8]"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <span className="inline-block text-[#890051] font-semibold tracking-[0.3em] uppercase text-xs mb-6">Our Creative Engine</span>
          <h1 className="text-[80px] font-bold leading-[0.9] tracking-tighter text-[#25181d] mb-8">
            From Idea<br />to Impact
          </h1>
          <p className="text-xl text-[#574048] max-w-2xl mx-auto leading-relaxed font-light mb-12">
            We bridge the gap between your vision and a world that's listening. With precision audio and cinematic visuals, every project becomes a moment that matters.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="bg-[#b10e6b] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-[1.05] transition-all duration-500 shadow-xl shadow-[#b10e6b]/20">
              Start the Journey
            </button>
            <button className="flex items-center gap-2 text-[#890051] font-bold uppercase tracking-widest text-sm hover:translate-x-2 transition-transform">
              Learn More →
            </button>
          </div>
        </div>
      </section>

      {/* Behind The Work Section */}
      <section className="py-32 px-[5vw] bg-[#ffffff]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[#890051] mb-6">Strategy First</h2>
            <h3 className="text-4xl font-semibold leading-tight text-[#25181d] mb-8">Behind The Work: Strategic Alchemy</h3>
            <p className="text-lg text-[#574048] leading-relaxed mb-8">
              We don't just create content. We decode your audience, craft narratives that resonate, and translate them into sensory experiences.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-[#b10e6b]/10 p-3 rounded-xl text-[#b10e6b]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#25181d] uppercase tracking-wider text-xs">Deep Analysis</h4>
                  <p className="text-sm text-[#574048]">Uncovering the unspoken desires of your target audience.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-[#b10e6b]/10 p-3 rounded-xl text-[#b10e6b]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#25181d] uppercase tracking-wider text-xs">Visual Storytelling</h4>
                  <p className="text-sm text-[#574048]">Crafting aesthetics that communicate faster than words.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden mt-12">
              <img
                className="w-full h-96 object-cover hover:scale-110 transition-transform duration-700"
                alt="Creative team"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlALltRnPwo-f9d9MaYMuOHk_49-T2LwReGhdoaSgozTqG6mdzyh1SBIbKCnWv4sJtisaZzR-2PlncuVvZ0Cu5Cll0Yh2EFiaYRAV1kmWRHRLlLQxvXQyFmUb1pMazdRj0g1NSdaCRwB0QFUsLPqwjBnlD04THVpNnLLeIrbICCAHo_S7YVvaARqUbwr7Krneo72jAIV26rWjRoAVkU1AQGPXWP3ZkgmovruMtj-OS1qM5kt4DfvQep8v8JFkEJrvn7JjNnkwkooTy"
              />
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img
                className="w-full h-96 object-cover hover:scale-110 transition-transform duration-700"
                alt="Audio equipment"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvyrtdwjJ1bWPamo-uD62Oh9eH3k3N9kIfxV4TP6F60NMpyX8q6ufXYEmCqA9omHy1uwPPoP-u7teHGXu6Rmq_0KLLV4gW-yf9Jx4nRH_OLgFNBkoADuHaMWrA8QFfOEBD_wHztS3fIZnuvvi4wxoxQe34FaY3YF_GscUxRm3Edz5ypIvQY6lQAXqodtxP_2omnU1g1dPltKc42Cr7sPGiX4JceRLEQy997SSKsF8HmA4YuKhQV9bESxHh11uIn8rJomEOznx8_dfP"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Magic Process Section */}
      <section className="py-32 px-[5vw] bg-[#fff0f3] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#b10e6b]/5 to-transparent blur-3xl"></div>
        <div className="relative z-10">
          <div className="max-w-2xl mb-24">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[#890051] mb-6">Our Methodology</h2>
            <h3 className="text-6xl font-bold tracking-tighter text-[#25181d] leading-none">Magic <br />Process</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="text-8xl font-black text-[#b10e6b]/10 group-hover:text-[#b10e6b] transition-colors duration-500 mb-6 select-none">01</div>
              <h4 className="text-2xl font-bold mb-4 text-[#25181d]">The Immersion</h4>
              <p className="text-[#574048] leading-relaxed">We live and breathe your brand for a week, understanding your challenges as if they were our own.</p>
            </div>
            <div className="group">
              <div className="text-8xl font-black text-[#b10e6b]/10 group-hover:text-[#b10e6b] transition-colors duration-500 mb-6 select-none">02</div>
              <h4 className="text-2xl font-bold mb-4 text-[#25181d]">The Synthesis</h4>
              <p className="text-[#574048] leading-relaxed">Colliding audio textures with visual concepts to create a unique creative signature for the project.</p>
            </div>
            <div className="group">
              <div className="text-8xl font-black text-[#b10e6b]/10 group-hover:text-[#b10e6b] transition-colors duration-500 mb-6 select-none">03</div>
              <h4 className="text-2xl font-bold mb-4 text-[#25181d]">The Revelation</h4>
              <p className="text-[#574048] leading-relaxed">Polished, high-impact assets delivered through a seamless pipeline to your audience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creation Flow Section */}
      <section className="py-32 px-[5vw] bg-white">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[#890051] mb-6">Phase by Phase</h2>
          <h3 className="text-4xl font-semibold text-[#25181d]">Creation Flow</h3>
        </div>
        <div className="relative space-y-32">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <div className="bg-[#f5dce3] rounded-[40px] p-2 overflow-hidden shadow-2xl">
                <img
                  className="w-full h-[400px] object-cover rounded-[38px]"
                  alt="Storyboard sketches"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1fIViHdnwYbYqgADdqUY7JSVh8Vug7vX2XqQD2roGecF9K7Ra69dOmiVn-MYLrP5v4sI4L6OqTD4sUGmpKw0BroSGC3hwiCoexNSpAQ5raCUgN5XszgmDRMwMweB8rnQfROpP7j-VYTiSbXhvQjI5FH9UWz0h8K008Bylxo1oWdMnKijVan9tmDjvnR2sRkwKSC69m1LXv7fGwVAUMk_0YESHUW4sN_93W8QUDvLb4Cj7dZ9bHQxuFw0PJy8zZbKZmmVHrWWR47Vy"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-[#b10e6b] font-black text-xl italic">Phase One</span>
              <h4 className="text-3xl font-bold tracking-tight text-[#25181d]">Conceptual Blueprint</h4>
              <p className="text-lg text-[#574048] leading-relaxed">Every masterpiece starts with a sketch. We map out the emotional arc, the visual palette, and the sonic landscape before a single frame is shot.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#574048]">
                  <svg className="w-5 h-5 text-[#890051]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  Script &amp; Narrative Design
                </li>
                <li className="flex items-center gap-3 text-[#574048]">
                  <svg className="w-5 h-5 text-[#890051]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  Visual Moodboards
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <div className="w-full md:w-1/2">
              <div className="bg-[#f5dce3] rounded-[40px] p-2 overflow-hidden shadow-2xl">
                <img
                  className="w-full h-[400px] object-cover rounded-[38px]"
                  alt="Cinema camera setup"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvSG_2RgKpGR0D469mhnVsRf_oM_WRe_TRXI1i3iAFfkLfUaDSabKF1yrOHS9a-FYX2Kg8_ZhUj-CRyaKOU4Qt3EoHvCZFaRtTBxP0PtYdZ6uqPULkOSivX4zMPdFrlRH42BfKSbY5q7jj8fsPyFHtfZie7-B3a8c8ejoMJb"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-[#b10e6b] font-black text-xl italic">Phase Two</span>
              <h4 className="text-3xl font-bold tracking-tight text-[#25181d]">The Capture</h4>
              <p className="text-lg text-[#574048] leading-relaxed">Execution with surgical precision. Using industry-leading tech to capture the raw energy of the concept in high-fidelity visual and audio formats.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#574048]">
                  <svg className="w-5 h-5 text-[#890051]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  8K Cinematography
                </li>
                <li className="flex items-center gap-3 text-[#574048]">
                  <svg className="w-5 h-5 text-[#890051]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  Spatial Audio Recording
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <div className="bg-[#f5dce3] rounded-[40px] p-2 overflow-hidden shadow-2xl">
                <img
                  className="w-full h-[400px] object-cover rounded-[38px]"
                  alt="Video editing workstation"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6HG69Z0Emz-y9eqEimPTICHmtqQAd7mGzuqZ_9k-d5tQWR6bwkOlPskX5xeR8e5PYZhvon26EAhx2bqgMxgwBtOTbwwSo3rTvaMdW3QunG9gBzjRGxf6XXYALcuRXygHHXwb0ootVy-Sl740Q8dnl0muNjBtCPIGuVlB8wKdbU-mcJ4oJADkwIBQ1sOJAyD91fS-B9ksl1yJ_08kjdcw52hs_F1WzRg_y9X0EnBsw2xQRb8_XYSopvc3wd6EmH7cznL-vJYlLNhIJ"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-[#b10e6b] font-black text-xl italic">Phase Three</span>
              <h4 className="text-3xl font-bold tracking-tight text-[#25181d]">Sculpting &amp; Polishing</h4>
              <p className="text-lg text-[#574048] leading-relaxed">This is where the magic happens. We edit, color-grade, and sound-mix until every millisecond serves the purpose of the whole.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#574048]">
                  <svg className="w-5 h-5 text-[#890051]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  Editorial Refinement
                </li>
                <li className="flex items-center gap-3 text-[#574048]">
                  <svg className="w-5 h-5 text-[#890051]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  Motion Graphics Infusion
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Journey Timeline */}
      <section className="py-32 px-[5vw] bg-[#f5dce3]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[#890051] mb-16 text-center">Your Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-[#debec8]/30 -translate-y-1/2 z-0"></div>
            {[
              { num: 1, title: 'Kickoff', desc: 'Initial workshop to align vision and goals.' },
              { num: 2, title: 'Development', desc: 'Active creation with weekly touchpoints.' },
              { num: 3, title: 'Feedback Loop', desc: 'Iterative polishing based on your insights.' },
              { num: 4, title: 'Launch', desc: 'Global delivery across all channels.' },
            ].map((step) => (
              <div key={step.num} className="relative z-10 bg-white p-8 rounded-3xl shadow-sm hover:translate-y-[-8px] transition-transform duration-300">
                <div className="w-12 h-12 bg-[#890051] rounded-full flex items-center justify-center text-white font-bold mb-6 mx-auto">
                  {step.num}
                </div>
                <h5 className="text-center font-bold mb-2 text-[#25181d]">{step.title}</h5>
                <p className="text-xs text-center text-[#574048]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision to Reality */}
      <section className="py-32 px-[5vw] bg-[#25181d] text-white">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[#ffb0cd] mb-6">The Outcome</h2>
            <h3 className="text-5xl font-bold tracking-tight">Vision to Reality</h3>
          </div>
          <p className="text-[#debec8] max-w-sm">We don't just deliver files; we deliver milestones that transform brand perceptions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-[32px] aspect-video mb-8">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Luxe Automata brand"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB38i7BQURJJxnX9AKhn7ClRxingta4VeiSpfbLMEfpBnz0n7YrgTA6RYMyZDWBJOD5fwTMTjQq4F9NT8e77-9ct13KDxh-QowYWQLszsOHuMR9p1Kaq89weAEvkFgNOa8MGnEymBkv2xZZkihIF_D0rvUZE7ZT29GOy5PVO34ZSZwMf9vPn168qtRoOtr9weIx1uhC3WEekXctVslf6FJeAfRzmTK8H3Vd4flpkCuVJBA846-V30QBfUeJ-sxrTAN-73zIuhhfZ3B"
              />
              <div className="absolute inset-0 bg-[#b10e6b]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h5 className="text-2xl font-bold">Luxe Automata</h5>
                <p className="text-white/60">Brand Identity &amp; Sonic Logo</p>
              </div>
              <div className="text-[#ffb0cd] font-bold text-4xl">+140%</div>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-[32px] aspect-video mb-8">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Aether Systems"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS495AYGUG9WdLdFEw2sK6JUrua_L6SrZCvEQfeIK8GXrui_fDbay270NcMarSZ-V5UJ3eNDC_yZ6Z9Ud9_qGU0vQRvash0HHu-wq030CfRT1f8v-J0RF3PypSRa6N-o7dXr5Gx484SSk84pPoPt8s8iQGujuuWdLXSt_2OfULxjfMJvvTirnBJowgDeihsSey_Omb_KCOcDCX3m4-PXl2Nh7QcvZl4_UMqHmxq_G_KB3jwuw8NUw4U4avnZN7qc46hiO94VTyxzL7"
              />
              <div className="absolute inset-0 bg-[#b10e6b]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h5 className="text-2xl font-bold">Aether Systems</h5>
                <p className="text-white/60">Commercial Video Series</p>
              </div>
              <div className="text-[#ffb0cd] font-bold text-4xl">2.4M</div>
            </div>
          </div>
        </div>
      </section>

      {/* Build With Us CTA */}
      <section className="py-48 px-[5vw] bg-[#fff0f3] text-center overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#b10e6b]/5 rounded-full blur-[120px]"></div>
        </div>
        <div className="relative z-10">
          <h2 className="text-[64px] font-bold tracking-tight text-[#25181d] mb-8 leading-none">
            Ready to <br />
            <span className="text-[#b10e6b] italic">Build With Us?</span>
          </h2>
          <p className="text-lg text-[#574048] max-w-xl mx-auto mb-12">
            Let's turn your most ambitious ideas into world-class digital realities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-[#b10e6b] text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-[1.05] transition-all shadow-xl shadow-[#b10e6b]/20">
              Book a Consultation
            </button>
            <button className="w-full sm:w-auto bg-white text-[#b10e6b] px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#f5dce3] transition-all">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
