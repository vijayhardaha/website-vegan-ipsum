import { ReactNode } from "react";

import {
	FcPuzzle,
	FcWorkflow,
	FcSettings,
	FcGlobe,
	FcCommandLine,
	FcBiomass,
} from "react-icons/fc";
import { LiaSketch } from "react-icons/lia";

import Container from "@/components/common/Container";
import PageHeader from "@/components/common/PageHeader";
import Section from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import SmartLink from "@/components/common/SmartLink";
import CodeBlock from "@/components/ui/codeblock";
import { buildMetadata } from "@/utils/seo";

/**
 * SEO metadata for the NPM Package page.
 */
export const metadata = buildMetadata({
	title: "NPM Package",
	description:
		"Effortlessly generate plant-based, vegan-themed placeholder text in your JavaScript projects with the Vegan Ipsum NPM package - ideal for ethical developers.",
	slug: "npm-package",
});

/**
 * This component renders the NPM Package page.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function NpmPackagePage(): ReactNode {
	return (
		<>
			<PageHeader
				title={
					<>
						Vegan Ipsum <span className="text-primary">NPM Package</span>
					</>
				}
				description="Generate vegan-themed placeholder text effortlessly in your JavaScript projects."
				tagline="Lightweight &bull; Developer-Friendly &bull; ESM & CommonJS Support"
			/>

			<Section
				id="introduction"
				aria-label="Introduction to the Vegan Ipsum NPM Package"
				className="pt-8 md:pt-10"
			>
				<Container>
					<SectionHeader heading="Introduction">
						<p>
							<SmartLink
								href="https://www.npmjs.com/package/vegan-ipsum"
								className="text-primary underline"
								aria-label="Vegan Ipsum NPM package page"
							>
								vegan-ipsum
							</SmartLink>{" "}
							is a lightweight and flexible JavaScript library for generating
							vegan-themed placeholder text, providing a meaningful alternative to
							traditional <code>lorem-ipsum</code> dummy text.
						</p>

						<p>
							Designed for developers, designers, and content creators, this package
							allows you to add ethically inspired, plant-based filler text to your
							projects, whether you&apos;re building vegan blogs, environmental
							websites, or apps promoting compassionate living.
						</p>

						<p>
							The library supports multiple environments, including Node.js, modern
							browsers, and React Native, making it versatile and easy to integrate in
							a variety of JavaScript workflows.
						</p>
					</SectionHeader>
				</Container>
			</Section>

			<Section
				id="installation"
				aria-label="Installation instructions for the Vegan Ipsum NPM package"
				className="bg-secondary-muted"
			>
				<Container>
					<SectionHeader heading="Installation">
						<p>
							Install <code>vegan-ipsum</code> using your preferred package manager.
							You can install it locally (recommended for most projects) or globally
							if you want to use it as a CLI tool.
						</p>

						<h3 className="mt-8 mb-2 text-lg">Local Installation</h3>
						<p>
							Adds <code>vegan-ipsum</code> to your project&apos;s dependencies.
						</p>

						<CodeBlock label="npm" language="bash">
							npm install vegan-ipsum
						</CodeBlock>

						<CodeBlock label="Yarn" language="bash">
							yarn add vegan-ipsum
						</CodeBlock>

						<CodeBlock label="pnpm" language="bash">
							pnpm add vegan-ipsum
						</CodeBlock>

						<h3 className="mt-12 mb-2 text-lg">Global Installation</h3>
						<p>
							Installs the package globally so you can use it from the command line
							anywhere on your system.
						</p>

						<CodeBlock label="npm (global)" language="bash">
							npm install -g vegan-ipsum
						</CodeBlock>
					</SectionHeader>
				</Container>
			</Section>

			<Section
				id="usage"
				aria-label="Usage instructions and examples for the Vegan Ipsum NPM package"
			>
				<Container>
					<SectionHeader heading="Usage">
						<p>
							After installation, you can import <code>vegan-ipsum</code> into your
							JavaScript or TypeScript project to generate plant-based placeholder
							text programmatically.
						</p>

						<p>The package supports two usage styles:</p>

						<ul className="list-disc space-y-2 pl-8">
							<li>
								<strong>Class-based API</strong>: ideal when you need structured,
								reusable configuration.
							</li>
							<li>
								<strong>Functional API</strong>: perfect for quick, inline text
								generation.
							</li>
						</ul>

						<h3 className="mt-8 mb-2 text-lg">Class-Based Usage:</h3>
						<p>
							Import the <code>VeganIpsum</code> class and create an instance with
							configuration options. This gives you fine-grained control over sentence
							length, paragraph structure, and output style.
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
							Use this approach when you need consistent formatting across multiple
							calls or want full control over how the text is structured.
						</p>

						<h3 className="mt-8 mb-2 text-lg">Functional Usage:</h3>
						<p>
							For quick and simple use cases, call the default exported function. It
							generates text immediately and accepts an options object for
							customization.
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
							This form is best for one-off calls, CLI usage, or situations where you
							don&apos;t need to maintain a reusable instance.
						</p>

						<h3 className="mt-8 mb-2 text-lg">Learn More:</h3>

						<p>
							For complete API documentation, advanced configuration options, and
							contribution guidelines, visit the official{" "}
							<SmartLink
								href="https://www.npmjs.com/package/vegan-ipsum"
								className="text-primary underline"
								aria-label="Vegan Ipsum NPM package page"
							>
								npm package page
							</SmartLink>
							.
						</p>

						<p>
							You can also explore the GitHub repository linked from the npm page to
							review the source code, report issues, request features, or submit pull
							requests.
						</p>
					</SectionHeader>
				</Container>
			</Section>

			<Section
				id="features"
				aria-label="Features of the Vegan Ipsum NPM Package"
				className="bg-secondary-muted"
			>
				<Container>
					<SectionHeader
						heading="Features"
						tagline="Why Choose Vegan Ipsum?"
						icon={<LiaSketch className="h-4 w-4" />}
					>
						<p>
							Vegan Ipsum is designed to be simple, fast, and flexible. Whether
							you&apos;re building web apps, Node.js services, or CLI tools, it gives
							you clean, customizable placeholder text without unnecessary complexity.
						</p>

						<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
							{[
								{
									icon: <FcPuzzle />,
									heading: "Zero Dependencies",
									content:
										"Extremely lightweight and dependency-free, keeping your bundle size small and your project fast.",
								},
								{
									icon: <FcWorkflow />,
									heading: "CommonJS & ES Module Support",
									content:
										"Works seamlessly with both require() and import syntax, making it compatible with modern and legacy setups.",
								},
								{
									icon: <FcSettings />,
									heading: "Fully Customizable Output",
									content:
										"Control sentence length, paragraph size, formatting style, and output type to match your exact content needs.",
								},
								{
									icon: <FcGlobe />,
									heading: "Runs Everywhere",
									content:
										"Compatible with Node.js, browsers, and React Native, so you can generate text in virtually any JavaScript environment.",
								},
								{
									icon: <FcCommandLine />,
									heading: "Built-in CLI Support",
									content:
										"Generate vegan placeholder text directly from your terminal with a simple and intuitive command-line interface.",
								},
								{
									icon: <FcBiomass />,
									heading: "Ethically Themed Content",
									content:
										"Perfect for plant-based, sustainable, and ethical projects that want placeholder text aligned with their values.",
								},
							].map((feature, index) => (
								<div
									key={index}
									className="border-border relative rounded-2xl border bg-white p-6 shadow-md transition-shadow hover:shadow-lg md:p-8"
								>
									<h3 className="mb-2 flex items-center gap-2 text-lg">
										<span className="relative top-0.5 text-xl">
											{feature.icon}
										</span>{" "}
										{feature.heading}
									</h3>
									<p className="text-sm leading-relaxed">{feature.content}</p>
								</div>
							))}
						</div>
					</SectionHeader>
				</Container>
			</Section>
		</>
	);
}
