// Code validation utilities

export interface ValidationResult {
  valid: boolean
  errors: ValidationError[]
  warnings: ValidationWarning[]
}

export interface ValidationError {
  line?: number
  column?: number
  message: string
  severity: 'error'
}

export interface ValidationWarning {
  line?: number
  column?: number
  message: string
  severity: 'warning'
}

/**
 * Validate React component code
 */
export function validateReactCode(code: string): ValidationResult {
  const errors: ValidationError[] = []
  const warnings: ValidationWarning[] = []

  // Check for basic React structure
  if (!code.includes('import React') && !code.includes('import * as React')) {
    warnings.push({
      message: 'React import not found. Modern React may not require explicit import.',
      severity: 'warning'
    })
  }

  // Check for export
  if (!code.includes('export')) {
    errors.push({
      message: 'Component must be exported',
      severity: 'error'
    })
  }

  // Check for JSX
  if (!code.includes('<') && !code.includes('return')) {
    errors.push({
      message: 'Component must return JSX',
      severity: 'error'
    })
  }

  // Check for common syntax errors
  const openBraces = (code.match(/{/g) || []).length
  const closeBraces = (code.match(/}/g) || []).length
  if (openBraces !== closeBraces) {
    errors.push({
      message: `Mismatched braces: ${openBraces} opening, ${closeBraces} closing`,
      severity: 'error'
    })
  }

  const openParens = (code.match(/\(/g) || []).length
  const closeParens = (code.match(/\)/g) || []).length
  if (openParens !== closeParens) {
    errors.push({
      message: `Mismatched parentheses: ${openParens} opening, ${closeParens} closing`,
      severity: 'error'
    })
  }

  // Check for TypeScript types
  if (code.includes('interface') || code.includes('type')) {
    // TypeScript code - check for proper typing
    if (code.includes('React.FC') && !code.includes('<')) {
      warnings.push({
        message: 'Consider using typed props interface for React.FC',
        severity: 'warning'
      })
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  }
}

/**
 * Validate HTML code
 */
export function validateHTML(code: string): ValidationResult {
  const errors: ValidationError[] = []
  const warnings: ValidationWarning[] = []

  // Check for basic HTML structure
  if (!code.includes('<')) {
    errors.push({
      message: 'No HTML tags found',
      severity: 'error'
    })
  }

  // Check for unclosed tags (simple check)
  const tagMatches = code.match(/<[^/>]+>/g) || []
  const selfClosingTags = ['img', 'br', 'hr', 'input', 'meta', 'link']
  
  tagMatches.forEach(tag => {
    const tagName = tag.match(/<(\w+)/)?.[1]
    if (tagName && !selfClosingTags.includes(tagName.toLowerCase())) {
      const closingTag = `</${tagName}>`
      if (!code.includes(closingTag)) {
        warnings.push({
          message: `Tag <${tagName}> may not be closed`,
          severity: 'warning'
        })
      }
    }
  })

  // Check for accessibility
  if (code.includes('<img') && !code.includes('alt=')) {
    warnings.push({
      message: 'Images should have alt attributes for accessibility',
      severity: 'warning'
    })
  }

  if (code.includes('<button') && !code.includes('aria-label') && !code.match(/<button[^>]*>.*<\/button>/)) {
    warnings.push({
      message: 'Buttons should have accessible labels',
      severity: 'warning'
    })
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  }
}

/**
 * Validate CSS code
 */
export function validateCSS(code: string): ValidationResult {
  const errors: ValidationError[] = []
  const warnings: ValidationWarning[] = []

  // Check for basic CSS structure
  if (!code.includes('{') || !code.includes('}')) {
    errors.push({
      message: 'Invalid CSS structure',
      severity: 'error'
    })
  }

  // Check for balanced braces
  const openBraces = (code.match(/{/g) || []).length
  const closeBraces = (code.match(/}/g) || []).length
  if (openBraces !== closeBraces) {
    errors.push({
      message: `Mismatched CSS braces: ${openBraces} opening, ${closeBraces} closing`,
      severity: 'error'
    })
  }

  // Check for common issues
  if (code.includes('!important') && code.match(/!important/g)!.length > 5) {
    warnings.push({
      message: 'Excessive use of !important may indicate specificity issues',
      severity: 'warning'
    })
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  }
}

/**
 * Validate TypeScript code
 */
export function validateTypeScript(code: string): ValidationResult {
  const result = validateReactCode(code) // React code is TypeScript

  // Additional TypeScript-specific checks
  if (code.includes('any')) {
    result.warnings.push({
      message: 'Consider using specific types instead of "any"',
      severity: 'warning'
    })
  }

  if (code.includes('@ts-ignore') || code.includes('@ts-nocheck')) {
    result.warnings.push({
      message: 'TypeScript errors are being ignored',
      severity: 'warning'
    })
  }

  return result
}
