import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Bot, Zap, TrendingUp, CheckCircle2 } from 'lucide-react'

const MESSAGES = [
  { id: 0, sender: 'bot', text: 'Olá! Vi que você abandonou o carrinho com o Tênis Runner.' },
  { id: 1, sender: 'bot', text: 'Consegui liberar um cupom de 10% pra você fechar agora! 🎟️' },
  { id: 2, sender: 'user', text: 'Sério? Eu quero!' },
  { id: 3, sender: 'bot', text: 'Ótimo! O desconto é válido por 15 min. Segue o link:' },
  { id: 4, sender: 'bot', text: '🔗 link-pagamento.com/oferta' },
  { id: 5, sender: 'user', text: 'Comprado! Obrigado. 🙏' },
]

function TypingDots() {
  return (
    <div className="self-start">
      <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-2.5 flex items-center gap-[5px] shadow-sm">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block w-[5px] h-[5px] rounded-full bg-gray-400"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 0.55, delay: i * 0.16, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>
    </div>
  )
}

function ChatPhone({ active }) {
  const [visible, setVisible] = useState([])
  const [typing, setTyping] = useState(false)
  const [done, setDone] = useState(false)
  const [resetKey, setResetKey] = useState(0)
  const chatRef = useRef(null)

  useEffect(() => {
    if (!active) return
    setVisible([])
    setTyping(false)
    setDone(false)

    const T = [
      setTimeout(() => setTyping(true), 400),
      setTimeout(() => { setTyping(false); setVisible((v) => [...v, 0]) }, 1600),
      setTimeout(() => setTyping(true), 1950),
      setTimeout(() => { setTyping(false); setVisible((v) => [...v, 1]) }, 3400),
      setTimeout(() => setVisible((v) => [...v, 2]), 4000),
      setTimeout(() => setTyping(true), 4400),
      setTimeout(() => { setTyping(false); setVisible((v) => [...v, 3]) }, 5700),
      setTimeout(() => setTyping(true), 6000),
      setTimeout(() => { setTyping(false); setVisible((v) => [...v, 4]) }, 6900),
      setTimeout(() => setVisible((v) => [...v, 5]), 7700),
      setTimeout(() => setDone(true), 8600),
      setTimeout(() => setResetKey((k) => k + 1), 13000),
    ]
    return () => T.forEach(clearTimeout)
  }, [active, resetKey])

  // Scroll APENAS o container do chat, nunca a página
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [visible.length, typing])

  return (
    <div className="relative w-[255px] h-[530px] bg-[#111] rounded-[2.8rem] p-[10px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.07)_inset]">
      {/* Dynamic island */}
      <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[76px] h-[20px] bg-black rounded-full z-20" />

      <div className="w-full h-full bg-[#ece5dd] rounded-[2.2rem] overflow-hidden flex flex-col">
        {/* WhatsApp header */}
        <div className="bg-[#075e54] px-3.5 pt-9 pb-3 flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-full bg-[#128C7E] flex items-center justify-center text-white text-[10px] font-bold font-display shrink-0">
            PG
          </div>
          <div>
            <p className="text-white text-[12px] font-semibold font-display leading-none">
              Penguin Growth
            </p>
            <div className="flex items-center gap-1 mt-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
              <p className="text-white/65 text-[9px] font-body">Online</p>
            </div>
          </div>
        </div>

        {/* Messages — scroll interno, nunca afeta a página */}
        <div
          ref={chatRef}
          className="flex-1 overflow-y-auto px-2.5 py-3 flex flex-col gap-1.5"
          style={{ scrollbarWidth: 'none' }}
        >
          {MESSAGES.map((msg, i) => (
            <AnimatePresence key={i}>
              {visible.includes(i) && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`max-w-[86%] ${msg.sender === 'user' ? 'self-end' : 'self-start'}`}
                >
                  <div
                    className={`px-3 py-1.5 rounded-2xl shadow-sm text-[10.5px] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#d9fdd3] rounded-tr-sm'
                        : 'bg-white rounded-tl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
          {typing && <TypingDots />}
        </div>

        {/* Input bar */}
        <div className="shrink-0 bg-[#f0f0f0] px-2.5 py-2 flex items-center gap-2">
          <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-[10px] text-gray-400 font-body">
            Mensagem
          </div>
          <div className="w-7 h-7 rounded-full bg-[#075e54] flex items-center justify-center shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Venda convertida — posicionado dentro do phone, no topo, sem sair do flow */}
      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[70px] left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 px-3 py-1.5 whitespace-nowrap"
            style={{
              background: 'rgba(22,163,74,0.9)',
              borderRadius: '6px',
            }}
          >
            <CheckCircle2 size={11} className="text-white shrink-0" />
            <span className="font-display text-[10px] font-semibold text-white">
              Venda convertida — R$ 297,00
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const benefits = [
  {
    icon: TrendingUp,
    title: 'Mais Conversão',
    desc: 'Aumente suas vendas com agentes que respondem leads instantaneamente.',
  },
  {
    icon: Zap,
    title: 'Venda 24h por dia',
    desc: 'Seu agente de IA continua faturando no automático, mesmo enquanto você dorme.',
  },
  {
    icon: Bot,
    title: 'Recuperação de Vendas',
    desc: 'Reengaje clientes sumidos e recupere carrinhos abandonados sem esforço manual.',
  },
]

export default function Automations() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 md:py-28 bg-penguin-gray" id="automacoes">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ——— LEFT ——— */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-display text-sm font-semibold tracking-[0.25em] uppercase text-penguin-muted mb-4">
              Agentes de IA
            </p>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-penguin-black">
              Vendas no{' '}
              <span className="gradient-rainbow-text">automático</span>
            </h2>

            <p className="font-body text-base sm:text-lg text-penguin-muted mt-6 leading-relaxed max-w-md">
              Pare de deixar dinheiro na mesa. Contrate{' '}
              <strong className="text-penguin-black font-bold">agentes de IA</strong> que atendem no
              WhatsApp, Instagram e Facebook para triplicar sua capacidade de vendas. Eles trabalham
              24h por dia transformando curiosos em compradores pagantes.
            </p>

            {/* Benefits */}
            <div className="mt-8 md:mt-10 flex flex-col gap-5 sm:gap-6">
              {benefits.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-penguin-black flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                    <item.icon size={18} className="text-white sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm sm:text-base text-penguin-black">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-penguin-muted mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* ——— RIGHT: Phone ——— */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <ChatPhone active={inView} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
