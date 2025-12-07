// Change tracking utilities

import { Change } from '../../types/collaboration'
import { PageSection } from '../../data/builders/unifiedWebsite'

export interface ChangeTracker {
  changes: Change[]
  startTracking: () => void
  stopTracking: () => void
  recordChange: (change: Omit<Change, 'id' | 'timestamp' | 'versionId' | 'author'>) => void
  getChanges: () => Change[]
  clearChanges: () => void
}

/**
 * Create a change tracker
 */
export function createChangeTracker(versionId: string, author: string): ChangeTracker {
  const changes: Change[] = []

  return {
    changes,
    startTracking: () => {
      // Start tracking changes
    },
    stopTracking: () => {
      // Stop tracking changes
    },
    recordChange: (change) => {
      const fullChange: Change = {
        ...change,
        id: `change-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        versionId,
        timestamp: Date.now(),
        author
      }
      changes.push(fullChange)
    },
    getChanges: () => [...changes],
    clearChanges: () => {
      changes.length = 0
    }
  }
}

/**
 * Track section creation
 */
export function trackSectionCreate(
  tracker: ChangeTracker,
  section: PageSection,
  pageIndex: number,
  sectionIndex: number
): void {
  tracker.recordChange({
    type: 'create',
    target: {
      type: 'section',
      id: section.id,
      path: `pages[${pageIndex}].sections[${sectionIndex}]`
    },
    newValue: section
  } as Omit<Change, 'id' | 'timestamp' | 'versionId' | 'author'>)
}

/**
 * Track section update
 */
export function trackSectionUpdate(
  tracker: ChangeTracker,
  sectionId: string,
  oldValue: any,
  newValue: any,
  pageIndex: number,
  sectionIndex: number
): void {
  tracker.recordChange({
    type: 'update',
    target: {
      type: 'section',
      id: sectionId,
      path: `pages[${pageIndex}].sections[${sectionIndex}]`
    },
    oldValue,
    newValue
  } as Omit<Change, 'id' | 'timestamp' | 'versionId' | 'author'>)
}

/**
 * Track section delete
 */
export function trackSectionDelete(
  tracker: ChangeTracker,
  section: PageSection,
  pageIndex: number,
  sectionIndex: number
): void {
  tracker.recordChange({
    type: 'delete',
    target: {
      type: 'section',
      id: section.id,
      path: `pages[${pageIndex}].sections[${sectionIndex}]`
    },
    oldValue: section
  } as Omit<Change, 'id' | 'timestamp' | 'versionId' | 'author'>)
}

/**
 * Track style change
 */
export function trackStyleChange(
  tracker: ChangeTracker,
  targetId: string,
  targetType: 'section' | 'component',
  oldStyles: any,
  newStyles: any,
  path?: string
): void {
  tracker.recordChange({
    type: 'style',
    target: {
      type: targetType,
      id: targetId,
      path
    },
    oldValue: oldStyles,
    newValue: newStyles
  } as Omit<Change, 'id' | 'timestamp' | 'versionId' | 'author'>)
}

/**
 * Get changes summary
 */
export function getChangesSummary(changes: Change[]): {
  total: number
  byType: Record<Change['type'], number>
  byTarget: Record<string, number>
} {
  const byType: Record<Change['type'], number> = {
    create: 0,
    update: 0,
    delete: 0,
    move: 0,
    style: 0,
    content: 0
  }

  const byTarget: Record<string, number> = {}

  changes.forEach(change => {
    byType[change.type] = (byType[change.type] || 0) + 1
    const targetKey = `${change.target.type}:${change.target.id}`
    byTarget[targetKey] = (byTarget[targetKey] || 0) + 1
  })

  return {
    total: changes.length,
    byType,
    byTarget
  }
}
