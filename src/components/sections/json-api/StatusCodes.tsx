import type { JSX } from 'react';

import Link from '@/components/composites/Link';
import SectionHeader from '@/components/composites/SectionHeader';
import Section from '@/components/layout/Section';
import Container from '@/components/primitives/Container';
import RevealOnScroll from '@/components/primitives/RevealOnScroll';
import { cn } from '@/utils/classnames';

const STATUS_CODE_DATA = [
  {
    statusCode: 200,
    status: 'OK',
    description: 'Request was successful. The response contains the requested vegan ipsum text.',
    class: 'bg-green-100 text-green-500',
  },
  {
    statusCode: 400,
    status: 'Bad Request',
    description: 'Your request had invalid or missing parameters. Review the error message and try again.',
    class: 'bg-amber-100 text-amber-500',
  },
  {
    statusCode: 404,
    status: 'Not Found',
    description: 'The endpoint you tried to access does not exist. Check the URL and request method.',
    class: 'bg-red-100 text-red-500',
  },
  {
    statusCode: 500,
    status: 'Internal Server Error',
    description: 'Something went wrong on the server side. Try again later or contact support if the problem persists.',
    class: 'bg-purple-100 text-purple-500',
  },
];

function StatusCodeList(): JSX.Element {
  return (
    <ul className="space-y-4">
      {STATUS_CODE_DATA.map((code, index) => (
        <RevealOnScroll key={index} delay={0.1 + index * 0.05}>
          <li className="border-border flex items-start gap-4 rounded-3xl border bg-white p-4 transition-transform hover:translate-x-1">
            <span
              className={cn(
                'inline-flex min-h-12 min-w-14 items-center justify-center rounded-3xl px-0 py-1 text-center text-sm font-bold',
                code.class
              )}
            >
              {code.statusCode}
            </span>
            <div>
              <p className="text-primary-solid mb-0.5 text-base font-bold">{code.status}</p>
              <p className="text-sm leading-relaxed">{code.description}</p>
            </div>
          </li>
        </RevealOnScroll>
      ))}
    </ul>
  );
}

/**
 * This component provides an overview of the HTTP status codes returned by the Vegan Ipsum JSON API.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function StatusCodes(): JSX.Element {
  return (
    <Section
      id="status-codes"
      aria-label="HTTP status codes returned by the Vegan Ipsum JSON API"
      className="bg-secondary-muted"
    >
      <Container>
        <SectionHeader
          heading={
            <>
              HTTP <em className="text-primary">Status Codes</em>
            </>
          }
          tagline="Status Codes"
          number={8}
        >
          <RevealOnScroll delay={0}>
            <p className="mb-8">
              The API utilizes standard{' '}
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
                aria-label="HTTP status codes — Learn about HTTP status codes"
              >
                HTTP status codes
              </Link>{' '}
              to indicate the result of a request. Below are the most common codes you may encounter when interacting
              with the endpoint:
            </p>
          </RevealOnScroll>

          <StatusCodeList />
        </SectionHeader>
      </Container>
    </Section>
  );
}
