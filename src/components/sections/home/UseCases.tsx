import React from "react";

import { FcPanorama, FcComboChart, FcProcess, FcBiomass } from "react-icons/fc";
import { LiaBookOpenSolid } from "react-icons/lia";

import Container from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";

/**
 * Represents the details of a card displayed in the component.
 */
interface ICardItem {
	title: string;
	text: string;
	icon: React.ReactElement;
}

/**
 * An array of card details used to render the cards in the component.
 */
const cardItems: ICardItem[] = [
	{
		title: "Design Mockups & Wireframes",
		text: "When building vegan, plant-based, or ethical brand mockups and prototypes that need thematically relevant filler content.",
		icon: <FcPanorama />,
	},
	{
		title: "Presentations & Portfolios",
		text: "When you need clean, non-disruptive, and thematically relevant filler content for marketing materials and pitches.",
		icon: <FcComboChart />,
	},
	{
		title: "Development Workflows",
		text: "When integrating via API, CLI, or VS Code extension to automate fast, ethical placeholder text generation.",
		icon: <FcProcess />,
	},
	{
		title: "Sustainability Projects",
		text: "When building projects focused on eco-friendly initiatives, compassionate living, and conscious digital experiences.",
		icon: <FcBiomass />,
	},
];

/**
 * This component describes the various use cases and applications of Vegan Ipsum,
 * highlighting how it can be used in design mockups, branding projects,
 * educational apps, startup prototypes, blogs, portfolios, and open-source projects.
 *
 * @returns {React.ReactNode} The rendered component.
 */
export default function UseCases(): React.ReactNode {
	return (
		<Section id="when-to-use" aria-label="When to Use Vegan Ipsum?">
			<Container>
				<SectionHeader
					heading="When to Use Vegan Ipsum?"
					tagline="Using It"
					icon={<LiaBookOpenSolid className="h-4 w-4" />}
					className="mb-12"
				>
					<p>
						Vegan Ipsum is perfect for designers, developers, and content creators who
						want to add a compassionate touch to their projects.
					</p>
				</SectionHeader>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
					{cardItems.map((card: ICardItem, index: number) => (
						<div
							key={index}
							className="border-border relative flex gap-4 overflow-hidden rounded-2xl border bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg md:p-8"
						>
							<span className="bg-secondary-100/70 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl text-3xl">
								{card.icon}
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
			</Container>
		</Section>
	);
}
