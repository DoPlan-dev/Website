import React, { useState, useEffect } from 'react'
import { Card, Heading, Text, Button, Flex, Badge } from '@radix-ui/themes'
import { LucideIcon } from '../ui/LucideIcon'

export interface PerformanceMetrics {
  // Core Web Vitals
  lcp?: number // Largest Contentful Paint (ms)
  fid?: number // First Input Delay (ms)
  cls?: number // Cumulative Layout Shift
  fcp?: number // First Contentful Paint (ms)
  ttfb?: number // Time to First Byte (ms)
  
  // Resource metrics
  domContentLoaded?: number // DOMContentLoaded (ms)
  loadComplete?: number // Window load (ms)
  
  // Additional metrics
  jsSize?: number // Total JS bundle size (KB)
  cssSize?: number // Total CSS bundle size (KB)
  imageCount?: number // Number of images
  imageTotalSize?: number // Total image size (KB)
  
  // Connection
  connectionType?: string
  effectiveType?: string
}

export const usePerformanceMonitor = (): PerformanceMetrics => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({})

  useEffect(() => {
    // Wait for page to load
    if (typeof window === 'undefined') return

    const collectMetrics = () => {
      const newMetrics: PerformanceMetrics = {}

      // Collect Core Web Vitals if available (requires web-vitals library or browser support)
      if ('PerformanceObserver' in window) {
        // LCP (Largest Contentful Paint)
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            const lastEntry = entries[entries.length - 1] as any
            newMetrics.lcp = lastEntry.renderTime || lastEntry.loadTime
            setMetrics(prev => ({ ...prev, lcp: newMetrics.lcp }))
          })
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
        } catch (e) {
          // Fallback if LCP not supported
        }

        // CLS (Cumulative Layout Shift)
        try {
          let clsValue = 0
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries() as any[]) {
              if (!entry.hadRecentInput) {
                clsValue += entry.value
              }
            }
            newMetrics.cls = clsValue
            setMetrics(prev => ({ ...prev, cls: clsValue }))
          })
          clsObserver.observe({ entryTypes: ['layout-shift'] })
        } catch (e) {
          // Fallback if CLS not supported
        }

        // FCP (First Contentful Paint)
        try {
          const fcpObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.name === 'first-contentful-paint') {
                newMetrics.fcp = entry.startTime
                setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
              }
            }
          })
          fcpObserver.observe({ entryTypes: ['paint'] })
        } catch (e) {
          // Fallback if FCP not supported
        }
      }

      // Navigation timing
      if (window.performance && window.performance.timing) {
        const timing = window.performance.timing
        newMetrics.domContentLoaded = timing.domContentLoadedEventEnd - timing.navigationStart
        newMetrics.loadComplete = timing.loadEventEnd - timing.navigationStart
        newMetrics.ttfb = timing.responseStart - timing.navigationStart
      }

      // Resource sizes
      if (window.performance && window.performance.getEntriesByType) {
        const resources = window.performance.getEntriesByType('resource') as PerformanceResourceTiming[]
        let jsSize = 0
        let cssSize = 0
        let imageCount = 0
        let imageTotalSize = 0

        resources.forEach((resource: any) => {
          const size = resource.transferSize || 0
          if (resource.name.includes('.js') || resource.initiatorType === 'script') {
            jsSize += size
          } else if (resource.name.includes('.css') || resource.initiatorType === 'css') {
            cssSize += size
          } else if (resource.initiatorType === 'img') {
            imageCount++
            imageTotalSize += size
          }
        })

        newMetrics.jsSize = Math.round(jsSize / 1024) // KB
        newMetrics.cssSize = Math.round(cssSize / 1024) // KB
        newMetrics.imageCount = imageCount
        newMetrics.imageTotalSize = Math.round(imageTotalSize / 1024) // KB
      }

      // Connection info
      if ((navigator as any).connection) {
        const connection = (navigator as any).connection
        newMetrics.connectionType = connection.type || 'unknown'
        newMetrics.effectiveType = connection.effectiveType || 'unknown'
      }

      setMetrics(newMetrics)
    }

    // Collect metrics after page load
    if (document.readyState === 'complete') {
      collectMetrics()
    } else {
      window.addEventListener('load', collectMetrics)
      return () => window.removeEventListener('load', collectMetrics)
    }
  }, [])

  return metrics
}

