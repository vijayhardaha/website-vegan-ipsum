import type { JSX } from 'react';

import Link from '@/components/composites/Link';
import SectionHeader from '@/components/composites/SectionHeader';
import Section from '@/components/layout/Section';
import Container from '@/components/primitives/Container';

/**
 * This component serves as the introduction section for the Vegan Ipsum JSON API documentation.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Introduction(): JSX.Element {
  return (
    <Section id="introduction" aria-label="Introduction to the Vegan Ipsum JSON API" className="py-8 md:py-10">
      <Container>
        <SectionHeader
          heading={
            <>
              Vegan Ipsum <span className="text-primary">JSON API</span>
            </>
          }
          tagline="Introduction"
          icon="cloud"
        >
          <p>
            The <strong>Vegan Ipsum JSON API</strong> is a high-performance web service designed to help developers
            seamlessly integrate vegan-themed placeholder text into their applications, websites, and digital projects.
          </p>
          <p>
            Whether you need multiple paragraphs for blog mockups, a few sentences for UI prototypes, or single words to
            fill form inputs, this API offers flexible parameters to customize the generated content to your exact
            requirements.
          </p>
          <p>
            The API returns content in both{' '}
            <Link href="/json-api#response-format">
              <code>plain</code>
            </Link>{' '}
            text and{' '}
            <Link href="/json-api#response-format">
              <code>HTML</code>
            </Link>{' '}
            formats, making it ready for immediate insertion into web pages or templates. It supports standard{' '}
            <Link href="/json-api#get-request-example">
              <code>GET</code>
            </Link>{' '}
            requests for fast and simple retrieval of content via{' '}
            <Link
              href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON"
              aria-label="JSON — Learn about JSON format"
            >
              JSON
            </Link>
            .
          </p>
        </SectionHeader>
      </Container>
    </Section>
  );
}
