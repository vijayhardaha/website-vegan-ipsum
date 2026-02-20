import { ReactNode } from "react";

import { LiaCogSolid } from "react-icons/lia";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";

export default function CustomizationOptions(): ReactNode {
	return (
		<Section
			id="customization-options"
			className="bg-secondary-muted"
			aria-label="Customization options and technical details of Vegan Ipsum"
		>
			<Container>
				<SectionHeader
					heading="Customization Options"
					tagline="Configuration"
					icon={<LiaCogSolid className="h-4 w-4" />}
				>
					<p>
						Vegan Ipsum is designed with flexibility in mind, allowing users to tailor
						the output to meet the specific needs of their projects. Whether you want
						short bursts of text or long paragraphs, you can fine-tune the content with
						various parameters to fit perfectly within your designs and codebases.
					</p>
					<ul className="list-disc space-y-2 pl-8">
						<li>
							<code>count</code> - Specify the number of text units to generate. This
							can be paragraphs, sentences, or words depending on your preference
							(default is 3).
						</li>
						<li>
							<code>units</code> - Choose the unit type: <code>paragraphs</code>,{" "}
							<code>sentences</code>, or <code>words</code>.
						</li>
						<li>
							<code>format</code> - Output format selection between <code>plain</code>{" "}
							text or <code>html</code>, making it easy to embed directly into web
							projects or raw text files.
						</li>
					</ul>
					<p>
						These options provide complete control over your placeholder content,
						empowering you to maintain brand consistency and keep your design process
						smooth and meaningful.
					</p>
				</SectionHeader>
			</Container>
		</Section>
	);
}
