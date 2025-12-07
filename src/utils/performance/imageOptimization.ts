/**
 * Image Optimization Utilities
 * Helper functions for optimizing images for web performance
 */

export interface ImageOptimizationOptions {
  width?: number
  height?: number
  quality?: number // 0-100
  format?: 'webp' | 'avif' | 'jpeg' | 'png'
  lazy?: boolean
}

/**
 * Generate optimized image URL with query parameters
 * This assumes you're using an image optimization service like:
 * - Vercel Image Optimization
 * - Cloudinary
 * - Imgix
 * - Next.js Image Optimization
 */
export const getOptimizedImageUrl = (
  src: string,
  options: ImageOptimizationOptions = {}
): string => {
  const {
    width,
    height,
    quality = 85,
    format = 'webp',
  } = options

  // For Vercel-style optimization
  // In production, you'd use your image optimization service
  const params = new URLSearchParams()
  
  if (width) params.set('w', width.toString())
  if (height) params.set('h', height.toString())
  params.set('q', quality.toString())
  params.set('f', format)

  // If using an external image optimization service, you'd prepend the service URL
  // For now, return the original src with params for demonstration
  const separator = src.includes('?') ? '&' : '?'
  return `${src}${separator}${params.toString()}`
}

/**
 * Generate responsive image srcset
 */
export const generateSrcSet = (
  src: string,
  widths: number[],
  options: Omit<ImageOptimizationOptions, 'width'> = {}
): string => {
  return widths
    .map(width => `${getOptimizedImageUrl(src, { ...options, width })} ${width}w`)
    .join(', ')
}

/**
 * Generate responsive image sizes attribute
 */
export const generateSizes = (breakpoints: { [key: string]: string }): string => {
  return Object.entries(breakpoints)
    .map(([condition, size]) => `(${condition}) ${size}`)
    .join(', ')
}

/**
 * Lazy load image with intersection observer
 */
export const lazyLoadImage = (
  img: HTMLImageElement,
  callback?: () => void
): IntersectionObserver | null => {
  if (!('IntersectionObserver' in window)) {
    // Fallback: load immediately if IntersectionObserver not supported
    if (img.dataset.src) {
      img.src = img.dataset.src
      callback?.()
    }
    return null
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLImageElement
          if (target.dataset.src) {
            target.src = target.dataset.src
            target.removeAttribute('data-src')
            observer.unobserve(target)
            callback?.()
          }
        }
      })
    },
    {
      rootMargin: '50px',
    }
  )

  observer.observe(img)
  return observer
}

/**
 * Preload critical images
 */
export const preloadImage = (src: string, as: string = 'image'): void => {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = as
  link.href = src
  if (as === 'image') {
    link.setAttribute('fetchpriority', 'high')
  }
  document.head.appendChild(link)
}

/**
 * Get image dimensions for aspect ratio calculation
 */
export const getImageDimensions = (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
      })
    }
    img.onerror = reject
    img.src = src
  })
}

/**
 * Generate blur placeholder for images (base64 data URL)
 * This is a simplified version - in production you'd use a proper blur generation library
 */
export const generateBlurPlaceholder = (width: number = 20, height: number = 20): string => {
  // This is a minimal blur placeholder - in production, generate actual blurred image
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.fillStyle = '#f3f4f6'
    ctx.fillRect(0, 0, width, height)
  }
  return canvas.toDataURL()
}

