import React from 'react'

export const StructuredData: React.FC = () => {
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
  }

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

  return (
    <>
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
    </>
  )
}

