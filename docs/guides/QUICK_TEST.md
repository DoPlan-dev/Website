# 🧪 Component Playground - Quick Test Guide

## 🚀 Start Testing

### Step 1: Start Dev Server
```bash
npm run dev
```

Wait for: `Local: http://localhost:5173/` (or similar)

### Step 2: Navigate to Playground
1. Open browser to: `http://localhost:5173/design-system`
2. In left sidebar, click: **"Component Playground"** (10th item, Play icon)

---

## ✅ Quick Test Flow (5 minutes)

### Test 1: Browse Components (30 seconds)
- ✅ Should see 6 component cards in left panel
- ✅ Button, Card, Badge, Input, Accordion, Terminal

### Test 2: Search (30 seconds)
- ✅ Type "button" → Should filter to Button component
- ✅ Type "card" → Should filter to Card component
- ✅ Clear search → Should show all components

### Test 3: Filter by Category (30 seconds)
- ✅ Click "Form" → Shows Button, Input
- ✅ Click "Layout" → Shows Card, Accordion
- ✅ Click "All Components" → Shows all 6

### Test 4: Select Component (1 minute)
- ✅ Click "Button" component card
- ✅ Right panel should show:
  - Component header with icon
  - Tabs: Preview, Props, Accessibility
  - Example buttons (Primary, Outline, Icon, Disabled)

### Test 5: Preview Tab (1 minute)
- ✅ Should show "Primary Button" example by default
- ✅ Click "Outline" button → Preview updates
- ✅ Click "Icon" button → Shows button with rocket icon
- ✅ Code snippet displays below preview
- ✅ Click "Copy" button → Code copied to clipboard

### Test 6: Props Tab (30 seconds)
- ✅ Click "Props" tab
- ✅ Should show 4 props:
  - size (Type: "1" | "2" | "3" | "4", Default: "3")
  - variant (Type: "solid" | "outline" | ..., Default: "solid")
  - disabled (Type: boolean, Default: false)
  - children (Type: React.ReactNode, Required: true)

### Test 7: Accessibility Tab (30 seconds)
- ✅ Click "Accessibility" tab
- ✅ Should show:
  - Keyboard Navigation: Yes ✅
  - Screen Reader info
  - Color Contrast info
  - Best practices tips

### Test 8: Test Other Components (1 minute)
- ✅ Click "Card" → Check 2 examples
- ✅ Click "Badge" → Check status badges
- ✅ Click "Input" → Try typing in preview
- ✅ Click "Accordion" → Click to expand/collapse
- ✅ Click "Terminal" → Check terminal display

---

## 🎯 Expected Results

### All Components Should:
- ✅ Display correctly in browser
- ✅ Have correct icons
- ✅ Show accurate metadata
- ✅ Load in viewer when clicked
- ✅ Render preview correctly
- ✅ Display props documentation
- ✅ Show accessibility info

### All Features Should:
- ✅ Search works
- ✅ Filters work
- ✅ Tabs switch smoothly
- ✅ Code copy works
- ✅ Examples switch correctly
- ✅ No console errors

---

## 🐛 If Something Doesn't Work

1. **Check Browser Console** (F12 → Console tab)
   - Look for errors
   - Share error messages

2. **Check Network Tab**
   - Ensure all files load
   - Check for 404 errors

3. **Refresh Page**
   - Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

4. **Check Build**
   ```bash
   npm run build
   ```
   - Should complete without errors

---

## 📝 Test Results Template

```
Date: __________
Browser: __________

✅ Test 1: Browse Components - PASS / FAIL
✅ Test 2: Search - PASS / FAIL
✅ Test 3: Filter - PASS / FAIL
✅ Test 4: Select Component - PASS / FAIL
✅ Test 5: Preview Tab - PASS / FAIL
✅ Test 6: Props Tab - PASS / FAIL
✅ Test 7: Accessibility Tab - PASS / FAIL
✅ Test 8: Other Components - PASS / FAIL

Issues Found:
1. _______________________
2. _______________________

Notes:
_______________________
```

---

## 🎉 Success Indicators

- ✅ All 6 components visible and clickable
- ✅ Search filters correctly
- ✅ Category filters work
- ✅ Component viewer loads
- ✅ All examples render
- ✅ Code snippets display
- ✅ Props documentation accurate
- ✅ Accessibility info shows
- ✅ No errors in console

---

**Ready to test! Start the dev server and navigate to the playground.** 🚀

