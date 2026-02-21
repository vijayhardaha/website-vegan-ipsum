import { ReactNode } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/primitives/Container";
import Icon from "@/components/primitives/Icon";

/**
 * This component provides a technical overview of the Vegan Ipsum
 * project, highlighting its key technical features, design principles,
 * and implementation details.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function TechnicalOverview(): ReactNode {
	return (
		<Section
			id="technical-overview"
			aria-label="Customization options and technical details of Vegan Ipsum"
		>
			<Container>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					<SectionHeader
						heading="Technical Overview"
						tagline="Under the hood"
						icon="laptop"
					>
						<p>
							Built with modern web standards and best practices, ensuring
							reliability, performance, and maintainability.
						</p>
						<ul className="space-y-4 text-sm">
							{[
								<>
									Written entirely in modern, strongly typed{" "}
									<strong>TypeScript</strong> to ensure code quality and
									maintainability.
								</>,
								<>
									<strong>Zero external dependencies</strong> — making it
									lightweight, fast, and easy to audit for security and
									performance.
								</>,
								<>
									Employs <strong>functional programming</strong> paradigm to
									produce predictable and pure functions, improving testability.
								</>,
								<>
									Supports both{" "}
									<strong>CommonJS and ECMAScript Modules (ESM)</strong> to
									maximize compatibility across JavaScript environments.
								</>,
								<>
									Actively maintained with <strong>semantic versioning</strong>,
									ensuring new features and bug fixes are delivered promptly.
								</>,
								<>
									<strong>Open-source on GitHub</strong>, welcoming community
									contributions and transparency in development.
								</>,
							].map((feature, index) => (
								<li key={index} className="flex items-start gap-2">
									<div className="bg-primary-muted text-primary mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold">
										&#10003;
									</div>
									<span>{feature}</span>
								</li>
							))}
						</ul>
					</SectionHeader>
					<div className="content-center">
						<div className="border-border from-secondary-100 to-secondary-200 rounded-3xl border bg-gradient-to-br p-10 text-center shadow-2xl">
							<div className="text-secondary-solid mb-6 flex justify-center text-8xl">
								<Icon name="cogs" />
							</div>
							<div className="space-y-3">
								{[
									{ text1: "Language", text2: "TypeScript" },
									{ text1: "Module Support", text2: "CommonJS + ESM" },
									{ text1: "Dependencies", text2: "Zero" },
								].map((item, index) => (
									<div
										key={index}
										className="bg-secondary/15 border-secondary/15 rounded-2xl border px-4 py-3 backdrop-blur-md"
									>
										<p className="text-secondary mb-1.5 text-sm">
											{item.text1}
										</p>
										<p className="font-heading text-secondary-dark text-lg font-bold">
											{item.text2}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}
