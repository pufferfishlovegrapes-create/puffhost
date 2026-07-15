import { Reveal } from './Reveal'

const reasons = [
  {
    number: '01',
    title: 'Built for Eaglercraft',
    description: 'Every layer of our stack is tuned for Eaglercraft 1.12.2 — from the JVM to the network config. No generic host will understand your world like we do.',
  },
  {
    number: '02',
    title: 'Zero Configuration',
    description: "Spin up a server in under 60 seconds. We handle the port forwarding, the world generation, and the plugin compatibility — you just play.",
  },
  {
    number: '03',
    title: 'Privacy First',
    description: 'Your world is yours. We never scan, index, or train on player data. Whitelist-only access means strangers stay out, period.',
  },
  {
    number: '04',
    title: 'Community Driven',
    description: 'Roadmap features are voted on by hosts. Bug reports get answered by real engineers. No support bots, no ticket queues.',
  },
]

export default function WhyPuffHost() {
  return (
    <section id="why" className="relative py-24 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 rounded-full px-3 py-1 mb-4">
            WHY PUFFHOST
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why choose <span className="gradient-text">PuffHost?</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            We are not just another Minecraft host. We are built specifically for the Eaglercraft community.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <Reveal key={reason.number} delay={i * 100}>
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <span className="text-4xl font-bold bg-gradient-to-br from-accent-blue/40 to-accent-cyan/40 bg-clip-text text-transparent">
                    {reason.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA banner */}
        <Reveal delay={300}>
          <div className="mt-16 relative bg-gradient-to-r from-ink-800/80 to-ink-700/80 border border-white/10 rounded-2xl p-8 md:p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-accent-cyan/5" />
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to start hosting?</h3>
              <p className="text-slate-400 mb-6 max-w-md mx-auto">
                Get your private Eaglercraft server running in under a minute. No credit card required.
              </p>
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-semibold px-8 py-3.5 rounded-xl hover:shadow-xl hover:shadow-accent-blue/30 transition-all duration-300 hover:scale-105"
              >
                Get Started
                <span>→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
