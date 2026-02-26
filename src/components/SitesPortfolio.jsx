import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ExternalLink, Pause, Volume2, VolumeX, ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  {
    id: 'hacktrading',
    title: 'HackTrading',
    link: 'https://hacktrading.com.br',
    image: '/images/site-1.png',
    category: 'Landing Page',
    tags: ['React', 'Tailwind'],
    accent: '#22c55e',
    description:
      'Comunidade definitiva para evolução consistente no trading. Dark theme profissional com design de alta conversão, depoimentos integrados e estratégias testadas para traders.',
  },
  {
    id: 'mentoria',
    title: 'Mentoria 5 Desafio',
    link: 'https://mentoria5desafio.com.br',
    image: '/images/mentoria.png',
    category: 'Landing Page',
    tags: ['React', 'Tailwind'],
    accent: '#eab308',
    description:
      'Site de mentoria para Sandra Tonidandel — "Gestão Estratégica para Escolas de Excelência". Design executivo voltado para líderes educacionais que buscam superávit estratégico.',
  },
  {
    id: 'metodoato',
    title: 'Método ATO',
    link: 'https://metodoato.com',
    image: '/images/site-5.png',
    category: 'Landing Page',
    tags: ['React', 'Tailwind'],
    accent: '#f59e0b',
    description:
      'LP premium para o Método ATO de Cristofer Leone. Visual dark com acentos dourados, voltada para profissionais que buscam excelência e expansão de impacto.',
  },
  {
    id: 'adamas',
    title: 'AdamasAds',
    link: 'https://adamasads.com',
    image: '/images/site-4.png',
    category: 'Site Institucional',
    tags: ['React', 'Tailwind'],
    accent: '#3b82f6',
    description:
      'Agência de tráfego pago — "Transformamos Dados em Resultados". Design corporativo azul transmitindo autoridade em análise estratégica e gestão de mídia paga.',
  },
  {
    id: 'pedro',
    title: 'Workshop Airbnb',
    link: 'https://lp-pedro.netlify.app',
    image: '/images/site-6.png',
    category: 'Landing Page',
    tags: ['React', 'Tailwind'],
    accent: '#f59e0b',
    description:
      'LP para Workshop "Lobos do Airbnb & Booking" — como faturar +300€/mês por alojamento. Tema dark/dourado com prova social e CTA otimizado para conversão.',
  },
]

// ——— VIDEO DESTAQUE ———
function VideoProject({ inView }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)
  const [controls, setControls] = useState(false)

  const togglePlay = () => {
    if (!videoRef.current) return
    playing ? videoRef.current.pause() : videoRef.current.play()
    setPlaying(!playing)
  }
  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !muted
    setMuted(!muted)
  }

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.18)]"
      style={{ background: '#0a0a0a', border: '1px solid #1c1c1c' }}
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setControls(true)}
      onMouseLeave={() => setControls(false)}
    >
      {/* Rainbow top line */}
      <div className="h-[2px] w-full gradient-rainbow" />

      <div className="relative w-full">
        <video
          ref={videoRef}
          src="/video/blackshade.mp4"
          className="w-full h-auto block"
          autoPlay
          muted={muted}
          loop
          playsInline
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />

        <AnimatePresence>
          {controls && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <div className="flex gap-3 items-center">
                <button onClick={togglePlay} className="text-white/60 hover:text-white transition-colors">
                  {playing ? (
                    <Pause size={15} />
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
                <button onClick={toggleMute} className="text-white/60 hover:text-white transition-colors">
                  {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </button>
              </div>
              <span className="font-display text-[9px] text-white/30 tracking-widest uppercase">
                Black Shade
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-6 sm:p-8 border-t border-[#1c1c1c]">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
          <div>
            <span className="font-display text-[10px] tracking-widest uppercase text-white/30">
              Agência Publicitária · São Paulo
            </span>
            <div className="flex items-center gap-3 mt-1.5 mb-3">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">Black Shade</h3>
              <a
                href="https://blackshadefilms.com.br/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 px-3 py-1 font-display text-[9px] tracking-widest uppercase border border-white/10 text-white/40 hover:border-white/30 hover:text-white/80 transition-all duration-200"
              >
                <ExternalLink size={9} />
                Ver Site
              </a>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-[520px]">
              Desenvolvimento completo da identidade digital da Black Shade, agência publicitária de
              São Paulo. Animações cinematográficas, visual sofisticado e alta performance para
              captação de clientes premium.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ——— CARD DE PROJETO ———
function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl"
      style={{
        background: '#f5f5f5',
        border: `1px solid ${hovered ? project.accent + '45' : '#e5e5e5'}`,
        boxShadow: hovered ? `0 14px 44px ${project.accent}18` : 'none',
        transition: 'border-color 0.22s, box-shadow 0.28s',
      }}
      initial={{ opacity: 0, y: 35, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: (index + 1) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
    >
      {/* Accent top line */}
      <motion.div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}70, transparent)`,
        }}
        animate={{ opacity: hovered ? 1 : 0.35 }}
      />

      {/* Imagem */}
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-auto block"
          animate={{ scale: hovered ? 1.03 : 1 }}
          transition={{ duration: 0.55 }}
        />

        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 font-display text-[10px] tracking-wider uppercase text-white bg-penguin-black/85 border border-white/10 backdrop-blur-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={11} /> Ver Site
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <span
              className="font-display text-[9px] tracking-widest uppercase"
              style={{ color: `${project.accent}90` }}
            >
              {project.category}
            </span>
            <h3 className="font-display font-bold text-base sm:text-lg text-penguin-black mt-0.5">
              {project.title}
            </h3>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="mt-1 w-7 h-7 flex items-center justify-center shrink-0 rounded transition-all duration-200"
            style={{
              border: `1px solid ${hovered ? project.accent + '55' : '#d4d4d4'}`,
              color: hovered ? project.accent : '#a3a3a3',
            }}
          >
            <ArrowUpRight size={12} />
          </a>
        </div>

        <p className="text-penguin-muted text-[0.78rem] leading-relaxed line-clamp-2">
          {project.description}
        </p>

      </div>
    </motion.div>
  )
}

// ——— PÁGINA PRINCIPAL ———
export default function SitesPortfolio({ onBack }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-70px' })

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-white"
    >
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-28" ref={ref}>
        {/* Botão voltar */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-display text-sm font-semibold tracking-[0.15em] uppercase text-penguin-muted hover:text-penguin-black transition-colors duration-300 mb-12 group"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Voltar
        </button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <p className="font-display text-sm font-semibold tracking-[0.25em] uppercase text-penguin-muted mb-4">
            Portfólio
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-penguin-black">
            Nossos projetos
          </h1>
          <p className="font-body text-base sm:text-lg text-penguin-muted mt-4 max-w-lg leading-relaxed">
            Cada projeto é único. Veja os sites que entregamos e o impacto que geramos.
          </p>
        </motion.div>

        {/* Vídeo em destaque */}
        <div className="mb-5">
          <VideoProject inView={inView} />
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
