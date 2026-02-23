import type { JSX } from "react";

import Image from "next/image";

import SectionHeader from "@/components/composites/SectionHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/primitives/Container";

/**
 * This component serves as the introduction section for the website,
 * providing users with an overview of what the Vegan Ipsum Generator
 * is and its unique features.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Introduction(): JSX.Element {
	return (
		<Section id="what-is-vegan-ipsum" aria-label="Introduction to Vegan Ipsum">
			<Container>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					<div className="md:order-2">
						<Image
							src="/welcoming.svg"
							alt="Men welcoming you to Vegan Ipsum Generator"
							width={613}
							height={701}
							priority
						/>
					</div>
					<SectionHeader
						heading={
							<>
								A Thoughtful <span className="text-primary">Introduction</span>
							</>
						}
						tagline="Identity"
						icon="idCard"
					>
						<p>
							Vegan Ipsum is a thoughtfully designed placeholder text generator
							crafted especially for developers, designers, marketers, and content
							creators who prioritize ethical, plant-based, and eco-conscious values.
						</p>
						<p>
							Unlike traditional Lorem Ipsum generators, Vegan Ipsum produces filler
							text infused with vegan-themed words and compassionate language,
							perfectly tailored for projects centered around sustainability, animal
							welfare, and green living.
						</p>
						<p>
							Easy to integrate and highly customizable, Vegan Ipsum supports multiple
							formats and delivery methods — from a web-based interface to REST APIs,
							command-line tools, and editor extensions.
						</p>
					</SectionHeader>
				</div>
			</Container>
		</Section>
	);
}
