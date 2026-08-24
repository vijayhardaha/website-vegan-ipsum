'use client';

import type { JSX } from 'react';
import { useCallback, useEffect, useState } from 'react';

import { cn } from '@/utils/classnames';

/**
 * Height of the crawl bar, matched to the NextTopLoader default of 3px.
 */
const PROGRESS_BAR_HEIGHT = 'h-0.75';

/**
 * Props for the ScrollProgress component.
 *
 * @type {ScrollProgressProps}
 * @property {string} [className] - Optional additional classes merged onto the progress wrapper element.
 */
interface ScrollProgressProps {
  className?: string;
}

/**
 * Renders a thin horizontal progress bar pinned to the top edge of the site
 * header. The fill tracks the ratio of current scroll position to total
 * scrollable height, growing as the user scrolls down and shrinking on the way
 * back up. Decorative — it duplicates the native scrollbar cue, so it is
 * hidden from assistive technology and never enters the tab order.
 *
 * @param {object} props - Component props.
 * @param {string} [props.className] - Optional additional classes merged onto the progress wrapper element.
 *
 * @returns {JSX.Element | null} The progress bar, or nothing before hydration.
 */
export default function ScrollProgress({ className }: ScrollProgressProps): JSX.Element | null {
  const [ratio, setRatio] = useState(0);

  const handleScroll = useCallback((): void => {
    const { documentElement } = document;
    const scrollable = documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

    setRatio(Math.min(1, Math.max(0, progress)));
  }, []);

  useEffect(() => {
    // Sync the bar on mount before the first scroll event arrives.
    requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        // layout
        'fixed inset-x-0 top-0 z-101 will-change-transform',
        className
      )}
    >
      <div
        className={cn(
          // layout
          `relative w-full ${PROGRESS_BAR_HEIGHT}`
        )}
      >
        <div
          className={cn(
            // layout
            'absolute inset-0',
            // colors
            'bg-primary',
            // effects
            'will-change-transform'
          )}
          style={{ transform: `scaleX(${ratio})`, transformOrigin: 'left top' }}
        />
      </div>
    </div>
  );
}
