import { ReactNode } from "react";

import { Metadata } from "next";

import PageHeader from "@/components/composites/PageHeader";
import {
	Introduction,
	Installation,
	Usage,
	Options,
	Resources,
} from "@/components/sections/node-cli";
import { buildMetadata } from "@/utils/seo";

/**
 * SEO metadata for the page.
 */
export const metadata: Metadata = buildMetadata({
	title: "Node CLI",
	description:
		"Generate vegan-themed, plant-based placeholder text right from your terminal with the lightweight Vegan Ipsum Node CLI — perfect for ethical developers and creative coders.",
	slug: "node-cli",
});

/**
 * This component renders the Node CLI page.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function NodeCliPage(): ReactNode {
	return (
		<>
			<PageHeader
				title={
					<>
						Vegan Ipsum <span className="text-primary">Node CLI</span>
					</>
				}
				description="Generate vegan-themed, plant-based placeholder text right from your terminal with the lightweight Vegan Ipsum Node CLI - perfect for ethical developers and creative coders."
				tagline="Lightweight &bull; Terminal-Based &bull; Perfect for Scripting"
			/>

			<Introduction />

			<Installation />

			<Usage />

			<Options />

			<Resources />
		</>
	);
}
