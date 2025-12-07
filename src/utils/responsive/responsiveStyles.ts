// Utility functions for managing responsive styles

import { ResponsiveStyles, BreakpointId } from '../../types/responsive'

/**
 * Get styles for a specific breakpoint (with inheritance)
 */
export function getBreakpointStyles(
  responsiveStyles: ResponsiveStyles,
  breakpointId: BreakpointId
): Record<string, any> {
  const base = responsiveStyles.base || {}
  const breakpointOverrides = responsiveStyles.breakpoints?.[breakpointId] || {}
  
  // Merge base with breakpoint-specific overrides
  return {
    ...base,
    ...breakpointOverrides
  }
}

/**
 * Set styles for a specific breakpoint
 */
export function setBreakpointStyles(
  responsiveStyles: ResponsiveStyles,
  breakpointId: BreakpointId,
  styles: Record<string, any>
): ResponsiveStyles {
  return {
    base: responsiveStyles.base || {},
    breakpoints: {
      ...responsiveStyles.breakpoints,
      [breakpointId]: styles
    }
  }
}

/**
 * Update a specific style property for a breakpoint
 */
export function updateBreakpointStyle(
  responsiveStyles: ResponsiveStyles,
  breakpointId: BreakpointId,
  property: string,
  value: any
): ResponsiveStyles {
  if (breakpointId === 'base' || breakpointId === 'mobile') {
    // Update base styles
    return {
      ...responsiveStyles,
      base: {
        ...responsiveStyles.base,
        [property]: value
      }
    }
  }
  
  // Update breakpoint-specific styles
  return {
    ...responsiveStyles,
    breakpoints: {
      ...responsiveStyles.breakpoints,
      [breakpointId]: {
        ...responsiveStyles.breakpoints[breakpointId],
        [property]: value
      }
    }
  }
}

/**
 * Apply styles to all breakpoints
 */
export function applyToAllBreakpoints(
  responsiveStyles: ResponsiveStyles,
  styles: Record<string, any>,
  breakpointIds: BreakpointId[]
): ResponsiveStyles {
  const updatedBreakpoints: Record<string, Record<string, any>> = { ...responsiveStyles.breakpoints }
  
  breakpointIds.forEach(bpId => {
    updatedBreakpoints[bpId] = {
      ...updatedBreakpoints[bpId],
      ...styles
    }
  })
  
  return {
    base: {
      ...responsiveStyles.base,
      ...styles
    },
    breakpoints: updatedBreakpoints
  }
}

/**
 * Check if a style is inherited from base
 */
export function isInherited(
  responsiveStyles: ResponsiveStyles,
  breakpointId: BreakpointId,
  property: string
): boolean {
  if (breakpointId === 'base' || breakpointId === 'mobile') {
    return false // Base styles are not inherited
  }
  
  const breakpointStyles = responsiveStyles.breakpoints?.[breakpointId] || {}
  return !(property in breakpointStyles) && property in (responsiveStyles.base || {})
}

/**
 * Remove breakpoint-specific override (inherit from base)
 */
export function removeBreakpointOverride(
  responsiveStyles: ResponsiveStyles,
  breakpointId: BreakpointId,
  property: string
): ResponsiveStyles {
  if (breakpointId === 'base' || breakpointId === 'mobile') {
    // Remove from base
    const newBase = { ...responsiveStyles.base }
    delete newBase[property]
    return {
      ...responsiveStyles,
      base: newBase
    }
  }
  
  // Remove from breakpoint overrides
  const newBreakpoints = { ...responsiveStyles.breakpoints }
  if (newBreakpoints[breakpointId]) {
    const newBreakpointStyles = { ...newBreakpoints[breakpointId] }
    delete newBreakpointStyles[property]
    newBreakpoints[breakpointId] = newBreakpointStyles
  }
  
  return {
    ...responsiveStyles,
    breakpoints: newBreakpoints
  }
}
