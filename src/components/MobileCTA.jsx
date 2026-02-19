import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const h = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-area-bottom"
        >
          <div className="px-4 py-3 bg-white/90 backdrop-blur-md border-t border-penguin-black/[0.04]">
            <a
              href="https://wa.me/5515997155627"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gradient-rainbow text-white font-display text-sm font-semibold py-3 rounded-full w-full min-h-[44px]"
            >
              Fale conosco
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
