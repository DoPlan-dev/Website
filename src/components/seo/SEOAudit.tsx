import React, { useState, useEffect } from 'react'
import { Card, Heading, Text, Button, Flex, Badge } from '@radix-ui/themes'
import { LucideIcon } from '../ui/LucideIcon'

export interface SEOIssue {
  type: 'error' | 'warning' | 'info'
  title: string
  description: string
  fix?: string
}

export interface SEOAuditResult {
  score: number // 0-100
  issues: SEOIssue[]
  passed: number
  warnings: number
  errors: number
}

export const useSEOAudit = (): SEOAuditResult => {
  const [result, setResult] = useState<SEOAuditResult>({
    score: 0,
    issues: [],
    passed: 0,
    warnings: 0,
    errors: 0,
  })

  useEffect(() => {
    const audit = performSEOAudit()
    setResult(audit)
  }, [])

  return result
}

const performSEOAudit = (): SEOAuditResult => {
  const issues: SEOIssue[] = []
  let score = 100

  // Check for title tag
  const title = document.querySelector('title')?.textContent
  if (!title || title.length < 10) {
    issues.push({
      type: 'error',
      title: 'Missing or too short title tag',
      description: 'Title tag is missing or less than 10 characters',
      fix: 'Add a descriptive title tag between 10-60 characters',
    })
    score -= 10
  } else if (title.length > 60) {
    issues.push({
      type: 'warning',
      title: 'Title tag too long',
      description: `Title tag is ${title.length} characters (recommended: 10-60)`,
      fix: 'Shorten title tag to 60 characters or less',
    })
    score -= 5
  }

  // Check for meta description
  const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content')
  if (!metaDescription || metaDescription.length < 50) {
    issues.push({
      type: 'error',
      title: 'Missing or too short meta description',
      description: 'Meta description is missing or less than 50 characters',
      fix: 'Add a descriptive meta description between 50-160 characters',
    })
    score -= 10
  } else if (metaDescription.length > 160) {
    issues.push({
      type: 'warning',
      title: 'Meta description too long',
      description: `Meta description is ${metaDescription.length} characters (recommended: 50-160)`,
      fix: 'Shorten meta description to 160 characters or less',
    })
    score -= 5
  }

  // Check for Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]')
  const ogDescription = document.querySelector('meta[property="og:description"]')
  const ogImage = document.querySelector('meta[property="og:image"]')
  if (!ogTitle || !ogDescription || !ogImage) {
    issues.push({
      type: 'warning',
      title: 'Missing Open Graph tags',
      description: 'Open Graph tags help with social media sharing',
      fix: 'Add og:title, og:description, and og:image meta tags',
    })
    score -= 5
  }

  // Check for canonical URL
  const canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    issues.push({
      type: 'warning',
      title: 'Missing canonical URL',
      description: 'Canonical URL helps prevent duplicate content issues',
      fix: 'Add a canonical link tag',
    })
    score -= 3
  }

  // Check for structured data
  const structuredData = document.querySelectorAll('script[type="application/ld+json"]')
  if (structuredData.length === 0) {
    issues.push({
      type: 'warning',
      title: 'Missing structured data',
      description: 'Structured data helps search engines understand your content',
      fix: 'Add JSON-LD structured data scripts',
    })
    score -= 5
  }

  // Check for alt text on images
  const images = document.querySelectorAll('img')
  let imagesWithoutAlt = 0
  images.forEach(img => {
    if (!img.alt || img.alt.trim() === '') {
      imagesWithoutAlt++
    }
  })
  if (imagesWithoutAlt > 0) {
    issues.push({
      type: 'warning',
      title: `Missing alt text on ${imagesWithoutAlt} image(s)`,
      description: 'Alt text improves accessibility and SEO',
      fix: 'Add descriptive alt text to all images',
    })
    score -= Math.min(imagesWithoutAlt * 2, 10)
  }

  // Check for heading hierarchy
  const h1Count = document.querySelectorAll('h1').length
  if (h1Count === 0) {
    issues.push({
      type: 'error',
      title: 'Missing H1 tag',
      description: 'H1 tag is important for SEO',
      fix: 'Add at least one H1 tag to your page',
    })
    score -= 10
  } else if (h1Count > 1) {
    issues.push({
      type: 'warning',
      title: 'Multiple H1 tags',
      description: `Found ${h1Count} H1 tags (recommended: 1)`,
      fix: 'Use only one H1 tag per page',
    })
    score -= 3
  }

  // Check for internal links
  const links = document.querySelectorAll('a[href]')
  const internalLinks = Array.from(links).filter(link => {
    const href = link.getAttribute('href')
    return href && (href.startsWith('/') || href.includes(window.location.hostname))
  })
  if (internalLinks.length < 3) {
    issues.push({
      type: 'info',
      title: 'Low number of internal links',
      description: `Found ${internalLinks.length} internal links (recommended: 3+)`,
      fix: 'Add more internal links to improve site structure',
    })
    score -= 2
  }

  // Calculate counts
  const errors = issues.filter(i => i.type === 'error').length
  const warnings = issues.filter(i => i.type === 'warning').length
  const passed = Math.max(0, 10 - errors - warnings)

  // Ensure score is between 0-100
  score = Math.max(0, Math.min(100, score))

  return {
    score,
    issues,
    passed,
    warnings,
    errors,
  }
}

