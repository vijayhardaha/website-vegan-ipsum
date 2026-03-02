import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import SmartLink from "@/components/composites/SmartLink";
import Section from "@/components/layout/Section";
import Container from "@/components/primitives/Container";

/**
 * This component represents the background and inspiration section
 * of the Vegan Ipsum website, providing users with insights into
 * the origin story of the project and its motivation.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Background(): JSX.Element {
	return (
		<Section
			id="background-and-inspiration"
			className="bg-secondary-muted"
			aria-label="Background of Vegan Ipsum"
		>
			<Container>
				<SectionHeader
					heading={
						<>
							Background and <span className="text-primary">Inspiration</span>
						</>
					}
					tagline="Origin Story"
					icon="history"
				>
					<p>
						The concept for Vegan Ipsum emerged from a desire to fill a niche that
						traditional Lorem Ipsum generators had long overlooked. While exploring
						resources like{" "}
						<SmartLink
							href="https://loremipsum.io/ultimate-list-of-lorem-ipsum-generators/"
							aria-label="Ultimate List of Lorem Ipsum Generators"
						>
							loremipsum.io
						</SmartLink>
						, it became evident that many specialized communities had developed custom
						placeholder text to better reflect their unique identities.
					</p>
					<p>
						However, despite the global rise of veganism and plant-based lifestyles,
						there was a lack of a dedicated, well-maintained placeholder text generator
						for the ethical design community.
					</p>
					<p>
						This gap inspired the creation of Vegan Ipsum, a project designed to provide
						ethical developers and designers with a cruelty-free alternative that aligns
						with their values. Since its launch, Vegan Ipsum has evolved into a
						versatile suite of tools, empowering creators to build sustainable brands
						with meaningful, value-driven content.
					</p>
				</SectionHeader>
			</Container>
		</Section>
	);
}
