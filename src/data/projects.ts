import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'design-system',
    title: 'Design System',
    description:
      'Sistema de design escalável com tokens, componentes e documentação interativa. Foco em consistência e acessibilidade.',
    tags: ['Figma', 'Tokens', 'React', 'Storybook'],
    type: 'design',
    featured: true,
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'dashboard-analytics',
    title: 'Analytics Dashboard',
    description:
      'Dashboard de métricas em tempo real com visualizações interativas, filtros avançados e exportação de dados.',
    tags: ['React', 'TypeScript', 'Recharts', 'TailwindCSS'],
    type: 'dev',
    featured: true,
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'mobile-app',
    title: 'Finance App',
    description:
      'Aplicativo mobile de controle financeiro pessoal com UX pesquisada, prototipado no Figma e implementado com React Native.',
    tags: ['Figma', 'React Native', 'UX Research'],
    type: 'fullstack',
    featured: true,
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Platform',
    description:
      'Plataforma de e-commerce completa com carrinho, checkout e painel administrativo.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    type: 'dev',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    description:
      'Criação de identidade visual completa: logo, paleta, tipografia e guia de marca para startup de tecnologia.',
    tags: ['Branding', 'Figma', 'Illustrator'],
    type: 'design',
    liveUrl: '#',
  },
  {
    id: 'api-rest',
    title: 'REST API Service',
    description:
      'API RESTful documentada com autenticação JWT, rate limiting e CI/CD automatizado.',
    tags: ['Node.js', 'Express', 'Docker', 'PostgreSQL'],
    type: 'dev',
    repoUrl: '#',
  },
]
