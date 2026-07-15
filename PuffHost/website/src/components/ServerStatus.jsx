import { Reveal } from './Reveal'

const servers = [
  { name: 'US-East-1', region: 'Virginia, USA', status: 'online', ping: '24 ms', uptime: '99.98%', load: 42 },
  { name: 'US-West-2', region: 'Oregon, USA', status: 'online', ping: '31 ms', uptime: '99.95%', load: 58 },
  { name: 'EU-Central', region: 'Frankfurt, DE', status: 'online', ping: '12 ms', uptime: '99.99%', load: 35 },
  { name: 'AP-Southeast', region: 'Singapore', status: 'degraded', ping: '88 ms', uptime: '99.82%', load: 76 },
]

function StatusDot({ status }) {
  const color = status === 'online' ? 'bg-green-400' : status === 'degraded' ? 'bg-yellow-400' : 'bg-red-400'
  const ring = status === 'online' ? 'bg-green-400' : status === 'degraded' ? 'bg-yellow-400' : 'bg-red-400'
  return (
    <span className="relative flex h-3 w-3">
      <span className={`absolute inline-flex h-full w-full rounded-full ${ring} opacity-60 animate-ping`} />
      <span className={`relative inline-flex rounded-full h-3 w-3 ${color}`} />
    </span>
  )
}

function LoadBar({ load }) {
  const color = load < 60 ? 'from-accent-blue to-accent-cyan' : load < 80 ? 'from-yellow-500 to-yellow-400' : 'from-red-500 to-red-400'
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-700`} style={{ width: `${load}%` }} />
      </div>
      <span className="text-xs text-slate-500 font-mono w-8 text-right">{load}%</span>
    </div>
  )
}

export default function ServerStatus() {
  return (
    <section id="status" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 rounded-full px-3 py-1 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            LIVE STATUS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Server <span className="gradient-text">Status</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Real-time health and performance across all PuffHost regions.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-ink-800/50 border border-white/5 rounded-2xl overflow-hidden">
            {/* Header row */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <div className="col-span-3">Server</div>
              <div className="col-span-3">Status</div>
              <div className="col-span-2">Ping</div>
              <div className="col-span-2">Uptime</div>
              <div className="col-span-2">Load</div>
            </div>

            {/* Server rows */}
            {servers.map((server, i) => (
              <div
                key={server.name}
                className={`grid grid-cols-2 md:grid-cols-12 gap-4 px-6 py-5 items-center transition-colors hover:bg-white/[0.02] ${
                  i < servers.length - 1 ? 'border-b border-white/5' : ''
                }`}
              >
                <div className="col-span-2 md:col-span-3">
                  <div className="text-white font-semibold text-sm">{server.name}</div>
                  <div className="text-slate-500 text-xs">{server.region}</div>
                </div>
                <div className="md:col-span-3 flex items-center gap-2.5">
                  <StatusDot status={server.status} />
                  <span className={`text-sm font-medium capitalize ${server.status === 'online' ? 'text-green-400' : 'text-yellow-400'}`}>
                    {server.status}
                  </span>
                </div>
                <div className="md:col-span-2">
                  <span className="text-slate-300 text-sm font-mono">{server.ping}</span>
                </div>
                <div className="md:col-span-2">
                  <span className="text-slate-300 text-sm font-mono">{server.uptime}</span>
                </div>
                <div className="col-span-2 md:col-span-2">
                  <LoadBar load={server.load} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-center">
          <div className="flex items-center gap-8">
            <div>
              <div className="text-2xl font-bold gradient-text">99.94%</div>
              <div className="text-slate-500 text-xs mt-1">Avg Uptime (30d)</div>
            </div>
            <div className="w-px h-10 bg-white/5" />
            <div>
              <div className="text-2xl font-bold gradient-text">39 ms</div>
              <div className="text-slate-500 text-xs mt-1">Avg Ping</div>
            </div>
            <div className="w-px h-10 bg-white/5" />
            <div>
              <div className="text-2xl font-bold gradient-text">4</div>
              <div className="text-slate-500 text-xs mt-1">Regions</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
