import type { JSX } from "react";

import { Metadata } from "next";

import PageHeader from "@/components/composites/PageHeader";
import { Introduction, Installation, Usage, Features } from "@/components/sections/npm-package";
import { buildMetadata } from "@/utils/meta";

const seoTitle = "NPM Package: Programmatic Ethical Text Library for Developers";
const seoDescription =
	"Integrate ethical, plant-based placeholder text into your JavaScript projects. The Vegan Ipsum NPM package is a lightweight, zero-dependency library for conscious developers. Install it now!";

const pageTitle = (
	<>
		Vegan Ipsum <span className="text-primary">NPM Package</span>
	</>
);
const pageDescription =
	"Build with purpose. Use the Vegan Ipsum NPM package to programmatically generate cruelty-free filler text for your your next project in seconds. Learn how to install and use it in your projects with our comprehensive guide.";
const pageTags = [
	"🚫 Zero Dependencies",
	"🟦 TypeScript Ready",
	"📦 ESM & CJS Support",
	"⚡ Ultra Lightweight",
];

/**
 * SEO metadata for the page.
 */
export const metadata: Metadata = buildMetadata({
	seoTitle,
	seoDescription,
	pageSlug: "npm-package",
});

/**
 * This component renders the NPM Package page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function NpmPackagePage(): JSX.Element {
	return (
		<>
			<PageHeader title={pageTitle} description={pageDescription} tags={pageTags} />

			<Introduction />

			<Installation />

			<Usage />

			<Features />
		</>
	);
}
