import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SitesShowcase from './components/SitesShowcase'
import Automations from './components/Automations'
import Services from './components/Services'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function RainbowDivider() {
  return (
    <div className="relative w-full" style={{ height: '3px', overflow: 'visible', zIndex: 10 }}>
      {/* Glow difuso atrás */}
      <div
        className="absolute inset-x-0 gradient-rainbow-flow"
        style={{ height: '3px', filter: 'blur(6px)', opacity: 0.75, transform: 'scaleY(6)', transformOrigin: 'center' }}
      />
      {/* Linha nítida na frente */}
      <div className="relative w-full gradient-rainbow-flow" style={{ height: '3px' }} />
    </div>
  )
}

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-penguin-black focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Pular para o conteúdo principal
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <RainbowDivider />
        <SitesShowcase />
        <RainbowDivider />
        <Automations />
        <RainbowDivider />
        <Services />
        <RainbowDivider />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

export default App
