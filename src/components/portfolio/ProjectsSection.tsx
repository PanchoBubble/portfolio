import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { ScrollFadeWrapper } from '@/components/ui/ScrollFadeWrapper'
import { projects } from '@/data/projects'

export function ProjectsSection() {
  return (
    <section id="selected-work" className="w-full py-12 px-6 md:py-16 md:px-16 lg:py-20 lg:px-32 border-t border-portfolio-border-primary" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
        <h2 className="text-xs font-semibold tracking-widest text-portfolio-text-tertiary">
          SELECTED WORK
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project) => (
            <ScrollFadeWrapper key={project.id}>
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
            </ScrollFadeWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
