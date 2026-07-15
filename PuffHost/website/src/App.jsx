import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServerStatus from './components/ServerStatus'
import Features from './components/Features'
import WhyPuffHost from './components/WhyPuffHost'
import LatestNews from './components/LatestNews'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <ServerStatus />
        <Features />
        <WhyPuffHost />
        <LatestNews />
      </main>
      <Footer />
    </div>
  )
}
