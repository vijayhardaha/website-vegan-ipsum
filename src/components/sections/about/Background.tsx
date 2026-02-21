import { ReactNode } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import SmartLink from "@/components/composites/SmartLink";
import Section from "@/components/layout/Section";
import Container from "@/components/primitives/Container";

/**
 * This component represents the background and inspiration section
 * of the Vegan Ipsum website, providing users with insights into
 * the origin story of the project and its motivation.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function Background(): ReactNode {
	return (
		<Section
			id="background-and-inspiration"
			className="bg-secondary-muted"
			aria-label="Background of Vegan Ipsum"
		>
			<Container>
				<SectionHeader
					heading="Background and Inspiration"
					tagline="Origin Story"
					icon="book"
				>
					<p>
						The idea behind Vegan Ipsum originated from a desire to fill a niche that
						traditional Lorem Ipsum generators have overlooked. While browsing{" "}
						<SmartLink
							href="https://loremipsum.io/ultimate-list-of-lorem-ipsum-generators/"
							className="text-primary hover:text-primary-dark font-semibold"
							aria-label="Ultimate List of Lorem Ipsum Generators"
						>
							loremipsum.io
						</SmartLink>
						, it became clear that many communities create customized placeholder text
						to better reflect their unique identities.
					</p>
					<p>
						However, despite the growing popularity of veganism and plant-based
						lifestyles worldwide, there wasn&apos;t a well-maintained or comprehensive
						vegan-themed placeholder text generator available.
					</p>
					<p>
						This gap inspired the creation of Vegan Ipsum — a project aimed at providing
						ethical designers and developers with a fresh, cruelty-free lorem ipsum
						alternative that speaks to their values. Since its inception, Vegan Ipsum
						has evolved into a versatile suite of tools designed to empower creators,
						support sustainable brands, and encourage the use of meaningful,
						value-driven content.
					</p>
				</SectionHeader>
			</Container>
		</Section>
	);
}
