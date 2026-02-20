import { ReactNode } from "react";

import { Metadata } from "next";

import PageHeader from "@/components/common/PageHeader";
import SmartLink from "@/components/common/SmartLink";
import {
	Features,
	Installation,
	Introduction,
	Support,
	Usage,
} from "@/components/sections/vscode-extension";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/utils/seo";

/**
 * SEO metadata for the page.
 */
export const metadata: Metadata = buildMetadata({
	title: "VS Code Extension",
	description:
		"Install and use the Vegan Ipsum VS Code Extension to quickly generate plant-based, vegan-themed placeholder text in your code editor.",
	slug: "vscode-extension",
});

/**
 * This component renders the VS Code Extension page.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function VSCodeExtensionPage(): ReactNode {
	return (
		<>
			<PageHeader
				title={
					<>
						Vegan Ipsum <span className="text-primary">VS Code Extension</span>
					</>
				}
				description="Generate vegan-themed placeholder text directly in your VSCode editor. Learn how to install and use it efficiently without leaving your workspace."
				tagline="Editor &bull; Extension &bull; Open Source"
			>
				<div className="mt-8 flex flex-wrap items-center gap-4">
					<Button asChild size="lg" variant="primary">
						<SmartLink
							href="https://marketplace.visualstudio.com/items?itemName=vijayhardaha.vegan-ipsum"
							aria-label="Install Vegan Ipsum VS Code Extension from the Visual Studio Marketplace"
						>
							Install Extension
						</SmartLink>
					</Button>
					<Button
						asChild
						size="lg"
						variant="white"
						className="border-secondary/60 border-2"
					>
						<SmartLink
							href="https://github.com/vijayhardaha/vscode-vegan-ipsum"
							aria-label="Vegan Ipsum VS Code Extension GitHub repository"
						>
							View Source
						</SmartLink>
					</Button>
				</div>
			</PageHeader>

			<Introduction />

			<Installation />

			<Usage />

			<Features />

			<Support />
		</>
	);
}
