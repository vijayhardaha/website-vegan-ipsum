'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import type { JSX } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { cn } from '@/utils/classnames';
import { prismCustom } from '@/utils/prism-styles';

/**
 * Props for the CodeBlock component.
 *
 * @type {CodeBlockProps}
 * @property {string} label - Label for the code block
 * @property {string} children - Code content
 * @property {string} [className] - Additional CSS classes
 * @property {unknown} [key] - Index signature for additional props
 */
interface CodeBlockProps {
  label: string;
  children: string;
  className?: string;
  [key: string]: unknown;
}

/**
 * Clipboard availability will be detected on the client after mount.
 * Avoid checking `navigator`/`window` at module scope to prevent
 * server/client render mismatches during hydration.
 */

/**
 * Reusable component for displaying code blocks with syntax highlighting.
 *
 * @param {CodeBlockProps} props - The props for the component.
 *
 * @returns {JSX.Element} The CodeBlock component.
 */
export default function CodeBlock({ label, children, className, ...props }: CodeBlockProps): JSX.Element {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  // fallow-ignore-next-line complexity
  const handleCopy = async (text: string): Promise<void> => {
    const canUseClipboard = typeof navigator !== 'undefined' && !!navigator.clipboard && window.isSecureContext;

    // Check if the Clipboard API is available before attempting to copy. If not, log a warning and exit the function.
    if (!canUseClipboard) {
      console.warn('Clipboard API not supported in this environment.');
      return;
    }

    try {
      // Use the Clipboard API to write the text to the clipboard.
      // If successful, set the copied state to true to provide feedback to the user.
      await navigator.clipboard.writeText(text);
      setCopied(true);

      // Clear any existing timer to prevent multiple timers from running simultaneously.
      if (timerRef.current) window.clearTimeout(timerRef.current);
      // Then, set a new timer to reset the copied state after 1 second (1000 milliseconds).
      timerRef.current = window.setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl">
      <div className="flex items-center justify-between bg-[#243020] px-5 py-2.5">
        <span className="font-mono text-xs font-semibold text-[#6a9960]">{label}</span>

        <button
          onClick={() => handleCopy(children)}
          className={cn(
            'cursor-pointer rounded-2xl border border-white/12 bg-white/8 px-3 py-1 font-mono text-xs font-semibold text-[#6a9960] transition-all',
            copied && 'ok'
          )}
          aria-pressed={copied}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <SyntaxHighlighter style={prismCustom} className={cn('', className)} {...props}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
