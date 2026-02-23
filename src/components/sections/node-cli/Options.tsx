import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
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
							Options & <span className="text-primary">Flags</span>
						</>
					}
					tagline="CLI Parameters"
					icon="toggleOn"
				>
					<p>
						Enhance your CLI experience with the following optional flags. These allow
						you to customize output format, workflow convenience, and access help
						information.
					</p>

					<ul className="list-disc space-y-2 pl-8">
						<li>
							<code>--format html</code> — Outputs generated text wrapped in HTML
							<code>{" <p> "}</code> tags, making it ready for quick web prototyping
							or markup testing.
						</li>

						<li>
							<code>--copy</code> — Automatically copies the generated text to your
							system clipboard for immediate pasting.
						</li>

						<li>
							<code>--help</code> — Displays detailed usage instructions along with
							all available commands and options.
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
	);
}
