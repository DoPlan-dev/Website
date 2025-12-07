// Utility functions for managing component states

import { ComponentStates, StyleOverride, ComponentState } from '../../types/states'

/**
 * Merge base styles with state-specific overrides
 */
export function mergeStateStyles(
  baseStyles: StyleOverride,
  states: ComponentStates,
  activeState: ComponentState = 'default'
): StyleOverride {
  if (activeState === 'default' || !states[activeState]) {
    return { ...baseStyles }
  }

  const stateOverrides = states[activeState] || {}
  return {
    ...baseStyles,
    ...stateOverrides
  }
}

/**
 * Get all available states from a ComponentStates object
 */
export function getAvailableStates(states: ComponentStates): ComponentState[] {
  const standardStates: ComponentState[] = ['hover', 'active', 'focus', 'disabled']
  const available: ComponentState[] = ['default']
  
  standardStates.forEach(state => {
    if (states[state]) {
      available.push(state)
    }
  })

  // Add custom states
  Object.keys(states).forEach(key => {
    if (!standardStates.includes(key as ComponentState) && !available.includes(key as ComponentState)) {
      available.push(key)
    }
  })

  return available
}

/**
 * Check if a state exists
 */
export function hasState(states: ComponentStates, state: ComponentState): boolean {
  return state === 'default' || !!states[state]
}

/**
 * Get state styles for a specific state
 */
export function getStateStyles(states: ComponentStates, state: ComponentState): StyleOverride {
  if (state === 'default') {
    return {}
  }
  return states[state] || {}
}

/**
 * Set state styles
 */
export function setStateStyles(
  states: ComponentStates,
  state: ComponentState,
  styles: StyleOverride
): ComponentStates {
  if (state === 'default') {
    return states // Default state is the base styles
  }

  return {
    ...states,
    [state]: styles
  }
}

/**
 * Remove a state
 */
export function removeState(states: ComponentStates, state: ComponentState): ComponentStates {
  if (state === 'default') {
    return states
  }

  const newStates = { ...states }
  delete newStates[state]
  return newStates
}

/**
 * Generate CSS for state styles (for :hover, :active, etc.)
 */
export function generateStateCSS(states: ComponentStates, state: ComponentState): string {
  const stateStyles = getStateStyles(states, state)
  if (Object.keys(stateStyles).length === 0) {
    return ''
  }

  const cssProperties = Object.entries(stateStyles)
    .map(([key, value]) => {
      const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      return `  ${cssKey}: ${value};`
    })
    .join('\n')

  const pseudoClass = state === 'default' ? '' : `:${state}`
  return `.element${pseudoClass} {\n${cssProperties}\n}`
}
