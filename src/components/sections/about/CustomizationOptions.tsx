import type { JSX } from 'react';

import SectionHeader from '@/components/composites/SectionHeader';
import Section from '@/components/layout/Section';
import Container from '@/components/primitives/Container';

/**
 * This component represents the customization options and technical details of the
 * Vegan Ipsum project, providing users with information on how to configure the
 * output of the placeholder text to suit their specific needs and preferences.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function CustomizationOptions(): JSX.Element {
  return (
    <Section
      id="customization-options"
      className="bg-secondary-muted"
      aria-label="Customization options and technical details of Vegan Ipsum"
    >
      <Container>
        <SectionHeader
          heading={
            <>
              Customization <span className="text-primary">Options</span>
            </>
          }
          tagline="Settings"
          icon="sliders"
        >
          <p>
            Vegan Ipsum is designed with flexibility in mind, allowing users to tailor the output to meet the specific
            needs of their projects. Whether you need short bursts of text or long paragraphs, you can fine-tune the
            content using the following parameters:
          </p>
          <ul className="list-disc space-y-2 pl-8">
            <li>
              <code>count</code>: Specify the number of text units to generate. Accepts an integer between{' '}
              <code>1</code> and <code>100</code> (default is <code>3</code>).
            </li>
            <li>
              <code>units</code>: Define the type of text unit. Choose between <code>paragraphs</code>,{' '}
              <code>sentences</code>, or <code>words</code>.
            </li>
            <li>
              <code>format</code>: Select the output format. Use <code>plain</code> for raw text strings or{' '}
              <code>html</code> to wrap content in paragraph tags for direct web embedding.
            </li>
          </ul>
          <p>
            These options provide granular control over your placeholder content, ensuring brand consistency and a
            smooth, efficient design process.
          </p>
        </SectionHeader>
      </Container>
    </Section>
  );
}
