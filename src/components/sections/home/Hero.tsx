import { ReactNode } from "react";

import SmartLink from "@/components/composites/SmartLink";
import Button from "@/components/primitives/Button";
import Container from "@/components/primitives/Container";

/**
 * Hero component for displaying the main introduction and call-to-action buttons.
 *
 * @returns {ReactNode} The rendered Hero component.
 */
export default function Hero(): ReactNode {
	return (
		<section
			id="hero"
			className="from-background via-secondary-muted/15 to-primary-100/60 relative flex items-center justify-center bg-gradient-to-br py-24 text-center md:min-h-[calc(100vh-68px)]"
			aria-label="Section introducing the Vegan Ipsum Generator with a headline, description, and call-to-action buttons"
		>
			<div className="pointer-events-none absolute top-[-100px] right-[-100px] h-[500px] w-[500px] rounded-full bg-[#d4edcc] opacity-64 blur-[60px]"></div>
			<div className="pointer-events-none absolute top-[30%] left-[10%] h-[300px] w-[300px] rounded-full bg-[#7bbf6a] opacity-36 blur-[60px]"></div>
			<div className="pointer-events-none absolute bottom-[-80px] left-[-80px] h-[350px] w-[350px] rounded-full bg-[#c8e6b8] opacity-36 blur-[60px]"></div>
			<Container>
				<div className="border-primary-muted text-primary-solid mb-6 inline-flex items-center rounded-lg border bg-white px-4 py-2 text-xs font-bold shadow-sm">
					🌱 Free &amp; Open Source
				</div>
				<h1 className="text-primary-solid mb-5 text-5xl leading-tight font-bold md:text-6xl">
					Ethical Placeholder Text for a{" "}
					<span className="text-primary">Better World</span>
				</h1>
				<p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed">
					Generate cruelty-free, plant-based placeholder text for your design and
					development work. Ethical alternatives for compassionate creators.
				</p>
				<div className="flex flex-wrap justify-center gap-3.5">
					<Button
						asChild
						aria-label="Generate Vegan Ipsum"
						variant="primary"
						size="xl"
						className="hover:no-underline"
					>
						<SmartLink href="#generate-vegan-ipsum" scrollOffset={68}>
							Generate Ipsum
						</SmartLink>
					</Button>
					<Button
						asChild
						aria-label="Explore Tools"
						variant="primary-outline"
						size="xl"
						className="hover:no-underline"
					>
						<SmartLink href="#how-to-use" scrollOffset={68}>
							Explore Tools &rarr;
						</SmartLink>
					</Button>
				</div>
			</Container>
		</section>
	);
}
