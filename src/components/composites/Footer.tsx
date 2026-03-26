import type { JSX } from 'react';

import Image from 'next/image';

import Link from '@/components/composites/Link';
import { FOOTER_NAV_LINKS, type NavLink } from '@/constants/navlinks';

/**
 * Footer component for the Vegan Ipsum website.
 * Displays navigation links and copyright information.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
export default function Footer(): JSX.Element {
  return (
    <footer className="bg-primary-solid text-primary-foreground py-6 pt-12" aria-label="Footer">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="space-y-6 text-xs leading-relaxed font-medium">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Link href="/" className="text-xl font-black" hoverEffect="none">
              <Image src="/logo-white.svg" alt="Vegan Ipsum Logo" width={213} height={32} className="h-auto w-45" />
              <span className="sr-only">Vegan Ipsum</span>
            </Link>
            <ul className="flex flex-wrap items-center justify-center gap-4" aria-label="Footer navigation links">
              {FOOTER_NAV_LINKS.map((link: NavLink) => (
                <li key={link.href}>
                  <Link href={link.href} className="after:-bottom-1" hoverEffect="border">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <p className="border-border/30 border-t pt-6 text-center md:text-left">
            &copy; 2025-{new Date().getFullYear()} Vegan Ipsum. Crafted with compassion by{' '}
            <Link
              href="https://instagram.com/vegan.vijay"
              aria-label="Visit vijay hardaha's instagram profile"
              className="after:-bottom-1"
              hoverEffect="border"
            >
              Vijay Hardaha
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
