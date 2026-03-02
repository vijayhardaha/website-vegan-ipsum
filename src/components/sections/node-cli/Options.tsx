import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import SmartLink from "@/components/composites/SmartLink";
import Section from "@/components/layout/Section";
import CodeBlock from "@/components/primitives/CodeBlock";
import Container from "@/components/primitives/Container";

/**
 * This component renders the options and flags section for the Node CLI page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Options(): JSX.Element {
	return (
		<Section
			id="options"
			aria-label="Available CLI options and flags for the Vegan Ipsum Node CLI"
			className="bg-secondary-muted"
		>
			<Container>
				<SectionHeader
					heading={
						<>
							Options &{" "}
							<span className="text-primary">Flags</span>
						</>
					}
					tagline="CLI Parameters"
					icon="toggleOn"
				>
					<p>
						Customize your workflow using the following optional
						flags. These options allow you to modify the output
						format, streamline copy-paste actions, and access
						command documentation.
					</p>
					<ul className="list-disc space-y-2 pl-8">
						<li>
							<code>--format html</code>: Wraps the generated
							output in HTML{" "}
							<SmartLink
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p"
								aria-label="Learn more about the HTML paragraph tag on MDN"
							>
								paragraph tags
							</SmartLink>
							, making it ready for immediate use in web
							prototyping.
						</li>

						<li>
							<code>--copy</code>: Automatically sends the
							generated text to your system clipboard,
							streamlining your workflow by eliminating manual
							copying.
						</li>

						<li>
							<code>--help</code>: Displays comprehensive usage
							instructions and a complete list of available
							commands.
						</li>
					</ul>
					<h3 className="mt-8 mb-2 text-lg">Examples:</h3>
					<CodeBlock label="CLI Examples" language="bash">
						{`vegan-ipsum 2 paragraphs --format html
vegan-ipsum 2 paragraphs --copy
vegan-ipsum --help`}
					</CodeBlock>
				</SectionHeader>
			</Container>
		</Section>
	);
}
