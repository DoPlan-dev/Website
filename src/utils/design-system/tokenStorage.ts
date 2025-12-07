/**
 * Token Storage for saving and loading custom token sets
 */

import { DesignTokens, defaultTokens, cloneTokens } from '../../data/designTokens'

const STORAGE_KEY = 'doplan-design-tokens'
const VERSION_KEY = 'doplan-design-tokens-version'
const CURRENT_VERSION = '1.0.0'

/**
 * Save custom tokens
 */
export const saveTokens = (tokens: DesignTokens): void => {
  try {
    const tokensToSave = cloneTokens(tokens)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tokensToSave))
    localStorage.setItem(VERSION_KEY, CURRENT_VERSION)
  } catch (error) {
    console.error('Error saving tokens:', error)
  }
}

/**
 * Load saved tokens
 */
export const loadTokens = (): DesignTokens | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      return null
    }
    
    const tokens = JSON.parse(stored) as DesignTokens
    return tokens
  } catch (error) {
    console.error('Error loading tokens:', error)
    return null
  }
}

/**
 * Get current tokens (saved or default)
 */
export const getCurrentTokens = (): DesignTokens => {
  const saved = loadTokens()
  return saved || cloneTokens(defaultTokens)
}

/**
 * Reset to default tokens
 */
export const resetTokens = (): DesignTokens => {
  localStorage.removeItem(STORAGE_KEY)
  localStorage.removeItem(VERSION_KEY)
  return cloneTokens(defaultTokens)
}

/**
 * Check if custom tokens exist
 */
export const hasCustomTokens = (): boolean => {
  return localStorage.getItem(STORAGE_KEY) !== null
}

