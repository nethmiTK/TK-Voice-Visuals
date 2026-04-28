'use client';

import Link from 'next/link';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'], weights: [400, 700], styles: ['normal', 'italic'] });

export default function AboutPage() {
  const services = [
    {
      title: 'Voxium',
      description: 'Precision audio engineering for the influential voice.',
      category: 'Audio',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-rjRPksgvJJQPkEMNgQjm5_HIPhzZKQRbqSzkk-_pU7eq1UuH_55YhYPE0xOLwHK6TokSTgMozc_XC8HX4x8We-FPDNL4RQslD5BQ4DVc77bhTDwkDPz8x4Lxm-iuRDP1S3iY-j0PapIKq6nSjlRlPJVlUwwKo7iobGstJt8CT3-KKzoBGwEObwehW5bZtjrdpxeEBBDTymzEaq2BkveNPR3EfB2kaMWYWHsintl565cbG-yy-aPK6JJ8S1V2WcVEleboIljGgTFR',
    },
    {
      title: 'eyeCatching',
      description: 'Visual narratives that command immediate attention.',
      category: 'Visual',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3_T7JF4IO31FbTCepYATh6_RT80wp7JxgiHuP9ZuJb3QXWkpiAXNXa4uhYCgmE-bMmCaFwfGx-OHaIEzUhwnWiCF2yTabPFvXk0_A4-3-rSbpOvF9DL-2aU3J2eAyNPBKxkoEPqVqjgNxnbAo5Yq4CGtwwE6n8FFsUBu5FFDyXiiXMTVQk95Ma8eYFIG3k81WW12V9Dp7QWmoykE5kBsf7EP9M2J4Wix4DlGpMhEGSd-0yDTJxiNKRbRMlnoyXD9NVvivTLHj4v_2',
    },
    {
      title: 'RaRu',
      description: 'Rare insights. Unmatched execution. Strategic research for market dominance.',
      category: 'Strategy',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZrdat-QCVZP4SWem9Zb_LwyU_ve1qquzQBxKG4UZ9_iJXetysRm4CDDhmC8JCLQJM6CJMfBPb9R2DeLfmwp20HQ1OYAWjxcJgmxZd8nD3s08bf4Z2niYyzod_l-M2E9VFoJelr6avYvc4yyxOK_RnpXKZ6xn_lX73s33rIIHDilEh5tGqBsZoaPCRAekKrfsdP0-LXY7SZF8x3HQP9MaeB1NBLbTTSdlKfWMx4ImYMYfJU55162iKkK-yb8s5gQvyzYzKdVeD3ftq',
    },
    {
      title: 'ADcraft',
      description: 'Editorial-first advertising that prioritizes brand story over volume.',
      category: 'Advertising',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZrdat-QCVZP4SWem9Zb_LwyU_ve1qquzQBxKG4UZ9_iJXetysRm4CDDhmC8JCLQJM6CJMfBPb9R2DeLfmwp20HQ1OYAWjxcJgmxZd8nD3s08bf4Z2niYyzod_l-M2E9VFoJelr6avYvc4yyxOK_RnpXKZ6xn_lX73s33rIIHDilEh5tGqBsZoaPCRAekKrfsdP0-LXY7SZF8x3HQP9MaeB1NBLbTTSdlKfWMx4ImYMYfJU55162iKkK-yb8s5gQvyzYzKdVeD3ftq',
    },
    {
      title: 'Nexora',
      description: 'Next-gen digital infrastructure for the elite.',
      category: 'Technology',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZrdat-QCVZP4SWem9Zb_LwyU_ve1qquzQBxKG4UZ9_iJXetysRm4CDDhmC8JCLQJM6CJMfBPb9R2DeLfmwp20HQ1OYAWjxcJgmxZd8nD3s08bf4Z2niYyzod_l-M2E9VFoJelr6avYvc4yyxOK_RnpXKZ6xn_lX73s33rIIHDilEh5tGqBsZoaPCRAekKrfsdP0-LXY7SZF8x3HQP9MaeB1NBLbTTSdlKfWMx4ImYMYfJU55162iKkK-yb8s5gQvyzYzKdVeD3ftq',
    },
  ];

  const pillars = [
    {
      title: 'Editorial Excellence',
      description: 'Every piece of content undergoes rigorous editorial scrutiny to ensure the tone matches your authority.',
      icon: '✓',
    },
    {
      title: 'Behavioral Intel',
      description: 'Leveraging data-driven psychology to understand how your audience interacts with prestige brands.',
      icon: '◆',
    },
    {
      title: 'Quiet Luxury UI',
      description: 'Minimalist design systems that emphasize space and quality over clutter and noise.',
      icon: '◇',
    },
    {
      title: 'Future-Proof Tech',
      description: 'Implementing technologies today that will be industry standards in 2027 and beyond.',
      icon: '★',
    },
  ];

  const stats = [
    { number: '124+', label: 'Global Campaigns' },
    { number: '8.2M', label: 'Leads Generated' },
    { number: '15', label: 'Industry Awards' },
    { number: '98%', label: 'Client Retention' },
  ];

  return (
    <main className={`${inter.className} bg-[#fff8f8] text-[#25181d] overflow-x-hidden`}>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-screen flex items-center pt-32 md:pt-24 px-4 sm:px-6 md:px-[5vw]">
        <div className="max-w-5xl mx-auto text-center w-full">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#b10e6b] mb-6 block">
            Legacy Architecture
          </span>
          <h1 className={`${playfair.className} text-[clamp(2.5rem,8vw,5rem)] md:text-[4rem] leading-[1.1] mb-6 md:mb-8 italic font-light`}>
            We craft the voices that lead and the <span className="not-italic text-[#b10e6b] font-normal">visuals that endure.</span>
          </h1>
          <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-[#574048] max-w-2xl mx-auto leading-relaxed md:leading-8">
            TK Voice &amp; Visuals is the silent architect behind the world's most influential legacies, merging elite editorial precision with 2026 digital sophistication.
          </p>
        </div>
      </section>

      {/* The Signature 5 - Bento Grid */}
      <section className="py-16 md:py-32 px-4 sm:px-6 md:px-[5vw]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-12 md:mb-20">
            <h2 className={`${playfair.className} text-[clamp(2rem,6vw,3rem)] font-light mb-4`}>The Signature 5</h2>
            <p className="text-[#574048] text-sm md:text-base max-w-xl">
              Our core pillars of brand excellence, each a specialized ecosystem for modern authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[350px]">
            {/* Voxium - Large */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-[#f5dce3]">
              <img
                src={services[0].image}
                alt={services[0].title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 md:p-10 flex flex-col justify-end">
                <h3 className={`${playfair.className} text-2xl md:text-3xl text-white mb-2 font-light`}>
                  {services[0].title}
                </h3>
                <p className="text-white/70 text-sm md:text-base">{services[0].description}</p>
              </div>
            </div>

            {/* eyeCatching */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-[#b10e6b]">
              <img
                src={services[1].image}
                alt={services[1].title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <h3 className={`${playfair.className} text-xl md:text-2xl text-white mb-2 font-light`}>
                  {services[1].title}
                </h3>
                <p className="text-white/80 text-xs md:text-sm">{services[1].description}</p>
              </div>
            </div>

            {/* RaRu */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-[#ffe8ee]">
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div />
                <div>
                  <h3 className={`${playfair.className} text-xl md:text-2xl text-[#b10e6b] mb-3 font-light`}>
                    {services[3].title}
                  </h3>
                  <p className="text-[#574048] text-xs md:text-sm leading-relaxed">{services[3].description}</p>
                </div>
              </div>
            </div>

            {/* Nexora */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-[#3b2c31]">
              <img
                src={services[2].image}
                alt={services[2].title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-700"
              />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <h3 className={`${playfair.className} text-xl md:text-2xl text-white mb-2 font-light`}>
                  {services[2].title}
                </h3>
                <p className="text-white/70 text-xs md:text-sm">{services[2].description}</p>
              </div>
            </div>

            {/* ADcraft */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-[#f5dce3]">
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center" />
                <div>
                  <h3 className={`${playfair.className} text-xl md:text-2xl text-[#25181d] mb-3 font-light`}>
                    {services[4].title}
                  </h3>
                  <p className="text-[#574048] text-xs md:text-sm leading-relaxed">{services[4].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Foundations */}
      <section className="py-16 md:py-32 px-4 sm:px-6 md:px-[5vw] bg-[#fff0f3]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16">
            <div>
              <h2 className={`${playfair.className} text-[clamp(1.75rem,5vw,2.5rem)] font-light mb-6`}>
                Strategic Foundations
              </h2>
              <p className="text-[#574048] text-sm md:text-base leading-relaxed">
                We don't build websites or launch ads; we architect digital presence that stands the test of time.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <div className="text-2xl md:text-3xl text-[#b10e6b]">{pillar.icon}</div>
                  <h4 className="font-semibold text-sm md:text-base text-[#25181d]">{pillar.title}</h4>
                  <p className="text-xs md:text-sm text-[#574048] leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Accolades */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-[5vw] bg-white">
        <div className="max-w-7xl mx-auto w-full text-center">
          <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#8b7079] mb-12 md:mb-16">
            Distinctions &amp; Partnerships
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-24 opacity-60 hover:opacity-100 transition-opacity">
            {['Certified Partner', 'A-Design Gold', 'Industry Leader', 'Innovation Award'].map((award, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3">
                <div className="text-3xl md:text-4xl">✦</div>
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#25181d]">
                  {award}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Stats */}
      <section className="py-16 md:py-32 px-4 sm:px-6 md:px-[5vw]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-6 md:p-8 rounded-2xl bg-[#fbe2e9]">
                <div className="text-4xl md:text-5xl font-bold text-[#b10e6b] mb-2 md:mb-3">
                  {stat.number}
                </div>
                <div className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-[#574048]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUamMgbsvR6Y0j9-5BtJR78RPOtMwVflwJT8iyHoWqvioQhq0pEFK_HCBkWDhfzqZcxFRK4gvhIvHNr8TdhuEiZb6uT_i674FqbM6ipP11IbR6dSJY6bAUaCBQ5nKjob8hgm7u7i6Nml9OB97RobACn-AxtGGuE-gW5Ti0KNh2DoY0py5A55Z4iv-ON4dLWHZ6dMPIUsxPK_qdg4g0wTdh1olk1L6zOueO3ro0h1ELZPJDDW6DJ45w5SP13uiE_0MgZFyCBK75CC4e"
          alt="Philosophy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#b10e6b]/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#25181d] via-[#25181d]/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-[5vw] w-full">
          <div className="max-w-xl">
            <h2 className={`${playfair.className} text-[clamp(2rem,7vw,3.5rem)] text-white mb-6 md:mb-8 font-light`}>
              Our Philosophy
            </h2>
            <p className={`${playfair.className} text-white/80 text-base md:text-lg leading-relaxed mb-8 italic font-light`}>
              "Authority isn't shouted. It is felt in the precision of the message and the clarity of the vision."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0 bg-white/20" />
              <div>
                <div className="text-white font-semibold text-sm md:text-base">Thaddeus K.</div>
                <div className="text-white/60 text-[10px] md:text-xs uppercase tracking-widest">Founding Principal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-32 px-4 sm:px-6 md:px-[5vw] text-center bg-[#f5dce3]">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className={`${playfair.className} text-[clamp(2rem,6vw,3.5rem)] font-light mb-6 md:mb-8`}>
            Ready to Build Your Legacy?
          </h2>
          <p className="text-[#574048] text-sm md:text-base mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            We take on a limited number of partner projects each year to ensure the highest fidelity of execution. Secure your position in the 2026 queue.
          </p>
          <Link
            href="/Consultancy"
            className="inline-block bg-[#b10e6b] text-white px-8 md:px-10 py-3 md:py-5 rounded-xl font-semibold text-sm md:text-base hover:shadow-lg hover:translate-y-[-2px] transition-all active:scale-95"
          >
            Book a Strategy Session
          </Link>
        </div>
      </section>
    </main>
  );
}
