import { useEffect, lazy, Suspense } from 'react'
import { Layout } from './components/layout/Layout'
import { Hero } from './components/sections/Hero'
import { CommandsSection } from './components/sections/CommandsSection'
import { CTASection } from './components/sections/CTASection'
import { StructuredData } from './components/seo/StructuredData'
import { trackPageView } from './lib/analytics'

// Lazy load below-fold content
const Features = lazy(() => import('./pages/Features').then(module => ({ default: module.Features })))
const Documentation = lazy(() => import('./pages/Documentation').then(module => ({ default: module.Documentation })))
const FAQSection = lazy(() => import('./components/sections/FAQSection').then(module => ({ default: module.FAQSection })))

function App() {
  useEffect(() => {
    trackPageView('home')
  }, [])

  return (
    <>
      <StructuredData />
      <Layout>
        <Hero />
        <CommandsSection />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Features />
        </Suspense>
        <CTASection />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Documentation />
        </Suspense>
        <Suspense fallback={null}>
          <FAQSection />
        </Suspense>
      </Layout>
    </>
  )
}

export default App

