import React from "react";

import Link from "next/link";

import { FOOTER_NAV_LINKS, INavLink } from "@/constants/navLinks";
import { cn } from "@/utils/classNameUtils";

/**
 * Footer component for the Vegan Ipsum website.
 * Displays navigation links and copyright information.
 *
 * @returns {React.JSX.Element} The rendered footer component.
 */
export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-foreground py-6 text-white" aria-label="Footer">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="space-y-3 text-center text-sm">
          <ul className="flex items-center justify-center gap-4 text-sm">
            {FOOTER_NAV_LINKS.map((link: INavLink) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn("inline-flex items-center gap-1", "hover:text-primary hover:underline")}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <p>
            Made with Love 💚 and Compassion 🌱 by{" "}
            <Link
              href="https://instagram.com/vegan.vijay"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              Vijay Hardaha
            </Link>
            .
          </p>
          <p>
            &copy; {new Date().getFullYear()} <span lang="en">Vegan Ipsum</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
