"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuAlignRight, LuX } from "react-icons/lu";
import { RiExternalLinkLine } from "react-icons/ri";

import { HEADER_NAV_LINKS, INavLink } from "@/constants/navLinks";
import { cn } from "@/utils/classNameUtils";

import { Button } from "../ui/button";

/**
 * Header component for the website.
 * Displays the website's logo and a navigation menu with links.
 *
 * @returns {React.JSX.Element} The rendered header component.
 */
export default function Header(): React.JSX.Element {
  const pathname: string = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * Determines if a given path is the active route.
   *
   * @param {string} path - The path to check against the current pathname.
   * @returns {boolean} `true` if the path matches the current pathname, otherwise `false`.
   */
  const isActive = (path: string): boolean => pathname === path;

  return (
    <header className="text-foreground sticky top-0 bg-white py-3 shadow-sm">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex items-center justify-between gap-6">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Vegan Ipsum Logo"
              width={391}
              height={158}
              priority
              className="h-14 w-auto"
            />
            <span className="sr-only">Vegan Ipsum</span>
          </Link>
          <div className="ml-auto">
            <Button
              size="icon"
              variant="outline"
              className="text-2xl md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <LuX /> : <LuAlignRight />}
            </Button>
            <nav
              aria-label="Main navigation"
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } absolute top-full left-0 w-full bg-white shadow-md md:static md:block md:shadow-none`}
            >
              <ul className="flex flex-col space-y-4 p-4 text-sm font-bold tracking-wide uppercase md:flex-row md:space-y-0 md:space-x-6 md:p-0">
                {HEADER_NAV_LINKS.map((link: INavLink) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "inline-flex items-center gap-1",
                        "hover:text-primary hover:underline",
                        {
                          "text-primary font-bold underline": isActive(link.href),
                        }
                      )}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      aria-label={link.label}
                      aria-current={isActive(link.href) ? "page" : undefined}
                    >
                      {link.label}
                      {link.external && <RiExternalLinkLine />}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
