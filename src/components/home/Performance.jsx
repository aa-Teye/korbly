import { Link } from 'react-router-dom'

const strategies = [
  {
    name: 'Korbly Global Equity',
    q1: '4.2%',
    oneYear: '12.8%',
    threeYear: '8.7%',
    fiveYear: '10.3%',
    inception: '9.6%',
  },
  {
    name: 'Korbly Income Opportunities',
    q1: '1.6%',
    oneYear: '6.1%',
    threeYear: '4.3%',
    fiveYear: '5.2%',
    inception: '5.0%',
  },
  {
    name: 'Korbly Private Credit',
    q1: '2.1%',
    oneYear: '8.3%',
    threeYear: '6.5%',
    fiveYear: '6.9%',
    inception: '7.1%',
  },
]

export default function Performance() {
  return (
    <section className="bg-parchment border-t border-line">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="font-sans text-[0.65rem] font-medium tracking-[0.22em] uppercase text-gold">
              Track Record
            </span>
            <h2 className="mt-3 font-serif font-light text-forest-900"
              style={{ fontSize: 'clamp(2rem, 3vw, 3rem)' }}
            >
              Strategy Performance
            </h2>
            <p className="font-sans text-[0.75rem] text-muted mt-1">
              As of March 31, 2026
            </p>
          </div>
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 font-sans text-[0.78rem] font-medium tracking-[0.08em] uppercase text-forest-700 border-b border-transparent hover:border-gold hover:text-gold transition-all duration-200 no-underline whitespace-nowrap pb-px"
          >
            View performance disclosures
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
        <div className="bg-white border border-line overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-cream">
                {['Strategy', 'Q1 2026', '1 Year', '3 Year', '5 Year', 'Since Inception'].map((col, i) => (
                  <th
                    key={col}
                    className={`px-7 py-4 font-sans text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-muted border-b border-line ${
                      i === 0 ? 'text-left' : 'text-right'
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {strategies.map((row) => (
                <tr
                  key={row.name}
                  className="border-b border-line last:border-b-0 hover:bg-gold/[0.03] transition-colors duration-150"
                >
                  <td className="px-7 py-5 font-sans text-[0.88rem] font-medium text-forest-900">
                    {row.name}
                  </td>
                  {[row.q1, row.oneYear, row.threeYear, row.fiveYear, row.inception].map((val, j) => (
                    <td
                      key={j}
                      className="px-7 py-5 font-serif text-[1.05rem] font-medium text-right text-ink tabular-nums"
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 font-sans text-[0.72rem] text-muted leading-relaxed">
          Performance is net of fees. Past performance is not indicative 
          of future results. Please refer to the Performance Disclosures 
          for more information.
        </p>
      </div>
    </section>
  )
}
