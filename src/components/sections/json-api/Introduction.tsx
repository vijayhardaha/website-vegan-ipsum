import { ReactNode } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/primitives/Container";

/**
 * This component serves as the introduction section for the Vegan Ipsum JSON API documentation.
 * It provides an overview of what the API is, its purpose, and its key features.
 * The section is designed to give developers a clear understanding of how the API
 * can be used to generate vegan-themed placeholder text for their projects.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function Introduction(): ReactNode {
	return (
		<Section
			id="introduction"
			aria-label="Introduction to the Vegan Ipsum JSON API"
			className="py-8 md:py-10"
		>
			<Container>
				<SectionHeader heading="Introduction">
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
						The API returns content in both plain <code>plain</code> text and{" "}
						<code>HTML</code> formats, making it easy to insert directly into web pages,
						emails, or apps without additional formatting. It supports both simple GET
						requests and more complex POST requests with JSON payloads.
					</p>
				</SectionHeader>
			</Container>
		</Section>
	);
}
