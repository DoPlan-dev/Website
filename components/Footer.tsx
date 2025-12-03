import Link from "next/link";

export function Footer() {
  const footerLinks = {
    product: [
      { href: "/features", label: "Features" },
      { href: "/faq", label: "FAQ" },
      { href: "#", label: "Docs" },
    ],
    community: [
      { href: "/discord", label: "Discord" },
      { href: "#", label: "GitHub" },
      { href: "#", label: "Twitter" },
    ],
    legal: [
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
    ],
  };

  return (
    <footer className="bg-dark-900 text-light-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">DoPlan</h3>
            <p className="text-light-400 max-w-md">
              Your Personal Command Center for Development. One command. Five sacred words. Infinite possibilities.
            </p>
            <div className="mt-4">
              <p className="text-sm text-light-500">
                GitHub Stars: <span className="text-white font-semibold">15,000+</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-light-500">
            © {new Date().getFullYear()} DoPlan. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-light-500 hover:text-accent-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

