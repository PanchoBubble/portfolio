import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const skills = {
  Frontend: [
    'React / React Native',
    'TypeScript / JavaScript',
    'Tailwind CSS',
    'Next.js / Vite',
    'Redux / Zustand',
    'Framer Motion',
  ],
  Backend: [
    'Node.js / Express',
    'TypeScript',
    'PostgreSQL / MongoDB',
    'GraphQL / REST',
    'Redis / Kafka',
    'Docker / Kubernetes',
  ],
  Tools: [
    'Git / GitHub',
    'GitHub Actions',
    'Stripe API',
    'AWS / GCP',
    'Vercel',
    'Grafana / Loki / Prometheus',
  ],
  Blockchain: ['Web3.js', 'Ethers.js', 'Hardhat', 'The Graph', 'Rust / Go (working knowledge)'],
  AI: ['LLMs', 'RAG', 'LangChain / LangGraph', 'MCP', 'OpenRouter', 'Prompt Engineering'],
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const skillItem = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation()
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.3"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [50, 0])

  return (
    <section className="w-full py-12 px-6 md:py-16 md:px-16 lg:py-20 lg:px-32 border-b border-t border-portfolio-border-primary" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }} ref={sectionRef}>
      <motion.div className="max-w-6xl mx-auto flex flex-col gap-8 md:gap-12" style={{ opacity, y }} ref={ref}>
        <motion.h2
          className="text-xs font-semibold tracking-widest text-portfolio-text-tertiary"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          TECHNICAL SKILLS
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 w-full">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-portfolio-text-primary">
                {category}
              </h3>
              <motion.ul
                className="flex flex-col gap-3"
                variants={container}
                initial="hidden"
                animate={isVisible ? 'show' : 'hidden'}
              >
                {items.map((skill) => (
                  <motion.li
                    key={skill}
                    className="text-sm text-portfolio-text-secondary"
                    variants={skillItem}
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
