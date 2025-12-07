// Memory leak detection utilities

export interface MemorySnapshot {
  timestamp: number
  heapUsed: number
  heapTotal: number
  external: number
}

export interface MemoryLeakReport {
  isLeaking: boolean
  growthRate: number // bytes per second
  snapshots: MemorySnapshot[]
  warnings: string[]
}

class MemoryLeakDetector {
  private snapshots: MemorySnapshot[] = []
  private maxSnapshots = 20 // Reduced from 50 to limit memory
  private checkInterval: number | null = null
  private maxSnapshotAge = 5 * 60 * 1000 // 5 minutes - auto-cleanup old snapshots

  /**
   * Take a memory snapshot
   */
  takeSnapshot(): MemorySnapshot | null {
    if (typeof performance === 'undefined' || !(performance as any).memory) {
      return null // Not available in all browsers
    }

    const memory = (performance as any).memory

    const snapshot: MemorySnapshot = {
      timestamp: Date.now(),
      heapUsed: memory.usedJSHeapSize,
      heapTotal: memory.totalJSHeapSize,
      external: memory.jsHeapSizeLimit
    }

    this.snapshots.push(snapshot)

    // Cleanup old snapshots
    const now = Date.now()
    this.snapshots = this.snapshots.filter(
      s => now - s.timestamp < this.maxSnapshotAge
    )

    // Limit stored snapshots
    if (this.snapshots.length > this.maxSnapshots) {
      this.snapshots = this.snapshots.slice(-this.maxSnapshots)
    }

    return snapshot
  }

  /**
   * Start monitoring memory
   */
  startMonitoring(intervalMs: number = 5000): void {
    if (this.checkInterval !== null) {
      this.stopMonitoring()
    }

    this.takeSnapshot() // Initial snapshot

    this.checkInterval = window.setInterval(() => {
      this.takeSnapshot()
      this.checkForLeaks()
    }, intervalMs)
  }

  /**
   * Stop monitoring memory
   */
  stopMonitoring(): void {
    if (this.checkInterval !== null) {
      clearInterval(this.checkInterval)
      this.checkInterval = null
    }
  }

  /**
   * Check for memory leaks
   */
  checkForLeaks(): MemoryLeakReport | null {
    if (this.snapshots.length < 3) {
      return null // Need at least 3 snapshots
    }

    const recent = this.snapshots.slice(-10) // Check last 10 snapshots
    const growthRates: number[] = []

    for (let i = 1; i < recent.length; i++) {
      const prev = recent[i - 1]
      const curr = recent[i]

      const timeDiff = (curr.timestamp - prev.timestamp) / 1000 // seconds
      const heapDiff = curr.heapUsed - prev.heapUsed // bytes

      if (timeDiff > 0) {
        growthRates.push(heapDiff / timeDiff)
      }
    }

    const averageGrowthRate =
      growthRates.reduce((sum, rate) => sum + rate, 0) / growthRates.length

    const warnings: string[] = []

    // Check for consistent growth
    if (averageGrowthRate > 10000) {
      // Growing more than 10KB per second
      warnings.push(
        `Memory growing at ${(averageGrowthRate / 1024).toFixed(2)}KB/s - possible leak`
      )
    }

    // Check for excessive heap usage
    const latest = recent[recent.length - 1]
    const usagePercentage = (latest.heapUsed / latest.heapTotal) * 100

    if (usagePercentage > 90) {
      warnings.push(`Heap usage at ${usagePercentage.toFixed(1)}% - consider cleanup`)
    }

    return {
      isLeaking: warnings.length > 0,
      growthRate: averageGrowthRate,
      snapshots: recent,
      warnings
    }
  }

  /**
   * Get current memory usage
   */
  getCurrentMemory(): MemorySnapshot | null {
    return this.takeSnapshot()
  }

  /**
   * Clear all snapshots
   */
  clear(): void {
    this.snapshots = []
  }

  /**
   * Get memory report
   */
  getReport(): MemoryLeakReport | null {
    return this.checkForLeaks()
  }
}

// Singleton instance
export const memoryLeakDetector = new MemoryLeakDetector()

/**
 * React hook for memory monitoring
 */
export function useMemoryMonitor(enabled: boolean = false): MemorySnapshot | null {
  const [snapshot, setSnapshot] = React.useState<MemorySnapshot | null>(null)

  React.useEffect(() => {
    if (!enabled) return

    const interval = setInterval(() => {
      const newSnapshot = memoryLeakDetector.takeSnapshot()
      if (newSnapshot) {
        setSnapshot(newSnapshot)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [enabled])

  return snapshot
}

// Import React for hook
import React from 'react'
