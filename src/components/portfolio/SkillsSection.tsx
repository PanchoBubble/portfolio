import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

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

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50])

  return (
    <section className="w-full py-12 px-6 md:py-16 md:px-16 lg:py-20 lg:px-32 border-b border-t border-portfolio-border-primary" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }} ref={sectionRef}>
      <motion.div className="max-w-6xl mx-auto flex flex-col gap-8 md:gap-12" style={{ opacity, y }}>
        <h2 className="text-xs font-semibold tracking-widest text-portfolio-text-tertiary">
          TECHNICAL SKILLS
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 w-full">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-portfolio-text-primary">
                {category}
              </h3>
              <ul className="flex flex-col gap-3">
                {items.map((skill) => (
                  <li key={skill} className="text-sm text-portfolio-text-secondary">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
