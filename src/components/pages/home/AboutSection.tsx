import React from "react";

import Link from "next/link";
import { LiaCodeSolid, LiaNpm, LiaCloudSolid, LiaTerminalSolid } from "react-icons/lia";

import { Button } from "@/components/ui/button";

/**
 * Represents the details of a card displayed in the AboutSection component.
 */
interface CardDetail {
	icon: React.JSX.Element;
	heading: string;
	description: string;
	link: string;
	buttonText: string;
}

/**
 * An array of card details used to render the cards in the AboutSection component.
 */
const cardDetails: CardDetail[] = [
	{
		icon: <LiaCodeSolid />,
		heading: "VS Code Extension",
		description: "Quickly generate vegan Ipsum placeholder text within your VS Code editor.",
		link: "/vscode-extension",
		buttonText: "Get Extension",
	},
	{
		icon: <LiaCloudSolid />,
		heading: "JSON API",
		description: "Fetch compassionate placeholder content via our simple and powerful API.",
		link: "/json-api",
		buttonText: "Explore API",
	},
	{
		icon: <LiaTerminalSolid />,
		heading: "Node CLI Tool",
		description: "Use your terminal to create vegan Ipsum text on demand for any use case.",
		link: "/node-cli",
		buttonText: "Get CLI Tool",
	},
	{
		icon: <LiaNpm />,
		heading: "NPM Package",
		description: "Easily integrate vegan-themed Ipsum generation into any Node.js project.",
		link: "/npm-package",
		buttonText: "Learn More",
	},
];

/**
 * AboutSection component displays information about Vegan Ipsum in a grid of cards.
 * Each card contains an icon, heading, description, and a button with a link.
 *
 * @returns {React.JSX.Element} The rendered AboutSection component.
 */
