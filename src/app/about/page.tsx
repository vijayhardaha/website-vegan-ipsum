import type { JSX } from "react";

import { Metadata } from "next";

import PageHeader from "@/components/composites/PageHeader";
import {
	Introduction,
	Background,
	CoreFeatures,
	CustomizationOptions,
	TechnicalOverview,
	UseCases,
	CTA,
} from "@/components/sections/about";
import { buildMetadata } from "@/utils/meta";

const seoTitle = "About: The Mission Behind Ethical Placeholder Text";
const seoDescription =
	"Discover the story of Vegan Ipsum. Learn why we created a plant-based, cruelty-free alternative to traditional Lorem Ipsum for conscious designers and developers.";
const pageTitle = (
	<>
		The Mission Behind <span className="text-primary">Vegan Ipsum</span>
	</>
);
const pageDescription =
	"We believe every part of the design process can reflect our values. Vegan Ipsum was built to replace outdated Latin with ethical, plant-based content that inspires conscious creation.";

const pageTagline = "Ethical Mission • Open Source • Driven by Values • Made for Creators";

/**
 * SEO metadata for the page.
 */
export const metadata: Metadata = buildMetadata({
	seoTitle,
	seoDescription,
	pageSlug: "about",
});

/**
 * This component renders the about page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function AboutPage(): JSX.Element {
	return (
		<>
			<PageHeader title={pageTitle} description={pageDescription} tagline={pageTagline} />

			<Introduction />

			<Background />

			<CoreFeatures />

			<CustomizationOptions />

			<TechnicalOverview />

			<UseCases />

			<CTA />
		</>
	);
}
