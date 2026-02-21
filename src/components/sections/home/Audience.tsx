import { ReactNode } from "react";

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
		title: "Designers & UI/UX",
		text: "Craft plant-based brand experiences that feel authentic from the very first mockup or wireframe.",
		icon: "paint",
	},
	{
		title: "Developers",
		text: "Use the API, CLI, or NPM package to automate vegan-themed filler text in your builds and prototypes.",
		icon: "code",
	},
	{
		title: "Marketers & Creators",
		text: "Promote veganism and sustainability through every detail, even your placeholder content matters.",
		icon: "merge",
	},
	{
		title: "Conscious Builders",
		text: "Anyone who wants their tools to reflect their ethics from open-source projects to client work.",
		icon: "tools",
	},
];

/**
 * This component describes who can use the Vegan Ipsum Generator and highlights
 * the benefits for different types of users, including designers, developers,
 * marketers, and conscious builders.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function Audience(): ReactNode {
	return (
		<Section
			id="who-can-use"
			aria-label="Section describing who can use the Vegan Ipsum Generator and its benefits for different types of users"
			className="bg-primary-dark text-primary-muted/90"
		>
			<Container>
				<SectionHeader
					heading="Who Can Use Vegan Ipsum?"
					tagline="Who It's For"
					icon={<Icon name="users" size={4} />}
					headingClassName="text-primary-foreground"
					taglineClassName="text-primary-muted/70"
				>
					<p>
						Built for anyone who wants their work to reflect their values from the first
						wireframe to the final build.
					</p>

					<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
						{cards.map((card: Card, index: number) => (
							<div
								key={index}
								className="border-primary-muted/20 bg-primary-muted/10 hover:bg-primary-muted/20 relative flex items-start gap-4 rounded-2xl border p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-lg md:p-8"
							>
								<span className="text-primary-foreground mb-4 block flex-shrink-0 text-4xl">
									<Icon name={card.icon} />
								</span>
								<div>
									<h3 className="text-primary-foreground mb-2 text-lg font-bold">
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
