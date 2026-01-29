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
    description: 'Architected the token claiming flow and system architecture. Scaled to 1.5M users with 30K concurrent capacity and 99.9% SLA.',
    link: 'airdrop.tari.com',
    image: '/airdrop-og.png',
  },
  {
    id: 2,
    title: 'Tari Universe',
    description: 'Integrated the swaps module and blockchain functionality into this desktop application for the Tari ecosystem.',
    link: 'tari.com',
    image: '/tari-universe-og.png',
  },
  {
    id: 3,
    title: 'Capital G',
    description: "Migrated backend CMS architecture improving content management workflows for Alphabet's independent growth fund.",
    link: 'capitalg.com',
    image: '/capitalg.jpg',
  },
  {
    id: 4,
    title: 'Away Resorts',
    description: 'Built Django CMS with Divio, payment integrations with Mastercard/Visa, and frontend with Django templates.',
    link: 'awayresorts.co.uk',
    image: '/awayresorts.jpg',
  },
  {
    id: 5,
    title: 'Speechmatics',
    description: 'End-to-end CMS implementation with Contentful for this AI speech recognition technology company.',
    link: 'speechmatics.com',
    image: '/speechmatics.jpg',
  },
  {
    id: 6,
    title: 'Approved Used Minis',
    description: 'Built the marketplace platform for pre-owned Mini Cooper vehicle sales.',
    link: 'approvedusedminis.co.uk',
    image: '/used-mini.jpg',
  },
  {
    id: 7,
    title: 'Financial Times',
    description: 'Migrated posts database and restructured UI architecture for the iconic financial publication.',
    link: 'ft.com',
    image: '/financial-times-logo.jpeg',
  },
  {
    id: 8,
    title: 'BMW EV Campaigns',
    description: 'Developed campaign landing pages for new electric vehicle launches using React.',
    link: 'bmw.com',
    image: '/bmw-ev.jpg',
  },
  {
    id: 9,
    title: 'SOWE.TECH',
    description: 'Founded and built AI-powered B2B platform with LLM-driven ticket creation and Guardrails AI integration.',
    link: 'sowe.tech',
    image: '/sowe.png',
  },
  {
    id: 10,
    title: 'Caja Salud App',
    description: 'Developed mobile app using React Native for the first retirement pension fund in Argentina serving healthcare professionals.',
    link: 'cajasalud.com.ar',
    image: '/cpsps.png',
  },
  {
    id: 11,
    title: 'Depop Blog',
    description: 'CMS integration with Strapi for this editorial platform celebrating Depop\'s community.',
    link: 'www.depop.com/blog',
    image: '/depop-blog.jpg',
  },
  {
    id: 12,
    title: 'Google: 10 Weeks of Magic',
    description: 'Maintenance and new promotions for this interactive advent calendar with exclusive offers.',
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
