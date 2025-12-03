# GitHub Issues: Hero Section
## Feature 04-Hero-Section

**Feature ID**: 04-Hero-Section  
**Phase**: 01-Foundation  
**Priority**: P0 - Must Have

---

## Issue Templates

### Issue 1: Create Hero Section Layout

**Title**: Implement Hero Section Layout Component  
**Labels**: `hero`, `foundation`, `p0`, `component`  
**Milestone**: Phase 1 - Foundation  
**Assignee**: Frontend Developer

**Description:**
Create the Hero section component with responsive 50-50 split layout for desktop and single column for mobile.

**Acceptance Criteria:**
- [ ] Hero section component created
- [ ] 50-50 grid layout on desktop
- [ ] Single column layout on mobile
- [ ] Background gradient visible
- [ ] Height: 720px desktop, auto mobile
- [ ] Responsive padding (96px desktop, 64px mobile)

**Technical Details:**
- Component: `src/components/sections/Hero.tsx`
- Layout: CSS Grid
- Background: Void + radial Cyan glow
- Breakpoints: 768px mobile

**Estimated Time**: 1 hour

---

### Issue 2: Create Headline and Subheadline

**Title**: Implement Hero Headline and Subheadline Components  
**Labels**: `hero`, `typography`, `foundation`, `p0`  
**Milestone**: Phase 1 - Foundation  
**Assignee**: Frontend Developer

**Description:**
Create headline and subheadline components with compelling copy and proper typography.

**Acceptance Criteria:**
- [ ] Headline component created (56px, Bold)
- [ ] Subheadline component created (24px, Regular)
- [ ] Compelling copy added
- [ ] Typography follows design system
- [ ] Contrast ratio 16:1
- [ ] Mobile responsive (32px headline, 18px subheadline)

**Technical Details:**
- Headline: 56px desktop, 32px mobile
- Subheadline: 24px desktop, 18px mobile
- Colors: Light (headline), Mid (subheadline)

**Estimated Time**: 45 minutes

---

### Issue 3: Display 5 Commands

**Title**: Implement 5 Commands Display in Hero Section  
**Labels**: `hero`, `content`, `foundation`, `p0`  
**Milestone**: Phase 1 - Foundation  
**Assignee**: Frontend Developer

**Description:**
Display the 5 DoPlan commands (/hey, /do, /plan, /dev, /sys) with descriptions.

**Acceptance Criteria:**
- [ ] Commands list component created
- [ ] All 5 commands displayed
- [ ] Monospace font (JetBrains Mono)
- [ ] Cyan color for commands
- [ ] Purple "/" prefix
- [ ] Mobile responsive

