import { ReactNode } from "react";

import {
	LiaBoltSolid,
	LiaCubeSolid,
	LiaGlobeSolid,
	LiaLaptopCodeSolid,
	LiaPlugSolid,
} from "react-icons/lia";

import Container from "@/components/primitives/Container";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/composites/SectionHeader";
import SmartLink from "@/components/composites/SmartLink";

/**
 * Represents the details of a card displayed in the component.
 */
interface CardItem {
	title: string;
	text: string;
	icon: ReactNode;
	link: string;
	buttonText: string;
}

/**
 * An array of card details used to render the cards in the component.
 */
const cardItems: CardItem[] = [
	{
		title: "NPM Package",
		text: "Install vegan-ipsum via npm and generate plant-based placeholder text programmatically in your JavaScript projects.",
		icon: <LiaCubeSolid />,
		link: "https://www.npmjs.com/package/vegan-ipsum",
		buttonText: "View on NPM",
	},
	{
		title: "Node.js Repository",
		text: "Browse the source code for the Node.js implementation of Vegan Ipsum, contribute, or fork the project.",
		icon: <LiaLaptopCodeSolid />,
		link: "https://github.com/vijayhardaha/node-vegan-ipsum",
		buttonText: "View on GitHub",
	},
	{
		title: "VS Code Extension",
		text: "Install the Vegan Ipsum extension for Visual Studio Code and generate placeholder text directly in your editor.",
		icon: <LiaPlugSolid />,
		link: "https://marketplace.visualstudio.com/items/?itemName=vijayhardaha.vegan-ipsum",
		buttonText: "View Extension",
	},
	{
		title: "VS Code Extension Repository",
		text: "Explore the source code for the VS Code extension, report issues, or contribute improvements.",
		icon: <LiaLaptopCodeSolid />,
		link: "https://github.com/vijayhardaha/vscode-vegan-ipsum",
		buttonText: "View on GitHub",
	},
	{
		title: "Website Repository",
		text: "Check out the source code for the Vegan Ipsum website, suggest features, or submit pull requests.",
		icon: <LiaGlobeSolid />,
		link: "https://github.com/vijayhardaha/website-vegan-ipsum",
		buttonText: "View on GitHub",
	},
	{
		title: "API Repository",
		text: "Browse the API source code, understand the implementation, or contribute to its development.",
		icon: <LiaBoltSolid />,
		link: "https://github.com/vijayhardaha/website-vegan-ipsum",
		buttonText: "View on GitHub",
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
				<SectionHeader
					heading="Vegan Ipsum Projects"
					tagline="Open Source"
					icon={<LiaCubeSolid className="h-4 w-4" />}
				>
					<p>
						Explore the various Vegan Ipsum projects that power this ethical,
						plant-based lorem ipsum generator. All projects are actively maintained and
						open-source, welcoming contributions from developers and designers
						passionate about ethical technology.
					</p>

					<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
						{cardItems.map((card: CardItem, index: number) => (
							<div
								key={index}
								className="border-border relative rounded-2xl border bg-white p-6 shadow-md transition-shadow hover:shadow-lg md:p-8"
							>
								<div className="flex items-start gap-4">
									<div className="bg-primary-muted text-primary inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl text-3xl">
										{card.icon}
									</div>
									<div>
										<h3 className="text-primary-solid mb-2 text-lg">
											{card.title}
										</h3>
										<p className="text-foreground/80 mb-2 text-sm leading-relaxed">
											{card.text}
										</p>
										<SmartLink
											href={card.link}
											className="text-primary inline-flex items-center gap-1 text-sm font-medium no-underline transition-all"
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
