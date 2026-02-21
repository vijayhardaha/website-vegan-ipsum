import { ReactNode } from "react";

import { LiaLightbulbSolid } from "react-icons/lia";

import Container from "@/components/composites/Container";
import Section from "@/components/composites/Section";
import SectionHeader from "@/components/composites/SectionHeader";

/**
 * This component renders the introduction section for the VS Code Extension page.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function Introduction(): ReactNode {
	return (
		<Section id="introduction" aria-label="Introduction to the Vegan Ipsum VS Code Extension">
			<Container>
				<SectionHeader
					heading="Introduction"
					tagline="Overview"
					icon={<LiaLightbulbSolid className="h-4 w-4" />}
				>
					<p>
						The <strong>Vegan Ipsum VS Code Extension</strong> is a lightweight and
						intuitive tool designed for developers, designers, and content creators who
						want to quickly insert vegan-themed placeholder text directly within their
						Visual Studio Code editor.
					</p>
					<p>
						Whether you&apos;re prototyping a website, building a vegan blog, or simply
						adding ethical and meaningful filler content to mockups and drafts, this
						extension brings compassion and fun to your development workflow without
						leaving your editor.
					</p>
					<p>
						This extension seamlessly integrates with VS Code&apos;s Command Palette and
						supports multiple output formats to suit a variety of use cases.
					</p>
				</SectionHeader>
			</Container>
		</Section>
	);
}
