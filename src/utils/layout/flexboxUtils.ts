// Utility functions for Flexbox layout

import { FlexboxStyles, FlexDirection, FlexWrap, JustifyContent, AlignItems } from '../../types/layoutControls'

/**
 * Generate Flexbox CSS from styles object
 */
export function generateFlexboxCSS(styles: FlexboxStyles): Record<string, string> {
  const css: Record<string, string> = {}

  if (styles.display) css.display = styles.display
  if (styles.flexDirection) css.flexDirection = styles.flexDirection
  if (styles.flexWrap) css.flexWrap = styles.flexWrap
  if (styles.justifyContent) css.justifyContent = styles.justifyContent
  if (styles.alignItems) css.alignItems = styles.alignItems
  if (styles.alignContent) css.alignContent = styles.alignContent
  if (styles.gap) css.gap = styles.gap
  if (styles.rowGap) css.rowGap = styles.rowGap
  if (styles.columnGap) css.columnGap = styles.columnGap

  return css
}

/**
 * Parse CSS flexbox properties into FlexboxStyles
 */
export function parseFlexboxCSS(css: Record<string, string>): FlexboxStyles {
  const styles: FlexboxStyles = {}

  if (css.display === 'flex' || css.display === 'inline-flex') {
    styles.display = css.display as 'flex' | 'inline-flex'
  }
  if (css.flexDirection) {
    styles.flexDirection = css.flexDirection as FlexDirection
  }
  if (css.flexWrap) {
    styles.flexWrap = css.flexWrap as FlexWrap
  }
  if (css.justifyContent) {
    styles.justifyContent = css.justifyContent as JustifyContent
  }
  if (css.alignItems) {
    styles.alignItems = css.alignItems as AlignItems
  }
  if (css.alignContent) {
    styles.alignContent = css.alignContent as AlignContent
  }
  if (css.gap) {
    styles.gap = css.gap
  }
  if (css.rowGap) {
    styles.rowGap = css.rowGap
  }
  if (css.columnGap) {
    styles.columnGap = css.columnGap
  }

  return styles
}

/**
 * Get alignment grid position from justify-content value
 */
export function getJustifyContentPosition(value: JustifyContent): { row: number; col: number } {
  const positions: Record<JustifyContent, { row: number; col: number }> = {
    'flex-start': { row: 1, col: 1 },
    'flex-end': { row: 1, col: 3 },
    'center': { row: 1, col: 2 },
    'space-between': { row: 2, col: 1 },
    'space-around': { row: 2, col: 2 },
    'space-evenly': { row: 2, col: 3 }
  }
  return positions[value] || { row: 1, col: 2 }
}

/**
 * Get alignment grid position from align-items value
 */
export function getAlignItemsPosition(value: AlignItems): { row: number; col: number } {
  const positions: Record<AlignItems, { row: number; col: number }> = {
    'flex-start': { row: 1, col: 2 },
    'flex-end': { row: 3, col: 2 },
    'center': { row: 2, col: 2 },
    'baseline': { row: 2, col: 1 },
    'stretch': { row: 2, col: 3 }
  }
  return positions[value] || { row: 2, col: 2 }
}

/**
 * Get justify-content value from grid position
 */
export function getJustifyContentFromPosition(row: number, col: number): JustifyContent {
  if (row === 1 && col === 1) return 'flex-start'
  if (row === 1 && col === 3) return 'flex-end'
  if (row === 1 && col === 2) return 'center'
  if (row === 2 && col === 1) return 'space-between'
  if (row === 2 && col === 2) return 'space-around'
  if (row === 2 && col === 3) return 'space-evenly'
  return 'flex-start'
}

/**
 * Get align-items value from grid position
 */
export function getAlignItemsFromPosition(row: number, col: number): AlignItems {
  if (row === 1 && col === 2) return 'flex-start'
  if (row === 3 && col === 2) return 'flex-end'
  if (row === 2 && col === 2) return 'center'
  if (row === 2 && col === 1) return 'baseline'
  if (row === 2 && col === 3) return 'stretch'
  return 'stretch'
}