interface PerformanceMonitorProps {
  showDetails?: boolean
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ showDetails = true }) => {
  const metrics = usePerformanceMonitor()
  const [isExpanded, setIsExpanded] = useState(false)

  const getMetricColor = (value: number | undefined, thresholds: { good: number; needsImprovement: number }, isReverse: boolean = false): string => {
    if (value === undefined) return '#64748b'
    if (isReverse) {
      // Lower is better (e.g., LCP, FCP)
      return value <= thresholds.good ? '#10b981' : value <= thresholds.needsImprovement ? '#f59e0b' : '#ef4444'
    } else {
      // Higher is better
      return value >= thresholds.good ? '#10b981' : value >= thresholds.needsImprovement ? '#f59e0b' : '#ef4444'
    }
  }

  const formatMetric = (value: number | undefined, unit: string = ''): string => {
    if (value === undefined) return '—'
    if (unit === 'ms') {
      return `${Math.round(value)}ms`
    }
    if (unit === 'KB') {
      return `${value}KB`
    }
    return `${value}${unit}`
  }

  return (
    <Card style={{ padding: '1.5rem' }}>
      <Flex align="center" justify="between" mb="4">
        <Heading size="5" style={{ fontFamily: "'IBM Plex Sans', 'Inter', system-ui, sans-serif" }}>
          Performance Metrics
        </Heading>
        {showDetails && (
          <Button
            size="2"
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <LucideIcon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={16} color="currentColor" variant="outline" />
          </Button>
        )}
      </Flex>

      {/* Core Web Vitals */}
      <div className="space-y-3">
        <Heading size="4" mb="3" style={{ fontFamily: "'IBM Plex Sans', 'Inter', system-ui, sans-serif" }}>
          Core Web Vitals
        </Heading>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
        }}>
          {/* LCP */}
          <div style={{
            padding: '1rem',
            border: '1px solid #e2e8f0',
            borderRadius: '0.5rem',
            background: '#f8fafc',
          }}>
            <Text size="2" style={{ color: '#64748b', marginBottom: '0.5rem', display: 'block' }}>
              LCP
            </Text>
            <Text size="4" style={{
              color: getMetricColor(metrics.lcp, { good: 2500, needsImprovement: 4000 }),
              fontWeight: 600,
              fontFamily: "'IBM Plex Sans', 'Inter', system-ui, sans-serif",
            }}>
              {formatMetric(metrics.lcp, 'ms')}
            </Text>
            <Text size="1" style={{ color: '#64748b', marginTop: '0.25rem', display: 'block' }}>
              Largest Contentful Paint
            </Text>
          </div>

          {/* FCP */}
          <div style={{
            padding: '1rem',
            border: '1px solid #e2e8f0',
            borderRadius: '0.5rem',
            background: '#f8fafc',
          }}>
            <Text size="2" style={{ color: '#64748b', marginBottom: '0.5rem', display: 'block' }}>
              FCP
            </Text>
            <Text size="4" style={{
              color: getMetricColor(metrics.fcp, { good: 1800, needsImprovement: 3000 }),
              fontWeight: 600,
              fontFamily: "'IBM Plex Sans', 'Inter', system-ui, sans-serif",
            }}>
              {formatMetric(metrics.fcp, 'ms')}
            </Text>
            <Text size="1" style={{ color: '#64748b', marginTop: '0.25rem', display: 'block' }}>
              First Contentful Paint
            </Text>
          </div>

          {/* CLS */}
          <div style={{
            padding: '1rem',
            border: '1px solid #e2e8f0',
            borderRadius: '0.5rem',
            background: '#f8fafc',
          }}>
            <Text size="2" style={{ color: '#64748b', marginBottom: '0.5rem', display: 'block' }}>
              CLS
            </Text>
            <Text size="4" style={{
              color: getMetricColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 }, true),
              fontWeight: 600,
              fontFamily: "'IBM Plex Sans', 'Inter', system-ui, sans-serif",
            }}>
              {metrics.cls !== undefined ? metrics.cls.toFixed(3) : '—'}
            </Text>
            <Text size="1" style={{ color: '#64748b', marginTop: '0.25rem', display: 'block' }}>
              Cumulative Layout Shift
            </Text>
          </div>
        </div>
      </div>

      {/* Additional Metrics */}
      {isExpanded && showDetails && (
        <div className="space-y-3" style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0' }}>
          <Heading size="4" mb="3" style={{ fontFamily: "'IBM Plex Sans', 'Inter', system-ui, sans-serif" }}>
            Additional Metrics
          </Heading>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1rem',
          }}>
            <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '0.5rem' }}>
              <Text size="1" style={{ color: '#64748b' }}>TTFB</Text>
              <Text size="3" style={{ fontWeight: 600, display: 'block' }}>
                {formatMetric(metrics.ttfb, 'ms')}
              </Text>
            </div>
            <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '0.5rem' }}>
              <Text size="1" style={{ color: '#64748b' }}>DOM Load</Text>
              <Text size="3" style={{ fontWeight: 600, display: 'block' }}>
                {formatMetric(metrics.domContentLoaded, 'ms')}
              </Text>
            </div>
            <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '0.5rem' }}>
              <Text size="1" style={{ color: '#64748b' }}>JS Size</Text>
              <Text size="3" style={{ fontWeight: 600, display: 'block' }}>
                {formatMetric(metrics.jsSize, 'KB')}
              </Text>
            </div>
            <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '0.5rem' }}>
              <Text size="1" style={{ color: '#64748b' }}>CSS Size</Text>
              <Text size="3" style={{ fontWeight: 600, display: 'block' }}>
                {formatMetric(metrics.cssSize, 'KB')}
              </Text>
            </div>
            <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '0.5rem' }}>
              <Text size="1" style={{ color: '#64748b' }}>Images</Text>
              <Text size="3" style={{ fontWeight: 600, display: 'block' }}>
                {metrics.imageCount || 0}
              </Text>
            </div>
            {metrics.effectiveType && (
              <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '0.5rem' }}>
                <Text size="1" style={{ color: '#64748b' }}>Connection</Text>
                <Text size="3" style={{ fontWeight: 600, display: 'block' }}>
                  {metrics.effectiveType}
                </Text>
              </div>
            )}
          </div>
        </div>
      )}
    </Card>
  )
}

