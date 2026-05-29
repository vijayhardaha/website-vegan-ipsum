import type { JSX } from 'react';

import Link from '@/components/composites/Link';
import SectionHeader from '@/components/composites/SectionHeader';
import Section from '@/components/layout/Section';
import Container from '@/components/primitives/Container';
import RevealOnScroll from '@/components/primitives/RevealOnScroll';

const INTRO_LINKS = [
  {
    href: 'https://www.npmjs.com/package/vegan-ipsum',
    label: 'vegan-ipsum — View package details on npm',
    code: 'vegan-ipsum',
  },
  { href: 'https://www.lipsum.com/', label: 'Lorem Ipsum — Visit the Lorem Ipsum website', text: 'Lorem Ipsum' },
  { href: 'https://react.dev/', label: 'React — Visit the official website', text: 'React' },
  { href: 'https://nodejs.org/', label: 'Node.js — Visit the official website', text: 'Node.js' },
  { href: 'https://reactnative.dev/', label: 'React Native — Visit the official documentation', text: 'React Native' },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    label: 'JavaScript — Visit the MDN documentation',
    text: 'JavaScript',
  },
];

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
              Vegan Ipsum <em className="text-primary">JavaScript Library</em>
            </>
          }
          tagline="Introduction"
          number={1}
        >
          <RevealOnScroll delay={0}>
            <p>
              <Link href={INTRO_LINKS[0].href} aria-label={INTRO_LINKS[0].label}>
                <code>{INTRO_LINKS[0].code}</code>
              </Link>{' '}
              is a lightweight, zero-dependency JavaScript library for generating unique, vegan-themed placeholder text.
              It serves as a cruelty-free alternative to traditional{' '}
              <Link href={INTRO_LINKS[1].href} aria-label={INTRO_LINKS[1].label}>
                {INTRO_LINKS[1].text}
              </Link>
              , offering distinctive filler content for your layouts.
            </p>

            <p>
              Designed for developers, designers, and content creators, this package allows you to integrate ethically
              inspired, plant-based dummy text into your projects. It is an excellent choice for building vegan blogs,
              sustainability platforms, or{' '}
              <Link href={INTRO_LINKS[2].href} aria-label={INTRO_LINKS[2].label}>
                {INTRO_LINKS[2].text}
              </Link>{' '}
              applications promoting compassionate living.
            </p>

            <p>
              The library is environment-agnostic and fully compatible with{' '}
              <Link href={INTRO_LINKS[3].href} aria-label={INTRO_LINKS[3].label}>
                {INTRO_LINKS[3].text}
              </Link>
              , modern browsers, and{' '}
              <Link href={INTRO_LINKS[4].href} aria-label={INTRO_LINKS[4].label}>
                {INTRO_LINKS[4].text}
              </Link>
              , ensuring seamless integration across diverse{' '}
              <Link href={INTRO_LINKS[5].href} aria-label={INTRO_LINKS[5].label}>
                {INTRO_LINKS[5].text}
              </Link>{' '}
              ecosystems.
            </p>
          </RevealOnScroll>
        </SectionHeader>
      </Container>
    </Section>
  );
}
