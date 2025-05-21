import React from "react";

import Link from "next/link";

import PageHeader from "@/components/layout/PageHeader";
import SectionContainer from "@/components/layout/SectionContainer";
import CodeBlock from "@/components/ui/CodeBlock";
import { generateMetadata as genMeta, Metadata } from "@/utils/seoUtils";

/**
 * SEO metadata for the NPM Package page.
 * @type {Metadata}
 */
export const metadata: Metadata = genMeta({
  title: "Vegan Ipsum NPM Package",
  description:
    "Effortlessly generate plant-based, vegan-themed placeholder text in your JavaScript projects with the Vegan Ipsum NPM package — ideal for ethical developers.",
  slug: "npm-package",
});

/**
 * The main page for the Vegan Ipsum NPM Package documentation.
 *
 * @returns {React.JSX.Element} The rendered NpmPackagePage component.
 */
export default function NpmPackagePage(): React.JSX.Element {
  return (
    <SectionContainer>
      <PageHeader
        title="Vegan Ipsum NPM Package"
        subtitle="Generate vegan-themed placeholder text effortlessly in your JavaScript projects."
      />

      <section aria-labelledby="introduction" className="mb-8">
        <h2 id="introduction" className="mb-2 text-2xl">
          Introduction
        </h2>
        <div className="space-y-4">
          <p>
            <Link
              href="https://www.npmjs.com/package/vegan-ipsum"
              className="text-primary underline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vegan Ipsum NPM package page"
            >
              vegan-ipsum
            </Link>{" "}
            is a lightweight and flexible JavaScript library for generating vegan-themed placeholder text, providing a
            meaningful alternative to traditional <code>lorem-ipsum</code> dummy text.
          </p>
          <p>
            Designed for developers, designers, and content creators, this package allows you to add ethically inspired,
            plant-based filler text to your projects, whether you're building vegan blogs, environmental websites, or
            apps promoting compassionate living.
          </p>
          <p>
            The library supports multiple environments, including Node.js, modern browsers, and React Native, making it
            versatile and easy to integrate in a variety of JavaScript workflows.
          </p>
        </div>
      </section>

      <section aria-labelledby="installation" className="mb-8">
        <h2 id="installation" className="mb-2 text-2xl">
          Installation
        </h2>
        <p>
          To add <code>vegan-ipsum</code> to your project, use the following npm command. It installs the package
          locally to your project directory:
        </p>
        <CodeBlock language="bash">npm install vegan-ipsum</CodeBlock>
        <p className="text-muted-foreground mt-2 text-sm">
          You can also use <code>yarn add vegan-ipsum</code> if you prefer Yarn as your package manager.
        </p>
      </section>

      <section aria-labelledby="usage" role="region">
        <h2 id="usage" className="mb-2 text-2xl">
          Usage
        </h2>
        <div className="space-y-8">
          <div>
            <p>
              <strong>Class-based usage:</strong> Import the <code>VeganIpsum</code> class and create an instance to
              generate placeholder text with custom configuration for sentence and paragraph lengths.
            </p>
            <CodeBlock language="javascript">
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
            <p className="text-muted-foreground mt-2 text-sm">
              This approach gives you fine-grained control over text structure and output style.
            </p>
          </div>

          <div>
            <p>
              <strong>Functional interface:</strong> For quick and simple needs, use the default exported function to
              generate vegan ipsum text with customizable options passed as an object.
            </p>
            <CodeBlock language="javascript">
              {`import { VeganIpsum } from "vegan-ipsum";

// Generates one sentence by default
const sentence = VeganIpsum();

// Generates 1 plain text sentence with custom bounds and units
const customText = VeganIpsum({
  count: 1,
  format: "plain",        // "plain" or "html"
  paragraphLowerBound: 3,
  paragraphUpperBound: 7,
  sentenceLowerBound: 5,
  sentenceUpperBound: 15,
  random: Math.random,
  suffix: "\\n",
  units: "sentences",     // "words", "sentences", or "paragraphs"
});

console.log(customText);`}
            </CodeBlock>
            <p className="text-muted-foreground mt-2 text-sm">
              This functional form is perfect for quick inline text generation or one-off calls.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="cli" role="region">
        <h2 id="cli" className="mb-2 text-2xl">
          Command Line Interface (CLI)
        </h2>
        <p>
          Along with the JavaScript API, <code>vegan-ipsum</code> includes a handy CLI tool that allows you to generate
          vegan placeholder text directly from your terminal or shell scripts.
        </p>
        <p>Install the CLI globally with npm:</p>
        <CodeBlock language="bash">npm install -g vegan-ipsum</CodeBlock>
        <p className="mt-4 font-bold">CLI Usage Examples:</p>
        <CodeBlock language="bash">
          {`vegan-ipsum 2 words
vegan-ipsum 3 sentences
vegan-ipsum 1 paragraph
vegan-ipsum 2 paragraphs --copy
vegan-ipsum 2 paragraphs --format html`}
        </CodeBlock>
        <p className="mt-2">
          Use the <code>--copy</code> flag to automatically copy output to your clipboard or <code>--format html</code>{" "}
          to generate HTML formatted paragraphs.
        </p>
      </section>

      <section aria-labelledby="features" role="region">
        <h2 id="features" className="mb-2 text-2xl">
          Features
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Extremely lightweight with zero dependencies for fast performance.</li>
          <li>Supports both CommonJS and ES Module import styles for broad compatibility.</li>
          <li>Fully customizable output parameters for tailored text generation.</li>
          <li>Compatible across Node.js, browser environments, and React Native applications.</li>
          <li>Includes a user-friendly CLI for quick terminal-based text generation.</li>
          <li>Ethically themed text that supports vegan and plant-based content projects.</li>
        </ul>
      </section>

      <section aria-labelledby="more-info" role="region">
        <h2 id="more-info" className="mb-2 text-2xl">
          More Information
        </h2>
        <p>
          For detailed API documentation, advanced configuration options, and contribution guidelines, visit the
          official{" "}
          <Link
            href="https://www.npmjs.com/package/vegan-ipsum"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium underline"
            aria-label="Vegan Ipsum NPM package page"
          >
            npm package page
          </Link>
          .
        </p>
        <p>
          You can also check the GitHub repository linked on the npm page for source code, issue tracking, and to submit
          pull requests.
        </p>
      </section>
    </SectionContainer>
  );
}
