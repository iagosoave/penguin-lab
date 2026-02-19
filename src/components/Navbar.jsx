import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      role="navigation"
      aria-label="Navegação principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-penguin-black/[0.04]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="group flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="Penguin Growth"
            className="h-6 md:h-8 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <span className="font-display text-[0.65rem] md:text-sm font-semibold tracking-[0.18em] uppercase text-penguin-black">
            Penguin Growth
          </span>
        </a>

        <a
          href="#contato"
          className="font-display text-[0.6rem] md:text-xs font-semibold tracking-[0.15em] uppercase text-penguin-black/60 hover:text-penguin-black transition-colors duration-300"
        >
          Contato
        </a>
      </div>
    </motion.nav>
  )
}
