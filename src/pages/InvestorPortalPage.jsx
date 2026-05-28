import { useState } from 'react'
import { Link } from 'react-router-dom'

const initialVaultDocs = [
  { id: 1, name: 'Q1 2026 Sovereign Credit Fund Report.pdf', size: '2.4 MB', date: 'May 15, 2026' },
  { id: 2, name: 'Korbly Global Equity Audited Financials FY2025.pdf', size: '4.8 MB', date: 'April 20, 2026' },
  { id: 3, name: 'Capital Call Notice - SPV IV (April 2026).pdf', size: '780 KB', date: 'April 02, 2026' },
  { id: 4, name: 'NPRA Compliance Audit & Capital Certification.pdf', size: '1.2 MB', date: 'March 14, 2026' },
]

const initialMandates = [
  { id: 1, name: 'Korbly Global Equity SPV IV', commitment: '$10,000,000', called: '$7,500,000', nav: '$9,200,000', irr: '22.8%', status: 'Active' },
  { id: 2, name: 'Korbly Infrastructure & Credit SPV II', commitment: '$15,000,000', called: '$10,750,000', nav: '$12,250,000', irr: '16.1%', status: 'Active' },
]

export default function InvestorPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loginData, setLoginData] = useState({ clientId: 'KB-GH-941', email: 'allocator@ssnit.org.gh', passkey: '••••••••••••' })
  const [vaultDocs, setVaultDocs] = useState(initialVaultDocs)
  const [advisoryMessage, setAdvisoryMessage] = useState('')
  const [messageSent, setMessageSent] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsAuthenticated(true)
    }, 1500) // Simulated secure loading delay
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setMessageSent(false)
    setAdvisoryMessage('')
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (advisoryMessage) {
      setMessageSent(true)
      setTimeout(() => {
        setMessageSent(false)
        setAdvisoryMessage('')
      }, 4000)
    }
  }

  return (
    <div>

      {/* Hero Header */}
      <section className="relative h-[420px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(12,30,54,0.75) 0%, rgba(12,30,54,0.40) 60%, rgba(12,30,54,0.20) 100%)' }}
        />
        <div className="relative max-w-8xl mx-auto px-10 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase font-medium text-navy-600">
              Security Protocol
            </span>
            <h1 className="mt-4 font-serif font-light text-white leading-tight text-5xl md:text-6xl lg:text-7xl"
            >
              {isAuthenticated ? 'Client Account Portal' : 'Investor Portal'}
            </h1>
            <p className="mt-6 font-sans text-lg leading-relaxed font-light text-white/85 max-w-lg">
              {isAuthenticated 
                ? 'Secured dashboard for sovereign, pension trustees, and institutional allocation committees.'
                : 'Access Korbly SPV performance records, audited quarterly financials, capital calls, and regulatory governance vaults.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="bg-white min-h-[600px] py-20">
        <div className="max-w-8xl mx-auto px-10">

          {!isAuthenticated ? (
            /* Secure Client Login Gate */
            <div className="max-w-lg mx-auto bg-paper border border-line p-10 relative">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-navy-600 animate-ping" />
                <span className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-navy-700">
                  Secure Sign-In
                </span>
              </div>
              <h2 className="font-serif font-light text-navy-900 text-3xl mb-4">
                Authenticate Credentials
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed mb-8">
                Authorized access only. All activity is cryptographically logged and monitored. 
                Enter your institutional Client ID, corporate email address, and security passkey.
              </p>

              <form onSubmit={handleLogin} className="flex flex-col gap-6">
                <div>
                  <label className="block font-sans text-xs font-semibold tracking-wider text-navy-900 uppercase mb-2">
                    Institutional Client ID
                  </label>
                  <input
                    type="text"
                    required
                    value={loginData.clientId}
                    onChange={(e) => setLoginData({ ...loginData, clientId: e.target.value })}
                    className="w-full font-sans text-base px-4 py-3.5 bg-white border border-line focus:border-navy-600 focus:outline-none transition-colors"
                    placeholder="e.g. KB-GH-XXX"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold tracking-wider text-navy-900 uppercase mb-2">
                    Corporate Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    className="w-full font-sans text-base px-4 py-3.5 bg-white border border-line focus:border-navy-600 focus:outline-none transition-colors"
                    placeholder="allocator@firm.com"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold tracking-wider text-navy-900 uppercase mb-2">
                    Security Passkey
                  </label>
                  <input
                    type="password"
                    required
                    value={loginData.passkey}
                    onChange={(e) => setLoginData({ ...loginData, passkey: e.target.value })}
                    className="w-full font-sans text-base px-4 py-3.5 bg-white border border-line focus:border-navy-600 focus:outline-none transition-colors"
                    placeholder="••••••••••••"
                  />
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <input type="checkbox" id="remember" defaultChecked className="accent-navy-600" />
                  <label htmlFor="remember" className="font-sans text-xs text-muted">
                    Remember my institution identity
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full font-sans text-xs font-semibold tracking-widest uppercase py-4 bg-navy-900 text-white hover:bg-navy-800 transition-colors duration-200 focus:outline-none flex justify-center items-center gap-3"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Verifying Token...
                    </>
                  ) : (
                    <>
                      Authenticate Credentials
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>

              {/* Inquiry assistance card */}
              <div className="mt-8 pt-6 border-t border-line text-center">
                <span className="font-sans text-xs text-muted">
                  First-time visitor or need access key?{' '}
                  <Link to="/contact" className="text-navy-700 font-semibold hover:underline">
                    Inquire for credentials
                  </Link>
                </span>
              </div>
            </div>
          ) : (
            /* Post-Auth Client Dashboard */
            <div className="flex flex-col gap-10 animate-fadeIn">
              
              {/* Entity Banner */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-paper border border-line p-8 gap-5">
                <div>
                  <span className="font-sans text-[0.62rem] font-bold tracking-[0.16em] uppercase text-navy-700">
                    Corporate Allocator Profile
                  </span>
                  <h3 className="font-serif text-3xl font-light text-navy-900 mt-1">
                    Social Security and National Insurance Trust (SSNIT)
                  </h3>
                  <div className="flex gap-4 mt-2 font-sans text-xs text-muted">
                    <span>ID: <strong className="text-navy-800">{loginData.clientId}</strong></span>
                    <span>•</span>
                    <span>Channel: <strong className="text-navy-800">Sovereign Pension Fund</strong></span>
                    <span>•</span>
                    <span>Last Access: <strong className="text-navy-800">Just now</strong></span>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="font-sans text-xs font-semibold tracking-wider uppercase border border-navy-900/30 hover:border-navy-600 hover:text-navy-600 px-5 py-2.5 transition-colors focus:outline-none bg-white text-navy-900"
                >
                  Secure Sign Out
                </button>
              </div>

              {/* High-Level Capital Metrics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-line border border-line">
                {[
                  { label: 'Total Capital Committed', value: '$25,000,000' },
                  { label: 'Total Capital Called', value: '$18,250,000' },
                  { label: 'Remaining Commitment', value: '$6,750,000' },
                  { label: 'Total Distributed (DPI)', value: '$4,750,000' },
                  { label: 'Current Net Asset Value (NAV)', value: '$21,450,000' },
                ].map((metric, i) => (
                  <div key={i} className="bg-white p-8">
                    <span className="block font-sans text-xs text-muted leading-tight">
                      {metric.label}
                    </span>
                    <span className="block font-serif text-3xl font-medium text-navy-900 mt-3 tabular-nums">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mandates and SPVs List */}
              <div>
                <h3 className="font-serif text-2xl font-light text-navy-900 mb-6">
                  Active Asset Mandates
                </h3>
                <div className="bg-white border border-line overflow-x-auto">
                  <table className="w-full text-base border-collapse">
                    <thead>
                      <tr className="bg-paper">
                        {['Mandate Portfolio', 'Committed Capital', 'Called Capital', 'Net Asset Value', 'Mandate Net IRR', 'Status'].map((col, i) => (
                          <th key={col} className={`px-7 py-4 font-sans text-xs font-semibold tracking-[0.12em] uppercase text-muted border-b border-line ${i === 0 ? 'text-left' : 'text-right'}`}>
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {initialMandates.map((row) => (
                        <tr key={row.id} className="border-b border-line last:border-b-0 hover:bg-navy-600/[0.02]">
                          <td className="px-7 py-5 font-sans text-base font-semibold text-navy-900">{row.name}</td>
                          <td className="px-7 py-5 font-serif text-lg text-right text-ink tabular-nums">{row.commitment}</td>
                          <td className="px-7 py-5 font-serif text-lg text-right text-ink tabular-nums">{row.called}</td>
                          <td className="px-7 py-5 font-serif text-lg text-right text-ink tabular-nums">{row.nav}</td>
                          <td className="px-7 py-5 font-serif text-lg text-right text-navy-700 font-semibold tabular-nums">{row.irr}</td>
                          <td className="px-7 py-5 text-right">
                            <span className="inline-block font-sans text-[0.62rem] font-semibold tracking-wider uppercase px-3 py-1 bg-green-50 text-[#1B7F52] border border-[#1B7F52]/20">
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Vault and Direct Access Channel split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Vault Documents (Left Column) */}
                <div className="lg:col-span-7">
                  <h3 className="font-serif text-2xl font-light text-navy-900 mb-6 flex items-center gap-3">
                    Secure Document Vault
                    <span className="font-sans text-xs px-2 py-0.5 bg-navy-600/15 text-navy-700 font-semibold rounded animate-pulse">
                      Audited Filings
                    </span>
                  </h3>
                  <div className="flex flex-col border border-line divide-y divide-line">
                    {vaultDocs.map((doc) => (
                      <div key={doc.id} className="p-6 flex justify-between items-center bg-white hover:bg-paper/20 transition-colors">
                        <div>
                          <h4 className="font-sans text-base font-semibold text-navy-900 leading-none">
                            {doc.name}
                          </h4>
                          <span className="block mt-2 font-sans text-xs text-muted">
                            Filing Date: {doc.date} | Size: {doc.size}
                          </span>
                        </div>
                        <button
                          onClick={() => alert(`Beginning secure encrypted download for ${doc.name}...`)}
                          className="font-sans text-xs font-semibold tracking-wider uppercase px-4 py-2 border border-line text-navy-700 hover:border-navy-600 hover:text-navy-600 transition-colors focus:outline-none flex items-center gap-2 bg-white"
                        >
                          Download
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5 5 5 5-5m-5 5V3"/>
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Channel Wire (Right Column) */}
                <div className="lg:col-span-5 bg-paper border border-line p-10 h-fit">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1B7F52]" />
                    <span className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-navy-700">
                      Advisory Channel Open
                    </span>
                  </div>
                  <h3 className="font-serif font-light text-navy-900 text-2xl mb-3">
                    Secure Advisory Routing
                  </h3>
                  <p className="font-sans text-sm text-muted leading-relaxed mb-6">
                    Route advisory queries, redemption notices, or board representative updates directly to the Managing CIO's quantitative desk.
                  </p>

                  <form onSubmit={handleSendMessage} className="flex flex-col gap-4">
                    <div>
                      <label className="block font-sans text-xs font-semibold tracking-wider text-navy-900 uppercase mb-2">
                        Recipient Partner
                      </label>
                      <select className="w-full font-sans text-xs px-3 py-2 bg-white border border-line focus:outline-none focus:border-navy-600">
                        <option>Kofi Mensah (Managing CIO)</option>
                        <option>Amara Diallo (Partner, Sovereign Advisory)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-semibold tracking-wider text-navy-900 uppercase mb-2">
                        Encrypted Instruction / Inquiry
                      </label>
                      <textarea
                        required
                        rows="4"
                        value={advisoryMessage}
                        onChange={(e) => setAdvisoryMessage(e.target.value)}
                        className="w-full font-sans text-xs px-3 py-2.5 bg-white border border-line focus:outline-none focus:border-navy-600 resize-none"
                        placeholder="Write secure transmission here..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={messageSent}
                      className="w-full font-sans text-xs font-semibold tracking-widest uppercase py-3 bg-navy-900 text-white hover:bg-navy-800 transition-colors focus:outline-none flex justify-center items-center gap-2"
                    >
                      {messageSent ? (
                        <>
                          Encrypted & Routed
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#1B7F52]">
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                        </>
                      ) : (
                        <>
                          Transmit Encrypted Instruction
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="m22 2-7 20-4-9-9-4Z"/>
                            <path d="M22 2 11 13"/>
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </div>

              </div>

            </div>
          )}

        </div>
      </section>

    </div>
  )
}
