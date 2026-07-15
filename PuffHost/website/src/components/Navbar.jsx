import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Status', href: '#status' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Login', href: '#login' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-900/90 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="text-2xl">🐡</span>
          <span className="gradient-text">PuffHost</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#login"
            className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium px-4 py-2"
          >
            Log in
          </a>
          <a
            href="#get-started"
            className="bg-gradient-to-r from-accent-blue to-accent-cyan text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-accent-blue/30 transition-all duration-200"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-200 p-2"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-6 bg-ink-900/95 backdrop-blur-md border-b border-white/5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium block"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#get-started"
              onClick={() => setMenuOpen(false)}
              className="block bg-gradient-to-r from-accent-blue to-accent-cyan text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
