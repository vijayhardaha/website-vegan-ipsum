import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import SmartLink from "@/components/composites/SmartLink";
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
	icon: string;
	link: string;
	ariaLabel: string;
	buttonText: string;
	buttonIcon?: boolean;
}

/**
 * An array of card details used to render the cards in the component.
 */
const cards: Card[] = [
	{
		title: "Web Interface",
		text: "Generate vegan-theme based ipsum text instantly, right here in your browser. No setup needed — just click and copy.",
		icon: "globe",
		link: "#generate-vegan-ipsum",
		ariaLabel: "Use Now",
		buttonText: "Use Now",
		buttonIcon: true,
	},
	{
		title: "REST JSON API",
		text: "Integrate vegan ipsum directly into your apps, scripts, or backend services with our simple HTTP API.",
		icon: "cloud",
		link: "/json-api",
		ariaLabel: "View Docs",
		buttonText: "View Docs",
		buttonIcon: true,
	},
	{
		title: "VS Code Extension",
		text: "Insert compassionate placeholder text without leaving your editor. The fastest way to fill your mockups.",
		icon: "code",
		link: "/vscode-extension",
		ariaLabel: "Get Extension",
		buttonText: "Get Extension",
		buttonIcon: true,
	},
	{
		title: "Node CLI Tool",
		text: "Generate vegan ipsum from your terminal on demand. Perfect for scripts, automation, and rapid prototyping.",
		icon: "terminal",
		link: "/node-cli",
		ariaLabel: "Get CLI",
		buttonText: "Get CLI",
		buttonIcon: true,
	},
	{
		title: "NPM Package",
		text: "Add vegan ipsum generation to any JavaScript or Node.js project with a single install and a clean API.",
		icon: "npm",
		link: "/npm-package",
		ariaLabel: "Learn More",
		buttonText: "Learn More",
		buttonIcon: true,
	},
	{
		title: "Open Source",
		text: "Vegan Ipsum is free, open, and community-driven. Contribute, fork, or build on top of it — it's all yours.",
		icon: "github",
		link: "https://github.com/vijayhardaha/node-vegan-ipsum",
		ariaLabel: "View on GitHub",
		buttonText: "View on GitHub",
	},
];

/**
 * This component displays various ways to use the
 * Vegan Ipsum generator, including a web interface, API, and developer tools.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function HowToUse(): JSX.Element {
	return (
		<Section id="how-to-use" aria-label="How to Use Vegan Ipsum" className="bg-secondary-muted">
			<Container>
				<SectionHeader heading="Use It Your Way" tagline="How to Use" icon="gears">
					<p>
						Instantly create plant-based placeholder text tailored to your project
						needs. Whether you prefer a simple web interface, a powerful API, or
						developer-friendly tools, Vegan Ipsum has you covered. Choose your method
						and start generating compassionate content in seconds.
					</p>

					<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
						{cards.map((card: Card, index: number) => (
							<div
								key={index}
								className="border-border relative overflow-hidden rounded-2xl border bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg md:p-8"
							>
								<div className="flex items-start gap-4">
									<div className="bg-primary-muted text-primary mb-5 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl text-3xl">
										<Icon name={card.icon as IconName} />
									</div>
									<div>
										<h3 className="text-primary-solid mb-1 text-lg">
											{card.title}
										</h3>
										<p className="text-foreground/80 mb-4 text-sm leading-relaxed">
											{card.text}
										</p>

										<SmartLink
											href={card.link}
											scrollOffset={68}
											className="text-primary inline-flex items-center gap-1 text-sm font-medium no-underline transition-all"
											aria-label={card.ariaLabel}
										>
											{card.buttonText}
											{card?.buttonIcon && <Icon name="arrowRight" />}
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
