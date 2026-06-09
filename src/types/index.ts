import type { LucideIcon } from 'lucide-react'

export interface Project {
  id: string
  title: string
  description: string
  descriptionEn: string
  tags: string[]
  image?: string
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
  type: 'design' | 'dev' | 'fullstack'
}

export type ProjectType = Project['type']

export interface SkillCategory {
  category: string
  icon: LucideIcon
  items: string[]
}

export type Theme = 'dark' | 'light'
