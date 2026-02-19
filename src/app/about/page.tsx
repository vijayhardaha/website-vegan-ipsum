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
import { generateMetadata as genMeta, Metadata } from "@/utils/seoUtils";

/**
 * SEO metadata for the About page.
 * @type {Metadata}
 */
export const metadata: Metadata = genMeta({
	title: "About",
	description:
		"Vegan Ipsum is a lightweight, developer-friendly, plant-based lorem ipsum alternative for ethical and sustainable projects.",
	slug: "about",
});

/**
 * The AboutPage component renders the about page of the Vegan Ipsum website.
 *
 * @returns {React.ReactNode} The rendered AboutPage component.
 */
export default function AboutPage(): React.ReactNode {
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
