import { ReactNode } from "react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import CodeBlock from "@/components/ui/codeblock";
import { getCanonicalUrl } from "@/utils/seo";

/**
 * This component provides an example of how to make a GET request to the Vegan Ipsum JSON API.
 * It demonstrates how to use query parameters to customize the output and includes examples
 * for making requests from a browser, using cURL, and with JavaScript's fetch API.
 * This section is designed to help developers understand how to interact with the API effectively.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function GetRequestExample(): ReactNode {
	// Base URL for the API
	const API_BASE_URL = getCanonicalUrl("api");

	return (
		<Section
			id="get-request-example"
			aria-label="GET request example for the Vegan Ipsum JSON API"
			className="bg-secondary-muted"
		>
			<Container>
				<SectionHeader heading="GET Request Example" className="mb-6">
					<p className="mb-8">
						Send parameters as query strings on the URL. Here are a few examples:
					</p>

					<CodeBlock label="Browser / URL" language="bash">
						{`# Retrieve 2 paragraphs of plain text
${API_BASE_URL}?count=2&units=paragraphs&format=plain`}
					</CodeBlock>

					<CodeBlock
						label="cURL"
						language="bash"
					>{`curl "${API_BASE_URL}?count=3&units=sentences&format=html"`}</CodeBlock>

					<CodeBlock label="JavaScript (fetch)" language="javascript">
						{`const res = await fetch('${API_BASE_URL}?count=3&units=sentences&format=plain');
const data = await res.json();
console.log(data.text);`}
					</CodeBlock>
				</SectionHeader>
			</Container>
		</Section>
	);
}
