export type Lang = 'pt' | 'en'

export const translations = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      services: 'Serviços',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      label: '001 — hero',
      badge: 'Disponível para novos projetos',
      tagline: '// Product Designer & Developer',
      heading: ['Product Designer', '& Developer'],
      cta: 'Ver Projetos',
    },
    about: {
      label: '002 — sobre',
      heading: ['Estratégia que escala,', 'código que entrega.'],
      body: 'Product Designer e Software Developer com mais de 5 anos de experiência na arquitetura de produtos B2B de alta complexidade. Minha atuação se diferencia pela intersecção entre Design Estratégico e Engenharia de Software, garantindo que a visão de produto seja tecnicamente viável e escalável.',
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
          items: ['UX Research', 'Figma', 'Figma Make', 'Design Systems', 'Prototipação', 'Testes de Usabilidade'],
        },
        {
          key: 'frontend',
          category: 'Frontend',
          items: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
        },
        {
          key: 'tools',
          category: 'Ferramentas',
          items: ['Git', 'Storybook', 'Vercel', 'Notion'],
        },
      ],
      industries: ['B2B SaaS', 'Logística', 'Trade Marketing', 'E-commerce', 'Fintech'],
    },
    services: {
      label: '003 — serviços',
      heading: 'O que eu ofereço',
      cards: [
        {
          number: '01',
          title: 'UX/UI Design',
          description: 'Do discovery ao protótipo de alta fidelidade. Pesquisa de usuário, wireframes, fluxos e testes de usabilidade.',
          tags: ['Figma', 'User Research', 'Prototyping'],
        },
        {
          number: '02',
          title: 'Design System',
          description: 'Sistemas de design escaláveis com tokens, componentes documentados e bibliotecas de UI prontas para produção.',
          tags: ['Tokens', 'Storybook', 'Component Lib'],
        },
        {
          number: '03',
          title: 'Frontend Dev',
          description: 'Interfaces com React e Vue.js, integrando design e código com foco em performance e acessibilidade.',
          tags: ['React', 'Vue.js', 'TypeScript'],
        },
      ],
    },
    projects: {
      label: '004 — projetos',
      heading: 'Trabalho selecionado',
      filters: { all: 'Todos', design: 'Design', dev: 'Dev' },
      demo: 'Demo',
      code: 'Código',
    },
    contact: {
      label: '005 — contato',
      heading: 'Vamos construir algo juntos?',
      body: 'Disponível para projetos, colaborações e oportunidades full-time.',
    },
    footer: {
      available: 'Disponível para projetos',
      made: 'feito com React + Vite',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      label: '001 — hero',
      badge: 'Available for new projects',
      tagline: '// Product Designer & Developer',
      heading: ['Product Designer', '& Developer'],
      cta: 'View Projects',
    },
    about: {
      label: '002 — about',
      heading: ['Strategy that scales,', 'code that delivers.'],
      body: 'Product Designer and Software Developer with over 5 years of experience in high-complexity B2B product architecture. My approach is defined by the intersection of Strategic Design and Software Engineering, ensuring product vision is technically viable and scalable.',
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
          items: ['UX Research', 'Figma', 'Figma Make', 'Design Systems', 'Prototyping', 'Usability Testing'],
        },
        {
          key: 'frontend',
          category: 'Frontend',
          items: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
        },
        {
          key: 'tools',
          category: 'Tools',
          items: ['Git', 'Storybook', 'Vercel', 'Notion'],
        },
      ],
      industries: ['B2B SaaS', 'Logistics', 'Trade Marketing', 'E-commerce', 'Fintech'],
    },
    services: {
      label: '003 — services',
      heading: 'What I offer',
      cards: [
        {
          number: '01',
          title: 'UX/UI Design',
          description: 'From discovery to high-fidelity prototype. User research, wireframes, flows, and usability testing.',
          tags: ['Figma', 'User Research', 'Prototyping'],
        },
        {
          number: '02',
          title: 'Design System',
          description: 'Scalable design systems with tokens, documented components, and production-ready UI libraries.',
          tags: ['Tokens', 'Storybook', 'Component Lib'],
        },
        {
          number: '03',
          title: 'Frontend Dev',
          description: 'Interfaces with React and Vue.js, bridging design and code with a focus on performance and accessibility.',
          tags: ['React', 'Vue.js', 'TypeScript'],
        },
      ],
    },
    projects: {
      label: '004 — projects',
      heading: 'Selected work',
      filters: { all: 'All', design: 'Design', dev: 'Dev' },
      demo: 'Demo',
      code: 'Code',
    },
    contact: {
      label: '005 — contact',
      heading: "Let's build something together?",
      body: 'Available for freelance projects, collaborations, and full-time opportunities.',
    },
    footer: {
      available: 'Available for projects',
      made: 'made with React + Vite',
    },
  },
} as const
