# Changelog Page Setup & GitHub Integration

## Overview

The Changelog page automatically fetches and displays GitHub releases from your repository. It's designed to update automatically whenever you create a new release on GitHub.

## How It Works

### 1. GitHub API Integration

The changelog fetches data from GitHub's Releases API:
- **Endpoint**: `https://api.github.com/repos/{owner}/{repo}/releases`
- **Auto-updates**: New releases appear automatically (no rebuild needed)
- **Caching**: Consider implementing client-side caching for better performance

### 2. Configuration

Update the repository configuration in `src/lib/github.ts`:

```typescript
const REPO_OWNER = import.meta.env.VITE_GITHUB_REPO_OWNER || 'DoPlan-dev'
const REPO_NAME = import.meta.env.VITE_GITHUB_REPO_NAME || 'cli'
```

Or set environment variables in `.env`:
```env
VITE_GITHUB_REPO_OWNER=DoPlan-dev
VITE_GITHUB_REPO_NAME=cli
```

### 3. Release Format

For best results, format your GitHub releases as follows:

**Recommended Release Body Format:**

```markdown
## Features
- ✨ New feature: Achievement notifications
- 🎉 Major: Team collaboration support

## Fixes
- 🐛 Fixed issue with command parsing
- 🔧 Resolved memory leak in agent system

## Performance
- ⚡ Optimized project creation time by 40%
- 🚀 Improved Git workflow speed

## Security
- 🔒 Fixed authentication vulnerability
- 🛡️ Enhanced data encryption
```

### 4. Entry Types

The system automatically categorizes entries:
- **Feature** - New features, enhancements
- **Fix** - Bug fixes, patches
- **Performance** - Speed improvements, optimizations
- **Security** - Security updates, vulnerabilities

### 5. Features

- **Filter by type**: All, Features, Fixes, Performance, Security
- **Date range**: All Time, This Month, Last 3 Months, This Year
- **Search**: Search through all changelog entries
- **Auto-parsing**: Automatically extracts structured data from release notes
- **Responsive**: Works on all screen sizes

## Customization

### Update Repository

Edit `src/lib/github.ts`:
```typescript
const REPO_OWNER = 'YourOrg'
const REPO_NAME = 'your-repo'
```

### Change Colors

Update colors in `src/pages/Changelog.tsx`:
- Features: `#34A853` (Green)
- Fixes: `#EA4335` (Red)
- Performance: `#FBBC04` (Yellow)
- Security: `#4285F4` (Blue)

### Add Custom Icons

All icons use SVG Repo icons through the `Icon` component. Icons are defined in `src/components/ui/Icon.tsx`.

## GitHub Actions Integration (Optional)

You can set up a GitHub Action to automatically update the changelog on releases:

```yaml
name: Update Changelog

on:
  release:
    types: [published]

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - name: Notify deployment
        run: |
          # Your deployment notification logic
          echo "New release published: ${{ github.event.release.tag_name }}"
```

## Testing

1. Create a test release on GitHub
2. Visit `/changelog` page
3. Verify the release appears
4. Test filters and search functionality

## Troubleshooting

### Releases Not Appearing

1. **Check repository configuration**: Verify `REPO_OWNER` and `REPO_NAME`
2. **Check GitHub API limits**: Free tier allows 60 requests/hour
3. **Check release visibility**: Make sure releases are public (not drafts)
4. **Check browser console**: Look for API errors

### Parsing Issues

If entries aren't being parsed correctly:
1. Check release body format matches recommended format
2. Update parsing logic in `parseReleaseBody()` function
3. Check browser console for parsing errors

## Performance Tips

1. **Implement caching**: Cache API responses (e.g., 5 minutes)
2. **Lazy load**: Only fetch releases when changelog page is visited
3. **Pagination**: For many releases, implement pagination
4. **Rate limiting**: Respect GitHub API rate limits

## Next Steps

- [ ] Set up GitHub repository configuration
- [ ] Create first formatted release
- [ ] Test changelog page
- [ ] Implement caching (optional)
- [ ] Set up GitHub Actions (optional)

