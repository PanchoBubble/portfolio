import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const experiences = [
  {
    id: 'current',
    title: 'Technical Lead',
    company: 'Sowe',
    period: '2024 - Present',
    description:
      'Leading engineering efforts on blockchain infrastructure and distributed systems.',
  },
  {
    id: 'former1',
    title: 'Senior Full Stack Engineer',
    company: 'Previous Company',
    period: '2023 - 2024',
    description:
      'Built and maintained high-scale Web3 platforms serving 1.5M+ users with 99.9% SLA.',
  },
  {
    id: 'former2',
    title: 'Full Stack Engineer',
    company: 'Prior Role',
    period: '2022 - 2023',
    description:
      'Architected real-time systems and blockchain integrations for token claiming platform.',
  },
  {
    id: 'former3',
    title: 'Software Engineer',
    company: 'Earlier Position',
    period: '2021 - 2022',
    description: 'Developed features using React, Node.js, and PostgreSQL.',
  },
  {
    id: 'former4',
    title: 'Junior Developer',
    company: 'First Role',
    period: '2020 - 2021',
    description: 'Started career building web applications with React and Node.js.',
  },
]

const expItem = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="w-full py-20 px-32 bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <motion.h2
          className="text-xs font-semibold tracking-widest text-portfolio-text-tertiary"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          EXPERIENCE
        </motion.h2>
        <div className="flex flex-col">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              className={`py-8 flex gap-16 ${
                idx !== experiences.length - 1 ? 'border-b border-portfolio-border-primary' : ''
              }`}
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-portfolio-text-primary">
                  {exp.title}
                </h3>
                <p className="text-sm mt-1 text-portfolio-accent-primary">
                  {exp.company}
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <p className="text-sm font-medium text-portfolio-text-secondary">
                  {exp.period}
                </p>
                <p className="text-sm text-portfolio-text-secondary">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
