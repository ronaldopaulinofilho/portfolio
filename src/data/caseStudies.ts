export type CaseStudyBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'bullets'; items: string[] }
  | { type: 'numbered'; items: { title: string; text: string }[] }

export interface CaseStudySection {
  emoji: string
  title: string
  blocks: CaseStudyBlock[]
}

export interface CaseStudyLocale {
  title: string
  subtitle: string
  readMore: string
  meta: {
    roleLabel: string
    role: string
    durationLabel: string
    duration: string
    toolsLabel: string
    tools: string
    impactLabel: string
    impact: string
  }
  intro: string
  sections: CaseStudySection[]
}

export interface CaseStudy {
  id: string
  label: string
  images: string[]
  pt: CaseStudyLocale
  en: CaseStudyLocale
}

export const designSystemCase: CaseStudy = {
  id: 'ds-case-study',
  label: 'Case Study',
  images: [
    '/projects/design-system.png',
    '/projects/design-system-2.png',
    '/projects/design-system-3.png',
  ],
  pt: {
    title: 'Design System para SaaS B2B em Segmentos Diferentes',
    subtitle:
      '2 anos liderando o desenvolvimento, implementação e governança de um Design System proprietário para uma plataforma SaaS B2B complexa.',
    readMore: 'Ler case completo',
    meta: {
      roleLabel: 'Meu Papel',
      role: 'Lead Product Designer (Liderança, Arquitetura de Informação e Estratégia de Handoff)',
      durationLabel: 'Duração',
      duration: '2 anos',
      toolsLabel: 'Ferramentas / Tecnologias',
      tools: 'Figma (Variables, Component Properties), Figma Make (Prototipagem Ágil com IA), React (Validação Dinâmica), Vue.js (Biblioteca Proprietária Final) e Storybook',
      impactLabel: 'Impacto Principal',
      impact: 'Redução no tempo de entrega de novas features, eliminação de dívida técnica/estética e escalabilidade modular para novos segmentos B2B',
    },
    intro:
      'Este case documenta a liderança de 2 anos no desenvolvimento, implementação e governança de um Design System proprietário para uma plataforma SaaS B2B complexa.\n\nO produto atendia a múltiplos segmentos de mercado — incluindo operações robustas de Logística e gestão corporativa —, o que gerava fragmentação de interface e inconsistência nas regras de negócio.\n\nA iniciativa unificou a experiência do produto, centralizou regras operacionais e criou uma biblioteca própria de engenharia, transformando a eficiência dos times de produto.',
    sections: [
      {
        emoji: '🚀',
        title: 'O Desafio',
        blocks: [
          {
            type: 'paragraph',
            text: 'O ecossistema do nosso SaaS B2B havia crescido de forma acelerada para abraçar diferentes verticais de mercado, com destaque para a área de Logística (rastreamento, frotas, rotas complexas) e outros segmentos corporativos.\n\nEsse crescimento descentralizado gerou três grandes gargalos:',
          },
          {
            type: 'bullets',
            items: [
              'Inconsistência de Regras: O mesmo componente técnico (como tabelas de dados ou modais de ação) se comportava de formas diferentes dependendo do segmento da plataforma.',
              'Iniciativas recriavam componentes do zero a cada nova feature, e a engenharia duplicava código em bases distintas.',
              'Falta de Escalabilidade: Customizar a plataforma para um novo segmento de mercado demandava meses de refatoração de software e design.',
            ],
          },
          {
            type: 'paragraph',
            text: 'O objetivo estratégico era claro: unificar as regras de negócio, padronizar a interface e criar uma engrenagem de desenvolvimento escalável.',
          },
        ],
      },
      {
        emoji: '🔍',
        title: 'Estratégia e Alinhamento de Regras de Negócio',
        blocks: [
          {
            type: 'paragraph',
            text: 'Como líder da iniciativa, entendi que um Design System eficiente não é sobre "componentes bonitos", mas sobre eficiência operacional e tradução de regras de negócio em código reutilizável.',
          },
          { type: 'subheading', text: 'Auditoria de Interface e Processos' },
          {
            type: 'paragraph',
            text: 'Iniciamos mapeando todas as telas das verticais de logística e demais segmentos. Catalogamos centenas de variações de tabelas, layouts e fluxos de formulários.',
          },
          { type: 'subheading', text: 'Unificação das Regras B2B' },
          {
            type: 'paragraph',
            text: 'Reuni os Product Managers (PM) e Tech Leads de cada segmento para destrinchar as regras de negócio por trás das interfaces. O desafio era desenhar componentes flexíveis o suficiente para aguentar a densidade de dados que uma operação de logística exige (tabelas complexas, status de entrega, mapas), sem poluir a experiência de segmentos de mercado mais simples.',
          },
        ],
      },
      {
        emoji: '🛠️',
        title: 'O Processo: Da Ideação com Figma, IA à Biblioteca em Vue.js',
        blocks: [
          {
            type: 'paragraph',
            text: 'Ao longo de 2 anos, estruturamos um pipeline de design-to-code pioneiro, dividido em quatro etapas:',
          },
          {
            type: 'numbered',
            items: [
              {
                title: 'Padronização e Tokens no Figma',
                text: 'Construímos a fundação técnica utilizando os recursos mais avançados do Figma (como Variables e Component Properties). Centralizamos cores, tipografia, espaçamentos e raios de borda em uma estrutura de tokens preparada para suportar variações de marca ou modos de tela (dark/light mode).',
              },
              {
                title: 'Prototipagem de Alta Velocidade (Figma Make)',
                text: 'Para acelerar o processo de experimentação e desenho de novos fluxos, integramos ferramentas de IA generativa do Figma Make. Isso permitiu que o design gerasse iterações rápidas de layouts base, focando o tempo intelectual no que realmente importava: a arquitetura de informação e a usabilidade.',
              },
              {
                title: 'Protótipos Dinâmicos e Validação em React',
                text: 'Para garantir o comportamento real dos componentes e validar regras de negócio complexas de forma interativa, criamos protótipos dinâmicos em React. Essa etapa foi crucial para testar a experiência do usuário em tempo real antes de travar o desenvolvimento final. Permitiu realizar testes de usabilidade realistas com clientes das empresas de logística, simulando o comportamento exato que o usuário teria na plataforma em produção.',
              },
              {
                title: 'Handoff Estratégico e Biblioteca Proprietária em Vue.js',
                text: 'A etapa final e mais robusta do projeto foi o fechamento da ponte com a engenharia. Liderei o handoff focado na stack oficial da empresa: Vue.js. Trabalhei em estreita colaboração com os desenvolvedores frontend para traduzir o ecossistema do Figma para uma biblioteca de componentes própria em Vue.js, documentada via Storybook. Garantimos uma paridade de 96% na nomenclatura de tokens: o nome da variável de espaçamento ou cor no Figma era exatamente o mesmo mapeado no código Vue.js.',
              },
            ],
          },
        ],
      },
      {
        emoji: '📊',
        title: 'Resultados e Impacto',
        blocks: [
          {
            type: 'paragraph',
            text: 'O projeto de 2 anos transformou profundamente a cultura de produto e engenharia da empresa:',
          },
          {
            type: 'bullets',
            items: [
              'Escalabilidade entre Segmentos: A entrada da plataforma em uma nova vertical de negócio, que antes levava meses de planejamento de interface, passou a ser feita de forma modular, plugando os componentes existentes.',
              'Redução Drástica no Tempo da Equipe (Time-to-Market): O tempo de desenvolvimento de novas features e telas caiu drasticamente. Os desenvolvedores deixaram de criar CSS/HTML do zero e passaram a apenas consumir os componentes prontos da biblioteca em Vue.js.',
              'Modernização e Consistência Global: Eliminamos a maior parte da fragmentação. A plataforma ganhou um aspecto mais moderno, limpo, focado em alta densidade de dados para logística, sem perder a elegância para os outros segmentos.',
              'Eficiência de Design e Engenharia: Diminuiu o "ping-pong" de validação de interface. Os protótipos dinâmicos em React e a entrega final em Vue.js alinharam as expectativas.',
            ],
          },
        ],
      },
      {
        emoji: '🔥',
        title: 'Principais Aprendizados',
        blocks: [
          {
            type: 'bullets',
            items: [
              'Ferramentas como meio, não fim: Usar o Figma Make para acelerar o visual e o React para validar a dinâmica nos poupou meses de código desalinhado em Vue.js.',
              'Governança: Em um projeto de 2 anos, manter o Design System vivo exige criar rituais periódicos com os times para garantir que ninguém crie componentes "por fora" da biblioteca.',
            ],
          },
        ],
      },
    ],
  },
  en: {
    title: 'Design System for SaaS B2B across Different Segments',
    subtitle:
      '2 years leading the development, implementation and governance of a proprietary Design System for a complex SaaS B2B platform.',
    readMore: 'Read full case',
    meta: {
      roleLabel: 'My Role',
      role: 'Lead Product Designer (Leadership, Information Architecture and Handoff Strategy)',
      durationLabel: 'Duration',
      duration: '2 years',
      toolsLabel: 'Tools / Technologies',
      tools: 'Figma (Variables, Component Properties), Figma Make (Agile AI Prototyping), React (Dynamic Validation), Vue.js (Proprietary Final Library) and Storybook',
      impactLabel: 'Main Impact',
      impact: 'Reduction in feature delivery time, elimination of technical/aesthetic debt and modular scalability for new B2B segments',
    },
    intro:
      'This case documents 2 years of leadership in the development, implementation and governance of a proprietary Design System for a complex SaaS B2B platform.\n\nThe product served multiple market segments — including robust Logistics operations and corporate management —, which created interface fragmentation and inconsistency in business rules.\n\nThe initiative unified the product experience, centralized operational rules and created a proprietary engineering library, transforming the efficiency of product teams.',
    sections: [
      {
        emoji: '🚀',
        title: 'The Challenge',
        blocks: [
          {
            type: 'paragraph',
            text: 'The SaaS B2B ecosystem had grown rapidly to embrace different market verticals, with emphasis on the Logistics area (tracking, fleets, complex routes) and other corporate segments.\n\nThis decentralized growth created three major bottlenecks:',
          },
          {
            type: 'bullets',
            items: [
              'Rules Inconsistency: The same technical component (such as data tables or action modals) behaved differently depending on the platform segment.',
              'Constant rework: Initiatives rebuilt components from scratch for each new feature, and engineering duplicated code across separate codebases.',
              'Lack of Scalability: Customizing the platform for a new market segment required months of software and design refactoring.',
            ],
          },
          {
            type: 'paragraph',
            text: 'The strategic objective was clear: unify business rules, standardize the interface and create a scalable development engine.',
          },
        ],
      },
      {
        emoji: '🔍',
        title: 'Strategy and Business Rules Alignment',
        blocks: [
          {
            type: 'paragraph',
            text: 'As the initiative leader, I understood that an effective Design System is not about "beautiful components", but about operational efficiency and translating business rules into reusable code.',
          },
          { type: 'subheading', text: 'Interface and Process Audit' },
          {
            type: 'paragraph',
            text: 'We started by mapping all screens across logistics verticals and other segments. We catalogued hundreds of table variations, layouts and form flows.',
          },
          { type: 'subheading', text: 'B2B Rules Unification' },
          {
            type: 'paragraph',
            text: 'I gathered Product Managers (PM) and Tech Leads from each segment to dissect the business rules behind the interfaces. The challenge was to design components flexible enough to handle the data density a logistics operation requires (complex tables, delivery status, maps), without polluting the experience of simpler market segments.',
          },
        ],
      },
      {
        emoji: '🛠️',
        title: 'The Process: From Figma Ideation and AI to Vue.js Library',
        blocks: [
          {
            type: 'paragraph',
            text: 'Over 2 years, we structured a pioneering design-to-code pipeline, divided into four stages:',
          },
          {
            type: 'numbered',
            items: [
              {
                title: 'Figma Standardization and Tokens',
                text: "We built the technical foundation using Figma's most advanced features (Variables and Component Properties). We centralized colors, typography, spacing and border radius in a token structure prepared to support brand variations and screen modes (dark/light mode).",
              },
              {
                title: 'High-Speed Prototyping (Figma Make)',
                text: 'We integrated Figma Make generative AI tools to generate rapid iterations of base layouts, focusing intellectual effort on what really mattered: information architecture and usability.',
              },
              {
                title: 'Dynamic Prototypes and Validation in React',
                text: 'We created dynamic prototypes in React to validate complex business rules interactively before locking in the final development. This allowed realistic usability testing with logistics company clients, simulating the exact behavior users would experience in the production platform.',
              },
              {
                title: 'Strategic Handoff and Proprietary Vue.js Library',
                text: "The final and most robust stage was bridging the gap with engineering. I led the handoff focused on the company's official stack: Vue.js. We worked closely with frontend developers to translate the Figma ecosystem into a proprietary component library in Vue.js, documented via Storybook. We achieved 96% parity in token naming — the variable name in Figma was exactly the same as mapped in Vue.js code.",
              },
            ],
          },
        ],
      },
      {
        emoji: '📊',
        title: 'Results and Impact',
        blocks: [
          {
            type: 'paragraph',
            text: 'The 2-year project profoundly transformed product and engineering culture at the company:',
          },
          {
            type: 'bullets',
            items: [
              'Cross-Segment Scalability: Entering a new business vertical, which previously took months of interface planning, became modular — simply plugging in existing components.',
              'Dramatic Reduction in Time-to-Market: Development time for new features dropped drastically. Developers stopped creating CSS/HTML from scratch and simply consumed ready-made components from the Vue.js library.',
              'Modernization and Global Consistency: We eliminated most of the fragmentation. The platform gained a more modern, clean look focused on high data density for logistics, without losing elegance for other segments.',
              'Design and Engineering Efficiency: The interface validation "ping-pong" decreased. Dynamic prototypes in React and the final Vue.js delivery aligned team expectations.',
            ],
          },
        ],
      },
      {
        emoji: '🔥',
        title: 'Key Learnings',
        blocks: [
          {
            type: 'bullets',
            items: [
              'Tools as means, not ends: Using Figma Make to accelerate the visual layer and React to validate dynamic behavior saved us months of misaligned Vue.js code.',
              'Governance is culture: In a 2-year project, keeping the Design System alive requires creating periodic rituals with teams to ensure nobody creates components "outside" the library.',
            ],
          },
        ],
      },
    ],
  },
}
