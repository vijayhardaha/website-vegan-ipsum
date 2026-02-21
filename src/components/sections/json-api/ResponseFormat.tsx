import { ReactNode } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import Section from "@/components/layout/Section";
import CodeBlock from "@/components/primitives/CodeBlock";
import Container from "@/components/primitives/Container";

/**
 * This component describes the response format of the Vegan Ipsum JSON API.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function ResponseFormat(): ReactNode {
	return (
		<Section
			id="response-format"
			aria-label="Response format for the Vegan Ipsum JSON API"
			className="bg-secondary-muted"
		>
			<Container>
				<SectionHeader heading="Response Format">
					<p className="mb-8">
						A successful API call returns a JSON object with a <code>text</code>{" "}
						property containing your generated vegan ipsum content, ready for immediate
						use.
					</p>

					<CodeBlock label="JSON Response · 200 OK" language="json">
						{`{
  "text": "Cucumber asparagus lentils smoothie harmony kind eggplant pancake laborum non brussels beetroot pepper plant sustain. Nostrud lettuce cillum cucumber celery positivity reprehenderit turmeric laboris chard voluptate eu comfort. Minim vegan-burger nutrients shallot ad humility okra."
}`}
					</CodeBlock>

					<p>
						The text string respects your requested unit count, unit type, and format —
						ready for immediate use in your projects.
					</p>
				</SectionHeader>
			</Container>
		</Section>
	);
}
