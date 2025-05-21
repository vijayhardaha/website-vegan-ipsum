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
  title: "Vegan Ipsum VSCode Extension",
  description:
    "Install and use the Vegan Ipsum VSCode Extension to quickly generate plant-based, vegan-themed placeholder text in your code editor.",
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
        title="Vegan Ipsum VSCode Extension"
        subtitle="Generate vegan-themed placeholder text directly in your VSCode editor. Learn how to install and use it efficiently."
      />

      <section aria-labelledby="introduction" role="region">
        <h2 id="introduction" className="mb-2 text-2xl">
          Introduction
        </h2>

        <p>
          The <strong>Vegan Ipsum VSCode Extension</strong> is a lightweight and intuitive tool designed for developers,
          designers, and content creators who want to quickly insert vegan-themed placeholder text directly within their
          Visual Studio Code editor.
        </p>
        <p>
          Whether you’re prototyping a website, building a vegan blog, or simply adding ethical and meaningful filler
          content to mockups and drafts, this extension brings compassion and fun to your development workflow without
          leaving your editor.
        </p>
        <p>
          This extension seamlessly integrates with VSCode’s Command Palette and supports multiple output formats to
          suit a variety of use cases.
        </p>

        <Button asChild size="sm" className="mt-4">
          <Link
            href="https://marketplace.visualstudio.com/items?itemName=vijayhardaha.vegan-ipsum"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vegan Ipsum VSCode Extension Marketplace page"
          >
            View Extension on Marketplace
          </Link>
        </Button>
      </section>

      <section aria-labelledby="installation" role="region">
        <h2 id="installation" className="mb-2 text-2xl">
          Installation
        </h2>

        <p>You can easily add the Vegan Ipsum extension to your VSCode setup in two ways:</p>

        <ol className="mt-2 list-decimal space-y-1 pl-6">
          <li>Open Visual Studio Code on your machine.</li>
          <li>
            Navigate to the Extensions sidebar panel (use shortcut <code>Ctrl+Shift+X</code> on Windows/Linux or{" "}
            <code>Cmd+Shift+X</code> on macOS).
          </li>
          <li>
            Type <strong>Vegan Ipsum</strong> into the search bar.
          </li>
          <li>
            Click the <strong>Install</strong> button on the Vegan Ipsum extension card.
          </li>
          <li>Reload or restart VSCode if prompted to activate the extension.</li>
        </ol>

        <p className="mt-4">Alternatively, install directly using the Command Palette:</p>
        <CodeBlock language="bash">ext install vegan-ipsum</CodeBlock>
        <p className="text-muted-foreground mt-2 text-sm">
          This command will trigger installation without navigating away from your editor.
        </p>
      </section>

      <section aria-labelledby="usage" role="region">
        <h2 id="usage" className="mb-2 text-2xl">
          Usage
        </h2>

        <p>Once installed, generating vegan-themed placeholder text is quick and straightforward:</p>

        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>
            Open the Command Palette by pressing <code>Ctrl+Shift+P</code> (Windows/Linux) or <code>Cmd+Shift+P</code>{" "}
            (macOS).
          </li>
          <li>
            Type <strong>Vegan Ipsum</strong> to see available commands.
          </li>
          <li>
            Select the command corresponding to the amount or type of text you want to insert, such as “Insert Vegan
            Ipsum Sentence” or “Insert Vegan Ipsum Paragraph.”
          </li>
          <li>
            The vegan-themed placeholder text will be automatically inserted at your current cursor position within the
            active editor window.
          </li>
        </ul>

        <p className="text-muted-foreground mt-4 text-sm">
          You can use this in any text-based file type — HTML, Markdown, JSON, JavaScript, or even plain text — making
          it versatile for many workflows.
        </p>
      </section>

      <section aria-labelledby="features" role="region">
        <h2 id="features" className="mb-2 text-2xl">
          Features
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Instant generation of vegan-themed placeholder text without leaving your code editor.</li>
          <li>Choose from different text units: words, sentences, or paragraphs to match your specific needs.</li>
          <li>Simple, command-based interface that integrates naturally with VSCode workflows.</li>
          <li>
            Supports insertion in any text-based file format — perfect for web development, content writing, and design
            mockups.
          </li>
          <li>Lightweight and fast with no impact on your editor’s performance.</li>
          <li>Ideal for ethically themed projects or simply to add a meaningful twist to your placeholder content.</li>
        </ul>
      </section>

      <section aria-labelledby="support" role="region">
        <h2 id="support" className="mb-2 text-2xl">
          Support & Feedback
        </h2>

        <p>
          If you encounter any issues, bugs, or have feature requests, your feedback is invaluable! Please visit the{" "}
          <Link
            href="https://marketplace.visualstudio.com/items?itemName=vijayhardaha.vegan-ipsum"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
            aria-label="Vegan Ipsum VSCode Extension Marketplace page"
          >
            VSCode Marketplace page
          </Link>{" "}
          to submit issues or read community discussions.
        </p>
        <p>
          You can also connect with the developer community on social media or GitHub, where ongoing development and
          improvements are actively maintained.
        </p>
      </section>
    </SectionContainer>
  );
}
