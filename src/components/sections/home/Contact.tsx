import type { JSX } from 'react';

import Link from 'next/link';

import SectionHeader from '@/components/composites/SectionHeader';
import Section from '@/components/layout/Section';
import Button from '@/components/primitives/Button';
import Container from '@/components/primitives/Container';
import Icon from '@/components/primitives/Icon';
import RevealOnScroll from '@/components/primitives/RevealOnScroll';

/**
 * This component renders a call-to-action section
 * encouraging users to connect with the team for questions,
 * contributions, or feedback.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Contact(): JSX.Element {
  return (
    <Section
      id="contact-cta"
      aria-label="Section encouraging users to get in touch for questions, contributions, or feedback"
      className="bg-secondary-muted py-20"
    >
      <Container>
        <SectionHeader
          heading={
            <>
              Let&apos;s build something <em className="text-primary">meaningful together</em>
            </>
          }
          tagline="Contact"
          arrow={false}
          className="mx-auto max-w-xl text-center"
          headingClassName="mx-auto max-w-lg"
        >
          <RevealOnScroll delay={0}>
            <p className="mb-8">
              We are building more than just a tool; we are cultivating a community of conscious creators. Whether you
              want to contribute code, suggest features, or connect with like-minded builders, your voice matters. Join
              us in making ethical design the standard, not the exception.
            </p>

            <Button asChild variant="primary" size="lg">
              <Link href="/contact">
                Contact Us <Icon name="arrowRight" />
              </Link>
            </Button>
          </RevealOnScroll>
        </SectionHeader>
      </Container>
    </Section>
  );
}
