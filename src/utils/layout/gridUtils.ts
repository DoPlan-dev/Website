// Utility functions for Grid layout

import { GridStyles, GridTrack, GridArea, GridTrackType } from '../../types/layoutControls'

/**
 * Generate Grid CSS from styles object
 */
export function generateGridCSS(styles: GridStyles): Record<string, string> {
  const css: Record<string, string> = {}

  if (styles.display) css.display = styles.display
  if (styles.gridTemplateColumns) {
    css.gridTemplateColumns = styles.gridTemplateColumns
  } else if (styles.columnTracks && styles.columnTracks.length > 0) {
    css.gridTemplateColumns = generateTrackTemplate(styles.columnTracks)
  }
  
  if (styles.gridTemplateRows) {
    css.gridTemplateRows = styles.gridTemplateRows
  } else if (styles.rowTracks && styles.rowTracks.length > 0) {
    css.gridTemplateRows = generateTrackTemplate(styles.rowTracks)
  }

  if (styles.gridTemplateAreas) {
    css.gridTemplateAreas = styles.gridTemplateAreas
  } else if (styles.areas && styles.areas.length > 0) {
    css.gridTemplateAreas = generateAreasTemplate(styles.areas)
  }

  if (styles.gap) css.gap = styles.gap
  if (styles.rowGap) css.rowGap = styles.rowGap
  if (styles.columnGap) css.columnGap = styles.columnGap
  if (styles.justifyContent) css.justifyContent = styles.justifyContent
  if (styles.alignContent) css.alignContent = styles.alignContent
  if (styles.justifyItems) css.justifyItems = styles.justifyItems
  if (styles.alignItems) css.alignItems = styles.alignItems

  return css
}

/**
 * Generate track template string from tracks array
 */
export function generateTrackTemplate(tracks: GridTrack[]): string {
  return tracks.map(track => {
    if (track.type === 'auto') return 'auto'
    if (track.type === 'min-content') return 'min-content'
    if (track.type === 'max-content') return 'max-content'
    if (track.type === 'fr') {
      return track.value ? `${track.value}fr` : '1fr'
    }
    if (track.value !== undefined) {
      return `${track.value}${track.type}`
    }
    if (track.min && track.max) {
      return `minmax(${track.min}, ${track.max})`
    }
    return 'auto'
  }).join(' ')
}

/**
 * Parse track template string into tracks array
 */
export function parseTrackTemplate(template: string): GridTrack[] {
  if (!template || template === 'none') {
    return []
  }

  const parts = template.trim().split(/\s+/)
  return parts.map((part, index) => {
    const track: GridTrack = {
      id: `track-${index}`,
      type: 'auto'
    }

    if (part === 'auto') {
      track.type = 'auto'
    } else if (part === 'min-content') {
      track.type = 'min-content'
    } else if (part === 'max-content') {
      track.type = 'max-content'
    } else if (part.endsWith('fr')) {
      track.type = 'fr'
      track.value = parseFloat(part.replace('fr', '')) || 1
    } else if (part.match(/^[\d.]+(px|rem|em|%)$/)) {
      const match = part.match(/^([\d.]+)(px|rem|em|%)$/)
      if (match) {
        track.type = match[2] as GridTrackType
        track.value = parseFloat(match[1])
      }
    } else if (part.startsWith('minmax(')) {
      // Parse minmax() syntax
      const minmaxMatch = part.match(/minmax\(([^,]+),\s*([^)]+)\)/)
      if (minmaxMatch) {
        track.min = minmaxMatch[1].trim()
        track.max = minmaxMatch[2].trim()
        track.type = 'auto'
      }
    }

    return track
  })
}

/**
 * Generate grid template areas string from areas array
 */
export function generateAreasTemplate(areas: GridArea[]): string {
  // This is a simplified version - full implementation would need grid dimensions
  // For now, return a simple representation
  if (areas.length === 0) return 'none'
  
  const areaNames = areas.map(a => `"${a.name}"`).join(' ')
  return areaNames
}

/**
 * Validate grid tracks
 */
export function validateGridTracks(tracks: GridTrack[]): boolean {
  return tracks.every(track => {
    if (track.type === 'fr' && track.value !== undefined) {
      return track.value > 0
    }
    if (track.value !== undefined && ['px', 'rem', 'em', '%'].includes(track.type)) {
      return track.value >= 0
    }
    return true
  })
}

/**
 * Parse grid template areas string
 */
export function parseAreasTemplate(template: string): GridArea[] {
  if (!template || template === 'none') {
    return []
  }

  // Simple parser - would need more sophisticated parsing for complex grids
  const areas: GridArea[] = []
  const matches = template.match(/"([^"]+)"/g)
  
  if (matches) {
    matches.forEach((match, index) => {
      const name = match.replace(/"/g, '')
      areas.push({
        name,
        rowStart: index + 1,
        rowEnd: index + 2,
        colStart: 1,
        colEnd: 2
      })
    })
  }

  return areas
}
