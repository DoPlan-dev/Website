// Third-party integrations configuration
// All integrations are loaded conditionally and handle errors gracefully

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, properties?: Record<string, unknown>) => void
    dataLayer?: any[]
    _8n8?: any
    hotjar?: any
  }
}

/// <reference types="vite/client" />

// Google Analytics / Google Tag Manager
export const initGoogleAnalytics = (measurementId?: string) => {
  if (typeof window === 'undefined' || !measurementId) {
    console.warn('[Integrations] Google Analytics: Measurement ID not provided')
    return
  }

  try {
    // Load gtag script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || []
    window.gtag = function (...args: any[]) {
      if (window.dataLayer) {
        window.dataLayer.push(args)
      }
    } as Window['gtag']

    if (window.gtag) {
      window.gtag('js', new Date().toISOString())
      window.gtag('config', measurementId, {
        page_path: window.location.pathname,
      })
    }

    console.log('[Integrations] Google Analytics initialized')
  } catch (error) {
    console.error('[Integrations] Google Analytics initialization failed:', error)
  }
}

// Heatmap tracking (Hotjar or similar)
export const initHeatmapTracking = (siteId?: string) => {
  if (typeof window === 'undefined' || !siteId) {
    console.warn('[Integrations] Heatmap: Site ID not provided')
    return
  }

  try {
    // Example: Hotjar integration
    // Replace with actual heatmap service
    const script = document.createElement('script')
    script.innerHTML = `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${siteId},hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `
    document.head.appendChild(script)
    console.log('[Integrations] Heatmap tracking initialized')
  } catch (error) {
    console.error('[Integrations] Heatmap tracking initialization failed:', error)
  }
}

// 8n8 Chat integration
export const init8n8Chat = (apiKey?: string) => {
  if (typeof window === 'undefined' || !apiKey) {
    console.warn('[Integrations] 8n8 Chat: API key not provided')
    return
  }

  try {
    // Load 8n8 chat widget
    // Replace with actual 8n8 integration code
    const script = document.createElement('script')
    script.src = `https://8n8.io/widget.js`
    script.setAttribute('data-api-key', apiKey)
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      console.log('[Integrations] 8n8 Chat initialized')
    }

    script.onerror = () => {
      console.error('[Integrations] 8n8 Chat failed to load')
    }
  } catch (error) {
    console.error('[Integrations] 8n8 Chat initialization failed:', error)
  }
}

// Initialize all integrations
export const initIntegrations = () => {
  const analyticsId = import.meta.env.VITE_GA_MEASUREMENT_ID
  const heatmapId = import.meta.env.VITE_HEATMAP_SITE_ID
  const chatApiKey = import.meta.env.VITE_8N8_API_KEY

  // Initialize analytics (already partially set up in analytics.ts)
  if (analyticsId) {
    initGoogleAnalytics(analyticsId)
  }

  // Initialize heatmap tracking
  if (heatmapId) {
    initHeatmapTracking(heatmapId)
  }

  // Initialize 8n8 chat
  if (chatApiKey) {
    init8n8Chat(chatApiKey)
  }
}

