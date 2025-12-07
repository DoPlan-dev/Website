import React, { useState, useEffect } from 'react'
import { Icon } from '../ui/Icon'
import { copyToClipboard } from '../../utils/clipboard'
import { trackCTAClick } from '../../lib/analytics'
import { useLocation } from 'react-router-dom'

export const StickyHeaderCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Only show on homepage
    if (location.pathname !== '/') {
      setIsVisible(false)
      return
    }

    const handleScroll = () => {
      // Show after scrolling 25% of the page
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      setIsVisible(scrollPercent > 25)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const handleCopy = async () => {
    const success = await copyToClipboard('npx @doplan-dev/cli')
    if (success) {
      setCopied(true)
      trackCTAClick('sticky-header-cta', 'copy-command')
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-[64px] left-0 right-0 z-[9998] bg-white shadow-md border-b border-light-gray transition-transform duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Icon name="zap" size={20} color="#6366f1" />
            <span className="text-sm text-dark-text">Get started in 4 seconds</span>
          </div>
          <div className="flex-1 md:hidden"></div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-6 py-2 bg-google-blue text-white font-semibold rounded-lg hover:bg-[#4f46e5] transition-all duration-200 shadow-md min-h-[44px] whitespace-nowrap"
          >
            <Icon name={copied ? 'checkmark' : 'terminal'} size={18} color="#FFFFFF" />
            <span>{copied ? 'Copied!' : 'Try Now'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

