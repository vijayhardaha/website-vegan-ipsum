import { Children, isValidElement } from 'react';
import type { JSX, ReactNode } from 'react';

import { cn } from '@/utils/classnames';

/**
 * Recursively extracts plain text from a React node tree.
 *
 * @param {ReactNode} node - The React node to flatten into text.
 *
 * @returns {string} The concatenated text content.
 */
function extractTextContent(node: ReactNode): string {
  // Primitive types that can be directly converted to string
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  // Nullish or boolean values produce no text
  if (node == null || typeof node === 'boolean') {
    return '';
  }

  // Arrays — map each child recursively
  if (Array.isArray(node)) {
    return node.map(extractTextContent).join(' ');
  }

  // React elements — recurse into their children
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return extractTextContent(node.props.children);
  }

  // Fallback for iterable containers
  return Children.toArray(node).map(extractTextContent).join(' ');
}

/**
 * Builds a stable heading id from rendered heading content.
 *
 * @param {ReactNode} node - The heading React node.
 *
 * @returns {string | undefined} A slug-like heading id, or `undefined` when no text is available.
 */
function toHeadingId(node: ReactNode): string | undefined {
  const text = extractTextContent(node)
    .trim()
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return text ? `${text}-heading` : undefined;
}

/**
 * Props for the SectionHeader component
 */
export interface SectionHeaderProps {
  /** The tagline text displayed above the heading */
  tagline?: ReactNode;
  /** The main heading text */
  heading: ReactNode;
  /** Optional number displayed as "Rº NN" after the tagline. When omitted, the number suffix is hidden. */
  number?: string | number;
  /** Whether to show the decorative arrow line before the tagline. Defaults to `true`. */
  arrow?: boolean;
  /** Additional CSS classes for the container */
  className?: string;
  /** Additional CSS classes for the tagline */
  taglineClassName?: string;
  /** Additional CSS classes for the heading */
  headingClassName?: string;
  /** Optional heading id override */
  headingId?: string;
  /** Children elements (typically paragraphs) */
  children: ReactNode;
}

/**
 * Renders a section header with an optional tagline, heading, and content area.
 * Provides a consistent layout and styling for section introductions throughout the application.
 *
 * @param {SectionHeaderProps} props - The properties for the SectionHeader component.
 *
 * @returns {JSX.Element} The rendered section header component.
 */
export default function SectionHeader({
  tagline,
  heading,
  number,
  arrow = true,
  className,
  taglineClassName,
  headingClassName,
  headingId,
  children,
}: SectionHeaderProps): JSX.Element {
  const resolvedHeadingId = headingId ?? toHeadingId(heading);

  return (
    <div className={cn('', className)}>
      {tagline && (
        <p
          className={cn(
            'text-primary mb-2 inline-flex items-center gap-1 text-[11px] font-medium tracking-[.22em] uppercase',
            'inline-flex items-center gap-3',
            arrow && 'before:inline-block before:h-px before:w-[18px] before:bg-current before:content-[""]',
            taglineClassName
          )}
        >
          {tagline}
          {number != null && <span className="ml-1">·&nbsp;&nbsp;Rº {String(number).padStart(2, '0')}</span>}
        </p>
      )}

      <h2 id={resolvedHeadingId} className={cn('mb-4 text-3xl md:text-4xl', headingClassName)}>
        {heading}
      </h2>

      <div className="space-y-4 md:space-y-6">{children}</div>
    </div>
  );
}
