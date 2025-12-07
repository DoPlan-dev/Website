// Performance monitoring utilities

export interface PerformanceMetric {
  name: string
  duration: number
  timestamp: number
  metadata?: Record<string, any>
}

export interface PerformanceReport {
  metrics: PerformanceMetric[]
  averageDuration: number
  minDuration: number
  maxDuration: number
  totalCalls: number
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = []
  private maxMetrics = 500 // Reduced from 1000 to limit memory
  private maxMetricAge = 10 * 60 * 1000 // 10 minutes - auto-cleanup old metrics

  /**
   * Measure function execution time
   */
  measure<T>(name: string, fn: () => T, metadata?: Record<string, any>): T {
    const start = performance.now()
    try {
      const result = fn()
      const duration = performance.now() - start
      this.recordMetric(name, duration, metadata)
      return result
    } catch (error) {
      const duration = performance.now() - start
      this.recordMetric(name, duration, { ...metadata, error: true })
      throw error
    }
  }

  /**
   * Measure async function execution time
   */
  async measureAsync<T>(
    name: string,
    fn: () => Promise<T>,
    metadata?: Record<string, any>
  ): Promise<T> {
    const start = performance.now()
    try {
      const result = await fn()
      const duration = performance.now() - start
      this.recordMetric(name, duration, metadata)
      return result
    } catch (error) {
      const duration = performance.now() - start
      this.recordMetric(name, duration, { ...metadata, error: true })
      throw error
    }
  }

  /**
   * Record a performance metric
   */
  recordMetric(name: string, duration: number, metadata?: Record<string, any>): void {
    const metric: PerformanceMetric = {
      name,
      duration,
      timestamp: Date.now(),
      metadata
    }

    this.metrics.push(metric)

    // Cleanup old metrics periodically (every 100 metrics)
    if (this.metrics.length % 100 === 0) {
      const now = Date.now()
      this.metrics = this.metrics.filter(
        m => now - m.timestamp < this.maxMetricAge
      )
    }

    // Limit stored metrics
    if (this.metrics.length > this.maxMetrics) {
      this.metrics = this.metrics.slice(-this.maxMetrics)
    }

    // Log slow operations in development
    if (process.env.NODE_ENV === 'development' && duration > 100) {
      console.warn(`[Performance] Slow operation: ${name} took ${duration.toFixed(2)}ms`, metadata)
    }
  }

  /**
   * Get performance report for a specific metric name
   */
  getReport(name: string): PerformanceReport | null {
    const filtered = this.metrics.filter(m => m.name === name)
    if (filtered.length === 0) return null

    const durations = filtered.map(m => m.duration)
    const totalDuration = durations.reduce((sum, d) => sum + d, 0)

    return {
      metrics: filtered,
      averageDuration: totalDuration / filtered.length,
      minDuration: Math.min(...durations),
      maxDuration: Math.max(...durations),
      totalCalls: filtered.length
    }
  }

  /**
   * Get all performance reports
   */
  getAllReports(): Record<string, PerformanceReport> {
    // Cleanup old metrics before generating reports
    const now = Date.now()
    this.metrics = this.metrics.filter(
      m => now - m.timestamp < this.maxMetricAge
    )

    const names = new Set(this.metrics.map(m => m.name))
    const reports: Record<string, PerformanceReport> = {}

    names.forEach(name => {
      const report = this.getReport(name)
      if (report) {
        reports[name] = report
      }
    })

    return reports
  }

  /**
   * Clear all metrics
   */
  clear(): void {
    this.metrics = []
  }

  /**
   * Get metrics summary
   */
  getSummary(): {
    totalMetrics: number
    uniqueOperations: number
    averageDuration: number
    slowestOperation: { name: string; duration: number } | null
  } {
    if (this.metrics.length === 0) {
      return {
        totalMetrics: 0,
        uniqueOperations: 0,
        averageDuration: 0,
        slowestOperation: null
      }
    }

    const uniqueOperations = new Set(this.metrics.map(m => m.name)).size
    const totalDuration = this.metrics.reduce((sum, m) => sum + m.duration, 0)
    const averageDuration = totalDuration / this.metrics.length

    const slowest = this.metrics.reduce((slowest, current) => {
      return current.duration > slowest.duration ? current : slowest
    }, this.metrics[0])

    return {
      totalMetrics: this.metrics.length,
      uniqueOperations,
      averageDuration,
      slowestOperation: {
        name: slowest.name,
        duration: slowest.duration
      }
    }
  }
}

// Singleton instance
export const performanceMonitor = new PerformanceMonitor()

/**
 * React hook for measuring component render time
 */
export function usePerformanceMeasure(componentName: string) {
  React.useEffect(() => {
    const start = performance.now()
    return () => {
      const duration = performance.now() - start
      performanceMonitor.recordMetric(`render:${componentName}`, duration)
    }
  })
}

// Import React for hook
import React from 'react'
