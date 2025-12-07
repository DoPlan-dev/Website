import React from 'react'

export interface StructuredDataProps {
  type?: 'default' | 'article' | 'product' | 'event' | 'faq' | 'breadcrumb'
  article?: {
    headline?: string
    author?: string
    datePublished?: string
    dateModified?: string
    image?: string
  }
  product?: {
    name?: string
    description?: string
    image?: string
    price?: string
    currency?: string
    availability?: string
  }
  faqItems?: Array<{
    question: string
    answer: string
  }>
  breadcrumbItems?: Array<{
    name: string
    url: string
  }>
}

export const StructuredDataEnhanced: React.FC<StructuredDataProps> = ({
  type = 'default',
  article,
  product,
  faqItems,
  breadcrumbItems,
}) => {
  // Default organization schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DoPlan',
    url: 'https://doplan.dev',
    logo: 'https://doplan.dev/logo.png',
    description: 'Build production-ready apps with 18 specialized AI agents. 98% success rate.',
    sameAs: [
      'https://github.com/DoPlan-dev/CLI',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      url: 'https://doplan.dev',
    },
  }

  // Default software application schema
  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'DoPlan CLI',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    description: 'Build production-ready apps with 18 specialized AI agents. 5 simple commands. Zero configuration.',
    url: 'https://doplan.dev',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '50000',
    },
  }

  // Default website schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DoPlan.dev',
    url: 'https://doplan.dev',
    description: 'Build production-ready apps without the burnout. 18 AI agents. 98% success rate.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://doplan.dev/#docs?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  // Article schema
  const articleSchema = article ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline || 'DoPlan Article',
    author: {
      '@type': 'Organization',
      name: article.author || 'DoPlan Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'DoPlan',
      logo: {
        '@type': 'ImageObject',
        url: 'https://doplan.dev/logo.png',
      },
    },
    datePublished: article.datePublished || new Date().toISOString(),
    dateModified: article.dateModified || new Date().toISOString(),
    image: article.image || 'https://doplan.dev/og-image.png',
  } : null

  // Product schema
  const productSchema = product ? {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name || 'DoPlan CLI',
    description: product.description || 'Build production-ready apps with AI agents',
    image: product.image || 'https://doplan.dev/og-image.png',
    offers: {
      '@type': 'Offer',
      price: product.price || '0',
      priceCurrency: product.currency || 'USD',
      availability: product.availability || 'https://schema.org/InStock',
    },
  } : null

  // FAQ schema
  const faqSchema = faqItems && faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } : null

  // Breadcrumb schema
  const breadcrumbSchema = breadcrumbItems && breadcrumbItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  } : null

  return (
    <>
      {/* Default schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Conditional schemas */}
      {type === 'article' && articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}

      {type === 'product' && productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}

      {type === 'faq' && faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {type === 'breadcrumb' && breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  )
}

