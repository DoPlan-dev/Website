# Tasks: Hero Section
## Feature 04-Hero-Section

**Feature ID**: 04-Hero-Section  
**Phase**: 01-Foundation  
**Status**: Pending  
**Estimated Time**: 6-8 hours

---

## Task Breakdown

### 1. Design and Implement Hero Section Layout
**Time**: 1 hour  
**Priority**: P0

- [ ] Create `src/components/sections/Hero.tsx` component
- [ ] Design 50-50 split layout for desktop (left content, right visual)
- [ ] Design single column layout for mobile
- [ ] Set hero section height: 720px (desktop), auto (mobile)
- [ ] Add background: Deep Void + radial Cyan glow
- [ ] Implement responsive grid layout
- [ ] Test layout on different screen sizes

**Acceptance:**
- Hero section renders correctly
- Layout responsive (50-50 desktop, single column mobile)
- Background gradient visible
- No layout shifts

---

### 2. Create Headline and Subheadline Components
**Time**: 45 minutes  
**Priority**: P0

- [ ] Create headline component with hero typography (56px, Bold)
- [ ] Create subheadline component (24px, Regular)
- [ ] Add compelling copy:
  - [ ] Headline: "Code at the Speed of Thought" (or similar)
  - [ ] Subheadline: "Finish projects before your coffee gets cold" (or similar)
- [ ] Style with design system colors (Light text on Void)
- [ ] Ensure proper typography hierarchy
- [ ] Test readability and contrast

**Acceptance:**
- Headline displays correctly with hero typography
- Subheadline displays correctly
- Text is readable (16:1 contrast ratio)
- Typography follows design system

---

### 3. Implement 5 Commands Display
**Time**: 1 hour  
**Priority**: P0

- [ ] Create commands list component
- [ ] Display 5 commands: /hey, /do, /plan, /dev, /sys
- [ ] Style commands with monospace font (JetBrains Mono)
- [ ] Add visual indicators (icons or bullets)
- [ ] Ensure commands are clearly visible
- [ ] Test on mobile and desktop

**Acceptance:**
- All 5 commands displayed clearly
- Commands styled with monospace font
- Commands visible and readable
- Mobile responsive

---

### 4. Create Terminal Visual Component
**Time**: 1.5 hours  
**Priority**: P0

- [ ] Create `src/components/terminal/TerminalWindow.tsx` component
- [ ] Design terminal window container:
  - [ ] Border-radius: 12px
  - [ ] Background: Darker Void (#050A1A)
  - [ ] Border: 1px solid Cyan (20% opacity)
  - [ ] Shadow: Elevation 3 + Glow
- [ ] Add terminal header bar:
  - [ ] Height: 40px
  - [ ] Window controls (red, yellow, green circles)
  - [ ] "Terminal" label
- [ ] Add terminal content area:
  - [ ] Font: JetBrains Mono, 13px
  - [ ] Text color: Cyan
  - [ ] Padding: 24px
  - [ ] Show command output example
- [ ] Test terminal visual renders correctly

**Acceptance:**
- Terminal window component created
- Terminal visual matches design system
- Window controls visible
- Content area displays correctly

---

### 5. Implement Copy-to-Clipboard Button
**Time**: 45 minutes  
**Priority**: P0

- [ ] Create copy button component
- [ ] Style button with primary button styles (gradient, glow)
- [ ] Add button text: "Copy Install Command" or similar
- [ ] Position button prominently in hero section
- [ ] Ensure button is accessible (ARIA labels)
- [ ] Test button visibility and styling

**Acceptance:**
- Copy button created and styled
- Button follows primary button design
- Button is accessible
- Button positioned correctly

---

### 6. Add Command Copy Functionality with Feedback
**Time**: 1 hour  
**Priority**: P0

- [ ] Implement clipboard API integration
- [ ] Create `useCopyToClipboard` hook (or use existing)
- [ ] Add command text: `npx @doplan-dev/cli`
- [ ] Implement copy functionality:
  - [ ] Use Clipboard API
  - [ ] Add fallback for older browsers
  - [ ] Handle errors gracefully
- [ ] Add visual feedback:
  - [ ] Button state change on click
  - [ ] Success message/toast
  - [ ] Icon change (copy → checkmark)
- [ ] Test copy functionality on different browsers

**Acceptance:**
- Command copies to clipboard successfully
- Visual feedback provided
- Works on modern browsers
- Fallback works on older browsers
- Error handling implemented

---

### 7. Implement Floating Terminal Animation
**Time**: 1 hour  
**Priority**: P0

- [ ] Add floating animation to terminal component
- [ ] Use CSS transforms (translateY) for performance
- [ ] Implement subtle float effect (2-3px movement)
- [ ] Add 3D perspective effect (optional)
- [ ] Use CSS animations (not JavaScript for performance)
- [ ] Ensure animation doesn't impact performance
- [ ] Test on low-end devices

**Acceptance:**
- Terminal has floating animation
- Animation is smooth (60fps)
- No performance impact
- Animation works on mobile

---

### 8. Add Background Gradient Effects
**Time**: 30 minutes  
**Priority**: P0

- [ ] Add radial gradient background
- [ ] Position: 50%, 30% (center-right)
- [ ] Color: Cyan glow (5% opacity)
- [ ] Ensure gradient doesn't interfere with text readability
- [ ] Test gradient on different screen sizes

**Acceptance:**
- Background gradient visible
- Gradient doesn't affect readability
- Gradient responsive

---

### 9. Ensure Mobile Responsiveness
**Time**: 45 minutes  
**Priority**: P0

- [ ] Test hero section on mobile (375px, 480px)
- [ ] Adjust layout for mobile:
  - [ ] Single column layout
  - [ ] Terminal below headline
  - [ ] Full-width CTA button (48px height)
  - [ ] Reduced padding (64px top/bottom)
- [ ] Test typography scaling
- [ ] Ensure touch targets are 48px minimum
- [ ] Fix any responsive issues

**Acceptance:**
- Hero section responsive on mobile
- Layout works on all mobile sizes
- Touch targets meet requirements
- No horizontal scrolling

---

### 10. Optimize for <1s Load Time
**Time**: 30 minutes  
**Priority**: P0

- [ ] Optimize images/assets (if any)
- [ ] Lazy load terminal component (if below fold)
- [ ] Minimize CSS for hero section
- [ ] Use critical CSS for above-fold content
- [ ] Test load time with Lighthouse
- [ ] Ensure LCP <2.5s
- [ ] Fix any performance issues

**Acceptance:**
- Load time <1 second
- Lighthouse score 98%+
- LCP <2.5s
- No performance warnings

---

## Task Summary

**Total Tasks**: 10  
**Total Estimated Time**: 6-8 hours  
**Dependencies**: 
- Feature 1 (Project Setup) complete
- Feature 2 (Design System) complete
- Feature 3 (Core Layout) complete (for header/navigation)

---

## Next Steps

After completing this feature:
1. Move to Feature 5: Five Commands Section
2. Test hero section with real content
3. Verify conversion metrics

---

*Generated by DoPlan CLI v1.3.4*  
*Sup-Agent: Project Orchestrator*  
*Date: 2025-12-03*

