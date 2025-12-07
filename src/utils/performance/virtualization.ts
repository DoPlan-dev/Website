// Virtualization utilities for rendering large lists

export interface VirtualItem {
  index: number
  start: number
  end: number
  size: number
}

export interface VirtualListConfig {
  itemHeight: number | ((index: number) => number)
  containerHeight: number
  overscan?: number
}

/**
 * Calculate visible items for virtualization
 */
export function calculateVisibleItems(
  totalItems: number,
  scrollTop: number,
  config: VirtualListConfig
): VirtualItem[] {
  const { itemHeight, containerHeight, overscan = 3 } = config

  const getItemHeight = (index: number): number => {
    return typeof itemHeight === 'function' ? itemHeight(index) : itemHeight
  }

  // Calculate start position
  let start = 0
  let accumulatedHeight = 0

  for (let i = 0; i < totalItems; i++) {
    const height = getItemHeight(i)
    if (accumulatedHeight + height > scrollTop) {
      start = Math.max(0, i - overscan)
      break
    }
    accumulatedHeight += height
  }

  // Calculate end position
  let end = start
  let currentHeight = 0

  for (let i = start; i < totalItems; i++) {
    const height = getItemHeight(i)
    currentHeight += height
    if (currentHeight > containerHeight + scrollTop) {
      end = Math.min(totalItems - 1, i + overscan)
      break
    }
    end = i
  }

  // Generate virtual items
  const items: VirtualItem[] = []
  let offset = 0

  for (let i = 0; i < start; i++) {
    offset += getItemHeight(i)
  }

  for (let i = start; i <= end; i++) {
    const height = getItemHeight(i)
    items.push({
      index: i,
      start: offset,
      end: offset + height,
      size: height
    })
    offset += height
  }

  return items
}

/**
 * Calculate total height of virtualized list
 */
export function calculateTotalHeight(
  totalItems: number,
  itemHeight: number | ((index: number) => number)
): number {
  if (typeof itemHeight === 'function') {
    let total = 0
    for (let i = 0; i < totalItems; i++) {
      total += itemHeight(i)
    }
    return total
  }
  return totalItems * itemHeight
}

/**
 * React hook for virtualization
 */
export function useVirtualization(
  totalItems: number,
  scrollTop: number,
  config: VirtualListConfig
): {
  visibleItems: VirtualItem[]
  totalHeight: number
  startOffset: number
  endOffset: number
} {
  const visibleItems = calculateVisibleItems(totalItems, scrollTop, config)
  const totalHeight = calculateTotalHeight(totalItems, config.itemHeight)

  const startOffset = visibleItems.length > 0 ? visibleItems[0].start : 0
  const endOffset =
    visibleItems.length > 0
      ? totalHeight - visibleItems[visibleItems.length - 1].end
      : 0

  return {
    visibleItems,
    totalHeight,
    startOffset,
    endOffset
  }
}
