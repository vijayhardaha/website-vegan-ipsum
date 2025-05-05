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
  title: "NPM Package",
  description:
    "Generate vegan-themed placeholder text effortlessly in your JavaScript projects using the Vegan Ipsum NPM package.",
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
        title="NPM Package"
        subtitle="Generate vegan-themed placeholder text effortlessly in your JavaScript projects."
      />

      <section aria-labelledby="npm-introduction" role="region" className="mb-10">
        <h2 id="npm-introduction" className="mb-1 text-2xl">
          Introduction
        </h2>
        <div className="space-y-4">
          <p>
            <Link
              href="https://www.npmjs.com/package/vegan-ipsum"
              className="text-primary font-semibold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              vegan-ipsum
            </Link>{" "}
            is a lightweight JavaScript library designed to generate vegan-themed placeholder text.
            Inspired by the popular <code>lorem-ipsum</code> project, this tool is ideal for
            developers and designers seeking ethically themed dummy text with a compassionate twist.
          </p>
          <p>
            Whether you're building a vegan blog, an animal rights project, or simply want to
            replace "lorem ipsum" with meaningful filler, <code>vegan-ipsum</code> is for you.
            Compatible with Node.js, browsers, and React Native.
          </p>
        </div>
      </section>

      <section aria-labelledby="installation" className="mb-10">
        <h2 id="installation" className="mb-1 text-2xl">
          Installation
        </h2>
        <p>
          To install the <code>vegan-ipsum</code> package, run the following command:
        </p>
        <CodeBlock language="bash" aria-label="NPM Installation Command">
          npm install vegan-ipsum
        </CodeBlock>
      </section>

      <section aria-labelledby="usage" className="mb-10">
        <h2 id="usage" className="mb-1 text-2xl">
          Usage
        </h2>
        <div className="space-y-6">
          <div>
            <p>
              <strong>Using the Class</strong>: Import and instantiate the <code>VeganIpsum</code>{" "}
              class to generate text with custom configurations:
            </p>
            <CodeBlock language="javascript" aria-label="Class-based usage example">
              {`import { VeganIpsum } from "vegan-ipsum";

const vegan = new VeganIpsum({
  sentencesPerParagraph: { min: 4, max: 8 },
  wordsPerSentence: { min: 4, max: 16 },
});

vegan.generateWords(1);
vegan.generateSentences(5);
vegan.generateParagraphs(7);`}
            </CodeBlock>
          </div>

          <div>
            <p>
              <strong>Using the Function</strong>: For quick usage, <code>vegan-ipsum</code> also
              supports a functional interface:
            </p>
            <CodeBlock language="javascript" aria-label="Function-based usage example">
              {`import { VeganIpsum } from "vegan-ipsum";

VeganIpsum(); // generates one sentence

VeganIpsum({
  count: 1,
  format: "plain", // "plain" or "html"
  paragraphLowerBound: 3,
  paragraphUpperBound: 7,
  sentenceLowerBound: 5,
  sentenceUpperBound: 15,
  random: Math.random,
  suffix: "\\n",
  units: "sentences", // "words", "sentences", or "paragraphs"
});`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section aria-labelledby="cli" className="mb-10">
        <h2 id="cli" className="mb-1 text-2xl">
          Command Line Interface (CLI)
        </h2>
        <p>
          <code>vegan-ipsum</code> comes with a CLI tool to generate vegan text right from your
          terminal:
        </p>
        <CodeBlock language="bash" aria-label="Global installation command">
          npm install -g vegan-ipsum
        </CodeBlock>
        <p className="mt-4 font-bold">Examples:</p>
        <CodeBlock language="bash" aria-label="CLI usage examples">
          {`vegan-ipsum 2 words
vegan-ipsum 3 sentences
vegan-ipsum 1 paragraph
vegan-ipsum 2 paragraphs --copy
vegan-ipsum 2 paragraphs --format html`}
        </CodeBlock>
      </section>

      <section aria-labelledby="features" className="mb-10">
        <h2 id="features" className="mb-1 text-2xl">
          Features
        </h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Lightweight and dependency-free.</li>
          <li>Supports both CommonJS and ESM.</li>
          <li>Fully customizable output.</li>
          <li>Compatible with Node.js, browsers, and React Native.</li>
          <li>Includes a CLI for quick text generation.</li>
        </ul>
      </section>

      <section aria-labelledby="more-info" className="mb-10">
        <h2 id="more-info" className="mb-1 text-2xl">
          More Info
        </h2>
        <p>
          For advanced configuration or programmatic usage, check out the{" "}
          <Link
            href="https://www.npmjs.com/package/vegan-ipsum"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium underline"
          >
            npm package page
          </Link>
          .
        </p>
      </section>
    </SectionContainer>
  );
}
