export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Floating pufferfish */}
        <div className="text-7xl md:text-8xl mb-6 animate-float">🐡</div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
          <span className="gradient-text">🐡 PuffHost</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.15s', opacity: 0 }}>
          Host and manage private Eaglercraft servers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <a
            href="#get-started"
            className="group bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-semibold px-8 py-3.5 rounded-xl hover:shadow-xl hover:shadow-accent-blue/30 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            Get Started
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
          <a
            href="#status"
            className="group bg-white/5 border border-white/10 text-slate-200 font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 hover:border-accent-cyan/40 transition-all duration-300 w-full sm:w-auto"
          >
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Server Status
            </span>
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink-950 to-transparent pointer-events-none" />
    </section>
  )
}
