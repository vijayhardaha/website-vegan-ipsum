import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import SmartLink from "@/components/composites/SmartLink";
import Section from "@/components/layout/Section";
import CodeBlock from "@/components/primitives/CodeBlock";
import Container from "@/components/primitives/Container";

/**
 * This component describes the response format of the Vegan Ipsum JSON API.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function ResponseFormat(): JSX.Element {
	return (
		<Section
			id="response-format"
			aria-label="Response format for the Vegan Ipsum JSON API"
			className="bg-secondary-muted"
		>
			<Container>
				<SectionHeader
					heading={
						<>
							Response{" "}
							<span className="text-primary">Format</span>
						</>
					}
					tagline="JSON Output"
					icon="fileCode"
				>
					<p className="mb-8">
						A successful API request returns a{" "}
						<SmartLink
							href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON"
							aria-label="Learn about JSON"
						>
							JSON
						</SmartLink>{" "}
						object containing a single <code>text</code> property.
						This string holds your generated vegan ipsum content,
						formatted exactly as requested and ready for immediate
						integration.
					</p>

					<CodeBlock label="JSON Response · 200 OK" language="json">
						{`{
  "text": "Cucumber asparagus lentils smoothie harmony kind eggplant pancake laborum non brussels beetroot pepper plant sustain. Nostrud lettuce cillum cucumber celery positivity reprehenderit turmeric laboris chard voluptate eu comfort. Minim vegan-burger nutrients shallot ad humility okra."
}`}
					</CodeBlock>

					<p>
						The response strictly adheres to the parameters defined
						in your request, including the
						<code>count</code>, <code>units</code>, and{" "}
						<code>format</code>, ensuring the output fits seamlessly
						into your application&apos;s layout.
					</p>
				</SectionHeader>
			</Container>
		</Section>
	);
}
