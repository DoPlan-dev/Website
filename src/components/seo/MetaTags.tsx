import React, { useEffect } from 'react'

export interface MetaTagsProps {
  title?: string
  description?: string
  keywords?: string[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  ogType?: string
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  canonicalUrl?: string
  robots?: string
  author?: string
  noindex?: boolean
  nofollow?: boolean
}

export const MetaTags: React.FC<MetaTagsProps> = ({
  title = 'DoPlan.dev - Build Production Apps Without the Burnout',
  description = 'Build production-ready apps with 18 specialized AI agents. 98% success rate. 5 simple commands. Zero configuration.',
  keywords = ['DoPlan', 'AI agents', 'development', 'CLI', 'productivity', 'automation'],
  ogTitle,
  ogDescription,
  ogImage = 'https://doplan.dev/og-image.png',
  ogUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonicalUrl,
  robots,
  author = 'DoPlan Team',
  noindex = false,
  nofollow = false,
}) => {
  const robotsContent = robots || [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
  ].filter(Boolean).join(', ')

  const finalOgTitle = ogTitle || title
  const finalOgDescription = ogDescription || description
  const finalOgUrl = ogUrl || (typeof window !== 'undefined' ? window.location.href : 'https://doplan.dev')
  const finalCanonicalUrl = canonicalUrl || finalOgUrl
  const finalTwitterTitle = twitterTitle || finalOgTitle
  const finalTwitterDescription = twitterDescription || finalOgDescription
  const finalTwitterImage = twitterImage || ogImage

  useEffect(() => {
    // Update document title
    document.title = title

    // Helper function to set or update meta tag
    const setMetaTag = (name: string, content: string, isProperty: boolean = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let meta = document.querySelector(selector) as HTMLMetaElement
      if (!meta) {
        meta = document.createElement('meta')
        if (isProperty) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    // Helper function to set or update link tag
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', rel)
        document.head.appendChild(link)
      }
      link.setAttribute('href', href)
    }

    // Basic Meta Tags
    setMetaTag('description', description)
    if (keywords.length > 0) {
      setMetaTag('keywords', keywords.join(', '))
    }
    setMetaTag('author', author)
    setMetaTag('robots', robotsContent)
    setMetaTag('theme-color', '#6366f1')
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0')

    // Canonical URL
    if (finalCanonicalUrl) {
      setLinkTag('canonical', finalCanonicalUrl)
    }

    // Open Graph Meta Tags
    setMetaTag('og:title', finalOgTitle, true)
    setMetaTag('og:description', finalOgDescription, true)
    setMetaTag('og:image', ogImage, true)
    setMetaTag('og:url', finalOgUrl, true)
    setMetaTag('og:type', ogType, true)
    setMetaTag('og:site_name', 'DoPlan.dev', true)

    // Twitter Card Meta Tags
    setMetaTag('twitter:card', twitterCard)
    setMetaTag('twitter:title', finalTwitterTitle)
    setMetaTag('twitter:description', finalTwitterDescription)
    setMetaTag('twitter:image', finalTwitterImage)
  }, [
    title,
    description,
    keywords,
    author,
    robotsContent,
    finalCanonicalUrl,
    finalOgTitle,
    finalOgDescription,
    ogImage,
    finalOgUrl,
    ogType,
    twitterCard,
    finalTwitterTitle,
    finalTwitterDescription,
    finalTwitterImage,
  ])

  return null
}

