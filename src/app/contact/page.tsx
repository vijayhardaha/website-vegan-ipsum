import type { JSX } from "react";

import { Metadata } from "next";

import JsonLd from "@/components/composites/JsonLd";
import PageHeader from "@/components/composites/PageHeader";
import { Author, Projects } from "@/components/sections/contact";
import { buildMetadata } from "@/utils/meta";
import { generateMasterSchema } from "@/utils/schema";

const title = "Contact Vegan Ipsum - Creator Profile, GitHub & Project Links";
const description =
	"Connect with the creator of Vegan Ipsum and explore Vegan Ipsum ecosystem. Find GitHub, social links, and collaboration opportunities for ethical developer tools.";

const pageTitle = (
	<>
		Connect with the Creator of a <span className="text-primary">Vegan Ipsum Ecosystem</span>
	</>
);
const pageDescription =
	"Vegan Ipsum is a labor of love for the ethical community. Explore our project links, contribute to the source code, or reach out to the author behind the plant-based filler text. Discover how you can get involved in building a more conscious web.";
const pageTags = ["📦 GitHub Resources", "👤 Follow the Creator", "🤝 Open Source Collaboration"];

// Path for the page, used for metadata and schema generation
const path = "/contact";

// SEO metadata for the page.
export const metadata: Metadata = buildMetadata({ title, description, path });

// Schema.org structured data.
const schemaData = generateMasterSchema({
	title,
	description,
	path,
	pageType: "ContactPage",
	breadcrumbs: [{ name: "Contact Vegan Ipsum", path: path }],
});

/**
 * This component renders the contact page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function ContactPage(): JSX.Element {
	return (
		<>
			<JsonLd data={schemaData} />

			<PageHeader title={pageTitle} description={pageDescription} tags={pageTags} />

			<Projects />

			<Author />
		</>
	);
}
