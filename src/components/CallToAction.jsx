import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="contato">
      <div className="absolute inset-0 bg-penguin-black" />

      {/* Animated rainbow line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] gradient-rainbow-flow" />

      {/* Atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] gradient-rainbow blur-[180px] opacity-[0.07]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
        >
          Vamos transformar
          <br />
          <span className="gradient-rainbow-text">sua marca?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-lg text-white/50 mt-6 max-w-xl mx-auto leading-relaxed"
        >
          Entre em contato e descubra como a Penguin Growth pode
          acelerar seus resultados no digital.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10"
        >
          <a
            href="https://wa.me/5500000000000"
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
