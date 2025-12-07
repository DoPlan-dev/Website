// Generate CSS from style objects

import { TypographyStyles, BackgroundStyle } from '../../types/styleControls'
import { generateGradientCSS } from './colorUtils'
import { generateSpacingCSS, generateBorderRadiusCSS, generateShadowCSS } from './styleParser'
import { SpacingObject, BorderRadius, Shadow } from '../../types/styleControls'

/**
 * Generate complete CSS object from style properties
 */
export function generateCSS(styles: Record<string, any>): string {
  const cssProperties: string[] = []

  for (const [key, value] of Object.entries(styles)) {
    if (value !== undefined && value !== null && value !== '') {
      const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      cssProperties.push(`${cssKey}: ${value}`)
    }
  }

  return cssProperties.join('; ')
}

/**
 * Generate typography CSS
 */
export function generateTypographyCSS(typography: TypographyStyles): Record<string, string> {
  const css: Record<string, string> = {}

  if (typography.fontSize) css.fontSize = typography.fontSize
  if (typography.lineHeight) css.lineHeight = typography.lineHeight
  if (typography.letterSpacing) css.letterSpacing = typography.letterSpacing
  if (typography.fontWeight) css.fontWeight = String(typography.fontWeight)
  if (typography.textTransform) css.textTransform = typography.textTransform
  if (typography.fontFamily) css.fontFamily = typography.fontFamily

  return css
}

/**
 * Generate background CSS
 */
export function generateBackgroundCSS(background: BackgroundStyle): string {
  if (background.type === 'solid' && background.color) {
    return background.color
  } else if (background.type === 'gradient' && background.gradient) {
    return generateGradientCSS(background.gradient)
  } else if (background.type === 'image' && background.image) {
    const parts = [`url(${background.image.url})`]
    if (background.image.position) parts.push(background.image.position)
    if (background.image.size) parts.push(background.image.size)
    if (background.image.repeat) parts.push(background.image.repeat)
    return parts.join(' ')
  }
  return ''
}
