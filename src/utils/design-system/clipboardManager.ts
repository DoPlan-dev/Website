/**
 * Clipboard Manager for Copy/Paste functionality
 */

import { SectionComponent } from '../../data/sectionTemplates'

export class ClipboardManager {
  private clipboard: SectionComponent | null = null

  /**
   * Copy a component to clipboard
   */
  copy(component: SectionComponent): void {
    this.clipboard = this.cloneComponent(component)
  }

  /**
   * Paste component from clipboard
   */
  paste(): SectionComponent | null {
    if (!this.clipboard) {
      return null
    }
    return this.cloneComponent(this.clipboard)
  }

  /**
   * Check if clipboard has content
   */
  hasContent(): boolean {
    return this.clipboard !== null
  }

  /**
   * Clear clipboard
   */
  clear(): void {
    this.clipboard = null
  }

  /**
   * Deep clone component to prevent mutations
   */
  private cloneComponent(component: SectionComponent): SectionComponent {
    return JSON.parse(JSON.stringify(component))
  }
}

// Singleton instance
export const clipboardManager = new ClipboardManager()

