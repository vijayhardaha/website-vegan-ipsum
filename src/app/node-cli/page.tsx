import React from "react";

import Link from "next/link";

import PageHeader from "@/components/layout/PageHeader";
import SectionContainer from "@/components/layout/SectionContainer";
import CodeBlock from "@/components/ui/CodeBlock";
import { generateMetadata as genMeta, Metadata } from "@/utils/seoUtils";

/**
 * SEO metadata for the Node CLI page.
 * @type {Metadata}
 */
export const metadata: Metadata = genMeta({
  title: "Node CLI",
  description:
    "Learn how to use the Vegan Ipsum Node CLI to generate vegan-themed placeholder text directly from your terminal.",
  slug: "node-cli",
});

/**
 * The main page for the Vegan Ipsum Node CLI documentation.
 *
 * @returns {React.JSX.Element} The rendered NodeCliPage component.
 */
export default function NodeCliPage(): React.JSX.Element {
  return (
    <SectionContainer>
      <PageHeader
        title="Node CLI"
        subtitle="Use our Node.js CLI tool to generate vegan-themed placeholder text directly from your terminal."
      />

      <section aria-labelledby="cli-introduction" role="region">
        <h2 id="cli-introduction" className="mb-1 text-2xl">
          Introduction
        </h2>
        <p>
          The Vegan Ipsum CLI is a powerful Node.js command-line utility that generates vegan-themed
          placeholder text. Ideal for scripting, automation, or simply fun terminal outputs, this
          tool provides quick and flexible access to ethical ipsum content.
        </p>
      </section>

      <section aria-labelledby="installation">
        <h2 id="installation" className="mb-1 text-2xl">
          Installation
        </h2>
        <p>Install it globally via npm to use it anywhere from the command line:</p>
        <CodeBlock language="bash" aria-label="CLI Installation Command">
          npm install -g vegan-ipsum
        </CodeBlock>
      </section>

      <section aria-labelledby="usage">
        <h2 id="usage" className="mb-1 text-2xl">
          Basic Usage
        </h2>
        <p>The syntax is simple. Run the command followed by the number and unit of text:</p>
        <CodeBlock language="bash" aria-label="More examples">
          {`vegan-ipsum 3 sentences
vegan-ipsum 1 paragraph
vegan-ipsum 5 words`}
        </CodeBlock>
      </section>

      <section aria-labelledby="options">
        <h2 id="options" className="mb-1 text-2xl">
          Options & Flags
        </h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            <code>--format html</code>: Output HTML paragraphs.
          </li>
          <li>
            <code>--copy</code>: Automatically copy the generated output to your clipboard.
          </li>
          <li>
            <code>--help</code>: Show all available commands and usage options.
          </li>
        </ul>
        <CodeBlock language="bash" aria-label="CLI flags examples">
          {`vegan-ipsum 2 paragraphs --format html
vegan-ipsum 2 paragraphs --copy`}
        </CodeBlock>
      </section>

      <section aria-labelledby="tips">
        <h2 id="tips" className="mb-1 text-2xl">
          Tips
        </h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Use it in shell scripts to populate test data for vegan projects.</li>
          <li>Combine with clipboard managers or piping commands for custom workflows.</li>
          <li>Try random counts for varied output each time.</li>
        </ul>
      </section>

      <section aria-labelledby="more-info">
        <h2 id="more-info" className="mb-1 text-2xl">
          More Info
        </h2>
        <p>
          For advanced configuration or programmatic usage, check out the{" "}
          <Link href="/npm-package" className="text-primary font-medium underline">
            NPM Package
          </Link>{" "}
          documentation or visit the{" "}
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