interface SEOAuditProps {
  onRun?: (result: SEOAuditResult) => void
}

export const SEOAudit: React.FC<SEOAuditProps> = ({ onRun }) => {
  const [result, setResult] = useState<SEOAuditResult | null>(null)
  const [isRunning, setIsRunning] = useState(false)

  const handleRunAudit = () => {
    setIsRunning(true)
    setTimeout(() => {
      const auditResult = performSEOAudit()
      setResult(auditResult)
      setIsRunning(false)
      onRun?.(auditResult)
    }, 500)
  }

  const getScoreColor = (score: number): string => {
    if (score >= 80) return '#10b981'
    if (score >= 60) return '#f59e0b'
    return '#ef4444'
  }

  const getIssueIcon = (type: SEOIssue['type']): string => {
    switch (type) {
      case 'error':
        return 'XCircle'
      case 'warning':
        return 'AlertTriangle'
      case 'info':
        return 'Info'
      default:
        return 'Circle'
    }
  }

  const getIssueColor = (type: SEOIssue['type']): string => {
    switch (type) {
      case 'error':
        return '#ef4444'
      case 'warning':
        return '#f59e0b'
      case 'info':
        return '#6366f1'
      default:
        return '#64748b'
    }
  }

  return (
    <Card style={{ padding: '1.5rem' }}>
      <Flex align="center" justify="between" mb="4">
        <Heading size="5" style={{ fontFamily: "'IBM Plex Sans', 'Inter', system-ui, sans-serif" }}>
          SEO Audit
        </Heading>
        <Button
          size="2"
          onClick={handleRunAudit}
          disabled={isRunning}
        >
          <LucideIcon name={isRunning ? "Loader2" : "Search"} size={16} color="currentColor" variant="outline" />
          <span style={{ marginLeft: '0.5rem' }}>{isRunning ? 'Analyzing...' : 'Run Audit'}</span>
        </Button>
      </Flex>

      {result && (
        <div>
          {/* Score */}
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            borderRadius: '0.75rem',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
            marginBottom: '1.5rem',
          }}>
            <Text size="2" style={{ color: '#64748b', marginBottom: '0.5rem', display: 'block' }}>
              SEO Score
            </Text>
            <div style={{
              fontSize: '3rem',
              fontWeight: 700,
              color: getScoreColor(result.score),
              fontFamily: "'IBM Plex Sans', 'Inter', system-ui, sans-serif",
              marginBottom: '0.5rem',
            }}>
              {result.score}
            </div>
            <Flex gap="3" justify="center">
              <Badge color="green">{result.passed} Passed</Badge>
              <Badge color="yellow">{result.warnings} Warnings</Badge>
              <Badge color="red">{result.errors} Errors</Badge>
            </Flex>
          </div>

          {/* Issues */}
          {result.issues.length > 0 && (
            <div className="space-y-3">
              <Heading size="4" mb="3" style={{ fontFamily: "'IBM Plex Sans', 'Inter', system-ui, sans-serif" }}>
                Issues Found
              </Heading>
              {result.issues.map((issue, index) => (
                <div
                  key={index}
                  style={{
                    padding: '1rem',
                    borderLeft: `4px solid ${getIssueColor(issue.type)}`,
                    background: '#f8fafc',
                    borderRadius: '0.5rem',
                  }}
                >
                  <Flex align="start" gap="2" mb="2">
                    <LucideIcon
                      name={getIssueIcon(issue.type) as any}
                      size={20}
                      color={getIssueColor(issue.type)}
                      variant="outline"
                    />
                    <div style={{ flex: 1 }}>
                      <Text size="3" style={{ fontWeight: 600, color: '#0f172a', display: 'block', marginBottom: '0.25rem' }}>
                        {issue.title}
                      </Text>
                      <Text size="2" style={{ color: '#64748b', marginBottom: '0.5rem', display: 'block' }}>
                        {issue.description}
                      </Text>
                      {issue.fix && (
                        <div style={{
                          padding: '0.75rem',
                          background: 'white',
                          borderRadius: '0.375rem',
                          border: '1px solid #e2e8f0',
                          marginTop: '0.5rem',
                        }}>
                          <Text size="2" style={{ fontWeight: 600, color: '#0f172a', marginBottom: '0.25rem', display: 'block' }}>
                            💡 Fix:
                          </Text>
                          <Text size="2" style={{ color: '#64748b' }}>
                            {issue.fix}
                          </Text>
                        </div>
                      )}
                    </div>
                  </Flex>
                </div>
              ))}
            </div>
          )}

          {result.issues.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              color: '#10b981',
            }}>
              <LucideIcon name="CheckCircle" size={48} color="#10b981" variant="outline" />
              <Text size="3" style={{ display: 'block', marginTop: '1rem', fontWeight: 600 }}>
                All checks passed! 🎉
              </Text>
            </div>
          )}
        </div>
      )}

      {!result && !isRunning && (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
          <Text size="2">Click "Run Audit" to analyze this page's SEO</Text>
        </div>
      )}
    </Card>
  )
}

