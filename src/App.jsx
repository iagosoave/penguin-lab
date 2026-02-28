import { useState } from 'react'
// import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SitesShowcase from './components/SitesShowcase'
import SitesPortfolio from './components/SitesPortfolio'
import Automations from './components/Automations'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function RainbowDivider() {
  return <div className="w-full h-[2px] gradient-rainbow" />
}

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false)

  const handleViewAll = () => {
    setShowPortfolio(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBack = () => {
    setShowPortfolio(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (showPortfolio) {
    return (
      <>
        <Navbar />
        <SitesPortfolio onBack={handleBack} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-penguin-black focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Pular para o conteúdo principal
      </a>
      {/* <Navbar /> */}
      <main id="main-content">
        <Hero />
        <RainbowDivider />
        <SitesShowcase onViewAll={handleViewAll} />
        <RainbowDivider />
        <Automations />
        <RainbowDivider />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

export default App
