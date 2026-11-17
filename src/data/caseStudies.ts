export type CaseStudyBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'media'; src: string }
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
    durationLabel?: string
    duration?: string
    toolsLabel: string
    tools: string
    impactLabel?: string
    impact?: string
  }
  intro: string
  /** Rótulo do botão que abre `demo`; obrigatório quando o case tem demo. */
  demoLabel?: string
  sections: CaseStudySection[]
}

export interface CaseStudy {
  id: string
  label: string
  cardRole: string
  cardStack: string
  video?: string
  /** Protótipo navegável servido de `public/`, aberto em nova aba. */
  demo?: string
  images: string[]
  pt: CaseStudyLocale
  en: CaseStudyLocale
}

export const designSystemCase: CaseStudy = {
  id: 'ds-case-study',
  label: 'Case Study',
  cardRole: 'Lead Product Designer',
  cardStack: 'Figma · React · Vue.js · Storybook',
  images: [
    '/projects/design-system.webp',
    '/projects/design-system-2.webp',
    '/projects/design-system-3.webp',
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

export const fluxCrmCase: CaseStudy = {
  id: 'flux-crm-case-study',
  label: 'Case Study',
  cardRole: 'Design Engineer',
  cardStack: 'Figma + MCP · React · TypeScript · Tailwind',
  video: '/projects/flux-demo.mp4',
  images: [
    '/projects/flux-kanban.mp4',
    '/projects/flux-dashboard.mp4',
    '/projects/flux-dark.mp4',
  ],
  pt: {
    title: 'Redesign de Plataforma e Integração com IA',
    subtitle:
      'Redesenhei as principais telas de um CRM omnichannel white-label e levei o front-end de padrões heterogêneos para um sistema de tokens único — com uma esteira de automação com IA ligando o design no Figma ao código em produção, sem parar a esteira de features.',
    readMore: 'Ler case completo',
    meta: {
      roleLabel: 'Meu Papel',
      role: 'Design Engineer — Front-end & Design de Interface (do Figma ao código em produção)',
      toolsLabel: 'Ferramentas / Tecnologias',
      tools: 'Figma + MCP (design-to-code), React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui (Radix), TanStack Query e SignalR',
    },
    intro:
      'Este case mostra como levei um CRM omnichannel white-label de um front-end com três gerações de padrões visuais para um sistema de design único em produção — construindo no caminho uma esteira de automação com IA que converte o design do Figma em código React real, validado navegando antes de chegar à produção.\n\nO produto concentra atendimento por WhatsApp, kanban de leads, campanhas, agentes de IA, relatórios e telefonia PABX numa plataforma multi-tenant: cada revenda personaliza cores e marca em tempo de execução, então nenhum componente pode assumir paleta fixa.\n\nA tensão que define o case: o produto não podia parar. O redesign aconteceu em PRs incrementais, com duas gerações de UI convivendo no mesmo build, enquanto o time mesclava 34 PRs de features nas mesmas semanas.',
    sections: [
      {
        emoji: '🎬',
        title: 'Produto em produção',
        blocks: [
          {
            type: 'paragraph',
            text: 'Um CRM em plena aceleração — atendimento em tempo real, leads no kanban, um módulo de telefonia nascendo — e uma interface sem padronização: três gerações visuais convivendo, telas confusas e usabilidade comprometida para quem passava o dia inteiro na ferramenta. Redesenhar era urgente.\n\nNada aqui era tela estática de cadastro: as principais superfícies do produto são densas, dinâmicas e multi-cliente — redesenhar sem quebrar comportamento foi a restrição número um.',
          },
          {
            type: 'bullets',
            items: [
              'Kanban rico com drag-and-drop: cards densos que precisam continuar arrastáveis — cada pixel interfere na área de clique do drag.',
              'Atendimento em tempo real (SignalR): a lista de conversas se reorganiza sozinha enquanto o atendente lê; o redesign precisou garantir estabilidade visual, sem saltos de layout.',
              'White-label em runtime: nenhum componente pode assumir paleta fixa — chips e badges derivam fundo, borda e contraste de texto por cálculo de luminância, para qualquer cor de marca.',
              'Multi-tenant com hierarquia de papéis: super admin, revenda, organização e atendente veem telas diferentes, incluindo impersonação com troca de tema ao vivo.',
              'Densidade omnichannel: canal, avatar, prévia, não-lidos, tags, produtos e prioridade num cartão compacto — hierarquizar sem virar ruído.',
              'Migração com o produto no ar: duas gerações de UI convivendo no mesmo build, sem congelamento de código.',
            ],
          },
        ],
      },
      {
        emoji: '🛠️',
        title: 'Design que vira código',
        blocks: [
          {
            type: 'paragraph',
            text: 'Specs estáticas e handoff tradicional não sobreviveriam a esse cenário. A aposta foi outra: fazer o design virar software desde o primeiro dia, com um protótipo navegável como fonte da verdade — e IA fazendo a ponte.',
          },
          {
            type: 'numbered',
            items: [
              {
                title: 'Desenhar os componentes no Figma',
                text: 'Biblioteca de componentes e telas desenhadas primeiro na ferramenta de design: cores, tipografia, espaçamentos e estados definidos visualmente antes de qualquer linha de código.',
              },
              {
                title: 'Converter em protótipo navegável via MCP',
                text: 'Com a integração MCP (Model Context Protocol) entre o Figma e o agente de IA, o design virou um app React + Vite + TypeScript real — 119 arquivos e ~10,9 mil linhas, com design system próprio, Leads, Conversas e PABX funcionais e styleguide documentado. Cada decisão validada navegando, não imaginando.',
              },
              {
                title: 'Portar os tokens 1:1 para o produto',
                text: 'Todas as variáveis do protótipo espelhadas em CSS (light + dark) e expostas no Tailwind com namespaces novos — surface, ink, hairline — desenhados para não colidir com os slots que o shadcn/ui já usava.',
              },
              {
                title: 'Migrar tela a tela e escrever as regras',
                text: 'Leads, Conversas, Dashboard, PABX e telas administrativas migradas em PRs sucessivos, cada um convivendo com o legado restante. As decisões viraram documento para que qualquer pessoa do time construa telas novas na geração certa.',
              },
            ],
          },
          { type: 'subheading', text: 'A esteira de automação com IA' },
          {
            type: 'paragraph',
            text: 'O centro do método foi construir uma esteira de automação com IA entre a ferramenta de design e o código: em vez de handoff tradicional (specs, prints e tradução manual), o design vira software real de forma assistida — e cada decisão é validada usando, não imaginando.',
          },
          {
            type: 'bullets',
            items: [
              'Design-to-code via MCP: a integração entre o Figma e o agente de IA lê a biblioteca de componentes desenhada e gera código React + TypeScript real — o protótipo navegável de 119 arquivos e ~10,9 mil linhas nasceu dessa esteira, não de tradução manual de telas.',
              'Iteração em minutos, não em sprints: ajustes no design regeneram as telas correspondentes no protótipo; erros de experiência são encontrados e corrigidos antes de chegarem ao código caro de produção.',
              'Tokens sincronizados de ponta a ponta: as variáveis do Figma fluem para CSS (light + dark) e Tailwind com paridade 1:1 — uma mudança de identidade visual vira um diff de variáveis revisável em PR.',
              'IA com supervisão de design: o agente acelera a conversão, mas cada tela gerada passa por crivo de fidelidade visual e de comportamento antes de virar referência — automação a serviço do rigor, não no lugar dele.',
            ],
          },
          { type: 'media', src: '/projects/flux-kanban.mp4' },
        ],
      },
      {
        emoji: '🎨',
        title: 'A nova linguagem visual em produção',
        blocks: [
          {
            type: 'paragraph',
            text: 'Do protótipo saiu uma linguagem visual única. Ela migrou para o produto tela a tela, em PRs que conviviam com o legado — nenhum congelamento, nenhum big bang.',
          },
          {
            type: 'bullets',
            items: [
              'Superfícies separadas por sombra, não por borda — sem border em containers de conteúdo.',
              'Sete níveis de tinta para texto no lugar de cinzas ad hoc.',
              'Tons semânticos em chips soft — fundo a 14%, borda a 28%, texto escurecido por luminância; o mesmo chip é idêntico no chat, na lista de conversas e no kanban.',
              'White-label preservado — os tokens convivem com as variáveis de runtime por revenda; contraste derivado matematicamente de qualquer cor de marca.',
              'Primitivos compartilhados: BrandChip, SearchInput, Segmented, HeaderPage, helpers de cor e shell do módulo PABX — quando o padrão muda, muda num arquivo só.',
            ],
          },
          { type: 'subheading', text: 'Tela a tela: o que foi entregue' },
          {
            type: 'bullets',
            items: [
              'Leads: kanban e tabela redesenhados com o cartão do protótipo + port completo dos design tokens — 52 arquivos num único PR.',
              'Conversas: lista como cartões elevados com prévia da última mensagem e canal; chat com bolhas, cabeçalho e input redesenhados; filtros como pílulas com contadores.',
              'Dashboard: faixa de KPIs, distribuição multi-gráfico e tabela de leads recentes com paginação própria.',
              'PABX (módulo novo): Filas e Troncos SIP completos sobre mock-first, com alternador CRM ⇄ PABX na sidebar — o back-end pluga sem retrabalho de interface.',
              'Organizações & Revendas: cartões administrativos, modais e fluxos de criação alinhados à linguagem nova.',
              'Qualidade transversal: tipografia unificada em Inter com remoção de 100 compensações de alinhamento em 29 arquivos.',
              'Documentação (~1,2 mil linhas): convenções de UI, docs funcional e técnica do PABX e mapa protótipo → produto.',
            ],
          },
          { type: 'media', src: '/projects/flux-dashboard.mp4' },
        ],
      },
      {
        emoji: '✨',
        title: 'O que mudou e o que fica',
        blocks: [
          {
            type: 'paragraph',
            text: 'No fim, a interface que cada revenda apresenta ao seu cliente parece — e é — um produto só. Para quem opera o CRM o dia inteiro, a diferença se sente no gesto:',
          },
          {
            type: 'bullets',
            items: [
              'Decisão sem clique no atendimento: prévia, canal e não-lidos direto no cartão — o atendente escolhe a conversa certa sem abrir uma a uma.',
              'Contexto que não some: "a página não rola — a lista rola"; KPIs, cabeçalho e paginação permanecem ancorados.',
              'Aprendeu uma tela, sabe todas: busca, filtros, abas e ações no mesmo lugar em Leads, Conversas, Dashboard e PABX.',
              'Estados legíveis em qualquer marca, no tema claro e no escuro — dark mode com tokens próprios, não inversão automática.',
              'Time constrói mais rápido e erra menos: convenções escritas e primitivos compartilhados substituem cinco receitas por uma.',
              'Entrega sem interromper o roadmap: redesign em PRs incrementais enquanto o time mesclava 34 PRs de features.',
            ],
          },
          { type: 'media', src: '/projects/flux-dark.mp4' },
          { type: 'subheading', text: 'O que fica — aprendizados' },
          {
            type: 'bullets',
            items: [
              'Design engineering: transitar entre design e código sem perder fidelidade — quem desenha também implementa.',
              'Automação com IA no fluxo de design: orquestrar MCP e agentes para converter design em código multiplica a velocidade — desde que exista supervisão de fidelidade e um sistema de tokens que ancore o resultado.',
              'Migração incremental em produto vivo: PRs pequenos e reversíveis, duas gerações de UI convivendo sem quebrar — nenhum congelamento de código.',
              'Validação antes do código caro: cada fluxo foi usado no protótipo navegável antes de chegar à produção — erros de experiência corrigidos onde custam minutos, não sprints.',
              'Escrita técnica com público-alvo: documentação em três registros — produto/suporte, engenharia e design.',
              'Rigor visual como requisito: contraste calculado, métricas de fonte e alinhamento ao pixel tratados como critério de aceite.',
            ],
          },
        ],
      },
    ],
  },
  en: {
    title: 'Platform Redesign & AI Integration',
    subtitle:
      'I redesigned the main screens of a white-label omnichannel CRM and took the front-end from heterogeneous patterns to a single token system — with an AI automation pipeline connecting Figma design to production code, without stopping the feature pipeline.',
    readMore: 'Read full case',
    meta: {
      roleLabel: 'My Role',
      role: 'Design Engineer — Front-end & Interface Design (from Figma to production code)',
      toolsLabel: 'Tools / Technologies',
      tools: 'Figma + MCP (design-to-code), React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui (Radix), TanStack Query and SignalR',
    },
    intro:
      'This case shows how I took a white-label omnichannel CRM from a front-end with three generations of visual patterns to a single design system in production — building along the way an AI automation pipeline that converts Figma design into real React code, validated by navigating before reaching production.\n\nThe product concentrates WhatsApp support, leads kanban, campaigns, AI agents, reports and PBX telephony in a multi-tenant platform: each reseller customizes colors and branding at runtime, so no component can assume a fixed palette.\n\nThe tension that defines this case: the product could not stop. The redesign happened in incremental PRs, with two UI generations coexisting in the same build, while the team merged 34 feature PRs in those same weeks.',
    sections: [
      {
        emoji: '🎬',
        title: 'A product in production',
        blocks: [
          {
            type: 'paragraph',
            text: "A CRM in full acceleration — real-time support, leads on the kanban, a telephony module being born — and an interface without standardization: three visual generations coexisting, confusing screens and compromised usability for those spending the whole day in the tool. Redesigning was urgent.\n\nNothing here was a static CRUD screen: the product's main surfaces are dense, dynamic and multi-client — redesigning without breaking behavior was constraint number one.",
          },
          {
            type: 'bullets',
            items: [
              'Rich kanban with drag-and-drop: dense cards that must remain draggable — every pixel affects the drag hit area.',
              'Real-time support (SignalR): the conversation list reorders itself while the agent reads; the redesign had to guarantee visual stability, with no layout jumps.',
              'White-label at runtime: no component can assume a fixed palette — chips and badges derive background, border and text contrast via luminance calculation, for any brand color.',
              'Multi-tenant role hierarchy: super admin, reseller, organization and agent see different screens, including impersonation with live theme switching.',
              'Omnichannel density: channel, avatar, preview, unread count, tags, products and priority in one compact card — hierarchy without noise.',
              'Migration with the product live: two UI generations coexisting in the same build, with no code freeze.',
            ],
          },
        ],
      },
      {
        emoji: '🛠️',
        title: 'Design that becomes code',
        blocks: [
          {
            type: 'paragraph',
            text: 'Static specs and traditional handoff would not survive this scenario. The bet was different: make the design become software from day one, with a navigable prototype as the source of truth — and AI building the bridge.',
          },
          {
            type: 'numbered',
            items: [
              {
                title: 'Design the components in Figma',
                text: 'Component library and screens designed first in the design tool: colors, typography, spacing and states defined visually before any line of code.',
              },
              {
                title: 'Convert to a navigable prototype via MCP',
                text: 'With the MCP (Model Context Protocol) integration between Figma and the AI agent, the design became a real React + Vite + TypeScript app — 119 files and ~10.9k lines, with its own design system, functional Leads, Conversations and PBX screens, and a documented styleguide. Every decision validated by navigating, not imagining.',
              },
              {
                title: 'Port the tokens 1:1 to the product',
                text: 'All prototype variables mirrored in CSS (light + dark) and exposed in Tailwind under new namespaces — surface, ink, hairline — designed not to collide with the slots shadcn/ui already used.',
              },
              {
                title: 'Migrate screen by screen and write down the rules',
                text: 'Leads, Conversations, Dashboard, PBX and admin screens migrated in successive PRs, each coexisting with the remaining legacy. Decisions became a document so anyone on the team builds new screens in the right generation.',
              },
            ],
          },
          { type: 'subheading', text: 'The AI automation pipeline' },
          {
            type: 'paragraph',
            text: 'The core of the method was building an AI automation pipeline between the design tool and the code: instead of traditional handoff (specs, screenshots and manual translation), the design becomes real software with AI assistance — and every decision is validated by using it, not imagining it.',
          },
          {
            type: 'bullets',
            items: [
              'Design-to-code via MCP: the integration between Figma and the AI agent reads the designed component library and generates real React + TypeScript code — the navigable prototype of 119 files and ~10.9k lines was born from this pipeline, not from manual screen translation.',
              'Iteration in minutes, not sprints: design adjustments regenerate the corresponding prototype screens; UX mistakes are found and fixed before they reach expensive production code.',
              'Tokens synced end to end: Figma variables flow into CSS (light + dark) and Tailwind with 1:1 parity — a visual identity change becomes a reviewable variable diff in a PR.',
              'AI under design supervision: the agent accelerates the conversion, but every generated screen goes through visual and behavioral fidelity review before becoming reference — automation in service of rigor, not in place of it.',
            ],
          },
          { type: 'media', src: '/projects/flux-kanban.mp4' },
        ],
      },
      {
        emoji: '🎨',
        title: 'The new visual language in production',
        blocks: [
          {
            type: 'paragraph',
            text: 'Out of the prototype came a single visual language. It migrated to the product screen by screen, in PRs coexisting with the legacy — no freeze, no big bang.',
          },
          {
            type: 'bullets',
            items: [
              'Surfaces separated by shadow, not border — no border on content containers.',
              'Seven ink levels for text instead of ad hoc grays.',
              'Semantic tones as soft chips — 14% background, 28% border, luminance-darkened text; the same chip is identical in chat, conversation list and kanban.',
              'White-label preserved — tokens coexist with per-reseller runtime variables; contrast derived mathematically from any brand color.',
              'Shared primitives: BrandChip, SearchInput, Segmented, HeaderPage, color helpers and the PBX module shell — when the pattern changes, it changes in one file.',
            ],
          },
          { type: 'subheading', text: 'Screen by screen: what was delivered' },
          {
            type: 'bullets',
            items: [
              'Leads: kanban and table redesigned with the prototype card + full design token port — 52 files in a single PR.',
              'Conversations: list as elevated cards with last-message preview and channel; chat with redesigned bubbles, header and input; filters as pills with counters.',
              'Dashboard: KPI strip, multi-chart distribution and recent leads table with its own pagination.',
              'PBX (new module): complete Queues and SIP Trunks screens built mock-first, with a CRM ⇄ PBX switcher in the sidebar — the back-end plugs in with zero interface rework.',
              'Organizations & Resellers: admin cards, modals and creation flows aligned to the new visual language.',
              'Cross-cutting quality: typography unified in Inter, removing 100 alignment compensations across 29 files.',
              'Documentation (~1.2k lines): UI conventions, functional and technical PBX docs, and a prototype → product map.',
            ],
          },
          { type: 'media', src: '/projects/flux-dashboard.mp4' },
        ],
      },
      {
        emoji: '✨',
        title: 'What changed and what remains',
        blocks: [
          {
            type: 'paragraph',
            text: 'In the end, the interface each reseller presents to its clients looks — and is — one single product. For those operating the CRM all day, the difference is felt in the gesture:',
          },
          {
            type: 'bullets',
            items: [
              'Zero-click triage in support: preview, channel and unread count right on the card — the agent picks the right conversation without opening them one by one.',
              'Context that never disappears: "the page does not scroll — the list scrolls"; KPIs, header and pagination stay anchored.',
              'Learn one screen, know them all: search, filters, tabs and actions in the same place across Leads, Conversations, Dashboard and PBX.',
              'Readable states under any brand, in light and dark themes — dark mode with its own tokens, not automatic inversion.',
              'The team builds faster and errs less: written conventions and shared primitives replace five recipes with one.',
              'Delivery without interrupting the roadmap: incremental redesign PRs while the team merged 34 feature PRs.',
            ],
          },
          { type: 'media', src: '/projects/flux-dark.mp4' },
          { type: 'subheading', text: 'What remains — learnings' },
          {
            type: 'bullets',
            items: [
              'Design engineering: moving between design and code without losing fidelity — the one who designs also implements.',
              'AI automation in the design workflow: orchestrating MCP and agents to convert design into code multiplies speed — as long as there is fidelity supervision and a token system anchoring the result.',
              'Incremental migration in a live product: small, reversible PRs, two UI generations coexisting without breaking — no code freeze.',
              'Validation before expensive code: every flow was used in the navigable prototype before reaching production — UX mistakes fixed where they cost minutes, not sprints.',
              'Technical writing with an audience: documentation in three registers — product/support, engineering and design.',
              'Visual rigor as a requirement: computed contrast, font metrics and pixel alignment treated as acceptance criteria.',
            ],
          },
        ],
      },
    ],
  },
}


/**
 * Estudo próprio, não trabalho de cliente: por isso o rótulo do cartão é
 * "Estudo" e não "Case Study".
 *
 * Aqui vai o material completo, incluindo os componentes que ficaram de fora
 * do carrossel do LinkedIn. O carrossel tem limite de atenção; a página não.
 */
export const uiParaIaCase: CaseStudy = {
  id: 'ui-para-ia-estudo',
  label: 'Estudo',
  cardRole: 'Autoria e design',
  cardStack: 'Design de interface · Padrões de IA · Front-end',
  images: [
    '/projects/ui-ia-capa.webp',
    '/projects/ui-ia-perguntas.webp',
    '/projects/ui-ia-progresso.webp',
    '/projects/ui-ia-toolcall.webp',
    '/projects/ui-ia-fontes.webp',
  ],
  pt: {
    title: 'Componentes de UI para Interfaces de IA',
    subtitle:
      'Um mapa dos componentes que uma interface conversacional precisa ter, organizado pelas três perguntas que o usuário faz o tempo todo mesmo sem formular: o que está acontecendo, posso confiar nisso e ainda estou no controle.',
    readMore: 'Ler o estudo',
    meta: {
      roleLabel: 'O que é',
      role: 'Estudo autoral sobre padrões de interface para produtos construídos sobre modelos de linguagem',
      toolsLabel: 'Temas',
      tools: 'Streaming, chamadas de ferramenta, citação de fontes, confirmação de ação, estados de carregamento, histórico de versões e acessibilidade',
    },
    intro:
      'Quando a interface passa a conversar com um modelo, a maior parte do repertório de UI continua valendo — e é justamente isso que costuma passar despercebido. Estado de carregamento, feedback de progresso, confirmação antes de ação destrutiva e histórico de versão são padrões antigos. O que mudou é que o sistema virou não determinístico, e o custo de errar em silêncio ficou alto.\n\nEste estudo organiza os componentes em torno de três perguntas que o usuário faz o tempo todo, mesmo sem formular. Quando a interface não responde a elas, a desconfiança aparece — e com razão.',
    sections: [
      {
        emoji: '🧭',
        title: 'As três perguntas',
        blocks: [
          { type: 'media', src: '/projects/ui-ia-perguntas.webp' },
          {
            type: 'paragraph',
            text: 'A estrutura não veio de uma taxonomia de componentes, mas do que o usuário quer saber. Cada peça da interface existe para responder a uma das três, e componente que não responde a nenhuma costuma ser decoração.',
          },
          {
            type: 'numbered',
            items: [
              {
                title: 'O que está acontecendo agora?',
                text: 'Progresso, raciocínio e ações externas visíveis. Sem isso, o usuário encara uma tela parada e não sabe se o sistema trabalha ou travou.',
              },
              {
                title: 'Posso confiar nisso?',
                text: 'Fontes, citações e detalhes que dá para inspecionar. Texto bem escrito erra com confiança, e a interface precisa dar como verificar.',
              },
              {
                title: 'Ainda estou no controle?',
                text: 'Interromper, confirmar, editar e refazer. A sensação de controle não vem de o modelo acertar sempre, vem de dar para corrigir quando ele erra.',
              },
            ],
          },
        ],
      },
      {
        emoji: '✍️',
        title: 'Antes de tudo: formular o pedido',
        blocks: [
          { type: 'media', src: '/projects/ui-ia-campo.webp' },
          {
            type: 'paragraph',
            text: 'O campo de mensagem é mais que uma área de texto. Ele carrega anexos, expõe as opções que mudam o resultado e troca de papel conforme o estado da conversa.',
          },
          {
            type: 'numbered',
            items: [
              {
                title: 'Upload em andamento bloqueia o envio',
                text: 'Enviar com um anexo pela metade produz uma resposta sobre um documento incompleto. O botão espera o upload terminar.',
              },
              {
                title: 'Opções que mudam o resultado ficam à vista',
                text: 'Escolha de modelo e busca na web alteram a resposta. Esconder isso num menu faz o usuário atribuir ao acaso uma variação que ele mesmo causou.',
              },
              {
                title: 'Durante a geração, enviar vira interromper',
                text: 'O mesmo botão, outro papel. Evita o padrão comum de sumir com o controle justo quando ele é mais necessário.',
              },
            ],
          },
        ],
      },
      {
        emoji: '⏱️',
        title: 'O que está acontecendo agora?',
        blocks: [
          { type: 'subheading', text: 'Progresso que diz o que está sendo feito' },
          { type: 'media', src: '/projects/ui-ia-progresso.webp' },
          {
            type: 'paragraph',
            text: 'Um spinner não responde à pergunta. Etapa em linguagem humana e tempo decorrido, sim. E nada de porcentagem inventada: barra que avança sem relação com o trabalho real ensina o usuário a não confiar no indicador. Ao terminar, as etapas se recolhem numa linha só, para não ocupar espaço depois de cumprirem a função.',
          },
          { type: 'subheading', text: 'Raciocínio que não compete com a resposta' },
          { type: 'media', src: '/projects/ui-ia-raciocinio.webp' },
          {
            type: 'paragraph',
            text: 'O raciocínio fica aberto enquanto é gerado e se recolhe sozinho ao terminar, com tipografia mais discreta que a da resposta. Ele é contexto, não conteúdo principal — e quando disputa atenção com a resposta, atrapalha a leitura do que de fato importa.',
          },
          { type: 'subheading', text: 'Ações fora da conversa, à vista' },
          { type: 'media', src: '/projects/ui-ia-toolcall.webp' },
          {
            type: 'paragraph',
            text: 'Quando o modelo chama uma ferramenta, o usuário precisa ver o que foi chamado, com quais dados e o que voltou. Uma chamada de ferramenta, ou tool call, passa por quatro estados, e cada um pede tratamento visual próprio.',
          },
          {
            type: 'bullets',
            items: [
              'Preenchendo: o nome da ferramenta e os parâmetros ainda chegando',
              'Executando: parâmetros completos, execução em andamento',
              'Concluída: resultado resumido, com detalhes expansíveis',
              'Com erro: mensagem legível e opção de tentar de novo',
            ],
          },
          {
            type: 'paragraph',
            text: 'Quando o resultado merece, vale um componente feito para ele em vez do JSON cru: a mesma consulta de estoque lida muito melhor como lista com indicadores de status do que como objeto. O JSON continua disponível para quem quiser inspecionar, só não é a primeira coisa que aparece.',
          },
        ],
      },
      {
        emoji: '🔎',
        title: 'Posso confiar nisso?',
        blocks: [
          { type: 'media', src: '/projects/ui-ia-fontes.webp' },
          {
            type: 'paragraph',
            text: 'A diferença entre uma resposta útil e uma afirmação sem lastro é poder checar de onde ela veio. A referência fica curta ao lado da afirmação, a prévia aparece ao passar o mouse ou ao focar pelo teclado, e a lista completa fica recolhida no fim.',
          },
          {
            type: 'paragraph',
            text: 'O detalhe que faz diferença é a prévia trazer o trecho exato, destacado dentro do documento de origem. Citar o arquivo prova pouco; citar a linha prova. E como a prévia responde a foco por teclado, não só a mouse, ela continua acessível para quem navega sem apontador.',
          },
          {
            type: 'paragraph',
            text: 'Na mesma família entram a resposta que chega em partes e o streaming estável. Texto que aparece aos poucos reduz a espera percebida, mas só funciona se não ficar reposicionando o que já foi lido a cada token novo.',
          },
        ],
      },
      {
        emoji: '🎛️',
        title: 'Ainda estou no controle?',
        blocks: [
          { type: 'subheading', text: 'Pedir licença antes de agir' },
          { type: 'media', src: '/projects/ui-ia-licenca.webp' },
          {
            type: 'paragraph',
            text: 'Quando a ação sai da conversa e toca o mundo real, a interface pede confirmação. A ação é descrita em linguagem humana, os dados exatos ficam à vista e editáveis ali mesmo, e confirmar e recusar têm o mesmo peso visual — recusa escondida não é recusa.',
          },
          { type: 'subheading', text: 'Refazer, editar, avaliar' },
          { type: 'media', src: '/projects/ui-ia-refazer.webp' },
          {
            type: 'paragraph',
            text: 'Gerar outra versão sem perder as anteriores, e poder editar o próprio pedido para abrir um caminho diferente. É o equivalente ao histórico de versões, e é o que transforma uma resposta ruim em ponto de partida em vez de beco sem saída.',
          },
          { type: 'subheading', text: 'Um espaço próprio para o que vai ser guardado' },
          { type: 'media', src: '/projects/ui-ia-espaco.webp' },
          {
            type: 'paragraph',
            text: 'Quando o resultado é um documento, ele não deveria viver rolando dentro da conversa. Um painel fixo ao lado mantém o texto estável, o ajuste acontece só no trecho marcado, e as mudanças ficam destacadas com as versões acessíveis.',
          },
          {
            type: 'paragraph',
            text: 'Vale notar que quase nada disso é novo. São padrões conhecidos de interface — estado de carga, confirmação destrutiva, histórico de versão — reaplicados a um sistema que agora responde de forma diferente a cada execução.',
          },
        ],
      },
    ],
  },
  en: {
    title: 'UI Components for AI Interfaces',
    subtitle:
      'A map of the components a conversational interface needs, organised around the three questions users ask all the time without ever phrasing them: what is happening, can I trust this, and am I still in control.',
    readMore: 'Read the study',
    meta: {
      roleLabel: 'What this is',
      role: 'A self-directed study on interface patterns for products built on language models',
      toolsLabel: 'Topics',
      tools: 'Streaming, tool calls, source citation, action confirmation, loading states, version history and accessibility',
    },
    intro:
      'When an interface starts talking to a model, most of the existing UI repertoire still applies — and that is exactly what tends to go unnoticed. Loading states, progress feedback, confirmation before destructive actions and version history are old patterns. What changed is that the system became non-deterministic, and failing silently got expensive.\n\nThis study organises the components around three questions users ask constantly without phrasing them. When the interface leaves them unanswered, distrust follows — and rightly so.',
    sections: [
      {
        emoji: '🧭',
        title: 'The three questions',
        blocks: [
          { type: 'media', src: '/projects/ui-ia-perguntas.webp' },
          {
            type: 'paragraph',
            text: 'The structure did not come from a taxonomy of components but from what the user wants to know. Every piece of the interface exists to answer one of the three, and a component that answers none is usually decoration.',
          },
          {
            type: 'numbered',
            items: [
              {
                title: 'What is happening right now?',
                text: 'Progress, reasoning and external actions made visible. Without them the user faces a still screen with no way to tell whether the system is working or stuck.',
              },
              {
                title: 'Can I trust this?',
                text: 'Sources, citations and details that can be inspected. Well-written text gets things wrong with confidence, and the interface has to offer a way to verify.',
              },
              {
                title: 'Am I still in control?',
                text: 'Stop, confirm, edit and retry. The sense of control does not come from the model always being right, it comes from being able to correct it when it is not.',
              },
            ],
          },
        ],
      },
      {
        emoji: '✍️',
        title: 'First of all: composing the request',
        blocks: [
          { type: 'media', src: '/projects/ui-ia-campo.webp' },
          {
            type: 'paragraph',
            text: 'The message field is more than a text area. It carries attachments, surfaces the options that change the outcome, and shifts role depending on the state of the conversation.',
          },
          {
            type: 'numbered',
            items: [
              {
                title: 'An upload in progress blocks sending',
                text: 'Sending with a half-uploaded attachment produces an answer about an incomplete document. The button waits for the upload to finish.',
              },
              {
                title: 'Options that change the result stay visible',
                text: 'Model choice and web search change the answer. Hiding them in a menu makes users attribute to chance a variation they caused themselves.',
              },
              {
                title: 'While generating, send becomes stop',
                text: 'Same button, different role. It avoids the common pattern of removing the control exactly when it is most needed.',
              },
            ],
          },
        ],
      },
      {
        emoji: '⏱️',
        title: 'What is happening right now?',
        blocks: [
          { type: 'subheading', text: 'Progress that says what is being done' },
          { type: 'media', src: '/projects/ui-ia-progresso.webp' },
          {
            type: 'paragraph',
            text: 'A spinner does not answer the question. A step in plain language and the elapsed time do. And no invented percentages: a bar moving with no relation to the actual work teaches users to distrust the indicator. Once finished, the steps collapse into a single line so they stop taking space after serving their purpose.',
          },
          { type: 'subheading', text: 'Reasoning that does not compete with the answer' },
          { type: 'media', src: '/projects/ui-ia-raciocinio.webp' },
          {
            type: 'paragraph',
            text: 'Reasoning stays open while it is generated and collapses on its own once finished, set in quieter type than the answer. It is context, not the main content — and when it competes with the answer, it gets in the way of reading what actually matters.',
          },
          { type: 'subheading', text: 'Actions outside the conversation, in plain sight' },
          { type: 'media', src: '/projects/ui-ia-toolcall.webp' },
          {
            type: 'paragraph',
            text: 'When the model calls a tool, the user needs to see what was called, with which data, and what came back. A call goes through four states, and each one deserves its own visual treatment.',
          },
          {
            type: 'bullets',
            items: [
              'Streaming input: the tool name and parameters still arriving',
              'Input available: parameters complete, execution under way',
              'Output available: a summarised result with expandable detail',
              'Output error: a readable message and a way to try again',
            ],
          },
          {
            type: 'paragraph',
            text: 'When the result deserves it, a purpose-built component beats raw JSON: the same stock query reads far better as a list with status indicators than as an object. The JSON stays available for anyone who wants to inspect it, it just is not the first thing shown.',
          },
        ],
      },
      {
        emoji: '🔎',
        title: 'Can I trust this?',
        blocks: [
          { type: 'media', src: '/projects/ui-ia-fontes.webp' },
          {
            type: 'paragraph',
            text: 'The difference between a useful answer and an ungrounded claim is being able to check where it came from. The reference sits short and inline next to the claim, the preview appears on hover or keyboard focus, and the full list stays collapsed at the end.',
          },
          {
            type: 'paragraph',
            text: 'The detail that matters is the preview carrying the exact passage, highlighted inside the source document. Citing the file proves little; citing the line proves it. And because the preview responds to keyboard focus, not just hover, it stays available to anyone navigating without a pointer.',
          },
          {
            type: 'paragraph',
            text: 'The same family includes answers that arrive in parts and stable streaming. Text appearing gradually reduces perceived waiting, but only works if it stops repositioning what has already been read on every new token.',
          },
        ],
      },
      {
        emoji: '🎛️',
        title: 'Am I still in control?',
        blocks: [
          { type: 'subheading', text: 'Asking permission before acting' },
          { type: 'media', src: '/projects/ui-ia-licenca.webp' },
          {
            type: 'paragraph',
            text: 'When an action leaves the conversation and touches the real world, the interface asks for confirmation. The action is described in plain language, the exact data stays visible and editable right there, and confirm and decline carry the same visual weight — a hidden decline is not a decline.',
          },
          { type: 'subheading', text: 'Retry, edit, rate' },
          { type: 'media', src: '/projects/ui-ia-refazer.webp' },
          {
            type: 'paragraph',
            text: 'Generating another version without losing the previous ones, and being able to edit the request itself to open a different path. It is the equivalent of version history, and it is what turns a bad answer into a starting point rather than a dead end.',
          },
          { type: 'subheading', text: 'A dedicated space for what will be kept' },
          { type: 'media', src: '/projects/ui-ia-espaco.webp' },
          {
            type: 'paragraph',
            text: 'When the result is a document, it should not live scrolling inside the conversation. A panel fixed alongside keeps the text stable, edits happen only on the selected passage, and changes stay highlighted with versions within reach.',
          },
          {
            type: 'paragraph',
            text: 'It is worth noting that almost none of this is new. These are familiar interface patterns — loading states, destructive confirmation, version history — reapplied to a system that now answers differently on every run.',
          },
        ],
      },
    ],
  },
}

/**
 * Atividade prática de processo seletivo, publicada sem o nome do produto nem
 * da empresa: o cenário é fictício e o diagnóstico usou uma conta de teste.
 * As imagens são só do material autoral (tela redesenhada, componentes e plano),
 * nunca prints do produto original.
 */
export const softwareJuridicoCase: CaseStudy = {
  id: 'software-juridico-case-study',
  label: 'Case Study',
  cardRole: 'UX Designer & UX Engineer',
  cardStack: 'Figma · Design Tokens · HTML/CSS/JS · MCP',
  demo: '/demos/software-juridico/index.html',
  images: [
    '/projects/juridico-tela.webp',
    '/projects/juridico-componentes.webp',
    '/projects/juridico-plano.webp',
  ],
  pt: {
    title: 'Redesign Incremental de um Software Jurídico',
    subtitle:
      'Diagnóstico, plano de design system para 12 meses e a primeira tela da nova direção para a gestão de atividades de um software usado por escritórios de advocacia — onde perder um prazo pode custar o direito do cliente.',
    readMore: 'Ler case completo',
    demoLabel: 'Abrir o protótipo navegável',
    meta: {
      roleLabel: 'Meu Papel',
      role: 'UX Designer & UX Engineer — diagnóstico, estratégia de design system, UI e protótipo em código (autoria individual)',
      toolsLabel: 'Ferramentas / Tecnologias',
      tools: 'Figma, tokens gerados de uma fonte única (Figma e CSS), protótipo navegável em HTML/CSS/JS, servidor MCP do design system em Node.js, heurísticas de Nielsen e WCAG 2.2',
      impactLabel: 'Contexto',
      impact: 'Atividade prática de processo seletivo para UX Designer Especialista, com cenário fictício proposto pela empresa. Diagnóstico feito numa conta de teste do produto real; tela e componentes com dados fictícios.',
    },
    intro:
      'Um software de gestão para escritórios de advocacia cresceu por muitos anos com times diferentes construindo partes diferentes. O resultado: padrões que variam entre módulos, componentes duplicados e uma interface que não transmitia mais a modernidade que a empresa queria.\n\nO desafio era propor como modernizar a experiência em 12 meses com restrições bem reais: o produto não pode parar, telas novas e legadas vão conviver durante a migração do front-end, não existe design system estruturado, quatro designers trabalham em squads diferentes sem se reportar a mim, e recursos de IA precisam nascer dentro dos mesmos padrões.\n\nO recorte foi a gestão de atividades — Agenda, Área de Trabalho e Kanban —, onde o advogado controla prazos processuais.',
    sections: [
      {
        emoji: '🧪',
        title: 'Discovery: como cheguei ao diagnóstico',
        blocks: [
          {
            type: 'paragraph',
            text: 'Antes de propor qualquer tela, montei um roteiro de investigação com quatro fontes e uma regra: cada falha precisa estar ligada a uma regra de avaliação e a uma evidência, e o que não tem evidência fica marcado como hipótese.',
          },
          { type: 'media', src: '/projects/juridico-discovery.webp' },
          { type: 'subheading', text: 'Exploração guiada do produto' },
          {
            type: 'paragraph',
            text: 'Usei a conta de teste com um roteiro de captura: visões de Agenda, Área de Trabalho e Kanban; a mesma atividade vista nas três; criação e edição; estados vazio, de erro e de carregamento; navegação entre módulos; e sinais de acessibilidade, como prazo indicado só por cor. Foram 27 prints anotados.',
          },
          { type: 'subheading', text: 'Auditoria heurística' },
          {
            type: 'paragraph',
            text: 'Passei as telas pelas 10 heurísticas de Nielsen e por 18 critérios da WCAG 2.2 (níveis A e AA), escolhidos pelo que importa nesse contexto: uso de cor em prazos, contraste em uso prolongado, teclado no fluxo principal e arrastar no Kanban. Somei regras do domínio que propus, como "prazo atrasado nunca sai de vista sozinho" e "prazo, tarefa, evento e audiência são distinguíveis sem abrir o item".',
          },
          {
            type: 'paragraph',
            text: 'Cada falha foi registrada no mesmo formato: o que tentei fazer, o que aconteceu, a regra violada, sintoma, causa provável, impacto, gravidade de 0 a 4 e status — confirmado, confirmado só no visual, medido ou provável. O contraste foi medido por amostragem de pixels nos prints, com a ressalva de confirmar no código.',
          },
          { type: 'subheading', text: 'Um teste controlado' },
          {
            type: 'paragraph',
            text: 'A suspeita mais grave era que atrasos saem de vista. Em vez de afirmar, criei prazos vencidos em datas diferentes e percorri cada visão e recorte no dia seguinte. Resultado: os vencidos ficavam fora da lista principal, do contador semanal, do Kanban no mês e da Agenda do mês corrente. Um prazo com 58 dias de atraso ficava fora até da contagem de atrasadas, que olhava só 30 dias. A suspeita virou fato.',
          },
          { type: 'subheading', text: 'Pedidos de clientes e benchmark' },
          {
            type: 'paragraph',
            text: 'Agrupei a base de sugestões de clientes por tema. Ver o que é urgente ou novo e encontrar e organizar dominavam; o visual quase não aparecia. Tratei isso como sinal, não como prova: a base não tinha data, votos medem pedidos e não o tamanho do problema, e acessibilidade e consistência raramente aparecem nesse canal.',
          },
          {
            type: 'paragraph',
            text: 'No benchmark, comparei concorrentes diretos no Brasil, referências internacionais e padrões de fora do setor, como a visão "Hoje" do Todoist e a separação entre filtro e exibição do Linear. A leitura principal: ter Kanban não diferencia ninguém; o ponto em disputa é a priorização. E prazo jurídico não é tarefa comum — o padrão de "adiar" não serve para um prazo fatal, porque a data legal não muda.',
          },
          { type: 'subheading', text: 'Separar sintoma de causa' },
          {
            type: 'paragraph',
            text: 'Com as falhas registradas, agrupei por causa, não por quantidade. Dezenas de sintomas convergiram para cinco problemas e uma causa comum. Também registrei o que já funcionava e valia manter — foco automático no formulário, a Agenda em lista mostrando o tipo em texto, a criação direto na coluna do Kanban —, porque mudar sem surpreender começa por saber o que não mexer.',
          },
        ],
      },
      {
        emoji: '🔍',
        title: 'O diagnóstico: o produto é organizado por módulos, mas o advogado trabalha por prazos',
        blocks: [
          {
            type: 'paragraph',
            text: 'Explorei o produto numa conta de teste e documentei cada problema com prints anotados. Os cinco problemas mais relevantes tinham uma causa comum: cada tela respondia "o que existe neste módulo?", quando a pessoa precisa saber "o que tenho que fazer, até quando e o que acontece se eu não fizer?".',
          },
          {
            type: 'numbered',
            items: [
              {
                title: 'A urgência não comanda a tela',
                text: 'O prazo de hoje não aparecia pelo nome na lista principal. Nos testes, um prazo com 58 dias de atraso ficou fora da contagem de atrasadas, porque o recorte olhava só os últimos 30 dias. Na Agenda, o vermelho indicava o tipo de atividade, não a proximidade do prazo.',
              },
              {
                title: 'A mesma atividade muda em cada visão',
                text: 'Agenda, Kanban e Área de Trabalho tinham recortes, períodos, formatos de data e formas de mostrar o responsável diferentes. Uma tela vazia podia significar "nada a fazer" ou "outro filtro".',
              },
              {
                title: 'A publicação chega como aviso, não como trabalho',
                text: 'Publicações judiciais — onde um prazo nasce — chegavam sem identificação clara do caso, com dado técnico exposto e "Descartar" com o mesmo peso de "Tratar", lado a lado.',
              },
              {
                title: 'A navegação e a IA expõem a estrutura do produto',
                text: 'Catorze módulos numa lista plana, ícones sem rótulo e a IA aparecendo de quatro formas diferentes, como um produto à parte em vez de parte do fluxo.',
              },
              {
                title: 'Sem sistema, as soluções se repetem de formas diferentes',
                text: 'Salvar, filtrar, criar e estados vazios resolvidos de jeitos distintos em cada módulo. O azul principal media 3,56:1 de contraste em links e botões, abaixo do mínimo AA de 4,5:1.',
              },
            ],
          },
          {
            type: 'paragraph',
            text: 'Separei o que observei do que era hipótese. O diagnóstico terminou com oito hipóteses a validar antes de seguir — de chamados sobre prazos perdidos a testes com teclado, leitor de tela e zoom de 200% —, cada uma com o que mudaria no plano conforme a resposta.',
          },
          { type: 'media', src: '/projects/juridico-validacao.webp' },
        ],
      },
      {
        emoji: '🧭',
        title: 'Cinco princípios que outros designers aplicam sem precisar me perguntar',
        blocks: [
          { type: 'media', src: '/projects/juridico-principios.webp' },
          {
            type: 'bullets',
            items: [
              'O prazo vem primeiro: em qualquer tela que lista trabalho, o mais urgente aparece primeiro, e o atraso não some por causa de filtro ou período. Vermelho só significa atraso.',
              'Uma atividade, várias visões: dados, nomes e estados vêm de um só modelo. Agenda e Kanban mudam a forma de ver, não a informação.',
              'Toda informação leva a uma ação segura: cada aviso traz contexto e próximo passo; ação de risco pede confirmação ou pode ser desfeita.',
              'A IA sugere, a pessoa decide: a IA aparece dentro da tarefa, com os mesmos componentes, mostra a origem e não altera prazo sem confirmação.',
              'Mudar sem surpreender: local, nome e densidade só mudam com ganho claro, e o básico funciona igual em tela nova e legada.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Cada princípio veio com uma pergunta verificável — "em 5 segundos, dá para dizer o que está atrasado e o que vence hoje?" — e com as heurísticas e critérios WCAG que a tela atual violava. A conclusão orientou o resto: a modernização visual é consequência, não ponto de partida. O ganho para quem usa vem de clareza e segurança.',
          },
        ],
      },
      {
        emoji: '🧱',
        title: 'O design system: tokens e modelo de domínio primeiro',
        blocks: [
          { type: 'media', src: '/projects/juridico-arquitetura.webp' },
          {
            type: 'paragraph',
            text: 'Organizei o sistema em cinco camadas: tokens (primitivo, semântico e de componente), modelos de domínio, componentes base, componentes jurídicos e padrões de uso. Comecei pelos tokens porque um ajuste melhora tudo — inclusive o contraste — sem esperar a migração. E pelo modelo de Atividade junto, porque o segundo problema do diagnóstico não é visual: sem um contrato único, Agenda e Kanban voltam a divergir.',
          },
          {
            type: 'paragraph',
            text: 'Na governança, a regra de entrada é necessidade real em dois ou mais squads, ou risco alto para prazos; o resto começa como solução local registrada. Uma única fonte de tokens alimenta Figma e código, as propriedades no Figma espelham a API dos componentes, e proposta sem resposta em cinco dias úteis segue como local, para o sistema nunca virar gargalo.',
          },
          {
            type: 'paragraph',
            text: 'Também construí uma versão mínima de um servidor MCP do design system: ferramentas de IA consultam tokens, API dos componentes, o modelo de Atividade e regras como "vermelho só para atraso", e quem gera tela ou código com IA parte das regras do sistema.',
          },
        ],
      },
      {
        emoji: '🗺️',
        title: 'Plano incremental: começar pela tela mais arriscada, de forma reversível',
        blocks: [
          { type: 'media', src: '/projects/juridico-plano.webp' },
          {
            type: 'paragraph',
            text: 'Priorizei as telas com um critério ponderado — risco de prazo, frequência de uso, momento da migração, pedidos de clientes e risco da mudança. A Área de Trabalho ficou em primeiro. Começar por uma tela simples reduziria o risco de entrega, mas não provaria a tese de que clareza sobre prazos muda o trabalho. Por ser muito usada, ela entra opcional, reversível e medida.',
          },
          { type: 'media', src: '/projects/juridico-convivencia.webp' },
          {
            type: 'paragraph',
            text: 'Para telas novas e antigas conviverem sem confundir, a unidade de migração é o fluxo inteiro, nunca a metade de uma tarefa. Cabeçalho, menu e tokens passam primeiro a todas as telas, e o significado nunca muda entre versões. Cada tela nova entra em etapas (time interno, 5%, 25%, todos), com "Voltar à anterior" sempre visível e critérios de parada. Nenhuma mudança de padrão na volta da suspensão de prazos do fim de ano, quando o volume cresce.',
          },
          {
            type: 'paragraph',
            text: 'Com os quatro designers, a regra foi o squad não receber tarefa extra: cada um é dono dos padrões que o próprio roadmap já precisa, e o que eu assumo — tokens, modelo, código de referência, MCP, protótipos e automação — tira trabalho repetitivo deles antes de pedir contribuição. Não apresentei metas numéricas: sem linha de base, qualquer número seria inventado.',
          },
        ],
      },
      {
        emoji: '🖥️',
        title: 'A primeira tela da nova direção',
        blocks: [
          { type: 'media', src: '/projects/juridico-tela.webp' },
          {
            type: 'paragraph',
            text: 'A nova Área de Trabalho abre com um resumo de atrasadas, de hoje e dos próximos 7 dias, e agrupa a lista por urgência com todos os tipos juntos: prazo, audiência, evento e tarefa. As publicações chegam com o caso identificado e uma sugestão da IA que mostra o trecho usado e só cria o prazo depois de revisada. O menu manteve nomes e ordem, a densidade foi preservada e o azul de ação passou de 3,56:1 para 5,98:1 de contraste sem abandonar a identidade.',
          },
          { type: 'subheading', text: 'Componentes que nasceram da tela' },
          { type: 'media', src: '/projects/juridico-linha.webp' },
          {
            type: 'paragraph',
            text: 'A linha de atividade é um único componente para Área de Trabalho, Agenda em lista e buscas, com estados de padrão, hover, foco, selecionada, atrasada, concluída, erro, carregando e vazio.',
          },
          { type: 'media', src: '/projects/juridico-componentes.webp' },
          {
            type: 'paragraph',
            text: 'O indicador de prazo usa sempre texto, num formato único de proximidade e data absoluta. O selo de tipo usa ícone colorido e texto neutro, corrigindo o vermelho como tipo. A barra de filtros tem a mesma ordem e os mesmos nomes em todas as visões. E a sugestão de IA nunca salva sozinha: sem sugestão, o componente não aparece e o fluxo manual segue igual.',
          },
        ],
      },
      {
        emoji: '⚖️',
        title: 'A decisão difícil',
        blocks: [
          {
            type: 'paragraph',
            text: 'Itens atrasados aparecem primeiro com qualquer ordenação ou filtro. Quem usa pode recolher o grupo, mas a contagem fica sempre no topo.',
          },
          {
            type: 'paragraph',
            text: 'A favor: destacar prazos era um dos pedidos mais frequentes dos clientes, com o detalhe de "não sumir quando estiver atrasado", e um atraso escondido custa mais do que um item a mais na lista. Contra: personalizar e ordenar também são pedidos reais, e quem tem muitos atrasados vê sempre a mesma lista — o excesso de alerta pode virar ruído.',
          },
          {
            type: 'bullets',
            items: [
              'Descartei a ordem livre com aviso no topo: é fácil se acostumar a ignorar o aviso.',
              'Descartei os atrasados em uma aba: a tela fica mais limpa, mas o problema só aparece para quem vai procurar.',
              'Para reduzir o custo, o grupo pode ser recolhido, mostra as 5 mais antigas com "Ver todas" quando passa de 5, e a ordem livre continua valendo dentro de cada grupo.',
            ],
          },
          {
            type: 'paragraph',
            text: 'O que me faria voltar atrás: no piloto, muitos retornos à versão anterior citando esse bloco, ou atrasos antigos que ninguém resolve e só ocupam a tela.',
          },
        ],
      },
      {
        emoji: '💡',
        title: 'O que fica',
        blocks: [
          {
            type: 'bullets',
            items: [
              'Separar sintoma de causa muda o tamanho do redesign: precisar trocar o recorte para ver um atraso é sintoma; a causa está no modelo de atividade.',
              'Coerência é verificável: cada princípio do diagnóstico tem um lugar na tela, e cada componente segue a arquitetura do sistema.',
              'Construir em código — tokens, protótipo navegável e MCP — tirou o plano do papel e expôs estados e casos-limite que um mockup esconde.',
              'O que ainda falta testar: proposta sem teste com usuários e com dados fictícios; faltam grande volume, teclado e leitor de tela, largura menor e o custo técnico da visão unificada.',
            ],
          },
        ],
      },
    ],
  },
  en: {
    title: 'Incremental Redesign of Legal Practice Software',
    subtitle:
      'Diagnosis, a 12-month design system plan and the first screen of the new direction for the task management of software used by law firms — where a missed deadline can cost a client their rights.',
    readMore: 'Read full case',
    demoLabel: 'Open the interactive prototype',
    meta: {
      roleLabel: 'My Role',
      role: 'UX Designer & UX Engineer — diagnosis, design system strategy, UI and code prototype (solo work)',
      toolsLabel: 'Tools / Technologies',
      tools: 'Figma, tokens generated from a single source (Figma and CSS), navigable HTML/CSS/JS prototype, design system MCP server in Node.js, Nielsen heuristics and WCAG 2.2',
      impactLabel: 'Context',
      impact: 'Take-home exercise for a Senior UX Designer hiring process, with a fictional scenario set by the company. Diagnosis done on a trial account of the real product; screen and components use fictional data.',
    },
    intro:
      'A management platform for law firms had grown for years with different teams building different parts. The result: patterns that vary between modules, duplicated components and an interface that no longer conveyed the modernity the company wanted.\n\nThe challenge was to propose how to modernise the experience over 12 months under very real constraints: the product cannot stop, new and legacy screens will coexist during the front-end migration, there is no structured design system, four designers work in different squads without reporting to me, and AI features must be born within the same patterns.\n\nThe scope was task management — Calendar, Workspace and Kanban — where lawyers track court deadlines.',
    sections: [
      {
        emoji: '🧪',
        title: 'Discovery: how I got to the diagnosis',
        blocks: [
          {
            type: 'paragraph',
            text: 'Before proposing any screen, I set up an investigation plan with four sources and one rule: every issue must be tied to an evaluation rule and to evidence, and anything without evidence is marked as a hypothesis.',
          },
          { type: 'media', src: '/projects/juridico-discovery.webp' },
          { type: 'subheading', text: 'Guided product exploration' },
          {
            type: 'paragraph',
            text: 'I used the trial account with a capture script: Calendar, Workspace and Kanban views; the same activity seen in all three; creating and editing; empty, error and loading states; navigation between modules; and accessibility signals such as deadlines shown only by colour. That produced 27 annotated screenshots.',
          },
          { type: 'subheading', text: 'Heuristic audit' },
          {
            type: 'paragraph',
            text: "I ran the screens through Nielsen's 10 heuristics and 18 WCAG 2.2 criteria (levels A and AA), chosen for what matters in this context: colour use on deadlines, contrast under prolonged use, keyboard access in the main flow and dragging in Kanban. I added domain rules I proposed, such as \"an overdue deadline never leaves sight on its own\" and \"deadline, task, event and hearing are distinguishable without opening the item\".",
          },
          {
            type: 'paragraph',
            text: 'Each issue was logged in the same format: what I tried to do, what happened, the rule violated, symptom, likely cause, impact, severity from 0 to 4 and status — confirmed, confirmed visually only, measured or probable. Contrast was measured by sampling pixels in the screenshots, with the caveat of confirming in code.',
          },
          { type: 'subheading', text: 'A controlled test' },
          {
            type: 'paragraph',
            text: 'The most serious suspicion was that overdue items drop out of sight. Instead of asserting it, I created overdue deadlines on different dates and went through every view and scope the next day. Result: they were missing from the main list, the weekly counter, the monthly Kanban and the current month in the Calendar. A deadline 58 days overdue was missing even from the overdue count, which only looked back 30 days. The suspicion became a fact.',
          },
          { type: 'subheading', text: 'Customer requests and benchmark' },
          {
            type: 'paragraph',
            text: 'I grouped the customer suggestion base by theme. Seeing what is urgent or new, and finding and organising work, dominated; visual design barely appeared. I treated this as a signal, not proof: the base was undated, votes measure requests rather than problem size, and accessibility and consistency rarely surface in that channel.',
          },
          {
            type: 'paragraph',
            text: 'In the benchmark I compared direct competitors in Brazil, international references and patterns from outside the sector, such as the Todoist "Today" view and Linear\'s split between filtering and display. The main reading: having Kanban differentiates no one; the real contest is prioritisation. And a court deadline is not an ordinary task — the "postpone" pattern does not work for a hard deadline, because the legal date does not move.',
          },
          { type: 'subheading', text: 'Separating symptom from cause' },
          {
            type: 'paragraph',
            text: 'With the issues logged, I grouped them by cause, not by count. Dozens of symptoms converged into five problems and one root cause. I also recorded what already worked and was worth keeping — autofocus on the form, the list Calendar showing type as text, creating straight from a Kanban column — because changing without surprises starts with knowing what not to touch.',
          },
        ],
      },
      {
        emoji: '🔍',
        title: 'The diagnosis: the product is organised by module, but lawyers work by deadline',
        blocks: [
          {
            type: 'paragraph',
            text: 'I explored the product on a trial account and documented each problem with annotated screenshots. The five most relevant problems shared a root cause: each screen answered "what exists in this module?", when people need to know "what do I have to do, by when, and what happens if I don\'t?".',
          },
          {
            type: 'numbered',
            items: [
              {
                title: 'Urgency does not drive the screen',
                text: "Today's deadline did not appear by name in the main list. In my tests, a deadline 58 days overdue was left out of the overdue count because the view only looked at the last 30 days. In the Calendar, red indicated the activity type, not how close the deadline was.",
              },
              {
                title: 'The same activity changes in each view',
                text: 'Calendar, Kanban and Workspace used different scopes, periods, date formats and ways of showing the assignee. An empty screen could mean "nothing to do" or "another filter".',
              },
              {
                title: 'Court notices arrive as alerts, not as work',
                text: 'Court publications — where a deadline is born — arrived without clear case identification, with technical data exposed and "Discard" carrying the same weight as "Handle", side by side.',
              },
              {
                title: 'Navigation and AI expose the product structure',
                text: 'Fourteen modules in a flat list, unlabelled icons and AI showing up in four different ways, as a separate product rather than part of the flow.',
              },
              {
                title: 'Without a system, solutions repeat in different ways',
                text: 'Saving, filtering, creating and empty states were solved differently in each module. The main blue measured 3.56:1 contrast on links and buttons, below the AA minimum of 4.5:1.',
              },
            ],
          },
          {
            type: 'paragraph',
            text: 'I kept observations apart from hypotheses. The diagnosis closed with eight hypotheses to validate before moving on — from support tickets about missed deadlines to keyboard, screen reader and 200% zoom tests — each with what would change in the plan depending on the answer.',
          },
          { type: 'media', src: '/projects/juridico-validacao.webp' },
        ],
      },
      {
        emoji: '🧭',
        title: 'Five principles other designers can apply without asking me',
        blocks: [
          { type: 'media', src: '/projects/juridico-principios.webp' },
          {
            type: 'bullets',
            items: [
              'Deadlines come first: on any screen that lists work, the most urgent item comes first, and overdue items never disappear because of a filter or period. Red only means overdue.',
              'One activity, many views: data, names and states come from a single model. Calendar and Kanban change how you look, not the information.',
              'Every piece of information leads to a safe action: each notice carries context and a next step; risky actions ask for confirmation or can be undone.',
              'AI suggests, people decide: AI appears inside the task, with the same components, shows its source and never changes a deadline without confirmation.',
              'Change without surprises: placement, naming and density only change for a clear gain, and the basics work the same on new and legacy screens.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Each principle came with a testable question — "in 5 seconds, can you tell what is overdue and what is due today?" — and the heuristics and WCAG criteria the current screen violated. The conclusion shaped everything else: visual modernisation is a consequence, not the starting point. The gain for users comes from clarity and safety.',
          },
        ],
      },
      {
        emoji: '🧱',
        title: 'The design system: tokens and domain model first',
        blocks: [
          { type: 'media', src: '/projects/juridico-arquitetura.webp' },
          {
            type: 'paragraph',
            text: 'I organised the system in five layers: tokens (primitive, semantic and component), domain models, base components, legal components and usage patterns. Tokens come first because one adjustment improves everything — contrast included — without waiting for the migration. The Activity model comes alongside, because the second problem in the diagnosis is not visual: without a single contract, Calendar and Kanban drift apart again.',
          },
          {
            type: 'paragraph',
            text: 'For governance, the entry rule is a real need in two or more squads, or high risk to deadlines; everything else starts as a documented local solution. A single token source feeds Figma and code, Figma properties mirror the component API, and a proposal with no answer in five business days proceeds as local, so the system never becomes a bottleneck.',
          },
          {
            type: 'paragraph',
            text: 'I also built a minimal design system MCP server: AI tools query tokens, the component API, the Activity model and rules such as "red only for overdue", so anyone generating screens or code with AI starts from the system\'s rules.',
          },
        ],
      },
      {
        emoji: '🗺️',
        title: 'Incremental plan: start with the riskiest screen, reversibly',
        blocks: [
          { type: 'media', src: '/projects/juridico-plano.webp' },
          {
            type: 'paragraph',
            text: 'I prioritised screens with a weighted criterion — deadline risk, frequency of use, migration timing, customer requests and risk of change. The Workspace came first. Starting with a simple screen would lower delivery risk but would not prove the thesis that clarity about deadlines changes the work. Because it is heavily used, it ships as optional, reversible and measured.',
          },
          { type: 'media', src: '/projects/juridico-convivencia.webp' },
          {
            type: 'paragraph',
            text: 'For new and legacy screens to coexist without confusion, the unit of migration is the whole flow, never half a task. Header, menu and tokens reach every screen first, and meaning never changes between versions. Each new screen rolls out in stages (internal, 5%, 25%, everyone), with "Back to previous" always visible and stop criteria. No pattern changes when courts resume after the year-end deadline suspension, when volume peaks.',
          },
          {
            type: 'paragraph',
            text: 'With the four designers, the rule was that squads get no extra work: each one owns the patterns their own roadmap already needs, and what I take on — tokens, model, reference code, MCP, prototypes and automation — removes repetitive work before asking for contributions. I did not present numeric targets: without a baseline, any number would be made up.',
          },
        ],
      },
      {
        emoji: '🖥️',
        title: 'The first screen of the new direction',
        blocks: [
          { type: 'media', src: '/projects/juridico-tela.webp' },
          {
            type: 'paragraph',
            text: 'The new Workspace opens with a summary of overdue items, today and the next 7 days, and groups the list by urgency with every type together: deadline, hearing, event and task. Court notices arrive with the case identified and an AI suggestion that shows the passage it used and only creates the deadline after review. The menu kept its names and order, density was preserved, and the action blue went from 3.56:1 to 5.98:1 contrast without abandoning the brand.',
          },
          { type: 'subheading', text: 'Components born from the screen' },
          { type: 'media', src: '/projects/juridico-linha.webp' },
          {
            type: 'paragraph',
            text: 'The activity row is a single component for the Workspace, list Calendar and search, with default, hover, focus, selected, overdue, completed, error, loading and empty states.',
          },
          { type: 'media', src: '/projects/juridico-componentes.webp' },
          {
            type: 'paragraph',
            text: 'The deadline indicator always uses text, in a single format of proximity plus absolute date. The type badge uses a coloured icon and neutral text, fixing red-as-type. The filter bar keeps the same order and names in every view. And the AI suggestion never saves on its own: with no suggestion, the component does not appear and the manual flow stays the same.',
          },
        ],
      },
      {
        emoji: '⚖️',
        title: 'The hard decision',
        blocks: [
          {
            type: 'paragraph',
            text: 'Overdue items come first under any sort order or filter. Users can collapse the group, but the count always stays at the top.',
          },
          {
            type: 'paragraph',
            text: 'For: highlighting deadlines was one of the most frequent customer requests, specifically "don\'t make it disappear when it is overdue", and a hidden overdue item costs more than one extra item in the list. Against: customising and sorting are real requests too, and people with many overdue items always see the same list — too many alerts can turn into noise.',
          },
          {
            type: 'bullets',
            items: [
              'I discarded free ordering with a banner at the top: it is easy to get used to ignoring the banner.',
              'I discarded overdue items in a separate tab: the screen gets cleaner, but the problem only shows up for those who go looking.',
              'To reduce the cost, the group can be collapsed, shows the 5 oldest with "See all" past 5, and free ordering still applies within each group.',
            ],
          },
          {
            type: 'paragraph',
            text: 'What would make me reverse it: in the pilot, many switches back to the previous version citing this block, or old overdue items nobody resolves that just take up space.',
          },
        ],
      },
      {
        emoji: '💡',
        title: 'Takeaways',
        blocks: [
          {
            type: 'bullets',
            items: [
              'Separating symptom from cause changes the size of the redesign: having to switch the view to see an overdue item is a symptom; the cause is the activity model.',
              'Coherence is testable: every principle from the diagnosis has a place on the screen, and every component follows the system architecture.',
              'Building in code — tokens, navigable prototype and MCP — took the plan off paper and exposed states and edge cases a mockup hides.',
              'Still to test: the proposal has no user testing and uses fictional data; high volume, keyboard and screen reader, narrower widths and the technical cost of the unified view remain open.',
            ],
          },
        ],
      },
    ],
  },
}

/**
 * Novo front-end do painel administrativo de uma plataforma de VoIP. Publicado
 * sem o nome da empresa: a demo em `public/demos/plataforma-voip` é um build
 * próprio, com marca neutra e dados simulados trocados por fictícios.
 */
export const plataformaVoipCase: CaseStudy = {
  id: 'plataforma-voip-case-study',
  label: 'Case Study',
  cardRole: 'Design Engineer',
  cardStack: 'React · TypeScript · Tailwind · MSW · Playwright',
  demo: '/demos/plataforma-voip/index.html',
  images: [
    '/projects/voip-dashboard.webp',
    '/projects/voip-clientes.webp',
    '/projects/voip-confirmar.webp',
  ],
  pt: {
    title: 'Painel Administrativo de uma Plataforma VoIP',
    subtitle:
      'Benchmark, protótipo em duas versões e o novo front-end em React do painel que operadores usam para gerir clientes, faturas e a operação de telefonia — com segurança visível na interface, não só no back-end.',
    readMore: 'Ler case completo',
    demoLabel: 'Abrir o protótipo navegável',
    meta: {
      roleLabel: 'Meu Papel',
      role: 'Design Engineer — benchmark, design de interface e front-end, da pesquisa ao código testado',
      durationLabel: 'Período',
      duration: 'Outubro e novembro de 2026',
      toolsLabel: 'Ferramentas / Tecnologias',
      tools: 'React, TypeScript, Vite, Tailwind CSS, shadcn/ui, TanStack Query, Zod, MSW, Vitest, Testing Library, Playwright e GitHub Actions',
      impactLabel: 'No protótipo',
      impact: 'Entre com Administrador, Operador ou Leitura para ver o que cada perfil pode fazer. Os dados são fictícios.',
    },
    intro:
      'Uma plataforma de VoIP tinha o painel administrativo construído sobre um sistema de billing de mercado, adaptado com a marca da empresa. Funcionava, mas carregava o visual e as convenções de outra época: nove menus suspensos na barra superior, cores sem relação com estado, texto centralizado em todas as colunas e tabelas que quebravam palavras ao meio.\n\nO trabalho era refazer o front-end em React, consumindo o back-end existente por API, começando por Login, Dashboard, Clientes e Faturas. Foi dividido em etapas com aprovação entre elas: benchmark e protótipo em duas versões, depois a implementação com dados simulados e, por fim, a integração com a API real.\n\nEm um painel que mostra saldo, limite de crédito, senhas SIP e documentos de clientes, a pergunta que guiou cada tela foi: como deixar a segurança visível para quem opera, sem atrapalhar o trabalho?',
    sections: [
      {
        emoji: '🔍',
        title: 'Benchmark: o mercado e o sistema atual',
        blocks: [
          {
            type: 'paragraph',
            text: 'Analisei produtos de dois grupos: plataformas brasileiras de nota fiscal e cobrança, que o operador financeiro já conhece, e painéis de telefonia e CPaaS, que é o que o produto é. Para cada um, registrei navegação, cor de ação, tipografia, tabelas, dashboard, login e o que mostram de segurança, com fonte e data.',
          },
          {
            type: 'bullets',
            items: [
              'Azul é o padrão sóbrio do segmento. Verde, roxo e laranja aparecem como marca, não como convenção.',
              'Tabelas em painéis técnicos usam linhas finas, sem zebra, números à direita e abas de status com contadores acima da lista.',
              'Segurança aparece na interface: segredo oculto com "mostrar", selo de ambiente, botão para ocultar valores e registro de atividades.',
              'Aviso de sessão: cerca de dois minutos antes do fim, com pelo menos 20 segundos para estender com uma ação simples (NIST SP 800-63B e WCAG 2.2.1).',
              'Nenhuma referência brasileira mostrava, antes de salvar um cadastro, o que exatamente ia mudar. Isso virou um diferencial a manter.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Também analisei as telas do sistema em produção, separando o que funcionava do que contrariava o benchmark. O painel tinha os indicadores certos (ASR, ACD, débito, custo e lucro), mas quatro blocos em azul, verde, amarelo e vermelho sem relação com estado. As faturas não tinham status visível (paga, aberta ou em atraso), e valores apareciam como "0.0000", sem moeda.',
          },
        ],
      },
      {
        emoji: '🧭',
        title: 'Duas versões, uma decisão',
        blocks: [
          { type: 'media', src: '/projects/voip-login.webp' },
          {
            type: 'paragraph',
            text: 'A primeira etapa foi um protótipo navegável em código, não em Figma, com as quatro telas em duas versões: a A com barra lateral, padrão na maioria dos painéis técnicos, e a B com barra superior e superfícies planas. Um seletor permitia trocar de versão na mesma sessão, com os mesmos dados e estados, para comparar no uso e não em imagem estática.',
          },
          {
            type: 'paragraph',
            text: 'A versão B foi a aprovada. Com três áreas nesta fase, a barra superior devolve largura às tabelas, que são o centro do trabalho. Fazer o protótipo em código também teve um efeito prático: a versão aprovada virou a base da implementação, sem redesenhar nada.',
          },
        ],
      },
      {
        emoji: '🛡️',
        title: 'Segurança visível, sem atrito',
        blocks: [
          { type: 'media', src: '/projects/voip-clientes.webp' },
          {
            type: 'paragraph',
            text: 'Dados sensíveis ficam mascarados até a ação de "mostrar": e-mail com a primeira letra e o domínio legíveis, CPF/CNPJ, PIN e senha SIP. Assim a tela pode ser usada em reunião ou compartilhada sem expor nada por acidente. Filtros com dados pessoais não vão para a URL.',
          },
          { type: 'media', src: '/projects/voip-confirmar.webp' },
          {
            type: 'paragraph',
            text: 'Antes de salvar um cadastro, o painel mostra o que vai mudar, campo a campo, de e para, com os valores sensíveis ainda mascarados. Se a pessoa tenta sair com alterações não salvas, a navegação é bloqueada com aviso. Em limite de crédito ou status de conta, um clique errado tem custo real.',
          },
          {
            type: 'bullets',
            items: [
              'Sessão visível: usuário, perfil e tempo restante sempre na barra, com aviso antes de expirar e opção de estender.',
              'Três perfis (Administrador, Operador e Leitura): o que o perfil não pode fazer aparece desabilitado ou oculto, nunca como erro depois do clique.',
              'Download de fatura rastreável: a interface informa qual documento está sendo baixado.',
              'Selo de ambiente: "dados simulados" na demonstração e o nome do ambiente em homologação; em produção, nada.',
            ],
          },
        ],
      },
      {
        emoji: '📊',
        title: 'Dashboard e faturas',
        blocks: [
          { type: 'media', src: '/projects/voip-dashboard.webp' },
          {
            type: 'paragraph',
            text: 'O dashboard manteve os indicadores que a operação já usava, mas reorganizados por leitura: chamadas por dia com seletor de período e opção de ver como tabela, resumo do período à direita e cartões da semana em que a cor só aparece quando há algo a fazer, como faturas em atraso.',
          },
          { type: 'media', src: '/projects/voip-faturas.webp' },
          {
            type: 'paragraph',
            text: 'Nas faturas, o status ganhou selo próprio, os valores vieram para a direita com moeda e as abas com contador separam o que está pago, aberto e em atraso. Todas as telas cobrem os quatro estados: carregando, vazio, erro e sucesso.',
          },
        ],
      },
      {
        emoji: '🛠️',
        title: 'Arquitetura pronta para a API real',
        blocks: [
          {
            type: 'paragraph',
            text: 'Como a API ainda não existia, o front foi construído contra um contrato. Cada recurso tem um schema em Zod que valida as respostas e documenta o que o back-end precisa expor. Com o Mock Service Worker, o navegador responde às mesmas requisições que a API real vai receber: trocar de dados simulados para API é uma variável de ambiente, sem mudar código.',
          },
          {
            type: 'numbered',
            items: [
              {
                title: 'Camadas com fronteiras no lint',
                text: 'Páginas só compõem; dados vêm de hooks por domínio (clientes, faturas, dashboard, autenticação); só uma camada faz requisições. O ESLint falha o build se alguém atravessa uma fronteira.',
              },
              {
                title: 'Testes em três níveis',
                text: '67 testes unitários e de componente (máscaras, regras do formulário, confirmação de alterações, download) e 11 de ponta a ponta com Playwright, um fluxo principal por tela.',
              },
              {
                title: 'Entrega contínua',
                text: 'CI com lint, tipos, testes e build em cada pull request, deploy de homologação a cada push na branch de staging e um build de demonstração com dados simulados para revisão.',
              },
            ],
          },
        ],
      },
      {
        emoji: '💡',
        title: 'O que fica',
        blocks: [
          {
            type: 'bullets',
            items: [
              'Benchmark serve para decidir, não para enfeitar: cada achado virou uma regra de tela, e o que o sistema atual já fazia melhor que o mercado foi mantido.',
              'Protótipo em código encurta o caminho: a comparação entre versões aconteceu no uso real, e a versão aprovada já era o ponto de partida da implementação.',
              'Segurança é design: mascarar, confirmar e mostrar a sessão são decisões de interface que reduzem risco sem pedir nada a mais de quem opera.',
            ],
          },
        ],
      },
    ],
  },
  en: {
    title: 'Admin Panel for a VoIP Platform',
    subtitle:
      'Benchmark, a two-version prototype and the new React front-end for the panel operators use to manage customers, invoices and telephony operations — with security made visible in the interface, not just in the back-end.',
    readMore: 'Read full case',
    demoLabel: 'Open the interactive prototype',
    meta: {
      roleLabel: 'My Role',
      role: 'Design Engineer — benchmark, interface design and front-end, from research to tested code',
      durationLabel: 'Period',
      duration: 'October and November 2026',
      toolsLabel: 'Tools / Technologies',
      tools: 'React, TypeScript, Vite, Tailwind CSS, shadcn/ui, TanStack Query, Zod, MSW, Vitest, Testing Library, Playwright and GitHub Actions',
      impactLabel: 'In the prototype',
      impact: 'Sign in as Administrator, Operator or Read-only to see what each role can do. All data is fictional. The interface is in Portuguese.',
    },
    intro:
      "A VoIP platform ran its admin panel on an off-the-shelf billing system rebranded with the company's identity. It worked, but carried the look and conventions of another era: nine dropdown menus in the top bar, colours unrelated to state, centred text in every column and tables that broke words in half.\n\nThe job was to rebuild the front-end in React, consuming the existing back-end through an API, starting with Login, Dashboard, Customers and Invoices. It was split into stages with sign-off between them: benchmark and a two-version prototype, then the implementation with simulated data and, finally, integration with the real API.\n\nIn a panel that shows balances, credit limits, SIP passwords and customer documents, one question guided every screen: how do you make security visible to operators without getting in the way of their work?",
    sections: [
      {
        emoji: '🔍',
        title: 'Benchmark: the market and the current system',
        blocks: [
          {
            type: 'paragraph',
            text: 'I analysed products from two groups: Brazilian invoicing and billing platforms, which finance operators already know, and telephony and CPaaS panels, which is what the product is. For each one I logged navigation, action colour, typography, tables, dashboard, login and what they show about security, with source and date.',
          },
          {
            type: 'bullets',
            items: [
              'Blue is the sober standard in the segment. Green, purple and orange show up as branding, not convention.',
              'Tables in technical panels use hairlines, no zebra striping, right-aligned numbers and status tabs with counters above the list.',
              'Security shows up in the interface: hidden secrets with "show", environment badges, a button to hide values and activity logs.',
              'Session warning: about two minutes before timeout, with at least 20 seconds to extend through a simple action (NIST SP 800-63B and WCAG 2.2.1).',
              'No Brazilian reference showed exactly what would change before saving a record. That became a differentiator worth keeping.',
            ],
          },
          {
            type: 'paragraph',
            text: 'I also reviewed the production screens, separating what worked from what went against the benchmark. The dashboard had the right indicators (ASR, ACD, debit, cost and profit), but four tiles in blue, green, yellow and red with no relation to state. Invoices had no visible status (paid, open or overdue), and amounts showed as "0.0000", with no currency.',
          },
        ],
      },
      {
        emoji: '🧭',
        title: 'Two versions, one decision',
        blocks: [
          { type: 'media', src: '/projects/voip-login.webp' },
          {
            type: 'paragraph',
            text: 'The first stage was a navigable prototype built in code, not Figma, with the four screens in two versions: A with a sidebar, the norm in most technical panels, and B with a top bar and flat surfaces. A switcher let reviewers change versions within the same session, with the same data and states, so the comparison happened in use rather than on static images.',
          },
          {
            type: 'paragraph',
            text: 'Version B was approved. With three areas in this phase, the top bar gives width back to the tables, which are the heart of the work. Building the prototype in code had a practical payoff too: the approved version became the foundation of the implementation, with nothing redrawn.',
          },
        ],
      },
      {
        emoji: '🛡️',
        title: 'Visible security without friction',
        blocks: [
          { type: 'media', src: '/projects/voip-clientes.webp' },
          {
            type: 'paragraph',
            text: 'Sensitive data stays masked until the "show" action: email with the first letter and domain readable, tax ID, PIN and SIP password. The screen can be used in a meeting or shared without exposing anything by accident. Filters containing personal data never go into the URL.',
          },
          { type: 'media', src: '/projects/voip-confirmar.webp' },
          {
            type: 'paragraph',
            text: 'Before saving a record, the panel shows what will change, field by field, from and to, with sensitive values still masked. Leaving with unsaved changes is blocked with a warning. On credit limits or account status, a wrong click has a real cost.',
          },
          {
            type: 'bullets',
            items: [
              'Visible session: user, role and remaining time always in the bar, with a warning before expiry and an option to extend.',
              'Three roles (Administrator, Operator and Read-only): what a role cannot do appears disabled or hidden, never as an error after the click.',
              'Traceable invoice download: the interface states which document is being downloaded.',
              'Environment badge: "simulated data" in the demo and the environment name in staging; nothing in production.',
            ],
          },
        ],
      },
      {
        emoji: '📊',
        title: 'Dashboard and invoices',
        blocks: [
          { type: 'media', src: '/projects/voip-dashboard.webp' },
          {
            type: 'paragraph',
            text: 'The dashboard kept the indicators operations already relied on, reorganised for reading: calls per day with a period selector and a table view, a period summary on the right and weekly cards where colour only appears when there is something to act on, such as overdue invoices.',
          },
          { type: 'media', src: '/projects/voip-faturas.webp' },
          {
            type: 'paragraph',
            text: 'In invoices, status got its own badge, amounts moved to the right with currency, and tabs with counters separate paid, open and overdue. Every screen covers the four states: loading, empty, error and success.',
          },
        ],
      },
      {
        emoji: '🛠️',
        title: 'Architecture ready for the real API',
        blocks: [
          {
            type: 'paragraph',
            text: 'Since the API did not exist yet, the front-end was built against a contract. Each resource has a Zod schema that validates responses and documents what the back-end must expose. With Mock Service Worker, the browser answers the same requests the real API will receive: switching from simulated data to the API is one environment variable, with no code changes.',
          },
          {
            type: 'numbered',
            items: [
              {
                title: 'Layers with lint-enforced boundaries',
                text: 'Pages only compose; data comes from per-domain hooks (customers, invoices, dashboard, auth); a single layer makes requests. ESLint fails the build if anyone crosses a boundary.',
              },
              {
                title: 'Tests at three levels',
                text: '67 unit and component tests (masks, form rules, change confirmation, download) and 11 end-to-end tests with Playwright, one main flow per screen.',
              },
              {
                title: 'Continuous delivery',
                text: 'CI with lint, types, tests and build on every pull request, a staging deploy on every push to the staging branch and a demo build with simulated data for review.',
              },
            ],
          },
        ],
      },
      {
        emoji: '💡',
        title: 'Takeaways',
        blocks: [
          {
            type: 'bullets',
            items: [
              'A benchmark is for deciding, not decorating: each finding became a screen rule, and what the current system already did better than the market was kept.',
              'Prototyping in code shortens the path: versions were compared in real use, and the approved one was already the starting point for implementation.',
              'Security is design: masking, confirming and showing the session are interface decisions that reduce risk without asking anything extra of operators.',
            ],
          },
        ],
      },
    ],
  },
}
