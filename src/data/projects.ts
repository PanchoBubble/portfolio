export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Tari Airdrop Platform',
    description: 'Scaled to 1.5M users with 30K concurrent capacity and 99.9% SLA. Distributed infrastructure with Redis, Kafka, and Kubernetes.',
    link: 'airdrop.tari.com',
    image: '/airdrop-og.png',
  },
  {
    id: 2,
    title: 'Tari Universe',
    description: 'Desktop application with integrated swaps module and blockchain functionality.',
    link: 'tari.com',
    image: '/tari-universe-og.png',
  },
  {
    id: 3,
    title: 'Capital G',
    description: "Alphabet's independent growth fund. Backend CMS migration improving content management workflows.",
    link: 'capitalg.com',
    image: '/capitalg.jpg',
  },
  {
    id: 4,
    title: 'Away Resorts',
    description: 'Holiday resort booking platform with custom CMS and booking system.',
    link: 'awayresorts.co.uk',
    image: '/awayresorts.jpg',
  },
  {
    id: 5,
    title: 'Speechmatics',
    description: 'AI speech recognition technology company website and product showcase.',
    link: 'speechmatics.com',
    image: '/speechmatics.jpg',
  },
  {
    id: 6,
    title: 'Approved Used Minis',
    description: 'Automotive dealership platform for pre-owned vehicle sales.',
    link: 'approvedusedminis.co.uk',
    image: '/used-mini.jpg',
  },
  {
    id: 7,
    title: 'Financial Times',
    description: 'Posts database migration and UI architecture restructuring for the iconic financial publication.',
    link: 'ft.com',
    image: '/financial-times-logo.jpeg',
  },
  {
    id: 8,
    title: 'BMW EV Campaigns',
    description: 'Campaign landing pages for new electric vehicle launches. Built with React and modern frontend technologies.',
    link: 'bmw.com',
    image: '/bmw-ev.jpg',
  },
  {
    id: 9,
    title: 'SOWE.TECH',
    description: 'AI-powered B2B platform for customer support automation with LLM-driven ticket creation and Guardrails AI integration.',
    link: 'sowe.tech',
    image: '/sowe.png',
  },
  {
    id: 10,
    title: 'Caja Salud App',
    description: 'First retirement pension fund in Argentina with a mobile app for payments and benefits. Built for healthcare professionals of Córdoba province.',
    link: 'cajasalud.com.ar',
    image: '/cpsps.png',
  },
  {
    id: 11,
    title: 'Depop Blog',
    description: 'Dynamic editorial platform made to celebrate and elevate the community fuelling Depop\'s rise. CMS built with Contentful.',
    link: 'www.depop.com/blog',
    image: '/depop-blog.jpg',
  },
  {
    id: 12,
    title: 'Google: 10 Weeks of Magic',
    description: 'Google Holiday Street, an interactive advent calendar revealing heartwarming stories and exclusive offers. Built with Angular.',
    link: 'www.phantom.land/projects/10-weeks-of-magic',
    image: '/google-holiday.png',
  },
];

// Selected projects for hero card swap
export const heroProjects = [
  projects[0], // Tari Airdrop
  projects[1], // Tari Universe
  projects[2], // Capital G
  projects[7], // BMW EV
  projects[6], // Financial Times
  projects[8], // SOWE.TECH
];
