import { ReactNode } from "react";

import Link from "next/link";

import Container from "@/components/common/Container";
import PageHeader from "@/components/common/PageHeader";
import Section from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import SmartLink from "@/components/common/SmartLink";
import CodeBlock from "@/components/ui/codeblock";
import { buildMetadata } from "@/utils/seo";

/**
 * SEO metadata for the page.
 */
export const metadata = buildMetadata({
	title: "Node CLI",
	description:
		"Generate vegan-themed, plant-based placeholder text right from your terminal with the lightweight Vegan Ipsum Node CLI — perfect for ethical developers and creative coders.",
	slug: "node-cli",
});

/**
 * This component renders the Node CLI page.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function NodeCliPage(): ReactNode {
	return (
		<>
			<PageHeader
				title={
					<>
						Vegan Ipsum <span className="text-primary">Node CLI</span>
					</>
				}
				description="Generate vegan-themed, plant-based placeholder text right from your terminal with the lightweight Vegan Ipsum Node CLI - perfect for ethical developers and creative coders."
				tagline="Lightweight &bull; Terminal-Based &bull; Perfect for Scripting"
			/>

			<Section
				id="introduction"
				aria-label="Introduction to the Vegan Ipsum Node CLI"
				className="pt-8 md:pt-10"
			>
				<Container>
					<SectionHeader heading="Introduction">
						<p>
							The Vegan Ipsum CLI is a lightweight and versatile command-line tool
							built on Node.js that allows developers, designers, and content creators
							to generate vegan-themed placeholder text directly in the terminal.
						</p>
						<p>
							Whether you&apos;re working on plant-based blogs, eco-friendly websites,
							or sustainable product prototypes, this tool offers a quick and fun way
							to add meaningful, ethical placeholder content during development and
							testing phases.
						</p>
						<p>
							It&apos;s ideal for scripting, automation, continuous integration
							workflows, or just spicing up your terminal with delicious vegan ipsum
							whenever you need it.
						</p>
					</SectionHeader>
				</Container>
			</Section>

			<Section
				id="installation"
				aria-label="Installation instructions for the Vegan Ipsum Node CLI"
				className="bg-secondary-muted"
			>
				<Container>
					<SectionHeader heading="Installation">
						<p className="mb-8">
							Install the Vegan Ipsum CLI globally to make the{" "}
							<code>vegan-ipsum</code> command available from any directory in your
							terminal.
						</p>

						<CodeBlock label="Global Install (npm)" language="bash">
							npm install -g vegan-ipsum
						</CodeBlock>

						<p>
							Ensure that <code>Node.js</code> and <code>npm</code> are installed on
							your system before running the command.
						</p>

						<p>After installation, verify that everything is working correctly:</p>

						<CodeBlock label="Verify Installation" language="bash">
							vegan-ipsum --help
						</CodeBlock>
					</SectionHeader>
				</Container>
			</Section>

			<Section id="usage" aria-label="Basic usage instructions for the Vegan Ipsum Node CLI">
				<Container>
					<SectionHeader heading="Basic Usage">
						<p className="mb-8">
							The CLI uses a simple and intuitive command structure. Provide the
							number of text units followed by the unit type you want to generate.
						</p>

						<CodeBlock label="Generate Text Examples" language="bash">
							{`vegan-ipsum 3 sentences
vegan-ipsum 1 paragraph
vegan-ipsum 5 words`}
						</CodeBlock>

						<p>
							By default, the CLI outputs plain text. You can further customize the
							output using optional flags for format and structure.
						</p>

						<p>
							Supported units: <code>words</code>, <code>sentences</code>, and{" "}
							<code>paragraphs</code>.
						</p>
					</SectionHeader>
				</Container>
			</Section>

			<Section
				id="options"
				aria-label="Available CLI options and flags for the Vegan Ipsum Node CLI"
				className="bg-secondary-muted"
			>
				<Container>
					<SectionHeader heading="Options & Flags">
						<p>
							Enhance your CLI experience with the following optional flags. These
							allow you to customize output format, workflow convenience, and access
							help information.
						</p>

						<ul className="list-disc space-y-2 pl-8">
							<li>
								<code>--format html</code> — Outputs generated text wrapped in HTML
								<code>{" <p> "}</code> tags, making it ready for quick web
								prototyping or markup testing.
							</li>

							<li>
								<code>--copy</code> — Automatically copies the generated text to
								your system clipboard for immediate pasting.
							</li>

							<li>
								<code>--help</code> — Displays detailed usage instructions along
								with all available commands and options.
							</li>
						</ul>

						<h3 className="mt-8 mb-2 text-lg">Examples:</h3>

						<CodeBlock label="CLI Examples" language="bash">
							{`vegan-ipsum 2 paragraphs --format html
vegan-ipsum 2 paragraphs --copy`}
						</CodeBlock>
					</SectionHeader>
				</Container>
			</Section>

			<Section
				id="resources"
				aria-label="Tips, best practices, and additional resources for the Vegan Ipsum Node CLI"
			>
				<Container>
					<SectionHeader heading="Tips, Best Practices & Resources">
						<p>
							Get the most out of the Vegan Ipsum CLI by incorporating it into your
							workflow efficiently and exploring additional resources for deeper
							integration.
						</p>

						<h3 className="mt-8 mb-2 text-lg">Tips & Best Practices:</h3>

						<ul className="list-disc space-y-2 pl-8">
							<li>
								Integrate the CLI into shell scripts or automation pipelines to
								dynamically generate placeholder content during builds or testing.
							</li>

							<li>
								Use the <code>--copy</code> flag alongside clipboard managers to
								streamline quick copy-paste workflows.
							</li>

							<li>
								Combine with command-line tools like <code>grep</code>,{" "}
								<code>awk</code>, or <code>sed</code> for advanced text filtering
								and processing.
							</li>

							<li>
								Experiment with different counts and units to produce varied,
								randomized output for mockups and demos.
							</li>

							<li>
								Use the <code>--format html</code> option for rapid web prototyping
								without manually adding markup.
							</li>
						</ul>

						<h3 className="mt-8 mb-2 text-lg">Additional Resources:</h3>

						<p>
							If you want to integrate vegan ipsum programmatically or customize the
							generator further, explore the{" "}
							<Link
								href="/npm-package"
								className="text-primary font-medium underline"
							>
								Vegan Ipsum NPM Package
							</Link>{" "}
							documentation for detailed API references and usage examples.
						</p>

						<p>
							You can also visit the{" "}
							<SmartLink
								href="https://www.npmjs.com/package/vegan-ipsum"
								className="text-primary underline"
								aria-label="Official Vegan Ipsum NPM package page"
							>
								official npm package page
							</SmartLink>{" "}
							to view installation statistics, version history, and community
							feedback.
						</p>

						<p>
							For bug reports, feature requests, or contributions, visit the GitHub
							repository linked on the npm page.
						</p>
					</SectionHeader>
				</Container>
			</Section>
		</>
	);
}
