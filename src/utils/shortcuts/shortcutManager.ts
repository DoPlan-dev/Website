// Keyboard shortcuts manager

import { KeyboardShortcut } from '../../types/shortcuts'

class ShortcutManager {
  private shortcuts: Map<string, KeyboardShortcut> = new Map()
  private enabled: boolean = true
  private listeners: Map<string, (e: KeyboardEvent) => void> = new Map()

  /**
   * Register a keyboard shortcut
   */
  register(shortcut: KeyboardShortcut): void {
    this.shortcuts.set(shortcut.id, shortcut)
    this.setupListener(shortcut)
  }

  /**
   * Unregister a keyboard shortcut
   */
  unregister(id: string): void {
    const shortcut = this.shortcuts.get(id)
    if (shortcut) {
      this.removeListener(shortcut)
      this.shortcuts.delete(id)
    }
  }

  /**
   * Enable/disable shortcuts
   */
  setEnabled(enabled: boolean): void {
    this.enabled = enabled
  }

  /**
   * Check if shortcuts are enabled
   */
  isEnabled(): boolean {
    return this.enabled
  }

  /**
   * Get all registered shortcuts
   */
  getAllShortcuts(): KeyboardShortcut[] {
    return Array.from(this.shortcuts.values())
  }

  /**
   * Get shortcuts by category
   */
  getShortcutsByCategory(category: KeyboardShortcut['category']): KeyboardShortcut[] {
    return Array.from(this.shortcuts.values()).filter(s => s.category === category)
  }

  /**
   * Format keys for display
   */
  formatKeys(keys: string[]): string {
    return keys
      .map(key => {
        const keyMap: Record<string, string> = {
          'Meta': '⌘',
          'Control': 'Ctrl',
          'Alt': 'Alt',
          'Shift': '⇧',
          'ArrowUp': '↑',
          'ArrowDown': '↓',
          'ArrowLeft': '←',
          'ArrowRight': '→',
          'Enter': '↵',
          'Escape': 'Esc',
          'Backspace': '⌫',
          'Delete': 'Del'
        }
        return keyMap[key] || key
      })
      .join(' + ')
  }

  /**
   * Setup event listener for a shortcut
   */
  private setupListener(shortcut: KeyboardShortcut): void {
    const handler = (e: KeyboardEvent) => {
      if (!this.enabled || (shortcut.enabled === false)) return

      const pressedKeys = this.getPressedKeys(e)
      const matches = this.keysMatch(shortcut.keys, pressedKeys)

      if (matches) {
        e.preventDefault()
        e.stopPropagation()
        shortcut.action()
      }
    }

    this.listeners.set(shortcut.id, handler)
    document.addEventListener('keydown', handler)
  }

  /**
   * Remove event listener for a shortcut
   */
  private removeListener(shortcut: KeyboardShortcut): void {
    const handler = this.listeners.get(shortcut.id)
    if (handler) {
      document.removeEventListener('keydown', handler)
      this.listeners.delete(shortcut.id)
    }
  }

  /**
   * Get currently pressed keys
   */
  private getPressedKeys(e: KeyboardEvent): string[] {
    const keys: string[] = []

    if (e.metaKey) keys.push('Meta')
    if (e.ctrlKey) keys.push('Control')
    if (e.altKey) keys.push('Alt')
    if (e.shiftKey) keys.push('Shift')

    // Add the main key (normalize to match our format)
    const key = e.key
    if (key && !['Meta', 'Control', 'Alt', 'Shift'].includes(key)) {
      keys.push(key)
    }

    return keys
  }

  /**
   * Check if pressed keys match shortcut keys
   */
  private keysMatch(shortcutKeys: string[], pressedKeys: string[]): boolean {
    if (shortcutKeys.length !== pressedKeys.length) return false

    const normalizedShortcut = shortcutKeys.map(k => k.toLowerCase()).sort()
    const normalizedPressed = pressedKeys.map(k => k.toLowerCase()).sort()

    return JSON.stringify(normalizedShortcut) === JSON.stringify(normalizedPressed)
  }

  /**
   * Cleanup all listeners
   */
  cleanup(): void {
    this.listeners.forEach((handler) => {
      document.removeEventListener('keydown', handler)
    })
    this.listeners.clear()
    this.shortcuts.clear()
  }
}

// Singleton instance
export const shortcutManager = new ShortcutManager()
