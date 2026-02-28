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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      role="navigation"
      aria-label="Navegação principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-penguin-black/[0.04]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          className="group flex items-center gap-2"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/images/logo.png"
            alt="Penguin Growth"
            className="h-6 md:h-8 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <span className="font-display text-[0.65rem] md:text-sm font-semibold tracking-[0.18em] uppercase text-penguin-black">
            Penguin Growth
          </span>
        </motion.a>

        <div className="flex items-center gap-4 sm:gap-6">
          <motion.a
            href="#sites"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:block font-display text-[0.6rem] md:text-xs font-semibold tracking-[0.15em] uppercase text-penguin-black/40 hover:text-penguin-black transition-colors duration-300"
          >
            Sites
          </motion.a>
          <motion.a
            href="#automacoes"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:block font-display text-[0.6rem] md:text-xs font-semibold tracking-[0.15em] uppercase text-penguin-black/40 hover:text-penguin-black transition-colors duration-300"
          >
            Automação
          </motion.a>
          <motion.a
            href="#contato"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[0.6rem] md:text-xs font-semibold tracking-[0.15em] uppercase text-penguin-black/60 hover:text-penguin-black transition-colors duration-300"
          >
            Contato
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}