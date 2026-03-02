import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import SmartLink from "@/components/composites/SmartLink";
import Section from "@/components/layout/Section";
import Container from "@/components/primitives/Container";

/**
 * This component renders the introduction section for the NPM Package page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Introduction(): JSX.Element {
	return (
		<Section
			id="introduction"
			aria-label="Introduction to the Vegan Ipsum NPM Package"
			className="pt-8 md:pt-10"
		>
			<Container>
				<SectionHeader
					heading={
						<>
							Vegan Ipsum <span className="text-primary">JavaScript Library</span>
						</>
					}
					tagline="Introduction"
					icon="jsSquare"
				>
					<p>
						<SmartLink
							href="https://www.npmjs.com/package/vegan-ipsum"
							aria-label="View vegan-ipsum package details on npm"
						>
							<code>vegan-ipsum</code>
						</SmartLink>{" "}
						is a lightweight, zero-dependency JavaScript library for generating unique,
						vegan-themed placeholder text. It serves as a cruelty-free alternative to
						traditional{" "}
						<SmartLink
							href="https://www.lipsum.com/"
							aria-label="Visit Lorem Ipsum website"
						>
							Lorem Ipsum
						</SmartLink>
						, offering distinctive filler content for your layouts.
					</p>

					<p>
						Designed for developers, designers, and content creators, this package
						allows you to integrate ethically inspired, plant-based dummy text into your
						projects. It is an excellent choice for building vegan blogs, sustainability
						platforms, or{" "}
						<SmartLink
							href="https://react.dev/"
							aria-label="Visit React official website"
						>
							React
						</SmartLink>{" "}
						applications promoting compassionate living.
					</p>

					<p>
						The library is environment-agnostic and fully compatible with{" "}
						<SmartLink
							href="https://nodejs.org/"
							aria-label="Visit Node.js official website"
						>
							Node.js
						</SmartLink>
						, modern browsers, and{" "}
						<SmartLink
							href="https://reactnative.dev/"
							aria-label="Visit React Native official documentation"
						>
							React Native
						</SmartLink>
						, ensuring seamless integration across diverse{" "}
						<SmartLink
							href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
							aria-label="Visit JavaScript documentation on MDN"
						>
							JavaScript
						</SmartLink>{" "}
						ecosystems.
					</p>
				</SectionHeader>
			</Container>
		</Section>
	);
}
