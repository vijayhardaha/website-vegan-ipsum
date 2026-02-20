"use client";

import { ReactNode } from "react";

import {
	LiaCloudSolid,
	LiaCodeSolid,
	LiaGithub,
	LiaGlobeSolid,
	LiaNpm,
	LiaTerminalSolid,
	LiaWhmcs,
} from "react-icons/lia";
import { RiArrowRightLine } from "react-icons/ri";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import SmartLink from "@/components/common/SmartLink";

/**
 * Represents the details of a card displayed in the component.
 */
interface ICardItem {
	title: string;
	text: string;
	icon: ReactNode;
	link: string;
	ariaLabel: string;
	buttonText: ReactNode;
}

/**
 * An array of card details used to render the cards in the component.
 */
const cardItems: ICardItem[] = [
	{
		title: "Web Interface",
		text: "Generate vegan-theme based ipsum text instantly, right here in your browser. No setup needed — just click and copy.",
		icon: <LiaGlobeSolid />,
		link: "#generate-vegan-ipsum",
		ariaLabel: "Use Now",
		buttonText: (
			<>
				Use Now <RiArrowRightLine aria-hidden={true} />
			</>
		),
	},
	{
		title: "REST JSON API",
		text: "Integrate vegan ipsum directly into your apps, scripts, or backend services with our simple HTTP API.",
		icon: <LiaCloudSolid />,
		link: "/json-api",
		ariaLabel: "View Docs",
		buttonText: (
			<>
				View Docs <RiArrowRightLine aria-hidden={true} />
			</>
		),
	},
	{
		title: "VS Code Extension",
		text: "Insert compassionate placeholder text without leaving your editor. The fastest way to fill your mockups.",
		icon: <LiaCodeSolid />,
		link: "/vscode-extension",
		ariaLabel: "Get Extension",
		buttonText: (
			<>
				Get Extension <RiArrowRightLine aria-hidden={true} />
			</>
		),
	},
	{
		title: "Node CLI Tool",
		text: "Generate vegan ipsum from your terminal on demand. Perfect for scripts, automation, and rapid prototyping.",
		icon: <LiaTerminalSolid />,
		link: "/node-cli",
		ariaLabel: "Get CLI",
		buttonText: (
			<>
				Get CLI <RiArrowRightLine aria-hidden={true} />
			</>
		),
	},
	{
		title: "NPM Package",
		text: "Add vegan ipsum generation to any JavaScript or Node.js project with a single install and a clean API.",
		icon: <LiaNpm />,
		link: "/npm-package",
		ariaLabel: "Learn More",
		buttonText: (
			<>
				Learn More <RiArrowRightLine aria-hidden={true} />
			</>
		),
	},
	{
		title: "Open Source",
		text: "Vegan Ipsum is free, open, and community-driven. Contribute, fork, or build on top of it — it's all yours.",
		icon: <LiaGithub />,
		link: "https://github.com/vijayhardaha/node-vegan-ipsum",
		ariaLabel: "View on GitHub",
		buttonText: "View on GitHub",
	},
];

/**
 * This component displays various ways to use the
 * Vegan Ipsum generator, including a web interface, API, and developer tools.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function HowToUse(): ReactNode {
	return (
		<Section id="how-to-use" aria-label="How to Use Vegan Ipsum" className="bg-secondary-muted">
			<Container>
				<SectionHeader
					heading="Use It Your Way"
					tagline="How to Use"
					icon={<LiaWhmcs className="h-4 w-4" />}
				>
					<p>
						Instantly create plant-based placeholder text tailored to your project
						needs. Whether you prefer a simple web interface, a powerful API, or
						developer-friendly tools, Vegan Ipsum has you covered. Choose your method
						and start generating compassionate content in seconds.
					</p>

					<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
						{cardItems.map((card: ICardItem, index: number) => (
							<div
								key={index}
								className="border-border relative overflow-hidden rounded-2xl border bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg md:p-8"
							>
								<div className="flex items-start gap-4">
									<div className="bg-primary-muted text-primary mb-5 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl text-3xl">
										{card.icon}
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
