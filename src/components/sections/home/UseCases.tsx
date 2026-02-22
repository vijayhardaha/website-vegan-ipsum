import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/primitives/Container";
import Icon from "@/components/primitives/Icon";
import { IconName } from "@/constants/icons";

/**
 * Represents the details of a card displayed in the component.
 */
interface Card {
	title: string;
	text: string;
	icon: IconName;
}

/**
 * An array of card details used to render the cards in the component.
 */
const cards: Card[] = [
	{
		title: "Design Mockups & Wire frames",
		text: "When building vegan, plant-based, or ethical brand mockups and prototypes that need thematically relevant filler content.",
		icon: "fcPanorama",
	},
	{
		title: "Presentations & Portfolios",
		text: "When you need clean, non-disruptive, and thematically relevant filler content for marketing materials and pitches.",
		icon: "fcChart",
	},
	{
		title: "Development Workflows",
		text: "When integrating via API, CLI, or VS Code extension to automate fast, ethical placeholder text generation.",
		icon: "fcProcess",
	},
	{
		title: "Sustainability Projects",
		text: "When building projects focused on eco-friendly initiatives, compassionate living, and conscious digital experiences.",
		icon: "fcBiomass",
	},
];

/**
 * This component describes the various use cases and applications of Vegan Ipsum,
 * highlighting how it can be used in design mockups, branding projects,
 * educational apps, startup prototypes, blogs, portfolios, and open-source projects.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function UseCases(): JSX.Element {
	return (
		<Section id="when-to-use" aria-label="When to Use Vegan Ipsum?">
			<Container>
				<SectionHeader
					heading="When to Use Vegan Ipsum?"
					tagline="Using It"
					icon="bookOpen"
				>
					<p>
						Vegan Ipsum is perfect for designers, developers, and content creators who
						want to add a compassionate touch to their projects.
					</p>

					<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
						{cards.map((card, index: number) => (
							<div
								key={index}
								className="border-border relative flex gap-4 overflow-hidden rounded-2xl border bg-white p-6 shadow-md transition-all hover:shadow-lg md:p-8"
							>
								<span className="bg-secondary-100/70 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl text-3xl">
									<Icon name={card.icon} />
								</span>
								<div>
									<h3 className="text-primary-solid mb-1 text-lg font-bold">
										{card.title}
									</h3>
									<p className="text-sm leading-relaxed">{card.text}</p>
								</div>
							</div>
						))}
					</div>
				</SectionHeader>
			</Container>
		</Section>
	);
}
