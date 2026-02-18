import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Quais serviços a Penguin Growth oferece?',
    a: 'Criação de sites profissionais, automações com agentes de IA para WhatsApp, Instagram e Facebook, gestão de tráfego pago e estratégias completas de marketing digital.',
  },
  {
    q: 'Como funcionam os agentes de IA para vendas?',
    a: 'Nossos agentes de IA atendem seus clientes 24h no WhatsApp e redes sociais — respondem dúvidas, recuperam carrinhos abandonados e fecham vendas automaticamente.',
  },
  {
    q: 'Quanto tempo leva para criar um site?',
    a: 'A maioria dos sites são entregues entre 7 e 15 dias úteis. Trabalhamos com design moderno, performance otimizada e foco total em conversão.',
  },
  {
    q: 'Atendem empresas de qualquer segmento?',
    a: 'Sim. Atendemos desde pequenos negócios locais até empresas de médio porte — e-commerce, saúde, fitness, alimentação, tecnologia e mais.',
  },
  {
    q: 'Como solicitar um orçamento?',
    a: 'Clique em "Começar agora" ou "Fale com a gente" para ser direcionado ao nosso WhatsApp. Respondemos rapidamente com uma proposta personalizada.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    const el = document.getElementById('faq-schema')
    if (el) el.remove()

    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'faq-schema'
    s.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
    document.head.appendChild(s)
    return () => { const e = document.getElementById('faq-schema'); if (e) e.remove() }
  }, [])

  return (
    <section className="py-16 md:py-28" id="faq">
      <div className="max-w-2xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-sm font-semibold tracking-[0.25em] uppercase text-penguin-muted mb-4"
        >
          FAQ
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-penguin-black mb-12 md:mb-16"
        >
          Dúvidas frequentes
        </motion.h2>

        <div>
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border-b border-penguin-black/[0.06]"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
              >
                <span className="font-display font-semibold text-sm sm:text-base text-penguin-black pr-6 group-hover:text-penguin-black/70 transition-colors">
                  {f.q}
                </span>
                <span
                  className={`shrink-0 text-penguin-muted text-lg transition-transform duration-300 ${
                    open === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 font-body text-sm sm:text-base text-penguin-muted leading-relaxed pr-10">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
