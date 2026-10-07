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
  sections: CaseStudySection[]
}

export interface CaseStudy {
  id: string
  label: string
  cardRole: string
  cardStack: string
  video?: string
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
            text: 'Quando o modelo chama uma ferramenta, o usuário precisa ver o que foi chamado, com quais dados e o que voltou. Uma chamada passa por quatro estados, e cada um pede tratamento visual próprio.',
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
