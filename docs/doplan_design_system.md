# DoPlan CLI Design System
## Typography, Components & Page Architecture

---

## 1. TYPOGRAPHY SYSTEM

### Type Scale Hierarchy

| Level | Use Case | Size | Weight | Line Height | Letter Spacing |
|-------|----------|------|--------|-------------|-----------------|
| **H1** | Page titles, hero headline | 48-56px | 700 Bold | 1.2 | -0.02em |
| **H2** | Section headers, major divisions | 32-40px | 600 Semi-Bold | 1.3 | -0.01em |
| **H3** | Card titles, subsections | 24-28px | 600 Semi-Bold | 1.4 | 0 |
| **H4** | Command labels, feature names | 18-20px | 600 Semi-Bold | 1.5 | 0 |
| **Body Large** | Feature descriptions, key messaging | 16-18px | 400 Regular | 1.6 | 0 |
| **Body** | Standard body copy, descriptions | 14-16px | 400 Regular | 1.6 | 0 |
| **Caption** | Metadata, stats, footnotes | 12-14px | 400 Regular | 1.5 | 0.01em |
| **Code** | Terminal commands, code blocks | 13-14px | 500 Medium | 1.6 | 0 |

### Font Stack

```css
/* Primary: Clean, modern, cyberpunk aesthetic */
font-family: 'Inter', 'Segoe UI', sans-serif;

/* Code blocks: Monospace for terminal feel */
font-family: 'JetBrains Mono', 'Fira Code', monospace;

/* Accent/Display: Bold, mysterious presence (use sparingly) */
font-family: 'Space Mono', monospace; /* for UI labels/commands */
```

### Font Weights Used

- **400 Regular**: Body copy, descriptions
- **500 Medium**: Commands, labels, emphasis
- **600 Semi-Bold**: Headings, card titles, CTAs
- **700 Bold**: Hero headlines, primary CTAs

---

## 2. COLOR PALETTE & THEMING

### Primary Colors

| Color | Hex | Usage | Psychology |
|-------|-----|-------|------------|
| **Deep Void** | #0A0E27 | Background, dark surfaces | Mystery, focus |
| **Mystic Purple** | #7C3AED | Primary CTAs, accents, glow | Magic, power, mystery |
| **Cyber Cyan** | #06B6D4 | Secondary accents, highlights | Energy, clarity, tech |
| **Sacred Gold** | #FBBF24 | Achievements, badges, alerts | Success, value, mastery |
| **Pure White** | #FFFFFF | Primary text, contrast | Clarity, purity |
| **Steel Gray** | #94A3B8 | Secondary text, borders | Balance, sophistication |

### Extended Palette

| Name | Hex | Usage |
|------|-----|-------|
| **Ghost White** | #F8FAFC | Subtle backgrounds, cards |
| **Deep Indigo** | #312E81 | Hover states, darker surfaces |
| **Neon Green** | #10B981 | Success states, positive feedback |
| **Warning Red** | #EF4444 | Error states, alerts |
| **Twilight Blue** | #1E293B | Borders, dividers, subtle elements |

### Opacity Variations

- **Glows** (pseudo-elements): 30-50% opacity for atmospheric effects
- **Borders**: 20-30% opacity of accent colors
- **Overlays**: 80-90% opacity for readability
- **Ghost text**: 60% opacity for secondary information

---

## 3. COMPONENT LIBRARY

### 3.1 Button System

#### Primary CTA Button
```
State: Default
Background: Mystic Purple (#7C3AED)
Text: Pure White, 600 Semi-Bold
Padding: 14px 32px
Border-radius: 8px
Shadow: 0 0 20px rgba(124, 58, 237, 0.4)
Transition: 0.3s ease

State: Hover
Background: #6D28D9 (darker)
Shadow: 0 0 30px rgba(124, 58, 237, 0.6)
Transform: scale(1.02)

State: Active
Background: #5B21B6 (deepest)
Shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3)

State: Disabled
Opacity: 0.5
Cursor: not-allowed
```

#### Secondary Button
```
Background: transparent
Border: 2px solid Steel Gray (#94A3B8)
Text: Steel Gray, 600 Semi-Bold
Padding: 12px 28px
Border-radius: 8px
Transition: 0.3s ease

State: Hover
Border-color: Mystic Purple
Text-color: Mystic Purple
Background: rgba(124, 58, 237, 0.1)
```

