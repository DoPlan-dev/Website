/**
 * Template Storage for saving and loading custom templates
 */

import { SectionTemplate } from '../../data/sectionTemplates'

const STORAGE_KEY = 'doplan-custom-templates'
const MAX_TEMPLATES = 50

export interface SavedTemplate {
  id: string
  name: string
  description?: string
  template: SectionTemplate
  createdAt: string
  updatedAt: string
}

/**
 * Save a custom template
 */
export const saveTemplate = (template: SectionTemplate, name: string, description?: string): string => {
  const templates = loadTemplates()
  const templateId = `custom-${Date.now()}`
  
  const savedTemplate: SavedTemplate = {
    id: templateId,
    name,
    description,
    template: JSON.parse(JSON.stringify(template)), // Deep clone
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }

  templates.unshift(savedTemplate) // Add to beginning

  // Limit number of saved templates
  if (templates.length > MAX_TEMPLATES) {
    templates.pop()
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(templates))
  return templateId
}

/**
 * Update an existing template
 */
export const updateTemplate = (id: string, template: SectionTemplate, name?: string, description?: string): boolean => {
  const templates = loadTemplates()
  const index = templates.findIndex(t => t.id === id)

  if (index === -1) {
    return false
  }

  templates[index] = {
    ...templates[index],
    template: JSON.parse(JSON.stringify(template)), // Deep clone
    name: name || templates[index].name,
    description: description !== undefined ? description : templates[index].description,
    updatedAt: new Date().toISOString()
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(templates))
  return true
}

/**
 * Load all saved templates
 */
export const loadTemplates = (): SavedTemplate[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      return []
    }
    return JSON.parse(stored)
  } catch (error) {
    console.error('Error loading templates:', error)
    return []
  }
}

/**
 * Load a specific template by ID
 */
export const loadTemplate = (id: string): SavedTemplate | null => {
  const templates = loadTemplates()
  return templates.find(t => t.id === id) || null
}

/**
 * Delete a template
 */
export const deleteTemplate = (id: string): boolean => {
  const templates = loadTemplates()
  const filtered = templates.filter(t => t.id !== id)
  
  if (filtered.length === templates.length) {
    return false // Template not found
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
  return true
}

/**
 * Get template count
 */
export const getTemplateCount = (): number => {
  return loadTemplates().length
}

