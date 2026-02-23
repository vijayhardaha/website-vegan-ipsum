import type { JSX } from "react";

import { Metadata } from "next";

import JsonLd from "@/components/composites/JsonLd";
import PageHeader from "@/components/composites/PageHeader";
import { Introduction, Installation, Usage, Features } from "@/components/sections/npm-package";
import { buildMetadata } from "@/utils/meta";
import { generateMasterSchema } from "@/utils/schema";

const title = "vegan-ipsum NPM Package - Ethical Lorem Ipsum Library";
const description =
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

// Path for the page, used for metadata and schema generation
const path = "/npm-package";

// SEO metadata for the page.
export const metadata: Metadata = buildMetadata({ title, description, path });

// Schema.org structured data.
const schemaData = generateMasterSchema({
	title,
	description,
	path,
	pageType: "Software",
	breadcrumbs: [{ name: "Vegan Ipsum NPM Package", path: path }],
	softwareConfig: {
		version: "1.0.4",
		repositoryUrl: "https://github.com/vijayhardaha/node-vegan-ipsum",
		installUrl: "https://www.npmjs.com/package/vegan-ipsum",
		programmingLanguage: "TypeScript",
		runtimePlatform: "Node.js",
		keywords: [
			"vegan-ipsum",
			"lorem-ipsum",
			"placeholder-text",
			"plant-based",
			"ethical-design",
			"cruelty-free",
			"lorem-ipsum-generator",
			"dummy-text",
			"developer-tools",
			"filler-text",
			"node-js",
			"typescript",
			"npm-package",
		],
	},
});

/**
 * This component renders the NPM Package page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function NpmPackagePage(): JSX.Element {
	return (
		<>
			<JsonLd data={schemaData} />

			<PageHeader title={pageTitle} description={pageDescription} tags={pageTags} />

			<Introduction />

			<Installation />

			<Usage />

			<Features />
		</>
	);
}
