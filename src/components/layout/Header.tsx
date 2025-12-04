import React, { useState, useEffect } from 'react'

interface HeaderProps {
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#docs', label: 'Docs' },
    { href: '#community', label: 'Community' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-standard ${
        isScrolled
          ? 'bg-void/95 backdrop-blur-sm border-b border-cyan/20 shadow-elevation-1'
          : 'bg-transparent'
      } ${className}`}
    >
      <nav className="container mx-auto px-m md:px-xl py-m" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-h4 md:text-h3 font-bold text-light hover:text-cyan transition-standard"
            aria-label="DoPlan.dev Home"
          >
            DoPlan.dev
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-body text-mid hover:text-cyan transition-standard py-m min-h-[48px] flex items-center"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/DoPlan-dev/Website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body text-mid hover:text-cyan transition-standard py-m min-h-[48px] flex items-center"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-m text-light hover:text-cyan transition-standard focus:outline-none focus:ring-2 focus:ring-cyan rounded-moderate min-h-[48px] min-w-[48px] flex items-center justify-center"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-m pt-m border-t border-cyan/20">
            <div className="flex flex-col gap-m">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-body text-mid hover:text-cyan transition-standard py-m min-h-[48px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/DoPlan-dev/Website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body text-mid hover:text-cyan transition-standard py-m min-h-[48px] flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

