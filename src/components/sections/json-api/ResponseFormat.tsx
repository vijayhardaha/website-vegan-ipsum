import { ReactNode } from "react";

import Container from "@/components/composites/Container";
import Section from "@/components/composites/Section";
import SectionHeader from "@/components/composites/SectionHeader";
import CodeBlock from "@/components/primitives/CodeBlock";

/**
 * This component describes the response format of the Vegan Ipsum JSON API.
 * It explains the structure of a successful API response, which includes a
 * JSON object with a "text" property containing the generated vegan ipsum content.
 * The section also provides an example of the JSON response, demonstrating how
 * the output respects the requested parameters for unit count, unit type, and format.
 *
 * @returns {ReactNode} The renedered component.
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
