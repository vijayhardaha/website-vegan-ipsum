import type { JSX } from "react";

import Image from "next/image";

import SectionHeader from "@/components/composites/SectionHeader";
import SmartLink from "@/components/composites/SmartLink";
import Section from "@/components/layout/Section";
import Container from "@/components/primitives/Container";

/**
 * This component provides an introduction to the Vegan Ipsum
 * Generator, explaining what it is and its purpose.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Overview(): JSX.Element {
	return (
		<Section
			id="overview"
			aria-label="Section explaining what the Vegan Ipsum Generator is and its features"
			className="py-20"
		>
			<Container>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					<div>
						<Image
							src="/welcoming.svg"
							alt="Men welcoming you to Vegan Ipsum Generator"
							width={613}
							height={701}
						/>
					</div>
					<SectionHeader
						heading="What is Vegan Ipsum?"
						tagline="Overview"
						icon="questionCircle"
					>
						<p>
							The Vegan Ipsum Generator is a powerful, free, and plant-based
							placeholder text tool designed for ethical web designers, developers,
							and content creators who prioritize cruelty-free and sustainable values.
						</p>

						<p>
							Unlike generic Lorem Ipsum generators, this tool creates vegan-themed,
							compassionate filler text that perfectly complements eco-conscious
							branding for websites, apps, presentations, prototypes, and more.
						</p>

						<ul className="space-y-4">
							<li className="flex items-start gap-2">
								<div className="bg-primary-muted text-primary mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-sm font-bold">
									&#10003;
								</div>
								<span>Plant-based themes woven into every sentence</span>
							</li>

							<li className="flex items-start gap-2">
								<div className="bg-primary-muted text-primary mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-sm font-bold">
									&#10003;
								</div>
								<span>Resonates with eco-conscious brands and audiences</span>
							</li>

							<li className="flex items-start gap-2">
								<div className="bg-primary-muted text-primary mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-sm font-bold">
									&#10003;
								</div>
								<span>
									Works across{" "}
									<SmartLink href="/json-api" className="underline">
										API
									</SmartLink>
									,{" "}
									<SmartLink href="/node-cli" className="underline">
										CLI
									</SmartLink>
									,{" "}
									<SmartLink href="/npm-package" className="underline">
										NPM
									</SmartLink>
									, and{" "}
									<SmartLink href="/vscode-extension" className="underline">
										VS Code
									</SmartLink>
								</span>
							</li>

							<li className="flex items-start gap-2">
								<div className="bg-primary-muted text-primary mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-sm font-bold">
									&#10003;
								</div>
								<span>Fully open source, free forever</span>
							</li>
						</ul>
					</SectionHeader>
				</div>
			</Container>
		</Section>
	);
}
