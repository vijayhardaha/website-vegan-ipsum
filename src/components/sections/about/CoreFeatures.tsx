import type { JSX } from "react";

import Link from "next/link";

import SectionHeader from "@/components/composites/SectionHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/primitives/Container";
import Icon from "@/components/primitives/Icon";
import { IconName } from "@/constants/icons";

/**
 * Represents the details of a card item used in the component.
 */
interface Card {
	title: string;
	href: string;
	icon: IconName;
	content: string;
}

/**
 * An array of card details used to render the cards in the component.
 */
const cards: Card[] = [
	{
		title: "REST JSON API",
		href: "/json-api",
		icon: "cloud",
		content:
			"A robust RESTful endpoint allows you to dynamically fetch vegan-themed placeholder text for seamless integration with websites, mobile apps, and automation workflows.",
	},
	{
		title: "NPM Package",
		href: "/npm-package",
		icon: "npm",
		content:
			"Easily install vegan-ipsum in your JavaScript or TypeScript projects to generate customizable filler text programmatically, perfect for development environments and testing.",
	},
	{
		title: "Node CLI Tool",
		href: "/node-cli",
		icon: "terminal",
		content:
			"Command-line interface lets developers generate vegan ipsum content directly from their terminal or scripts, speeding up workflow without needing to leave the coding environment.",
	},
	{
		title: "VS Code Extension",
		href: "/vscode-extension",
		icon: "code",
		content:
			"Generate and insert vegan-themed placeholder text into your source files with a simple keyboard shortcut inside Visual Studio Code, streamlining the design and coding process.",
	},
];

/**
 * This component represents the core features and technical details of the
 * Vegan Ipsum project, showcasing the various tools and integration methods
 * available to users.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function CoreFeatures(): JSX.Element {
	return (
		<Section id="core-features" aria-label="Core features and technical details of Vegan Ipsum">
			<Container>
				<SectionHeader heading="Core Features" tagline="Tools" icon="plug">
					<p>
						Vegan Ipsum offers multiple integration methods to fit seamlessly into your
						workflow.
					</p>

					<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
						{cards.map((card, index: number) => (
							<Link
								key={index}
								href={card.href}
								aria-label={card.title}
								className="border-border relative rounded-2xl border bg-white p-6 shadow-md transition-shadow hover:shadow-lg md:p-8"
							>
								<div className="flex items-start gap-4">
									<div className="bg-primary-muted text-primary inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl text-3xl">
										<Icon name={card.icon} />
									</div>
									<div>
										<h3 className="text-primary-solid mb-2 text-xl">
											{card.title}
										</h3>
										<p className="text-foreground/80 text-sm leading-relaxed">
											{card.content}
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</SectionHeader>
			</Container>
		</Section>
	);
}
