# Component Playground Testing Guide

## 🧪 Quick Test Checklist

### Test 1: Access Playground ✅
1. Start dev server: `npm run dev`
2. Navigate to: `http://localhost:3000/design-system`
3. Click "Component Playground" in left sidebar

**Expected**: Playground opens with component browser on left, empty viewer on right

---

### Test 2: Component Browser ✅

**A. Search Functionality**
1. Type "button" in search box
2. Type "card" in search box
3. Type "xyz" (non-existent component)

**Expected**:
- ✅ Results filter as you type
- ✅ Shows matching components
- ✅ Shows "No components found" for invalid search

**B. Category Filtering**
1. Click "All Components" (should show all 6)
2. Click "Form" (should show Button, Input)
3. Click "Layout" (should show Card, Accordion)
4. Click "Display" (should show Badge, Terminal)

**Expected**:
- ✅ Filters work correctly
- ✅ Component count updates
- ✅ Only matching components show

**C. Component Cards**
1. Look at component cards
2. Check for icons, names, descriptions
3. Check metadata (props count, examples count)

**Expected**:
- ✅ All components display correctly
- ✅ Icons show properly
- ✅ Metadata is accurate

---

### Test 3: Select and View Component ✅

**A. Button Component**
1. Click "Button" component card
2. Check right panel loads

**Expected**:
- ✅ Component viewer opens
- ✅ Shows component header with icon and name
- ✅ Shows tabs: Preview, Props, Accessibility

**B. Preview Tab**
1. Should be on "Preview" tab by default
2. Check example buttons (Primary, Outline, Icon, Disabled)
3. Click different example buttons
4. Verify preview updates
5. Check code snippet displays
6. Click "Copy" button on code block

**Expected**:
- ✅ Default example shows (Primary Button)
- ✅ All 4 example buttons visible
- ✅ Clicking switches examples
- ✅ Preview renders correctly
- ✅ Code snippet matches preview
- ✅ Copy button works

**C. Props Tab**
1. Click "Props" tab
2. Check all props listed
3. Verify prop types, required status, defaults

**Expected**:
- ✅ All 4 props shown (size, variant, disabled, children)
- ✅ Types display correctly
- ✅ Required badge on "children"
- ✅ Default values shown

**D. Accessibility Tab**
1. Click "Accessibility" tab
2. Check keyboard navigation status
3. Check screen reader info
4. Check contrast information

**Expected**:
- ✅ Keyboard navigation: Yes
- ✅ Screen reader info displayed
- ✅ Contrast information shown
- ✅ Best practices tips visible

---

### Test 4: Other Components ✅

**A. Card Component**
1. Click "Card" component
2. Check 2 examples available
3. Switch between examples
4. Check props (3 props: className, style, children)

**Expected**:
- ✅ Card component loads
- ✅ 2 examples work
- ✅ Preview renders correctly

**B. Badge Component**
1. Click "Badge" component
2. Check status badges example
3. Verify multiple badges render

**Expected**:
- ✅ Badge component loads
- ✅ Status badges show correctly
- ✅ Colors render properly

**C. Input Component**
1. Click "Input" component
2. Check text input example
3. Check textarea example
4. Try typing in preview (should work)

**Expected**:
- ✅ Input fields render
- ✅ Textarea renders
- ✅ Can interact with inputs

**D. Accordion Component**
1. Click "Accordion" component
2. Click accordion item to expand/collapse

**Expected**:
- ✅ Accordion renders
- ✅ Expand/collapse works
- ✅ Animation smooth

**E. Terminal Component**
1. Click "Terminal" component
2. Check terminal preview

**Expected**:
- ✅ Terminal renders with command
- ✅ Output lines display
- ✅ Styling matches design system

---

### Test 5: Search + Filter Combination ✅

1. Select "Form" category
2. Type "button" in search
3. Clear search
4. Select "Display" category
5. Type "badge" in search

**Expected**:
- ✅ Both filters work together
- ✅ Results update correctly
- ✅ Clearing search resets properly

---

### Test 6: Empty States ✅

1. Type invalid search (e.g., "zzzzzz")
2. Select category with no matches

**Expected**:
- ✅ Shows "No components found" message
- ✅ Icon and helpful text displayed

---

### Test 7: Responsive Layout ✅

1. Resize browser window
2. Check mobile/tablet view
3. Verify layout adapts

**Expected**:
- ✅ Layout stacks on mobile
- ✅ Components remain accessible
- ✅ No horizontal scroll

---

### Test 8: Code Copy Functionality ✅

1. Select any component
2. Go to Preview tab
3. Click "Copy" button on code block
4. Paste in text editor

**Expected**:
- ✅ Code copied to clipboard
- ✅ Paste shows correct code
- ✅ "Copied!" feedback shows

---

### Test 9: Navigation ✅

1. From playground, click other Design System sections
2. Come back to playground
3. Check if selection persists (should reset)

**Expected**:
- ✅ Navigation works smoothly
- ✅ Selection resets (expected behavior)
- ✅ No errors

---

### Test 10: Component Count ✅

1. Check footer count in browser
2. Count components manually

**Expected**:
- ✅ Shows "6 components available"
- ✅ Count updates with filters

---

## 🐛 Known Issues to Watch For

- [ ] Components not rendering in preview
- [ ] Search not working
- [ ] Filters not applying correctly
- [ ] Code copy not working
- [ ] Tabs not switching
- [ ] Layout breaking on mobile
- [ ] Icons not displaying
- [ ] Performance issues with many components

---

## ✅ Success Criteria

All tests should pass:
- ✅ All 6 components load and display
- ✅ Search and filters work correctly
- ✅ Preview renders all examples
- ✅ Props documentation accurate
- ✅ Accessibility info displays
- ✅ Code copy works
- ✅ Navigation smooth
- ✅ No console errors
- ✅ Responsive layout works

---

## 🚀 Quick Test Command

```bash
# Start dev server
npm run dev

# Then navigate to:
# http://localhost:3000/design-system
# Click "Component Playground" in sidebar
```

---

**Happy Testing!** 🎉

