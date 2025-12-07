/**
 * Token Export Utilities
 * Export design tokens to various formats
 */

import { DesignTokens, getFlatTokens } from '../../data/designTokens'

/**
 * Export tokens as JSON
 */
export const exportAsJSON = (tokens: DesignTokens): string => {
  return JSON.stringify(tokens, null, 2)
}

/**
 * Export tokens as CSS variables
 */
export const exportAsCSS = (tokens: DesignTokens): string => {
  const flat = getFlatTokens(tokens)
  let css = ':root {\n'
  
  Object.entries(flat).forEach(([key, value]) => {
    const cssVar = `--${key.replace(/-/g, '-')}`
    css += `  ${cssVar}: ${value};\n`
  })
  
  css += '}\n'
  return css
}

/**
 * Export tokens as TypeScript
 */
export const exportAsTypeScript = (tokens: DesignTokens): string => {
  return `export const designTokens: DesignTokens = ${JSON.stringify(tokens, null, 2)}`
}

/**
 * Export tokens as Tailwind config
 */
export const exportAsTailwindConfig = (tokens: DesignTokens): string => {
  const config = {
    theme: {
      extend: {
        colors: {
          primary: tokens.colors.primary,
          'primary-dark': tokens.colors['primary-dark'],
          'primary-light': tokens.colors['primary-light'],
          text: tokens.colors.text,
          surface: tokens.colors.surface,
          border: tokens.colors.border,
          success: tokens.colors.success,
          warning: tokens.colors.warning,
          error: tokens.colors.error
        },
        spacing: tokens.spacing,
        fontSize: tokens.typography.fontSizes,
        fontFamily: tokens.typography.fontFamilies,
        fontWeight: tokens.typography.fontWeights,
        lineHeight: tokens.typography.lineHeights,
        boxShadow: tokens.shadows,
        borderRadius: tokens.borderRadius,
        transitionDuration: {
          quick: '150ms',
          standard: '200ms',
          slow: '600ms'
        }
      }
    }
  }
  
  return `export default ${JSON.stringify(config, null, 2)}`
}

/**
 * Export format types
 */
export type ExportFormat = 'json' | 'css' | 'typescript' | 'tailwind'

/**
 * Export tokens in specified format
 */
export const exportTokens = (tokens: DesignTokens, format: ExportFormat): string => {
  switch (format) {
    case 'json':
      return exportAsJSON(tokens)
    case 'css':
      return exportAsCSS(tokens)
    case 'typescript':
      return exportAsTypeScript(tokens)
    case 'tailwind':
      return exportAsTailwindConfig(tokens)
    default:
      return exportAsJSON(tokens)
  }
}

