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
// fallow-ignore-next-line complexity
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
 * Props for the TaglineBlock component.
 *
 * @type {TaglineBlockProps}
 * @property {ReactNode} tagline - Tagline text.
 * @property {string | number} [number] - Optional number suffix.
 * @property {boolean} arrow - Whether to show decorative arrow.
 * @property {string} [taglineClassName] - Additional classes.
 */
interface TaglineBlockProps {
  tagline: ReactNode;
  number?: string | number;
  arrow: boolean;
  taglineClassName?: string;
}

/**
 * Renders the tagline with optional number suffix and decorative arrow.
 *
 * @param {TaglineBlockProps} props - The component props.
 *
 * @returns {JSX.Element | null} The rendered tagline element.
 */
function TaglineBlock({ tagline, number, arrow, taglineClassName }: TaglineBlockProps): JSX.Element | null {
  if (!tagline) return null;

  return (
    <p
      className={cn(
        'text-primary mb-2 inline-flex items-center gap-1 text-[11px] font-medium tracking-[.22em] uppercase',
        'inline-flex items-center gap-3',
        arrow && 'before:inline-block before:h-px before:w-4.5 before:bg-current before:content-[""]',
        taglineClassName
      )}
    >
      {tagline}
      {number != null && <span className="ml-1">·&nbsp;&nbsp;Rº {String(number).padStart(2, '0')}</span>}
    </p>
  );
}

/**
 * Renders a section header with an optional tagline, heading, and content area.
 * Provides a consistent layout and styling for section introductions throughout the application.
 *
 * @param {object} props - The properties for the SectionHeader component.
 * @param {ReactNode} [props.tagline] - Tagline text displayed above the heading.
 * @param {ReactNode} props.heading - Main heading text.
 * @param {string | number} [props.number] - Optional number displayed as "Rº NN".
 * @param {boolean} [props.arrow] - Whether to show decorative arrow before tagline.
 * @param {string} [props.className] - Additional CSS classes for container.
 * @param {string} [props.taglineClassName] - Additional CSS classes for tagline.
 * @param {string} [props.headingClassName] - Additional CSS classes for heading.
 * @param {string} [props.headingId] - Optional heading id override.
 * @param {ReactNode} props.children - Children elements (typically paragraphs).
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
      <TaglineBlock tagline={tagline} number={number} arrow={arrow} taglineClassName={taglineClassName} />

      <h2 id={resolvedHeadingId} className={cn('mb-4 text-3xl md:text-4xl', headingClassName)}>
        {heading}
      </h2>

      <div className="space-y-4 md:space-y-6">{children}</div>
    </div>
  );
}
