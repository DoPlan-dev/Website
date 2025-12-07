import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@radix-ui/themes'
import { LucideIcon } from '../ui/LucideIcon'
import { copyToClipboard } from '../../utils/clipboard'
import { trackCTAClick } from '../../lib/analytics'

interface HeaderProps {
  className?: string
}

export const HeaderNew: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isInSecondSection, setIsInSecondSection] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Check if we've scrolled past the hero section (entering workflow section)
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const scrollPosition = window.scrollY + window.innerHeight * 0.1 // Trigger slightly before hero ends
        setIsInSecondSection(scrollPosition >= heroBottom)
      }
    }

    handleScroll() // Check initial position
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location])

  const handleGetStarted = async () => {
    const success = await copyToClipboard('npx @doplan-dev/cli')
    if (success) {
      setCopied(true)
      trackCTAClick('get-started', 'header')
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const leftNavLinks = [
    { href: '/features', label: 'Features', icon: 'Layers' as const },
    { href: '/changelog', label: 'Changelog', icon: 'Star' as const },
    { href: '/blog', label: 'Blog', icon: 'Book' as const },
  ]

  const rightNavLinks = [
    { href: '/docs', label: 'Docs', icon: 'Book' as const },
  ]

  const isBlueHeader = isInSecondSection

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isBlueHeader
          ? 'bg-[#6366f1] shadow-md'
          : isScrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-6 shadow-sm'
          : 'bg-white'
      } ${className}`}
    >
      <nav className="container mx-auto px-4 md:px-8 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Left Side: Logo + Left Nav */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`text-xl md:text-2xl font-bold transition-colors duration-200 ${
                isBlueHeader
                  ? 'text-white hover:text-white/90'
                  : 'text-dark-text hover:text-google-blue'
              }`}
              style={{ fontFamily: "'IBM Plex Sans', 'Inter', system-ui, sans-serif" }}
              aria-label="DoPlan.dev Home"
            >
              DoPlan<span style={{ color: isBlueHeader ? '#ffffff' : '#6366f1' }}>.dev</span>
            </Link>

            {/* Left Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {leftNavLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-base transition-colors duration-200 py-2 min-h-[48px] flex items-center gap-2 ${
                    isBlueHeader
                      ? location.pathname === link.href
                        ? 'text-white font-semibold opacity-100'
                        : 'text-white/90 hover:text-white opacity-90'
                      : location.pathname === link.href
                      ? 'text-google-blue font-semibold'
                      : 'text-dark-text hover:text-google-blue'
                  }`}
                >
                  <LucideIcon name={link.icon} size={18} color={isBlueHeader ? '#ffffff' : (location.pathname === link.href ? '#6366f1' : 'currentColor')} variant="outline" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side: Right Nav */}
          <div className="hidden md:flex items-center gap-8">
            {rightNavLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-base transition-colors duration-200 py-2 min-h-[48px] flex items-center gap-2 ${
                  isBlueHeader
                    ? location.pathname === link.href
                      ? 'text-white font-semibold opacity-100'
                      : 'text-white/90 hover:text-white opacity-90'
                    : location.pathname === link.href
                    ? 'text-google-blue font-semibold'
                    : 'text-dark-text hover:text-google-blue'
                }`}
              >
                <LucideIcon name={link.icon} size={18} color={isBlueHeader ? '#ffffff' : (location.pathname === link.href ? '#6366f1' : 'currentColor')} variant="outline" />
                <span>{link.label}</span>
              </Link>
            ))}
            <a
              href="https://github.com/DoPlan-dev/CLI"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-base transition-colors duration-200 py-2 min-h-[48px] flex items-center justify-center ${
                isBlueHeader
                  ? 'text-white/90 hover:text-white'
                  : 'text-dark-text hover:text-google-blue'
              }`}
              aria-label="GitHub"
            >
              <LucideIcon name="Github" size={20} color={isBlueHeader ? '#ffffff' : 'currentColor'} variant="outline" />
            </a>
            <Button
              size="3"
              onClick={handleGetStarted}
              className={isBlueHeader ? 'border-white text-white hover:bg-white/10' : ''}
              style={{
                minHeight: '48px',
                ...(isBlueHeader
                  ? {
                      backgroundColor: 'transparent',
                      color: '#ffffff',
                      border: '2px solid #ffffff',
                    }
                  : {}),
              }}
              variant={isBlueHeader ? 'outline' : 'solid'}
            >
              {copied ? 'Copied!' : 'Get Started'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors duration-200 focus:outline-none rounded-lg min-h-[48px] min-w-[48px] flex items-center justify-center ${
              isBlueHeader
                ? 'text-white hover:text-white/90 focus:ring-2 focus:ring-white/50'
                : 'text-dark-text hover:text-google-blue focus:ring-2 focus:ring-google-blue'
            }`}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <LucideIcon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} color={isBlueHeader ? '#ffffff' : 'currentColor'} variant="outline" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4" style={{ backgroundColor: '#6366f1', borderRadius: '0.75rem', padding: '1rem' }}>
            <div className="flex flex-col gap-2">
              {leftNavLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-base transition-colors duration-200 py-3 min-h-[48px] flex items-center gap-2 text-white ${
                    location.pathname === link.href
                      ? 'font-semibold opacity-100'
                      : 'opacity-90 hover:opacity-100'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <LucideIcon name={link.icon} size={18} color="#FFFFFF" variant="outline" />
                  <span>{link.label}</span>
                </Link>
              ))}
              {rightNavLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-base transition-colors duration-200 py-3 min-h-[48px] flex items-center gap-2 text-white ${
                    location.pathname === link.href
                      ? 'font-semibold opacity-100'
                      : 'opacity-90 hover:opacity-100'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <LucideIcon name={link.icon} size={18} color="#FFFFFF" variant="outline" />
                  <span>{link.label}</span>
                </Link>
              ))}
              <a
                href="https://github.com/DoPlan-dev/CLI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-white opacity-90 hover:opacity-100 transition-opacity duration-200 py-3 min-h-[48px] flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <LucideIcon name="Github" size={20} color="#FFFFFF" variant="outline" />
                <span>GitHub</span>
              </a>
              <Button
                size="3"
                onClick={() => {
                  handleGetStarted()
                  setIsMobileMenuOpen(false)
                }}
                className="w-full mt-2"
                style={{ 
                  minHeight: '48px',
                  backgroundColor: '#ffffff',
                  color: '#6366f1'
                }}
              >
                {copied ? 'Copied!' : 'Get Started'}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

