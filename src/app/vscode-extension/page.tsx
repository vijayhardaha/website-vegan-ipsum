import { ReactNode } from "react";

import {
	FcFlashOn,
	FcTodoList,
	FcElectronics,
	FcNook,
	FcSportsMode,
	FcReading,
} from "react-icons/fc";
import {
	LiaLightbulbSolid,
	LiaRocketSolid,
	LiaSearchSolid,
	LiaKeyboardSolid,
	LiaSketch,
	LiaBugSolid,
} from "react-icons/lia";

import Container from "@/components/common/Container";
import PageHeader from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SmartLink } from "@/components/common/SmartLink";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/utils/seo";

/**
 * SEO metadata for the page.
 */
export const metadata = buildMetadata({
	title: "VS Code Extension",
	description:
		"Install and use the Vegan Ipsum VS Code Extension to quickly generate plant-based, vegan-themed placeholder text in your code editor.",
	slug: "vscode-extension",
});

/**
 * This component renders the VS Code Extension page.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function VSCodeExtensionPage(): ReactNode {
	return (
		<>
			<PageHeader
				title={
					<>
						Vegan Ipsum <span className="text-primary">VS Code Extension</span>
					</>
				}
				description="Generate vegan-themed placeholder text directly in your VSCode editor. Learn how to install and use it efficiently without leaving your workspace."
				tagline="Editor &bull; Extension &bull; Open Source"
			>
				<div className="mt-8 flex flex-wrap items-center gap-4">
					<Button asChild size="lg" variant="primary">
						<SmartLink
							href="https://marketplace.visualstudio.com/items?itemName=vijayhardaha.vegan-ipsum"
							aria-label="Install Vegan Ipsum VS Code Extension from the Visual Studio Marketplace"
						>
							Install Extension
						</SmartLink>
					</Button>
					<Button
						asChild
						size="lg"
						variant="white"
						className="border-secondary/60 border-2"
					>
						<SmartLink
							href="https://github.com/vijayhardaha/vscode-vegan-ipsum"
							aria-label="Vegan Ipsum VS Code Extension GitHub repository"
						>
							View Source
						</SmartLink>
					</Button>
				</div>
			</PageHeader>

			<Section
				id="introduction"
				aria-label="Introduction to the Vegan Ipsum VS Code Extension"
			>
				<Container>
					<SectionHeader
						heading="Introduction"
						tagline="Overview"
						icon={<LiaLightbulbSolid className="h-4 w-4" />}
					>
						<p>
							The <strong>Vegan Ipsum VS Code Extension</strong> is a lightweight and
							intuitive tool designed for developers, designers, and content creators
							who want to quickly insert vegan-themed placeholder text directly within
							their Visual Studio Code editor.
						</p>
						<p>
							Whether you&apos;re prototyping a website, building a vegan blog, or
							simply adding ethical and meaningful filler content to mockups and
							drafts, this extension brings compassion and fun to your development
							workflow without leaving your editor.
						</p>
						<p>
							This extension seamlessly integrates with VS Code&apos;s Command Palette
							and supports multiple output formats to suit a variety of use cases.
						</p>
					</SectionHeader>
				</Container>
			</Section>

			<Section
				id="installation"
				aria-label="Installation instructions for the Vegan Ipsum VS Code Extension"
				className="bg-secondary-muted"
			>
				<Container>
					<SectionHeader
						heading="Installation"
						tagline="Setup Guide"
						icon={<LiaKeyboardSolid className="h-4 w-4" />}
					>
						<p>
							You can easily add the Vegan Ipsum extension to your VS Code setup in
							two ways:
						</p>

						<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
							<div className="border-border rounded-2xl border bg-white p-6 md:p-8">
								<div className="mb-6 flex items-center gap-3">
									<div className="border-border bg-secondary-muted/50 text-secondary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border text-2xl">
										<LiaSearchSolid />
									</div>
									<div>
										<h3 className="mb-1 text-lg">
											Method 1: Extensions Marketplace
										</h3>
										<p className="text-sm">Install via the VSCode UI</p>
									</div>
								</div>
								<ol className="space-y-3 text-sm leading-relaxed">
									{[
										<>Open Visual Studio Code on your machine</>,
										<>
											Navigate to Extensions sidebar (
											<kbd className="kbd">Ctrl+Shift+X</kbd> or{" "}
											<kbd className="kbd">Cmd+Shift+X</kbd>)
										</>,
										<>
											Search for <strong>Vegan Ipsum</strong>
										</>,
										<>
											Click <strong>Install</strong> button
										</>,
										<>Reload VSCode if prompted</>,
									].map((step, index) => (
										<li key={index} className="flex items-baseline gap-3">
											<span className="bg-secondary-muted text-secondary-dark inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold">
												{index + 1}
											</span>
											<span>{step}</span>
										</li>
									))}
								</ol>
							</div>
							<div className="border-border from-secondary-100 to-secondary-200 rounded-3xl border bg-gradient-to-br p-8">
								<div className="text-secondary mb-6 flex items-center gap-3">
									<div className="border-secondary/40 bg-secondary/20 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border text-2xl">
										<LiaKeyboardSolid />
									</div>
									<div>
										<h3 className="text-secondary-solid mb-1 text-lg">
											Method 2: Command Palette
										</h3>
										<p className="text-sm">Quick install via command</p>
									</div>
								</div>
								<p className="mb-4 text-sm leading-relaxed">
									Open Command Palette and run:
								</p>
								<div className="rounded-xl border border-slate-700 bg-slate-950 p-5 font-mono text-sm">
									<div className="text-primary-muted flex items-center gap-2">
										<span className="text-amber-500">&gt;</span>
										<span>ext install vegan-ipsum</span>
									</div>
								</div>
								<div className="border-secondary/20 bg-secondary/10 text-secondary-dark mt-5 flex items-start gap-2 rounded-xl border px-4 py-3">
									<span className="flex-shrink-0 text-2xl">
										<LiaLightbulbSolid />
									</span>
									<p className="text-sm leading-relaxed">
										This command triggers installation without navigating away
										from your editor.
									</p>
								</div>
							</div>
						</div>
					</SectionHeader>
				</Container>
			</Section>

			<Section
				id="usage"
				aria-label="Usage instructions for the Vegan Ipsum VS Code Extension"
			>
				<Container>
					<SectionHeader
						heading="Usage"
						tagline="How to use"
						icon={<LiaRocketSolid className="h-4 w-4" />}
					>
						<p>
							Once installed, generating vegan-themed placeholder text is quick and
							straightforward.
						</p>

						<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
							{[
								{
									heading: "Open Command Palette",
									content: (
										<>
											Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>{" "}
											(Win/Linux) or <kbd>Cmd</kbd>+<kbd>Shift</kbd>+
											<kbd>P</kbd> (macOS)
										</>
									),
								},
								{
									heading: "Search Vegan Ipsum",
									content: (
										<>Type to see all available commands for the extension</>
									),
								},
								{
									heading: "Select Command",
									content: (
										<>
											Choose paragraph, sentence, or word command based on
											your needs
										</>
									),
								},
								{
									heading: "Text Inserted!",
									content: (
										<>Vegan ipsum appears at your cursor position instantly</>
									),
								},
							].map((step, index) => (
								<div
									key={index}
									className="border-border flex items-start gap-4 rounded-2xl border bg-white p-7 shadow-md"
								>
									<div className="bg-primary-muted/80 text-primary-dark border-green-mid mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-lg font-bold">
										{index + 1}
									</div>
									<div>
										<h3 className="mb-2 text-lg">{step.heading}</h3>
										<p className="text-sm leading-relaxed">{step.content}</p>
									</div>
								</div>
							))}
						</div>

						<div className="bg-primary-muted border-primary/40 text-primary-dark flex items-start gap-3 rounded-2xl border px-5 py-4">
							<span className="flex-shrink-0 text-2xl">
								<LiaLightbulbSolid />
							</span>
							<p>
								<strong>Pro Tip:</strong> You can use this in any text-based file
								type (HTML, Markdown, JSON, JavaScript), or even plain text, making
								it versatile for many workflows.
							</p>
						</div>
					</SectionHeader>
				</Container>
			</Section>

			<Section
				id="features"
				aria-label="Features of the Vegan Ipsum VS Code Extension"
				className="bg-secondary-muted"
			>
				<Container>
					<SectionHeader
						heading="Features"
						tagline="Capabilities"
						icon={<LiaSketch className="h-4 w-4" />}
					>
						<p>
							Some of the key features that make the Vegan Ipsum VS Code Extension a
							must-have tool for developers and designers:
						</p>

						<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
							{[
								{
									icon: <FcFlashOn />,
									heading: "Instant Generation",
									content:
										"Generate placeholder text without leaving your code editor — no context switching required.",
								},
								{
									icon: <FcTodoList />,
									heading: "Multiple Text Units",
									content:
										"Choose from words, sentences, or paragraphs to match your specific content needs.",
								},
								{
									icon: <FcElectronics />,
									heading: "Command Palette Integration",
									content:
										"Simple, command-based interface that integrates naturally with VSCode workflows.",
								},
								{
									icon: <FcNook />,
									heading: "Universal File Support",
									content:
										"Works in any text-based file format — HTML, CSS, JS, Markdown, JSON, and more.",
								},
								{
									icon: <FcSportsMode />,
									heading: "Lightweight & Fast",
									content:
										"Minimal footprint with no impact on your editor's performance or startup time.",
								},
								{
									icon: <FcReading />,
									heading: "Ethical & Meaningful",
									content:
										"Perfect for ethically themed projects or adding a meaningful twist to placeholder content.",
								},
							].map((step, index) => (
								<div
									key={index}
									className="border-border relative rounded-2xl border bg-white p-6 shadow-md transition-shadow hover:shadow-lg md:p-8"
								>
									<h3 className="mb-2 flex items-center gap-2 text-lg">
										<span className="relative top-0.5 text-xl">
											{step.icon}
										</span>{" "}
										{step.heading}
									</h3>
									<p className="text-sm leading-relaxed">{step.content}</p>
								</div>
							))}
						</div>
					</SectionHeader>
				</Container>
			</Section>

			<Section
				id="support"
				aroia-label="Support and feedback for the Vegan Ipsum VS Code Extension"
			>
				<Container>
					<SectionHeader
						heading="Support & Feedback"
						tagline="Found a bug"
						icon={<LiaBugSolid className="h-4 w-4" />}
					>
						<p>
							As an independently developed extension, I rely heavily on user feedback
							to squash bugs and prioritize updates. If something isn&apos;t working
							as expected or if you have a feature request please let me know by
							submitting an issue on{" "}
							<SmartLink
								href="https://github.com/vijayhardaha/vscode-vegan-ipsum/issues"
								className="text-primary"
								aria-label="Vegan Ipsum VS Code Extension GitHub Issues Page"
							>
								GitHub Issues Page
							</SmartLink>{" "}
							. I don&apos;t have a social media presence for this project, so GitHub
							is the best and only way to get in touch!
						</p>
						<p></p>
					</SectionHeader>
				</Container>
			</Section>
		</>
	);
}
