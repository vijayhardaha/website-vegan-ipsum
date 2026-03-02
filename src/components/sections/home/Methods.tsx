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
	icon: IconName;
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
		text: "Generate vegan-themed placeholder text instantly in your browser. No installation or setup required, just click and copy.",
		icon: "globe",
		link: "#generate-vegan-ipsum",
		ariaLabel: "Use the Vegan Ipsum web interface",
		buttonText: "Use Now",
		buttonIcon: true,
	},
	{
		title: "JSON API",
		text: "Integrate Vegan Ipsum directly into your applications or backend services using our RESTful API.",
		icon: "cloud",
		link: "/json-api",
		ariaLabel: "View documentation for the Vegan Ipsum JSON API",
		buttonText: "View Docs",
		buttonIcon: true,
	},
	{
		title: "VS Code Extension",
		text: "Insert compassionate filler text without leaving your editor. The most efficient way to populate mockups.",
		icon: "code",
		link: "/vscode-extension",
		ariaLabel: "Learn more about the Vegan Ipsum VS Code extension",
		buttonText: "Learn More",
		buttonIcon: true,
	},
	{
		title: "Node CLI Tool",
		text: "Generate placeholder text from your terminal. Perfect for shell scripts, automation pipelines, and rapid prototyping.",
		icon: "terminal",
		link: "/node-cli",
		ariaLabel: "View documentation for the Vegan Ipsum Node CLI tool",
		buttonText: "View Docs",
		buttonIcon: true,
	},
	{
		title: "NPM Package",
		text: "Add programmatic text generation to any JavaScript or Node.js project with a single installation.",
		icon: "npm",
		link: "/npm-package",
		ariaLabel: "Learn more about the Vegan Ipsum NPM package",
		buttonText: "Learn More",
		buttonIcon: true,
	},
	{
		title: "Open Source",
		text: "Vegan Ipsum is free, open, and community-driven. Contribute, fork, or build on top of it,  it's all yours.",
		icon: "github",
		link: "https://github.com/vijayhardaha/node-vegan-ipsum",
		ariaLabel: "View the Vegan Ipsum Node.js repository on GitHub",
		buttonText: "View on GitHub",
	},
];

/**
 * This component displays various ways to use the
 * Vegan Ipsum generator, including a web interface, API, and developer tools.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Methods(): JSX.Element {
	return (
		<Section
			id="methods"
			aria-label="Methods to Use Vegan Ipsum"
			className="bg-secondary-muted"
		>
			<Container>
				<SectionHeader
					heading="Use It Your Way"
					tagline="Methods"
					icon="route"
				>
					<p>
						Instantly generate plant-based placeholder text tailored
						to your project requirements. Whether you prefer a
						simple web interface, a robust{" "}
						<SmartLink
							href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"
							aria-label="Learn about HTTP requests"
						>
							JSON API
						</SmartLink>
						, or developer-focused tools like the{" "}
						<SmartLink
							href="https://code.visualstudio.com/"
							aria-label="Visit Visual Studio Code website"
						>
							Visual Studio Code
						</SmartLink>{" "}
						Extension, Vegan Ipsum offers a flexible solution for
						every workflow.
					</p>

					<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
						{cards.map((card, index: number) => (
							<div
								key={index}
								className="border-border relative overflow-hidden rounded-3xl border bg-white p-6 shadow-md transition-all hover:shadow-lg md:p-8"
							>
								<div className="flex items-start gap-4">
									<div className="bg-primary-muted text-primary mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl text-3xl">
										<Icon name={card.icon} />
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
											className="text-primary relative inline-flex items-center gap-0.5 text-sm font-medium"
											aria-label={card.ariaLabel}
											hoverEffect="border"
										>
											{card.buttonText}
											{card?.buttonIcon && (
												<Icon name="arrowRight" />
											)}
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
