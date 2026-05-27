import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=1920&q=85&auto=format&fit=crop',
    title: 'Macro Intelligence & Technology',
  },
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=85&auto=format&fit=crop',
    title: 'Primary Industrial Infrastructure',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85&auto=format&fit=crop',
    title: 'Capital Markets & Asset Distribution',
  },
  {
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=85&auto=format&fit=crop',
    title: 'Sovereign Advisory & SPV Partnerships',
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

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
            idx === currentSlide ? 'opacity-40' : 'opacity-0'
          } mix-blend-overlay`}
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(105deg, rgba(9,19,15,0.88) 0%, rgba(14,35,24,0.75) 45%, rgba(14,35,24,0.55) 100%)'
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
            focused on generating enduring value across Africa through 
            discipline, quantitative precision, and aligned partnership. 
            Based in Accra, Ghana.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              to="/approach"
              className="inline-flex items-center gap-3 font-sans text-[0.78rem] font-semibold tracking-[0.08em] uppercase px-8 py-4 bg-gold text-forest-900 hover:bg-gold-light transition-colors duration-200 no-underline"
            >
              Our Approach
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 font-sans text-[0.78rem] font-light tracking-[0.08em] uppercase px-8 py-4 text-white/85 border border-white/25 hover:border-white/60 hover:text-white transition-all duration-200 no-underline"
            >
              Investor Relations
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Right - Philosophy Card */}
        <div className="lg:col-span-4 lg:col-start-9">
          <div
            className="p-10 border border-gold/20 backdrop-blur-xl animate-fade-in"
            style={{ background: 'rgba(6,18,12,0.75)' }}
          >
            {/* Card eyebrow */}
            <span className="font-sans text-[0.65rem] font-medium tracking-[0.22em] uppercase text-gold">
              Our Philosophy
            </span>

            {/* Card title */}
            <h2 className="mt-5 font-serif text-[1.85rem] font-light text-white leading-snug">
              We partner with exceptional management teams to build great businesses.
            </h2>

            {/* Divider */}
            <div className="my-7 border-t border-gold/20" />

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
                  <span className="font-serif text-[1.4rem] font-medium text-gold/80">
                    {stat.value}
                    <span className="font-sans text-[0.72rem] text-white/45 ml-1">
                      {stat.suffix}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            {/* Card link */}
            <div className="mt-7 pt-5 border-t border-gold/20">
              <Link
                to="/approach"
                className="flex items-center justify-between w-full font-sans text-[0.8rem] text-white/80 hover:text-gold/80 transition-colors duration-200 no-underline group"
              >
                <span>Learn more about our investment philosophy.</span>
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-current ml-4 flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
