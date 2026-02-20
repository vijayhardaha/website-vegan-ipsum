import { ReactNode } from "react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import CodeBlock from "@/components/ui/codeblock";
import { getCanonicalUrl } from "@/utils/seo";

/**
 * This component serves as the base URL section for the Vegan Ipsum JSON API documentation.
 * It provides developers with the root endpoint for accessing the API, along with a brief
 * explanation of its importance and usage. This section is crucial for guiding users on how
 * to construct their API requests correctly.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function BaseUrl(): ReactNode {
	// Base URL for the API
	const API_BASE_URL = getCanonicalUrl("api");

	return (
		<Section
			id="base-url"
			aria-label="Base URL for the Vegan Ipsum JSON API"
			className="pt-8 md:pt-10"
		>
			<Container>
				<SectionHeader heading="Base URL">
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
