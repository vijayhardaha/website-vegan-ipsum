'use client';

import type { MouseEvent, ComponentPropsWithoutRef, JSX } from 'react';
import { useCallback } from 'react';

import NextLink from 'next/link';

import Icon from '@/components/primitives/Icon';
import { cn } from '@/utils/classnames';

/**
 * Determines the type of link based on the href.
 *
 * @param {string} href - The link destination
 *
 * @returns {'hash' | 'internal' | 'external'} The link type
 */
const getLinkType = (href: string): 'hash' | 'internal' | 'external' => {
  if (href.startsWith('#')) return 'hash';
  if (href.startsWith('/')) return 'internal';
  return 'external';
};

/**
 * Scrolls the viewport to an element with the given ID, optionally applying a vertical offset.
 *
 * @param {string} elementId - The ID of the target element (without the # symbol).
 * @param {number} [scrollOffset] - Optional pixel offset from the top (useful for fixed headers).
 */
function scrollToElement(elementId: string, scrollOffset?: number): void {
  const element = document.getElementById(elementId);
  if (!element) return;

  if (scrollOffset !== undefined) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - scrollOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  } else {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Builds Tailwind class arrays for the link's hover effect.
 *
 * @param {'none' | 'border' | 'background'} hoverEffect - The desired hover effect style.
 *
 * @returns {{ linkClasses: string[] }} Object containing the assembled class array.
 */
function buildLinkClasses(hoverEffect: 'none' | 'border' | 'background'): string[] {
  const baseClasses = ['relative', 'transition-colors duration-200'];

  switch (hoverEffect) {
    case 'background': {
      return [
        ...baseClasses,
        'border-b-2 border-current',
        'after:absolute after:left-0 after:bottom-0 after:h-full after:w-full',
        'after:origin-bottom after:scale-y-0',
        'after:bg-secondary-muted',
        'after:transition-transform after:duration-300',
        'hover:after:scale-y-100',
        'after:-z-10',
        'hover:text-amber-600',
      ];
    }
    case 'border': {
      return [
        ...baseClasses,
        'after:absolute after:left-0 after:-bottom-0',
        'after:block after:h-0.5 after:w-full',
        'after:origin-left after:scale-x-0',
        'after:bg-current',
        'after:transition-transform after:duration-300',
        'hover:after:scale-x-100',
      ];
    }
    default: {
      // 'none' — no decorative effect
      return baseClasses;
    }
  }
}

/**
 * Props for the Link component
 */
interface LinkProps extends Omit<ComponentPropsWithoutRef<typeof NextLink>, 'href'> {
  /** The destination URL or hash anchor */
  href: string;
  /** Optional offset for hash links (useful for fixed headers) */
  scrollOffset?: number;
  /* Optional prop to control external link icon display */
  linkLine?: boolean;
  /* Optional prop to control hover effect style: 'none' | 'border' | 'background' */
  hoverEffect?: 'none' | 'border' | 'background';
}

/**
 * Link Component
 *
 * An intelligent NextLink component that automatically handles:
 * - Hash links (#anchor) with smooth scroll behavior
 * - Internal links (/path) without external attributes
 * - External links (https://...) with proper security attributes
 *
 * @param {LinkProps} props - The component props
 * @param {string} props.href - The destination URL or hash anchor
 * @param {number} [props.scrollOffset] - Optional offset for hash links
 * @param {boolean} [props.linkLine] - Whether to show external link icon
 * @param {'none' | 'border' | 'background'} [props.hoverEffect] - Hover effect style
 *
 * @returns {JSX.Element} The rendered link component.
 */
export default function Link({
  href,
  className,
  'aria-label': ariaLabel,
  children,
  scrollOffset,
  onClick = undefined,
  linkLine = true,
  hoverEffect = 'background',
  ...props
}: LinkProps): JSX.Element {
  const linkType = getLinkType(href);

  // Dev-time accessibility warning for external links without an accessible name
  if (process.env.NODE_ENV !== 'production' && linkType === 'external' && !ariaLabel) {
    console.warn(
      `[Link] External link '${href}' does not have an accessible name (aria-label). Provide an aria-label or visible link text.`
    );
  }

  /**
   * Handles click events for hash links
   *
   * @param {MouseEvent<HTMLAnchorElement>} e - The click event
   */
  const handleHashClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const elementId = href.replace('#', '');
      scrollToElement(elementId, scrollOffset);
      onClick?.(e);
    },
    [href, scrollOffset, onClick]
  );

  const linkClasses = buildLinkClasses(hoverEffect);

  // Hash link with smooth scroll
  if (linkType === 'hash') {
    return (
      <NextLink
        href={href}
        scroll={false}
        onClick={handleHashClick}
        className={cn(linkClasses, className)}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </NextLink>
    );
  }

  // External link with security attributes
  if (linkType === 'external') {
    return (
      <NextLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(linkClasses, 'relative inline-flex items-center gap-px', className)}
        aria-label={ariaLabel}
        onClick={onClick}
        {...props}
      >
        <span className="leading-tight">{children}</span>
        {linkLine && <Icon name="arrowOutward" className="relative top-px text-inherit" />}
      </NextLink>
    );
  }

  // Internal link (default)
  return (
    <NextLink href={href} className={cn(linkClasses, className)} aria-label={ariaLabel} onClick={onClick} {...props}>
      {children}
    </NextLink>
  );
}
