import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import Section from "@/components/layout/Section";
import CodeBlock from "@/components/primitives/CodeBlock";
import Container from "@/components/primitives/Container";
import InfoBox from "@/components/primitives/InfoBox";

/**
 * This component describes the error handling mechanism of the Vegan Ipsum JSON API.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function ErrorHandling(): JSX.Element {
	return (
		<Section id="error-handling" aria-label="Error handling for the Vegan Ipsum JSON API">
			<Container>
				<SectionHeader
					heading={
						<>
							Error <span className="text-primary">Handling</span>
						</>
					}
					tagline="Bad Request"
					icon="exclamation"
				>
					<p className="mb-8">
						If your request contains invalid parameters or values outside the allowed
						ranges, the API returns a <code>400 Bad Request</code> status with a helpful
						error message.
					</p>

					<CodeBlock label="JSON Error Response · 400 Bad Request" language="json">
						{`{
  "error": "Invalid count. Please provide a number between 1 and 100."
}`}
					</CodeBlock>

					<InfoBox>
						Always validate your input parameters before sending requests to ensure
						smooth and predictable API usage.
					</InfoBox>
				</SectionHeader>
			</Container>
		</Section>
	);
}
