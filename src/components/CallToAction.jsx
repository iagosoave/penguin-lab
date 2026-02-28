import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'

export default function CallToAction() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="contato" ref={ref}>
      <div className="absolute inset-0 bg-penguin-black" />

      {/* Atmospheric glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 0.07, scale: 1 } : {}}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] gradient-rainbow blur-[180px]"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '120%', rotateX: 40 }}
            animate={inView ? { y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
            style={{ transformOrigin: 'bottom' }}
          >
            Vamos transformar
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '120%', rotateX: 40 }}
            animate={inView ? { y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
            style={{ transformOrigin: 'bottom' }}
          >
            <span className="gradient-rainbow-text">sua marca?</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-body text-lg text-white/50 mt-6 max-w-xl mx-auto leading-relaxed"
        >
          Entre em contato e descubra como a Penguin Growth pode
          acelerar seus resultados no digital.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <a
            href="https://wa.me/5515997155627"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rainbow-glow inline-flex items-center gap-3 gradient-rainbow text-white font-display text-lg font-semibold px-10 py-4 rounded-full hover:gap-4 transition-all duration-300"
          >
            Fale com a gente
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}