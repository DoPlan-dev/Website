/**
 * Sharing utilities for builders
 * Generate shareable URLs and import from URLs
 */

import { buildStorage, SavedBuild } from './buildStorage'

export interface ShareableBuild {
  builderType: SavedBuild['builderType']
  buildData: any
  name?: string
}

/**
 * Generate a shareable URL from build data
 */
export const generateShareableURL = (build: ShareableBuild): string => {
  try {
    const encoded = btoa(JSON.stringify(build))
    const baseUrl = window.location.origin + window.location.pathname
    return `${baseUrl}?share=${encoded}`
  } catch (error) {
    console.error('Failed to generate shareable URL:', error)
    throw error
  }
}

/**
 * Import build from shareable URL
 */
export const importFromShareableURL = (shareParam: string): ShareableBuild | null => {
  try {
    const decoded = atob(shareParam)
    const build = JSON.parse(decoded) as ShareableBuild
    return build
  } catch (error) {
    console.error('Failed to import from shareable URL:', error)
    return null
  }
}

/**
 * Get share param from current URL
 */
export const getShareParamFromURL = (): string | null => {
  const params = new URLSearchParams(window.location.search)
  return params.get('share')
}

/**
 * Copy shareable URL to clipboard
 */
export const copyShareableURL = async (build: ShareableBuild): Promise<boolean> => {
  try {
    const url = generateShareableURL(build)
    await navigator.clipboard.writeText(url)
    return true
  } catch (error) {
    console.error('Failed to copy URL:', error)
    return false
  }
}

/**
 * Save shared build to storage
 */
export const saveSharedBuild = (sharedBuild: ShareableBuild): SavedBuild | null => {
  return buildStorage.save({
    name: sharedBuild.name || `Shared ${sharedBuild.builderType}`,
    description: 'Imported from shareable link',
    builderType: sharedBuild.builderType,
    buildData: sharedBuild.buildData
  })
}

