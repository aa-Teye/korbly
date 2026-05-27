import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('korbly-theme')
    if (saved === 'forest' || saved === 'burgundy') return 'sapphire'
    return saved || 'sapphire'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('korbly-theme', theme)
    // Dispatch custom event to let other components know the theme changed
    window.dispatchEvent(new Event('korbly-theme-change'))
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'sapphire' ? 'green' : 'sapphire'))
  }

  const navLinks = [
    { label: 'Our Firm', path: '/about' },
    { label: 'Investment Approach', path: '/approach' },
    { label: 'Strategies', path: '/strategies' },
    { label: 'Insights', path: '/insights' },
    { label: 'Resources', path: '/resources' },
    { label: 'Investor Portal', path: '/investor-portal' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-line transition-all duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-[72px] flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex flex-col gap-[2px] no-underline">
          <span className="font-serif text-2xl font-semibold tracking-[0.12em] text-forest-900 leading-none">
            KORBLY
          </span>
          <span className="font-sans text-[0.55rem] font-medium tracking-[0.28em] uppercase text-forest-700">
            Investment Partners
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-sans text-[0.82rem] font-normal tracking-wide no-underline transition-colors duration-150 group
                ${location.pathname === link.path 
                  ? 'text-forest-700' 
                  : 'text-ink hover:text-forest-700'
                }`}
            >
              {link.label}
              <span
                className={`absolute bottom-[-4px] left-0 h-[1px] bg-gold transition-all duration-300
                  ${location.pathname === link.path 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                  }`}
              />
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="font-sans text-[0.78rem] font-medium tracking-[0.06em] px-5 py-[0.65rem] bg-forest-900 text-cream hover:bg-forest-800 transition-colors duration-200 no-underline"
          >
            Contact Us
          </Link>
          
          {/* Theme Droplet Toggle */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full border border-line flex items-center justify-center text-forest-900 hover:border-gold hover:text-gold transition-all duration-200 focus:outline-none bg-cream/10"
            title={theme === 'sapphire' ? 'Switch to Sleek Emerald Green theme' : 'Switch to Deep Sapphire Blue theme'}
            aria-label="Toggle color theme"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
              <path d="M12 22V4c0 0 7 6.7 7 11a7 7 0 0 1-7 7z" fill="currentColor" className={theme === 'green' ? 'text-[#1B7F52]' : 'text-gold'} />
            </svg>
          </button>

          <button
            aria-label="Search"
            className="text-forest-900 hover:text-forest-700 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="7"/>
              <path d="m20 20-3.5-3.5"/>
            </svg>
          </button>
        </div>

      </div>
    </header>
  )
}