export default function AboutSection(): React.JSX.Element {
	return (
		<>
			<section aria-labelledby="what-is-vegan-ipsum-generator" role="region">
				<h2 id="what-is-vegan-ipsum-generator" className="mb-2 text-2xl">
					What is Vegan Ipsum Generator?
				</h2>
				<p>
					The Vegan Ipsum Generator is a powerful, free, and plant-based placeholder text
					tool specifically designed for ethical web designers, developers, and content
					creators who prioritize cruelty-free and sustainable values. Unlike generic
					Lorem Ipsum generators, this tool creates vegan-themed, compassionate, and
					cruelty-free filler text that perfectly complements eco-conscious branding and
					design projects. It allows you to effortlessly populate websites, mobile apps,
					presentations, prototypes, and other creative projects with meaningful,
					vegan-aligned placeholder content that resonates with conscious audiences and
					supports sustainable messaging.
				</p>
			</section>

			<section aria-labelledby="why-vegan-ipsum-generator" role="region">
				<h2 id="why-vegan-ipsum-generator" className="mb-2 text-2xl">
					Why Vegan Ipsum Generator?
				</h2>
				<p>
					Using the Vegan Ipsum Generator ensures your placeholder text authentically
					reflects your commitment to ethical, cruelty-free, and sustainable design
					practices. This innovative tool offers a powerful alternative to generic filler
					text by incorporating plant-based themes, compassionate language, and
					vegan-focused content that resonates deeply with conscious audiences. Whether
					you're looking to subtly promote vegan values, enhance your brand’s ethical
					storytelling, or create a unique and thoughtful design experience, Vegan Ipsum
					helps you differentiate your projects while maintaining high professionalism,
					clarity, and readability.
				</p>
			</section>

			<section aria-labelledby="why-we-use-vegan-ipsum-generator" role="region">
				<h2 id="why-we-use-vegan-ipsum-generator" className="mb-2 text-2xl">
					Why We Use Vegan Ipsum Generator?
				</h2>
				<p>
					We use the Vegan Ipsum Generator to elevate the storytelling and branding of
					projects centered around sustainability, veganism, and ethical living. This tool
					delivers carefully crafted placeholder content that deeply resonates with
					eco-friendly values and compassionate lifestyles, helping to attract, engage,
					and inspire like-minded audiences. Beyond simply filling space, it supports
					developers and designers who want to avoid default, overused filler text by
					providing a fresh, meaningful, and mission-aligned alternative that enhances
					authenticity and promotes conscious messaging throughout digital and creative
					projects.
				</p>
			</section>

			<section aria-labelledby="who-can-use-vegan-ipsum-generator" role="region">
				<h2 id="who-can-use-vegan-ipsum-generator" className="mb-2 text-2xl">
					Who Can Use Vegan Ipsum Generator?
				</h2>
				<p className="mb-4">
					Vegan Ipsum Generator is perfect for a diverse group of users who value ethical
					design and meaningful content:
				</p>
				<ul className="list-inside list-disc space-y-2 pl-4">
					<li>
						Ethical designers and UI/UX professionals crafting plant-based or
						sustainable brand experiences that resonate with conscious consumers.
					</li>
					<li>
						Web and app developers seeking cruelty-free, vegan-themed placeholder text
						to enhance prototypes, demos, and user interfaces.
					</li>
					<li>
						Content creators, marketers, educators, and activists promoting veganism,
						environmental awareness, and compassionate living.
					</li>
					<li>
						Anyone looking for a unique, thoughtful, and meaningful alternative to
						traditional Lorem Ipsum for creative, professional, or open-source projects.
					</li>
				</ul>
			</section>

			<section aria-labelledby="when-to-use-vegan-ipsum-generator" role="region">
				<h2 id="when-to-use-vegan-ipsum-generator" className="mb-2 text-2xl">
					When to Use Vegan Ipsum Generator?
				</h2>
				<p className="mb-4">
					Use Vegan Ipsum Generator anytime you need high-quality, meaningful placeholder
					text that:
				</p>
				<ul className="list-inside list-disc space-y-2 pl-4">
					<li>
						Supports vegan, plant-based, cruelty-free, or ethical branding in design
						mockups, wireframes, and prototypes.
					</li>
					<li>
						Requires clean, non-disruptive, and thematically relevant filler content for
						presentations, portfolios, and marketing materials.
					</li>
					<li>
						Is seamlessly integrated into development workflows using API, CLI, or code
						editor extensions for fast and automated text generation.
					</li>
					<li>
						Enhances storytelling and user engagement in projects focused on
						sustainability, compassion, conscious living, and eco-friendly initiatives.
					</li>
				</ul>
			</section>

			<section aria-labelledby="how-you-can-use-vegan-ipsum-generator">
				<h2 id="how-you-can-use-vegan-ipsum-generator" className="mb-2 text-2xl">
					How You Can Use Vegan Ipsum Generator?
				</h2>
				<p className="mb-4">
					You can easily generate meaningful, vegan-themed placeholder text using the
					versatile tools provided by Vegan Ipsum. These options integrate smoothly into
					your design and development workflows, offering cruelty-free and sustainable
					filler content whenever and wherever you need it:
				</p>
				<ul className="list-inside list-disc space-y-2 pl-4">
					<li>
						<strong>Online web interface:</strong> Quickly generate vegan-themed text
						snippets for immediate use in your projects, presentations, or mockups.
					</li>
					<li>
						<strong>REST JSON API:</strong> Seamlessly integrate vegan ipsum placeholder
						text into your applications, automation scripts, or backend services with
						dynamic, real-time content fetching.
					</li>
					<li>
						<strong>Node CLI:</strong> Generate plant-based placeholder text directly
						from your terminal to speed up your development and testing processes.
					</li>
					<li>
						<strong>VSCode Extension:</strong> Insert cruelty-free filler text
						effortlessly into your code editor for quick prototyping and design
						workflows.
					</li>
					<li>
						<strong>NPM Package:</strong> Add vegan-themed placeholder text generation
						to your JavaScript projects, enabling easy, programmatic filler content
						creation.
					</li>
				</ul>
			</section>

			<section
				aria-label="Features and tools offered by Vegan Ipsum"
				role="region"
				className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
			>
				{cardDetails.map((card, index) => (
					<div
						key={index}
						className="border-border space-y-2 border p-4"
						role="listitem"
						aria-labelledby={`card-heading-${index}`}
					>
						<div className="text-4xl">{card.icon}</div>
						<h3 id={`card-heading-${index}`} className="text-foreground text-lg">
							{card.heading}
						</h3>
						<p className="text-sm">{card.description}</p>
						<Button asChild size="sm" variant="light" className="mt-4">
							<Link href={card.link} aria-label={`Learn more about ${card.heading}`}>
								{card.buttonText}
							</Link>
						</Button>
					</div>
				))}
			</section>
		</>
	);
}
