import { ReactNode } from "react";

import {
	FcFlashOn,
	FcTodoList,
	FcElectronics,
	FcNook,
	FcSportsMode,
	FcReading,
} from "react-icons/fc";
import { LiaSketch } from "react-icons/lia";

import SectionHeader from "@/components/composites/SectionHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/primitives/Container";

/**
 * This component renders the features section for the VS Code Extension page.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function Features(): ReactNode {
	return (
		<Section
			id="features"
			aria-label="Features of the Vegan Ipsum VS Code Extension"
			className="bg-secondary-muted"
		>
			<Container>
				<SectionHeader
					heading="Features"
					tagline="Capabilities"
					icon={<LiaSketch className="h-4 w-4" />}
				>
					<p>
						Some of the key features that make the Vegan Ipsum VS Code Extension a
						must-have tool for developers and designers:
					</p>

					<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
						{[
							{
								icon: <FcFlashOn />,
								heading: "Instant Generation",
								content:
									"Generate placeholder text without leaving your code editor — no context switching required.",
							},
							{
								icon: <FcTodoList />,
								heading: "Multiple Text Units",
								content:
									"Choose from words, sentences, or paragraphs to match your specific content needs.",
							},
							{
								icon: <FcElectronics />,
								heading: "Command Palette Integration",
								content:
									"Simple, command-based interface that integrates naturally with VSCode workflows.",
							},
							{
								icon: <FcNook />,
								heading: "Universal File Support",
								content:
									"Works in any text-based file format — HTML, CSS, JS, Markdown, JSON, and more.",
							},
							{
								icon: <FcSportsMode />,
								heading: "Lightweight & Fast",
								content:
									"Minimal footprint with no impact on your editor's performance or startup time.",
							},
							{
								icon: <FcReading />,
								heading: "Ethical & Meaningful",
								content:
									"Perfect for ethically themed projects or adding a meaningful twist to placeholder content.",
							},
						].map((step, index) => (
							<div
								key={index}
								className="border-border relative rounded-2xl border bg-white p-6 shadow-md transition-shadow hover:shadow-lg md:p-8"
							>
								<h3 className="mb-2 flex items-center gap-2 text-lg">
									<span className="relative top-0.5 text-xl">{step.icon}</span>{" "}
									{step.heading}
								</h3>
								<p className="text-sm leading-relaxed">{step.content}</p>
							</div>
						))}
					</div>
				</SectionHeader>
			</Container>
		</Section>
	);
}
