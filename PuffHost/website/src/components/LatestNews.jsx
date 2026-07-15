import { Reveal } from './Reveal'

const news = [
  {
    tag: 'Update',
    tagColor: 'bg-accent-blue/15 text-accent-blue border-accent-blue/20',
    date: 'Jul 12, 2026',
    title: 'v0.3 — Plugin Marketplace is live',
    excerpt: 'Browse and install over 200 community-tested Eaglercraft plugins directly from your dashboard. One click, zero FTP.',
  },
  {
    tag: 'Infrastructure',
    tagColor: 'bg-accent-cyan/15 text-accent-cyan border-accent-cyan/20',
    date: 'Jul 5, 2026',
    title: 'New AP-Southeast region now available',
    excerpt: 'Singapore data center is online with sub-90ms ping across Southeast Asia and Oceania. Free migration for existing hosts.',
  },
  {
    tag: 'Security',
    tagColor: 'bg-green-500/15 text-green-400 border-green-500/20',
    date: 'Jun 28, 2026',
    title: 'Mandatory 2FA rolling out to all accounts',
    excerpt: 'Two-factor authentication becomes the default for every PuffHost account. Protect your server with more than just a password.',
  },
]

export default function LatestNews() {
  return (
    <section id="news" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 rounded-full px-3 py-1 mb-4">
              LATEST NEWS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              What's new at <span className="gradient-text">PuffHost</span>
            </h2>
          </div>
          <a href="#" className="text-slate-400 hover:text-accent-cyan transition-colors text-sm font-medium inline-flex items-center gap-1.5 group">
            View all updates
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <article className="group bg-ink-800/50 border border-white/5 rounded-2xl p-6 hover:bg-ink-700/50 hover:border-white/10 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold border rounded-full px-2.5 py-1 ${item.tagColor}`}>
                    {item.tag}
                  </span>
                  <span className="text-slate-500 text-xs">{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-accent-cyan transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{item.excerpt}</p>
                <a href="#" className="mt-5 text-accent-cyan text-sm font-medium inline-flex items-center gap-1.5 group/link">
                  Read more
                  <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
