export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  image?: string
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
  type: 'design' | 'dev' | 'fullstack'
}

export interface Skill {
  name: string
  category: 'design' | 'frontend' | 'backend' | 'tools'
}

export type Theme = 'dark' | 'light'
