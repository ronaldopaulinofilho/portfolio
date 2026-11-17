/**
 * Páginas públicas do site, a fonte única para o pré-render e o sitemap.
 *
 * Precisa bater com o `path` de cada case em `src/data/caseStudies.ts`. O
 * pré-render confere: se a home linkar uma página que não está aqui, o build
 * avisa, porque ela ficaria fora do sitemap e sem HTML estático.
 */
export const SITE = 'https://www.ronaldopaulinofilho.com.br'

export const ROTAS = [
  { path: '/', priority: '1.0', changefreq: 'monthly', fontes: ['.'] },
  { path: '/cases/design-system-saas-b2b', priority: '0.8', changefreq: 'yearly', fontes: ['src/data/caseStudies.ts'] },
  { path: '/cases/redesign-software-juridico', priority: '0.8', changefreq: 'yearly', fontes: ['src/data/caseStudies.ts'] },
  { path: '/cases/redesign-crm-omnichannel-ia', priority: '0.8', changefreq: 'yearly', fontes: ['src/data/caseStudies.ts'] },
  { path: '/cases/painel-plataforma-voip', priority: '0.8', changefreq: 'yearly', fontes: ['src/data/caseStudies.ts'] },
  { path: '/estudos/ui-para-ia', priority: '0.8', changefreq: 'yearly', fontes: ['src/data/caseStudies.ts'] },
]
