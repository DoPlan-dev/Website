// Error tracking and monitoring utilities
// Supports Sentry for error tracking and Vercel Analytics for performance monitoring

declare global {
  interface Window {
    Sentry?: {
      init: (config: Record<string, unknown>) => void
      captureException: (error: Error, context?: Record<string, unknown>) => void
      captureMessage: (message: string, level?: string) => void
      setUser: (user: { id?: string; email?: string; username?: string }) => void
    }
  }
}

/// <reference types="vite/client" />

// Initialize Sentry error tracking
export const initErrorTracking = (dsn?: string, environment?: string) => {
  if (typeof window === 'undefined' || !dsn) {
    console.warn('[Monitoring] Sentry DSN not provided. Error tracking disabled.')
    return
  }

  try {
    // Dynamic import of Sentry SDK (optional dependency)
    // If @sentry/react is not installed, this will gracefully fail
    // Using string literal to avoid TypeScript compile-time checking
    const sentryModule = '@sentry/react'
    import(/* @vite-ignore */ sentryModule)
      .then((Sentry: any) => {
        Sentry.init({
          dsn,
          environment: environment || 'production',
          integrations: [
            new Sentry.BrowserTracing(),
            new Sentry.Replay({
              maskAllText: true,
              blockAllMedia: true,
            }),
          ],
          // Performance Monitoring
          tracesSampleRate: 1.0, // 100% of transactions for production
          // Session Replay
          replaysSessionSampleRate: 0.1, // 10% of sessions
          replaysOnErrorSampleRate: 1.0, // 100% of sessions with errors
          // Filter out localhost errors in development
          beforeSend(event: any) {
            if (window.location.hostname === 'localhost') {
              return null
            }
            return event
          },
        })

        console.log('[Monitoring] Sentry error tracking initialized')
      })
      .catch((error) => {
        // Sentry SDK not installed - this is okay, monitoring will use fallback
        console.warn('[Monitoring] Sentry SDK not available. Using fallback error tracking:', error)
      })
  } catch (error) {
    console.error('[Monitoring] Sentry initialization failed:', error)
  }
}

// Capture exception manually
export const captureException = (error: Error, context?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.Sentry) {
    window.Sentry.captureException(error, context)
  }
  // Fallback: log to console
  console.error('[Error]', error, context)
}

// Capture message manually
export const captureMessage = (message: string, level: 'info' | 'warning' | 'error' = 'info') => {
  if (typeof window !== 'undefined' && window.Sentry) {
    window.Sentry.captureMessage(message, level)
  }
  // Fallback: log to console
  console[level === 'error' ? 'error' : level === 'warning' ? 'warn' : 'log']('[Monitoring]', message)
}

// Set user context for error tracking
export const setUserContext = (user: { id?: string; email?: string; username?: string }) => {
  if (typeof window !== 'undefined' && window.Sentry) {
    window.Sentry.setUser(user)
  }
}

// Global error handler
export const setupGlobalErrorHandling = () => {
  if (typeof window === 'undefined') return

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    captureException(new Error(event.reason), {
      type: 'unhandledrejection',
      reason: event.reason,
    })
  })

  // Handle JavaScript errors
  window.addEventListener('error', (event) => {
    captureException(event.error || new Error(event.message), {
      type: 'javascript_error',
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
    })
  })
}

// Performance monitoring
export const trackPerformance = (metricName: string, value: number, unit: string = 'ms') => {
  // Send to Google Analytics if available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'performance_metric', {
      metric_name: metricName,
      value,
      unit,
    })
  }

  // Log to console in development
  if (import.meta.env.DEV) {
    console.log(`[Performance] ${metricName}: ${value}${unit}`)
  }
}

// Initialize all monitoring
export const initMonitoring = () => {
  const sentryDsn = import.meta.env.VITE_SENTRY_DSN as string | undefined
  const environment = import.meta.env.VITE_ENVIRONMENT || (import.meta.env.PROD ? 'production' : 'development')

  // Initialize error tracking
  if (sentryDsn) {
    initErrorTracking(sentryDsn, environment)
  }

  // Setup global error handling
  setupGlobalErrorHandling()

  // Track page load performance
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      const perfData = window.performance.timing
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart
      trackPerformance('page_load_time', pageLoadTime)
    })
  }
}

