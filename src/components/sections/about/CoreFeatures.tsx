import Link from "next/link";
import { LiaPlugSolid } from "react-icons/lia";
import { LiaCloudSolid, LiaCodeSolid, LiaNpm, LiaTerminalSolid } from "react-icons/lia";

import Container from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";

/**
 * Represents the details of a card item used in the  component.
 */
interface ICardItem {
	title: string;
	text: string;
	icon: React.ReactElement;
	link: string;
}

/**
 * An array of card details used to render the cards in the component.
 */
const cardItems: ICardItem[] = [
	{
		title: "REST JSON API",
		text: "A robust RESTful endpoint allows you to dynamically fetch vegan-themed placeholder text for seamless integration with websites, mobile apps, and automation workflows.",
		icon: <LiaCloudSolid />,
		link: "/json-api",
	},
	{
		title: "NPM Package",
		text: "Easily install vegan-ipsum in your JavaScript or TypeScript projects to generate customizable filler text programmatically, perfect for development environments and testing.",
		icon: <LiaNpm />,
		link: "/npm-package",
	},
	{
		title: "Node CLI Tool",
		text: "Command-line interface lets developers generate vegan ipsum content directly from their terminal or scripts, speeding up workflow without needing to leave the coding environment.",
		icon: <LiaTerminalSolid />,
		link: "/node-cli",
	},
	{
		title: "VS Code Extension",
		text: "Generate and insert vegan-themed placeholder text into your source files with a simple keyboard shortcut inside Visual Studio Code, streamlining the design and coding process.",
		icon: <LiaCodeSolid />,
		link: "/vscode-extension",
	},
];

export default function CoreFeatures(): React.ReactNode {
	return (
		<Section id="core-features" aria-label="Core features and technical details of Vegan Ipsum">
			<Container>
				<SectionHeader
					heading="Core Features"
					tagline="Tools"
					icon={<LiaPlugSolid className="h-4 w-4" />}
				>
					<p>
						Vegan Ipsum offers multiple integration methods to fit seamlessly into your
						workflow.
					</p>

					<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
						{cardItems.map((card: ICardItem, index: number) => (
							<Link
								href={card.link}
								key={index}
								className="border-border relative rounded-2xl border bg-white p-6 shadow-md transition-shadow hover:shadow-lg md:p-8"
							>
								<div className="flex items-start gap-4">
									<div className="bg-primary-muted text-primary inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl text-3xl">
										{card.icon}
									</div>
									<div>
										<h3 className="text-primary-solid mb-2 text-xl">
											{card.title}
										</h3>
										<p className="text-foreground/80 text-sm leading-relaxed">
											{card.text}
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</SectionHeader>
			</Container>
		</Section>
	);
}
