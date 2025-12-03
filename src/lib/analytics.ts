// Analytics tracking utilities
declare global {
  interface Window {
    gtag?: (command: string, eventName: string, properties?: Record<string, unknown>) => void
  }
}

export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  // Custom analytics implementation
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties)
  }
  // Add heatmap tracking
  console.log('Event tracked:', eventName, properties)
}

export const trackPageView = (path: string) => {
  trackEvent('page_view', { path })
}

export const trackCommandCopy = (command: string) => {
  trackEvent('command_copied', { command })
}

export const trackCTAClick = (type: string, location: string) => {
  trackEvent('cta_clicked', { type, location })
}

