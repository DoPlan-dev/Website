// Type definitions for responsive design system

export interface Breakpoint {
  id: string
  name: string
  minWidth?: number // in pixels
  maxWidth?: number // in pixels
  default?: boolean
  custom?: boolean // true for user-created breakpoints
}

export interface ResponsiveStyles {
  base: Record<string, any> // Base styles (mobile-first)
  breakpoints: Record<string, Record<string, any>> // Breakpoint-specific overrides
}

export interface ResponsiveLayout {
  base: Record<string, any>
  breakpoints: Record<string, Record<string, any>>
}

export type BreakpointId = 'mobile' | 'tablet' | 'desktop' | string

export interface ViewportSize {
  width: number
  height: number
  device?: 'mobile' | 'tablet' | 'desktop' | 'custom'
}

export interface ResponsiveConfig {
  breakpoints: Breakpoint[]
  activeBreakpoint: BreakpointId
  viewport: ViewportSize
}
