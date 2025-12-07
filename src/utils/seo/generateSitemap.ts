export interface SitemapEntry {
  url: string
  lastmod?: string
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

export interface SitemapConfig {
  baseUrl: string
  entries: SitemapEntry[]
}

/**
 * Generate XML sitemap string
 */
export const generateSitemapXML = (config: SitemapConfig): string => {
  const { baseUrl, entries } = config

  const xmlEntries = entries.map(entry => {
    const url = entry.url.startsWith('http') ? entry.url : `${baseUrl}${entry.url}`
    const lastmod = entry.lastmod || new Date().toISOString().split('T')[0]
    const changefreq = entry.changefreq || 'weekly'
    const priority = entry.priority !== undefined ? entry.priority : 0.5

    return `  <url>
    <loc>${escapeXML(url)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>`
}

/**
 * Generate sitemap for DoPlan website
 */
export const generateDoPlanSitemap = (): string => {
  const baseUrl = 'https://doplan.dev'
  const now = new Date().toISOString().split('T')[0]

  const entries: SitemapEntry[] = [
    {
      url: '/',
      lastmod: now,
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      url: '/features',
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      url: '/docs',
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      url: '/changelog',
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      url: '/blog',
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      url: '/help',
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.7,
    },
  ]

  return generateSitemapXML({ baseUrl, entries })
}

/**
 * Escape XML special characters
 */
const escapeXML = (str: string): string => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/**
 * Save sitemap to public directory (for server-side generation)
 */
export const saveSitemap = async (xml: string, path: string = '/public/sitemap.xml'): Promise<void> => {
  // This would typically be used in a build script
  // For client-side, you might want to trigger a download
  const blob = new Blob([xml], { type: 'application/xml' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'sitemap.xml'
  a.click()
  URL.revokeObjectURL(url)
}

