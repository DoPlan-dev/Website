// React hook for keyboard shortcuts

import { useEffect, useRef } from 'react'
import { KeyboardShortcut } from '../types/shortcuts'
import { shortcutManager } from '../utils/shortcuts/shortcutManager'

/**
 * Hook to register keyboard shortcuts
 */
export function useKeyboardShortcuts(shortcuts: KeyboardShortcut[]): void {
  const shortcutsRef = useRef<KeyboardShortcut[]>([])

  useEffect(() => {
    // Register new shortcuts
    shortcuts.forEach(shortcut => {
      shortcutManager.register(shortcut)
      shortcutsRef.current.push(shortcut)
    })

    // Cleanup on unmount
    return () => {
      shortcutsRef.current.forEach(shortcut => {
        shortcutManager.unregister(shortcut.id)
      })
      shortcutsRef.current = []
    }
  }, [shortcuts])
}

/**
 * Hook to enable/disable shortcuts
 */
export function useShortcutsEnabled(enabled: boolean): void {
  useEffect(() => {
    shortcutManager.setEnabled(enabled)
  }, [enabled])
}
