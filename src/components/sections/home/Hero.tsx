import type { JSX } from 'react';

import Link from '@/components/composites/Link';
import PageTags from '@/components/composites/PageTags';
import Button from '@/components/primitives/Button';
import Container from '@/components/primitives/Container';
import Icon from '@/components/primitives/Icon';
import RevealOnScroll from '@/components/primitives/RevealOnScroll';

/**
 * Hero component for displaying the main introduction and call-to-action buttons.
 *
 * @returns {JSX.Element} The rendered Hero component.
 */
export default function Hero(): JSX.Element {
  return (
    <section
      id="hero"
      className="from-background via-secondary-muted/15 to-primary-100/60 relative flex items-center justify-center bg-linear-to-br py-24 text-center md:min-h-[calc(100vh-68px)]"
      aria-label="Section introducing the Vegan Ipsum Generator with a headline, description, and call-to-action buttons"
    >
      <div className="pointer-events-none absolute -top-25 -right-25 h-125 w-125 rounded-full bg-[#d4edcc] opacity-64 blur-[60px]"></div>
      <div className="pointer-events-none absolute top-[30%] left-[10%] h-75 w-75 rounded-full bg-[#7bbf6a] opacity-36 blur-[60px]"></div>
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-87.5 w-87.5 rounded-full bg-[#c8e6b8] opacity-36 blur-[60px]"></div>
      <Container>
        <RevealOnScroll delay={0}>
          <PageTags
            tags={['🌱 Ethical & Cruelty-Free', '🥗 Plant-Based Variety', '💻 Developer Focused', '🎁 100% Free']}
            center={true}
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h1
            id="hero-heading"
            className="text-primary-solid display mb-5 max-w-4xl text-5xl leading-tight font-bold md:text-6xl"
          >
            Ethical Placeholder Text for a <em className="text-primary em">Better World</em>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed">
            Generate cruelty-free, plant-based placeholder text for your design and development projects. The ethical
            alternative to standard filler text for compassionate creators.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Button asChild variant="primary" size="xl" className="hover:no-underline">
              <Link href="#generate-vegan-ipsum" scrollOffset={68}>
                Generate Ipsum
              </Link>
            </Button>

            <Button asChild variant="primary-outline" size="xl" className="hover:no-underline">
              <Link href="#methods" scrollOffset={68}>
                Explore Methods <Icon name="arrowRight" />
              </Link>
            </Button>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
