import type { JSX } from 'react';

import SectionHeader from '@/components/composites/SectionHeader';
import SmartLink from '@/components/composites/SmartLink';
import Section from '@/components/layout/Section';
import Container from '@/components/primitives/Container';
import InfoBox from '@/components/primitives/InfoBox';

/**
 * This component renders the usage section for the VS Code Extension page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Usage(): JSX.Element {
  return (
    <Section id="usage" aria-label="Usage instructions for the Vegan Ipsum VS Code Extension">
      <Container>
        <SectionHeader
          heading={
            <>
              How to <span className="text-primary">Use</span>
            </>
          }
          tagline="Usage"
          icon="keyboard"
        >
          <p>
            Once installed, generating vegan-themed placeholder text is an efficient process. You can trigger the
            generator directly from the{' '}
            <SmartLink
              href="https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette"
              aria-label="Learn how to use the Command Palette"
            >
              Command Palette
            </SmartLink>{' '}
            or assign custom keyboard shortcuts for even faster access.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                heading: 'Open Command Palette',
                content: (
                  <>
                    Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Win/Linux) or <kbd>Cmd</kbd>+<kbd>Shift</kbd>+
                    <kbd>P</kbd> (macOS)
                  </>
                ),
              },
              { heading: 'Search Vegan Ipsum', content: <>Type to see all available commands for the extension</> },
              {
                heading: 'Select Command',
                content: <>Choose paragraph, sentence, or word command based on your needs</>,
              },
              { heading: 'Text Inserted!', content: <>Vegan ipsum appears at your cursor position instantly</> },
            ].map((step, index) => (
              <div
                key={index}
                className="border-border flex items-start gap-4 rounded-2xl border bg-white p-7 shadow-md"
              >
                <div className="bg-primary-muted/80 text-primary-dark border-green-mid mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="mb-2 text-lg">{step.heading}</h3>
                  <p className="text-sm leading-relaxed">{step.content}</p>
                </div>
              </div>
            ))}
          </div>

          <InfoBox>
            This extension works across various text-based file types, including{' '}
            <SmartLink href="https://developer.mozilla.org/en-US/docs/Web/HTML" aria-label="Learn more about HTML">
              HTML
            </SmartLink>
            ,{' '}
            <SmartLink href="https://www.markdownguide.org/" aria-label="Learn more about Markdown">
              Markdown
            </SmartLink>
            ,{' '}
            <SmartLink
              href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript"
              aria-label="Learn more about JavaScript"
            >
              JavaScript
            </SmartLink>
            , and{' '}
            <SmartLink href="https://developer.mozilla.org/en-US/docs/Glossary/JSON" aria-label="Learn more about JSON">
              JSON
            </SmartLink>
            , making it a versatile tool for diverse development workflows.
          </InfoBox>
        </SectionHeader>
      </Container>
    </Section>
  );
}
