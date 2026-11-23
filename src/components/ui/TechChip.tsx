import {
  Accessibility, Blocks, Bot, Braces, Code2, Component, Database, FlaskConical,
  Fingerprint, Globe, Hash, Layers, MessageSquare, MousePointerClick,
  Network, Palette, PenTool, Search, Server, Sparkles, Workflow,
  type LucideIcon,
} from 'lucide-react'
import {
  siClaude, siCursor, siExpress, siFigma, siGit, siHtml5, siJira, siLinear,
  siModelcontextprotocol, siNextdotjs, siNodedotjs, siNotion, siReact, siReactquery,
  siShadcnui, siStorybook, siTailwindcss, siTypescript, siVercel, siVite, siVitest,
  siVuedotjs, siWebpack,
  type SimpleIcon,
} from 'simple-icons'
import { ColorIcon, type IconTone } from './ColorIcon'

/**
 * Chip de tecnologia: logo + nome, no formato dos "service chips" do design
 * system. Marcas conhecidas usam o logo oficial (simple-icons) sobre a cor da
 * marca; o que não é marca (UX Research, Design Tokens…) usa um ícone colorido
 * do design system. O ícone sai do próprio texto, em PT ou EN, então as listas
 * em translations.ts / projects.ts continuam sendo só strings.
 * A primeira regra que casar vence; o que não casa recebe um ícone neutro.
 */
type Visual = { brand: SimpleIcon } | { icon: LucideIcon; tone: IconTone }

const RULES: [RegExp, Visual][] = [
  // marcas — as específicas antes das genéricas (vitest antes de vite, tanstack antes de react…)
  [/mcp/i, { brand: siModelcontextprotocol }],
  [/figma/i, { brand: siFigma }],
  [/tanstack|react query/i, { brand: siReactquery }],
  [/react/i, { brand: siReact }],
  [/vue/i, { brand: siVuedotjs }],
  [/next/i, { brand: siNextdotjs }],
  [/typescript/i, { brand: siTypescript }],
  [/tailwind/i, { brand: siTailwindcss }],
  [/shadcn/i, { brand: siShadcnui }],
  [/storybook/i, { brand: siStorybook }],
  [/vitest/i, { brand: siVitest }],
  [/vite/i, { brand: siVite }],
  [/webpack/i, { brand: siWebpack }],
  [/node/i, { brand: siNodedotjs }],
  [/express/i, { brand: siExpress }],
  [/html|css/i, { brand: siHtml5 }],
  [/^git$/i, { brand: siGit }],
  [/jira/i, { brand: siJira }],
  [/linear/i, { brand: siLinear }],
  [/notion/i, { brand: siNotion }],
  [/vercel/i, { brand: siVercel }],
  [/claude/i, { brand: siClaude }],
  [/cursor/i, { brand: siCursor }],

  // conceitos, sem logo
  [/\bia\b|\bai\b/i, { icon: Sparkles, tone: 'pink' }],
  [/prototip|prototyp|prot[oó]tipo|web design|branding|social/i, { icon: PenTool, tone: 'pink' }],
  [/token|design system/i, { icon: Palette, tone: 'yellow' }],
  [/component|lib/i, { icon: Blocks, tone: 'orange' }],
  [/research|pesquisa/i, { icon: Search, tone: 'sky' }],
  [/entrevista|interview/i, { icon: MessageSquare, tone: 'sky' }],
  [/usabilidade|usability/i, { icon: MousePointerClick, tone: 'sky' }],
  [/acessibilidade|accessibility|wcag/i, { icon: Accessibility, tone: 'green' }],
  [/arquitetura da|information arch/i, { icon: Network, tone: 'graphite' }],
  [/test/i, { icon: FlaskConical, tone: 'green' }],
  [/b2b|plataforma|platform/i, { icon: Layers, tone: 'pink' }],
  [/integra/i, { icon: Workflow, tone: 'yellow' }],
  [/api/i, { icon: Braces, tone: 'sky' }],
  [/site|web/i, { icon: Globe, tone: 'sky' }],
  [/marca|brand|identi/i, { icon: Fingerprint, tone: 'pink' }],
  [/bot|agent/i, { icon: Bot, tone: 'pink' }],
  [/lib/i, { icon: Component, tone: 'orange' }],
  [/code|dev/i, { icon: Code2, tone: 'yellow' }],
  [/server|back/i, { icon: Server, tone: 'green' }],
  [/data|dados/i, { icon: Database, tone: 'orange' }],
]

function pick(label: string): Visual {
  for (const [re, v] of RULES) if (re.test(label)) return v
  return { icon: Hash, tone: 'graphite' }
}

/** Texto branco ou preto, conforme a luminância da cor da marca. */
function readableOn(hex: string) {
  const [r, g, b] = [0, 2, 4].map(i => parseInt(hex.slice(i, i + 2), 16) / 255)
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.55 ? '#000' : '#fff'
}

function BrandDot({ brand }: { brand: SimpleIcon }) {
  return (
    <span
      aria-hidden="true"
      className="w-5 h-5 shrink-0 flex items-center justify-center rounded-full transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105"
      style={{ backgroundColor: `#${brand.hex}` }}
    >
      <svg viewBox="0 0 24 24" width="12" height="12" fill={readableOn(brand.hex)}>
        <path d={brand.path} />
      </svg>
    </span>
  )
}

export function TechChip({
  label,
  variant = 'pill',
  mono = false,
  className = '',
}: {
  label: string
  /** `pill` sobre o fundo da página; `inset` dentro de um card branco. */
  variant?: 'pill' | 'inset'
  mono?: boolean
  className?: string
}) {
  const v = pick(label)
  return (
    <span
      className={`group inline-flex items-center gap-1.5 py-1 pl-1 pr-3 text-xs text-neutral-700 ${
        variant === 'pill' ? 'ds-pill' : 'ds-pill-inset'
      } ${mono ? 'font-mono' : ''} ${className}`}
    >
      {'brand' in v ? (
        <BrandDot brand={v.brand} />
      ) : (
        <ColorIcon tone={v.tone} size="sm">
          <v.icon size={11} strokeWidth={2.4} />
        </ColorIcon>
      )}
      {label}
    </span>
  )
}
