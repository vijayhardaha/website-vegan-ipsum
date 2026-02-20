import { ReactNode } from "react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import CodeBlock from "@/components/ui/codeblock";

export default function Usage(): ReactNode {
	return (
		<Section id="usage" aria-label="Basic usage instructions for the Vegan Ipsum Node CLI">
			<Container>
				<SectionHeader heading="Basic Usage">
					<p className="mb-8">
						The CLI uses a simple and intuitive command structure. Provide the number of
						text units followed by the unit type you want to generate.
					</p>

					<CodeBlock label="Generate Text Examples" language="bash">
						{`vegan-ipsum 3 sentences
vegan-ipsum 1 paragraph
vegan-ipsum 5 words`}
					</CodeBlock>

					<p>
						By default, the CLI outputs plain text. You can further customize the output
						using optional flags for format and structure.
					</p>

					<p>
						Supported units: <code>words</code>, <code>sentences</code>, and{" "}
						<code>paragraphs</code>.
					</p>
				</SectionHeader>
			</Container>
		</Section>
	);
}
