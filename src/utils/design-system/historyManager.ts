/**
 * History Manager for Undo/Redo functionality
 */

export interface HistoryEntry<T> {
  state: T
  label: string
  timestamp: number
}

export class HistoryManager<T> {
  private history: HistoryEntry<T>[] = []
  private currentIndex: number = -1
  private maxHistorySize: number = 50

  constructor(initialState: T, maxSize: number = 50, initialLabel: string = 'Initial state') {
    this.history = [{ state: initialState, label: initialLabel, timestamp: Date.now() }]
    this.currentIndex = 0
    this.maxHistorySize = maxSize
  }

  /**
   * Add a new state to history
   */
  push(state: T, label: string = 'Change'): void {
    // Remove any future states if we're not at the end
    if (this.currentIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.currentIndex + 1)
    }

    // Add new state
    this.history.push({
      state: this.cloneState(state),
      label,
      timestamp: Date.now()
    })
    this.currentIndex++

    // Limit history size
    if (this.history.length > this.maxHistorySize) {
      this.history.shift()
      this.currentIndex--
    }
  }

  /**
   * Undo - go back to previous state
   */
  undo(): T | null {
    if (!this.canUndo()) {
      return null
    }
    this.currentIndex--
    return this.getCurrentState()
  }

  /**
   * Redo - go forward to next state
   */
  redo(): T | null {
    if (!this.canRedo()) {
      return null
    }
    this.currentIndex++
    return this.getCurrentState()
  }

  /**
   * Check if undo is possible
   */
  canUndo(): boolean {
    return this.currentIndex > 0
  }

  /**
   * Check if redo is possible
   */
  canRedo(): boolean {
    return this.currentIndex < this.history.length - 1
  }

  /**
   * Get current state
   */
  getCurrentState(): T {
    return this.cloneState(this.history[this.currentIndex].state)
  }

  /**
   * Jump to a specific history index
   */
  jumpTo(index: number): T | null {
    if (index < 0 || index >= this.history.length) {
      return null
    }
    this.currentIndex = index
    return this.getCurrentState()
  }

  /**
   * Get all history entries for timeline display
   */
  getAllHistory(): Array<{ id: string; label: string; timestamp: number }> {
    return this.history.map((entry, index) => ({
      id: `history-${index}`,
      label: entry.label,
      timestamp: entry.timestamp
    }))
  }

  /**
   * Reset history with new initial state
   */
  reset(initialState: T, label: string = 'Reset'): void {
    this.history = [{ state: this.cloneState(initialState), label, timestamp: Date.now() }]
    this.currentIndex = 0
  }

  /**
   * Clear all history
   */
  clear(): void {
    this.history = []
    this.currentIndex = -1
  }

  /**
   * Deep clone state to prevent mutations
   */
  private cloneState(state: T): T {
    return JSON.parse(JSON.stringify(state))
  }

  /**
   * Get history size
   */
  getHistorySize(): number {
    return this.history.length
  }

  /**
   * Get current index
   */
  getCurrentIndex(): number {
    return this.currentIndex
  }
}

