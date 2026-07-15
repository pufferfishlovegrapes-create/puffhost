import { Reveal } from './Reveal'

const features = [
  {
    title: 'Fast Performance',
    description: 'Optimized server configs, pre-generated worlds, and tuned view distances for smooth, lag-free gameplay.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Automatic Backups',
    description: 'Daily world backups keep your builds safe. Restore snapshots with a single click whenever you need.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M21 12a9 9 0 11-2.64-6.36M21 3v6h-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Secure Accounts',
    description: 'Protected logins and player whitelisting ensure only your friends can join your private server.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Modern Dashboard',
    description: 'Manage players, plugins, economy, and server settings from a clean, intuitive web dashboard.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <rect x="3" y="3" width="7" height="9" rx="1" strokeLinejoin="round" />
        <rect x="14" y="3" width="7" height="5" rx="1" strokeLinejoin="round" />
        <rect x="14" y="12" width="7" height="9" rx="1" strokeLinejoin="round" />
        <rect x="3" y="16" width="7" height="5" rx="1" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'DDoS Protection',
    description: 'Enterprise-grade filtering absorbs attacks before they reach your server, keeping your world online.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'One-Click Plugins',
    description: 'Install popular Eaglercraft plugins from our curated library with a single click — no FTP required.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M12 2v6m0 8v6M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M2 12h6m8 0h6M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 rounded-full px-3 py-1 mb-4">
            FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to <span className="gradient-text">host</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            PuffHost gives you the tools to run a private Eaglercraft 1.12.2 server without the hassle.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 80}>
              <div className="card-glow group bg-ink-800/50 border border-white/5 rounded-2xl p-7 hover:bg-ink-700/50 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 flex items-center justify-center text-accent-cyan mb-5 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
