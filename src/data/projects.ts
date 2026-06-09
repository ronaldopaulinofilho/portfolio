import type { Project, ProjectType } from '../types'

export const typeColors: Record<ProjectType, string> = {
  design: '#f59e0b',
  dev: '#3b82f6',
  fullstack: '#a78bfa',
}

export const projects: Project[] = [
  {
    id: 'design-system',
    title: 'Design System',
    description:
      'Sistema de design escalável com tokens, componentes e documentação interativa. Foco em consistência e escalabilidade.',
    descriptionEn:
      'Scalable design system with tokens, components, and interactive documentation. Focus on consistency and scalability.',
    tags: ['Figma', 'Tokens', 'React', 'Vue', 'Storybook'],
    type: 'design',
    featured: true,
    image: '/projects/design-system.png',
    images: [
      '/projects/design-system.png',
      '/projects/design-system-2.png',
      '/projects/design-system-3.png',
    ],
    liveUrl: '#',
  },
  {
    id: 'b2b-platform',
    title: 'B2B Platform',
    description:
      'Plataforma B2B de alta complexidade com dashboard de planejamento, gestão de agentes e módulos de logística e Trade Marketing.',
    descriptionEn:
      'High-complexity B2B platform with planning dashboard, agent management, and logistics and Trade Marketing modules.',
    tags: ['Figma', 'Vue.js', 'Design System', 'B2B'],
    type: 'design',
    featured: true,
    image: '/projects/b2b-dashboard.png',
    images: [
      '/projects/b2b-dashboard.png',
      '/projects/b2b-platform.png',
      '/projects/b2b-pessoas.png',
    ],
    liveUrl: '#',
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    description:
      'Criação de identidade visual. logo, paleta, tipografia, presença digital e guia de marca.',
    descriptionEn:
      'Complete visual identity. logo, palette, typography, digital presence and brand guide.',
    tags: ['Branding', 'Figma', 'Social Media'],
    type: 'design',
    image: '/projects/brand-identity.png',
    images: ['/projects/brand-identity.png', '/projects/brand-identity-2.png'],
    liveUrl: '#',
  },
  {
    id: 'sites',
    title: 'Web Design & Sites',
    description:
      'Criação de sites institucionais e landing pages para clientes de diferentes segmentos, com foco em conversão e identidade visual.',
    descriptionEn:
      'Creation of institutional websites and landing pages for clients across different segments, focused on conversion and visual identity.',
    tags: ['Web Design', 'Figma', 'HTML/CSS'],
    type: 'design',
    image: '/projects/sites.png',
    images: ['/projects/sites.png', '/projects/sites-2.png'],
    liveUrl: '#',
  },
  {
    id: 'api-rest',
    title: 'REST API Service',
    description:
      'API RESTful documentada.',
    descriptionEn:
      'Documented RESTful API.',
    tags: ['Node.js', 'Express'],
    type: 'dev',
  },
]
