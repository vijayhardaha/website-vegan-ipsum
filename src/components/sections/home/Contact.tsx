import type { JSX } from 'react';

import Link from 'next/link';

import SectionHeader from '@/components/composites/SectionHeader';
import Section from '@/components/layout/Section';
import Button from '@/components/primitives/Button';
import Container from '@/components/primitives/Container';
import Icon from '@/components/primitives/Icon';

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
      aria-label="Section encouraging users to get in touch for questions, contributions, or feedback"
      className="bg-secondary-muted py-20"
    >
      <Container>
        <SectionHeader
          heading={
            <>
              Let&apos;s build something <span className="text-primary">meaningful together</span>
            </>
          }
          tagline="Contact"
          icon="handShake"
          className="mx-auto max-w-xl text-center"
          headingClassName="mx-auto max-w-lg"
        >
          <p className="mb-8">
            We are building more than just a tool; we are cultivating a community of conscious creators. Whether you
            want to contribute code, suggest features, or connect with like-minded builders, your voice matters. Join us
            in making ethical design the standard, not the exception.
          </p>

          <Button asChild variant="primary" size="lg" aria-label="Navigate to the Contact page">
            <Link href="/contact">
              Contact Us <Icon name="arrowRight" />
            </Link>
          </Button>
        </SectionHeader>
      </Container>
    </Section>
  );
}
