export interface SearchResult {
  id: string
  title: string
  description?: string
  category: 'component' | 'section' | 'page' | 'setting' | 'shortcut'
  score: number
  metadata?: Record<string, any>
}

export interface SearchableItem {
  id: string
  title: string
  description?: string
  category: 'component' | 'section' | 'page' | 'setting' | 'shortcut'
  tags?: string[]
  metadata?: Record<string, any>
}

/**
 * Simple fuzzy matching algorithm
 * Returns a score between 0 and 1, where 1 is a perfect match
 */
function fuzzyMatch(pattern: string, text: string): number {
  if (!pattern) return 1
  if (!text) return 0

  const patternLower = pattern.toLowerCase()
  const textLower = text.toLowerCase()

  // Exact match
  if (textLower === patternLower) return 1

  // Starts with
  if (textLower.startsWith(patternLower)) return 0.9

  // Contains
  if (textLower.includes(patternLower)) return 0.7

  // Fuzzy match - check if all pattern characters appear in order
  let patternIndex = 0
  for (let i = 0; i < textLower.length && patternIndex < patternLower.length; i++) {
    if (textLower[i] === patternLower[patternIndex]) {
      patternIndex++
    }
  }

  if (patternIndex === patternLower.length) {
    return 0.5
  }

  return 0
}

/**
 * Search across multiple items with fuzzy matching
 */
export function fuzzySearch(
  query: string,
  items: SearchableItem[],
  options?: {
    limit?: number
    minScore?: number
  }
): SearchResult[] {
  if (!query.trim()) {
    return []
  }

  const results: SearchResult[] = items
    .map(item => {
      // Calculate scores for different fields
      const titleScore = fuzzyMatch(query, item.title)
      const descriptionScore = item.description ? fuzzyMatch(query, item.description) * 0.5 : 0
      const tagsScore = item.tags
        ? item.tags.reduce((max, tag) => Math.max(max, fuzzyMatch(query, tag) * 0.3), 0)
        : 0

      // Weighted total score
      const score = Math.max(titleScore, descriptionScore, tagsScore)

      return {
        id: item.id,
        title: item.title,
        description: item.description,
        category: item.category,
        score,
        metadata: item.metadata
      }
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score)

  const minScore = options?.minScore ?? 0.1
  const limit = options?.limit ?? 20

  return results
    .filter(result => result.score >= minScore)
    .slice(0, limit)
}

/**
 * Group search results by category
 */
export function groupResultsByCategory(results: SearchResult[]): Record<string, SearchResult[]> {
  return results.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = []
    }
    acc[result.category].push(result)
    return acc
  }, {} as Record<string, SearchResult[]>)
}
