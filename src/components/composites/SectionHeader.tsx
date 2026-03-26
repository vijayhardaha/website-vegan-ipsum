import { Children, isValidElement } from 'react';
import type { JSX, ReactNode } from 'react';

import Icon from '@/components/primitives/Icon';
import { type IconName } from '@/constants/icons';
import { cn } from '@/utils/classnames';

/**
 * Recursively extracts plain text from a React node tree.
 *
 * @param node - The React node to flatten into text.
 * @returns The concatenated text content.
 */
function extractTextContent(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  if (!node || typeof node === 'boolean') {
    return '';
  }

  if (Array.isArray(node)) {
    return node.map(extractTextContent).join(' ');
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return extractTextContent(node.props.children);
  }

  return Children.toArray(node).map(extractTextContent).join(' ');
}

/**
 * Builds a stable heading id from rendered heading content.
 *
 * @param node - The heading React node.
 * @returns A slug-like heading id, or `undefined` when no text is available.
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
  /** Optional icon component to display before the tagline */
  icon?: IconName;
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
 *
 * This component renders a section header with an optional tagline, heading, and content area.
 * It is designed to provide a consistent layout and styling for section introductions throughout the application.
 *
 * @param {SectionHeaderProps} props - The properties for the SectionHeader component.
 * @return {JSX.Element} The rendered section header component.
 */
export default function SectionHeader({
  tagline,
  heading,
  icon = undefined,
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
            'text-primary mb-2 inline-flex items-center justify-center gap-1 text-xs font-bold tracking-wide uppercase',
            taglineClassName
          )}
        >
          {icon && <Icon name={icon as IconName} size={4} />} {tagline}
        </p>
      )}

      <h2 id={resolvedHeadingId} className={cn('mb-4 text-3xl md:text-4xl', headingClassName)}>
        {heading}
      </h2>

      <div className="space-y-4 md:space-y-6">{children}</div>
    </div>
  );
}
