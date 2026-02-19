import { ReactNode } from "react";

import Image from "next/image";
import { LiaStarOfLifeSolid } from "react-icons/lia";

import Container from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";

/**
 * This component provides an introduction to the Vegan Ipsum
 * Generator, explaining what it is and its purpose.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function Benefits(): ReactNode {
	return (
		<Section
			id="why-choose-it"
			aria-label="Section explaining the benefits of using the Vegan Ipsum Generator"
			className="bg-secondary-muted"
		>
			<Container>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					<div className="content-end md:order-2">
						<Image
							src="/multiple-questions.svg"
							alt="Men looking at multiple questions, representing the benefits of using Vegan Ipsum Generator"
							width={643}
							height={800}
							priority
						/>
					</div>
					<SectionHeader
						heading="Why Choose Vegan Ipsum Generator?"
						tagline="The Why"
						icon={<LiaStarOfLifeSolid className="h-4 w-4" />}
					>
						<p>
							The Vegan Ipsum Generator provides a meaningful alternative to generic
							placeholder text by authentically reflecting ethical, cruelty-free, and
							sustainable design principles. This innovative tool helps elevate your
							projects with plant-based themes and compassionate language that
							resonates with conscious audiences while maintaining professionalism and
							clarity.
						</p>

						<h3 className="text-lg">Key Benefits:</h3>

						<ul className="list-disc space-y-4 pl-8">
							{[
								{
									title: "Authentic Brand Alignment",
									text: "Ensures your placeholder text reflects your commitment to vegan values and ethical practices from the earliest design stages",
								},
								{
									title: "Enhanced Storytelling",
									text: "Delivers carefully crafted content centered around sustainability, veganism, and ethical living that engages like-minded audiences",
								},
								{
									title: "Meaningful Differentiation",
									text: "Replaces overused default filler text with fresh, mission-aligned alternatives that make your projects stand out",
								},
								{
									title: "Professional Quality",
									text: "Maintains high readability and design standards while subtly promoting compassionate messaging",
								},
								{
									title: "Audience Connection",
									text: "Helps attract and inspire eco-conscious communities by incorporating plant-based themes throughout your digital and creative projects",
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
				</div>
			</Container>
		</Section>
	);
}
