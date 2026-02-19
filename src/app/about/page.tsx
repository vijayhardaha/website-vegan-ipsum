import { ReactNode } from "react";

import PageHeader from "@/components/common/PageHeader";
import {
	Background,
	CoreFeatures,
	CTASection,
	CustomizationOptions,
	Introduction,
	TechnicalOverview,
	UseCasesSection,
} from "@/components/sections/about";
import { buildMetadata } from "@/utils/seo";

/**
 * SEO metadata for the page.
 */
export const metadata = buildMetadata({
	title: "About",
	description:
		"Vegan Ipsum is a lightweight, developer-friendly, plant-based lorem ipsum alternative for ethical and sustainable projects.",
	slug: "about",
});

/**
 * This component renders the about page.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function AboutPage(): ReactNode {
	return (
		<>
			<PageHeader
				title={
					<>
						About <span className="text-primary">Vegan Ipsum</span>
					</>
				}
				description="A lightweight, developer-friendly lorem ipsum alternative with a vegan theme. Comes as an API, NPM package, CLI, and VS Code extension."
				tagline="Ethical &bull; Open Source &bull; Developer-Friendly"
			/>

			<Introduction />

			<Background />

			<CoreFeatures />

			<CustomizationOptions />

			<TechnicalOverview />

			<UseCasesSection />

			<CTASection />
		</>
	);
}
