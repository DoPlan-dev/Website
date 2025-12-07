// Utility functions for generating transition CSS

import { TransitionDefinition, ComponentTransitions, TransitionProperty, EasingFunction } from '../../types/states'

/**
 * Generate CSS transition string from transition definition
 */
export function generateTransitionCSS(transition: TransitionDefinition): string {
  const parts = [
    transition.property,
    `${transition.duration}ms`,
    transition.easing
  ]

  if (transition.delay !== undefined && transition.delay > 0) {
    parts.push(`${transition.delay}ms`)
  }

  return parts.join(' ')
}

/**
 * Generate CSS transition property from multiple transitions
 */
export function generateTransitionsCSS(transitions: TransitionDefinition[]): string {
  if (transitions.length === 0) {
    return 'none'
  }

  return transitions.map(generateTransitionCSS).join(', ')
}

/**
 * Parse transition CSS string into TransitionDefinition
 */
export function parseTransitionCSS(css: string): TransitionDefinition | null {
  // Format: "property duration easing delay"
  const parts = css.trim().split(/\s+/)
  
  if (parts.length < 3) {
    return null
  }

  const property = parts[0] as TransitionProperty
  const durationMatch = parts[1].match(/(\d+)ms/)
  const easing = parts[2] as EasingFunction
  const delayMatch = parts[3]?.match(/(\d+)ms/)

  if (!durationMatch) {
    return null
  }

  return {
    property,
    duration: parseInt(durationMatch[1]),
    easing,
    delay: delayMatch ? parseInt(delayMatch[1]) : 0
  }
}

/**
 * Generate complete transition CSS for all states
 */
export function generateComponentTransitionsCSS(transitions: ComponentTransitions): Record<string, string> {
  const css: Record<string, string> = {}

  Object.entries(transitions).forEach(([state, stateTransitions]) => {
    if (stateTransitions && stateTransitions.length > 0) {
      css[state === 'default' ? 'transition' : `transition-${state}`] = generateTransitionsCSS(stateTransitions)
    }
  })

  return css
}

/**
 * Get default transition for a property
 */
export function getDefaultTransition(property: TransitionProperty): TransitionDefinition {
  const defaults: Record<string, { duration: number; easing: EasingFunction }> = {
    'all': { duration: 200, easing: 'ease' },
    'color': { duration: 150, easing: 'ease' },
    'background': { duration: 200, easing: 'ease' },
    'transform': { duration: 200, easing: 'ease-out' },
    'opacity': { duration: 150, easing: 'ease' },
    'width': { duration: 300, easing: 'ease' },
    'height': { duration: 300, easing: 'ease' }
  }

  const defaultConfig = defaults[property] || defaults['all']
  
  return {
    property,
    duration: defaultConfig.duration,
    easing: defaultConfig.easing,
    delay: 0
  }
}

/**
 * Common easing functions
 */
export const EASING_FUNCTIONS: Record<string, string> = {
  'linear': 'linear',
  'ease': 'ease',
  'ease-in': 'ease-in',
  'ease-out': 'ease-out',
  'ease-in-out': 'ease-in-out',
  'cubic-bezier(0.4, 0, 0.2, 1)': 'Material Design',
  'cubic-bezier(0.4, 0, 1, 1)': 'Fast Out',
  'cubic-bezier(0, 0, 0.2, 1)': 'Fast In'
}
