import type { JSX } from 'react';

import Link from '@/components/composites/Link';
import SectionHeader from '@/components/composites/SectionHeader';
import Section from '@/components/layout/Section';
import Container from '@/components/primitives/Container';
import Icon from '@/components/primitives/Icon';
import RevealOnScroll from '@/components/primitives/RevealOnScroll';

const TECHNICAL_FEATURES = [
  <>
    Written entirely in modern, strongly typed{' '}
    <Link href="https://www.typescriptlang.org/" aria-label="TypeScript — Visit the official website">
      <strong>TypeScript</strong>
    </Link>{' '}
    to ensure code quality and maintainability.
  </>,
  <>
    <strong>Zero external dependencies</strong>, making it lightweight, fast, and easy to audit for security and
    performance.
  </>,
  <>
    Employs <strong>functional programming</strong> principles to produce predictable and pure functions, improving
    testability and reliability.
  </>,
  <>
    Supports both{' '}
    <Link
      href="https://nodejs.org/api/modules.html#modules-commonjs-modules"
      aria-label="CommonJS — Learn about CommonJS modules"
    >
      <strong>CommonJS</strong>
    </Link>{' '}
    and{' '}
    <Link
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
      aria-label="ECMAScript Modules (ESM) — Learn about ECMAScript modules"
    >
      <strong>ECMAScript Modules (ESM)</strong>
    </Link>{' '}
    to maximize compatibility across JavaScript environments.
  </>,
  <>
    Actively maintained with <strong>semantic versioning</strong>, ensuring new features and bug fixes are delivered
    predictably.
  </>,
  <>
    <strong>Open-source on GitHub</strong>, welcoming community contributions and ensuring transparency in development.
  </>,
];

const SPEC_ITEMS = [
  { label: 'Language', value: 'TypeScript' },
  { label: 'Module Support', value: 'CommonJS + ESM' },
  { label: 'Dependencies', value: 'Zero' },
];

function FeatureList(): JSX.Element {
  return (
    <ul className="space-y-4 text-sm">
      {TECHNICAL_FEATURES.map((feature, index) => (
        <li key={index} className="flex items-start gap-2">
          <div className="bg-primary-muted text-primary mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-sm font-bold">
            &#10003;
          </div>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

function SpecCard(): JSX.Element {
  return (
    <div className="border-border from-secondary-100 to-secondary-200 rounded-3xl border bg-linear-to-br p-10 text-center shadow-2xl">
      <div className="text-secondary-solid mb-6 flex justify-center text-8xl">
        <Icon name="cogs" />
      </div>
      <div className="space-y-3">
        {SPEC_ITEMS.map((item, index) => (
          <div
            key={index}
            className="bg-secondary/15 border-secondary/15 rounded-3xl border px-4 py-3 backdrop-blur-md"
          >
            <p className="text-secondary mb-1.5 text-sm">{item.label}</p>
            <p className="text-secondary-dark font-serif text-lg font-bold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * This component provides a technical overview of the Vegan Ipsum
 * project, highlighting its key technical features, design principles,
 * and implementation details.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function TechnicalOverview(): JSX.Element {
  return (
    <Section id="technical-overview" aria-label="Customization options and technical details of Vegan Ipsum">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <SectionHeader
            heading={
              <>
                Technical <em className="text-primary">Overview</em>
              </>
            }
            tagline="Architecture"
            number={5}
          >
            <RevealOnScroll delay={0} className="space-y-4 md:space-y-6">
              <p>
                Built with modern web standards and best practices to ensure reliability, performance, and long-term
                maintainability.
              </p>
              <FeatureList />
            </RevealOnScroll>
          </SectionHeader>
          <RevealOnScroll delay={0.1}>
            <div className="text-center">
              <SpecCard />
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </Section>
  );
}
