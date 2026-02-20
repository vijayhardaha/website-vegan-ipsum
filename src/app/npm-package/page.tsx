import { ReactNode } from "react";

import { Metadata } from "next";

import PageHeader from "@/components/common/PageHeader";
import { Introduction, Installation, Usage, Features } from "@/components/sections/npm-package";
import { buildMetadata } from "@/utils/seo";

/**
 * SEO metadata for the NPM Package page.
 */
export const metadata: Metadata = buildMetadata({
	title: "NPM Package",
	description:
		"Effortlessly generate plant-based, vegan-themed placeholder text in your JavaScript projects with the Vegan Ipsum NPM package - ideal for ethical developers.",
	slug: "npm-package",
});

/**
 * This component renders the NPM Package page.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function NpmPackagePage(): ReactNode {
	return (
		<>
			<PageHeader
				title={
					<>
						Vegan Ipsum <span className="text-primary">NPM Package</span>
					</>
				}
				description="Generate vegan-themed placeholder text effortlessly in your JavaScript projects."
				tagline="Lightweight &bull; Developer-Friendly &bull; ESM & CommonJS Support"
			/>

			<Introduction />

			<Installation />

			<Usage />

			<Features />
		</>
	);
}
