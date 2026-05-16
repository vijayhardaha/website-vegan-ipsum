'use client';

import type { JSX, ReactNode } from 'react';
import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

import { cn } from '@/utils/classnames';

/* RevealOnScroll component props */
interface RevealOnScrollProps {
  /** Content to animate on enter. */
  children: ReactNode;
  /** Animation delay in seconds. */
  delay?: number;
  /** Additional class names to apply. */
  className?: string;
}

/**
 * RevealOnScroll animates children with a fade-in + upward slide when they
 * enter the viewport.
 *
 * @param {RevealOnScrollProps} props - The component props.
 * @param {ReactNode} props.children - Content to reveal on scroll.
 * @param {number} [props.delay] - Delay before animation starts.
 *
 * @returns {JSX.Element} The animated element(s).
 */
export default function RevealOnScroll({ children, delay = 0.1, className }: RevealOnScrollProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const isInView: boolean = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 75 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
