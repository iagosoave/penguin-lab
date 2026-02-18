import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-5 sm:px-6 pt-20 relative overflow-hidden">
      {/* Atmospheric blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-[15%] -right-20 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-blue-50 to-violet-50 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="absolute bottom-[20%] -left-24 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-orange-50 to-rose-50 blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-display text-sm font-semibold tracking-[0.3em] uppercase text-penguin-muted mb-8"
        >
          Penguin Growth
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.95] tracking-tight text-penguin-black"
        >
          Estrategia e criatividade que{' '}
          <span className="gradient-rainbow-text">geram resultado</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="gradient-rainbow h-[3px] rounded-full mx-auto mt-10 max-w-[200px]"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="font-body text-lg md:text-xl text-penguin-muted max-w-2xl mx-auto mt-8 leading-relaxed"
        >
          Conectamos marcas ao seu publico com marketing digital inteligente,
          automacoes e producao de conteudo de alto impacto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contato"
            className="btn-rainbow-glow gradient-rainbow text-white font-display text-base font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg min-h-[48px] flex items-center justify-center"
          >
            Comecar agora
          </a>
          <a
            href="#servicos"
            className="font-display text-base font-semibold text-penguin-black border-2 border-penguin-black px-8 py-3.5 rounded-full hover:bg-penguin-black hover:text-white transition-all duration-300 hover:shadow-lg min-h-[48px] flex items-center justify-center"
          >
            Nossos servicos
          </a>
        </motion.div>
      </div>
    </section>
  )
}
