// Color manipulation utilities

import { colord } from 'colord'
import { ColorObject, Gradient, GradientStop } from '../../types/styleControls'

/**
 * Convert ColorObject to CSS color string
 */
export function colorToCSS(color: ColorObject): string {
  if (color.alpha !== undefined && color.alpha < 1) {
    return colord(color.hex).alpha(color.alpha).toRgbString()
  }
  return color.hex
}

/**
 * Generate gradient CSS string
 */
export function generateGradientCSS(gradient: Gradient): string {
  const stops = gradient.stops
    .sort((a, b) => a.position - b.position)
    .map(stop => `${colorToCSS(parseColor(stop.color))} ${stop.position}%`)
    .join(', ')

  if (gradient.type === 'linear') {
    const angle = gradient.angle !== undefined ? `${gradient.angle}deg` : '180deg'
    return `linear-gradient(${angle}, ${stops})`
  } else {
    const position = gradient.position || 'center'
    return `radial-gradient(${position}, ${stops})`
  }
}

/**
 * Parse color string (re-export from styleParser for convenience)
 */
export function parseColor(value: string | undefined): ColorObject {
  if (!value) {
    return { hex: '#000000', alpha: 1 }
  }

  try {
    const color = colord(value)
    const rgb = color.toRgb()
    const hsl = color.toHsl()
    
    return {
      hex: color.toHex(),
      rgb: { r: rgb.r, g: rgb.g, b: rgb.b },
      hsl: { h: hsl.h, s: hsl.s, l: hsl.l },
      alpha: rgb.a
    }
  } catch {
    return { hex: '#000000', alpha: 1 }
  }
}

/**
 * Generate CSS variable reference
 */
export function generateCSSVariable(varName: string): string {
  return `var(--${varName})`
}
