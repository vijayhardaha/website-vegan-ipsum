import type { JSX } from 'react';

import Link from '@/components/composites/Link';
import SectionHeader from '@/components/composites/SectionHeader';
import Section from '@/components/layout/Section';
import CodeBlock from '@/components/primitives/CodeBlock';
import Container from '@/components/primitives/Container';
import RevealOnScroll from '@/components/primitives/RevealOnScroll';

/**
 * This component renders the installation section for the Node CLI page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Installation(): JSX.Element {
  return (
    <Section
      id="installation"
      aria-label="Installation instructions for the Vegan Ipsum Node CLI"
      className="bg-secondary-muted"
    >
      <Container>
        <SectionHeader
          heading={
            <>
              CLI <em className="text-primary">Installation</em>
            </>
          }
          tagline="Global Setup"
          number={2}
        >
          <RevealOnScroll delay={0}>
            <p className="mb-8">
              Install <code>vegan-ipsum</code> globally to access the command-line interface from any directory. This
              ensures that generating plant-based placeholder text is always just a few keystrokes away.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <CodeBlock label="Global Install (npm)" language="bash">
              npm install -g vegan-ipsum
            </CodeBlock>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p>
              Before proceeding, ensure you have{' '}
              <Link href="https://nodejs.org/" aria-label="Node.js — Download Node.js">
                Node.js
              </Link>{' '}
              and{' '}
              <Link
                href="https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager"
                aria-label="npm — Learn about the npm package manager"
              >
                npm
              </Link>{' '}
              installed on your system.
            </p>

            <p>
              After the installation is complete, verify that the package is accessible in your{' '}
              <Link
                href="https://en.wikipedia.org/wiki/PATH_(variable)"
                aria-label="PATH — Learn about the PATH environment variable"
              >
                PATH
              </Link>{' '}
              by running the help command:
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <CodeBlock label="Verify Installation" language="bash">
              vegan-ipsum --help
            </CodeBlock>
          </RevealOnScroll>
        </SectionHeader>
      </Container>
    </Section>
  );
}
