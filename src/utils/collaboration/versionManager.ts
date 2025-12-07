// Version management utilities

import { Version, VersionHistory, Change } from '../../types/collaboration'
import { UnifiedWebsite } from '../../data/builders/unifiedWebsite'

/**
 * Create a new version from a website
 */
export function createVersion(
  website: UnifiedWebsite,
  createdBy: string,
  description?: string,
  isSnapshot: boolean = false
): Version {
  return {
    id: `version-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    version: generateVersionNumber(website),
    website: JSON.parse(JSON.stringify(website)), // Deep clone
    createdAt: Date.now(),
    createdBy,
    description,
    isSnapshot
  }
}

/**
 * Generate version number (semantic versioning)
 */
function generateVersionNumber(website: UnifiedWebsite): string {
  // Simple versioning: increment based on update count
  // In production, this would be more sophisticated
  const updateCount = website.updatedAt ? Math.floor((Date.now() - website.createdAt) / 1000) : 0
  return `1.0.${updateCount}`
}

/**
 * Compare two versions and generate changes
 */
export function compareVersions(
  oldVersion: Version,
  newVersion: Version,
  author: string
): Change[] {
  const changes: Change[] = []

  // Compare pages
  const oldPages = oldVersion.website.pages
  const newPages = newVersion.website.pages

  // Check for added/removed pages
  const oldPageIds = new Set(oldPages.map(p => p.id))
  const newPageIds = new Set(newPages.map(p => p.id))

  newPages.forEach(page => {
    if (!oldPageIds.has(page.id)) {
      changes.push({
        id: `change-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        versionId: newVersion.id,
        type: 'create',
        target: {
          type: 'page',
          id: page.id,
          path: `pages[${newPages.indexOf(page)}]`
        },
        newValue: page,
        timestamp: Date.now(),
        author
      })
    }
  })

  oldPages.forEach(page => {
    if (!newPageIds.has(page.id)) {
      changes.push({
        id: `change-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        versionId: newVersion.id,
        type: 'delete',
        target: {
          type: 'page',
          id: page.id
        },
        oldValue: page,
        timestamp: Date.now(),
        author
      })
    }
  })

  // Compare sections in existing pages
  oldPages.forEach((oldPage, pageIndex) => {
    const newPage = newPages.find(p => p.id === oldPage.id)
    if (!newPage) return

    const oldSectionIds = new Set(oldPage.sections.map(s => s.id))
    const newSectionIds = new Set(newPage.sections.map(s => s.id))

    // Added sections
    newPage.sections.forEach(section => {
      if (!oldSectionIds.has(section.id)) {
        changes.push({
          id: `change-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          versionId: newVersion.id,
          type: 'create',
          target: {
            type: 'section',
            id: section.id,
            path: `pages[${pageIndex}].sections[${newPage.sections.indexOf(section)}]`
          },
          newValue: section,
          timestamp: Date.now(),
          author
        })
      }
    })

    // Removed sections
    oldPage.sections.forEach(section => {
      if (!newSectionIds.has(section.id)) {
        changes.push({
          id: `change-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          versionId: newVersion.id,
          type: 'delete',
          target: {
            type: 'section',
            id: section.id,
            path: `pages[${pageIndex}].sections[${oldPage.sections.indexOf(section)}]`
          },
          oldValue: section,
          timestamp: Date.now(),
          author
        })
      }
    })

    // Updated sections
    oldPage.sections.forEach(oldSection => {
      const newSection = newPage.sections.find(s => s.id === oldSection.id)
      if (!newSection) return

      // Check for style changes
      const oldCustomizations = JSON.stringify(oldSection.customizations)
      const newCustomizations = JSON.stringify(newSection.customizations)

      if (oldCustomizations !== newCustomizations) {
        changes.push({
          id: `change-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          versionId: newVersion.id,
          type: 'style',
          target: {
            type: 'section',
            id: oldSection.id,
            path: `pages[${pageIndex}].sections[${newPage.sections.findIndex(s => s.id === oldSection.id)}]`
          },
          oldValue: oldSection.customizations,
          newValue: newSection.customizations,
          timestamp: Date.now(),
          author
        })
      }

      // Check for order changes
      if (oldSection.order !== newSection.order) {
        changes.push({
          id: `change-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          versionId: newVersion.id,
          type: 'move',
          target: {
            type: 'section',
            id: oldSection.id,
            path: `pages[${pageIndex}].sections[${newPage.sections.findIndex(s => s.id === oldSection.id)}]`
          },
          oldValue: oldSection.order,
          newValue: newSection.order,
          timestamp: Date.now(),
          author
        })
      }
    })
  })

  return changes
}

/**
 * Get version history
 */
export function getVersionHistory(versions: Version[]): VersionHistory {
  return {
    versions: versions.sort((a, b) => b.createdAt - a.createdAt),
    currentVersionId: versions[versions.length - 1]?.id || ''
  }
}

/**
 * Restore website from version
 */
export function restoreFromVersion(version: Version): UnifiedWebsite {
  return JSON.parse(JSON.stringify(version.website))
}

/**
 * Get version diff summary
 */
export function getVersionDiffSummary(changes: Change[]): {
  created: number
  updated: number
  deleted: number
  moved: number
  styled: number
} {
  return {
    created: changes.filter(c => c.type === 'create').length,
    updated: changes.filter(c => c.type === 'update').length,
    deleted: changes.filter(c => c.type === 'delete').length,
    moved: changes.filter(c => c.type === 'move').length,
    styled: changes.filter(c => c.type === 'style').length
  }
}
