import { ReactNode } from "react";

import Container from "@/components/composites/Container";
import Section from "@/components/composites/Section";
import SectionHeader from "@/components/composites/SectionHeader";
import SmartLink from "@/components/composites/SmartLink";

/**
 * This component renders the introduction section for the NPM Package page.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function Introduction(): ReactNode {
	return (
		<Section
			id="introduction"
			aria-label="Introduction to the Vegan Ipsum NPM Package"
			className="pt-8 md:pt-10"
		>
			<Container>
				<SectionHeader heading="Introduction">
					<p>
						<SmartLink
							href="https://www.npmjs.com/package/vegan-ipsum"
							className="text-primary underline"
							aria-label="Vegan Ipsum NPM package page"
						>
							vegan-ipsum
						</SmartLink>{" "}
						is a lightweight and flexible JavaScript library for generating vegan-themed
						placeholder text, providing a meaningful alternative to traditional{" "}
						<code>lorem-ipsum</code> dummy text.
					</p>

					<p>
						Designed for developers, designers, and content creators, this package
						allows you to add ethically inspired, plant-based filler text to your
						projects, whether you&apos;re building vegan blogs, environmental websites,
						or apps promoting compassionate living.
					</p>

					<p>
						The library supports multiple environments, including Node.js, modern
						browsers, and React Native, making it versatile and easy to integrate in a
						variety of JavaScript workflows.
					</p>
				</SectionHeader>
			</Container>
		</Section>
	);
}
