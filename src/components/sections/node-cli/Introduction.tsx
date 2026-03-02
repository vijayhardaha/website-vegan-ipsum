import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import SmartLink from "@/components/composites/SmartLink";
import Section from "@/components/layout/Section";
import Container from "@/components/primitives/Container";

/**
 * This component renders the introduction section for the Node CLI page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Introduction(): JSX.Element {
	return (
		<Section
			id="introduction"
			aria-label="Introduction to the Vegan Ipsum Node CLI"
			className="pt-8 md:pt-10"
		>
			<Container>
				<SectionHeader
					heading={
						<>
							Vegan Ipsum <span className="text-primary">CLI</span>
						</>
					}
					tagline="Introduction"
					icon="terminal"
				>
					<p>
						The <strong>Vegan Ipsum CLI</strong> is a lightweight command-line utility
						built on{" "}
						<SmartLink
							href="https://nodejs.org/"
							aria-label="Visit Node.js official website"
						>
							Node.js
						</SmartLink>
						. It enables developers and designers to generate vegan-themed placeholder
						text directly within the terminal , providing a fast, programmatic
						alternative to graphical generators.
					</p>

					<p>
						This tool is perfect for building eco-friendly websites, vegan blogs, or
						sustainable product prototypes. It eliminates the need for context switching
						by allowing you to insert ethical, plant-based filler content instantly
						during development and testing phases.
					</p>

					<p>
						Beyond manual use, the CLI is highly effective for{" "}
						<SmartLink
							href="https://docs.github.com/en/actions/get-started/continuous-integration"
							aria-label="Learn about continuous integration on GitHub Docs"
						>
							continuous integration
						</SmartLink>{" "}
						workflows and scripting. Whether you are automating content generation or
						simply need quick dummy text, it integrates seamlessly into your existing
						development pipeline.
					</p>
				</SectionHeader>
			</Container>
		</Section>
	);
}
