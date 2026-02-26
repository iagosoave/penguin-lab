import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-[100svh] flex flex-col items-center justify-center text-center px-5 sm:px-6 pt-20 pb-16 relative overflow-hidden">

      {/* Atmospheric blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          transition={{ duration: 2.5, delay: 0.4 }}
          className="absolute top-[8%] -right-20 w-[240px] h-[240px] sm:w-[500px] sm:h-[500px]"
        >
          <motion.div
            animate={{ x: [0, 28, -8, 0], y: [0, -18, 8, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-full rounded-full bg-gradient-to-br from-blue-50 to-violet-100 blur-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ duration: 2.5, delay: 0.7 }}
          className="absolute bottom-[12%] -left-24 w-[200px] h-[200px] sm:w-[420px] sm:h-[420px]"
        >
          <motion.div
            animate={{ x: [0, -22, 12, 0], y: [0, 16, -10, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="w-full h-full rounded-full bg-gradient-to-br from-orange-50 to-rose-100 blur-3xl"
          />
        </motion.div>
      </div>

      <div className="max-w-2xl mx-auto w-full relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-penguin-black"
        >
          <span className="block">Sites que convertem,</span>
          <span className="gradient-rainbow-text">IA que não para.</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="gradient-rainbow h-[2px] rounded-full mt-7 mx-auto max-w-[100px] origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="font-body text-sm sm:text-base text-penguin-muted max-w-sm mx-auto mt-6 leading-relaxed"
        >
          Criamos sites de alto impacto e implementamos agentes de IA que
          atendem, engajam e vendem pelo WhatsApp 24 horas por dia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
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
