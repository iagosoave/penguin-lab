import { useRef } from 'react'
import { motion } from 'framer-motion'

const videos = [
  { src: '/videos/video-1.mp4' },
  { src: '/videos/video-2.mp4' },
  { src: '/videos/video-3.mp4' },
  { src: '/videos/video-4.mp4' },
]

function VideoCard({ video, index }) {
  const videoRef = useRef(null)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const handleClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {})
      } else {
        videoRef.current.pause()
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden bg-penguin-black cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        src={video.src}
        aria-label={`Vídeo de produção audiovisual ${index + 1}`}
        title={`Produção audiovisual Penguin Growth - vídeo ${index + 1}`}
        className="w-full h-auto block group-hover:scale-105 transition-transform duration-700 will-change-transform"
        muted
        loop
        playsInline
        preload="metadata"
      />
    </motion.div>
  )
}

export default function VideoPortfolio() {
  return (
    <section className="py-16 md:py-28 bg-penguin-gray" id="portfolio">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
        >
          <p className="font-display text-sm font-semibold tracking-[0.25em] uppercase text-penguin-muted mb-4">
            Filmagens
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-penguin-black">
            Produção audiovisual
          </h2>
          <p className="font-body text-base sm:text-lg text-penguin-muted mt-4 max-w-lg leading-relaxed">
            Filmagens profissionais que contam a história da sua marca
            com qualidade cinematográfica.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 items-start">
          {videos.map((video, i) => (
            <VideoCard key={i} video={video} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
