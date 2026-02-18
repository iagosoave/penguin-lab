import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: 150, suffix: '+', label: 'Clientes' },
  { value: 3, suffix: 'M+', label: 'Faturamento gerado' },
  { value: 98, suffix: '%', label: 'Satisfação' },
  { value: 24, suffix: '/7', label: 'Suporte' },
]

function Counter({ target, suffix, active }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let n = 0
    const step = target / 60
    const id = setInterval(() => {
      n += step
      if (n >= target) { setCount(target); clearInterval(id) }
      else setCount(Math.floor(n))
    }, 25)
    return () => clearInterval(id)
  }, [active, target])

  return <>{count}{suffix}</>
}

export default function Stats() {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setSeen(true) },
      { threshold: 0.4 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-14 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-penguin-black">
                <Counter target={s.value} suffix={s.suffix} active={seen} />
              </p>
              <p className="font-body text-xs tracking-[0.15em] uppercase text-penguin-muted mt-2">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="gradient-rainbow h-[2px] rounded-full mt-14 md:mt-20 max-w-[120px] mx-auto"
        />
      </div>
    </section>
  )
}
