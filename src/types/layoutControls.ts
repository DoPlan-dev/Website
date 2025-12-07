// Type definitions for layout control components

import { CSSUnit } from './styleControls'

export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'
export type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
export type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
export type AlignContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch'
export type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'

export interface FlexboxStyles {
  display?: 'flex' | 'inline-flex'
  flexDirection?: FlexDirection
  flexWrap?: FlexWrap
  justifyContent?: JustifyContent
  alignItems?: AlignItems
  alignContent?: AlignContent
  gap?: string
  rowGap?: string
  columnGap?: string
}

export type GridTrackType = 'auto' | 'min-content' | 'max-content' | 'fr' | 'px' | 'rem' | 'em' | '%'

export interface GridTrack {
  id: string
  type: GridTrackType
  value?: number
  min?: string
  max?: string
}

export interface GridArea {
  name: string
  rowStart: number
  rowEnd: number
  colStart: number
  colEnd: number
}

export interface GridStyles {
  display?: 'grid' | 'inline-grid'
  gridTemplateColumns?: string
  gridTemplateRows?: string
  gridTemplateAreas?: string
  columnTracks?: GridTrack[]
  rowTracks?: GridTrack[]
  areas?: GridArea[]
  gap?: string
  rowGap?: string
  columnGap?: string
  justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'
  alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'
  justifyItems?: 'start' | 'end' | 'center' | 'stretch'
  alignItems?: 'start' | 'end' | 'center' | 'stretch'
}

export interface PositioningStyles {
  position?: Position
  top?: string
  right?: string
  bottom?: string
  left?: string
  zIndex?: number | 'auto'
}

export interface SizeStyles {
  width?: string
  height?: string
  minWidth?: string
  maxWidth?: string
  minHeight?: string
  maxHeight?: string
  aspectRatio?: string
}

export interface LayoutStyles extends FlexboxStyles, GridStyles, PositioningStyles, SizeStyles {
  // Combined layout styles
}
