import { Link } from 'react-router-dom'

const steps = [
  {
    num: '1',
    title: 'Research',
    text: 'We conduct deep, systematic research across African sovereign economies, sectors, and geographies to identify durable trends and compelling opportunities using proprietary causal models.',
  },
  {
    num: '2',
    title: 'Evaluate',
    text: 'We rigorously assess each opportunity against our investment criteria, with a focus on quality, valuation, downside protection, and alignment with our macro intelligence framework.',
  },
  {
    num: '3',
    title: 'Invest',
    text: 'We commit patient capital with the conviction and discipline necessary to support long-term value creation across infrastructure, private equity, and credit markets.',
  },
  {
    num: '4',
    title: 'Partner',
    text: 'We work alongside management teams as engaged partners, offering strategic guidance, operational expertise, and access to our institutional network.',
  },
]

const differentiators = [
  'Independent ownership structure rooted in Africa',
  'Significant principal capital invested alongside clients',
  'Strong alignment through fee and incentive design',
  'Proprietary macro intelligence and quantitative structuring',
  'Deep sector specialisation across investment teams',
  'Continuity of senior investment professionals',
  'Government SPV partnerships for proprietary deal flow',
  'NPRA-licensed institutional asset management',
]

export default function ApproachPage() {
  return (
    <div>

      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1920&q=80&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(9,19,15,0.85) 0%, rgba(14,35,24,0.55) 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <span className="font-sans text-[0.65rem] font-medium tracking-[0.22em] uppercase text-gold">
              Investment Approach
            </span>
            <h1 className="mt-4 font-serif font-light text-white leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
            >
              Disciplined process.<br />Patient capital.<br />Aligned interests.
            </h1>
            <p className="mt-6 font-sans text-[0.95rem] font-light leading-relaxed text-white/80 max-w-lg">
              Our approach is built on rigorous research, deep operational 
              insight, and a commitment to long-term partnership with the 
              businesses we back.
            </p>
          </div>
        </div>
      </section>

      {/* Process + Differentiators */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Process */}
          <div>
            <h2 className="font-serif font-light text-forest-900 text-2xl mb-10">
              Our Process
            </h2>
            <ol className="flex flex-col gap-8">
              {steps.map((step) => (
                <li key={step.num} className="flex gap-6">
                  <div className="font-serif text-4xl text-forest-700 w-10 shrink-0 leading-none">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-forest-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm font-light leading-relaxed text-muted">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* What sets us apart */}
          <div className="bg-cream p-10">
            <h2 className="font-serif font-light text-forest-900 text-xl mb-6">
              What Sets Us Apart
            </h2>
            <ul className="flex flex-col gap-4">
              {differentiators.map((item) => (
                <li key={item} className="flex gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2" className="mt-0.5 shrink-0">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span className="font-sans text-sm font-light text-muted">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Risk Management */}
      <section className="bg-parchment border-t border-line">
        <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-sans text-[0.65rem] font-medium tracking-[0.22em] uppercase text-gold">
              Risk Management
            </span>
            <h2 className="mt-4 font-serif font-light text-forest-900 text-2xl mb-6">
              Preserving capital is as important as growing it.
            </h2>
            <p className="font-sans text-sm font-light leading-relaxed text-muted mb-4">
              We believe disciplined risk management is foundational to 
              compounding capital over time. Our approach integrates 
              rigorous quantitative analysis with the judgment that comes 
              from decades of investing experience across market cycles.
            </p>
            <p className="font-sans text-sm font-light leading-relaxed text-muted">
              Independent oversight, scenario testing, and continuous 
              portfolio monitoring ensure that we remain vigilant to 
              evolving market conditions and committed to preserving 
              the capital entrusted to us by our institutional partners.
            </p>
          </div>
          
          {/* Right column graphic for balanced layout */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop"
              alt="Rigorous analytical risk modelling"
              className="w-full h-[360px] object-cover border border-line"
            />
          </div>
        </div>
      </section>

    </div>
  )
}
