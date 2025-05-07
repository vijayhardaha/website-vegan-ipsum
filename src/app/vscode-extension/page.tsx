import React from "react";

import Link from "next/link";

import PageHeader from "@/components/layout/PageHeader";
import SectionContainer from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/button";
import CodeBlock from "@/components/ui/CodeBlock";
import { generateMetadata as genMeta, Metadata } from "@/utils/seoUtils";

/**
 * SEO metadata for the VSCode Extension page.
 * @type {Metadata}
 */
export const metadata: Metadata = genMeta({
  title: "VSCode Extension",
  description:
    "Learn how to install and use the Vegan Ipsum VSCode Extension to generate vegan-themed placeholder text.",
  slug: "vscode-extension",
});

/**
 * Documentation page for the Vegan Ipsum VSCode Extension.
 *
 * @returns {React.JSX.Element} The rendered VSCodeExtensionPage component.
 */
export default function VSCodeExtensionPage(): React.JSX.Element {
  return (
    <SectionContainer>
      <PageHeader
        title="VSCode Extension"
        subtitle="Generate vegan-themed placeholder text directly in your VSCode editor. Learn how to install and use it efficiently."
      />

      <section aria-labelledby="introduction">
        <h2 id="introduction" className="mb-2 text-2xl font-semibold">
          Introduction
        </h2>

        <p>
          The Vegan Ipsum VSCode Extension is a lightweight tool for developers who want to quickly
          insert vegan-themed placeholder text into their code or content files. Whether you’re
          prototyping, designing, or testing, it brings some fun and meaning to your filler content.
        </p>

        <Button asChild size="sm" className="mt-2">
          <Link
            href="https://marketplace.visualstudio.com/items?itemName=vijayhardaha.vegan-ipsum"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Extension on Marketplace
          </Link>
        </Button>
      </section>

      <section aria-labelledby="installation">
        <h2 id="installation" className="mb-2 text-2xl font-semibold">
          Installation
        </h2>

        <p>
          You can install the extension directly from the VSCode Marketplace or using the command
          palette:
        </p>

        <ol className="mt-2 list-decimal space-y-1 pl-6">
          <li>Open Visual Studio Code.</li>
          <li>Navigate to the Extensions panel (Ctrl+Shift+X or Cmd+Shift+X).</li>
          <li>
            Search for <strong>Vegan Ipsum</strong>.
          </li>
          <li>
            Click <strong>Install</strong> to add it to your editor.
          </li>
        </ol>

        <p className="mt-4">Or, use this command in the command palette:</p>
        <CodeBlock language="bash">ext install vegan-ipsum</CodeBlock>
      </section>

      <section aria-labelledby="usage">
        <h2 id="usage" className="mb-2 text-2xl font-semibold">
          Usage
        </h2>

        <p>Once installed, generating text is quick and intuitive:</p>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P).</li>
          <li>
            Search for <strong>Vegan Ipsum</strong>.
          </li>
          <li>Select your preferred output option (e.g., sentence, paragraph).</li>
          <li>The placeholder text is inserted at the current cursor position.</li>
        </ul>
      </section>

      <section aria-labelledby="features">
        <h2 id="features" className="mb-2 text-2xl font-semibold">
          Features
        </h2>

        <ul className="list-disc space-y-1 pl-6">
          <li>Instant generation of vegan-themed text.</li>
          <li>Multiple formats: sentence, paragraph, or word count.</li>
          <li>Simple command-based usage within the VSCode interface.</li>
          <li>Ideal for ethical dev projects or just adding fun to mockups.</li>
        </ul>
      </section>

      <section aria-labelledby="support">
        <h2 id="support" className="mb-2 text-2xl font-semibold">
          Support & Feedback
        </h2>

        <p>
          Found a bug or have a suggestion? Reach out via the{" "}
          <Link
            href="https://marketplace.visualstudio.com/items?itemName=vijayhardaha.vegan-ipsum"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            VSCode Marketplace page
          </Link>{" "}
          or connect on social media. Your feedback helps improve this open-source tool.
        </p>
      </section>
    </SectionContainer>
  );
}
