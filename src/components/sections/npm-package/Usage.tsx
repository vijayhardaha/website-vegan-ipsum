import type { JSX } from 'react';

import SectionHeader from '@/components/composites/SectionHeader';
import SmartLink from '@/components/composites/SmartLink';
import Section from '@/components/layout/Section';
import CodeBlock from '@/components/primitives/CodeBlock';
import Container from '@/components/primitives/Container';

/**
 * This component renders the usage section for the NPM Package page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Usage(): JSX.Element {
  return (
    <Section id="usage" aria-label="Usage instructions and examples for the Vegan Ipsum NPM package">
      <Container>
        <SectionHeader
          heading={
            <>
              Library <span className="text-primary">Usage</span>
            </>
          }
          tagline="Programmatic Generation"
          icon="code"
        >
          <p>
            After installation, you can import <code>vegan-ipsum</code> into your{' '}
            <SmartLink
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              aria-label="Learn more about JavaScript"
            >
              JavaScript
            </SmartLink>{' '}
            or{' '}
            <SmartLink href="https://www.typescriptlang.org/docs/" aria-label="Learn more about TypeScript">
              TypeScript
            </SmartLink>{' '}
            project to generate plant-based placeholder text programmatically.
          </p>

          <p>The package supports two usage styles:</p>

          <ul className="list-disc space-y-2 pl-8">
            <li>
              <strong>Class-based API</strong>: ideal when you need structured, reusable configuration.
            </li>
            <li>
              <strong>Functional API</strong>: perfect for quick, inline text generation.
            </li>
          </ul>

          <h3 className="mt-8 mb-2 text-lg">Class-Based Usage:</h3>
          <p>
            Import the <code>VeganIpsum</code> class and create an instance with configuration options. This gives you
            fine-grained control over sentence length, paragraph structure, and output style.
          </p>

          <CodeBlock label="Javascript - Class-Based Usage" language="javascript">
            {`import { VeganIpsum } from "vegan-ipsum";

const vegan = new VeganIpsum({
  sentencesPerParagraph: { min: 4, max: 8 },
  wordsPerSentence: { min: 4, max: 16 },
});

// Generate one word
console.log(vegan.generateWords(1));

// Generate five sentences
console.log(vegan.generateSentences(5));

// Generate seven paragraphs
console.log(vegan.generateParagraphs(7));`}
          </CodeBlock>

          <p>
            Use this approach when you need consistent formatting across multiple calls or want full control over how
            the text is structured.
          </p>

          <h3 className="mt-8 mb-2 text-lg">Functional Usage:</h3>
          <p>
            For quick and simple use cases, call the default exported function. It generates text immediately and
            accepts an options object for customization.
          </p>

          <CodeBlock label="Javascript - Functional Usage" language="javascript">
            {`import { VeganIpsum } from "vegan-ipsum";

// Generates one sentence by default
const sentence = VeganIpsum();

// Generates custom text with advanced options
const customText = VeganIpsum({
  count: 1,
  format: "plain",        // "plain" or "html"
  paragraphLowerBound: 3,
  paragraphUpperBound: 7,
  sentenceLowerBound: 5,
  sentenceUpperBound: 15,
  random: Math.random,
  units: "sentences",     // "words", "sentences", or "paragraphs"
});

console.log(customText);`}
          </CodeBlock>

          <p>
            This form is best for one-off calls, CLI usage, or situations where you don&apos;t need to maintain a
            reusable instance.
          </p>

          <h3 className="mt-8 mb-2 text-lg">Resources & Documentation</h3>

          <p>
            For comprehensive API documentation and advanced configuration options, visit the official{' '}
            <SmartLink
              href="https://www.npmjs.com/package/vegan-ipsum"
              aria-label="View vegan-ipsum package details on npm"
            >
              vegan-ipsum npm package page
            </SmartLink>
            . If you are new to open source, we recommend reading the{' '}
            <SmartLink
              href="https://opensource.guide/how-to-contribute/"
              aria-label="Learn about contributing to open source projects"
            >
              contribution guidelines
            </SmartLink>{' '}
            before getting started.
          </p>

          <p>
            Developers are encouraged to explore the{' '}
            <SmartLink
              href="https://github.com/vijayhardaha/node-vegan-ipsum"
              aria-label="View node-vegan-ipsum source code on GitHub"
            >
              GitHub repository
            </SmartLink>{' '}
            to inspect the source code. If you encounter any bugs or have suggestions for improvements, please{' '}
            <SmartLink
              href="https://github.com/vijayhardaha/node-vegan-ipsum/issues/new"
              aria-label="Report an issue or bug"
            >
              report an issue
            </SmartLink>{' '}
            or{' '}
            <SmartLink
              href="https://github.com/vijayhardaha/node-vegan-ipsum/issues"
              aria-label="Request a new feature"
            >
              request a feature
            </SmartLink>
            . Community contributions via{' '}
            <SmartLink href="https://github.com/vijayhardaha/node-vegan-ipsum/pulls" aria-label="Submit a pull request">
              pull requests
            </SmartLink>{' '}
            are also welcome.
          </p>
        </SectionHeader>
      </Container>
    </Section>
  );
}
