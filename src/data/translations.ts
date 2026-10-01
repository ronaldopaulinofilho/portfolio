export type Lang = 'pt' | 'en'

export const translations = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      services: 'Serviços',
      caseStudy: 'Cases',
      projects: 'Projetos',
      testimonials: 'Depoimentos',
      contact: 'Contato',
    },
    hero: {
      label: 'hero',
      badge: 'Porto Alegre · disponível para novos projetos',
      tagline: '// Design Systems Specialist',
      heading: ['Product Designer', '& Senior UX Engineer'],
      cta: 'Projetos',
      cv: 'Baixar Currículo',
    },
    about: {
      label: 'sobre',
      heading: ['Estratégia que escala,', 'código que entrega.'],
      body: 'Product Designer & Senior UX Engineer com mais de 6 anos de experiência na arquitetura de produtos B2B de alta complexidade. Especialista na intersecção entre Design de Produto (UX/UI), Engenharia Front-End (React/Vue/TypeScript) e integração estratégica de IA — garantindo que a visão de produto seja tecnicamente viável e escalável.',
      areas: [
        {
          title: 'Design Ops & Scalability',
          description: 'Histórico na estruturação de Design Systems do zero, unificando a experiência de módulos críticos. Foco em reduzir débito técnico e acelerar o time-to-market.',
        },
        {
          title: 'Design Engineering',
          description: 'Especialista na ponte entre design e desenvolvimento, construindo bibliotecas de componentes e garantindo handoffs de alta fidelidade.',
        },
        {
          title: 'Agentic AI & Prototyping',
          description: 'Implementação de IA generativa no fluxo de design para prototipagem dinâmica e validação acelerada de hipóteses.',
        },
        {
          title: 'Complex B2B Systems',
          description: 'Especialista em traduzir regras de negócio densas em jornadas de usuário intuitivas, equilibrando objetivos de negócio com viabilidade técnica.',
        },
      ],
      skills: [
        {
          key: 'design',
          category: 'Product Design',
          items: ['UX Research', 'Figma', 'Figma Make', 'Design Systems', 'MCP', 'IA', 'Prototipação', 'Testes de Usabilidade'],
        },
        {
          key: 'frontend',
          category: 'Frontend',
          items: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Node.js', 'Webpack', 'Vite', 'Tailwind CSS', 'Framer Motion'],
        },
        {
          key: 'tools',
          category: 'Ferramentas',
          items: ['Git', 'Storybook', 'Vercel', 'Notion', 'Claude', 'Cursor AI'],
        },
      ],
      industries: ['B2B SaaS', 'Logística', 'Trade Marketing', 'E-commerce', 'Fintech'],
    },
    services: {
      label: 'serviços',
      heading: 'O que eu ofereço',
      cards: [
        {
          title: 'UX/UI Design',
          description: 'Do discovery ao protótipo de alta fidelidade, com integração de IA via MCP: o design do Figma vira protótipo dinâmico navegável em React — validação real antes da produção.',
          tags: ['Figma', 'User Research', 'MCP + IA', 'Protótipo Navegável'],
        },
        {
          title: 'Design System',
          description: 'Sistemas de design escaláveis com tokens, componentes documentados e bibliotecas de UI prontas para produção.',
          tags: ['Tokens', 'Storybook', 'Component Lib'],
        },
        {
          title: 'Frontend Dev',
          description: 'Interfaces com React e Vue.js, integrando design e código com foco em performance e acessibilidade.',
          tags: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Node.js', 'Webpack', 'Vite', 'Tailwind'],
        },
      ],
    },
    projects: {
      label: 'projetos',
      heading: 'Cases',
      filters: { all: 'Todos', design: 'Design', dev: 'Dev' },
      demo: 'Demo',
      code: 'Código',
    },
    testimonials: {
      label: 'depoimentos',
      heading: 'O que dizem sobre meu trabalho',
      linkedin: 'LinkedIn',
    },
    contact: {
      label: 'contato',
      heading: 'Vamos construir algo juntos?',
      body: 'Disponível para projetos, colaborações e oportunidades full-time.',
    },
    footer: {
      available: 'Porto Alegre · disponível para projetos',
      made: 'feito com React + Vite',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      caseStudy: 'Cases',
      projects: 'Projects',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    hero: {
      label: 'hero',
      badge: 'Porto Alegre, Brazil · available for new projects',
      tagline: '// Design Systems Specialist',
      heading: ['Product Designer', '& Senior UX Engineer'],
      cta: 'Projects',
      cv: 'Download Resume',
    },
    about: {
      label: 'about',
      heading: ['Strategy that scales,', 'code that delivers.'],
      body: 'Product Designer & Senior UX Engineer with over 6 years of experience in high-complexity B2B product architecture. Specialist at the intersection of Product Design (UX/UI), Front-End Engineering (React/Vue/TypeScript) and strategic AI integration — ensuring product vision is technically viable and scalable.',
      areas: [
        {
          title: 'Design Ops & Scalability',
          description: 'Track record in building Design Systems from scratch, unifying the experience across critical modules. Focus on reducing design technical debt and accelerating time-to-market.',
        },
        {
          title: 'Design Engineering',
          description: 'Expert at bridging design and software development, building component libraries and ensuring high-fidelity handoffs that optimize engineering delivery cycles.',
        },
        {
          title: 'Agentic AI & Prototyping',
          description: 'Implementation of generative AI in the design workflow for dynamic prototyping and accelerated hypothesis validation.',
        },
        {
          title: 'Complex B2B Systems',
          description: 'Expert at translating dense business rules into intuitive user journeys, balancing business objectives with technical feasibility.',
        },
      ],
      skills: [
        {
          key: 'design',
          category: 'Product Design',
          items: ['UX Research', 'Figma', 'Figma Make', 'Design Systems', 'MCP', 'AI', 'Prototyping', 'Usability Testing'],
        },
        {
          key: 'frontend',
          category: 'Frontend',
          items: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Node.js', 'Webpack', 'Vite', 'Tailwind CSS', 'Framer Motion'],
        },
        {
          key: 'tools',
          category: 'Tools',
          items: ['Git', 'Storybook', 'Vercel', 'Notion', 'Claude', 'Cursor AI'],
        },
      ],
      industries: ['B2B SaaS', 'Logistics', 'Trade Marketing', 'E-commerce', 'Fintech'],
    },
    services: {
      label: 'services',
      heading: 'What I offer',
      cards: [
        {
          title: 'UX/UI Design',
          description: 'From discovery to high-fidelity prototype, with AI integration via MCP: Figma design becomes a dynamic, navigable React prototype — real validation before production.',
          tags: ['Figma', 'User Research', 'MCP + AI', 'Navigable Prototype'],
        },
        {
          title: 'Design System',
          description: 'Scalable design systems with tokens, documented components, and production-ready UI libraries.',
          tags: ['Tokens', 'Storybook', 'Component Lib'],
        },
        {
          title: 'Frontend Dev',
          description: 'Interfaces with React and Vue.js, bridging design and code with a focus on performance and accessibility.',
          tags: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Node.js', 'Webpack', 'Vite', 'Tailwind'],
        },
      ],
    },
    projects: {
      label: 'projects',
      heading: 'Cases',
      filters: { all: 'All', design: 'Design', dev: 'Dev' },
      demo: 'Demo',
      code: 'Code',
    },
    testimonials: {
      label: 'testimonials',
      heading: 'What people say about my work',
      linkedin: 'LinkedIn',
    },
    contact: {
      label: 'contact',
      heading: "Let's build something together?",
      body: 'Available for freelance projects, collaborations, and full-time opportunities.',
    },
    footer: {
      available: 'Porto Alegre, Brazil · available for projects',
      made: 'made with React + Vite',
    },
  },
} as const
