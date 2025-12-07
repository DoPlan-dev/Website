// Utility functions for generating animation CSS and code

import { Animation, Keyframe } from '../../types/animations'

/**
 * Generate CSS @keyframes rule
 */
export function generateKeyframesCSS(animation: Animation): string {
  if (animation.keyframes.length === 0) {
    return ''
  }

  // Sort keyframes by offset
  const sortedKeyframes = [...animation.keyframes].sort((a, b) => a.offset - b.offset)

  const keyframeRules = sortedKeyframes.map(keyframe => {
    const properties = Object.entries(keyframe.properties)
      .map(([key, value]) => {
        const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
        return `    ${cssKey}: ${value};`
      })
      .join('\n')

    return `  ${keyframe.offset}% {\n${properties}\n  }`
  }).join('\n\n')

  return `@keyframes ${animation.id || 'animation'} {\n${keyframeRules}\n}`
}

/**
 * Generate CSS animation property
 */
export function generateAnimationCSS(animation: Animation): string {
  const parts: string[] = []

  if (animation.name) {
    parts.push(animation.name)
  } else if (animation.id) {
    parts.push(animation.id)
  } else {
    parts.push('none')
  }

  parts.push(`${animation.duration}ms`)
  parts.push(animation.easing)

  if (animation.delay && animation.delay > 0) {
    parts.push(`${animation.delay}ms`)
  }

  if (animation.iterationCount) {
    parts.push(String(animation.iterationCount))
  } else {
    parts.push('1')
  }

  if (animation.direction) {
    parts.push(animation.direction)
  }

  if (animation.fillMode) {
    parts.push(animation.fillMode)
  }

  return parts.join(' ')
}

/**
 * Generate complete CSS for animation (keyframes + animation property)
 */
export function generateAnimationCompleteCSS(animation: Animation): string {
  const keyframes = generateKeyframesCSS(animation)
  const animationProperty = generateAnimationCSS(animation)

  return `${keyframes}\n\n.element {\n  animation: ${animationProperty};\n}`
}

/**
 * Generate JavaScript for scroll-triggered animations
 */
export function generateScrollAnimationJS(animation: Animation): string {
  if (animation.trigger !== 'on-scroll') {
    return ''
  }

  const scrollOffset = animation.scrollOffset || 0
  const animationCSS = generateAnimationCSS(animation)

  return `
const element = document.querySelector('.element');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      element.style.animation = '${animationCSS}';
    }
  });
}, {
  threshold: ${scrollOffset / 100}
});

observer.observe(element);
`
}

/**
 * Parse CSS keyframes string into Keyframe array
 */
export function parseKeyframesCSS(css: string): Keyframe[] {
  const keyframes: Keyframe[] = []
  
  // Simple parser for @keyframes
  const matches = css.matchAll(/(\d+)%\s*\{([^}]+)\}/g)
  
  for (const match of matches) {
    const offset = parseInt(match[1])
    const propertiesStr = match[2]
    
    const properties: Record<string, any> = {}
    const propMatches = propertiesStr.matchAll(/([^:]+):\s*([^;]+);/g)
    
    for (const propMatch of propMatches) {
      const key = propMatch[1].trim()
      const value = propMatch[2].trim()
      properties[key] = value
    }
    
    keyframes.push({
      id: `keyframe-${offset}`,
      offset,
      properties
    })
  }
  
  return keyframes
}

/**
 * Validate animation
 */
export function validateAnimation(animation: Animation): boolean {
  if (!animation.id || animation.keyframes.length === 0) {
    return false
  }

  if (animation.duration <= 0) {
    return false
  }

  // Check keyframes have valid offsets
  const invalidKeyframe = animation.keyframes.find(kf => kf.offset < 0 || kf.offset > 100)
  if (invalidKeyframe) {
    return false
  }

  return true
}

/**
 * Get default animation
 */
export function getDefaultAnimation(): Animation {
  return {
    id: `animation-${Date.now()}`,
    type: 'keyframes',
    duration: 500,
    easing: 'ease',
    delay: 0,
    iterationCount: 1,
    direction: 'normal',
    fillMode: 'both',
    keyframes: [
      {
        id: 'keyframe-0',
        offset: 0,
        properties: {}
      },
      {
        id: 'keyframe-100',
        offset: 100,
        properties: {}
      }
    ],
    trigger: 'on-load'
  }
}
