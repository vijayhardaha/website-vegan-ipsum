import { ReactNode } from "react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import SmartLink from "@/components/common/SmartLink";
import CodeBlock from "@/components/primitives/codeblock";

/**
 * This component renders the usage section for the NPM Package page.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function Usage(): ReactNode {
	return (
		<Section
			id="usage"
			aria-label="Usage instructions and examples for the Vegan Ipsum NPM package"
		>
			<Container>
				<SectionHeader heading="Usage">
					<p>
						After installation, you can import <code>vegan-ipsum</code> into your
						JavaScript or TypeScript project to generate plant-based placeholder text
						programmatically.
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
						Use this approach when you need consistent formatting across multiple calls
						or want full control over how the text is structured.
					</p>

					<h3 className="mt-8 mb-2 text-lg">Functional Usage:</h3>
					<p>
						For quick and simple use cases, call the default exported function. It
						generates text immediately and accepts an options object for customization.
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
	);
}
