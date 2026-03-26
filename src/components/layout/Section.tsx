import { createContext } from 'react';
import type { HTMLAttributes, JSX, ReactNode } from 'react';

import { cn } from '@/utils/classnames';

/**
 * Props for the Section component
 */
export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Child elements to render inside the section */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const SectionContext = createContext<{ sectionId?: string }>({});

/**
 * This component serves as a section wrapper for the application,
 * providing consistent spacing and styling for different sections of the page.
 *
 * @param {SectionProps} props - The properties for the Section component, including children and className.
 * @returns {JSX.Element} The rendered component.
 */
export default function Section({ children, className, ...props }: SectionProps): JSX.Element {
  const sectionId = typeof props.id === 'string' ? props.id : undefined;

  return (
    <SectionContext.Provider value={{ sectionId }}>
      <section className={cn('relative py-16 md:py-20', className)} {...props}>
        {children}
      </section>
    </SectionContext.Provider>
  );
}
