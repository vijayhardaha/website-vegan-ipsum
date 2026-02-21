import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/primitives/Container";

/**
 * Represents the details of card items used in the component.
 */
interface Card {
	title: string;
	content: string;
}

/**
 * An array of card details used to render the cards in the component.
 */
const cards: Card[] = [
	{
		title: "Design Mockups",
		content:
			"Create authentic vegan and eco-conscious product designs that speak directly to ethical consumers and sustainability advocates.",
	},
	{
		title: "Branding Projects",
		content:
			"Use meaningful filler text in marketing materials and campaigns that promote plant-based living and environmental stewardship.",
	},
	{
		title: "Educational Apps",
		content:
			"Populate learning platforms with contextually relevant placeholder content tailored to veganism, nutrition, and sustainable practices.",
	},
	{
		title: "Startup Prototypes",
		content:
			"Accelerate development of plant-based product MVPs and pitch decks with relevant, aligned placeholder text.",
	},
	{
		title: "Blogs & Portfolios",
		content:
			"Add personality and ethical alignment to personal or professional projects with thematic filler content.",
	},
	{
		title: "Open Source Projects",
		content:
			"Enhance projects with unique placeholder text that reflects conscious values while avoiding generic lorem ipsum.",
	},
];

/**
 * This component represents the use cases and applications of the
 * Vegan Ipsum Generator, showcasing how it can be integrated into
 * various projects and contexts to provide meaningful,
 * ethical placeholder text.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function UseCases(): JSX.Element {
	return (
		<Section
			id="use-cases"
			className="bg-secondary-muted"
			aria-label="Use cases and applications of Vegan Ipsum"
		>
			<Container>
				<SectionHeader heading="Use Cases" tagline="Applications" icon="briefCase">
					<p>
						From design mockups to educational apps, Vegan Ipsum fits seamlessly into
						ethical and eco-conscious projects.
					</p>
				</SectionHeader>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{cards.map((card, index: number) => (
						<div
							key={index}
							className="border-border flex gap-4 rounded-2xl border bg-white p-6 shadow-md transition-all hover:shadow-lg md:p-8"
						>
							<div>
								<h3 className="text-primary-solid mb-1 text-xl font-bold">
									{card.title}
								</h3>
								<p className="text-sm leading-relaxed">{card.content}</p>
							</div>
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
}
