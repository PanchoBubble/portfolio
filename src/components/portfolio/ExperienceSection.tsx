import { ScrollFadeWrapper } from '@/components/ui/ScrollFadeWrapper'

const experiences = [
  {
    id: 'yat-tari',
    title: 'Technical Lead',
    company: 'YAT - TARI',
    period: '2022 — Present',
    description:
      'Led a team of up to 7 senior engineers across the full product development lifecycle, managing end-to-end application delivery for Web3 and blockchain-focused products. Architected the Tari Airdrop Platform scaling to 1.5M users with 30K concurrent capacity while maintaining 99.9% SLA. Built NFT Marketplace with collection discovery across Ethereum, Solana, and Aptos. Developed Paper Trading Game with 5K active users. Implemented secure wallet integrations and integrated the swaps module within Tari Universe desktop app. Integrated custom LLM pipelines and AI-driven flows with agentic automation and guardrails for production systems.',
    tech: ['React', 'Styled Components', 'Framer Motion', 'GSAP', 'Redux', 'Zustand', 'RxJS', 'WebGL', 'Node.js', 'Express', 'TypeScript', 'Rust', 'TypeORM', 'PostgreSQL', 'GraphQL', 'Docker', 'Redis', 'RabbitMQ', 'Kafka', 'Kubernetes'],
  },
  {
    id: 'sowe',
    title: 'Founder & Technical Lead',
    company: 'SOWE.TECH',
    period: '2024 — Present',
    description:
      'Building AI-powered B2B products for customer support automation and workflow agents. Support Bot Platform: Embeddable chatbot with LLM-driven ticket creation, user management, and FAQ handling. Guardrails AI integration prevents hallucinations and protects sensitive data. Web Agent Automation: Prompt-driven platform deploying browser agents for multi-step workflows with task templating, reruns, and cross-run comparison. Pursuing enterprise contracts including payment system integrations.',
    tech: ['LangGraph', 'Guardrails AI', 'Python', 'TypeScript', 'PostgreSQL', 'Cloudflare Workers'],
  },
  {
    id: 'phantom',
    title: 'Senior Full Stack Developer',
    company: 'PHANTOM',
    period: '2021 — 2022',
    description:
      'Digital agency delivering end-to-end web applications for enterprise clients. Delivered 5 concurrent projects for Sony, Capital G (Alphabet), and Financial Times, balancing rapid campaign timelines with production-quality standards. Built flexible CMS-driven applications allowing clients to customize layouts without developer involvement. Capital G: Migrated backend CMS architecture. Financial Times: Migrated posts database and restructured UI architecture. Led 2-3 senior developers while providing architectural guidance.',
    tech: ['Next.js', 'Node.js', 'TypeScript', 'Contentful', 'Strapi', 'GraphQL', 'AWS', 'Vercel'],
  },
  {
    id: 'dare',
    title: 'Full Stack Developer',
    company: 'DARE DIGITAL',
    period: '2019 — 2021',
    description:
      'Digital agency delivering campaigns and web experiences for enterprise and SMB clients. Delivered 10+ projects ranging from rapid-turnaround landing pages to ongoing platform work for BMW, MINI, Hertz, and Mount Anvil. Built the MINI marketplace platform for pre-owned vehicles. Developed BMW campaign landing pages for new EV launches. Created custom Django CMS implementations with REST APIs, React frontends, and AWS infrastructure. Established reusable Docker/Parcel/Webpack tooling adopted across agency projects.',
    tech: ['React', 'Redux', 'Django', 'Django-CMS', 'PostgreSQL', 'AWS RDS', 'Docker', 'Jenkins'],
  },
  {
    id: 'bubble',
    title: 'Full Stack Developer',
    company: 'BUBBLE-BPM',
    period: '2018 — 2019',
    description:
      'Built invoice processing crawlers using Python/Requests that automated data extraction, populating PostgreSQL databases. Led Django 1.6 → 2.1 migration for large-scale application, restructuring APIs to GraphQL. Developed React dashboard with Apollo Client and ChartJS for real-time cost visibility across departments.',
    tech: ['Python', 'Django', 'GraphQL', 'React', 'Apollo Client', 'ChartJS', 'PostgreSQL'],
  },
  {
    id: 'earlier',
    title: 'Earlier Roles',
    company: 'Various',
    period: '2016 — 2018',
    description:
      'Ernst & Young (2017-2018): Supporting Role in Big Data & Analytics. Automated monitoring and reporting workflows using PowerShell, Python, and Selenium. Managed Jenkins/Spark/Nifi job monitoring and server vulnerability remediation. Accenture (2016-2017): SW/Application Tech Support BigData. Server vulnerability remediation, data recovery, root cause analysis. Telecom Italy (2016): Functional Tester. Test case creation and execution, Oracle CRM, test automation with Selenium.',
    tech: ['Python', 'PowerShell', 'Selenium', 'Jenkins', 'Spark', 'Nifi', 'Tableau', 'Oracle CRM'],
  },
]

export function ExperienceSection() {
  return (
    <section className="w-full py-12 px-6 md:py-16 md:px-16 lg:py-20 lg:px-32 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
        <h2 className="text-xs font-semibold tracking-widest text-portfolio-text-tertiary">
          EXPERIENCE
        </h2>
        <div className="flex flex-col">
          {experiences.map((exp) => (
            <ScrollFadeWrapper
              key={exp.id}
              className="py-6 md:py-10 flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-20 border-t border-portfolio-border-primary"
            >
              <div className="md:w-48 md:flex-shrink-0 flex flex-col gap-1">
                <p className="text-sm text-portfolio-text-secondary">
                  {exp.period}
                </p>
                <p className="text-sm font-medium text-portfolio-accent-primary">
                  {exp.company}
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <h3 className="text-xl md:text-2xl font-semibold text-portfolio-text-primary">
                  {exp.title}
                </h3>
                <p className="text-sm text-portfolio-text-secondary leading-relaxed">
                  {exp.description}
                </p>
                <p className="text-xs font-mono text-portfolio-text-tertiary">
                  {exp.tech.join('  •  ')}
                </p>
              </div>
            </ScrollFadeWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
