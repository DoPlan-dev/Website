// Utility functions for positioning

import { PositioningStyles, Position } from '../../types/layoutControls'

/**
 * Generate positioning CSS from styles object
 */
export function generatePositioningCSS(styles: PositioningStyles): Record<string, string> {
  const css: Record<string, string> = {}

  if (styles.position) css.position = styles.position
  if (styles.top !== undefined) css.top = styles.top
  if (styles.right !== undefined) css.right = styles.right
  if (styles.bottom !== undefined) css.bottom = styles.bottom
  if (styles.left !== undefined) css.left = styles.left
  if (styles.zIndex !== undefined) {
    css.zIndex = styles.zIndex === 'auto' ? 'auto' : String(styles.zIndex)
  }

  return css
}

/**
 * Parse CSS positioning properties into PositioningStyles
 */
export function parsePositioningCSS(css: Record<string, string>): PositioningStyles {
  const styles: PositioningStyles = {}

  if (css.position) {
    styles.position = css.position as Position
  }
  if (css.top !== undefined) styles.top = css.top
  if (css.right !== undefined) styles.right = css.right
  if (css.bottom !== undefined) styles.bottom = css.bottom
  if (css.left !== undefined) styles.left = css.left
  if (css.zIndex !== undefined) {
    if (css.zIndex === 'auto') {
      styles.zIndex = 'auto'
    } else {
      const zIndex = parseInt(css.zIndex)
      if (!isNaN(zIndex)) {
        styles.zIndex = zIndex
      }
    }
  }

  return styles
}
