import { ReactNode } from "react";

import { LiaUserFriendsSolid } from "react-icons/lia";
import { VscSymbolColor, VscCode, VscTools, VscMerge } from "react-icons/vsc";

import Container from "@/components/primitives/Container";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/composites/SectionHeader";

/**
 * Represents the details of a card displayed in the component.
 */
interface ICardItem {
	title: string;
	text: string;
	icon: ReactNode;
}

/**
 * An array of card details used to render the cards in the component.
 */
const cardItems: ICardItem[] = [
	{
		title: "Designers & UI/UX",
		text: "Craft plant-based brand experiences that feel authentic from the very first mockup or wireframe.",
		icon: <VscSymbolColor />,
	},
	{
		title: "Developers",
		text: "Use the API, CLI, or NPM package to automate vegan-themed filler text in your builds and prototypes.",
		icon: <VscCode />,
	},
	{
		title: "Marketers & Creators",
		text: "Promote veganism and sustainability through every detail, even your placeholder content matters.",
		icon: <VscMerge />,
	},
	{
		title: "Conscious Builders",
		text: "Anyone who wants their tools to reflect their ethics from open-source projects to client work.",
		icon: <VscTools />,
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
					icon={<LiaUserFriendsSolid className="h-4 w-4" />}
					headingClassName="text-primary-foreground"
					taglineClassName="text-primary-muted/70"
				>
					<p>
						Built for anyone who wants their work to reflect their values from the first
						wireframe to the final build.
					</p>

					<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
						{cardItems.map((card: ICardItem, index: number) => (
							<div
								key={index}
								className="border-primary-muted/20 bg-primary-muted/10 hover:bg-primary-muted/20 relative flex items-start gap-4 rounded-2xl border p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-lg md:p-8"
							>
								<span className="text-primary-foreground mb-4 block flex-shrink-0 text-4xl">
									{card.icon}
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
