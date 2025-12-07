import React from 'react'
import { Icon } from '../ui/Icon'

interface FooterProps {
  className?: string
}

export const FooterNew: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: 'Features', href: '/#features' },
      { label: 'Documentation', href: '/#docs' },
      { label: 'Changelog', href: '/#changelog' },
      { label: 'Blog', href: '/#blog' },
    ],
    community: [
      { label: 'GitHub', href: 'https://github.com/DoPlan-dev/CLI' },
      { label: 'NPM', href: 'https://www.npmjs.com/package/@doplan-dev/cli' },
      { label: 'Discord', href: '#' },
      { label: 'Twitter', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  }

  return (
    <footer className={`bg-dark-text text-white ${className}`}>
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">DoPlan CLI</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Ship projects in 5 seconds. DoPlan turns your ideas into complete projects.
              One command. 18 AI agents. Done.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/DoPlan-dev/CLI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
                aria-label="GitHub"
              >
                <Icon name="external-link" size={24} color="currentColor" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base text-gray-300 hover:text-white transition-colors duration-200 py-2 min-h-[48px] flex items-center"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Community</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-base text-gray-300 hover:text-white transition-colors duration-200 py-2 min-h-[48px] flex items-center gap-1"
                  >
                    {link.label}
                    {link.href.startsWith('http') && (
                      <Icon name="external-link" size={14} color="currentColor" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300">
            © {currentYear} DoPlan.dev. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200 py-2 min-h-[48px] flex items-center"
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

