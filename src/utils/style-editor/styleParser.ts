// Utility functions to parse CSS values into structured objects

import { SpacingObject, TypographyStyles, ColorObject, Shadow, BorderRadius } from '../../types/styleControls'
import { colord } from 'colord'

/**
 * Parse padding/margin CSS value into SpacingObject
 * Supports: "10px", "10px 20px", "10px 20px 30px", "10px 20px 30px 40px"
 */
export function parseSpacing(value: string | undefined): SpacingObject {
  if (!value) {
    return { top: '0', right: '0', bottom: '0', left: '0' }
  }

  const parts = value.trim().split(/\s+/)
  
  if (parts.length === 1) {
    // All sides same
    return {
      top: parts[0],
      right: parts[0],
      bottom: parts[0],
      left: parts[0]
    }
  } else if (parts.length === 2) {
    // Top/Bottom, Left/Right
    return {
      top: parts[0],
      right: parts[1],
      bottom: parts[0],
      left: parts[1]
    }
  } else if (parts.length === 3) {
    // Top, Left/Right, Bottom
    return {
      top: parts[0],
      right: parts[1],
      bottom: parts[2],
      left: parts[1]
    }
  } else {
    // All four sides
    return {
      top: parts[0],
      right: parts[1],
      bottom: parts[2],
      left: parts[3]
    }
  }
}

/**
 * Generate CSS spacing value from SpacingObject
 */
export function generateSpacingCSS(spacing: SpacingObject): string {
  if (spacing.top === spacing.right && spacing.top === spacing.bottom && spacing.top === spacing.left) {
    return spacing.top
  } else if (spacing.top === spacing.bottom && spacing.right === spacing.left) {
    return `${spacing.top} ${spacing.right}`
  } else if (spacing.right === spacing.left) {
    return `${spacing.top} ${spacing.right} ${spacing.bottom}`
  } else {
    return `${spacing.top} ${spacing.right} ${spacing.bottom} ${spacing.left}`
  }
}

/**
 * Parse font size value
 */
export function parseFontSize(value: string | undefined): { value: number; unit: string } {
  if (!value) {
    return { value: 16, unit: 'px' }
  }

  const match = value.match(/^([\d.]+)(px|rem|em|%)?$/)
  if (match) {
    return {
      value: parseFloat(match[1]),
      unit: match[2] || 'px'
    }
  }

  return { value: 16, unit: 'px' }
}

/**
 * Parse color value into ColorObject
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
 * Parse border radius value
 */
export function parseBorderRadius(value: string | undefined): BorderRadius {
  if (!value) {
    return {
      topLeft: '0',
      topRight: '0',
      bottomLeft: '0',
      bottomRight: '0',
      linked: true
    }
  }

  const parts = value.trim().split(/\s+/)
  
  if (parts.length === 1) {
    return {
      topLeft: parts[0],
      topRight: parts[0],
      bottomLeft: parts[0],
      bottomRight: parts[0],
      linked: true
    }
  } else if (parts.length === 2) {
    return {
      topLeft: parts[0],
      topRight: parts[1],
      bottomLeft: parts[0],
      bottomRight: parts[1],
      linked: false
    }
  } else if (parts.length === 3) {
    return {
      topLeft: parts[0],
      topRight: parts[1],
      bottomLeft: parts[2],
      bottomRight: parts[1],
      linked: false
    }
  } else {
    return {
      topLeft: parts[0],
      topRight: parts[1],
      bottomLeft: parts[2],
      bottomRight: parts[3],
      linked: false
    }
  }
}

/**
 * Generate border radius CSS
 */
export function generateBorderRadiusCSS(radius: BorderRadius): string {
  if (radius.linked && radius.topLeft === radius.topRight && 
      radius.topLeft === radius.bottomLeft && radius.topLeft === radius.bottomRight) {
    return radius.topLeft
  } else if (radius.topLeft === radius.bottomRight && radius.topRight === radius.bottomLeft) {
    return `${radius.topLeft} ${radius.topRight}`
  } else if (radius.topLeft === radius.bottomRight && radius.topRight === radius.bottomLeft) {
    return `${radius.topLeft} ${radius.topRight} ${radius.bottomLeft}`
  } else {
    return `${radius.topLeft} ${radius.topRight} ${radius.bottomLeft} ${radius.bottomRight}`
  }
}

/**
 * Parse box-shadow value
 */
export function parseShadow(value: string | undefined): Shadow[] {
  if (!value || value === 'none') {
    return []
  }

  // Simple parser for single shadow
  // Format: [inset] offset-x offset-y blur-radius spread-radius color
  const shadows: Shadow[] = []
  const shadowStrings = value.split(',').map(s => s.trim())
  
  for (const shadowStr of shadowStrings) {
    const parts = shadowStr.match(/(inset\s+)?([-\d.]+(?:px|rem|em)?)\s+([-\d.]+(?:px|rem|em)?)\s+([\d.]+(?:px|rem|em)?)\s+([-\d.]+(?:px|rem|em)?)?\s*(.+)?/)
    if (parts) {
      shadows.push({
        x: parts[2] || '0',
        y: parts[3] || '0',
        blur: parts[4] || '0',
        spread: parts[5] || '0',
        color: parts[6]?.trim() || '#000000',
        inset: !!parts[1]
      })
    }
  }

  return shadows.length > 0 ? shadows : [{
    x: '0',
    y: '0',
    blur: '0',
    spread: '0',
    color: '#000000'
  }]
}

/**
 * Generate box-shadow CSS
 */
export function generateShadowCSS(shadows: Shadow[]): string {
  if (shadows.length === 0) {
    return 'none'
  }

  return shadows.map(shadow => {
    const parts = [
      shadow.inset ? 'inset' : '',
      shadow.x,
      shadow.y,
      shadow.blur,
      shadow.spread,
      shadow.color
    ].filter(Boolean).join(' ')
    
    return parts
  }).join(', ')
}
