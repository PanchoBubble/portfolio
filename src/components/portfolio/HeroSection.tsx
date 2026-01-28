import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { ColorBends } from '@/components/ui/ColorBends'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="w-full min-h-[80vh] py-32 px-32 border-b border-portfolio-border-primary relative overflow-hidden flex items-center" ref={ref}>
      <div className="absolute inset-0">
        <ColorBends
          colors={['#0a1520', '#101825', '#0c1218', '#08101a']}
          speed={0.15}
          scale={1.2}
          frequency={0.8}
          warpStrength={0.8}
          mouseInfluence={0.5}
          parallax={0.3}
          noise={0.05}
          transparent={false}
        />
      </div>
      <motion.div
        className="max-w-5xl mx-auto flex flex-col gap-6 relative z-10"
        variants={container}
        initial="hidden"
        animate={isVisible ? 'show' : 'hidden'}
      >
        <motion.span className="text-xs font-semibold tracking-widest text-portfolio-accent-primary" variants={item}>
          FULL STACK ENGINEER
        </motion.span>
        <motion.h1 className="text-7xl font-medium text-portfolio-text-primary" variants={item}>
          Juan F. De Luca
        </motion.h1>
        <motion.p className="text-xl max-w-3xl leading-relaxed text-portfolio-text-secondary" variants={item}>
          Technical Lead with 8+ years architecting high-scale Web3 platforms and
          distributed systems. Built and shipped a token claiming platform serving
          1.5M users with 99.9% SLA. Strong focus on blockchain integrations,
          real-time systems, and emerging AI/LLM tooling.
        </motion.p>
        <motion.div className="flex gap-4 pt-4" variants={item}>
          <motion.a
            href="#contact"
            className="px-6 py-2 font-medium rounded text-white bg-portfolio-accent-primary hover:opacity-90 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

