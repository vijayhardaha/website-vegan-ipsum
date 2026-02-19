import { ReactNode } from "react";

import { LiaInfoCircleSolid } from "react-icons/lia";

import Container from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import CodeBlock from "@/components/ui/codeblock";

/**
 * This component describes the error handling mechanism of the Vegan Ipsum JSON API.
 * It explains how the API responds to invalid requests, such as those with parameters
 * outside the allowed ranges.
 * The section includes an example of a JSON error response with a 400 Bad Request status,
 * along with a helpful message to guide developers in correcting their requests.
 *
 * @returns {ReactNode} The renedred component.
 */
export default function ErrorHandling(): ReactNode {
	return (
		<Section id="error-handling" aria-label="Error handling for the Vegan Ipsum JSON API">
			<Container>
				<SectionHeader heading="Error Handling">
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

					<div className="bg-primary-muted border-primary/40 text-primary-dark flex items-start gap-3 rounded-2xl border px-5 py-4">
						<span className="flex-shrink-0 text-2xl">
							<LiaInfoCircleSolid />
						</span>
						<p>
							Always validate your input parameters before sending requests to ensure
							smooth and predictable API usage.
						</p>
					</div>
				</SectionHeader>
			</Container>
		</Section>
	);
}
