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

const DesignSystem = lazy(() => 
  import('./pages/DesignSystem').then(module => ({ default: module.DesignSystem }))
)

const SectionBuilder = lazy(() => 
  import('./components/design-system/builders/SectionBuilder').then(module => ({ default: module.SectionBuilder }))
)

const BuilderHub = lazy(() => 
  import('./components/design-system/builders/BuilderHub').then(module => ({ default: module.BuilderHub }))
)

const PageBuilder = lazy(() => 
  import('./components/design-system/builders/PageBuilder').then(module => ({ default: module.PageBuilder }))
)

const HeaderBuilder = lazy(() => 
  import('./components/design-system/builders/HeaderBuilder').then(module => ({ default: module.HeaderBuilder }))
)

const FooterBuilder = lazy(() => 
  import('./components/design-system/builders/FooterBuilder').then(module => ({ default: module.FooterBuilder }))
)

const MenuBuilder = lazy(() => 
  import('./components/design-system/builders/MenuBuilder').then(module => ({ default: module.MenuBuilder }))
)

const FormBuilder = lazy(() => 
  import('./components/design-system/builders/FormBuilder').then(module => ({ default: module.FormBuilder }))
)

const UnifiedBuilder = lazy(() => 
  import('./components/design-system/builders/unified/UnifiedBuilder').then(module => ({ default: module.UnifiedBuilder }))
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
  {
    path: '/design-system',
    element: (
      <LayoutWrapper>
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
          <DesignSystem />
        </Suspense>
      </LayoutWrapper>
    ),
  },
  {
    path: '/design-system/builder',
    element: (
      <Suspense fallback={<div className="min-h-screen bg-[#f8fafc]" />}>
        <BuilderHub />
      </Suspense>
    ),
  },
  {
    path: '/design-system/builder/section',
    element: (
      <Suspense fallback={<div className="min-h-screen bg-[#f8fafc]" />}>
        <SectionBuilder />
      </Suspense>
    ),
  },
  {
    path: '/design-system/builder/page',
    element: (
      <Suspense fallback={<div className="min-h-screen bg-[#f8fafc]" />}>
        <PageBuilder />
      </Suspense>
    ),
  },
  {
    path: '/design-system/builder/header',
    element: (
      <Suspense fallback={<div className="min-h-screen bg-[#f8fafc]" />}>
        <HeaderBuilder />
      </Suspense>
    ),
  },
  {
    path: '/design-system/builder/footer',
    element: (
      <Suspense fallback={<div className="min-h-screen bg-[#f8fafc]" />}>
        <FooterBuilder />
      </Suspense>
    ),
  },
      {
        path: '/design-system/builder/menu',
        element: (
          <Suspense fallback={<div className="min-h-screen bg-[#f8fafc]" />}>
            <MenuBuilder />
          </Suspense>
        ),
      },
      {
        path: '/design-system/builder/form',
        element: (
          <Suspense fallback={<div className="min-h-screen bg-[#f8fafc]" />}>
            <FormBuilder />
          </Suspense>
        ),
      },
      {
        path: '/design-system/builder/unified',
        element: (
          <Suspense fallback={<div className="min-h-screen bg-[#f8fafc]" />}>
            <UnifiedBuilder />
          </Suspense>
        ),
      },
])
