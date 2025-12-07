// Type definitions for component states and interactions

export type ComponentState = 'default' | 'hover' | 'active' | 'focus' | 'disabled' | string

export interface StyleOverride {
  [key: string]: any
}

export interface ComponentStates {
  hover?: StyleOverride
  active?: StyleOverride
  focus?: StyleOverride
  disabled?: StyleOverride
  [customState: string]: StyleOverride | undefined
}

export type InteractionTrigger = 'hover' | 'click' | 'focus' | 'blur' | 'scroll' | 'load' | 'custom'
export type InteractionAction = 'navigate' | 'toggle' | 'animate' | 'show' | 'hide' | 'custom'

export interface InteractionCondition {
  type: 'element-visible' | 'scroll-position' | 'custom'
  value?: any
}

export interface Interaction {
  id: string
  trigger: InteractionTrigger
  action: InteractionAction
  target?: string // Element ID or selector
  condition?: InteractionCondition
  config?: Record<string, any> // Action-specific configuration
}

export type TransitionProperty = 'all' | 'color' | 'background' | 'transform' | 'opacity' | 'width' | 'height' | string
export type EasingFunction = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'cubic-bezier' | string

export interface TransitionDefinition {
  property: TransitionProperty
  duration: number // milliseconds
  easing: EasingFunction
  delay?: number // milliseconds
}

export interface ComponentTransitions {
  default?: TransitionDefinition[]
  hover?: TransitionDefinition[]
  active?: TransitionDefinition[]
  focus?: TransitionDefinition[]
  [state: string]: TransitionDefinition[] | undefined
}

export interface StateConfig {
  states: ComponentStates
  interactions?: Interaction[]
  transitions?: ComponentTransitions
}
