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

export interface CaseStudy {
  id: string
  label: string
  title: string
  subtitle: string
  meta: { role: string; duration: string; tools: string; impact: string }
  images: string[]
  intro: string
  sections: CaseStudySection[]
}

export const designSystemCase: CaseStudy = {
  id: 'ds-case-study',
  label: 'Case Study',
  title: 'Design System para SaaS B2B em Segmentos Diferentes',
  subtitle:
    '2 anos liderando o desenvolvimento, implementação e governança de um Design System proprietário para uma plataforma SaaS B2B complexa.',
  meta: {
    role: 'Lead Product Designer (Liderança, Arquitetura de Informação e Estratégia de Handoff)',
    duration: '2 anos',
    tools:
      'Figma (Variables, Component Properties), Figma Make (Prototipagem Ágil com IA), React (Validação Dinâmica), Vue.js (Biblioteca Proprietária Final) e Storybook',
    impact:
      'Redução no tempo de entrega de novas features, eliminação de dívida técnica/estética e escalabilidade modular para novos segmentos B2B',
  },
  images: [
    '/projects/design-system.png',
    '/projects/design-system-2.png',
    '/projects/design-system-3.png',
  ],
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
          text: 'Reuni o Product Managers (PM) e Tech Leads de cada segmento para destrinchar as regras de negócio por trás das interfaces. O desafio era desenhar componentes flexíveis o suficiente para aguentar a densidade de dados que uma operação de logística exige (tabelas complexas, status de entrega, mapas), sem poluir a experiência de segmentos de mercado mais simples.',
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
}
