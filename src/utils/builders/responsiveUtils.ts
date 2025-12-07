/**
 * Responsive Breakpoint Utilities
 * Handle breakpoint-specific properties and styles
 */

export type Breakpoint = 'mobile' | 'tablet' | 'desktop'

export interface ResponsiveValue<T> {
  mobile?: T
  tablet?: T
  desktop?: T
  default?: T
}

export interface ResponsiveProperties {
  [key: string]: ResponsiveValue<any>
}

/**
 * Get value for specific breakpoint with fallback
 */
export const getResponsiveValue = <T>(
  value: ResponsiveValue<T> | T | undefined,
  breakpoint: Breakpoint
): T | undefined => {
  if (!value) return undefined

  // If it's not a responsive value, return as-is
  if (typeof value !== 'object' || !('mobile' in value || 'tablet' in value || 'desktop' in value)) {
    return value as T
  }

  const responsive = value as ResponsiveValue<T>

  // Get value for breakpoint
  const breakpointValue = responsive[breakpoint]
  if (breakpointValue !== undefined) return breakpointValue

  // Fallback chain: tablet -> desktop -> default
  if (breakpoint === 'mobile') {
    return responsive.tablet || responsive.desktop || responsive.default
  }
  if (breakpoint === 'tablet') {
    return responsive.desktop || responsive.default
  }
  return responsive.default
}

/**
 * Set value for specific breakpoint
 */
export const setResponsiveValue = <T>(
  current: ResponsiveValue<T> | T | undefined,
  breakpoint: Breakpoint,
  value: T
): ResponsiveValue<T> => {
  // If current is not a responsive value, convert it
  if (!current || typeof current !== 'object' || !('mobile' in current || 'tablet' in current || 'desktop' in current)) {
    return {
      default: current as T,
      [breakpoint]: value
    }
  }

  // Update existing responsive value
  return {
    ...(current as ResponsiveValue<T>),
    [breakpoint]: value
  }
}

/**
 * Get all breakpoint values
 */
export const getAllBreakpointValues = <T>(value: ResponsiveValue<T> | T | undefined): {
  mobile: T | undefined
  tablet: T | undefined
  desktop: T | undefined
  default: T | undefined
} => {
  if (!value) {
    return { mobile: undefined, tablet: undefined, desktop: undefined, default: undefined }
  }

  if (typeof value !== 'object' || !('mobile' in value || 'tablet' in value || 'desktop' in value)) {
    return {
      mobile: value as T,
      tablet: value as T,
      desktop: value as T,
      default: value as T
    }
  }

  const responsive = value as ResponsiveValue<T>
  return {
    mobile: responsive.mobile,
    tablet: responsive.tablet,
    desktop: responsive.desktop,
    default: responsive.default
  }
}

/**
 * Generate CSS for responsive values
 */
export const generateResponsiveCSS = (
  property: string,
  value: ResponsiveValue<string> | string | undefined,
  prefix: string = ''
): string => {
  if (!value) return ''

  // If not responsive, return single value
  if (typeof value !== 'object' || !('mobile' in value || 'tablet' in value || 'desktop' in value)) {
    return `${prefix}${property}: ${value};`
  }

  const responsive = value as ResponsiveValue<string>
  const css: string[] = []

  // Default (mobile-first)
  if (responsive.default) {
    css.push(`${prefix}${property}: ${responsive.default};`)
  }

  // Tablet breakpoint
  if (responsive.tablet) {
    css.push(`@media (min-width: 768px) { ${prefix}${property}: ${responsive.tablet}; }`)
  }

  // Desktop breakpoint
  if (responsive.desktop) {
    css.push(`@media (min-width: 1024px) { ${prefix}${property}: ${responsive.desktop}; }`)
  }

  return css.join('\n')
}

/**
 * Breakpoint widths
 */
export const BREAKPOINT_WIDTHS: Record<Breakpoint, string> = {
  mobile: '375px',
  tablet: '768px',
  desktop: '100%'
}

/**
 * Check if current window matches breakpoint
 */
export const matchesBreakpoint = (breakpoint: Breakpoint): boolean => {
  if (typeof window === 'undefined') return false

  const width = window.innerWidth
  switch (breakpoint) {
    case 'mobile':
      return width < 768
    case 'tablet':
      return width >= 768 && width < 1024
    case 'desktop':
      return width >= 1024
    default:
      return false
  }
}

