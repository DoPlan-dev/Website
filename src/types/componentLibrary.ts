// Type definitions for component library and templates

import { SectionComponent, SectionTemplate } from '../data/sectionTemplates'

export type ComponentCategory = 'text' | 'media' | 'navigation' | 'layout' | 'interactive' | 'display' | 'all'
export type TemplateCategory = 'hero' | 'content' | 'marketing' | 'navigation' | 'footer' | 'all'

export interface LibraryFilter {
  category: ComponentCategory
  searchQuery: string
  tags: string[]
}

export interface TemplateFilter {
  category: TemplateCategory
  searchQuery: string
}

export interface ComponentPreview {
  component: SectionComponent
  thumbnail?: string
  description?: string
}

export interface TemplatePreview {
  template: SectionTemplate
  thumbnail?: string
  preview?: string
}

export interface CustomComponent {
  id: string
  name: string
  description?: string
  category: ComponentCategory
  tags: string[]
  component: SectionComponent
  createdAt: number
  updatedAt: number
  author?: string
}

export interface CustomTemplate {
  id: string
  name: string
  description?: string
  category: TemplateCategory
  template: SectionTemplate
  createdAt: number
  updatedAt: number
  author?: string
}

export interface LibraryMetadata {
  version: string
  components: CustomComponent[]
  templates: CustomTemplate[]
  exportedAt: number
}
