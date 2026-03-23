import type { JSX } from 'react';

import Image from 'next/image';

import SectionHeader from '@/components/composites/SectionHeader';
import SmartLink from '@/components/composites/SmartLink';
import Section from '@/components/layout/Section';
import Container from '@/components/primitives/Container';

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
          <div>
            <Image src="/welcoming.svg" alt="Men welcoming you to Vegan Ipsum Generator" width={613} height={701} />
          </div>
          <SectionHeader heading="What is Vegan Ipsum?" tagline="Overview" icon="questionCircle">
            <p>
              The Vegan Ipsum Generator is a powerful, free tool designed for ethical web designers, developers, and
              content creators. It produces plant-based placeholder text for projects that prioritize cruelty-free and
              sustainable values.
            </p>

            <p>
              Unlike generic{' '}
              <SmartLink href="https://www.lipsum.com/" aria-label="Visit standard Lorem Ipsum website">
                Lorem Ipsum
              </SmartLink>{' '}
              generators, this tool creates vegan-themed filler text that resonates with eco-conscious branding, making
              it ideal for websites, apps, presentations, and prototypes.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <div className="bg-primary-muted text-primary mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                  &#10003;
                </div>
                <span>Plant-based vocabulary woven into every generated sentence</span>
              </li>

              <li className="flex items-start gap-2">
                <div className="bg-primary-muted text-primary mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                  &#10003;
                </div>
                <span>Resonates with sustainability-focused brands and audiences</span>
              </li>

              <li className="flex items-start gap-2">
                <div className="bg-primary-muted text-primary mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                  &#10003;
                </div>
                <span>
                  Seamlessly integrates via <SmartLink href="/json-api">API</SmartLink>,{' '}
                  <SmartLink href="/node-cli">CLI</SmartLink>, <SmartLink href="/npm-package">NPM Package</SmartLink>,
                  and <SmartLink href="/vscode-extension">VS Code Extension</SmartLink>
                </span>
              </li>

              <li className="flex items-start gap-2">
                <div className="bg-primary-muted text-primary mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                  &#10003;
                </div>
                <span>
                  Fully open source and free to use under the{' '}
                  <SmartLink href="https://opensource.org/licenses/MIT" aria-label="Learn about the MIT License">
                    MIT License
                  </SmartLink>
                </span>
              </li>
            </ul>
          </SectionHeader>
        </div>
      </Container>
    </Section>
  );
}
