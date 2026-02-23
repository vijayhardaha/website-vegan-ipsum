import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/primitives/Container";

/**
 * This component provides an introduction to the Vegan Ipsum
 * Generator, explaining what it is and its purpose.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Benefits(): JSX.Element {
	return (
		<Section
			id="why-choose-it"
			aria-label="Section explaining the benefits of using the Vegan Ipsum Generator"
			className="bg-secondary-muted"
		>
			<Container>
				<SectionHeader
					heading="Why Choose Vegan Ipsum?"
					tagline="Benefits"
					icon="checkCircle"
				>
					<p>
						The Vegan Ipsum Generator provides a meaningful alternative to generic
						placeholder text by authentically reflecting ethical, cruelty-free, and
						sustainable design principles. This innovative tool helps elevate your
						projects with plant-based themes and compassionate language that resonates
						with conscious audiences while maintaining professionalism and clarity.
					</p>

					<h3 className="text-lg">Key Benefits:</h3>

					<ul className="list-disc space-y-4 pl-8">
						{[
							{
								title: "Authentic Brand Alignment",
								text: "Ensures your placeholder text reflects your vegan values and ethical commitment from the earliest design stages.",
							},
							{
								title: "Enhanced Storytelling",
								text: "Provides sustainability-focused content that resonates with vegan and ethically minded audiences.",
							},
							{
								title: "Meaningful Differentiation",
								text: "Replaces generic filler text with mission-aligned alternatives that help your projects stand out.",
							},
							{
								title: "Professional Quality",
								text: "Maintains strong readability and design standards while promoting compassionate messaging.",
							},
							{
								title: "Audience Connection",
								text: "Engages eco-conscious communities through consistent plant-based themes in your projects.",
							},
						].map((list, index) => (
							<li key={index} className="mb-4">
								<span>
									<strong className="text-primary-dark font-bold">
										{list.title}
									</strong>
									: {list.text}
								</span>
							</li>
						))}
					</ul>
				</SectionHeader>
			</Container>
		</Section>
	);
}