**Technical Details:**
- Font: JetBrains Mono, 16px
- Color: Cyan (#00D9FF)
- Prefix: Purple (#9D4EDD)
- Spacing: 12px between commands

**Estimated Time**: 1 hour

---

### Issue 4: Create Terminal Window Component

**Title**: Build Terminal Visual Component  
**Labels**: `hero`, `terminal`, `foundation`, `p0`, `component`  
**Milestone**: Phase 1 - Foundation  
**Assignee**: Frontend Developer

**Description:**
Create a terminal window component with header controls and content area showing command output.

**Acceptance Criteria:**
- [ ] TerminalWindow component created
- [ ] Header bar with window controls (red, yellow, green)
- [ ] "Terminal" label
- [ ] Content area with command output
- [ ] Floating animation (3s, 10px movement)
- [ ] Matches design system

**Technical Details:**
- Component: `src/components/terminal/TerminalWindow.tsx`
- Background: #050A1A
- Border: Cyan 20% opacity
- Shadow: Elevation 3 + Glow
- Animation: CSS transform (translateY)

**Estimated Time**: 1.5 hours

---

### Issue 5: Implement Copy Button

**Title**: Add Copy-to-Clipboard Button  
**Labels**: `hero`, `interaction`, `foundation`, `p0`  
**Milestone**: Phase 1 - Foundation  
**Assignee**: Frontend Developer

**Description:**
Create a prominent copy button for the install command with primary button styling.

**Acceptance Criteria:**
- [ ] Copy button component created
- [ ] Primary button styling (gradient, glow)
- [ ] Button text: "Copy Install Command"
- [ ] Accessible (ARIA labels, keyboard support)
- [ ] Full-width on mobile (48px height)
- [ ] Positioned prominently

**Technical Details:**
- Button style: Primary button
- Command: `npx @doplan-dev/cli`
- Mobile: Full-width, 48px height

**Estimated Time**: 45 minutes

---

### Issue 6: Add Copy Functionality with Feedback

**Title**: Implement Clipboard API with Visual Feedback  
**Labels**: `hero`, `interaction`, `foundation`, `p0`  
**Milestone**: Phase 1 - Foundation  
**Assignee**: Frontend Developer

**Description:**
Implement copy-to-clipboard functionality with visual feedback (button state, success message).

**Acceptance Criteria:**
- [ ] Clipboard API integrated
- [ ] Fallback for older browsers
- [ ] Command copies successfully
- [ ] Visual feedback on click (button state change)
- [ ] Success message/toast
- [ ] Icon change (copy → checkmark)
- [ ] Error handling

**Technical Details:**
- Hook: `useCopyToClipboard` or utility
- API: Clipboard API with fallback
- Feedback: Button state, toast, icon change

**Estimated Time**: 1 hour

---

### Issue 7: Add Floating Terminal Animation

**Title**: Implement Floating Animation for Terminal  
**Labels**: `hero`, `animation`, `foundation`, `p0`  
**Milestone**: Phase 1 - Foundation  
**Assignee**: Frontend Developer

**Description:**
Add subtle floating animation to terminal component using CSS transforms.

**Acceptance Criteria:**
- [ ] Floating animation implemented
- [ ] CSS transforms (not JavaScript)
- [ ] Smooth animation (60fps)
- [ ] 10px vertical movement
- [ ] 3s duration, ease-in-out
- [ ] No performance impact
- [ ] Works on mobile

**Technical Details:**
- Animation: CSS @keyframes
- Transform: translateY
- Duration: 3s
- Easing: ease-in-out
- Movement: 10px

**Estimated Time**: 1 hour

---

### Issue 8: Add Background Gradient Effects

**Title**: Implement Background Gradient for Hero Section  
**Labels**: `hero`, `design`, `foundation`, `p0`  
**Milestone**: Phase 1 - Foundation  
**Assignee**: Frontend Developer

**Description:**
Add radial gradient background effect to hero section.

**Acceptance Criteria:**
- [ ] Radial gradient added
- [ ] Position: 50%, 30%
- [ ] Color: Cyan glow (5% opacity)
- [ ] Doesn't affect text readability
- [ ] Responsive on all screen sizes

**Technical Details:**
- Type: Radial gradient
- Position: 50% horizontal, 30% vertical
- Color: rgba(0, 217, 255, 0.05)
- Size: 50% radius

**Estimated Time**: 30 minutes

---

### Issue 9: Ensure Mobile Responsiveness

**Title**: Make Hero Section Fully Responsive  
**Labels**: `hero`, `responsive`, `foundation`, `p0`  
**Milestone**: Phase 1 - Foundation  
**Assignee**: Frontend Developer

**Description:**
Ensure hero section is fully responsive on mobile devices (375px, 480px).

**Acceptance Criteria:**
- [ ] Single column layout on mobile
- [ ] Terminal below headline
- [ ] Full-width CTA button (48px height)
- [ ] Reduced padding (64px)
- [ ] Typography scales correctly
- [ ] Touch targets 48px minimum
- [ ] No horizontal scrolling
- [ ] Tested on 375px and 480px

**Technical Details:**
- Breakpoint: 768px
- Layout: Single column
- Padding: 64px mobile
- Button: Full-width, 48px height

**Estimated Time**: 45 minutes

---

### Issue 10: Optimize for Performance

**Title**: Optimize Hero Section for <1s Load Time  
**Labels**: `hero`, `performance`, `foundation`, `p0`  
**Milestone**: Phase 1 - Foundation  
**Assignee**: Frontend Developer

**Description:**
Optimize hero section to achieve <1s load time and 98%+ Lighthouse score.

**Acceptance Criteria:**
- [ ] Load time <1 second
- [ ] LCP <2.5s
- [ ] FID <100ms
- [ ] CLS <0.1
- [ ] Lighthouse score 98%+
- [ ] Critical CSS inline
- [ ] Fonts optimized (preload, font-display: swap)
- [ ] Lazy load below-fold content

**Technical Details:**
- Critical CSS inline
- Font optimization
- Lazy loading
- CSS animations (not JS)
- Minimize bundle size

**Estimated Time**: 30 minutes

---

## Issue Summary

**Total Issues**: 10  
**Total Estimated Time**: 6-8 hours  
**Priority**: All P0 (Must Have)

---

*Generated by DoPlan CLI v1.3.4*  
*Sup-Agent: Project Orchestrator*  
*Date: 2025-12-03*

