import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import Section from "@/components/layout/Section";
import CodeBlock from "@/components/primitives/CodeBlock";
import Container from "@/components/primitives/Container";

/**
 * This component renders the usage section for the Node CLI page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Usage(): JSX.Element {
	return (
		<Section
			id="usage"
			aria-label="Basic usage instructions for the Vegan Ipsum Node CLI"
		>
			<Container>
				<SectionHeader
					heading={
						<>
							Basic <span className="text-primary">Usage</span>
						</>
					}
					tagline="Command Structure"
					icon="laptop"
				>
					<p className="mb-8">
						The CLI features an intuitive syntax for rapid text
						generation. Simply specify the desired quantity followed
						by the unit type to generate content instantly.
					</p>

					<CodeBlock label="Generate Text Examples" language="bash">
						{`vegan-ipsum 3 sentences
vegan-ipsum 1 paragraph
vegan-ipsum 5 words`}
					</CodeBlock>

					<p>
						By default, the tool outputs plain text suitable for
						terminal display or piping to other files. You can
						further customize the structure and format using
						optional command-line flags.
					</p>

					<p>
						The library supports three primary units for generation:{" "}
						<code>words</code>, <code>sentences</code>, and{" "}
						<code>paragraphs</code>.
					</p>
				</SectionHeader>
			</Container>
		</Section>
	);
}
