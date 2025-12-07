// Utility functions for importing and exporting components and templates

import { SectionComponent, SectionTemplate } from '../data/sectionTemplates'
import { ComponentLibraryItem } from '../data/componentLibrary'
import { CustomComponent, CustomTemplate, LibraryMetadata } from '../types/componentLibrary'

/**
 * Export a component to JSON
 */
export function exportComponent(component: SectionComponent, metadata?: {
  name?: string
  description?: string
  category?: string
  tags?: string[]
}): string {
  const exportData = {
    type: 'component',
    version: '1.0.0',
    component,
    metadata: metadata || {},
    exportedAt: Date.now()
  }
  return JSON.stringify(exportData, null, 2)
}

/**
 * Export a template to JSON
 */
export function exportTemplate(template: SectionTemplate, metadata?: {
  name?: string
  description?: string
  category?: string
}): string {
  const exportData = {
    type: 'template',
    version: '1.0.0',
    template,
    metadata: metadata || {},
    exportedAt: Date.now()
  }
  return JSON.stringify(exportData, null, 2)
}

/**
 * Export multiple components and templates
 */
export function exportLibrary(
  components: CustomComponent[],
  templates: CustomTemplate[]
): string {
  const exportData: LibraryMetadata = {
    version: '1.0.0',
    components,
    templates,
    exportedAt: Date.now()
  }
  return JSON.stringify(exportData, null, 2)
}

/**
 * Import a component from JSON
 */
export function importComponent(json: string): {
  component: SectionComponent
  metadata?: {
    name?: string
    description?: string
    category?: string
    tags?: string[]
  }
} | null {
  try {
    const data = JSON.parse(json)
    if (data.type === 'component' && data.component) {
      return {
        component: data.component,
        metadata: data.metadata
      }
    }
    return null
  } catch {
    return null
  }
}

/**
 * Import a template from JSON
 */
export function importTemplate(json: string): {
  template: SectionTemplate
  metadata?: {
    name?: string
    description?: string
    category?: string
  }
} | null {
  try {
    const data = JSON.parse(json)
    if (data.type === 'template' && data.template) {
      return {
        template: data.template,
        metadata: data.metadata
      }
    }
    return null
  } catch {
    return null
  }
}

/**
 * Import a library from JSON
 */
export function importLibrary(json: string): LibraryMetadata | null {
  try {
    const data = JSON.parse(json)
    if (data.version && (data.components || data.templates)) {
      return data as LibraryMetadata
    }
    return null
  } catch {
    return null
  }
}

/**
 * Validate component structure
 */
export function validateComponent(component: any): component is SectionComponent {
  return (
    component &&
    typeof component === 'object' &&
    typeof component.id === 'string' &&
    typeof component.type === 'string' &&
    typeof component.props === 'object'
  )
}

/**
 * Validate template structure
 */
export function validateTemplate(template: any): template is SectionTemplate {
  return (
    template &&
    typeof template === 'object' &&
    typeof template.id === 'string' &&
    typeof template.name === 'string' &&
    Array.isArray(template.components)
  )
}

/**
 * Generate unique component ID
 */
export function generateComponentId(prefix: string = 'component'): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Generate unique template ID
 */
export function generateTemplateId(prefix: string = 'template'): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}
