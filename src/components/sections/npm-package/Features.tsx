import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/primitives/Container";
import Icon from "@/components/primitives/Icon";
import { IconName } from "@/constants/icons";

/**
 * Represents the details of a card item used in the component.
 */
interface Card {
	icon: IconName;
	heading: string;
	content: string;
}

/**
 * An array of card details used to render the cards in the component.
 */
const cards: Card[] = [
	{
		icon: "fcPuzzle",
		heading: "Zero Dependencies",
		content:
			"Extremely lightweight and dependency-free, keeping your bundle size small and your project fast.",
	},
	{
		icon: "fcWorkflow",
		heading: "CommonJS & ES Module Support",
		content:
			"Works seamlessly with both require() and import syntax, making it compatible with modern and legacy setups.",
	},
	{
		icon: "fcSettings",
		heading: "Fully Customizable Output",
		content:
			"Control sentence length, paragraph size, formatting style, and output type to match your exact content needs.",
	},
	{
		icon: "fcGlobe",
		heading: "Runs Everywhere",
		content:
			"Compatible with Node.js, browsers, and React Native, so you can generate text in virtually any JavaScript environment.",
	},
	{
		icon: "fcCli",
		heading: "Built-in CLI Support",
		content:
			"Generate vegan placeholder text directly from your terminal with a simple and intuitive command-line interface.",
	},
	{
		icon: "fcBiomass",
		heading: "Ethically Themed Content",
		content:
			"Perfect for plant-based, sustainable, and ethical projects that want placeholder text aligned with their values.",
	},
];

/**
 * This component renders the features section for the NPM Package page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Features(): JSX.Element {
	return (
		<Section
			id="features"
			aria-label="Features of the Vegan Ipsum NPM Package"
			className="bg-secondary-muted"
		>
			<Container>
				<SectionHeader
					heading={
						<>
							Why Choose <span className="text-primary">Vegan Ipsum?</span>
						</>
					}
					tagline="Features"
					icon="award"
				>
					<p>
						Vegan Ipsum is designed to be simple, fast, and flexible. Whether
						you&apos;re building web apps, Node.js services, or CLI tools, it gives you
						clean, customizable placeholder text without unnecessary complexity.
					</p>

					<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
						{cards.map((feature, index) => (
							<div
								key={index}
								className="border-border relative rounded-3xl border bg-white p-6 shadow-md transition-shadow hover:shadow-lg md:p-8"
							>
								<h3 className="mb-2 flex items-center gap-2 text-lg">
									<span className="relative top-0.5 text-xl">
										<Icon name={feature.icon} />
									</span>{" "}
									{feature.heading}
								</h3>
								<p className="text-sm leading-relaxed">{feature.content}</p>
							</div>
						))}
					</div>
				</SectionHeader>
			</Container>
		</Section>
	);
}
