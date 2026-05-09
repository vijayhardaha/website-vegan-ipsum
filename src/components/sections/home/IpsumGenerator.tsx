'use client';

import { useState } from 'react';
import type { JSX } from 'react';

import Link from '@/components/composites/Link';
import SectionHeader from '@/components/composites/SectionHeader';
import Section from '@/components/layout/Section';
import Button from '@/components/primitives/Button';
import Container from '@/components/primitives/Container';
import IpsumForm from '@/components/sections/home/IpsumForm';
import { cn } from '@/utils/classnames';
import { calculateParagraphs, getOutputSummary } from '@/utils/text-stats';

/**
 * IpsumGenerator component for displaying the main introduction and call-to-action buttons.
 *
 * @returns {JSX.Element} The rendered IpsumGenerator component.
 */
export default function IpsumGenerator(): JSX.Element {
  const [output, setOutput] = useState<string>(''); // Stores the generated output
  const [copied, setCopied] = useState<boolean>(false); // Tracks if the text has been copied

  /**
   * Copies the generated output to the clipboard and shows a "Copied!" message.
   */
  const handleCopyToClipboard = (): void => {
    navigator.clipboard.writeText(output).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      },
      (err) => {
        console.error('Failed to copy text: ', err);
      }
    );
  };

  return (
    <Section id="generate-vegan-ipsum" aria-label="Online Vegan Ipsum Generator Tool">
      <Container>
        <SectionHeader
          heading={
            <>
              Generate <em className="text-primary">Vegan Ipsum</em>
            </>
          }
          tagline="Generator"
          number={1}
        >
          <p>
            Instantly generate custom, plant-based placeholder text for your mockups and prototypes. Choose your
            preferred length and format to keep your{' '}
            <Link
              href="https://developer.mozilla.org/en-US/docs/Learn/HTML"
              aria-label="web design — Learn about HTML for web design"
            >
              web design
            </Link>{' '}
            projects fresh, ethical, and meaningful.
          </p>

          <div className="border-border mt-8 rounded-3xl border bg-white p-6 md:p-8">
            {/* Generator Form */}
            <IpsumForm setOutput={setOutput} />

            {/* Display Form Output */}
            {output && (
              <div className="mt-8 space-y-4" data-nosnippet>
                <div className="flex items-start justify-between gap-12">
                  <div className="space-y-0.5">
                    <h2 id="output" className="mb-1 text-xl font-semibold">
                      Output:
                    </h2>
                    <p className="text-muted-foreground font-mono text-xs font-medium">{getOutputSummary(output)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={handleCopyToClipboard}
                      className="min-w-20"
                      aria-label={copied ? 'Text copied to clipboard' : 'Copy text to clipboard'}
                    >
                      {copied ? 'Copied!' : 'Copy'}
                    </Button>
                  </div>
                </div>

                <div
                  className={cn(
                    'bg-input/20 border-border space-y-4 rounded-3xl border p-6 font-mono text-sm',
                    calculateParagraphs(output) > 4 && 'max-h-96 overflow-y-auto'
                  )}
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {output.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </SectionHeader>
      </Container>
    </Section>
  );
}
