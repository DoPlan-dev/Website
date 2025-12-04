import React from 'react'
import { Button } from '../ui/Button'
import { trackCTAClick } from '../../lib/analytics'

export const CTASection: React.FC = () => {
  const handleGetStarted = () => {
    trackCTAClick('get-started', 'cta-section')
    window.location.href = '#home'
  }

  const handleViewDocs = () => {
    trackCTAClick('view-docs', 'cta-section')
    window.location.href = '#docs'
  }

  return (
    <section className="py-xxl md:py-xxxl">
      <div className="container mx-auto px-m md:px-xl">
        <div className="bg-gradient-primary rounded-large p-xl md:p-xxl text-center">
          <h2 className="text-h2 md:text-h1 mb-m text-light">
            Ready to Build Production Apps?
          </h2>
          <p className="text-body md:text-h3 text-light/90 mb-xl max-w-2xl mx-auto">
            Join 50,000+ developers using DoPlan CLI to build faster, learn better, and ship production-ready apps. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-m justify-center items-center">
            <Button
              variant="secondary"
              onClick={handleGetStarted}
              className="w-full sm:w-auto sm:min-w-[200px] bg-light text-void hover:bg-light/90"
            >
              Get Started Free →
            </Button>
            <Button
              variant="secondary"
              onClick={handleViewDocs}
              className="w-full sm:w-auto sm:min-w-[200px] border-light text-light hover:bg-light/10"
            >
              Read the Docs
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

