import type { JSX } from 'react';

import Link from '@/components/composites/Link';
import SectionHeader from '@/components/composites/SectionHeader';
import Section from '@/components/layout/Section';
import Container from '@/components/primitives/Container';

/**
 * This component renders the introduction section for the NPM Package page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Introduction(): JSX.Element {
  return (
    <Section id="introduction" aria-label="Introduction to the Vegan Ipsum NPM Package" className="pt-8 md:pt-10">
      <Container>
        <SectionHeader
          heading={
            <>
              Vegan Ipsum <span className="text-primary">JavaScript Library</span>
            </>
          }
          tagline="Introduction"
          icon="jsSquare"
        >
          <p>
            <Link
              href="https://www.npmjs.com/package/vegan-ipsum"
              aria-label="vegan-ipsum — View package details on npm"
            >
              <code>vegan-ipsum</code>
            </Link>{' '}
            is a lightweight, zero-dependency JavaScript library for generating unique, vegan-themed placeholder text.
            It serves as a cruelty-free alternative to traditional{' '}
            <Link href="https://www.lipsum.com/" aria-label="Lorem Ipsum — Visit the Lorem Ipsum website">
              Lorem Ipsum
            </Link>
            , offering distinctive filler content for your layouts.
          </p>

          <p>
            Designed for developers, designers, and content creators, this package allows you to integrate ethically
            inspired, plant-based dummy text into your projects. It is an excellent choice for building vegan blogs,
            sustainability platforms, or{' '}
            <Link href="https://react.dev/" aria-label="React — Visit the official website">
              React
            </Link>{' '}
            applications promoting compassionate living.
          </p>

          <p>
            The library is environment-agnostic and fully compatible with{' '}
            <Link href="https://nodejs.org/" aria-label="Node.js — Visit the official website">
              Node.js
            </Link>
            , modern browsers, and{' '}
            <Link href="https://reactnative.dev/" aria-label="React Native — Visit the official documentation">
              React Native
            </Link>
            , ensuring seamless integration across diverse{' '}
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              aria-label="JavaScript — Visit the MDN documentation"
            >
              JavaScript
            </Link>{' '}
            ecosystems.
          </p>
        </SectionHeader>
      </Container>
    </Section>
  );
}
