// Utility functions for CSS unit conversion

import { CSSUnit } from '../../types/styleControls'

/**
 * Convert value from one unit to another
 * Note: This is a simplified converter. Full conversion would require context (parent font size, viewport size, etc.)
 */
export function convertUnit(
  value: number,
  fromUnit: CSSUnit,
  toUnit: CSSUnit,
  baseFontSize: number = 16 // Default browser font size
): number {
  if (fromUnit === toUnit) {
    return value
  }

  // Convert to pixels first
  let pixels: number
  switch (fromUnit) {
    case 'px':
      pixels = value
      break
    case 'rem':
      pixels = value * baseFontSize
      break
    case 'em':
      pixels = value * baseFontSize // Simplified - would need parent context
      break
    case '%':
      // Can't convert % without context
      return value
    case 'vh':
    case 'vw':
      // Can't convert viewport units without viewport size
      return value
    case 'auto':
      return value
    default:
      pixels = value
  }

  // Convert from pixels to target unit
  switch (toUnit) {
    case 'px':
      return pixels
    case 'rem':
      return pixels / baseFontSize
    case 'em':
      return pixels / baseFontSize // Simplified
    case '%':
      return value // Can't convert
    case 'vh':
    case 'vw':
      return value // Can't convert
    case 'auto':
      return value
    default:
      return pixels
  }
}

/**
 * Extract numeric value and unit from CSS value string
 */
export function parseValue(value: string): { value: number; unit: CSSUnit } {
  if (!value || value === 'auto' || value === 'inherit' || value === 'initial') {
    return { value: 0, unit: 'px' }
  }

  const match = value.match(/^([-\d.]+)(px|rem|em|%|vh|vw|auto)?$/)
  if (match) {
    return {
      value: parseFloat(match[1]),
      unit: (match[2] || 'px') as CSSUnit
    }
  }

  return { value: 0, unit: 'px' }
}

/**
 * Format value with unit
 */
export function formatValue(value: number, unit: CSSUnit): string {
  if (unit === 'auto') {
    return 'auto'
  }
  
  // Round to 2 decimal places for cleaner display
  const rounded = Math.round(value * 100) / 100
  return `${rounded}${unit}`
}
