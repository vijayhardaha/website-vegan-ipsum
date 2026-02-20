import { ReactNode } from "react";

import { LiaLightbulbSolid, LiaRocketSolid } from "react-icons/lia";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";

/**
 * This component renders the usage section for the VS Code Extension page.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function Usage(): ReactNode {
	return (
		<Section id="usage" aria-label="Usage instructions for the Vegan Ipsum VS Code Extension">
			<Container>
				<SectionHeader
					heading="Usage"
					tagline="How to use"
					icon={<LiaRocketSolid className="h-4 w-4" />}
				>
					<p>
						Once installed, generating vegan-themed placeholder text is quick and
						straightforward.
					</p>

					<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
						{[
							{
								heading: "Open Command Palette",
								content: (
									<>
										Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>{" "}
										(Win/Linux) or <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>{" "}
										(macOS)
									</>
								),
							},
							{
								heading: "Search Vegan Ipsum",
								content: <>Type to see all available commands for the extension</>,
							},
							{
								heading: "Select Command",
								content: (
									<>
										Choose paragraph, sentence, or word command based on your
										needs
									</>
								),
							},
							{
								heading: "Text Inserted!",
								content: <>Vegan ipsum appears at your cursor position instantly</>,
							},
						].map((step, index) => (
							<div
								key={index}
								className="border-border flex items-start gap-4 rounded-2xl border bg-white p-7 shadow-md"
							>
								<div className="bg-primary-muted/80 text-primary-dark border-green-mid mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-lg font-bold">
									{index + 1}
								</div>
								<div>
									<h3 className="mb-2 text-lg">{step.heading}</h3>
									<p className="text-sm leading-relaxed">{step.content}</p>
								</div>
							</div>
						))}
					</div>

					<div className="bg-primary-muted border-primary/40 text-primary-dark flex items-start gap-3 rounded-2xl border px-5 py-4">
						<span className="flex-shrink-0 text-2xl">
							<LiaLightbulbSolid />
						</span>
						<p>
							<strong>Pro Tip:</strong> You can use this in any text-based file type
							(HTML, Markdown, JSON, JavaScript), or even plain text, making it
							versatile for many workflows.
						</p>
					</div>
				</SectionHeader>
			</Container>
		</Section>
	);
}
