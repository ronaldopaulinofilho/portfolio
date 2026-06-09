export type Lang = 'pt' | 'en'

export const translations = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      badge: 'Disponível para novos projetos',
      description:
        'Crio experiências digitais da pesquisa de UX ao código em produção. Foco em interfaces bonitas, acessíveis e performáticas.',
      cta1: 'Ver Projetos',
      cta2: 'Entrar em Contato',
    },
    about: {
      label: 'Sobre',
      heading: ['Estratégia que escala,', 'código que entrega.'],
      body: 'Product Designer com mais de 5 anos de experiência na arquitetura de produtos B2B de alta complexidade. Minha atuação se diferencia pela intersecção entre Design Estratégico e Engenharia de Software, garantindo que a visão de produto seja tecnicamente viável com escalabilidade.',
      areas: [
        {
          title: 'Design Ops & Scalability',
          description: 'Histórico na estruturação de Design Systems do zero, unificando a experiência de módulos críticos (Logística, Trade Marketing e Serviços). Foco em reduzir o débito técnico de design e acelerar o time-to-market.',
        },
        {
          title: 'Design Engineering (Vue.js)',
          description: 'Especialista na ponte entre design e desenvolvimento de software, atuando na construção de bibliotecas de componentes e garantindo handoffs de alta fidelidade que otimizam o ciclo de entrega da engenharia.',
        },
        {
          title: 'Agentic AI & Advanced Prototyping',
          description: 'Implementação de IA generativa no fluxo de design para prototipagem dinâmica e validação acelerada de hipóteses, transformando processos manuais em ciclos ágeis de descoberta.',
        },
        {
          title: 'Complex B2B Systems',
          description: 'Especialista em traduzir regras de negócio densas em jornadas de usuário intuitivas, equilibrando os objetivos de negócio com a viabilidade técnica em ecossistemas multissetoriais.',
        },
      ],
      closing: 'Focado em elevar o padrão de qualidade de produtos digitais através de sistemas consistentes, visão sistêmica e automação inteligente. 🏳️‍🌈',
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
    },
    projects: {
      label: 'Projetos',
      heading: 'Atuação em projetos',
      filters: { all: 'Todos', design: 'Design', dev: 'Dev', fullstack: 'Full-stack' },
      demo: 'Demo',
      code: 'Código',
    },
    contact: {
      label: 'Contato',
      heading: 'Vamos construir algo juntos?',
      body: 'Estou disponível para projetos, colaborações e oportunidades full-time.',
    },
    footer: {
      made: 'feito com React + Vite',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      badge: 'Available for new projects',
      description:
        'I craft elegant digital experiences — from UX research to production code. Focused on beautiful, accessible, and performant interfaces.',
      cta1: 'View Projects',
      cta2: 'Get in Touch',
    },
    about: {
      label: 'About',
      heading: ['Strategy that scales,', 'code that delivers.'],
      body: 'Product Designer with over 5 years of experience in high-complexity B2B product architecture. My approach is defined by the intersection of Strategic Design and Software Engineering, ensuring product vision is technically viable and scalable.',
      areas: [
        {
          title: 'Design Ops & Scalability',
          description: 'Track record in building Design Systems from scratch, unifying the experience across critical modules (Logistics, Trade Marketing and Services). Focus on reducing design technical debt and accelerating time-to-market.',
        },
        {
          title: 'Design Engineering (Vue.js)',
          description: 'Expert at bridging design and software development, building component libraries and ensuring high-fidelity handoffs that optimize engineering delivery cycles.',
        },
        {
          title: 'Agentic AI & Advanced Prototyping',
          description: 'Implementation of generative AI in the design workflow for dynamic prototyping and accelerated hypothesis validation, transforming manual processes into agile discovery cycles.',
        },
        {
          title: 'Complex B2B Systems',
          description: 'Expert at translating dense business rules into intuitive user journeys, balancing business objectives with technical feasibility in multi-sector ecosystems.',
        },
      ],
      closing: 'Focused on elevating the quality standard of digital products through consistent systems, systemic thinking, and intelligent automation. 🏳️‍🌈',
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
    },
    projects: {
      label: 'Projects',
      heading: 'Project experience',
      filters: { all: 'All', design: 'Design', dev: 'Dev', fullstack: 'Full-stack' },
      demo: 'Demo',
      code: 'Code',
    },
    contact: {
      label: 'Contact',
      heading: "Let's build something together?",
      body: 'Available for freelance projects, collaborations, and full-time opportunities.',
    },
    footer: {
      made: 'made with React + Vite',
    },
  },
} as const
