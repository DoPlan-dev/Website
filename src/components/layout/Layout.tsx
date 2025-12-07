import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen flex flex-col bg-light-bg text-dark-text ${className}`}>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-m focus:left-m focus:z-50 focus:px-m focus:py-s focus:bg-cyan focus:text-void focus:rounded-moderate focus:font-bold"
      >
        Skip to main content
      </a>

      <Header />
      
      <main id="main-content" className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  )
}

