/**
 * Centralized Design Token System
 * Single source of truth for all design tokens
 */

export interface ColorTokens {
  // Primary Colors
  primary: string
  'primary-dark': string
  'primary-light': string
  
  // Text Colors
  text: {
    primary: string
    secondary: string
    tertiary: string
  }
  
  // Surface Colors
  surface: {
    primary: string
    secondary: string
    soft: string
  }
  
  // Border Colors
  border: {
    primary: string
    subtle: string
  }
  
  // Status Colors
  success: string
  warning: string
  error: string
  info: string
  
  // Brand Colors
  brand: {
    blue: string
    yellow: string
    red: string
    green: string
  }
}

export interface SpacingTokens {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
}

export interface TypographyTokens {
  fontFamilies: {
    sans: string
    mono: string
    heading: string
  }
  fontSizes: {
    hero: string
    h1: string
    h2: string
    h3: string
    h4: string
    body: string
    small: string
    tiny: string
    code: string
  }
  fontWeights: {
    normal: number
    medium: number
    semibold: number
    bold: number
  }
  lineHeights: {
    tight: number
    normal: number
    relaxed: number
    code: number
  }
}

export interface ShadowTokens {
  elevation1: string
  elevation2: string
  elevation3: string
  sm: string
  md: string
  lg: string
}

export interface BorderRadiusTokens {
  sm: string
  md: string
  lg: string
  xl: string
}

export interface TransitionTokens {
  quick: string
  standard: string
  slow: string
  bounce: string
}

export interface DesignTokens {
  colors: ColorTokens
  spacing: SpacingTokens
  typography: TypographyTokens
  shadows: ShadowTokens
  borderRadius: BorderRadiusTokens
  transitions: TransitionTokens
}

/**
 * Default Design Tokens
 * Volt-inspired design system
 */
export const defaultTokens: DesignTokens = {
  colors: {
    primary: '#6366f1',
    'primary-dark': '#4f46e5',
    'primary-light': '#818cf8',
    text: {
      primary: '#0f172a',
      secondary: '#64748b',
      tertiary: '#94a3b8'
    },
    surface: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      soft: '#f1f5f9'
    },
    border: {
      primary: '#e2e8f0',
      subtle: '#f1f5f9'
    },
    success: '#34A853',
    warning: '#FBBC04',
    error: '#EA4335',
    info: '#6366f1',
    brand: {
      blue: '#6366f1',
      yellow: '#FBBC04',
      red: '#EA4335',
      green: '#34A853'
    }
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px'
  },
  typography: {
    fontFamilies: {
      sans: "'Inter', system-ui, -apple-system, sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', monospace",
      heading: "'IBM Plex Sans', 'Inter', system-ui, sans-serif"
    },
    fontSizes: {
      hero: '56px',
      h1: '48px',
      h2: '40px',
      h3: '28px',
      h4: '24px',
      body: '16px',
      small: '14px',
      tiny: '12px',
      code: '14px'
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeights: {
      tight: 1.2,
      normal: 1.4,
      relaxed: 1.6,
      code: 1.8
    }
  },
  shadows: {
    elevation1: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    elevation2: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    elevation3: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem'
  },
  transitions: {
    quick: '150ms ease-out',
    standard: '200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    slow: '600ms ease-out',
    bounce: '300ms cubic-bezier(0.34, 1.56, 0.64, 1)'
  }
}

/**
 * Get all tokens as a flat object for easy access
 */
export const getFlatTokens = (tokens: DesignTokens): Record<string, any> => {
  const flat: Record<string, any> = {}
  
  // Colors
  flat['color-primary'] = tokens.colors.primary
  flat['color-primary-dark'] = tokens.colors['primary-dark']
  flat['color-primary-light'] = tokens.colors['primary-light']
  flat['color-text-primary'] = tokens.colors.text.primary
  flat['color-text-secondary'] = tokens.colors.text.secondary
  flat['color-text-tertiary'] = tokens.colors.text.tertiary
  flat['color-surface-primary'] = tokens.colors.surface.primary
  flat['color-surface-secondary'] = tokens.colors.surface.secondary
  flat['color-surface-soft'] = tokens.colors.surface.soft
  flat['color-border-primary'] = tokens.colors.border.primary
  flat['color-border-subtle'] = tokens.colors.border.subtle
  flat['color-success'] = tokens.colors.success
  flat['color-warning'] = tokens.colors.warning
  flat['color-error'] = tokens.colors.error
  flat['color-info'] = tokens.colors.info
  
  // Spacing
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    flat[`spacing-${key}`] = value
  })
  
  // Typography
  Object.entries(tokens.typography.fontSizes).forEach(([key, value]) => {
    flat[`font-size-${key}`] = value
  })
  
  Object.entries(tokens.typography.fontWeights).forEach(([key, value]) => {
    flat[`font-weight-${key}`] = value
  })
  
  Object.entries(tokens.typography.lineHeights).forEach(([key, value]) => {
    flat[`line-height-${key}`] = value
  })
  
  // Shadows
  Object.entries(tokens.shadows).forEach(([key, value]) => {
    flat[`shadow-${key}`] = value
  })
  
  // Border Radius
  Object.entries(tokens.borderRadius).forEach(([key, value]) => {
    flat[`radius-${key}`] = value
  })
  
  // Transitions
  Object.entries(tokens.transitions).forEach(([key, value]) => {
    flat[`transition-${key}`] = value
  })
  
  return flat
}

/**
 * Clone tokens (deep copy)
 */
export const cloneTokens = (tokens: DesignTokens): DesignTokens => {
  return JSON.parse(JSON.stringify(tokens))
}

