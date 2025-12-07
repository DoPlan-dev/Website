/**
 * Build Storage Utilities
 * Handles saving, loading, and managing custom builds for all builders
 */

export interface SavedBuild {
  id: string
  name: string
  description?: string
  builderType: 'section' | 'page' | 'header' | 'footer' | 'menu'
  buildData: any
  createdAt: number
  updatedAt: number
  tags?: string[]
}

const STORAGE_PREFIX = 'doplan_builder_'

export const buildStorage = {
  /**
   * Save a build to localStorage
   */
  save: (build: Omit<SavedBuild, 'id' | 'createdAt' | 'updatedAt'>): SavedBuild => {
    const id = `${build.builderType}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    const now = Date.now()
    
    const savedBuild: SavedBuild = {
      ...build,
      id,
      createdAt: now,
      updatedAt: now
    }

    const key = `${STORAGE_PREFIX}${id}`
    localStorage.setItem(key, JSON.stringify(savedBuild))
    
    // Update builds list
    const builds = buildStorage.getAll()
    builds.push(savedBuild)
    buildStorage.saveBuildsList(builds)

    return savedBuild
  },

  /**
   * Load a build by ID
   */
  load: (id: string): SavedBuild | null => {
    const key = `${STORAGE_PREFIX}${id}`
    const data = localStorage.getItem(key)
    if (!data) return null

    try {
      return JSON.parse(data) as SavedBuild
    } catch {
      return null
    }
  },

  /**
   * Update an existing build
   */
  update: (id: string, updates: Partial<SavedBuild>): SavedBuild | null => {
    const existing = buildStorage.load(id)
    if (!existing) return null

    const updated: SavedBuild = {
      ...existing,
      ...updates,
      id, // Ensure ID doesn't change
      updatedAt: Date.now()
    }

    const key = `${STORAGE_PREFIX}${id}`
    localStorage.setItem(key, JSON.stringify(updated))

    // Update builds list
    const builds = buildStorage.getAll()
    const index = builds.findIndex(b => b.id === id)
    if (index !== -1) {
      builds[index] = updated
      buildStorage.saveBuildsList(builds)
    }

    return updated
  },

  /**
   * Delete a build
   */
  delete: (id: string): boolean => {
    const key = `${STORAGE_PREFIX}${id}`
    localStorage.removeItem(key)

    // Update builds list
    const builds = buildStorage.getAll()
    const filtered = builds.filter(b => b.id !== id)
    buildStorage.saveBuildsList(filtered)

    return true
  },

  /**
   * Get all saved builds
   */
  getAll: (): SavedBuild[] => {
    const listKey = `${STORAGE_PREFIX}list`
    const listData = localStorage.getItem(listKey)
    
    if (!listData) return []

    try {
      const ids: string[] = JSON.parse(listData)
      const builds: SavedBuild[] = []
      
      for (const id of ids) {
        const build = buildStorage.load(id)
        if (build) {
          builds.push(build)
        }
      }

      // Sort by updatedAt (newest first)
      return builds.sort((a, b) => b.updatedAt - a.updatedAt)
    } catch {
      return []
    }
  },

  /**
   * Get builds by builder type
   */
  getByType: (builderType: SavedBuild['builderType']): SavedBuild[] => {
    return buildStorage.getAll().filter(build => build.builderType === builderType)
  },

  /**
   * Search builds
   */
  search: (query: string): SavedBuild[] => {
    const allBuilds = buildStorage.getAll()
    const lowerQuery = query.toLowerCase()

    return allBuilds.filter(build =>
      build.name.toLowerCase().includes(lowerQuery) ||
      build.description?.toLowerCase().includes(lowerQuery) ||
      build.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
    )
  },

  /**
   * Save builds list
   */
  saveBuildsList: (builds: SavedBuild[]): void => {
    const listKey = `${STORAGE_PREFIX}list`
    const ids = builds.map(b => b.id)
    localStorage.setItem(listKey, JSON.stringify(ids))
  },

  /**
   * Export build as JSON
   */
  exportAsJSON: (build: SavedBuild): string => {
    return JSON.stringify(build, null, 2)
  },

  /**
   * Import build from JSON
   */
  importFromJSON: (json: string): SavedBuild | null => {
    try {
      const build = JSON.parse(json) as SavedBuild
      
      // Validate build structure
      if (!build.name || !build.builderType || !build.buildData) {
        throw new Error('Invalid build structure')
      }

      // Generate new ID and timestamps
      const now = Date.now()
      const imported: SavedBuild = {
        ...build,
        id: `${build.builderType}_${now}_${Math.random().toString(36).substr(2, 9)}`,
        createdAt: now,
        updatedAt: now
      }

      // Save the imported build
      return buildStorage.save({
        name: imported.name,
        description: imported.description,
        builderType: imported.builderType,
        buildData: imported.buildData,
        tags: imported.tags
      })
    } catch (error) {
      console.error('Failed to import build:', error)
      return null
    }
  },

  /**
   * Clear all builds (use with caution)
   */
  clearAll: (): void => {
    const builds = buildStorage.getAll()
    builds.forEach(build => {
      const key = `${STORAGE_PREFIX}${build.id}`
      localStorage.removeItem(key)
    })
    
    const listKey = `${STORAGE_PREFIX}list`
    localStorage.removeItem(listKey)
  }
}

