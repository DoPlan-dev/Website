# Design: Design System Implementation
## Feature 02-Design-System

**Feature ID**: 02-Design-System  
**Phase**: 01-Foundation

---

## Design System Structure

### CSS Variables Design

```css
/* src/styles/design-tokens.css */

:root {
  /* Core Colors */
  --color-void: #0A0E27;
  --color-cyan: #00D9FF;
  --color-purple: #9D4EDD;
  --color-light: #E8F0FF;
  --color-mid: #B0BBCC;
  --color-success: #00D98E;
  --color-warning: #FF9D3D;
  --color-error: #FF4757;
  --color-neutral-dark: #5A6B7F;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #00D9FF, #9D4EDD);
  
  /* Spacing (8px base) */
  --spacing-xs: 4px;
  --spacing-s: 8px;
  --spacing-m: 16px;
  --spacing-l: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 48px;
  --spacing-xxxl: 64px;
  
  /* Shadows */
  --shadow-elevation-1: 0 2px 8px rgba(0, 217, 255, 0.08);
  --shadow-elevation-2: 0 4px 16px rgba(0, 217, 255, 0.12), 0 0 24px rgba(157, 78, 221, 0.06);
  --shadow-elevation-3: 0 8px 32px rgba(0, 217, 255, 0.16), 0 0 48px rgba(157, 78, 221, 0.1);
  --shadow-glow-primary: 0 0 20px rgba(0, 217, 255, 0.4), inset 0 0 20px rgba(0, 217, 255, 0.1);
  --shadow-glow-secondary: 0 0 20px rgba(157, 78, 221, 0.3), inset 0 0 20px rgba(157, 78, 221, 0.05);
  
  /* Border Radius */
  --radius-subtle: 4px;
  --radius-moderate: 8px;
  --radius-large: 12px;
  --radius-smooth: 16px;
}
```

---

## Tailwind Configuration Design

### Extended Theme Configuration

```javascript
// tailwind.config.js (extend section)
extend: {
  colors: {
    void: 'var(--color-void)',
    cyan: 'var(--color-cyan)',
    purple: 'var(--color-purple)',
    light: 'var(--color-light)',
    mid: 'var(--color-mid)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    error: 'var(--color-error)',
    'neutral-dark': 'var(--color-neutral-dark)',
  },
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'Consolas', 'monospace'],
  },
  spacing: {
    'xs': 'var(--spacing-xs)',
    's': 'var(--spacing-s)',
    'm': 'var(--spacing-m)',
    'l': 'var(--spacing-l)',
    'xl': 'var(--spacing-xl)',
    'xxl': 'var(--spacing-xxl)',
    'xxxl': 'var(--spacing-xxxl)',
  },
  boxShadow: {
    'elevation-1': 'var(--shadow-elevation-1)',
    'elevation-2': 'var(--shadow-elevation-2)',
    'elevation-3': 'var(--shadow-elevation-3)',
    'glow-primary': 'var(--shadow-glow-primary)',
    'glow-secondary': 'var(--shadow-glow-secondary)',
  },
  borderRadius: {
    'subtle': 'var(--radius-subtle)',
    'moderate': 'var(--radius-moderate)',
    'large': 'var(--radius-large)',
    'smooth': 'var(--radius-smooth)',
  },
}
```

---

## Typography System Design

### Font Loading

```html
<!-- index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
```

### Typography Scale Utilities

```css
/* src/styles/typography.css */

.text-hero {
  font-size: 56px;
  font-weight: 700;
  line-height: 1.2;
}

.text-h1 {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
}

.text-h2 {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.3;
}

.text-h3 {
  font-size: 28px;
  font-weight: 600;
  line-height: 1.4;
}

.text-h4 {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
}

.text-body {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
}

.text-small {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
}

.text-tiny {
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
}

.text-code {
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
}

.text-terminal {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 400;
  line-height: 1.8;
}
```

---

## Base Component Styles Design

### Primary Button

```css
.btn-primary {
  background: var(--gradient-primary);
  border: 1px solid rgba(0, 217, 255, 0.8);
  border-radius: var(--radius-large);
  padding: var(--spacing-m) var(--spacing-xl);
  font-weight: 700;
  font-size: 16px;
  color: var(--color-light);
  cursor: pointer;
  box-shadow: var(--shadow-glow-primary);
  transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.btn-primary:hover {
  box-shadow: 0 0 30px rgba(0, 217, 255, 0.6),
              0 12px 48px rgba(0, 217, 255, 0.2);
  transform: translateY(-4px);
}

.btn-primary:active {
  transform: translateY(-2px);
  box-shadow: var(--shadow-elevation-2);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  box-shadow: none;
}
```

### Secondary Button

```css
.btn-secondary {
  background: var(--color-void);
  border: 2px solid var(--color-purple);
  border-radius: var(--radius-large);
  padding: var(--spacing-m) var(--spacing-xl);
  font-weight: 600;
  font-size: 16px;
  color: var(--color-purple);
  cursor: pointer;
  box-shadow: var(--shadow-elevation-1);
  transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.btn-secondary:hover {
  box-shadow: var(--shadow-elevation-2);
  transform: translateY(-2px);
}
```

### Card Component

```css
.card {
  background: var(--color-void);
  border: 1px solid rgba(0, 217, 255, 0.3);
  border-radius: var(--radius-large);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-elevation-2);
  transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.card:hover {
  border-color: rgba(0, 217, 255, 0.5);
  box-shadow: var(--shadow-elevation-3);
  transform: translateY(-4px);
}
```

---

*Generated by DoPlan CLI v1.3.4*  
*Sup-Agent: Engineering Lead*  
*Date: 2025-12-03*

