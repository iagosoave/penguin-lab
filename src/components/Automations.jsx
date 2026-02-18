import { motion } from 'framer-motion'
import { Bot, Zap, TrendingUp } from 'lucide-react'

const messages = [
  { sender: 'bot', text: 'Olá! Vi que você abandonou o carrinho com o Tênis Runner.', time: '19:42' },
  { sender: 'bot', text: 'Consegui liberar um cupom de 10% pra você fechar agora! 🎟️', time: '19:42' },
  { sender: 'user', text: 'Sério? Eu quero!', time: '19:45' },
  { sender: 'bot', text: 'Ótimo! O desconto é válido por 15 min. Segue o link:', time: '19:45' },
  { sender: 'bot', text: '🔗 link-pagamento.com/oferta', time: '19:45' },
  { sender: 'user', text: 'Comprado! Obrigado.', time: '19:48' },
]

const benefits = [
  { icon: TrendingUp, title: 'Mais Conversão', desc: 'Aumente suas vendas com agentes que respondem leads instantaneamente.' },
  { icon: Zap, title: 'Venda 24h por dia', desc: 'Seu agente de IA continua faturando no automático, mesmo enquanto você dorme.' },
  { icon: Bot, title: 'Recuperação de Vendas', desc: 'Reengaje clientes sumidos e recupere carrinhos abandonados sem esforço manual.' },
]

export default function Automations() {
  return (
    <section className="py-16 md:py-28 bg-penguin-gray" id="automacoes">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
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
              Pare de deixar dinheiro na mesa. Contrate <strong className="text-penguin-black font-bold">agentes de IA</strong> que atendem
              no WhatsApp, Instagram e Facebook para triplicar sua capacidade de vendas.
              Eles trabalham 24h por dia transformando curiosos em compradores pagantes.
            </p>

            <div className="mt-8 md:mt-10 flex flex-col gap-5 sm:gap-6">
              {benefits.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-penguin-black flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                    <item.icon size={18} className="text-white sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm sm:text-base text-penguin-black">{item.title}</h3>
                    <p className="font-body text-xs sm:text-sm text-penguin-muted mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <div className="relative scale-[0.85] sm:scale-90 md:scale-100 origin-top">
              <div className="absolute -inset-10 gradient-rainbow rounded-full blur-3xl opacity-10" />

              <div className="relative w-[280px] h-[580px] bg-penguin-black rounded-[3rem] p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.05)_inset]">
                <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[90px] h-[25px] bg-penguin-black rounded-full z-20" />

                <div className="w-full h-full bg-[#efeae2] rounded-[2.4rem] overflow-hidden flex flex-col relative">
                  <div className="bg-[#075e54] px-4 pt-10 pb-3 flex items-center gap-3 relative z-10">
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white text-xs font-bold font-display">PG</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold font-display">Penguin Growth</p>
                      <p className="text-white/70 text-[10px] font-body">Agente de Vendas</p>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-2">
                    {messages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.35 }}
                        className={`max-w-[85%] ${msg.sender === 'user' ? 'self-end' : 'self-start'}`}
                      >
                        <div
                          className={`px-3 py-2 rounded-xl text-[11px] leading-relaxed shadow-sm ${
                            msg.sender === 'user'
                              ? 'bg-[#d9fdd3] rounded-tr-sm'
                              : 'bg-white rounded-tl-sm'
                          }`}
                        >
                          <p className="text-penguin-black font-body">{msg.text}</p>
                          <p className="text-[9px] text-gray-400 text-right mt-1 font-body">{msg.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-[#f0f0f0] px-3 py-2 flex items-center gap-2">
                    <div className="flex-1 bg-white rounded-full px-4 py-2 text-[10px] text-gray-400 font-body">
                      Mensagem
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#075e54] flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
