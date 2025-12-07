// Bundle size analysis utilities

export interface BundleSizeInfo {
  name: string
  size: number
  gzippedSize?: number
  percentage?: number
}

export interface BundleAnalysis {
  totalSize: number
  gzippedTotalSize?: number
  components: BundleSizeInfo[]
  dependencies: BundleSizeInfo[]
}

/**
 * Estimate bundle size (for development/debugging)
 * Note: Actual bundle analysis should be done with webpack-bundle-analyzer
 */
export function estimateBundleSize(): BundleAnalysis {
  // This is a placeholder - actual analysis requires build tools
  // In production, use webpack-bundle-analyzer or similar tools

  const analysis: BundleAnalysis = {
    totalSize: 0,
    components: [],
    dependencies: []
  }

  if (typeof window !== 'undefined' && (window as any).__BUNDLE_INFO__) {
    // If bundle info is available (injected by build tool)
    return (window as any).__BUNDLE_INFO__
  }

  return analysis
}

/**
 * Get component size estimate
 */
export function getComponentSize(componentName: string): number {
  // Placeholder - would need actual bundle analysis
  return 0
}

/**
 * Log bundle size warnings in development
 */
export function logBundleSizeWarnings(): void {
  if (process.env.NODE_ENV === 'development') {
    console.info(
      '[Bundle Size] For detailed analysis, use webpack-bundle-analyzer or similar tools'
    )
  }
}

/**
 * Check if a module should be lazy loaded based on size
 */
export function shouldLazyLoad(moduleSize: number, threshold: number = 50000): boolean {
  return moduleSize > threshold
}
