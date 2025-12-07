// Type definitions for animation system

export type AnimationType = 'keyframes' | 'transition' | 'scroll' | 'hover' | 'click'
export type EasingFunction = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'cubic-bezier' | string
export type AnimationDirection = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'
export type AnimationFillMode = 'none' | 'forwards' | 'backwards' | 'both'

export interface Keyframe {
  id: string
  offset: number // 0-100 (percentage)
  properties: Record<string, any> // CSS properties at this keyframe
  easing?: EasingFunction // Easing for transition to this keyframe
}

export interface Animation {
  id: string
  name?: string
  type: AnimationType
  duration: number // milliseconds
  delay?: number // milliseconds
  easing: EasingFunction
  iterationCount?: number | 'infinite'
  direction?: AnimationDirection
  fillMode?: AnimationFillMode
  keyframes: Keyframe[]
  trigger?: 'on-load' | 'on-scroll' | 'on-hover' | 'on-click' | 'on-focus' | 'custom'
  scrollOffset?: number // For scroll-triggered animations
}

export interface AnimationPreset {
  id: string
  name: string
  category: 'entrance' | 'exit' | 'hover' | 'scroll' | 'attention' | 'custom'
  description?: string
  animation: Omit<Animation, 'id' | 'name'>
  preview?: string // Preview description
}

export interface ComponentAnimations {
  animations: Animation[]
  activeAnimation?: string // ID of currently active animation
}
