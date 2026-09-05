import type { JSX } from 'react';

import Image from 'next/image';

import Link from '@/components/composites/Link';
import SectionHeader from '@/components/composites/SectionHeader';
import Section from '@/components/layout/Section';
import Container from '@/components/primitives/Container';
import RevealOnScroll from '@/components/primitives/RevealOnScroll';

const OVERVIEW_FEATURES = [
  'Plant-based vocabulary woven into every generated sentence',
  'Resonates with sustainability-focused brands and audiences',
  'Seamlessly integrates via API, CLI, NPM Package, and VS Code Extension',
  'Fully open source and free to use under the MIT License',
];

function FeatureBullets(): JSX.Element {
  return (
    <ul className="space-y-4">
      {OVERVIEW_FEATURES.map((text, i) => (
        <li key={i} className="flex items-start gap-2">
          <div className="bg-primary-muted text-primary mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-sm font-bold">
            &#10003;
          </div>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * This component provides an introduction to the Vegan Ipsum
 * Generator, explaining what it is and its purpose.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Overview(): JSX.Element {
  return (
    <Section
      id="overview"
      aria-label="Section explaining what the Vegan Ipsum Generator is and its features"
      className="py-20"
    >
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <RevealOnScroll delay={0}>
            <div>
              <Image
                src="/welcoming.svg"
                alt="Men welcoming you to Vegan Ipsum Generator"
                width={613}
                height={701}
                unoptimized
              />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <SectionHeader
              heading={
                <>
                  What is <em className="text-primary">Vegan Ipsum?</em>
                </>
              }
              tagline="Overview"
              number={3}
            >
              <p>
                The Vegan Ipsum Generator is a powerful, free tool designed for ethical web designers, developers, and
                content creators. It produces plant-based placeholder text for projects that prioritize cruelty-free and
                sustainable values.
              </p>

              <p>
                Unlike generic{' '}
                <Link href="https://www.lipsum.com/" aria-label="Lorem Ipsum — Visit the standard Lorem Ipsum website">
                  Lorem Ipsum
                </Link>{' '}
                generators, this tool creates vegan-themed filler text that resonates with eco-conscious branding,
                making it ideal for websites, apps, presentations, and prototypes.
              </p>

              <FeatureBullets />
            </SectionHeader>
          </RevealOnScroll>
        </div>
      </Container>
    </Section>
  );
}
