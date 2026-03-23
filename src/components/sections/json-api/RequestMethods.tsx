import type { JSX } from 'react';

import Link from '@/components/composites/Link';
import SectionHeader from '@/components/composites/SectionHeader';
import Section from '@/components/layout/Section';
import Container from '@/components/primitives/Container';

/**
 * This component outlines the HTTP request methods supported by the Vegan Ipsum JSON API.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function RequestMethods(): JSX.Element {
  return (
    <Section
      id="request-methods"
      aria-label="HTTP request methods supported by the Vegan Ipsum JSON API"
      className="bg-secondary-muted"
    >
      <Container>
        <SectionHeader
          heading={
            <>
              Request <span className="text-primary">Methods</span>
            </>
          }
          tagline="HTTP Protocol"
          icon="exchange"
        >
          <p>
            The Vegan Ipsum API supports standard{' '}
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"
              aria-label="Learn about HTTP request methods"
            >
              HTTP request methods
            </Link>{' '}
            to fetch vegan-themed placeholder text using <code>GET</code> requests.
          </p>

          <div className="mt-8">
            <div className="border-border rounded-3xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-3 flex items-center gap-3">
                <span className="bg-primary-muted text-primary-dark rounded-2xl px-3 py-1 font-mono text-sm font-bold">
                  GET
                </span>
                <h3 className="text-lg">Query Parameters</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Send parameters as query strings appended to the URL. This method is ideal for quick requests and can be
                easily tested via a browser address bar or command-line tools like{' '}
                <Link href="https://curl.se/" aria-label="Visit curl website">
                  cURL
                </Link>
                .
              </p>
            </div>
          </div>
        </SectionHeader>
      </Container>
    </Section>
  );
}
