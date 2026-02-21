import { ReactNode } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import SmartLink from "@/components/composites/SmartLink";
import Section from "@/components/layout/Section";
import Container from "@/components/primitives/Container";

/**
 * Represents the details of a card displayed in the component.
 */
interface Card {
	title: string;
	icon: string;
	link: string;
	buttonText: string;
	content: string;
}

/**
 * An array of card details used to render the cards in the component.
 */
const cards: Card[] = [
	{
		title: "NPM Package",
		icon: "cube",
		link: "https://www.npmjs.com/package/vegan-ipsum",
		buttonText: "View on NPM",
		content:
			"Install vegan-ipsum via npm and generate plant-based placeholder content programmatically in your JavaScript projects.",
	},
	{
		title: "Node.js Repository",
		icon: "laptop",
		link: "https://github.com/vijayhardaha/node-vegan-ipsum",
		buttonText: "View on GitHub",
		content:
			"Browse the source code for the Node.js implementation of Vegan Ipsum, contribute, or fork the project.",
	},
	{
		title: "VS Code Extension",
		icon: "plug",
		link: "https://marketplace.visualstudio.com/items/?itemName=vijayhardaha.vegan-ipsum",
		buttonText: "View Extension",
		content:
			"Install the Vegan Ipsum extension for Visual Studio Code and generate placeholder content directly in your editor.",
	},
	{
		title: "VS Code Extension Repository",
		icon: "laptop",
		link: "https://github.com/vijayhardaha/vscode-vegan-ipsum",
		buttonText: "View on GitHub",
		content:
			"Explore the source code for the VS Code extension, report issues, or contribute improvements.",
	},
	{
		title: "Website Repository",
		icon: "globe",
		link: "https://github.com/vijayhardaha/website-vegan-ipsum",
		buttonText: "View on GitHub",
		content:
			"Check out the source code for the Vegan Ipsum website, suggest features, or submit pull requests.",
	},
	{
		title: "API Repository",
		icon: "bolt",
		link: "https://github.com/vijayhardaha/website-vegan-ipsum",
		buttonText: "View on GitHub",
		content:
			"Browse the API source code, understand the implementation, or contribute to its development.",
	},
];

/**
 * This component renders the "Projects" section of the Vegan Ipsum website,
 * showcasing various projects and tools related to Vegan Ipsum.
 * It provides an overview of the open-source projects that power
 * the Vegan Ipsum generator and encourages contributions from the community.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function Projects(): ReactNode {
	return (
		<Section id="projects" aria-label="Projects and tools related to Vegan Ipsum">
			<Container>
				<SectionHeader heading="Vegan Ipsum Projects" tagline="Open Source" icon="cube">
					<p>
						Explore the various Vegan Ipsum projects that power this ethical,
						plant-based lorem ipsum generator. All projects are actively maintained and
						open-source, welcoming contributions from developers and designers
						passionate about ethical technology.
					</p>

					<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
						{cards.map((card: Card, index: number) => (
							<div
								key={index}
								className="border-border relative rounded-2xl border bg-white p-6 shadow-md transition-shadow hover:shadow-lg md:p-8"
							>
								<div className="flex items-start gap-4">{card.icon}</div>

								<div>
									<div className="bg-primary-muted content-primary content-3xl inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl">
										<h3 className="content-primary-solid content-lg mb-2">
											{card.title}
										</h3>

										<p className="content-foreground/80 content-sm mb-2 leading-relaxed">
											{card.content}
										</p>

										<SmartLink
											className="content-primary content-sm inline-flex items-center gap-1 font-medium no-underline transition-all"
											href={card.link}
										>
											{card.buttonText}
										</SmartLink>
									</div>
								</div>
							</div>
						))}
					</div>
				</SectionHeader>
			</Container>
		</Section>
	);
}
