import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1920&q=85&auto=format&fit=crop',
    title: 'Macro Financial Skyline at Dusk',
  },
  {
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=85&auto=format&fit=crop',
    title: 'Macro Intelligence & Sovereign Capital',
  },
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=85&auto=format&fit=crop',
    title: 'Primary Industrial Infrastructure',
  },
  {
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=85&auto=format&fit=crop',
    title: 'Sovereign Advisory & SPV Partnerships',
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('korbly-theme') || 'sapphire'
  })

  // Synchronize state with window custom events
  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(localStorage.getItem('korbly-theme') || 'sapphire')
    }
    window.addEventListener('korbly-theme-change', handleThemeChange)
    return () => window.removeEventListener('korbly-theme-change', handleThemeChange)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'sapphire' ? 'green' : 'sapphire'
    document.documentElement.setAttribute('data-theme', nextTheme)
    localStorage.setItem('korbly-theme', nextTheme)
    setTheme(nextTheme)
    window.dispatchEvent(new Event('korbly-theme-change'))
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-forest-900">
      
      {/* Background Images Slideshow with Crossfade */}
      {slides.map((slide, idx) => (
        <div
          key={slide.image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-80' : 'opacity-0'
          } mix-blend-overlay`}
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        />
      ))}

      {/* Dynamic light gradient overlay */}
      <div className="absolute inset-0 z-[1]"
        style={{
          background: 'var(--hero-gradient)'
        }}
      />

      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 w-px h-full z-[1]"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(200,150,62,0.12), transparent)'
        }}
      />

      {/* Slide Navigation Dots (Vertical on absolute right) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-[10] hidden md:flex">
        {slides.map((slide, idx) => (
          <button
            key={slide.image}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full border border-gold transition-all duration-300 focus:outline-none ${
              idx === currentSlide ? 'bg-gold h-6' : 'bg-transparent hover:bg-gold/40'
            }`}
            title={`Show image for: ${slide.title}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-8 w-full py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-[2]">
        
        {/* Left - Main Content */}
        <div className="lg:col-span-7">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px bg-gold" />
            <span className="font-sans text-[0.65rem] font-medium tracking-[0.22em] uppercase text-gold">
              Africa's First Systematic Merchant Bank
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif font-light text-white leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)' }}
          >
            Long-Term Thinking.<br />
            <em className="italic text-gold/80">Meaningful Outcomes.</em>
          </h1>

          {/* Lead text */}
          <p className="mt-8 max-w-xl font-sans text-[0.95rem] font-light leading-relaxed text-white/75">
            Korbly Investment Partners is a private investment firm 
            focused on generating enduring value through discipline, 
            experience, and alignment. Based in Accra, Ghana.
          </p>

          {/* Theme Switcher Quick Toggle directly in Hero */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 hover:border-gold/30 transition-colors duration-200">
            <button
              onClick={toggleTheme}
              className="text-gold font-sans text-[0.68rem] font-semibold uppercase tracking-wider flex items-center gap-2 focus:outline-none"
              title="Click to switch dynamic theme color"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="animate-spin-slow">
                <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
                <path d="M12 22V4c0 0 7 6.7 7 11a7 7 0 0 1-7 7z" fill="currentColor" />
              </svg>
              Theme: {theme === 'sapphire' ? 'Sapphire Blue' : 'Emerald Green'}
            </button>
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
          </div>

          {/* CTA Buttons - Matching Screenshot */}
          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              to="/approach"
              className="inline-flex items-center gap-4 font-sans text-[0.8rem] font-semibold tracking-wider px-8 py-4 bg-white text-ink hover:bg-white/90 transition-all duration-200 no-underline shadow-md"
            >
              Our Approach
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 font-sans text-[0.78rem] font-light tracking-[0.08em] uppercase px-8 py-4 text-white/85 border border-white/20 hover:border-white/60 hover:text-white transition-all duration-200 no-underline"
            >
              Investor Relations
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Right - Philosophy Card - Styled Exactly like Screenshot */}
        <div className="lg:col-span-4 lg:col-start-9">
          <div
            className="p-10 border border-white/10 backdrop-blur-xl relative overflow-hidden"
            style={{ background: 'rgba(9,30,45,0.78)' }}
          >
            {/* Card eyebrow */}
            <span className="font-sans text-[0.65rem] font-medium tracking-[0.22em] uppercase text-white/70">
              Our Philosophy
            </span>

            {/* Card title */}
            <h2 className="mt-5 font-serif text-[1.85rem] font-light text-white leading-snug">
              We partner with exceptional management teams to build great businesses.
            </h2>

            {/* Divider */}
            <div className="my-7 border-t border-white/10" />

            {/* Stats */}
            <div className="flex flex-col gap-0">
              {[
                { label: 'Africa Infrastructure Gap (Annual)', value: '$50–90B', suffix: 'deficit' },
                { label: 'Institutional Assets, Africa', value: '$775B', suffix: 'total' },
                { label: 'Target Net IRR', value: '18–25%', suffix: 'p.a.' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex justify-between items-baseline py-3 border-b border-white/[0.06] last:border-b-0"
                >
                  <span className="font-sans text-[0.72rem] text-white/50">
                    {stat.label}
                  </span>
                  <span className="font-serif text-[1.4rem] font-medium text-gold/90">
                    {stat.value}
                    <span className="font-sans text-[0.72rem] text-white/45 ml-1">
                      {stat.suffix}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            {/* Card link with customized circle-wrapped chevron */}
            <div className="mt-7 pt-5 border-t border-white/10">
              <Link
                to="/approach"
                className="flex items-center justify-between w-full font-sans text-[0.8rem] text-white/80 hover:text-gold transition-colors duration-200 no-underline group"
              >
                <span>Learn more about our investment philosophy.</span>
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-white/20 group-hover:border-gold group-hover:text-gold ml-4 flex-shrink-0 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 5l7 7-7 7"/>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[2]">
        <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
        <span className="font-sans text-[0.62rem] tracking-[0.2em] uppercase text-white/40">
          Scroll
        </span>
      </div>

    </section>
  )
}
