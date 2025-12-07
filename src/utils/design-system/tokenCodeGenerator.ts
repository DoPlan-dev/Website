import { DesignTokens } from '../../hooks/useDesignTokens'

export const generateCode = (tokens: DesignTokens) => {
  const tailwindConfig = `// Update tailwind.config.js
// Find the theme.extend section and replace with:

colors: {
  // Volt Exact Colors (PrimeVue Volt Palette)
  'volt': {
    'primary': '${tokens.colors.primary}',      // Indigo primary
    'primary-dark': '${tokens.colors.primaryHover}',
    'surface': '${tokens.colors.surface}',
    'surface-soft': '${tokens.colors.surfaceSoft}',
    'border': '${tokens.colors.border}',
    'border-subtle': '${tokens.colors.borderSubtle}',
    'text-primary': '${tokens.colors.textPrimary}',
    'text-secondary': '${tokens.colors.textSecondary}',
    'text-tertiary': '${tokens.colors.textTertiary}',
  },
  // Google Colors (for brand consistency)
  'google-blue': '${tokens.colors.primary}',
  'cyan': '${tokens.colors.primary}',
},
fontFamily: {
  sans: [${tokens.typography.bodyFont.split(',').map(f => `'${f.trim()}'`).join(', ')}],
  mono: [${tokens.typography.monoFont.split(',').map(f => `'${f.trim()}'`).join(', ')}],
},
borderRadius: {
  'volt': '${tokens.borderRadius.button}',
  'volt-md': '${tokens.borderRadius.card}',
},`

  const cssVariables = `// Update src/styles/volt-inspired.css
// Find the :root selector and update these variables:

:root {
  /* Volt-inspired Colors */
  --volt-primary: ${tokens.colors.primary};
  --volt-primary-hover: ${tokens.colors.primaryHover};
  --volt-surface: ${tokens.colors.surface};
  --volt-surface-soft: ${tokens.colors.surfaceSoft};
  --volt-border: ${tokens.colors.border};
  --volt-border-subtle: ${tokens.colors.borderSubtle};
  
  /* Text Colors */
  --volt-text-primary: ${tokens.colors.textPrimary};
  --volt-text-secondary: ${tokens.colors.textSecondary};
  --volt-text-tertiary: ${tokens.colors.textTertiary};
  
  /* Volt Typography */
  --volt-font-heading: ${tokens.typography.headingFont};
  --volt-font-body: ${tokens.typography.bodyFont};
  --volt-font-mono: ${tokens.typography.monoFont};
  
  /* Volt Border Radius */
  --volt-radius: ${tokens.borderRadius.button};
  --volt-radius-md: ${tokens.borderRadius.card};
}`

  const instructions = `# Instructions for Cursor AI

## Step 1: Update Tailwind Config
**File**: \`tailwind.config.js\`

1. Locate the \`theme.extend\` section
2. Find the \`colors\` object and update the \`volt\` colors
3. Update the \`google-blue\` and \`cyan\` values to match primary color
4. Update \`fontFamily\` if typography changed
5. Update \`borderRadius\` if changed

## Step 2: Update CSS Variables
**File**: \`src/styles/volt-inspired.css\`

1. Find the \`:root\` selector
2. Replace the variable values with the generated values above
3. Ensure all color variables are updated consistently

## Step 3: Update Global CSS
**File**: \`src/index.css\`

1. Find \`--color-google-blue\` and \`--color-cyan\`
2. Update both to: \`${tokens.colors.primary}\`

## Step 4: Verify Changes
1. Run: \`npm run build\`
2. Check that all components use the new colors
3. Test responsive behavior
4. Verify no TypeScript errors

## Step 5: Apply Globally (Optional)
Search and replace hardcoded values:
- Search for: \`#6366f1\` → Replace with CSS variable or Tailwind class
- Search for: \`#0f172a\` → Replace with \`var(--volt-text-primary)\`
- Search for: \`#64748b\` → Replace with \`var(--volt-text-secondary)\`

## Generated Values Summary:
- Primary Color: ${tokens.colors.primary}
- Primary Hover: ${tokens.colors.primaryHover}
- Text Primary: ${tokens.colors.textPrimary}
- Text Secondary: ${tokens.colors.textSecondary}
- Border Radius Button: ${tokens.borderRadius.button}
- Border Radius Card: ${tokens.borderRadius.card}`

  const fullCode = `# Design System Changes

${instructions}

---

## Tailwind Config Changes

\`\`\`javascript
${tailwindConfig}
\`\`\`

---

## CSS Variables Changes

\`\`\`css
${cssVariables}
\`\`\`

---

Copy the code blocks above and apply them to the respective files.`

  return {
    tailwindConfig,
    cssVariables,
    instructions,
    fullCode,
  }
}

