export interface Testimonial {
  name: string
  role: { pt: string; en: string }
  relation: { pt: string; en: string }
  text: { pt: string; en: string }
}

export const testimonials: Testimonial[] = [
  {
    name: 'Rafael Helm',
    role: {
      pt: 'Cofundador da UXConf BR · +20 anos em software',
      en: 'Co-founder of UXConf BR · 20+ years in software',
    },
    relation: {
      pt: 'Trabalhamos juntos na uMov.me',
      en: 'We worked together at uMov.me',
    },
    text: {
      pt: 'Tive a oportunidade de trabalhar com o Ronaldo na uMov.me, onde ele atuou como Product Designer, e foi uma experiência extremamente positiva.\n\nO Ronaldo sempre demonstrou uma excelente capacidade de compreender problemas de negócio e transformá-los em soluções inteligentes, equilibrando as necessidades dos usuários com os objetivos do produto. Suas ideias eram consistentes, bem fundamentadas e frequentemente elevavam a qualidade das discussões e das entregas do time.\n\nAlém da competência técnica, sempre foi muito agradável trabalhar com ele. É um profissional colaborativo, aberto ao diálogo, que sabe ouvir diferentes perspectivas e construir soluções em conjunto.\n\nTenho certeza de que será uma excelente adição para qualquer equipe de Produto, Design ou Experiência do Usuário.',
      en: "I had the opportunity to work with Ronaldo at uMov.me, where he was a Product Designer, and it was an extremely positive experience.\n\nRonaldo always showed an excellent ability to understand business problems and turn them into intelligent solutions, balancing user needs with product goals. His ideas were consistent, well-grounded, and often raised the quality of the team's discussions and deliveries.\n\nBeyond technical competence, he was always a pleasure to work with — collaborative, open to dialogue, able to listen to different perspectives and build solutions together.\n\nI'm sure he will be an excellent addition to any Product, Design or User Experience team.",
    },
  },
  {
    name: 'Daniel Everling',
    role: {
      pt: 'Senior Backend Engineer',
      en: 'Senior Backend Engineer',
    },
    relation: {
      pt: 'Trabalhamos na mesma equipe',
      en: 'We worked on the same team',
    },
    text: {
      pt: 'Tive a oportunidade de acompanhar o trabalho do Ronaldo e posso dizer que ele é um profissional extremamente diferenciado, especialmente pela forma como conecta design, experiência do usuário e implementação front-end.\n\nRonaldo tem uma habilidade muito forte em transformar ideias e necessidades de produto em interfaces bem estruturadas, funcionais e visualmente consistentes. Sua visão de UX/UI, somada ao conhecimento técnico de front-end, faz com que ele consiga colaborar muito bem com times de engenharia, antecipar limitações técnicas e propor soluções mais viáveis e escaláveis.\n\nAlém disso, ele demonstra muito cuidado com detalhes, componentização, consistência visual e qualidade da experiência final. É um profissional colaborativo, criterioso e com excelente comunicação.',
      en: "I had the opportunity to follow Ronaldo's work closely and can say he is a truly differentiated professional, especially in the way he connects design, user experience and front-end implementation.\n\nRonaldo has a very strong ability to turn ideas and product needs into well-structured, functional and visually consistent interfaces. His UX/UI vision, combined with his front-end technical knowledge, allows him to collaborate very well with engineering teams, anticipate technical limitations and propose more viable, scalable solutions.\n\nHe also shows great care for details, componentization, visual consistency and the quality of the final experience. A collaborative, meticulous professional with excellent communication.",
    },
  },
  {
    name: 'Emerson Schenatto',
    role: {
      pt: 'Product Owner | Product Management',
      en: 'Product Owner | Product Management',
    },
    relation: {
      pt: 'Supervisionou meu trabalho diretamente',
      en: 'Directly supervised my work',
    },
    text: {
      pt: 'Ótimo profissional, sério, dedicado e comprometido, buscando sempre agregar valor ao time e ao produto. Sempre cumpre suas tarefas com grande qualidade. Alta capacidade de auto-organização. Sempre atento para estar atualizado com as tendências do mercado focadas na experiência do usuário. Boa visão sistêmica buscando sempre a jornada completa do usuário, olhando aspectos de design integrado ao técnico.',
      en: 'A great professional — serious, dedicated and committed, always looking to add value to the team and the product. Delivers every task with great quality. Highly self-organized. Always up to date with market trends focused on user experience. Strong systemic vision, always considering the complete user journey and looking at design integrated with the technical side.',
    },
  },
]
