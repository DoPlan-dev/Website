import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { HomePage } from './pages/HomePage'
import { FeaturesNew } from './pages/FeaturesNew'
import { Changelog } from './pages/Changelog'
import { LayoutWrapper } from './components/layout/LayoutWrapper'

// Lazy load pages
const Documentation = lazy(() => 
  import('./pages/Documentation').then(module => ({ default: module.Documentation }))
)

const HelpPage = lazy(() => 
  import('./pages/HelpPage').then(module => ({ default: module.HelpPage }))
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/features',
    element: (
      <LayoutWrapper>
        <FeaturesNew />
      </LayoutWrapper>
    ),
  },
  {
    path: '/docs',
    element: (
      <LayoutWrapper>
        <Suspense fallback={<div className="min-h-screen bg-light-bg" />}>
          <Documentation />
        </Suspense>
      </LayoutWrapper>
    ),
  },
  {
    path: '/changelog',
    element: (
      <LayoutWrapper>
        <Changelog />
      </LayoutWrapper>
    ),
  },
  {
    path: '/blog',
    element: (
      <LayoutWrapper>
        <div className="min-h-screen bg-light-bg text-dark-text p-8">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p>Coming Soon</p>
        </div>
      </LayoutWrapper>
    ),
  },
  {
    path: '/help',
    element: (
      <LayoutWrapper>
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
          <HelpPage />
        </Suspense>
      </LayoutWrapper>
    ),
  },
])