#### Ghost Button
```
Background: transparent
Text: Pure White
Border: 1px solid rgba(255, 255, 255, 0.2)
Padding: 10px 20px
Border-radius: 6px

State: Hover
Background: rgba(255, 255, 255, 0.1)
Border-color: Cyber Cyan
```

### 3.2 Terminal/Code Block Component

```
Background: #0F172A (slightly lighter than background)
Border: 1px solid #312E81
Border-radius: 8px
Padding: 16px
Font: 'JetBrains Mono', 13px, 500 Medium
Color: Cyber Cyan for commands, Pure White for output
Line-height: 1.6
Copy-to-clipboard button: Top-right, Mystic Purple on hover

Example markup:
┌──────────────────────────────────────────┐
│ $ npx @doplan-dev/cli                    │
│ (Copy this. Feel the relief.)            │
│                                          │
│ [COPY BUTTON: Mystic Purple hover]       │
└──────────────────────────────────────────┘
```

### 3.3 Feature Card Component

```
Card Container
Background: rgba(15, 23, 42, 0.8) with 1px border of Steel Gray
Border-radius: 12px
Padding: 28px
Backdrop-filter: blur(10px)
Transition: 0.3s ease

State: Hover
Border-color: Mystic Purple
Box-shadow: 0 0 30px rgba(124, 58, 237, 0.2)
Transform: translateY(-4px)

Card Header
Icon: 48px, Cyber Cyan or Sacred Gold
Title: H4, Pure White
Subtitle: Body Small, Steel Gray

Card Body
Description: Body Large, Steel Gray
Bullet points: Steel Gray text, Cyber Cyan bullets (→)
```

### 3.4 Achievement Badge Component

```
Container: 64x64px, circular
Background: Radial gradient (Sacred Gold → Mystic Purple)
Border: 2px solid Sacred Gold
Box-shadow: 0 0 20px rgba(251, 191, 36, 0.4)

Icon/Text: Center, Pure White, 24px
Glow effect on unlock: Pulse animation 0.5s ease-out

Hover state:
Scale: 1.1
Shadow: 0 0 30px rgba(251, 191, 36, 0.6)
```

### 3.5 Stat Counter Component

```
Number: H2 size, Sacred Gold, 700 Bold
Label: Body, Steel Gray, 500 Medium
Icon: 32px, Cyber Cyan

Layout: Flex column, center-aligned
Animation: Number counts up on scroll into view
Duration: 1.5s ease-out
```

### 3.6 Timeline/Flow Component

```
Connector lines: 2px solid Mystic Purple
Nodes: 40px circles, Mystic Purple background
Node icons: 24px, Pure White, centered
Labels: H4 above/beside node
Descriptions: Body Large below node

Mobile: Stack vertical with left-aligned connector line
Desktop: Alternate left-right pattern with center line
```

### 3.7 Section Header Component

```
Preheader: 12px, ALL CAPS, Steel Gray, Letter-spacing +0.1em
Title: H2, Pure White, 700 Bold
Subtitle: Body Large, Steel Gray, max-width 600px

Optional: Accent bar (4px Mystic Purple, left-aligned, 60px width)

Spacing: 8px between preheader and title, 16px below subtitle
```

### 3.8 Testimonial/Social Proof Card

```
Quote: Body Large, Pure White, italic
Attribution: 14px, Steel Gray
Avatar: 40px circle, Steel Gray background
Company/Role: 12px, Steel Gray

Background: Subtle gradient (transparent to rgba(124, 58, 237, 0.05))
Border-left: 3px solid Cyber Cyan
Padding: 20px
Border-radius: 8px
```

---

## 4. PAGE ARCHITECTURE & LAYOUT PATTERNS

### 4.1 Page Structure (Desktop: 1920px reference)

