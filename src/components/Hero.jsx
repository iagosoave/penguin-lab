import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-[100svh] flex flex-col items-center justify-center text-center px-5 sm:px-6 pt-20 pb-16 relative overflow-hidden">

      {/* Atmospheric blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-[10%] -right-16 w-[220px] h-[220px] sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-br from-blue-50 to-violet-100 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="absolute bottom-[15%] -left-20 w-[180px] h-[180px] sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-br from-orange-50 to-rose-100 blur-3xl"
        />
      </div>

      <div className="max-w-2xl mx-auto w-full relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-penguin-black"
        >
          <span className="block">Estratégia, performance</span>
          <span className="gradient-rainbow-text">e inteligência artificial</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="gradient-rainbow h-[2px] rounded-full mt-7 mx-auto max-w-[100px]"
        />

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="font-body text-sm sm:text-base text-penguin-muted max-w-sm mx-auto mt-6 leading-relaxed"
        >
          Conectamos marcas ao seu público com marketing digital inteligente,
          automações e produção de conteúdo de alto impacto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 flex items-center justify-center"
        >
          <a
            href="#contato"
            className="btn-rainbow-glow gradient-rainbow text-white font-display text-sm font-semibold px-9 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl min-h-[48px] flex items-center justify-center"
          >
            Começar agora
          </a>
        </motion.div>
      </div>
    </section>
  )
}
