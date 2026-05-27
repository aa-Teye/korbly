import { Link } from 'react-router-dom'

const articles = [
  {
    category: 'Market Commentary',
    date: 'March 20, 2026',
    title: 'Finding Yield in African Fixed Income: Difficult, but Not Impossible',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80&auto=format&fit=crop',
    featured: true,
  },
  {
    category: 'Economy',
    date: 'March 12, 2026',
    title: "Ghana's Structural Adjustment: Getting Ready for a Comeback",
    image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=600&q=80&auto=format&fit=crop',
    featured: false,
  },
  {
    category: 'Perspective',
    date: 'March 5, 2026',
    title: 'How African Institutional Investors Are Reshaping the Global Capital Order',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80&auto=format&fit=crop',
    featured: false,
    dark: true,
  },
]

export default function Insights() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-8 py-24">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-14">
          <div>
            <span className="font-sans text-[0.65rem] font-medium tracking-[0.22em] uppercase text-gold">
              Research & Commentary
            </span>
            <h2 className="mt-3 font-serif font-light text-forest-900"
              style={{ fontSize: 'clamp(2rem, 3vw, 3rem)' }}
            >
              Featured Insights
            </h2>
          </div>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 font-sans text-[0.78rem] font-medium tracking-[0.08em] uppercase text-forest-700 border-b border-transparent hover:border-gold hover:text-gold transition-all duration-200 no-underline whitespace-nowrap pb-px"
          >
            View all insights
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-line">
          
          {/* Featured article - spans 2 columns */}
          <article className="lg:col-span-2 bg-cream flex flex-col overflow-hidden group">
            <div className="overflow-hidden">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-sans text-[0.65rem] font-semibold tracking-[0.16em] uppercase text-gold">
                  {articles[0].category}
                </span>
                <span className="font-sans text-[0.72rem] text-muted">
                  {articles[0].date}
                </span>
              </div>
              <h3 className="font-serif text-[1.85rem] font-light text-forest-900 leading-snug flex-1">
                {articles[0].title}
              </h3>
              <Link
                to="/insights"
                className="mt-6 inline-flex items-center gap-2 font-sans text-[0.75rem] font-medium tracking-[0.06em] uppercase text-forest-700 hover:text-gold transition-colors duration-200 no-underline"
              >
                Read article
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </article>

          {/* Right column - 2 stacked articles */}
          <div className="flex flex-col gap-px">
            
            {/* Article 2 */}
            <article className="bg-cream flex flex-col overflow-hidden group flex-1">
              <div className="overflow-hidden">
                <img
                  src={articles[1].image}
                  alt={articles[1].title}
                  className="w-full h-[180px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-sans text-[0.65rem] font-semibold tracking-[0.16em] uppercase text-gold">
                    {articles[1].category}
                  </span>
                  <span className="font-sans text-[0.72rem] text-muted">
                    {articles[1].date}
                  </span>
                </div>
                <h3 className="font-serif text-[1.35rem] font-light text-forest-900 leading-snug flex-1">
                  {articles[1].title}
                </h3>
                <Link
                  to="/insights"
                  className="mt-4 inline-flex items-center gap-2 font-sans text-[0.72rem] font-medium tracking-[0.06em] uppercase text-forest-700 hover:text-gold transition-colors duration-200 no-underline"
                >
                  Read article
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </article>

            {/* Article 3 - dark overlay */}
            <article className="relative overflow-hidden group flex-1 min-h-[200px]">
              <img
                src={articles[2].image}
                alt={articles[2].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-forest-900/80" />
              <div className="relative p-6 flex flex-col h-full justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-sans text-[0.65rem] font-semibold tracking-[0.16em] uppercase text-gold-light">
                    {articles[2].category}
                  </span>
                  <span className="font-sans text-[0.72rem] text-white/45">
                    {articles[2].date}
                  </span>
                </div>
                <h3 className="font-serif text-[1.35rem] font-light text-white leading-snug">
                  {articles[2].title}
                </h3>
                <Link
                  to="/insights"
                  className="mt-4 inline-flex items-center gap-2 font-sans text-[0.72rem] font-medium tracking-[0.06em] uppercase text-gold-light hover:text-white transition-colors duration-200 no-underline"
                >
                  Read article
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  )
}
