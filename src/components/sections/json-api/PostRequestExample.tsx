import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import Section from "@/components/layout/Section";
import CodeBlock from "@/components/primitives/CodeBlock";
import Container from "@/components/primitives/Container";
import { getCanonicalUrl } from "@/utils/seo";

/**
 * This component provides an example of how to make a POST request to the Vegan Ipsum JSON API.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function PostRequestExample(): JSX.Element {
	// Base URL for the API
	const API_BASE_URL = getCanonicalUrl("api");
	return (
		<Section
			id="post-request-example"
			aria-label="POST request example for the Vegan Ipsum JSON API"
		>
			<Container>
				<SectionHeader
					heading={
						<>
							POST Request <span className="text-primary">Example</span>
						</>
					}
					tagline="JSON Body"
					icon="code"
				>
					<p className="mb-8">
						Send parameters as a JSON body — ideal for programmatic API calls from
						backend services or frontend applications where query strings might become
						cluttered. Here are examples of how to structure your POST requests to
						retrieve specific counts and formats of plant-based placeholder text.
					</p>

					<CodeBlock label="cURL" language="bash">{`curl -X POST "${API_BASE_URL}" \\
  -H "Content-Type: application/json" \\
  -d '{"count": 5, "units": "sentences", "format": "plain"}'`}</CodeBlock>

					<CodeBlock label="JavaScript (fetch)" language="javascript">
						{`const res = await fetch('${API_BASE_URL}', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ count: 5, units: 'sentences', format: 'plain' })
});
const data = await res.json();
console.log(data.text);`}
					</CodeBlock>
				</SectionHeader>
			</Container>
		</Section>
	);
}
