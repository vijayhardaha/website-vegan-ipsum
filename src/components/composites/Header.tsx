'use client';

import { useState, useEffect, useRef } from 'react';
import type { JSX } from 'react';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LuAlignRight, LuX } from 'react-icons/lu';

import Link from '@/components/composites/Link';
import Button from '@/components/primitives/Button';
import { HEADER_NAV_LINKS, type NavLink } from '@/constants/navlinks';
import { cn } from '@/utils/classnames';

function useMobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const firstFocusable = menuRef.current?.querySelector(
        "a, button, input, select, textarea, [tabindex]:not([tabindex='-1'])"
      ) as HTMLElement | null;
      firstFocusable?.focus();
    } else {
      toggleButtonRef.current?.focus();
    }
  }, [isMobileMenuOpen]);

  return { isMobileMenuOpen, setIsMobileMenuOpen, menuRef, toggleButtonRef };
}

/**
 * Props for the NavLinks component.
 *
 * @type {NavLinksProps}
 * @property {string} pathname - Current pathname for active state.
 * @property {() => void} onLinkClick - Callback when a nav link is clicked.
 */
interface NavLinksProps {
  pathname: string;
  onLinkClick: () => void;
}

/**
 * Renders the navigation links list.
 *
 * @param {NavLinksProps} props - The component props.
 *
 * @returns {JSX.Element} The rendered navigation list.
 */
function NavLinks({ pathname, onLinkClick }: NavLinksProps): JSX.Element {
  const isActive = (path: string): boolean => pathname === path;

  return (
    <ul className="flex flex-col space-y-4 p-4 md:px-6 lg:flex-row lg:space-y-0 lg:space-x-5 lg:p-0">
      {HEADER_NAV_LINKS.map((link: NavLink) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={cn(
              'inline-flex items-center text-xs font-semibold tracking-wide uppercase',
              'hover:text-primary',
              { 'text-primary decoration-current': isActive(link.href) }
            )}
            aria-label={link.label}
            aria-current={isActive(link.href) ? 'page' : undefined}
            onClick={onLinkClick}
            hoverEffect="border"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * Header component for the website.
 * Displays the website's logo and a navigation menu with links.
 *
 * @returns {JSX.Element} The rendered header component.
 */
export default function Header(): JSX.Element {
  const pathname: string = usePathname();
  const { isMobileMenuOpen, setIsMobileMenuOpen, menuRef, toggleButtonRef } = useMobileMenu();

  return (
    <header className="text-foreground bg-background/85 border-border sticky top-0 z-100 border-b py-3 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" hoverEffect="none">
            <Image
              src="/logo.svg"
              alt="Vegan Ipsum Logo"
              width={213}
              height={32}
              priority
              className="h-auto w-55 py-2"
            />
            <span className="sr-only">Vegan Ipsum</span>
          </Link>
          <div className="ml-auto" ref={menuRef}>
            <Button
              size="icon"
              variant="primary-outline"
              className="text-2xl lg:hidden"
              ref={toggleButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="main-menu"
            >
              {isMobileMenuOpen ? <LuX /> : <LuAlignRight />}
            </Button>
            <nav
              id="main-menu"
              aria-label="Main navigation"
              className={cn(
                'bg-background border-border absolute top-full left-0 w-full border-t shadow-md lg:static lg:block lg:border-none lg:bg-transparent lg:shadow-none',
                isMobileMenuOpen ? 'block' : 'hidden'
              )}
            >
              <NavLinks pathname={pathname} onLinkClick={() => setIsMobileMenuOpen(false)} />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
