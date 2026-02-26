import { motion } from 'framer-motion'
import { Share2, Palette } from 'lucide-react'

const services = [
  {
    icon: Share2,
    number: '01',
    title: 'Social Media',
    description:
      'Gestão completa das suas redes sociais com estratégia, calendário editorial, postagens e análise de métricas.',
    tags: ['Instagram', 'TikTok', 'Facebook', 'LinkedIn'],
  },
  {
    icon: Palette,
    number: '02',
    title: 'Criação de Conteúdo',
    description:
      'Conteúdo autêntico e estratégico que conecta sua marca ao seu público e gera engajamento real nas redes sociais.',
    tags: ['Vídeos', 'Reels', 'Fotos', 'Stories'],
  },
]

export default function Services() {
  return (
    <section className="py-16 md:py-28" id="servicos">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 md:mb-20"
        >
          <p className="font-display text-sm font-semibold tracking-[0.25em] uppercase text-penguin-muted mb-4">
            O que fazemos
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-penguin-black">
            Nossos serviços
          </h2>
        </motion.div>

        <div className="divide-y divide-penguin-black/[0.07]">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative py-10 sm:py-14 first:pt-0 last:pb-0 cursor-default overflow-hidden"
            >
              {/* Rainbow reveal line on hover */}
              <div className="absolute left-0 top-0 h-[2px] gradient-rainbow w-0 group-hover:w-full transition-[width] duration-700 ease-out" />

              <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-10 transition-transform duration-500 group-hover:translate-x-2">
                {/* Number */}
                <span
                  className="font-display text-6xl sm:text-7xl md:text-8xl font-extrabold gradient-rainbow-text leading-none shrink-0 select-none"
                  style={{ backgroundSize: '400px 100%' }}
                >
                  {service.number}
                </span>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon
                      size={18}
                      className="text-penguin-black/50 shrink-0 transition-colors duration-300 group-hover:text-penguin-black"
                    />
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-penguin-black">
                      {service.title}
                    </h3>
                  </div>
                  <p className="font-body text-sm sm:text-base text-penguin-muted leading-relaxed max-w-lg">
                    {service.description}
                  </p>

                  {/* Platform tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {service.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="font-display text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full border border-penguin-black/[0.09] text-penguin-muted transition-all duration-300 group-hover:border-penguin-black/20 group-hover:text-penguin-black/60"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
