/**
 * Utilities for reordering components in the component tree
 */

import { SectionComponent } from '../../data/sectionTemplates'

/**
 * Find component by ID recursively
 */
export const findComponentById = (
  components: SectionComponent[],
  id: string
): { component: SectionComponent; parent: SectionComponent | null; index: number } | null => {
  for (let i = 0; i < components.length; i++) {
    if (components[i].id === id) {
      return { component: components[i], parent: null, index: i }
    }
    
    if (components[i].children) {
      const found = findComponentById(components[i].children!, id)
      if (found) {
        return found.parent === null
          ? { ...found, parent: components[i], index: found.index }
          : found
      }
    }
  }
  return null
}

/**
 * Remove component from its current position
 */
export const removeComponent = (
  components: SectionComponent[],
  id: string
): { newComponents: SectionComponent[]; removedComponent: SectionComponent | null } => {
  const newComponents = [...components]
  
  for (let i = 0; i < newComponents.length; i++) {
    if (newComponents[i].id === id) {
      const removed = newComponents.splice(i, 1)[0]
      return { newComponents, removedComponent: removed }
    }
    
    if (newComponents[i].children) {
      const result = removeComponent(newComponents[i].children!, id)
      if (result.removedComponent) {
        newComponents[i] = {
          ...newComponents[i],
          children: result.newComponents
        }
        return { newComponents, removedComponent: result.removedComponent }
      }
    }
  }
  
  return { newComponents, removedComponent: null }
}

/**
 * Insert component at target position
 */
export const insertComponent = (
  components: SectionComponent[],
  component: SectionComponent,
  targetId: string,
  position: 'before' | 'after' | 'inside'
): SectionComponent[] => {
  const newComponents = [...components]
  
  if (position === 'inside') {
    for (let i = 0; i < newComponents.length; i++) {
      if (newComponents[i].id === targetId) {
        newComponents[i] = {
          ...newComponents[i],
          children: [...(newComponents[i].children || []), component]
        }
        return newComponents
      }
      
      if (newComponents[i].children) {
        newComponents[i] = {
          ...newComponents[i],
          children: insertComponent(newComponents[i].children!, component, targetId, position)
        }
      }
    }
    return newComponents
  }
  
  // Before or after
  for (let i = 0; i < newComponents.length; i++) {
    if (newComponents[i].id === targetId) {
      const insertIndex = position === 'before' ? i : i + 1
      newComponents.splice(insertIndex, 0, component)
      return newComponents
    }
    
    if (newComponents[i].children) {
      newComponents[i] = {
        ...newComponents[i],
        children: insertComponent(newComponents[i].children!, component, targetId, position)
      }
    }
  }
  
  return newComponents
}

/**
 * Reorder components at the same level
 */
export const reorderComponents = (
  components: SectionComponent[],
  activeId: string,
  overId: string
): SectionComponent[] => {
  // For simplicity, only reorder top-level components for now
  const activeIndex = components.findIndex(c => c.id === activeId)
  const overIndex = components.findIndex(c => c.id === overId)
  
  if (activeIndex === -1 || overIndex === -1) {
    return components
  }
  
  const newComponents = [...components]
  const [removed] = newComponents.splice(activeIndex, 1)
  newComponents.splice(overIndex, 0, removed)
  
  return newComponents
}

