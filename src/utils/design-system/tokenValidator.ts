/**
 * Token Validation Utilities
 * Ensure token consistency and accessibility
 */

import { DesignTokens } from '../../data/designTokens'

export interface ValidationIssue {
  level: 'error' | 'warning' | 'info'
  category: string
  message: string
  path: string
  suggestion?: string
}

/**
 * Convert hex color to RGB
 */
const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null
}

/**
 * Calculate relative luminance (WCAG)
 */
const getLuminance = (r: number, g: number, b: number): number => {
  const [rs, gs, bs] = [r, g, b].map((val) => {
    val = val / 255
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

/**
 * Calculate color contrast ratio (WCAG)
 */
const getContrastRatio = (color1: string, color2: string): number | null => {
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)

  if (!rgb1 || !rgb2) return null

  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b)
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b)

  const lighter = Math.max(lum1, lum2)
  const darker = Math.min(lum1, lum2)

  return (lighter + 0.05) / (darker + 0.05)
}

/**
 * Validate color contrast
 */
const validateColorContrast = (tokens: DesignTokens): ValidationIssue[] => {
  const issues: ValidationIssue[] = []
  const { colors } = tokens

  // Check text contrast on surfaces
  const textSurfacePairs = [
    { text: colors.text.primary, surface: colors.surface.primary, path: 'colors.text.primary / colors.surface.primary', minRatio: 4.5 },
    { text: colors.text.secondary, surface: colors.surface.primary, path: 'colors.text.secondary / colors.surface.primary', minRatio: 3.0 },
    { text: colors.text.primary, surface: colors.surface.secondary, path: 'colors.text.primary / colors.surface.secondary', minRatio: 4.5 },
    { text: colors.text.secondary, surface: colors.surface.secondary, path: 'colors.text.secondary / colors.surface.secondary', minRatio: 3.0 }
  ]

  textSurfacePairs.forEach(({ text, surface, path, minRatio }) => {
    const contrast = getContrastRatio(text, surface)
    if (contrast === null) {
      issues.push({
        level: 'error',
        category: 'Color Contrast',
        message: `Invalid color format for contrast check: ${path}`,
        path
      })
    } else if (contrast < minRatio) {
      const level = contrast < 3.0 ? 'error' : 'warning'
      issues.push({
        level,
        category: 'Color Contrast',
        message: `Low contrast ratio: ${contrast.toFixed(2)}:1 (minimum: ${minRatio}:1)`,
        path,
        suggestion: `Increase contrast between text and surface colors to meet WCAG AA standards`
      })
    }
  })

  // Check primary button contrast
  const buttonContrast = getContrastRatio('#ffffff', colors.primary)
  if (buttonContrast !== null && buttonContrast < 4.5) {
    issues.push({
      level: 'warning',
      category: 'Color Contrast',
      message: `Primary button text contrast may be insufficient: ${buttonContrast.toFixed(2)}:1`,
      path: 'colors.primary (button text)',
      suggestion: 'Ensure white text on primary button meets WCAG AA standards'
    })
  }

  return issues
}

/**
 * Validate spacing scale consistency
 */
const validateSpacingScale = (tokens: DesignTokens): ValidationIssue[] => {
  const issues: ValidationIssue[] = []
  const { spacing } = tokens

  const spacingValues: Array<{ key: string; value: number }> = Object.entries(spacing).map(([key, value]) => ({
    key,
    value: parseInt(value.replace('px', ''))
  }))

  // Check if spacing uses 4px base unit
  spacingValues.forEach(({ key, value }) => {
    if (value % 4 !== 0) {
      issues.push({
        level: 'warning',
        category: 'Spacing Scale',
        message: `Spacing value ${value}px is not a multiple of 4px`,
        path: `spacing.${key}`,
        suggestion: 'Consider using 4px increments for consistency (e.g., 4px, 8px, 16px, 24px)'
      })
    }
  })

  // Check if spacing scale is progressive
  const sortedSpacing = [...spacingValues].sort((a, b) => a.value - b.value)
  for (let i = 1; i < sortedSpacing.length; i++) {
    const prev = sortedSpacing[i - 1].value
    const curr = sortedSpacing[i].value
    if (curr <= prev) {
      issues.push({
        level: 'error',
        category: 'Spacing Scale',
        message: `Spacing scale not progressive: ${sortedSpacing[i].key} (${curr}px) should be greater than ${sortedSpacing[i - 1].key} (${prev}px)`,
        path: `spacing.${sortedSpacing[i].key}`
      })
    }
  }

  return issues
}

