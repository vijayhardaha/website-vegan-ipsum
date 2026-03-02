import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import SmartLink from "@/components/composites/SmartLink";
import Section from "@/components/layout/Section";
import Container from "@/components/primitives/Container";

/**
 * This component serves as the introduction section for the Vegan Ipsum JSON API documentation.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Introduction(): JSX.Element {
	return (
		<Section
			id="introduction"
			aria-label="Introduction to the Vegan Ipsum JSON API"
			className="py-8 md:py-10"
		>
			<Container>
				<SectionHeader
					heading={
						<>
							Vegan Ipsum <span className="text-primary">JSON API</span>
						</>
					}
					tagline="Introduction"
					icon="cloud"
				>
					<p>
						The Vegan Ipsum JSON API is a powerful and easy-to-use web service designed
						to help developers seamlessly integrate vegan-themed placeholder text into
						their applications, websites, and digital projects.
					</p>
					<p>
						Whether you need multiple paragraphs for blog mockups, a few sentences for
						UI prototypes, or single words to fill form inputs, this API offers flexible
						options to customize the generated content to your exact needs.
					</p>
					<p>
						The API returns content in both{" "}
						<SmartLink href="/json-api#response-format">
							<code>plain</code>
						</SmartLink>
						text and{" "}
						<SmartLink href="/json-api#response-format">
							<code>HTML</code>
						</SmartLink>{" "}
						formats, making it easy to insert directly into web pages, emails, or apps
						without additional formatting. It supports both simple{" "}
						<SmartLink href="/json-api#get-request-example">GET requests</SmartLink> and
						more complex{" "}
						<SmartLink href="/json-api#post-request-example">POST requests</SmartLink>{" "}
						with JSON payloads.
					</p>
				</SectionHeader>
			</Container>
		</Section>
	);
}
