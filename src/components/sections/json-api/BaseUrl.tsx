import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import Section from "@/components/layout/Section";
import CodeBlock from "@/components/primitives/CodeBlock";
import Container from "@/components/primitives/Container";
import { getCanonicalUrl } from "@/utils/seo";

/**
 * This component serves as the base URL section for the Vegan Ipsum JSON API documentation.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function BaseUrl(): JSX.Element {
	// Base URL for the API
	const API_BASE_URL = getCanonicalUrl("api");

	return (
		<Section
			id="base-url"
			aria-label="Base URL for the Vegan Ipsum JSON API"
			className="pt-8 md:pt-10"
		>
			<Container>
				<SectionHeader
					heading={
						<>
							API <span className="text-primary">Base URL</span>
						</>
					}
					tagline="Root Endpoint"
					icon="link"
				>
					<p className="mb-8">
						All endpoints are relative to the following root. HTTPS is strongly
						recommended for security and data integrity.
					</p>

					<CodeBlock label="Base URL" language="text">
						{API_BASE_URL}
					</CodeBlock>
				</SectionHeader>
			</Container>
		</Section>
	);
}
