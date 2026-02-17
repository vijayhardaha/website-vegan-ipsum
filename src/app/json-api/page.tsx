import React from "react";

import PageHeader from "@/components/layout/PageHeader";
import SectionContainer from "@/components/layout/SectionContainer";
import CodeBlock from "@/components/ui/CodeBlock";
import { generateMetadata as genMeta, getCanonicalUrl, Metadata } from "@/utils/seoUtils";

/**
 * SEO metadata for the JSON API page.
 * @type {Metadata}
 */
export const metadata: Metadata = genMeta({
	title: "Vegan Ipsum JSON API",
	description:
		"Fetch plant-based, cruelty-free placeholder text for your apps, websites, or projects using the lightweight Vegan Ipsum JSON API — perfect for ethical developers.",
	slug: "json-api",
});

/**
 * The main page for the Vegan Ipsum JSON API documentation.
 *
 * @returns {React.JSX.Element} The rendered JsonApiPage component.
 */
export default function JsonApiPage(): React.JSX.Element {
	// Base URL for the API
	const API_BASE_URL = getCanonicalUrl("api");

	return (
		<SectionContainer>
			<PageHeader
				title="Vegan Ipsum JSON API"
				subtitle="Fetch vegan-inspired placeholder text for your apps and projects. This API provides paragraphs, sentences, or words in plain or HTML format."
			/>

			<section aria-labelledby="introduction">
				<h2 id="introduction" className="mb-2 text-2xl">
					Introduction
				</h2>
				<div className="space-y-4">
					<p>
						The Vegan Ipsum JSON API is a powerful and easy-to-use web service designed
						to help developers seamlessly integrate vegan-themed placeholder text into
						their applications, websites, and digital projects. This API generates
						meaningful, plant-based lorem ipsum text that supports ethical and
						eco-conscious design practices.
					</p>
					<p>
						Whether you need multiple paragraphs for blog mockups, a few sentences for
						UI prototypes, or even single words to fill form inputs, this API offers
						flexible options to customize the generated content to your exact needs.
					</p>
					<p>
						The API returns content in both <code>plain</code> text and{" "}
						<code>HTML</code> formats, making it easy to insert directly into web pages,
						emails, or apps without additional formatting.
					</p>
					<p>
						Built with developer convenience in mind, Vegan Ipsum API supports both
						simple GET requests with query parameters and more complex POST requests
						with JSON payloads, allowing integration in various development environments
						and workflows.
					</p>
				</div>
			</section>

			<section aria-labelledby="base-url">
				<h2 id="base-url" className="mb-2 text-2xl">
					Base URL
				</h2>
				<p>
					To start using the Vegan Ipsum API, make requests to the following base URL. All
					endpoints are relative to this root:
				</p>
				<CodeBlock language="bash">{API_BASE_URL}</CodeBlock>
				<p className="text-muted-foreground mt-2 text-sm">
					This base URL supports both HTTP and HTTPS protocols, but HTTPS is strongly
					recommended for security and data integrity.
				</p>
			</section>

			<section aria-labelledby="request-methods">
				<h2 id="request-methods" className="mb-2 text-2xl">
					Request Methods
				</h2>
				<p>
					The Vegan Ipsum API supports the following HTTP request methods to fetch your
					vegan-themed placeholder text:
				</p>
				<ul className="mt-2 list-disc space-y-2 pl-8">
					<li>
						<strong>GET</strong> — Send your parameters as query strings appended to the
						URL. This method is ideal for quick or simple requests and easy testing via
						browser or command line.
					</li>
					<li>
						<strong>POST</strong> — Send your parameters as JSON in the request body.
						Use this method for more complex queries or when integrating the API in
						client-server applications.
					</li>
				</ul>
				<p className="text-muted-foreground mt-4 text-sm">
					Both methods return the same JSON response structure and support all available
					parameters.
				</p>
			</section>

			<section aria-labelledby="parameters">
				<h2 id="parameters" className="mb-2 text-2xl">
					Parameters
				</h2>
				<p>
					You can customize the output of the Vegan Ipsum API by using the following
					parameters. These give you full control over the amount, type, and format of
					placeholder text:
				</p>
				<table className="border-border mt-4 w-full table-auto border-collapse border text-left text-sm">
					<thead>
						<tr className="border-border border-b bg-gray-100">
							<th className="px-4 py-2">Name</th>
							<th className="px-4 py-2">Type</th>
							<th className="px-4 py-2">Required</th>
							<th className="px-4 py-2">Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="px-4 py-2 font-mono">count</td>
							<td className="px-4 py-2">number</td>
							<td className="px-4 py-2">No (default: 3)</td>
							<td className="px-4 py-2">
								Specifies how many units of text to generate. Valid range is 1 to
								100. Units depend on the <code>units</code> parameter.
							</td>
						</tr>
						<tr>
							<td className="px-4 py-2 font-mono">units</td>
							<td className="px-4 py-2">string</td>
							<td className="px-4 py-2">No (default: paragraphs)</td>
							<td className="px-4 py-2">
								The type of text unit to generate. Acceptable values are{" "}
								<code>paragraphs</code>, <code>sentences</code>, or{" "}
								<code>words</code>.
							</td>
						</tr>
						<tr>
							<td className="px-4 py-2 font-mono">format</td>
							<td className="px-4 py-2">string</td>
							<td className="px-4 py-2">No (default: plain)</td>
							<td className="px-4 py-2">
								Determines the output format. Use <code>plain</code> for raw text or{" "}
								<code>html</code> for formatted HTML paragraphs or sentences. If
								omitted or invalid, defaults to <code>plain</code>.
							</td>
						</tr>
					</tbody>
				</table>
				<p className="text-muted-foreground mt-4 text-sm">
					<em>Tip:</em> Use <code>format=html</code> when injecting content directly into
					web pages to preserve paragraph and sentence structure without extra processing.
				</p>
			</section>

			<section aria-labelledby="get-example">
				<h2 id="get-example" className="mb-2 text-2xl">
					GET Request Example
				</h2>
				<p>
					Here is an example GET request that retrieves two paragraphs of plain text vegan
					ipsum:
				</p>
				<CodeBlock language="bash">{`GET ${API_BASE_URL}?count=2&units=paragraphs&format=plain`}</CodeBlock>
				<p className="mt-2">
					You can also use <code>curl</code> to test from the command line:
				</p>
				<CodeBlock language="bash">{`curl "${API_BASE_URL}?count=3&units=sentences&format=html"`}</CodeBlock>
			</section>

			<section aria-labelledby="post-example">
				<h2 id="post-example" className="mb-2 text-2xl">
					POST Request Example
				</h2>
				<p>
					Use the POST method to send parameters in the JSON request body, which is
					especially useful for programmatic API calls from backend services or frontend
					applications:
				</p>
				<CodeBlock language="bash">
					{`curl -X POST "${API_BASE_URL}" \\
  -H "Content-Type: application/json" \\
  -d '{"count": 5, "units": "sentences", "format": "plain"}'`}
				</CodeBlock>
			</section>

			<section aria-labelledby="response">
				<h2 id="response" className="mb-2 text-2xl">
					Response Format
				</h2>
				<p>
					A successful API call returns a JSON object containing a <code>text</code>{" "}
					property with the generated vegan ipsum content:
				</p>
				<CodeBlock language="json">
					{`{
  "text": "Cucumber asparagus lentils smoothie harmony kind eggplant pancake laborum non brussels beetroot pepper plant sustain. Nostrud lettuce cillum cucumber celery positivity reprehenderit turmeric laboris chard voluptate eu comfort. Minim vegan-burger nutrients shallot ad humility okra."
}`}
				</CodeBlock>
				<p className="text-muted-foreground mt-2 text-sm">
					The text string respects your requested unit count, unit type, and format, ready
					for immediate use in your projects.
				</p>
			</section>

			<section aria-labelledby="error-handling">
				<h2 id="error-handling" className="mb-2 text-2xl">
					Error Handling
				</h2>
				<p>
					If your request contains invalid parameters or values outside the allowed
					ranges, the API returns a <code>400 Bad Request</code> status with a helpful
					error message to guide you in fixing the issue.
				</p>
				<CodeBlock language="json">
					{`{
  "error": "Invalid count. Please provide a number between 1 and 100."
}`}
				</CodeBlock>
				<p className="mt-2">
					Make sure to validate your input parameters before sending requests to ensure
					smooth and predictable API usage.
				</p>
			</section>

			<section aria-labelledby="status-codes">
				<h2 id="status-codes" className="mb-2 text-2xl">
					HTTP Status Codes
				</h2>
				<ul className="list-disc pl-6 text-sm">
					<li>
						<strong>200 OK</strong> – Request was successful, and the response contains
						the requested vegan ipsum text.
					</li>
					<li>
						<strong>400 Bad Request</strong> – Your request had invalid or missing
						parameters. Review the error message and try again.
					</li>
					<li>
						<strong>404 Not Found</strong> – The endpoint you tried to access does not
						exist. Check the URL and method.
					</li>
					<li>
						<strong>500 Internal Server Error</strong> – Something went wrong on the
						server side. Try again later or contact support if the problem persists.
					</li>
				</ul>
			</section>
		</SectionContainer>
	);
}
