/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Volt Exact Colors (PrimeVue Volt Palette)
        'volt': {
          'primary': '#6366f1',      // Indigo primary
          'primary-dark': '#4f46e5',
          'surface': '#ffffff',
          'surface-soft': '#f8fafc',
          'border': '#e2e8f0',
          'border-subtle': '#f1f5f9',
          'text-primary': '#0f172a',
          'text-secondary': '#64748b',
          'text-tertiary': '#94a3b8',
        },
        // Google Colors (for brand consistency)
        'google-blue': '#6366f1',
        'google-yellow': '#FBBC04',
        'google-red': '#EA4335',
        'google-green': '#34A853',
        // Light Theme Colors (legacy compatibility)
        'light-bg': '#F8F9FA',
        'dark-text': '#202124',
        'medium-gray': '#80868B',
        'light-gray': '#ECECEC',
        // Light color variants for backgrounds
        'light-blue': '#E8F0FE',
        'light-yellow': '#FEF7E0',
        'light-red': '#FDECEB',
        'light-green': '#E6F4EA',
        // Legacy colors (kept for compatibility, will migrate)
        void: '#F8F9FA',
        cyan: '#6366f1',
        purple: '#9D4EDD',
        light: '#202124',
        mid: '#80868B',
        success: '#34A853',
        warning: '#FBBC04',
        error: '#EA4335',
        'neutral-dark': '#5A6B7F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
        heading: ['Fira Code', 'JetBrains Mono', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['56px', { lineHeight: '1.2', fontWeight: '700' }],
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['40px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['28px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'tiny': ['12px', { lineHeight: '1.4', fontWeight: '500' }],
        'code': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        'terminal': ['13px', { lineHeight: '1.8', fontWeight: '400' }],
      },
      spacing: {
        // Volt Spacing Scale (4px base)
        'volt-1': '0.25rem',  // 4px
        'volt-2': '0.5rem',   // 8px
        'volt-3': '0.75rem',  // 12px
        'volt-4': '1rem',     // 16px
        'volt-5': '1.25rem',  // 20px
        'volt-6': '1.5rem',   // 24px
        'volt-8': '2rem',     // 32px
        'volt-10': '2.5rem',  // 40px
        'volt-12': '3rem',    // 48px
        'volt-16': '4rem',    // 64px
        // Legacy spacing (for compatibility)
        'xs': '4px',
        's': '8px',
        'm': '16px',
        'l': '24px',
        'xl': '32px',
        'xxl': '48px',
        'xxxl': '64px',
      },
      boxShadow: {
        // Volt-Inspired Shadows (Subtle and professional)
        'volt-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'volt': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'volt-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'volt-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        // Legacy shadows (for compatibility)
        'elevation-1': '0 2px 8px rgba(0, 217, 255, 0.08)',
        'elevation-2': '0 4px 16px rgba(0, 217, 255, 0.12), 0 0 24px rgba(157, 78, 221, 0.06)',
        'elevation-3': '0 8px 32px rgba(0, 217, 255, 0.16), 0 0 48px rgba(157, 78, 221, 0.1)',
        'glow-primary': '0 0 20px rgba(0, 217, 255, 0.4)',
        'glow-secondary': '0 0 20px rgba(157, 78, 221, 0.3)',
        'glow-primary-hover': '0 0 30px rgba(0, 217, 255, 0.6), 0 12px 48px rgba(0, 217, 255, 0.2)',
      },
      borderRadius: {
        // Volt-Inspired Border Radius
        'volt-sm': '0.375rem',  // 6px
        'volt': '0.5rem',       // 8px
        'volt-md': '0.75rem',   // 12px
        'volt-lg': '1rem',      // 16px
        // Legacy radius (for compatibility)
        'subtle': '4px',
        'moderate': '8px',
        'large': '12px',
        'smooth': '16px',
      },
      transitionDuration: {
        'quick': '150ms',
        'standard': '200ms',
        'entrance': '600ms',
        'bounce': '300ms',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00D9FF 0%, #9D4EDD 100%)',
        'gradient-achievement': 'radial-gradient(circle, #00D98E 0%, #9D4EDD 100%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.sr-only': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: '0',
        },
        '.focus\\:not-sr-only:focus': {
          position: 'static',
          width: 'auto',
          height: 'auto',
          padding: 'inherit',
          margin: 'inherit',
          overflow: 'visible',
          clip: 'auto',
          whiteSpace: 'normal',
        },
      })
    },
  ],
}

