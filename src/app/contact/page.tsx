import type { JSX } from "react";

import { Metadata } from "next";

import PageHeader from "@/components/composites/PageHeader";
import { Author, Projects } from "@/components/sections/contact";
import { buildMetadata } from "@/utils/meta";

const seoTitle = "Connect & Collaborate: Author Profile & Project Links";
const seoDescription =
	"Meet the creator of Vegan Ipsum and explore the ecosystem behind Vegan Ipsum. Find our GitHub, social links, and ways to collaborate on ethical developer tools.";
const pageTitle = (
	<>
		Connect with the Creator of a <span className="text-primary">Vegan Ipsum Ecosystem</span>
	</>
);
const pageDescription =
	"Vegan Ipsum is a labor of love for the ethical community. Explore our project links, contribute to the source code, or reach out to the author behind the plant-based filler text. Discover how you can get involved in building a more conscious web.";
const pageTagline = "GitHub Resources • Follow the Creator • Open Source Collaboration";

/**
 * SEO metadata for the page.
 */
export const metadata: Metadata = buildMetadata({
	seoTitle,
	seoDescription,
	pageSlug: "contact",
});

/**
 * This component renders the contact page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function ContactPage(): JSX.Element {
	return (
		<>
			<PageHeader title={pageTitle} description={pageDescription} tagline={pageTagline} />

			<Projects />

			<Author />
		</>
	);
}
