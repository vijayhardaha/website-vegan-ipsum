import type { JSX } from "react";

import { Metadata } from "next";

import JsonLd from "@/components/composites/JsonLd";
import PageHeader from "@/components/composites/PageHeader";
import {
	Introduction,
	Installation,
	Usage,
	Options,
	Resources,
} from "@/components/sections/node-cli";
import { buildMetadata } from "@/utils/meta";
import { generateMasterSchema } from "@/utils/schema";

const title = "Vegan Ipsum CLI - Generate Ethical Placeholder Text in Terminal";
const description =
	"Generate plant-based placeholder text from your terminal with the Vegan Ipsum Node CLI. An ethical, lightweight tool for developers and creative coders.";
const pageTitle = (
	<>
		Vegan Ipsum <span className="text-primary">Node CLI</span>
	</>
);
const pageDescription =
	"Speed up your workflow with the Vegan Ipsum Node CLI. Access cruelty-free, plant-based filler text instantly without ever leaving your shell—perfect for scripting, piping, and rapid prototyping.";
const pageTags = [
	"⚡ Instant Command Access",
	"🔗 Pipe-Friendly Output",
	"📦 Global npm Install",
	"⚙️ No Configuration Required",
];

// Path for the page, used for metadata and schema generation
const path = "/node-cli";

// SEO metadata for the page.
export const metadata: Metadata = buildMetadata({ title, description, path });

// Schema.org structured data.
const schemaData = generateMasterSchema({
	title,
	description,
	path,
	pageType: "Software",
	breadcrumbs: [{ name: "Vegan Ipsum Node CLI", path: path }],
	softwareConfig: {
		version: "1.0.4",
		repositoryUrl: "https://github.com/vijayhardaha/node-vegan-ipsum",
		installUrl: "https://www.npmjs.com/package/vegan-ipsum",
		programmingLanguage: "TypeScript",
		runtimePlatform: "Node.js",
		keywords: [
			"vegan ipsum cli",
			"vegan ipsum command line tool",
			"vegan ipsum node cli",
			"vegan ipsum terminal tool",
			"install vegan ipsum cli",
			"npm vegan ipsum cli",
			"node.js cli text generator",
			"javascript command line tool",
			"lorem ipsum cli alternative",
			"plant-based lorem ipsum cli",
			"ethical text generator cli",
			"generate dummy text from terminal",
			"npm global cli tool",
			"node terminal text generator",
			"developer cli text tool",
		],
	},
});

/**
 * This component renders the Node CLI page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function NodeCliPage(): JSX.Element {
	return (
		<>
			<JsonLd data={schemaData} />

			<PageHeader title={pageTitle} description={pageDescription} tags={pageTags} />

			<Introduction />

			<Installation />

			<Usage />

			<Options />

			<Resources />
		</>
	);
}
