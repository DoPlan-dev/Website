// Type definitions for style control components

export type CSSUnit = 'px' | 'rem' | 'em' | '%' | 'vh' | 'vw' | 'auto'

export interface SpacingObject {
  top: string
  right: string
  bottom: string
  left: string
}

export interface TypographyStyles {
  fontSize?: string
  lineHeight?: string
  letterSpacing?: string
  fontWeight?: string | number
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize'
  fontFamily?: string
}

export interface ColorObject {
  hex: string
  rgb?: { r: number; g: number; b: number }
  hsl?: { h: number; s: number; l: number }
  alpha?: number
}

export interface GradientStop {
  color: string
  position: number // 0-100
}

export interface Gradient {
  type: 'linear' | 'radial'
  stops: GradientStop[]
  angle?: number // 0-360 for linear
  position?: string // for radial (e.g., 'center', 'top left')
}

export interface BorderStyle {
  width: string
  style: 'solid' | 'dashed' | 'dotted' | 'none'
  color: string
}

export interface BorderRadius {
  topLeft: string
  topRight: string
  bottomLeft: string
  bottomRight: string
  linked?: boolean
}

export interface Shadow {
  x: string
  y: string
  blur: string
  spread: string
  color: string
  inset?: boolean
}

export interface BackgroundStyle {
  type: 'solid' | 'gradient' | 'image'
  color?: string
  gradient?: Gradient
  image?: {
    url: string
    position?: string
    size?: string
    repeat?: string
  }
}
