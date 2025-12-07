import { HeaderNew } from '../components/layout/HeaderNew'
import { FooterNew } from '../components/layout/FooterNew'
import { HeroNew } from '../components/sections/HeroNew'
import { ProblemSolutionCombined } from '../components/sections/ProblemSolutionCombined'
import { WorkflowSection } from '../components/sections/WorkflowSection'
import { CommunityFeaturesSection } from '../components/sections/CommunityFeaturesSection'
import { FinalCTASection } from '../components/sections/FinalCTASection'
import { ExitIntentPopup } from '../components/conversion/ExitIntentPopup'
import { ScrollTriggers } from '../components/conversion/ScrollTriggers'
import { StructuredData } from '../components/seo/StructuredData'

export const HomePage: React.FC = () => {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen flex flex-col bg-white text-dark-text">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-google-blue focus:text-white focus:rounded-lg focus:font-bold"
        >
          Skip to main content
        </a>

        <HeaderNew />
        <ScrollTriggers />
        <ExitIntentPopup />
        
        <main id="main-content" className="flex-1">
          <HeroNew />
          <WorkflowSection />
          <ProblemSolutionCombined />
          <CommunityFeaturesSection />
          <FinalCTASection />
        </main>

        <FooterNew />
      </div>
    </>
  )
}

