import type { JSX } from 'react';

import Link from '@/components/composites/Link';
import Section from '@/components/layout/Section';
import Button from '@/components/primitives/Button';
import Container from '@/components/primitives/Container';
import RevealOnScroll from '@/components/primitives/RevealOnScroll';

/**
 * This component represents the call-to-action (CTA) section of the
 * Vegan Ipsum website, encouraging users to get started with the
 * project and explore its various tools and resources.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function CTA(): JSX.Element {
  return (
    <Section id="ready-to-get-started">
      <Container>
        <div className="from-secondary-100 to-secondary-200 relative overflow-hidden rounded-3xl bg-linear-to-br p-12 text-center md:p-16">
          <div className="relative z-10">
            <RevealOnScroll delay={0}>
              <h2 id="ready-to-get-started-heading" className="text-secondary-solid mb-4 text-3xl md:text-4xl">
                Ready to Get Started?
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="mx-auto mb-8 max-w-xl leading-relaxed">
                Start using Vegan Ipsum today and bring ethical, plant-based placeholder text to your projects. Choose
                the integration method that best fits your development workflow.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild variant="white" size="md">
                  <Link href="/json-api">Try the API</Link>
                </Button>
                <Button asChild variant="secondary" size="md">
                  <Link href="/npm-package">NPM Package</Link>
                </Button>
                <Button asChild variant="secondary-outline" size="md">
                  <Link href="https://github.com/vijayhardaha/node-vegan-ipsum">View on GitHub</Link>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </Container>
    </Section>
  );
}
