import React from 'react'

interface FooterProps {
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Documentation', href: '#docs' },
      { label: 'GitHub', href: 'https://github.com/DoPlan-dev/Website' },
    ],
    community: [
      { label: 'Discord', href: '#' },
      { label: 'Twitter', href: '#' },
      { label: 'Blog', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  }

  return (
    <footer className={`bg-void border-t border-cyan/20 ${className}`}>
      <div className="container mx-auto px-m md:px-xl py-xl md:py-xxl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-xxl mb-xl">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-h4 mb-m">DoPlan.dev</h3>
            <p className="text-body text-mid mb-m">
              Build Production Apps Without the Burnout. Personalized AI assistance with 18 specialized agents.
            </p>
            <div className="flex gap-m">
              <a
                href="https://github.com/DoPlan-dev/Website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mid hover:text-cyan transition-standard p-s min-h-[48px] min-w-[48px] flex items-center justify-center"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-small font-semibold text-light mb-m">Product</h4>
            <ul className="flex flex-col gap-s">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
              <a
                href={link.href}
                className="text-body text-mid hover:text-cyan transition-standard py-s min-h-[48px] flex items-center"
              >
                {link.label}
              </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-small font-semibold text-light mb-m">Community</h4>
            <ul className="flex flex-col gap-s">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
              <a
                href={link.href}
                className="text-body text-mid hover:text-cyan transition-standard py-s min-h-[48px] flex items-center"
              >
                {link.label}
              </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-xl border-t border-cyan/20 flex flex-col md:flex-row justify-between items-center gap-m">
          <p className="text-small text-mid">
            © {currentYear} DoPlan.dev. All rights reserved.
          </p>
          <div className="flex gap-l">
            {footerLinks.legal.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-small text-mid hover:text-cyan transition-standard py-s min-h-[48px] flex items-center"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

