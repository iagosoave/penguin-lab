import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-[100svh] flex flex-col justify-center px-5 sm:px-6 pt-28 pb-20 relative overflow-hidden">
      {/* Atmospheric blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.65, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-[10%] -right-16 w-[260px] h-[260px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-br from-blue-50 to-violet-100 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.55, scale: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="absolute bottom-[15%] -left-20 w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-br from-orange-50 to-rose-100 blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Logo + nome */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2.5 mb-7"
        >
          <img src="/images/logo.png" alt="Penguin Growth" className="h-8 w-auto" />
          <span className="font-display text-sm font-semibold tracking-[0.2em] uppercase text-penguin-muted">
            Penguin Growth
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[2.6rem] leading-[1] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-penguin-black"
        >
          Estratégia e<br className="sm:hidden" /> criatividade{' '}
          <br className="hidden sm:block" />
          que{' '}
          <span className="gradient-rainbow-text">geram resultado</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left' }}
          className="gradient-rainbow h-[3px] rounded-full mt-8 max-w-[160px]"
        />

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="font-body text-[0.95rem] sm:text-lg md:text-xl text-penguin-muted max-w-xl mt-7 leading-relaxed"
        >
          Conectamos marcas ao seu público com marketing digital inteligente,
          automações e produção de conteúdo de alto impacto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <a
            href="#contato"
            className="btn-rainbow-glow gradient-rainbow text-white font-display text-[0.9rem] sm:text-base font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl min-h-[52px] flex items-center justify-center"
          >
            Começar agora
          </a>
          <a
            href="#servicos"
            className="font-display text-[0.9rem] sm:text-base font-semibold text-penguin-black border-2 border-penguin-black/20 px-8 py-4 rounded-full hover:border-penguin-black hover:bg-penguin-black hover:text-white transition-all duration-300 min-h-[52px] flex items-center justify-center"
          >
            Nossos serviços
          </a>
        </motion.div>
      </div>
    </section>
  )
}
