/**
 * Fetch npm package download statistics
 * @param packageName - The npm package name (e.g., '@doplan-dev/cli')
 * @returns Promise with download count or null if fetch fails
 */
export async function fetchNpmDownloads(packageName: string): Promise<string | null> {
  try {
    // Fetch last 30 days downloads from npm API
    const response = await fetch(`https://api.npmjs.org/downloads/range/last-month/${packageName}`)
    
    if (!response.ok) {
      console.warn(`Failed to fetch npm downloads for ${packageName}`)
      return null
    }
    
    const data = await response.json()
    
    if (data.downloads && data.downloads.length > 0) {
      // Sum all downloads in the range
      const totalDownloads = data.downloads.reduce((sum: number, day: { downloads: number }) => sum + day.downloads, 0)
      
      // Format the number (e.g., 1250 -> "1.2K", 1500000 -> "1.5M")
      if (totalDownloads >= 1000000) {
        return `${(totalDownloads / 1000000).toFixed(1)}M+`
      } else if (totalDownloads >= 1000) {
        return `${(totalDownloads / 1000).toFixed(1)}K+`
      } else {
        return `${totalDownloads}+`
      }
    }
    
    return null
  } catch (error) {
    console.warn('Error fetching npm downloads:', error)
    return null
  }
}

