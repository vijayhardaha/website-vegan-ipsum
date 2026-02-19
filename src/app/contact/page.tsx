import { ReactNode } from "react";

import PageHeader from "@/components/common/PageHeader";
import { Author, Projects } from "@/components/sections/contact";
import { buildMetadata } from "@/utils/seo";

/**
 * SEO metadata for the Contact page.
 */
export const metadata = buildMetadata({
	title: "Contact",
	description:
		"Get in touch with the creator of Vegan Ipsum. Explore related tools, open-source projects, and social media profiles for ethical web development.",
	slug: "contact",
});

/**
 * The ContactPage component renders the contact page of the Vegan Ipsum website.
 *
 * @returns {ReactNode} The rendered ContactPage component.
 */
export default function ContactPage(): ReactNode {
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
