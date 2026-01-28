import { createFileRoute } from '@tanstack/react-router'
import { PortfolioHeader } from '@/components/portfolio/PortfolioHeader'
import { HeroSection } from '@/components/portfolio/HeroSection'
import { SkillsSection } from '@/components/portfolio/SkillsSection'
import { ExperienceSection } from '@/components/portfolio/ExperienceSection'
import { ProjectsSection } from '@/components/portfolio/ProjectsSection'
import { ContactSection } from '@/components/portfolio/ContactSection'
import { PortfolioFooter } from '@/components/portfolio/PortfolioFooter'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="w-full">
      <PortfolioHeader />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <PortfolioFooter />
    </div>
  )
}