```
┌─────────────────────────────────────────────────┐
│  HEADER/NAV (Fixed or sticky)                   │
│  Height: 72px | Bg: Deep Void with 0.95 opacity│
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  HERO SECTION                                   │
│  Full viewport height (100vh)                   │
│  Background: Gradient + animated void           │
│  Content: Centered, max-width 900px             │
│  Padding: 120px 40px                            │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  SECTION 1 (Value Prop / Transformation)        │
│  Max-width: 1200px | Center on page             │
│  Padding: 100px 40px                            │
│  Layout: 2-column grid or stacked               │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  SECTION 2 (Features / Commands)                │
│  Full-width background (slightly lighter)       │
│  Content max-width: 1200px                      │
│  Grid: 2x2 or 1x4 card layout                   │
│  Padding: 100px 40px                            │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  SECTION 3 (Timeline / Flow State)              │
│  Max-width: 1200px                              │
│  Padding: 100px 40px                            │
│  Background: Alternate color (subtle)           │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  SECTION 4 (Achievements / Gamification)        │
│  Full-width with accent background              │
│  Grid of badges or achievement showcase         │
│  Padding: 80px 40px                             │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  SECTION 5 (AI Agents / Team)                   │
│  Max-width: 1200px                              │
│  3-column grid of personality cards             │
│  Padding: 100px 40px                            │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  SECTION 6 (Social Proof / Stats)               │
│  Full-width with gradient background            │
│  3-4 stat counters in flex row                  │
│  Padding: 80px 40px                             │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  SECTION 7 (Primary CTA)                        │
│  Centered, full-width background                │
│  Large button + supporting copy                 │
│  Padding: 100px 40px                            │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  FOOTER / Secondary CTAs                        │
│  3-4 column link grid + legal                   │
│  Padding: 60px 40px                             │
└─────────────────────────────────────────────────┘
```

### 4.2 Spacing System (8px base unit)

```
Micro:    4px  (tightest spacing)
XS:       8px  (very small gaps)
Small:   16px  (labels, tight cards)
Base:    24px  (standard padding)
Medium:  32px  (section internal spacing)
Large:   48px  (section vertical gaps)
XL:      64px  (major section breaks)
XXL:     80px+ (hero spacing, full-height sections)
```

### 4.3 Responsive Breakpoints

```
Mobile:     < 640px    (full-width, stacked layout)
Tablet:     640-1024px (2-column grids, adjusted padding)
Desktop:    1024-1920px (full 3-4 column, max-width containers)
Ultra-wide: > 1920px   (center with side padding constraints)

Mobile Adjustments:
- Font sizes: Reduce by 10-20%
- Padding: Reduce to 20-24px sides
- Cards: Single column
- Hero: 60vh instead of 100vh
- Spacing: Use Small/Base instead of Large/XL
```

---

## 5. ANIMATION & MICRO-INTERACTIONS

### 5.1 Entrance Animations

```
Fade-in: opacity 0 → 1, duration 0.6s ease-out
Slide-up: transform translateY(30px) → 0, duration 0.6s ease-out
Scale: transform scale(0.95) → 1, duration 0.6s ease-out
Stagger: Each child element offset by 0.1s

Applied to:
- Section headers on scroll
- Feature cards on viewport entry
- Stat counters on scroll
- Achievement badges on unlock
```

### 5.2 Hover States

```
Button: Scale 1.02, shadow intensifies, transition 0.3s
Card: translateY(-4px), border-color shift, transition 0.3s
Link: color change to Cyber Cyan, underline pulse, transition 0.2s
Icon: rotate 5° + scale 1.1, transition 0.3s
```

### 5.3 Loading & State Animations

```
Skeleton loaders: Shimmer effect (opacity pulse 0.5 → 0.8 → 0.5)
Duration: 2s infinite

Progress bars: Gradient animation left-to-right
Duration: 0.8s infinite

Badge unlock: Pop animation + confetti
Scale: 0.5 → 1.1 → 1.0
Opacity: 0 → 1 → 1
Duration: 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)
```

### 5.4 Scroll Triggers

```
Parallax backgrounds: Move at 0.5x scroll speed
Fade-in text: Opacity increases with scroll depth
Counter animation: Numbers count up when in viewport
Blur effects: Intensify as user scrolls down
```

---

## 6. VISUAL EFFECTS & ATMOSPHERE

### 6.1 Background Patterns

```
Hero section:
- Base: Deep Void (#0A0E27)
- Gradient overlay: Radial gradient (transparent center → Deep Indigo edges)
- Animated elements: Floating orbs, very subtle (0.3 opacity)
- Parallax floating shapes: Slightly visible geometric forms

Regular sections:
- Base: Deep Void or Ghost White (for contrast sections)
- Subtle grid pattern: 1px lines at 10% opacity spacing at 40px intervals
- Gradient accents: Directional gradients (top-to-bottom) with Mystic Purple/Cyber Cyan at 5-10% opacity
```

### 6.2 Glow & Light Effects

