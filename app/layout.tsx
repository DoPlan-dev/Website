import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DoPlan CLI - Development Infrastructure for Modern Teams",
  description: "Accelerate project delivery. Reduce setup overhead. Standardize workflows. DoPlan CLI automates project initialization, enforces best practices, and provides intelligent guidance across the entire development lifecycle.",
  keywords: ["CLI", "developer tools", "productivity", "AI agents", "project scaffolding", "development infrastructure", "team workflow", "automation"],
  authors: [{ name: "DoPlan Team" }],
  openGraph: {
    title: "DoPlan CLI - Development Infrastructure for Modern Teams",
    description: "Accelerate project delivery. Reduce setup overhead. Standardize workflows.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DoPlan CLI - Development Infrastructure for Modern Teams",
    description: "Accelerate project delivery. Reduce setup overhead. Standardize workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-domain="doplan.dev"
          src="https://plausible.io/js/script.js"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "DoPlan CLI",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "50000",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-600 focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

