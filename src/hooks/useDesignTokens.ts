import { useState, useEffect } from 'react'

export interface DesignTokens {
  colors: {
    primary: string
    primaryHover: string
    textPrimary: string
    textSecondary: string
    textTertiary: string
    surface: string
    surfaceSoft: string
    border: string
    borderSubtle: string
  }
  typography: {
    headingFont: string
    bodyFont: string
    monoFont: string
    headingSizes: {
      h1: string
      h2: string
      h3: string
      h4: string
    }
  }
  spacing: {
    sectionPadding: string
    cardPadding: string
    spacingScale: Record<string, string>
  }
  borderRadius: {
    button: string
    card: string
  }
  shadows: {
    sm: string
    md: string
    lg: string
  }
}

const defaultTokens: DesignTokens = {
  colors: {
    primary: '#6366f1',
    primaryHover: '#4f46e5',
    textPrimary: '#0f172a',
    textSecondary: '#64748b',
    textTertiary: '#94a3b8',
    surface: '#ffffff',
    surfaceSoft: '#f8fafc',
    border: '#e2e8f0',
    borderSubtle: '#f1f5f9',
  },
  typography: {
    headingFont: "'IBM Plex Sans', 'Inter', system-ui, sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    monoFont: "'Fira Code', 'JetBrains Mono', monospace",
    headingSizes: {
      h1: 'clamp(2.5rem, 5vw, 4rem)',
      h2: 'clamp(2rem, 4vw, 2.5rem)',
      h3: '1.875rem',
      h4: '1.5rem',
    },
  },
  spacing: {
    sectionPadding: 'py-20 md:py-32',
    cardPadding: '1rem',
    spacingScale: {
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
      '12': '3rem',
      '16': '4rem',
    },
  },
  borderRadius: {
    button: '0.5rem',
    card: '0.75rem',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
}

export const useDesignTokens = () => {
  const [tokens, setTokens] = useState<DesignTokens>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('design-tokens')
      if (saved) {
        try {
          return { ...defaultTokens, ...JSON.parse(saved) }
        } catch {
          return defaultTokens
        }
      }
    }
    return defaultTokens
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('design-tokens', JSON.stringify(tokens))
    }
  }, [tokens])

  const updateTokens = (updates: Partial<DesignTokens>) => {
    setTokens((prev) => ({
      ...prev,
      ...Object.entries(updates).reduce((acc, [key, value]) => {
        if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
          acc[key] = { ...prev[key as keyof DesignTokens], ...value }
        } else {
          acc[key] = value
        }
        return acc
      }, {} as any),
    }))
  }

  const updateColor = (colorKey: keyof DesignTokens['colors'], value: string) => {
    setTokens((prev) => ({
      ...prev,
      colors: {
        ...prev.colors,
        [colorKey]: value,
      },
    }))
  }

  const resetTokens = () => {
    setTokens(defaultTokens)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('design-tokens')
    }
  }

  return {
    tokens,
    updateTokens,
    updateColor,
    resetTokens,
  }
}

