import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const h = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Voltar ao topo"
          className="fixed bottom-24 md:bottom-8 right-5 z-40 w-9 h-9 rounded-full border border-penguin-black/10 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:border-penguin-black/30 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-penguin-black/50">
            <path d="M7 12V2M7 2L2.5 6.5M7 2L11.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
