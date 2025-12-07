import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    cssMinify: true,
    target: 'es2020', // Support modern browsers (Chrome 90+, Safari 14+, Firefox 88+, Edge 90+)
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React and React DOM
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor'
          }
          // Radix UI components
          if (id.includes('node_modules/@radix-ui')) {
            return 'radix-ui'
          }
          // Framer Motion
          if (id.includes('node_modules/framer-motion')) {
            return 'framer-motion'
          }
          // DnD Kit
          if (id.includes('node_modules/@dnd-kit')) {
            return 'dnd-kit'
          }
          // Lucide icons
          if (id.includes('node_modules/lucide-react')) {
            return 'lucide-icons'
          }
          // Router
          if (id.includes('node_modules/react-router')) {
            return 'router'
          }
          // Large builder components
          if (id.includes('/builders/')) {
            return 'builders'
          }
        },
      },
    },
    // Optimize chunk sizes
    chunkSizeWarningLimit: 600,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})

