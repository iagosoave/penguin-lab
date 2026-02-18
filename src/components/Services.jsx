import { motion } from 'framer-motion'
import { Target, Share2, Palette } from 'lucide-react'

const services = [
  {
    icon: Target,
    number: '01',
    title: 'Gestão de Tráfego',
    description:
      'Campanhas estratégicas no Google Ads e Meta Ads para atrair clientes qualificados e maximizar seu retorno sobre investimento.',
  },
  {
    icon: Share2,
    number: '02',
    title: 'Social Media',
    description:
      'Gestão completa das suas redes sociais com estratégia, calendário editorial, postagens e análise de métricas.',
  },
  {
    icon: Palette,
    number: '03',
    title: 'Criação de Conteúdo',
    description:
      'Conteúdo autêntico e estratégico que conecta sua marca ao seu público e gera engajamento real nas redes sociais.',
  },
]

export default function Services() {
  return (
    <section className="py-16 md:py-28" id="servicos">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <div className="divide-y divide-penguin-black/[0.06]">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-10 sm:py-14 first:pt-0 last:pb-0 group cursor-default"
            >
              <div className="grid grid-cols-1 sm:grid-cols-[min-content_1fr] gap-4 sm:gap-6 items-start transition-transform duration-500 group-hover:translate-x-2">
                <span className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold gradient-rainbow-text leading-none whitespace-nowrap">
                  {service.number}
                </span>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon
                      size={20}
                      className="text-penguin-black shrink-0 transition-transform duration-300 group-hover:scale-110"
                    />
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-penguin-black">
                      {service.title}
                    </h3>
                  </div>
                  <p className="font-body text-sm sm:text-base text-penguin-muted leading-relaxed max-w-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
