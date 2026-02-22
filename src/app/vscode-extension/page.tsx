import type { JSX } from "react";

import { Metadata } from "next";

import PageHeader from "@/components/composites/PageHeader";
import SmartLink from "@/components/composites/SmartLink";
import Button from "@/components/primitives/Button";
import {
	Introduction,
	Installation,
	Usage,
	Features,
	Support,
} from "@/components/sections/vscode-extension";
import { buildMetadata } from "@/utils/meta";

const seoTitle = "VS Code Extension: Ethical Editor Tool for Developers";
const seoDescription =
	"Generate ethical, plant-based placeholder text directly in your editor. Install the Vegan Ipsum extension for VS Code to create cruelty-free mockups without leaving your code.";

const pageTitle = (
	<>
		Vegan Ipsum for <span className="text-primary">VS Code</span>
	</>
);
const pageDescription =
	"Stop switching tabs to copy-paste. Bring the Vegan Ipsum library directly into your workflow with our lightweight VS Code extension. Learn how to install and use it efficiently without leaving your workspace.";
const pageTagline = "Instant Commands • Lightweight • MIT Licensed";

/**
 * SEO metadata for the page.
 */
export const metadata: Metadata = buildMetadata({
	seoTitle,
	seoDescription,
	pageSlug: "vscode-extension",
});

/**
 * This component renders the VS Code Extension page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function VSCodeExtensionPage(): JSX.Element {
	return (
		<>
			<PageHeader title={pageTitle} description={pageDescription} tagline={pageTagline}>
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
