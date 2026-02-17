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
	title: "Vegan Ipsum Node CLI",
	description:
		"Generate vegan-themed, plant-based placeholder text right from your terminal with the lightweight Vegan Ipsum Node CLI — perfect for ethical developers and creative coders.",
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
				title="Vegan Ipsum Node CLI"
				subtitle="Use our Node.js CLI tool to generate vegan-themed placeholder text directly from your terminal."
			/>

			<section aria-labelledby="introduction">
				<h2 id="introduction" className="mb-2 text-2xl">
					Introduction
				</h2>
				<p>
					The Vegan Ipsum CLI is a lightweight and versatile command-line tool built on
					Node.js that allows developers, designers, and content creators to generate
					vegan-themed placeholder text directly in the terminal.
				</p>
				<p>
					Whether you’re working on plant-based blogs, eco-friendly websites, or
					sustainable product prototypes, this tool offers a quick and fun way to add
					meaningful, ethical placeholder content during development and testing phases.
				</p>
				<p>
					It’s ideal for scripting, automation, continuous integration workflows, or just
					spicing up your terminal with delicious vegan ipsum whenever you need it.
				</p>
			</section>

			<section aria-labelledby="installation">
				<h2 id="installation" className="mb-2 text-2xl">
					Installation
				</h2>
				<p>
					To get started, install the Vegan Ipsum CLI globally using <code>npm</code>.
					This will make the command available across your system, so you can run it from
					any directory in your terminal.
				</p>
				<CodeBlock language="bash">npm install -g vegan-ipsum</CodeBlock>
				<p className="text-muted-foreground mt-2 text-sm">
					Make sure you have <code>Node.js</code> and <code>npm</code> installed on your
					system before running the installation.
				</p>
			</section>

			<section aria-labelledby="usage">
				<h2 id="usage" className="mb-2 text-2xl">
					Basic Usage
				</h2>
				<p>
					The command syntax is simple and intuitive. Use the <code>vegan-ipsum</code>{" "}
					command followed by the number of text units you want to generate and the unit
					type:
				</p>
				<CodeBlock language="bash">
					{`vegan-ipsum 3 sentences
vegan-ipsum 1 paragraph
vegan-ipsum 5 words`}
				</CodeBlock>
				<p className="mt-2">
					By default, the CLI outputs plain text paragraphs. You can customize the units
					and format with flags as described below.
				</p>
			</section>

			<section aria-labelledby="options">
				<h2 id="options" className="mb-2 text-2xl">
					Options & Flags
				</h2>
				<p>Enhance your CLI experience by using these helpful options and flags:</p>
				<ul className="list-disc space-y-2 pl-6">
					<li>
						<code>--format html</code>: Outputs vegan ipsum wrapped in HTML paragraph
						tags, ideal for quick web prototyping.
					</li>
					<li>
						<code>--copy</code>: Automatically copies the generated text to your system
						clipboard for easy pasting.
					</li>
					<li>
						<code>--help</code>: Displays detailed usage instructions and all available
						commands and options.
					</li>
				</ul>
				<p className="mt-4">Examples:</p>
				<CodeBlock language="bash">
					{`vegan-ipsum 2 paragraphs --format html
vegan-ipsum 2 paragraphs --copy`}
				</CodeBlock>
			</section>

			<section aria-labelledby="tips">
				<h2 id="tips" className="mb-2 text-2xl">
					Tips & Best Practices
				</h2>
				<ul className="list-disc space-y-2 pl-6">
					<li>
						Incorporate the CLI into shell scripts or automation pipelines to generate
						placeholder content dynamically during builds.
					</li>
					<li>
						Use the <code>--copy</code> flag in combination with clipboard managers to
						streamline copy-paste workflows.
					</li>
					<li>
						Combine with other command-line utilities such as <code>grep</code>,{" "}
						<code>awk</code>, or <code>sed</code> for advanced text processing.
					</li>
					<li>
						Try running the command with varying counts for creative, randomized text
						output every time.
					</li>
					<li>
						Use the HTML output format for rapid prototyping of web pages without extra
						markup work.
					</li>
				</ul>
			</section>

			<section aria-labelledby="more-info">
				<h2 id="more-info" className="mb-2 text-2xl">
					More Information & Resources
				</h2>
				<p>
					For developers looking to integrate vegan ipsum text programmatically or
					customize the generator further, check out the{" "}
					<Link href="/npm-package" className="text-primary font-medium underline">
						Vegan Ipsum NPM Package
					</Link>{" "}
					documentation, which provides comprehensive API details and usage examples.
				</p>
				<p>
					You can also visit the{" "}
					<Link
						href="https://www.npmjs.com/package/vegan-ipsum"
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary font-medium underline"
						aria-label="Vegan Ipsum NPM package page"
					>
						official npm package page
					</Link>{" "}
					for installation stats, version history, and community reviews.
				</p>
				<p>
					For bug reports, feature requests, or contributing, visit our GitHub repository
					linked from the npm page.
				</p>
			</section>
		</SectionContainer>
	);
}
