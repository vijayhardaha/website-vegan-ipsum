import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
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
						The Vegan Ipsum CLI is a lightweight and versatile command-line tool built
						on Node.js that allows developers, designers, and content creators to
						generate vegan-themed placeholder text directly in the terminal.
					</p>
					<p>
						Whether you&apos;re working on plant-based blogs, eco-friendly websites, or
						sustainable product prototypes, this tool offers a quick and fun way to add
						meaningful, ethical placeholder content during development and testing
						phases.
					</p>
					<p>
						It&apos;s ideal for scripting, automation, continuous integration workflows,
						or just spicing up your terminal with delicious vegan ipsum whenever you
						need it.
					</p>
				</SectionHeader>
			</Container>
		</Section>
	);
}
