import { ReactNode } from "react";

import {
	FcPuzzle,
	FcWorkflow,
	FcSettings,
	FcGlobe,
	FcCommandLine,
	FcBiomass,
} from "react-icons/fc";
import { LiaSketch } from "react-icons/lia";

import Container from "@/components/primitives/Container";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/composites/SectionHeader";

/**
 * This component renders the features section for the NPM Package page.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function Features(): ReactNode {
	return (
		<Section
			id="features"
			aria-label="Features of the Vegan Ipsum NPM Package"
			className="bg-secondary-muted"
		>
			<Container>
				<SectionHeader
					heading="Features"
					tagline="Why Choose Vegan Ipsum?"
					icon={<LiaSketch className="h-4 w-4" />}
				>
					<p>
						Vegan Ipsum is designed to be simple, fast, and flexible. Whether
						you&apos;re building web apps, Node.js services, or CLI tools, it gives you
						clean, customizable placeholder text without unnecessary complexity.
					</p>

					<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
						{[
							{
								icon: <FcPuzzle />,
								heading: "Zero Dependencies",
								content:
									"Extremely lightweight and dependency-free, keeping your bundle size small and your project fast.",
							},
							{
								icon: <FcWorkflow />,
								heading: "CommonJS & ES Module Support",
								content:
									"Works seamlessly with both require() and import syntax, making it compatible with modern and legacy setups.",
							},
							{
								icon: <FcSettings />,
								heading: "Fully Customizable Output",
								content:
									"Control sentence length, paragraph size, formatting style, and output type to match your exact content needs.",
							},
							{
								icon: <FcGlobe />,
								heading: "Runs Everywhere",
								content:
									"Compatible with Node.js, browsers, and React Native, so you can generate text in virtually any JavaScript environment.",
							},
							{
								icon: <FcCommandLine />,
								heading: "Built-in CLI Support",
								content:
									"Generate vegan placeholder text directly from your terminal with a simple and intuitive command-line interface.",
							},
							{
								icon: <FcBiomass />,
								heading: "Ethically Themed Content",
								content:
									"Perfect for plant-based, sustainable, and ethical projects that want placeholder text aligned with their values.",
							},
						].map((feature, index) => (
							<div
								key={index}
								className="border-border relative rounded-2xl border bg-white p-6 shadow-md transition-shadow hover:shadow-lg md:p-8"
							>
								<h3 className="mb-2 flex items-center gap-2 text-lg">
									<span className="relative top-0.5 text-xl">{feature.icon}</span>{" "}
									{feature.heading}
								</h3>
								<p className="text-sm leading-relaxed">{feature.content}</p>
							</div>
						))}
					</div>
				</SectionHeader>
			</Container>
		</Section>
	);
}
