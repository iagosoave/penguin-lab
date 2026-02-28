import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const sites = [
  '/images/site-1.png',
  '/images/site-2.jpg',
  '/images/site-3.png',
  '/images/site-4.png',
  '/images/site-5.png',
  '/images/site-6.png',
]

const floatStyles = [
  { duration: '3s', delay: '0s' },
  { duration: '3.4s', delay: '0.6s' },
  { duration: '3.8s', delay: '0.3s' },
  { duration: '3.2s', delay: '0.9s' },
  { duration: '3.6s', delay: '0.2s' },
  { duration: '3.1s', delay: '0.7s' },
]

export default function SitesShowcase({ onViewAll }) {
  const allSites = [...sites, ...sites]
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-16 md:py-28" style={{ overflowX: 'clip' }} id="sites">
      <div className="max-w-7xl mx-auto px-6 mb-16" ref={ref}>
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: '100%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-sm font-semibold tracking-[0.25em] uppercase text-penguin-muted mb-4"
          >
            Criação de Sites
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '100%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-penguin-black"
          >
            Sites que convertem
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-body text-base sm:text-lg text-penguin-muted mt-4 max-w-lg leading-relaxed"
        >
          Design moderno, performance e foco total em resultado.
          Cada pixel pensado para transformar visitantes em clientes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button
            onClick={onViewAll}
            className="mt-8 inline-flex items-center gap-2 font-display text-xs font-semibold tracking-[0.15em] uppercase bg-penguin-black text-white rounded-full px-6 py-3 hover:opacity-80 transition-opacity duration-300 group"
          >
            Ver todos os projetos
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative marquee-mask py-6"
      >
        <div className="flex animate-marquee w-max gap-6 sm:gap-8 px-4">
          {allSites.map((src, i) => {
            const style = floatStyles[i % 6]
            return (
              <div
                key={i}
                className="shrink-0 w-56 sm:w-72 md:w-[380px]"
                style={{
                  animation: `float-gentle ${style.duration} ease-in-out ${style.delay} infinite`,
                }}
              >
                <img
                  src={src}
                  alt={`Exemplo de site profissional criado pela Penguin Growth - projeto ${(i % 6) + 1}`}
                  loading="lazy"
                  className="w-full h-auto rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.25)] hover:scale-[1.03] transition-all duration-500"
                />
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}