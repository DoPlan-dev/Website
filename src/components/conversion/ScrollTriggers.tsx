import { useEffect } from 'react'
import { trackCTAClick } from '../../lib/analytics'

export const ScrollTriggers: React.FC = () => {
  useEffect(() => {
    let scrollPercent25 = false
    let scrollPercent50 = false
    let scrollPercent75 = false

    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

      // 25% scroll - Highlight first testimonial (tracked via analytics)
      if (scrollPercent >= 25 && !scrollPercent25) {
        scrollPercent25 = true
        trackCTAClick('scroll-25-percent', 'engagement')
        
        // Highlight first testimonial (visual feedback)
        const firstTestimonial = document.querySelector('[data-testimonial="0"]')
        if (firstTestimonial) {
          firstTestimonial.classList.add('ring-2', 'ring-google-blue', 'ring-offset-2')
          setTimeout(() => {
            firstTestimonial.classList.remove('ring-2', 'ring-google-blue', 'ring-offset-2')
          }, 3000)
        }
      }

      // 50% scroll - Track engagement
      if (scrollPercent >= 50 && !scrollPercent50) {
        scrollPercent50 = true
        trackCTAClick('scroll-50-percent', 'engagement')
      }

      // 75% scroll - Show email signup (you can add a modal/banner here)
      if (scrollPercent >= 75 && !scrollPercent75) {
        scrollPercent75 = true
        trackCTAClick('scroll-75-percent', 'engagement')
        
        // You could trigger a newsletter signup banner here
        // For now, just track the event
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return null // This component doesn't render anything visible
}

