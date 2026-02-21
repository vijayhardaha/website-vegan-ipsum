import { ReactNode } from "react";

import Image from "next/image";
import { LiaLightbulb } from "react-icons/lia";

import Container from "@/components/composites/Container";
import Section from "@/components/composites/Section";
import SectionHeader from "@/components/composites/SectionHeader";

export default function Introduction(): ReactNode {
	return (
		<Section id="what-is-vegan-ipsum-generator" aria-label="Introduction to Vegan Ipsum">
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
						heading="What is Vegan Ipsum Generator?"
						tagline="What is it?"
						icon={<LiaLightbulb className="h-4 w-4" />}
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
