/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#0A0E27',
        cyan: '#00D9FF',
        purple: '#9D4EDD',
        light: '#E8F0FF',
        mid: '#B0BBCC',
        success: '#00D98E',
        warning: '#FF9D3D',
        error: '#FF4757',
        'neutral-dark': '#5A6B7F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
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
        'xs': '4px',
        's': '8px',
        'm': '16px',
        'l': '24px',
        'xl': '32px',
        'xxl': '48px',
        'xxxl': '64px',
      },
      boxShadow: {
        'elevation-1': '0 2px 8px rgba(0, 217, 255, 0.08)',
        'elevation-2': '0 4px 16px rgba(0, 217, 255, 0.12), 0 0 24px rgba(157, 78, 221, 0.06)',
        'elevation-3': '0 8px 32px rgba(0, 217, 255, 0.16), 0 0 48px rgba(157, 78, 221, 0.1)',
        'glow-primary': '0 0 20px rgba(0, 217, 255, 0.4)',
        'glow-secondary': '0 0 20px rgba(157, 78, 221, 0.3)',
        'glow-primary-hover': '0 0 30px rgba(0, 217, 255, 0.6), 0 12px 48px rgba(0, 217, 255, 0.2)',
      },
      borderRadius: {
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
  plugins: [],
}

