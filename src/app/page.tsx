import type { JSX } from "react";

import { Metadata } from "next";

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
import { buildMetadata } from "@/utils/meta";

const seoTitle = "Vegan Ipsum: Ethical & Plant-Based Placeholder Text Tool";
const seoDescription =
	"Generate ethical, plant-based placeholder text with Vegan Ipsum. The perfect Lorem Ipsum alternative for vegans and conscious designers. Try it for free!";

/**
 * SEO metadata for the page.
 */
export const metadata: Metadata = buildMetadata({
	seoTitle,
	seoDescription,
	pageSlug: "/",
	postfix: false,
});

/**
 * This component renders the home page.
 *
 * @returns {JSX.Element} The rendered component.
 */
function Home(): JSX.Element {
	return (
		<div>
			<Hero />

			<IpsumGenerator />

			<HowToUse />

			<Overview />

			<Benefits />

			<Audience />

			<UseCases />

			<ContactCTA />
		</div>
	);
}

export default Home;
