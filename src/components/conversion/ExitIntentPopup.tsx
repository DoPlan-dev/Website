import React, { useState, useEffect } from 'react'
import { Icon } from '../ui/Icon'
import { copyToClipboard } from '../../utils/clipboard'
import { trackCTAClick } from '../../lib/analytics'

export const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if user has already seen the popup (using sessionStorage)
    const hasSeenPopup = sessionStorage.getItem('exit-intent-shown')
    if (hasSeenPopup) {
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
        sessionStorage.setItem('exit-intent-shown', 'true')
        trackCTAClick('exit-intent-popup', 'shown')
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [hasShown])

  const handleClose = () => {
    setIsVisible(false)
    trackCTAClick('exit-intent-close', 'popup')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      return
    }

    // Here you would typically send to your email service
    // For now, just track and show success
    trackCTAClick('exit-intent-submit', 'popup')
    setSubmitted(true)
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsVisible(false)
      setEmail('')
      setSubmitted(false)
    }, 3000)
  }

  const handleCopyCommand = async () => {
    await copyToClipboard('npx @doplan-dev/cli')
    trackCTAClick('exit-intent-copy-command', 'popup')
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full relative border-t-4 border-google-blue">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-medium-gray hover:text-dark-text transition-colors"
          aria-label="Close popup"
        >
          <Icon name="x" size={24} color="currentColor" />
        </button>

        <div className="p-8">
          {!submitted ? (
            <>
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-light-yellow flex items-center justify-center">
                  <Icon name="rocket" size={48} color="#FBBC04" />
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-2xl font-bold text-dark-text text-center mb-2">
                Don't Leave Yet!
              </h2>

              {/* Copy */}
              <p className="text-medium-gray text-center mb-6">
                Get the first 5 minutes guide delivered to your email.
                <br />
                So you know exactly what to expect.
              </p>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border border-light-gray rounded-lg text-dark-text placeholder-medium-gray focus:outline-none focus:ring-2 focus:ring-google-blue min-h-[48px]"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-google-blue text-white font-semibold rounded-lg hover:bg-[#4f46e5] transition-all duration-200 shadow-md min-h-[48px]"
                >
                  Send Me the Guide
                </button>
              </form>

              {/* Alternative: Copy Command */}
              <div className="mt-4 text-center">
                <button
                  onClick={handleCopyCommand}
                  className="text-sm text-google-blue hover:underline flex items-center justify-center gap-1"
                >
                  <span>Or copy installation command instead</span>
                  <Icon name="terminal" size={16} color="#6366f1" />
                </button>
              </div>
            </>
          ) : (
            <div className="text-center">
              <Icon name="checkmark" size={64} color="#34A853" className="mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-dark-text mb-2">Check your email! ✓</h2>
              <p className="text-medium-gray">
                We've sent the guide to {email}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

