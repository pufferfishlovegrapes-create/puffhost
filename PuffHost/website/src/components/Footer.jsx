const footerLinks = {
  Product: ['Features', 'Dashboard', 'Server Status', 'Pricing'],
  Resources: ['Documentation', 'Eaglercraft Guide', 'API Reference', 'Changelog'],
  Company: ['About', 'Blog', 'Contact', 'Privacy Policy'],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-900/50">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-lg font-bold mb-4">
              <span className="text-2xl">🐡</span>
              <span className="gradient-text">PuffHost</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Private Eaglercraft 1.12.2 server hosting for you and your friends.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-accent-cyan transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 PuffHost. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-slate-500 hover:text-accent-cyan transition-colors" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.34.85 0 1.7.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
            <a href="#" className="text-slate-500 hover:text-accent-cyan transition-colors" aria-label="Discord">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.32 4.37A19.79 19.79 0 0016.56 3a13.94 13.94 0 00-.63 1.29 18.27 18.27 0 00-5.86 0A13.94 13.94 0 009.44 3 19.8 19.8 0 005.68 4.37 20.27 20.27 0 002 16.76a19.9 19.9 0 005.99 3.04c.48-.66.91-1.36 1.29-2.1-.71-.27-1.39-.6-2.03-.99.17-.13.34-.26.5-.4a14.18 14.18 0 0012.5 0c.16.14.33.27.5.4-.64.39-1.32.72-2.03.99.38.74.81 1.44 1.29 2.1a19.86 19.86 0 005.99-3.04 20.27 20.27 0 00-3.68-12.39zM9.5 14.33c-1.18 0-2.15-1.08-2.15-2.41s.95-2.42 2.15-2.42 2.17 1.09 2.15 2.42c0 1.33-.96 2.41-2.15 2.41zm5 0c-1.18 0-2.15-1.08-2.15-2.41s.95-2.42 2.15-2.42 2.17 1.09 2.15 2.42c0 1.33-.96 2.41-2.15 2.41z" />
              </svg>
            </a>
            <a href="#" className="text-slate-500 hover:text-accent-cyan transition-colors" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.3 19.5h2.04L6.49 3.24H4.3L17.6 20.65z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
