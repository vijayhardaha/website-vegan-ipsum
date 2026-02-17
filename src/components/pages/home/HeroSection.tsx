import React from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

/**
 * HeroSection component for displaying the main introduction and call-to-action buttons.
 *
 * @returns {React.JSX.Element} The rendered HeroSection component.
 *
 */
export default function HeroSection(): React.JSX.Element {
	return (
		<div>
			<h1 id="hero-heading" className="text-primary mb-1 text-4xl">
				Vegan Ipsum — Ethical, Plant-Based Lorem Ipsum & Placeholder Text for Compassionate
				Creators
			</h1>
			<p className="text-muted-foreground mt-4 text-base">
				Vegan Ipsum is a free, open-source tool to generate cruelty-free, vegan-themed
				placeholder text and plant-based lorem ipsum for your web design, app development,
				and creative projects. Whether you need ethical filler text for websites,
				presentations, or mockups, Vegan Ipsum provides meaningful, sustainable content
				tailored for compassionate designers and developers.
			</p>
			<div className="mt-6 flex gap-4">
				<Button asChild variant="outline" aria-label="Explore the Vegan Ipsum API">
					<Link href="/json-api">Explore API</Link>
				</Button>
				<Button asChild aria-label="Get the Vegan Ipsum VSCode extension">
					<Link href="/vscode-extension">Get Extension</Link>
				</Button>
			</div>
		</div>
	);
}
