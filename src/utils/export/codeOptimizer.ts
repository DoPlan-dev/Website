// Code optimization utilities

/**
 * Optimize React component code
 */
export function optimizeReactCode(code: string): string {
  let optimized = code

  // Remove multiple empty lines
  optimized = optimized.replace(/\n{3,}/g, '\n\n')

  // Remove trailing whitespace
  optimized = optimized.split('\n').map(line => line.trimEnd()).join('\n')

  // Optimize imports
  optimized = optimizeImports(optimized)

  // Remove unused variables (basic check)
  optimized = removeUnusedVariables(optimized)

  return optimized
}

/**
 * Optimize imports
 */
function optimizeImports(code: string): string {
  // Group React imports
  const reactImports = code.match(/import\s+.*\s+from\s+['"]react['"]/g) || []
  if (reactImports.length > 1) {
    // Merge multiple React imports
    const imports = reactImports.map(imp => {
      const match = imp.match(/import\s+{([^}]+)}\s+from/)
      return match ? match[1].split(',').map(i => i.trim()) : []
    }).flat()

    const uniqueImports = Array.from(new Set(imports))
    const mergedImport = `import { ${uniqueImports.join(', ')} } from 'react'`
    
    reactImports.forEach(imp => {
      code = code.replace(imp, '')
    })
    code = mergedImport + '\n' + code
  }

  return code
}

/**
 * Remove unused variables (basic implementation)
 */
function removeUnusedVariables(code: string): string {
  // This is a simplified version - full implementation would require AST parsing
  // For now, we'll just clean up obvious cases
  
  // Remove unused const declarations that are never referenced
  const constMatches = code.match(/const\s+(\w+)\s*=\s*[^;]+;/g) || []
  constMatches.forEach(match => {
    const varName = match.match(/const\s+(\w+)/)?.[1]
    if (varName) {
      // Count occurrences (should be at least 2: declaration + usage)
      const occurrences = (code.match(new RegExp(`\\b${varName}\\b`, 'g')) || []).length
      if (occurrences === 1) {
        // Only declaration, remove it
        code = code.replace(match, '')
      }
    }
  })

  return code
}

/**
 * Minify CSS
 */
export function minifyCSS(css: string): string {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s+/g, ' ') // Collapse whitespace
    .replace(/;\s*}/g, '}') // Remove semicolon before closing brace
    .replace(/\s*{\s*/g, '{') // Remove spaces around opening brace
    .replace(/;\s*/g, ';') // Remove spaces after semicolons
    .replace(/\s*}\s*/g, '}') // Remove spaces around closing brace
    .replace(/\s*:\s*/g, ':') // Remove spaces around colons
    .trim()
}

/**
 * Format code with consistent indentation
 */
export function formatCode(code: string, _language: 'typescript' | 'javascript' | 'html' | 'css' = 'typescript'): string {
  let formatted = code

  // Basic formatting - normalize indentation
  const lines = formatted.split('\n')
  let indentLevel = 0
  const indentSize = 2

  formatted = lines.map(line => {
    const trimmed = line.trim()
    
    // Decrease indent for closing braces/brackets
    if (trimmed.startsWith('}') || trimmed.startsWith(')') || trimmed.startsWith(']')) {
      indentLevel = Math.max(0, indentLevel - 1)
    }

    const indented = ' '.repeat(indentLevel * indentSize) + trimmed

    // Increase indent for opening braces/brackets
    if (trimmed.endsWith('{') || trimmed.endsWith('(') || trimmed.endsWith('[')) {
      indentLevel++
    }

    return indented
  }).join('\n')

  return formatted
}

/**
 * Add performance optimizations to React code
 */
export function addPerformanceOptimizations(code: string): string {
  let optimized = code

  // Add React.memo for components without props
  if (code.includes('React.FC<{}>') || code.includes('React.FC = ()')) {
    const componentMatch = code.match(/export\s+(const|function)\s+(\w+)/)
    if (componentMatch) {
      const componentName = componentMatch[2]
      optimized = optimized.replace(
        new RegExp(`export\\s+(const|function)\\s+${componentName}`),
        `export const ${componentName} = React.memo(`
      )
      // Add closing parenthesis before export default
      if (optimized.includes(`export default ${componentName}`)) {
        optimized = optimized.replace(
          `export default ${componentName}`,
          `) as React.FC\n\nexport default ${componentName}`
        )
      } else {
        // Find the end of the component and add closing paren
        const lastBrace = optimized.lastIndexOf('}')
        if (lastBrace > 0) {
          optimized = optimized.slice(0, lastBrace) + '})' + optimized.slice(lastBrace + 1)
        }
      }
    }
  }

  return optimized
}

/**
 * Remove console.log statements (for production)
 */
export function removeConsoleLogs(code: string): string {
  return code.replace(/console\.(log|warn|error|info|debug)\([^)]*\);?\n?/g, '')
}

/**
 * Optimize bundle size
 */
export function optimizeBundleSize(code: string): string {
  let optimized = code

  // Replace named imports with default imports where possible
  optimized = optimized.replace(
    /import\s+{\s*(\w+)\s*}\s+from\s+['"]react['"]/g,
    (match, importName) => {
      if (importName === 'React') {
        return "import React from 'react'"
      }
      return match
    }
  )

  return optimized
}
