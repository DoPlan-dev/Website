// GitHub API integration for fetching releases

export interface GitHubRelease {
  id: number
  tag_name: string
  name: string
  body: string
  published_at: string
  prerelease: boolean
  draft: boolean
  html_url: string
  author: {
    login: string
    avatar_url: string
  }
}

export interface ParsedChangelogEntry {
  id: number
  version: string
  date: string
  title: string
  description: string
  url: string
  type: 'feature' | 'fix' | 'performance' | 'security' | 'other'
  entries: ChangelogItem[]
  author: {
    login: string
    avatar_url: string
  }
}

export interface ChangelogItem {
  type: 'feature' | 'fix' | 'performance' | 'security'
  title: string
  description: string
  importance: 'high' | 'medium' | 'low'
}

const GITHUB_API_BASE = 'https://api.github.com'

// Repository configuration - can be overridden via environment variables
const REPO_OWNER = import.meta.env.VITE_GITHUB_REPO_OWNER || 'DoPlan-dev'
const REPO_NAME = import.meta.env.VITE_GITHUB_REPO_NAME || 'cli'

/**
 * Fetch releases from GitHub API
 */
export async function fetchGitHubReleases(): Promise<GitHubRelease[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/releases?per_page=50&page=1`
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }

    const releases: GitHubRelease[] = await response.json()
    
    // Filter out drafts and sort by published date (newest first)
    return releases
      .filter((release) => !release.draft)
      .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
  } catch (error) {
    console.error('Error fetching GitHub releases:', error)
    return []
  }
}

/**
 * Parse release body to extract structured changelog entries
 */
function parseReleaseBody(body: string): ChangelogItem[] {
  const entries: ChangelogItem[] = []
  const lines = body.split('\n')
  
  let currentSection: ChangelogItem['type'] | null = null
  let currentItem: Partial<ChangelogItem> | null = null
  
  for (const line of lines) {
    const trimmed = line.trim()
    
    // Check for section headers
    if (trimmed.match(/^###?\s*(feature|fix|bug|performance|security|enhancement)/i)) {
      const match = trimmed.match(/feature|fix|bug|performance|security|enhancement/i)
      if (match) {
        const type = match[0].toLowerCase()
        const sectionType = 
          type.includes('feature') || type.includes('enhancement') ? 'feature' :
          type.includes('fix') || type.includes('bug') ? 'fix' :
          type.includes('performance') ? 'performance' :
          type.includes('security') ? 'security' :
          'feature' // Default to feature if unknown
        
        if (sectionType === 'feature' || sectionType === 'fix' || sectionType === 'performance' || sectionType === 'security') {
          currentSection = sectionType
        }
        
        if (currentItem && currentItem.title) {
          entries.push(currentItem as ChangelogItem)
        }
        currentItem = null
      }
    }
    // Check for list items
    else if (trimmed.match(/^[-*]\s+/) || trimmed.match(/^\d+\.\s+/)) {
      if (currentItem && currentItem.title) {
        entries.push(currentItem as ChangelogItem)
      }
      
      const content = trimmed.replace(/^[-*]\s+/, '').replace(/^\d+\.\s+/, '')
      const importance = 
        content.includes('!important') || content.includes('critical') || content.includes('breaking') ? 'high' :
        content.includes('major') || content.match(/^\[High\]/i) ? 'high' :
        content.match(/^\[Medium\]/i) ? 'medium' :
        'low'
      
      currentItem = {
        type: (currentSection || 'feature') as 'feature' | 'fix' | 'performance' | 'security',
        title: content.replace(/\[.*?\]/g, '').trim(),
        description: '',
        importance,
      }
    }
    // Description continuation
    else if (trimmed && currentItem && currentItem.title) {
      currentItem.description = (currentItem.description + ' ' + trimmed).trim()
    }
  }
  
  if (currentItem && currentItem.title) {
    entries.push(currentItem as ChangelogItem)
  }
  
  return entries.length > 0 ? entries : [
    {
      type: 'feature' as const,
      title: body.split('\n')[0] || 'Release',
      description: body,
      importance: 'medium' as const,
    },
  ]
}

/**
 * Parse GitHub releases into structured changelog format
 */
export async function fetchParsedChangelog(): Promise<ParsedChangelogEntry[]> {
  const releases = await fetchGitHubReleases()
  
  return releases.map((release) => {
    const entries = parseReleaseBody(release.body)
    
    return {
      id: release.id,
      version: release.tag_name.replace(/^v/, ''),
      date: release.published_at,
      title: release.name || release.tag_name,
      description: release.body.split('\n').slice(0, 3).join(' '),
      url: release.html_url,
      type: entries[0]?.type || 'other',
      entries,
      author: release.author,
    }
  })
}

/**
 * Get release by version tag
 */
export async function getReleaseByVersion(version: string): Promise<GitHubRelease | null> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/releases/tags/v${version.replace(/^v/, '')}`
    )
    
    if (!response.ok) {
      return null
    }
    
    return await response.json()
  } catch (error) {
    console.error(`Error fetching release ${version}:`, error)
    return null
  }
}

