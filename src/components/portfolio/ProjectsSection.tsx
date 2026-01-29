import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { projects } from '@/data/projects'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const projectCard = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
}

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="selected-work" className="w-full py-12 px-6 md:py-16 md:px-16 lg:py-20 lg:px-32 border-t border-portfolio-border-primary" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }} ref={ref}>
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
        <motion.h2
          className="text-xs font-semibold tracking-widest text-portfolio-text-tertiary"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          SELECTED WORK
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={container}
          initial="hidden"
          animate={isVisible ? 'show' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectCard}
            >
              <SpotlightCard
                className="rounded border border-portfolio-border-primary h-full"
                spotlightColor="rgba(255, 255, 255, 0.15)"
              >
                <a
                  href={`https://${project.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer flex-col h-full group"
                  style={{ backgroundColor: '#0A0A0A' }}
                >
                  <div className="h-40 md:h-48 w-full relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-400 group-hover:scale-110"
                      style={{
                        backgroundImage: `url('${project.image}')`,
                      }}
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col gap-3 grow">
                    <h3 className="text-lg font-semibold text-portfolio-text-primary">
                      {project.title}
                    </h3>
                    <p className="text-sm text-portfolio-text-secondary leading-relaxed">
                      {project.description}
                    </p>
                    <span className="text-sm font-medium text-portfolio-accent-primary mt-auto">
                      {project.link} →
                    </span>
                  </div>
                </a>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
