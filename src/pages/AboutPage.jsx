import { Link } from 'react-router-dom'

const values = [
  {
    title: 'Quantitative Precision',
    desc: 'We eliminate emotional and narrative-driven biases from investing. By utilizing rigorous mathematical models, causal macro analysis, and structural risk pricing, we design payoffs optimized for specific capital conditions.',
  },
  {
    title: 'Aligned Partnership',
    desc: 'Our interests are directly welded to those of our partners. Korbly’s senior partners commit significant principal capital into every strategy, structuring fees and incentive models to prioritize absolute risk-adjusted returns.',
  },
  {
    title: 'Operational Stewardship',
    desc: 'We are active, hands-on builders. We work directly alongside host nations, sovereign entities, and management teams to build durable regulatory, financial, and physical market infrastructure that outlasts any single transaction.',
  },
]

const leadership = [
  {
    name: 'Kofi Mensah',
    role: 'Managing Partner & CIO',
    bio: 'Over 18 years of quantitative finance and structural transaction experience. Formerly Director of Macro Structuring at a leading global investment bank in London. MSc in Financial Mathematics.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop',
  },
  {
    name: 'Amara Diallo',
    role: 'Partner, Sovereign Advisory & SPVs',
    bio: 'Expert in public-private partnerships and sovereign debt restructuring. Formerly senior advisor to the Ministry of Finance and various West African regional development agencies. MPA from Harvard Kennedy School.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop',
  },
  {
    name: 'Dr. Yaw Asante',
    role: 'Head of Quantitative Research',
    bio: 'Pioneer in causal macroeconomic modeling of sovereign emerging markets. Formerly Senior Portfolio Manager at a multi-billion dollar quantitative macro fund in New York. PhD in Mathematics from Oxford.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&auto=format&fit=crop',
  },
]

export default function AboutPage() {
  return (
    <div>

      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(9,19,15,0.85) 0%, rgba(14,35,24,0.55) 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <span className="font-sans text-[0.65rem] font-medium tracking-[0.22em] uppercase text-gold">
              Our Firm
            </span>
            <h1 className="mt-4 font-serif font-light text-white leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
            >
              Africa's first<br />systematic merchant bank.
            </h1>
            <p className="mt-6 font-sans text-[0.95rem] font-light leading-relaxed text-white/80 max-w-lg">
              Combining macro intelligence, quantitative transaction structuring, and sovereign advisory 
              into a single integrated operating system. Based in Accra, Ghana.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision Split Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Text */}
          <div>
            <span className="font-sans text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-gold">
              The Vision
            </span>
            <h2 className="mt-4 font-serif font-light text-forest-900 text-3xl leading-snug mb-6">
              Built for Africa’s Future.
            </h2>
            <p className="font-sans text-sm font-light leading-relaxed text-muted mb-4">
              Africa has no shortage of available capital pools—with domestic institutional assets exceeding $775 billion 
              and foreign development allocations over $550 billion. The true bottleneck is structural: the lack of a 
              domestically-owned, compliance-grade merchant banking institution capable of bridging the gap between raw capital 
              and highly de-risked, exit-ready assets.
            </p>
            <p className="font-sans text-sm font-light leading-relaxed text-muted mb-6">
              Korbly was founded in 2026 to resolve this structural gridlock. Operating as a systematic merchant bank, 
              we combine deep economic causal modeling with quantitative private credit, thematic private equity, and sovereign advisory 
              to engineer long-term compounding mechanisms for our partners.
            </p>
            <div className="border-t border-line/60 pt-6">
              <Link
                to="/approach"
                className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase text-forest-700 hover:text-gold transition-colors duration-200 no-underline"
              >
                Our Investment Approach
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Image Layout */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80&auto=format&fit=crop"
              alt="Durable physical infrastructure deployment"
              className="w-full h-[450px] object-cover border border-line"
            />
            {/* Structural Accent Frame */}
            <div
              className="absolute border border-gold/30 z-[-1] hidden md:block"
              style={{
                bottom: '-20px',
                right: '-20px',
                width: '70%',
                height: '70%',
              }}
            />
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-parchment border-t border-b border-line">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-sans text-[0.65rem] font-medium tracking-[0.22em] uppercase text-gold">
              Operating Principles
            </span>
            <h2 className="mt-3 font-serif font-light text-forest-900 text-3xl">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white border border-line p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <h3 className="font-serif text-xl font-light text-forest-900 mb-4 border-b border-line/60 pb-3">
                  {value.title}
                </h3>
                <p className="font-sans text-xs font-light leading-relaxed text-muted flex-1">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-sans text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-gold">
              Executive Committee
            </span>
            <h2 className="mt-3 font-serif font-light text-forest-900 text-3xl">
              Leadership & Partners
            </h2>
            <p className="font-sans text-xs text-muted font-light leading-relaxed mt-2">
              Our senior partners combine international investment banking backgrounds with elite academic credentials 
              to provide systematic execution capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member) => (
              <div
                key={member.name}
                className="border border-line/60 hover:shadow-md transition-shadow duration-300 bg-cream/[0.1] group flex flex-col"
              >
                {/* Profile Image */}
                <div className="h-72 overflow-hidden relative border-b border-line/40">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                </div>

                {/* Profile Content */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-light text-forest-900">
                      {member.name}
                    </h3>
                    <span className="font-sans text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-gold block mt-1">
                      {member.role}
                    </span>
                    <p className="mt-4 font-sans text-xs font-light leading-relaxed text-muted">
                      {member.bio}
                    </p>
                  </div>

                  <div className="border-t border-line/40 pt-4 mt-6 flex justify-between items-center text-[0.65rem] text-forest-700 font-sans font-medium tracking-wide uppercase">
                    <span>Ghana Office</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gold">
                      <path d="M12 2a10 10 0 0 1 10 10c0 5.25-10 10-10 10S2 17.25 2 12A10 10 0 0 1 12 2z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-forest-900">
        <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <p className="font-serif font-light text-white text-2xl leading-snug">
            Looking to align with a disciplined capital partner?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 font-sans text-sm font-semibold tracking-wide uppercase px-8 py-4 bg-gold text-forest-900 hover:bg-gold-light transition-colors duration-200 no-underline whitespace-nowrap"
          >
            Contact Our Bankers
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>

    </div>
  )
}
