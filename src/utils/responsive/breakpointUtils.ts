// Utility functions for breakpoint management

import { Breakpoint, BreakpointId } from '../../types/responsive'

/**
 * Default breakpoints
 */
export const DEFAULT_BREAKPOINTS: Breakpoint[] = [
  {
    id: 'mobile',
    name: 'Mobile',
    minWidth: 0,
    maxWidth: 767,
    default: true
  },
  {
    id: 'tablet',
    name: 'Tablet',
    minWidth: 768,
    maxWidth: 1023,
    default: true
  },
  {
    id: 'desktop',
    name: 'Desktop',
    minWidth: 1024,
    maxWidth: undefined,
    default: true
  }
]

/**
 * Get breakpoint by ID
 */
export function getBreakpoint(breakpoints: Breakpoint[], id: BreakpointId): Breakpoint | undefined {
  return breakpoints.find(bp => bp.id === id)
}

/**
 * Get active breakpoint for a given width
 */
export function getActiveBreakpoint(breakpoints: Breakpoint[], width: number): Breakpoint | undefined {
  // Sort breakpoints by minWidth (ascending)
  const sorted = [...breakpoints].sort((a, b) => (a.minWidth || 0) - (b.minWidth || 0))
  
  // Find the breakpoint that matches the width
  for (let i = sorted.length - 1; i >= 0; i--) {
    const bp = sorted[i]
    if (bp.minWidth !== undefined && width >= bp.minWidth) {
      if (bp.maxWidth === undefined || width <= bp.maxWidth) {
        return bp
      }
    }
  }
  
  // Return mobile as default
  return sorted[0]
}

/**
 * Generate CSS media query for breakpoint
 */
export function generateMediaQuery(breakpoint: Breakpoint): string {
  const parts: string[] = []
  
  if (breakpoint.minWidth !== undefined) {
    parts.push(`(min-width: ${breakpoint.minWidth}px)`)
  }
  
  if (breakpoint.maxWidth !== undefined) {
    parts.push(`(max-width: ${breakpoint.maxWidth}px)`)
  }
  
  return parts.join(' and ')
}

/**
 * Generate CSS for responsive styles
 */
export function generateResponsiveCSS(
  baseStyles: Record<string, any>,
  breakpointStyles: Record<string, Record<string, any>>,
  breakpoints: Breakpoint[]
): string {
  let css = ''
  
  // Base styles (mobile-first)
  const baseCSS = Object.entries(baseStyles)
    .map(([key, value]) => {
      const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      return `  ${cssKey}: ${value};`
    })
    .join('\n')
  
  if (baseCSS) {
    css += `.element {\n${baseCSS}\n}\n\n`
  }
  
  // Breakpoint-specific styles
  Object.entries(breakpointStyles).forEach(([breakpointId, styles]) => {
    const breakpoint = getBreakpoint(breakpoints, breakpointId)
    if (!breakpoint) return
    
    const mediaQuery = generateMediaQuery(breakpoint)
    const stylesCSS = Object.entries(styles)
      .map(([key, value]) => {
        const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
        return `    ${cssKey}: ${value};`
      })
      .join('\n')
    
    if (stylesCSS) {
      css += `@media ${mediaQuery} {\n  .element {\n${stylesCSS}\n  }\n}\n\n`
    }
  })
  
  return css
}

/**
 * Validate breakpoint
 */
export function validateBreakpoint(breakpoint: Breakpoint, allBreakpoints: Breakpoint[]): boolean {
  if (!breakpoint.id || !breakpoint.name) {
    return false
  }
  
  // Check for overlapping breakpoints
  const overlapping = allBreakpoints.filter(bp => {
    if (bp.id === breakpoint.id) return false
    
    const bpMin = bp.minWidth || 0
    const bpMax = bp.maxWidth || Infinity
    const newMin = breakpoint.minWidth || 0
    const newMax = breakpoint.maxWidth || Infinity
    
    return (newMin >= bpMin && newMin <= bpMax) || 
           (newMax >= bpMin && newMax <= bpMax) ||
           (newMin <= bpMin && newMax >= bpMax)
  })
  
  return overlapping.length === 0
}

/**
 * Get breakpoint width range as string
 */
export function getBreakpointRange(breakpoint: Breakpoint): string {
  if (breakpoint.minWidth === undefined && breakpoint.maxWidth === undefined) {
    return 'All sizes'
  }
  
  if (breakpoint.minWidth !== undefined && breakpoint.maxWidth !== undefined) {
    return `${breakpoint.minWidth}px - ${breakpoint.maxWidth}px`
  }
  
  if (breakpoint.minWidth !== undefined) {
    return `${breakpoint.minWidth}px+`
  }
  
  if (breakpoint.maxWidth !== undefined) {
    return `up to ${breakpoint.maxWidth}px`
  }
  
  return 'All sizes'
}
