import { ReactNode } from "react";

import Container from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/composites/SectionHeader";
import CodeBlock from "@/components/primitives/CodeBlock";
import { getCanonicalUrl } from "@/utils/seo";

/**
 * This component provides an example of how to make a POST request to the Vegan Ipsum JSON API.
 * It demonstrates how to send parameters as a JSON body, which is ideal for programmatic API calls
 * from backend services or frontend applications. The section includes examples for making POST
 * requests using cURL and JavaScript's fetch API, helping developers understand how to interact
 * with the API effectively.
 *
 * @returns {ReactNode} The renedered component.
 */
export default function PostRequestExample(): ReactNode {
	// Base URL for the API
	const API_BASE_URL = getCanonicalUrl("api");
	return (
		<Section
			id="post-request-example"
			aria-label="POST request example for the Vegan Ipsum JSON API"
		>
			<Container>
				<SectionHeader heading="POST Request Example" className="mb-6">
					<p className="mb-8">
						Send parameters as a JSON body — ideal for programmatic API calls from
						backend services or frontend applications.
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
