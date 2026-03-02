import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import SmartLink from "@/components/composites/SmartLink";
import Section from "@/components/layout/Section";
import Container from "@/components/primitives/Container";

/**
 * This component renders the introduction section for the VS Code Extension page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Introduction(): JSX.Element {
	return (
		<Section id="introduction" aria-label="Introduction to the Vegan Ipsum VS Code Extension">
			<Container>
				<SectionHeader
					heading={
						<>
							Vegan Ipsum <span className="text-primary">VS Code Extension</span>
						</>
					}
					tagline="Overview"
					icon="externalLink"
				>
					<p>
						The <strong>Vegan Ipsum VS Code Extension</strong> is a lightweight,
						productivity-focused tool designed for developers and designers. It enables
						you to insert vegan-themed placeholder text directly into your{" "}
						<SmartLink
							href="https://code.visualstudio.com/"
							aria-label="Visit Visual Studio Code official website"
						>
							Visual Studio Code
						</SmartLink>{" "}
						editor without interrupting your workflow.
					</p>

					<p>
						Whether you are prototyping web layouts, building vegan blogs, or creating
						sustainable product mockups, this extension provides meaningful filler
						content instantly. It serves as a cruelty-free alternative to standard dummy
						text generators, right inside your{" "}
						<SmartLink
							href="https://en.wikipedia.org/wiki/Integrated_development_environment"
							aria-label="Learn about Integrated Development Environments"
						>
							IDE
						</SmartLink>
						.
					</p>

					<p>
						The extension integrates seamlessly with the{" "}
						<SmartLink
							href="https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette"
							aria-label="Learn how to use the VS Code Command Palette"
						>
							Command Palette
						</SmartLink>{" "}
						and supports multiple output formats, such as plain text and HTML, to suit
						various development requirements.
					</p>
				</SectionHeader>
			</Container>
		</Section>
	);
}
