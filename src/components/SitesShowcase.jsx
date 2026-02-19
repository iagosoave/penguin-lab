import { motion } from 'framer-motion'

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

export default function SitesShowcase() {
  const allSites = [...sites, ...sites]

  return (
    /* overflow-x: clip clips horizontal overflow without clipping vertical (float animation) */
    <section className="py-16 md:py-28" style={{ overflowX: 'clip' }} id="sites">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display text-sm font-semibold tracking-[0.25em] uppercase text-penguin-muted mb-4">
            Criação de Sites
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-penguin-black">
            Sites que convertem
          </h2>
          <p className="font-body text-base sm:text-lg text-penguin-muted mt-4 max-w-lg leading-relaxed">
            Design moderno, performance e foco total em resultado.
            Cada pixel pensado para transformar visitantes em clientes.
          </p>
        </motion.div>
      </div>

      {/* Marquee wrapper: py-6 gives vertical breathing room for the float animation */}
      <div className="relative marquee-mask py-6">
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
      </div>
    </section>
  )
}
