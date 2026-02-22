import type { JSX } from "react";

import { Metadata } from "next";

import PageHeader from "@/components/composites/PageHeader";
import {
	Introduction,
	Installation,
	Usage,
	Options,
	Resources,
} from "@/components/sections/node-cli";
import { buildMetadata } from "@/utils/meta";

const seoTitle = "Node CLI: Generate Ethical Text via Terminal";
const seoDescription =
	"Generate plant-based placeholder text from your terminal with the Vegan Ipsum Node CLI. An ethical, lightweight tool for developers and creative coders.";
const pageTitle = (
	<>
		Vegan Ipsum <span className="text-primary">Node CLI</span>
	</>
);
const pageDescription =
	"Speed up your workflow with the Vegan Ipsum Node CLI. Access cruelty-free, plant-based filler text instantly without ever leaving your shell—perfect for scripting, piping, and rapid prototyping.";
const pageTagline =
	"Instant Command Access • Pipe-Friendly Output • Global npm Install • No Configuration Required";

/**
 * SEO metadata for the page.
 */
export const metadata: Metadata = buildMetadata({
	seoTitle,
	seoDescription,
	pageSlug: "node-cli",
});

/**
 * This component renders the Node CLI page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function NodeCliPage(): JSX.Element {
	return (
		<>
			<PageHeader title={pageTitle} description={pageDescription} tagline={pageTagline} />

			<Introduction />

			<Installation />

			<Usage />

			<Options />

			<Resources />
		</>
	);
}
