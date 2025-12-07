// Utility functions for parsing and manipulating keyframes

import { Keyframe, Animation } from '../../types/animations'

/**
 * Sort keyframes by offset
 */
export function sortKeyframes(keyframes: Keyframe[]): Keyframe[] {
  return [...keyframes].sort((a, b) => a.offset - b.offset)
}

/**
 * Get keyframe at specific offset (or closest)
 */
export function getKeyframeAtOffset(keyframes: Keyframe[], offset: number): Keyframe | null {
  const sorted = sortKeyframes(keyframes)
  
  // Exact match
  const exact = sorted.find(kf => kf.offset === offset)
  if (exact) return exact
  
  // Find closest
  if (sorted.length === 0) return null
  if (offset <= sorted[0].offset) return sorted[0]
  if (offset >= sorted[sorted.length - 1].offset) return sorted[sorted.length - 1]
  
  // Find between two keyframes
  for (let i = 0; i < sorted.length - 1; i++) {
    if (offset >= sorted[i].offset && offset <= sorted[i + 1].offset) {
      // Return the one closer
      const dist1 = offset - sorted[i].offset
      const dist2 = sorted[i + 1].offset - offset
      return dist1 < dist2 ? sorted[i] : sorted[i + 1]
    }
  }
  
  return sorted[0]
}

/**
 * Interpolate property value between two keyframes
 */
export function interpolateProperty(
  startKeyframe: Keyframe,
  endKeyframe: Keyframe,
  currentOffset: number,
  property: string
): any {
  const startValue = startKeyframe.properties[property]
  const endValue = endKeyframe.properties[property]
  
  if (startValue === undefined || endValue === undefined) {
    return startValue || endValue
  }
  
  // Simple numeric interpolation
  if (typeof startValue === 'number' && typeof endValue === 'number') {
    const progress = (currentOffset - startKeyframe.offset) / (endKeyframe.offset - startKeyframe.offset)
    return startValue + (endValue - startValue) * progress
  }
  
  // For non-numeric values, return start or end based on progress
  const progress = (currentOffset - startKeyframe.offset) / (endKeyframe.offset - startKeyframe.offset)
  return progress < 0.5 ? startValue : endValue
}

/**
 * Get interpolated properties at specific offset
 */
export function getPropertiesAtOffset(keyframes: Keyframe[], offset: number): Record<string, any> {
  const sorted = sortKeyframes(keyframes)
  
  if (sorted.length === 0) return {}
  if (sorted.length === 1) return sorted[0].properties
  
  // Find surrounding keyframes
  let startKeyframe = sorted[0]
  let endKeyframe = sorted[sorted.length - 1]
  
  for (let i = 0; i < sorted.length - 1; i++) {
    if (offset >= sorted[i].offset && offset <= sorted[i + 1].offset) {
      startKeyframe = sorted[i]
      endKeyframe = sorted[i + 1]
      break
    }
  }
  
  // If exact match, return that keyframe's properties
  if (startKeyframe.offset === offset) {
    return startKeyframe.properties
  }
  if (endKeyframe.offset === offset) {
    return endKeyframe.properties
  }
  
  // Interpolate between keyframes
  const allProperties = new Set([
    ...Object.keys(startKeyframe.properties),
    ...Object.keys(endKeyframe.properties)
  ])
  
  const interpolated: Record<string, any> = {}
  
  allProperties.forEach(property => {
    interpolated[property] = interpolateProperty(startKeyframe, endKeyframe, offset, property)
  })
  
  return interpolated
}

/**
 * Add keyframe to animation
 */
export function addKeyframe(animation: Animation, keyframe: Keyframe): Animation {
  // Check if keyframe at same offset exists
  const existingIndex = animation.keyframes.findIndex(kf => kf.offset === keyframe.offset)
  
  if (existingIndex >= 0) {
    // Replace existing
    const newKeyframes = [...animation.keyframes]
    newKeyframes[existingIndex] = keyframe
    return {
      ...animation,
      keyframes: newKeyframes
    }
  }
  
  // Add new
  return {
    ...animation,
    keyframes: [...animation.keyframes, keyframe]
  }
}

/**
 * Remove keyframe from animation
 */
export function removeKeyframe(animation: Animation, keyframeId: string): Animation {
  // Don't allow removing first or last keyframe
  const sorted = sortKeyframes(animation.keyframes)
  if (sorted.length <= 2) {
    return animation // Keep at least 2 keyframes
  }
  
  const keyframe = animation.keyframes.find(kf => kf.id === keyframeId)
  if (!keyframe) return animation
  
  // Don't remove if it's the first (0%) or last (100%) keyframe
  if (keyframe.offset === 0 || keyframe.offset === 100) {
    return animation
  }
  
  return {
    ...animation,
    keyframes: animation.keyframes.filter(kf => kf.id !== keyframeId)
  }
}

/**
 * Update keyframe properties
 */
export function updateKeyframe(
  animation: Animation,
  keyframeId: string,
  updates: Partial<Keyframe>
): Animation {
  return {
    ...animation,
    keyframes: animation.keyframes.map(kf =>
      kf.id === keyframeId ? { ...kf, ...updates } : kf
    )
  }
}
