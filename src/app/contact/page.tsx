import type { JSX } from "react";

import { Metadata } from "next";

import PageHeader from "@/components/composites/PageHeader";
import { Author, Projects } from "@/components/sections/contact";
import { buildMetadata } from "@/utils/seo";

/**
 * SEO metadata for the page.
 */
export const metadata: Metadata = buildMetadata({
	title: "Contact",
	description:
		"Get in touch with the creator of Vegan Ipsum. Explore related tools, open-source projects, and social media profiles for ethical web development.",
	slug: "contact",
});

/**
 * This component renders the contact page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function ContactPage(): JSX.Element {
	return (
		<>
			<PageHeader
				title={
					<>
						Contact <span className="text-primary">Vegan Ipsum</span>
					</>
				}
				description="Connect with the creator of Vegan Ipsum. Find links to projects, tools, and social media profiles. Reach out for collaboration, feedback, or inquiries. All inquiries are welcome!"
				tagline="Let's Connect!"
			/>

			<Projects />

			<Author />
		</>
	);
}
