import type { Project, ProjectType } from '../types'

export const typeColors: Record<ProjectType, string> = {
  design: '#f59e0b',
  dev: '#3b82f6',
  fullstack: '#a78bfa',
}

export const projects: Project[] = [
  {
    id: 'flux-crm',
    title: 'Redesign e Integração com IA',
    description:
      'Redesign de CRM omnichannel white-label: design tokens, kanban de leads, atendimento em tempo real e módulo PABX — do Figma ao código em produção.',
    descriptionEn:
      'White-label omnichannel CRM redesign: design tokens, leads kanban, real-time support and PBX module — from Figma to production code.',
    tags: ['Figma + MCP', 'React', 'TypeScript', 'Tailwind', 'Design Tokens'],
    type: 'design',
    featured: true,
    image: '/projects/flux-kanban.mp4',
    images: [
      '/projects/flux-kanban.mp4',
      '/projects/flux-dashboard.mp4',
      '/projects/flux-dark.mp4',
    ],
  },
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
    image: '/projects/design-system.webp',
    images: [
      '/projects/design-system.webp',
      '/projects/design-system-2.webp',
      '/projects/design-system-3.webp',
    ],
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
    image: '/projects/b2b-dashboard.webp',
    images: [
      '/projects/b2b-dashboard.webp',
      '/projects/b2b-platform.webp',
      '/projects/b2b-pessoas.webp',
    ],
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
    image: '/projects/brand-identity.webp',
    images: ['/projects/brand-identity.webp', '/projects/brand-identity-2.webp'],
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
    image: '/projects/sites.webp',
    images: ['/projects/sites.webp', '/projects/sites-2.webp'],
  },
  {
    id: 'api-rest',
    title: 'REST API Service',
    description:
      'API RESTful documentada, com integração com IA.',
    descriptionEn:
      'Documented RESTful API with AI integration.',
    tags: ['Node.js', 'Express', 'Integração com IA'],
    type: 'dev',
    image: '/projects/rest-api.webp',
    images: ['/projects/rest-api.webp'],
  },
]
