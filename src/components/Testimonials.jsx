import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    text: 'Em 3 meses, triplicamos nossas vendas online com o site novo e as automações de WhatsApp.',
    name: 'Mariana S.',
    role: 'Loja Bella',
  },
  {
    text: 'O agente de IA atende nossos clientes 24h e já recuperou dezenas de vendas perdidas automaticamente.',
    name: 'Rafael C.',
    role: 'RC Fitness',
  },
  {
    text: 'Profissionalismo e resultado. O site que criaram converte muito mais que o anterior.',
    name: 'Pedro A.',
    role: 'Tech Solutions',
  },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  const touchX = useRef(0)

  useEffect(() => {
    const id = setInterval(() => setI((c) => (c + 1) % testimonials.length), 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-16 md:py-28" id="depoimentos">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div
          className="min-h-[180px] sm:min-h-[160px] flex items-center justify-center"
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX }}
          onTouchEnd={(e) => {
            const d = touchX.current - e.changedTouches[0].clientX
            if (Math.abs(d) > 50) setI((c) => d > 0
              ? (c + 1) % testimonials.length
              : (c - 1 + testimonials.length) % testimonials.length
            )
          }}
        >
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-penguin-black">
                &ldquo;{testimonials[i].text}&rdquo;
              </p>
              <p className="font-body text-sm text-penguin-muted mt-6">
                {testimonials[i].name}
                <span className="mx-2 text-penguin-muted/40">/</span>
                {testimonials[i].role}
              </p>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-1.5 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Depoimento ${idx + 1}`}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                idx === i ? 'w-8 bg-penguin-black' : 'w-3 bg-penguin-black/15'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
