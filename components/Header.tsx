"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/faq", label: "FAQ" },
    { href: "/discord", label: "Discord" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-bold text-dark-900 hover:text-accent-600 transition-colors"
            aria-label="DoPlan CLI Home"
          >
            DoPlan
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-dark-700 hover:text-accent-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                const hero = document.getElementById("hero");
                hero?.scrollIntoView({ behavior: "smooth" });
              }}
              size="sm"
              className="bg-accent-600 hover:bg-accent-700 text-white"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-dark-700 hover:text-accent-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-dark-700 hover:text-accent-600 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                const hero = document.getElementById("hero");
                hero?.scrollIntoView({ behavior: "smooth" });
              }}
              size="sm"
              className="w-fit bg-accent-600 hover:bg-accent-700 text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

