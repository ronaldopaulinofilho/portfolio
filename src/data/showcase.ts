export interface ShowcaseLocale {
  title: string
  subtitle: string
  cta: string
}

/**
 * A product showcase — presented in the same wide format as a case study, but
 * deliberately not one: there is no write-up behind it, just the work itself.
 */
export interface Showcase {
  id: string
  label: string
  /** Public URL of the live site, when there is one. */
  liveUrl?: string
  /** Still shown on the card. */
  image: string
  /** Optional walkthrough; `Media` picks video vs image from the extension. */
  video?: string
  pt: ShowcaseLocale
  en: ShowcaseLocale
}

export const fluxLandingShowcase: Showcase = {
  id: 'flux-landing',
  label: 'Landing Page',
  image: '/projects/flux-landing.webp',
  video: '/projects/flux-landing.mp4',
  pt: {
    title: 'Nova landing page do Flux',
    subtitle:
      'Site de produto do Flux — CRM omnichannel que reúne atendimento, vendas e telefonia numa só plataforma. A página apresenta os módulos e conduz o visitante ao agendamento de demonstração.',
    cta: 'Ver a página',
  },
  en: {
    title: "Flux's new landing page",
    subtitle:
      'Product site for Flux — an omnichannel CRM bringing support, sales and telephony into a single platform. The page introduces each module and guides visitors towards booking a demo.',
    cta: 'View the page',
  },
}