```
CTA buttons:
- Box-shadow: 0 0 20px rgba(124, 58, 237, 0.4)
- Hover: 0 0 30px rgba(124, 58, 237, 0.6)

Terminal blocks:
- Inner shadow: inset 0 2px 10px rgba(0, 0, 0, 0.4)
- Outer glow: 0 0 15px rgba(6, 182, 212, 0.1)

Badge unlocks:
- Box-shadow: 0 0 30px rgba(251, 191, 36, 0.6)
- Pulsing animation: Shadow intensity 20-40px over 1.5s

Text glows:
- Apply to key phrases: text-shadow 0 0 10px rgba(124, 58, 237, 0.3)
- Headings: 0 0 20px rgba(124, 58, 237, 0.2)
```

### 6.3 Backdrop Filters

```
Cards: blur(10px) + opacity 0.8
Modals: blur(5px)
Navigation: blur(10px) on scroll

Fallback: Use rgba backgrounds for unsupported browsers
```

---

## 7. MICRO-COPY & VISUAL HIERARCHY

### 7.1 Label Hierarchy

```
PREHEADER (12px, ALL CAPS, +0.1em letter-spacing)
↓
Main Headline (48px, 700 Bold)
↓
Subheading (24px, 600 Semi-Bold, Steel Gray)
↓
Body Copy (16px, 400 Regular, Steel Gray)
↓
Supporting Text (14px, 400 Regular, 60% opacity)
```

### 7.2 Emphasis Techniques

```
Bold text: For key benefits, command names
Italic text: For quotes, emphasis, testimonials
Colored text: Cyber Cyan for commands, Sacred Gold for achievements
Uppercase: For labels, preheaders, section titles
Icons: Before text for visual scanning
Arrows (→): Before actions/benefits
Checkmarks (✓): For feature lists
```

---

## 8. ACCESSIBILITY & CONTRAST

### 8.1 Color Contrast Ratios (WCAG AA minimum)

```
Primary text (Pure White) on Deep Void:   21:1 ✓
Secondary text (Steel Gray) on Deep Void: 4.5:1 ✓
CTA Button text on Mystic Purple:         12:1 ✓
Link text (Cyber Cyan) on Deep Void:      5:1 ✓

All text above 16px: Minimum 4.5:1 ratio
All text below 16px: Minimum 7:1 ratio (AAA)
```

### 8.2 Focus States

```
Keyboard focus outline: 2px solid Cyber Cyan
Offset: 2px outside element
Border-radius: Match element's border-radius
Applied to: Buttons, links, inputs, interactive elements
```

### 8.3 Motion Preferences

```
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. COMPONENT USAGE GUIDELINES

### When to Use Each Component

| Component | Use Case | Frequency |
|-----------|----------|-----------|
| **Primary CTA** | Main conversion actions, hero CTAs | Sparingly (1-2 per page) |
| **Secondary Button** | Alternative actions, secondary CTAs | Moderate (2-4 per page) |
| **Feature Card** | Displaying features, benefits, services | Multiple (4-8 sections) |
| **Terminal Block** | Commands, code examples, quickstart | 1-2 per page |
| **Achievement Badge** | Unlocked features, gamification points | Multiple in gallery |
| **Timeline** | Process flows, feature walkthrough | 1 per page |
| **Stat Counter** | Social proof, metrics | 1 section |
| **Testimonial** | Social proof, user validation | 2-3 total |

---

## 10. IMPLEMENTATION CHECKLIST

### Before Launch

- [ ] All colors meet WCAG AA contrast standards
- [ ] Font sizes readable on mobile (minimum 16px for body)
- [ ] Buttons minimum 48px height for touch targets
- [ ] All animations respect `prefers-reduced-motion`
- [ ] Terminal blocks have copy-to-clipboard functionality
- [ ] Hover states obvious and intuitive
- [ ] Focus states visible on all interactive elements
- [ ] Loading states implemented for async content
- [ ] Error states match color system
- [ ] Typography scales properly across breakpoints
- [ ] Glow effects don't cause eye strain
- [ ] Animations not looping indefinitely unless necessary
- [ ] All links have discernible underlines or indicators

---

## QUICK REFERENCE: Color Codes

```css
--deep-void: #0A0E27;
--mystic-purple: #7C3AED;
--cyber-cyan: #06B6D4;
--sacred-gold: #FBBF24;
--pure-white: #FFFFFF;
--steel-gray: #94A3B8;
--ghost-white: #F8FAFC;
--deep-indigo: #312E81;
--neon-green: #10B981;
--warning-red: #EF4444;
--twilight-blue: #1E293B;
```

---

*Design System Version 1.0 | Last Updated: December 2025*