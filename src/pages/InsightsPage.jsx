import { useState } from 'react'
import { Link } from 'react-router-dom'

const featuredArticle = {
  category: 'Market Commentary',
  date: 'March 20, 2026',
  title: 'Finding Yield in African Fixed Income: Difficult, but Not Impossible',
  desc: 'An in-depth systematic analysis of sovereign yield curves, credit risk spreads, and currency hedging strategies across selected sub-Saharan African capital markets in the current macroeconomic climate.',
  image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80&auto=format&fit=crop',
  readTime: '12 min read',
  author: 'Korbly Macro Intelligence Unit',
}

const articlesArchive = [
  {
    category: 'Economy',
    date: 'March 12, 2026',
    title: "Ghana's Structural Adjustment: Getting Ready for a Comeback",
    desc: 'Analyzing the medium-term impact of fiscal consolidation, inflation stabilization policies, and domestic debt restructuring on Ghana\'s capital markets.',
    image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=600&q=80&auto=format&fit=crop',
    readTime: '8 min read',
  },
  {
    category: 'Perspective',
    date: 'March 5, 2026',
    title: 'How African Institutional Investors Are Reshaping the Global Capital Order',
    desc: 'A comprehensive study on the rapid growth of domestic pension funds, sovereign wealth portfolios, and private insurance assets across West Africa.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80&auto=format&fit=crop',
    readTime: '10 min read',
  },
  {
    category: 'Trade & Finance',
    date: 'February 24, 2026',
    title: 'AfCFTA and Currency Structuring: Designing Cross-Border Liquidity',
    desc: 'Evaluating quantitative hedging frameworks and cross-currency settlement infrastructure needed to scale intra-African manufacturing and industrial supply lines.',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=600&q=80&auto=format&fit=crop',
    readTime: '15 min read',
  },
  {
    category: 'Infrastructure',
    date: 'February 15, 2026',
    title: 'Financing the Gap: De-risking Africa\'s Primary Infrastructure Projects',
    desc: 'How systematic merchant banking models, sovereign advisory, and public-private SPV structures can prevent early-stage feasibility failures in project pipelines.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80&auto=format&fit=crop',
    readTime: '9 min read',
  },
  {
    category: 'Quantitative Risk',
    date: 'February 2, 2026',
    title: 'Interest Rate Risk Hedging inside West African Sovereign Portfolios',
    desc: 'A mathematical assessment of interest rate fluctuations, duration targets, and customized swap instruments designed to protect domestic pension yields.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&q=80&auto=format&fit=crop',
    readTime: '11 min read',
  },
]

export default function InsightsPage() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <div>

      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(9,19,15,0.85) 0%, rgba(14,35,24,0.55) 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <span className="font-sans text-[0.65rem] font-medium tracking-[0.22em] uppercase text-gold">
              Research & Commentary
            </span>
            <h1 className="mt-4 font-serif font-light text-white leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
            >
              Sovereign analysis.<br />Market intelligence.<br />Systemic research.
            </h1>
            <p className="mt-6 font-sans text-[0.95rem] font-light leading-relaxed text-white/80 max-w-lg">
              Independent, data-driven macro commentary and structured perspectives 
              designed for institutional allocators, governments, and enterprise partners.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Insight Section */}
      <section className="bg-white border-b border-line">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <span className="font-sans text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-gold mb-8 block">
            Featured Analysis
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left image */}
            <div className="lg:col-span-7 overflow-hidden group border border-line">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-[400px] object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>

            {/* Right text */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 text-xs text-muted mb-4 font-sans font-light">
                <span>{featuredArticle.date}</span>
                <span>•</span>
                <span>{featuredArticle.readTime}</span>
              </div>
              <h2 className="font-serif text-[2rem] font-light text-forest-900 leading-snug mb-5">
                {featuredArticle.title}
              </h2>
              <p className="font-sans text-[0.88rem] font-light leading-relaxed text-muted mb-6">
                {featuredArticle.desc}
              </p>
              <div className="flex items-center justify-between border-t border-line pt-6">
                <span className="font-sans text-xs text-forest-900 font-semibold tracking-wide uppercase">
                  By {featuredArticle.author}
                </span>
                <Link
                  to="#"
                  className="inline-flex items-center gap-2 font-sans text-[0.78rem] font-semibold tracking-[0.06em] uppercase text-forest-700 hover:text-gold transition-colors duration-200 no-underline"
                >
                  Read Analysis
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Research Archive Library */}
      <section className="bg-parchment">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <h2 className="font-serif font-light text-forest-900 text-2xl mb-12 border-b border-line pb-4">
            Research Archive
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesArchive.map((article) => (
              <article
                key={article.title}
                className="bg-white border border-line hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col group"
              >
                {/* Card Image */}
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-forest-900 text-gold px-3 py-1 font-sans text-[0.6rem] font-semibold tracking-[0.12em] uppercase">
                    {article.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-[0.7rem] text-muted font-sans font-light mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-serif text-lg font-light text-forest-900 leading-snug flex-1 group-hover:text-gold transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="mt-3 font-sans text-xs font-light leading-relaxed text-muted mb-5">
                    {article.desc}
                  </p>
                  <div className="border-t border-line/60 pt-4 mt-auto">
                    <Link
                      to="#"
                      className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase text-forest-700 hover:text-gold transition-colors duration-200 no-underline"
                    >
                      Read Brief
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M13 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Institutional Newsletter Gate */}
      <section className="bg-forest-900 relative overflow-hidden border-t border-line">
        
        {/* Abstract vector shape */}
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" stroke="#C8963E" strokeWidth="0.5" className="w-full h-full">
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="20" />
            <line x1="10" y1="50" x2="90" y2="50" />
            <line x1="50" y1="10" x2="50" y2="90" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-8 py-20 text-center">
          <span className="font-sans text-[0.65rem] font-medium tracking-[0.22em] uppercase text-gold">
            Intelligence Briefing
          </span>
          <h2 className="mt-4 font-serif font-light text-white text-3xl mb-4">
            Subscribe to Korbly Intelligence
          </h2>
          <p className="font-sans text-sm font-light leading-relaxed text-white/70 max-w-lg mx-auto mb-10">
            Receive our proprietary sovereign risk analytics, transaction pricing insights, 
            and macroeconomic commentaries delivered weekly to your inbox.
          </p>

          {subscribed ? (
            <div className="bg-white/10 border border-gold/30 p-6 max-w-md mx-auto text-gold font-sans text-sm font-medium tracking-wide">
              Thank you. You have been added to our institutional briefing list.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Institutional email address"
                className="flex-1 bg-white/10 border border-white/20 px-5 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-gold transition-colors duration-200 font-sans"
              />
              <button
                type="submit"
                className="bg-gold text-forest-900 hover:bg-gold-light transition-colors duration-200 font-sans text-xs font-semibold tracking-[0.08em] uppercase px-7 py-3 sm:py-0"
              >
                Subscribe
              </button>
            </form>
          )}
          <p className="mt-5 font-sans text-[0.68rem] text-white/45">
            By subscribing, you agree to receive institutional communications under our privacy guidelines.
          </p>
        </div>
      </section>

    </div>
  )
}
