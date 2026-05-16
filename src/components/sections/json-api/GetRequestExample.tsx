import type { JSX } from 'react';

import SectionHeader from '@/components/composites/SectionHeader';
import Section from '@/components/layout/Section';
import CodeBlock from '@/components/primitives/CodeBlock';
import Container from '@/components/primitives/Container';
import RevealOnScroll from '@/components/primitives/RevealOnScroll';
import { getPermaLink } from '@/utils/seo';

/**
 * This component provides an example of how to make a GET request to the Vegan Ipsum JSON API.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function GetRequestExample(): JSX.Element {
  // Base URL for the API
  const API_BASE_URL = getPermaLink('api');

  return (
    <Section
      id="get-request-example"
      aria-label="GET request example for the Vegan Ipsum JSON API"
      className="bg-secondary-muted"
    >
      <Container>
        <SectionHeader
          heading={
            <>
              GET Request <em className="text-primary">Example</em>
            </>
          }
          tagline="Query Strings"
          number={5}
        >
          <RevealOnScroll delay={0}>
            <p className="mb-8">
              When using <code>GET</code> requests, parameters are appended to the URL as query strings. The following
              examples demonstrate how to fetch specific amounts and formats of plant-based placeholder text using
              standard tools and libraries.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <CodeBlock label="Browser / URL" language="bash">
              {`# Retrieve 2 paragraphs of plain text
${API_BASE_URL}?count=2&units=paragraphs&format=plain`}
            </CodeBlock>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <CodeBlock
              label="cURL"
              language="bash"
            >{`curl "${API_BASE_URL}?count=3&units=sentences&format=html"`}</CodeBlock>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <CodeBlock label="JavaScript (fetch)" language="javascript">
              {`const res = await fetch('${API_BASE_URL}?count=3&units=sentences&format=plain');
const data = await res.json();
console.log(data.text);`}
            </CodeBlock>
          </RevealOnScroll>
        </SectionHeader>
      </Container>
    </Section>
  );
}
