import { useEffect, useRef, useState } from 'react'

const pillars = [
  {
    title: 'Disciplined Investing',
    text: 'A rigorous, quantitatively-modelled approach to identify attractive risk-adjusted opportunities across Africa\'s capital markets.',
  },
  {
    title: 'Aligned Partnership',
    text: 'We align with management teams and institutional investors for the long term, building relationships rooted in shared outcomes.',
  },
  {
    title: 'Operational Value',
    text: 'We work alongside management to drive performance, create value, and build market infrastructure that outlasts any single transaction.',
  },
  {
    title: 'Risk Management',
    text: 'Prudent, model-driven risk management is foundational to preserving and compounding capital across cycles.',
  },
]

const icons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-10 h-10"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-10 h-10"><circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 19c0-3 2.7-5 6-5s6 2 6 5"/><path d="M14.5 17c.5-2 2-3 4-3 2.5 0 4 1.5 4 3.5"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-10 h-10"><path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-8"/><path d="M22 20V8"/><path d="M2 20h22"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-10 h-10"><path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3z"/></svg>,
]

export default function Pillars() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-cream border-t border-b border-line">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {pillars.map((pillar, i) => (
          <div
            key={pillar.title}
            className={`flex gap-5 transition-all duration-700 ${
              visible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: i * 100 + 'ms' }}
          >
            <div className="text-forest-700 shrink-0 mt-1">
              {icons[i]}
            </div>
            <div>
              <h3 className="font-sans text-sm font-semibold text-forest-900 tracking-wide">
                {pillar.title}
              </h3>
              <p className="mt-2 font-sans text-xs font-light leading-relaxed text-muted">
                {pillar.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
