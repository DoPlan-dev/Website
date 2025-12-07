import { useEffect, lazy, Suspense } from 'react'
import { HeaderNew } from './components/layout/HeaderNew'
import { HeroNew } from './components/sections/HeroNew'
import { ProblemSection } from './components/sections/ProblemSection'
import { SolutionSection } from './components/sections/SolutionSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { SocialProofSection } from './components/sections/SocialProofSection'
import { FAQSectionNew } from './components/sections/FAQSectionNew'
import { FinalCTASection } from './components/sections/FinalCTASection'
import { FooterNew } from './components/layout/FooterNew'
import { StructuredData } from './components/seo/StructuredData'
import { trackPageView } from './lib/analytics'

// Lazy load below-fold content
const Features = lazy(() => import('./pages/Features').then(module => ({ default: module.Features })))
const Documentation = lazy(() => import('./pages/Documentation').then(module => ({ default: module.Documentation })))

function App() {
  useEffect(() => {
    trackPageView('home')
  }, [])

  return (
    <>
      <StructuredData />
      <div className="min-h-screen flex flex-col bg-light-bg text-dark-text">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-google-blue focus:text-white focus:rounded-lg focus:font-bold"
        >
          Skip to main content
        </a>

        <HeaderNew />
        
        <main id="main-content" className="flex-1">
          <HeroNew />
          <ProblemSection />
          <SolutionSection />
          <ExperienceSection />
          <SocialProofSection />
          <FAQSectionNew />
          <FinalCTASection />
          
          <Suspense fallback={<div className="min-h-screen" />}>
            <Features />
          </Suspense>
          
          <Suspense fallback={<div className="min-h-screen" />}>
            <Documentation />
          </Suspense>
        </main>

        <FooterNew />
      </div>
    </>
  )
}

export default App
