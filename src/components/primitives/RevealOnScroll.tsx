'use client';

import type { JSX, ReactNode } from 'react';
import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';

import { cn } from '@/utils/classnames';

/* Animation variants for the reveal-on-scroll effect */
const REVEAL_VARIANTS: Variants = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } };

/**
 * Props for the RevealOnScroll scroll animation component.
 *
 * @type {RevealOnScrollProps}
 * @property {ReactNode} children - Content to animate on enter
 * @property {number} [delay] - Animation delay in seconds
 * @property {string} [className] - Additional class names to apply
 */
interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
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
      variants={REVEAL_VARIANTS}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.35, delay }}
    >
      {children}
    </motion.div>
  );
}
