import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/65">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-2 md:grid-cols-5 gap-10">
        
        {/* Brand Column */}
        <div className="col-span-2 md:col-span-1">
          <div className="font-serif text-2xl font-semibold tracking-[0.1em] text-white">
            KORBLY
          </div>
          <div className="font-sans text-[0.55rem] font-medium tracking-[0.28em] uppercase text-white/40 mt-1">
            Investment Partners
          </div>
          <p className="mt-5 font-sans text-[0.8rem] font-light leading-relaxed text-white/45 max-w-[280px]">
            Africa's first systematic merchant bank. 
            Combining macro intelligence, quantitative 
            structuring, and institutional discipline 
            to transform Africa's capital formation system.
          </p>
        </div>

        {/* Our Firm */}
        <div>
          <div className="font-sans text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-gold mb-5">
            Our Firm
          </div>
          <ul className="flex flex-col gap-3">
            {['About Us', 'Our Team', 'Careers', 'News'].map((item) => (
              <li key={item}>
                <Link
                  to="/about"
                  className="font-sans text-[0.8rem] font-light text-white/55 hover:text-white transition-colors duration-150 no-underline"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Strategies */}
        <div>
          <div className="font-sans text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-gold mb-5">
            Strategies
          </div>
          <ul className="flex flex-col gap-3">
            {[
              { label: 'Overview', path: '/strategies' },
              { label: 'Global Equity', path: '/strategies' },
              { label: 'Income Opportunities', path: '/strategies' },
              { label: 'Private Credit', path: '/strategies' },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="font-sans text-[0.8rem] font-light text-white/55 hover:text-white transition-colors duration-150 no-underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <div className="font-sans text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-gold mb-5">
            Resources
          </div>
          <ul className="flex flex-col gap-3">
            {[
              { label: 'Insights', path: '/insights' },
              { label: 'Market Commentary', path: '/insights' },
              { label: 'White Papers', path: '/resources' },
              { label: 'Glossary', path: '/resources' },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="font-sans text-[0.8rem] font-light text-white/55 hover:text-white transition-colors duration-150 no-underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <div className="font-sans text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-gold mb-5">
            Connect
          </div>
          <ul className="flex flex-col gap-3 text-[0.8rem] font-light">
            <li>
              <a
                href="mailto:info@korblygroup.com"
                className="text-white/55 hover:text-white transition-colors duration-150 no-underline"
              >
                info@korblygroup.com
              </a>
            </li>
            <li className="text-white/55">+233 (0) 302 000 000</li>
            <li className="text-white/55">Accra, Ghana</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="font-sans text-[0.72rem] text-white/30">
            © 2026 Korbly Investment Partners. All rights reserved.
          </div>
          <div className="flex gap-6">
            {['Privacy Policy', 'Disclosures', 'Terms of Use'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-sans text-[0.72rem] text-white/30 hover:text-white/65 transition-colors duration-150 no-underline"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
