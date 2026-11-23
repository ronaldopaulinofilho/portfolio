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
      heading: ['Product Designer', '& UX Engineer'],
      cta: 'Projetos',
      cv: 'Baixar Currículo',
      cvFile: 'Curriculo-Ronaldo-Paulino.pdf',
    },
    about: {
      label: 'sobre',
      heading: ['Estratégia, design', 'e código.'],
      body: 'Product Designer & UX Engineer com mais de 5 anos em produtos SaaS B2B de alta complexidade, de logística a CRM e telefonia. Desenho no Figma, valido com quem usa e implemento em React, Vue.js e TypeScript — o que encurta o caminho entre a solução validada e o produto em produção. MBA em UX Design pela PUCRS e palestrante no TDC 2023 sobre Design Systems. Antes da tecnologia, foram 10 anos na advocacia e na docência universitária: daí vêm a comunicação escrita, a documentação e o hábito de alinhar stakeholders.',
      areas: [
        {
          title: 'Design Systems e escala',
          description: 'Histórico na estruturação de Design Systems do zero, unificando a experiência de módulos críticos. Foco em reduzir débito técnico e acelerar o time-to-market.',
        },
        {
          title: 'Design Engineering',
          description: 'Especialista na ponte entre design e desenvolvimento, construindo bibliotecas de componentes e garantindo handoffs de alta fidelidade.',
        },
        {
          title: 'IA e prototipagem',
          description: 'Implementação de IA generativa no fluxo de design para prototipagem dinâmica e validação acelerada de hipóteses.',
        },
        {
          title: 'Sistemas B2B complexos',
          description: 'Especialista em traduzir regras de negócio densas em jornadas de usuário intuitivas, equilibrando objetivos de negócio com viabilidade técnica.',
        },
      ],
      skills: [
        {
          key: 'design',
          category: 'Product Design',
          items: ['UX Research', 'Entrevistas com usuários', 'Testes de Usabilidade', 'Arquitetura da Informação', 'Acessibilidade (WCAG)', 'Figma', 'Design Systems', 'Design Tokens', 'Prototipação', 'Figma Make', 'MCP + IA'],
        },
        {
          key: 'frontend',
          category: 'Frontend',
          items: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'shadcn/ui', 'Storybook', 'TanStack Query', 'Vite', 'Testes: Vitest, Playwright'],
        },
        {
          key: 'tools',
          category: 'Ferramentas',
          items: ['Git', 'Jira', 'Linear', 'Notion', 'Vercel', 'Claude', 'Cursor'],
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
      heading: ['Product Designer', '& UX Engineer'],
      cta: 'Projects',
      cv: 'Download Resume',
      cvFile: 'Resume-Ronaldo-Paulino.pdf',
    },
    about: {
      label: 'about',
      heading: ['Strategy, design', 'and code.'],
      body: 'Product Designer & UX Engineer with over 5 years on high-complexity B2B SaaS products, from logistics to CRM and telephony. I design in Figma, validate with the people who use the product and build in React, Vue.js and TypeScript — shortening the path from a validated solution to production. MBA in UX Design from PUCRS and speaker at TDC 2023 on Design Systems. Before tech, I spent 10 years in law and university teaching: that is where my written communication, documentation and stakeholder alignment come from.',
      areas: [
        {
          title: 'Design Systems at Scale',
          description: 'Track record in building Design Systems from scratch, unifying the experience across critical modules. Focus on reducing design technical debt and accelerating time-to-market.',
        },
        {
          title: 'Design Engineering',
          description: 'Expert at bridging design and software development, building component libraries and ensuring high-fidelity handoffs that optimize engineering delivery cycles.',
        },
        {
          title: 'AI & Prototyping',
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
          items: ['UX Research', 'User Interviews', 'Usability Testing', 'Information Architecture', 'Accessibility (WCAG)', 'Figma', 'Design Systems', 'Design Tokens', 'Prototyping', 'Figma Make', 'MCP + AI'],
        },
        {
          key: 'frontend',
          category: 'Frontend',
          items: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'shadcn/ui', 'Storybook', 'TanStack Query', 'Vite', 'Testing: Vitest, Playwright'],
        },
        {
          key: 'tools',
          category: 'Tools',
          items: ['Git', 'Jira', 'Linear', 'Notion', 'Vercel', 'Claude', 'Cursor'],
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
