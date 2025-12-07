// Keyboard shortcuts type definitions

export interface KeyboardShortcut {
  id: string
  keys: string[] // e.g., ['Meta', 'S'] for Cmd+S
  description: string
  category: 'general' | 'editing' | 'navigation' | 'view' | 'export'
  action: () => void
  enabled?: boolean
}

export interface ShortcutGroup {
  category: KeyboardShortcut['category']
  shortcuts: KeyboardShortcut[]
}

export interface ShortcutConfig {
  shortcuts: KeyboardShortcut[]
  enabled: boolean
}