/**
 * Validate typography consistency
 */
const validateTypography = (tokens: DesignTokens): ValidationIssue[] => {
  const issues: ValidationIssue[] = []
  const { typography } = tokens

  // Check font size progression
  const fontSizeValues: Array<{ key: string; value: number }> = Object.entries(typography.fontSizes)
    .map(([key, value]) => ({
      key,
      value: parseInt(value.replace('px', ''))
    }))

  const sortedSizes = [...fontSizeValues].sort((a, b) => a.value - b.value)
  for (let i = 1; i < sortedSizes.length; i++) {
    const prev = sortedSizes[i - 1].value
    const curr = sortedSizes[i].value
    if (curr <= prev) {
      issues.push({
        level: 'error',
        category: 'Typography',
        message: `Font sizes not progressive: ${sortedSizes[i].key} (${curr}px) should be greater than ${sortedSizes[i - 1].key} (${prev}px)`,
        path: `typography.fontSizes.${sortedSizes[i].key}`
      })
    }
  }

  // Check font weight progression
  const weights = Object.values(typography.fontWeights).sort((a, b) => a - b)
  for (let i = 1; i < weights.length; i++) {
    if (weights[i] <= weights[i - 1]) {
      issues.push({
        level: 'warning',
        category: 'Typography',
        message: 'Font weights should be in ascending order',
        path: 'typography.fontWeights'
      })
      break
    }
  }

  // Check line height ranges
  Object.entries(typography.lineHeights).forEach(([key, value]) => {
    if (value < 1 || value > 2) {
      issues.push({
        level: 'warning',
        category: 'Typography',
        message: `Line height ${value} is outside recommended range (1.0 - 2.0)`,
        path: `typography.lineHeights.${key}`,
        suggestion: 'Line heights typically range from 1.0 to 2.0'
      })
    }
  })

  return issues
}

/**
 * Detect duplicate values
 */
const detectDuplicates = (tokens: DesignTokens): ValidationIssue[] => {
  const issues: ValidationIssue[] = []

  // Check for duplicate colors
  const colorValues = new Map<string, string[]>()
  const checkColor = (value: string, path: string) => {
    if (!colorValues.has(value)) {
      colorValues.set(value, [])
    }
    colorValues.get(value)!.push(path)
  }

  checkColor(tokens.colors.primary, 'colors.primary')
  checkColor(tokens.colors.text.primary, 'colors.text.primary')
  checkColor(tokens.colors.text.secondary, 'colors.text.secondary')
  checkColor(tokens.colors.surface.primary, 'colors.surface.primary')
  checkColor(tokens.colors.surface.secondary, 'colors.surface.secondary')

  colorValues.forEach((paths) => {
    if (paths.length > 1) {
      issues.push({
        level: 'info',
        category: 'Duplicates',
        message: `Same color value used in multiple places: ${paths.join(', ')}`,
        path: paths[0],
        suggestion: 'Consider using consistent semantic tokens'
      })
    }
  })

  // Check for duplicate spacing values
  const spacingValues = new Map<string, string[]>()
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    if (!spacingValues.has(value)) {
      spacingValues.set(value, [])
    }
    spacingValues.get(value)!.push(`spacing.${key}`)
  })

  spacingValues.forEach((paths) => {
    if (paths.length > 1) {
      issues.push({
        level: 'info',
        category: 'Duplicates',
        message: `Same spacing value used in multiple tokens: ${paths.join(', ')}`,
        path: paths[0]
      })
    }
  })

  return issues
}

/**
 * Validate all tokens
 */
export const validateTokens = (tokens: DesignTokens): ValidationIssue[] => {
  const issues: ValidationIssue[] = []

  // Run all validations
  issues.push(...validateColorContrast(tokens))
  issues.push(...validateSpacingScale(tokens))
  issues.push(...validateTypography(tokens))
  issues.push(...detectDuplicates(tokens))

  return issues.sort((a, b) => {
    const levelOrder = { error: 0, warning: 1, info: 2 }
    return levelOrder[a.level] - levelOrder[b.level]
  })
}

/**
 * Get validation summary
 */
export const getValidationSummary = (issues: ValidationIssue[]): {
  errors: number
  warnings: number
  info: number
  isValid: boolean
} => {
  const errors = issues.filter(i => i.level === 'error').length
  const warnings = issues.filter(i => i.level === 'warning').length
  const info = issues.filter(i => i.level === 'info').length

  return {
    errors,
    warnings,
    info,
    isValid: errors === 0
  }
}

