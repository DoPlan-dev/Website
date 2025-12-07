# Conversion Optimization Features

## Overview

The website now includes several conversion optimization features designed to increase user engagement and conversions.

## Features Implemented

### 1. Exit-Intent Popup ✅

**File**: `src/components/conversion/ExitIntentPopup.tsx`

- **Trigger**: When user's mouse leaves the viewport from the top
- **Purpose**: Capture users before they leave
- **Features**:
  - Email capture form
  - Alternative: Copy installation command
  - One-time display (uses sessionStorage)
  - Analytics tracking

**Customization**:
- Update email service integration in `handleSubmit()`
- Modify copy and design in the component
- Adjust trigger sensitivity

### 2. Sticky Header CTA ✅

**File**: `src/components/conversion/StickyHeaderCTA.tsx`

- **Trigger**: After scrolling 25% down the homepage
- **Purpose**: Keep CTA visible as user scrolls
- **Features**:
  - Only shows on homepage
  - Copy command functionality
  - Responsive design
  - Appears below main header

**Customization**:
- Change scroll threshold (currently 25%)
- Modify CTA text and actions
- Adjust styling and positioning

### 3. Scroll Triggers ✅

**File**: `src/components/conversion/ScrollTriggers.tsx`

- **Triggers**:
  - 25% scroll: Highlights first testimonial
  - 50% scroll: Tracks engagement
  - 75% scroll: Tracks deep engagement
- **Purpose**: Track user engagement and provide visual feedback

**Customization**:
- Add more scroll percentages
- Add visual effects at different scroll points
- Integrate with email capture at 75% scroll

## Usage

All conversion components are automatically included in the HomePage:

```tsx
<HomePage>
  <HeaderNew />
  <StickyHeaderCTA />
  <ScrollTriggers />
  <ExitIntentPopup />
  {/* ... rest of page */}
</HomePage>
```

## Analytics Tracking

All conversion events are tracked via `trackCTAClick()`:
- `exit-intent-popup` - Popup shown
- `exit-intent-submit` - Form submitted
- `exit-intent-close` - Popup closed
- `sticky-header-cta` - CTA clicked
- `scroll-25-percent` - User scrolled 25%
- `scroll-50-percent` - User scrolled 50%
- `scroll-75-percent` - User scrolled 75%

## Customization Guide

### Exit-Intent Popup

**Change Email Service**:
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  // Add your email service integration
  await fetch('/api/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email })
  })
}
```

**Modify Display Logic**:
```tsx
// Show popup after 30 seconds on page
useEffect(() => {
  const timer = setTimeout(() => {
    setIsVisible(true)
  }, 30000)
  return () => clearTimeout(timer)
}, [])
```

### Sticky Header CTA

**Change Scroll Threshold**:
```tsx
setIsVisible(scrollPercent > 50) // Show after 50% scroll
```

**Add Different Actions**:
```tsx
const handleAction = () => {
  // Open demo video
  // Navigate to features
  // Show pricing modal
}
```

### Scroll Triggers

**Add More Triggers**:
```tsx
// 90% scroll - Show final CTA
if (scrollPercent >= 90 && !scrollPercent90) {
  scrollPercent90 = true
  // Show newsletter signup banner
}
```

**Add Visual Effects**:
```tsx
// Fade in section
section.style.opacity = '1'
section.style.transform = 'translateY(0)'
```

## Best Practices

1. **Don't Overwhelm**: Use conversion features sparingly
2. **Test Timing**: A/B test when to show popups
3. **Mobile Optimization**: Ensure all features work on mobile
4. **Analytics**: Track all conversion events
5. **User Experience**: Don't block content or annoy users

## A/B Testing Ideas

1. **Exit-Intent Timing**: Show immediately vs. after 30 seconds
2. **Sticky CTA Position**: Top vs. bottom of viewport
3. **Scroll Threshold**: 25% vs. 50% vs. 75%
4. **Popup Design**: Modal vs. slide-in banner
5. **CTA Copy**: "Try Now" vs. "Get Started Free"

## Mobile Considerations

- Exit-intent doesn't work well on mobile (no mouse events)
- Consider time-based triggers instead
- Sticky header works well on mobile
- Ensure touch targets are at least 44x44px

## Next Steps

- [ ] Integrate email service for exit-intent popup
- [ ] A/B test conversion features
- [ ] Add more scroll trigger effects
- [ ] Implement newsletter signup at 75% scroll
- [ ] Add conversion rate tracking dashboard

