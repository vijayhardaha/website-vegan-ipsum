import type { JSX } from "react";

import { Metadata } from "next";

import JsonLd from "@/components/composites/JsonLd";
import {
	Hero,
	IpsumGenerator,
	HowToUse,
	Overview,
	Benefits,
	Audience,
	UseCases,
	ContactCTA,
} from "@/components/sections/home/";
import { SITE_CONFIG } from "@/constants/seo";
import { buildMetadata } from "@/utils/meta";
import { generateMasterSchema } from "@/utils/schema";

const title = SITE_CONFIG.title;
const description = SITE_CONFIG.description;

// Path for the page, used for metadata and schema generation
const path = "/";

// SEO metadata for the page.
export const metadata: Metadata = buildMetadata({ title, description, path });

// Schema.org structured data.
const schemaData = generateMasterSchema({
	title,
	description,
	path,
});

/**
 * This component renders the home page.
 *
 * @returns {JSX.Element} The rendered component.
 */
function Home(): JSX.Element {
	return (
		<>
			<JsonLd data={schemaData} />

			<Hero />

			<IpsumGenerator />

			<HowToUse />

			<Overview />

			<Benefits />

			<Audience />

			<UseCases />

			<ContactCTA />
		</>
	);
}

export default Home;
