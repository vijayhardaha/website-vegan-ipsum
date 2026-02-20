import { ReactNode } from "react";

import { LiaBriefcaseSolid } from "react-icons/lia";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";

/**
 * Represents the details of card items used in the component.
 */
interface CardItem {
	title: string;
	text: string;
}

/**
 * An array of card details used to render the cards in the component.
 */
const cardItems: CardItem[] = [
	{
		title: "Design Mockups",
		text: "Create authentic vegan and eco-conscious product designs that speak directly to ethical consumers and sustainability advocates.",
	},
	{
		title: "Branding Projects",
		text: "Use meaningful filler text in marketing materials and campaigns that promote plant-based living and environmental stewardship.",
	},
	{
		title: "Educational Apps",
		text: "Populate learning platforms with contextually relevant placeholder content tailored to veganism, nutrition, and sustainable practices.",
	},
	{
		title: "Startup Prototypes",
		text: "Accelerate development of plant-based product MVPs and pitch decks with relevant, aligned placeholder text.",
	},
	{
		title: "Blogs & Portfolios",
		text: "Add personality and ethical alignment to personal or professional projects with thematic filler content.",
	},
	{
		title: "Open Source Projects",
		text: "Enhance projects with unique placeholder text that reflects conscious values while avoiding generic lorem ipsum.",
	},
];

export default function UseCases(): ReactNode {
	return (
		<Section
			id="use-cases"
			className="bg-secondary-muted"
			aria-label="Use cases and applications of Vegan Ipsum"
		>
			<Container>
				<SectionHeader
					heading="Use Cases"
					tagline="Applications"
					icon={<LiaBriefcaseSolid className="h-4 w-4" />}
				>
					<p>
						From design mockups to educational apps, Vegan Ipsum fits seamlessly into
						ethical and eco-conscious projects.
					</p>
				</SectionHeader>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{cardItems.map((card: CardItem, index: number) => (
						<div
							key={index}
							className="border-border flex gap-4 rounded-2xl border bg-white p-6 shadow-md transition-all hover:shadow-lg md:p-8"
						>
							<div>
								<h3 className="text-primary-solid mb-1 text-xl font-bold">
									{card.title}
								</h3>
								<p className="text-sm leading-relaxed">{card.text}</p>
							</div>
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
}
