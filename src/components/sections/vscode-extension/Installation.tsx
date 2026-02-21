import { ReactNode } from "react";

import { LiaLightbulbSolid, LiaSearchSolid, LiaKeyboardSolid } from "react-icons/lia";

import Container from "@/components/composites/Container";
import Section from "@/components/composites/Section";
import SectionHeader from "@/components/composites/SectionHeader";

/**
 * This component renders the installation section for the VS Code Extension page.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function Installation(): ReactNode {
	return (
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
						You can easily add the Vegan Ipsum extension to your VS Code setup in two
						ways:
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
									This command triggers installation without navigating away from
									your editor.
								</p>
							</div>
						</div>
					</div>
				</SectionHeader>
			</Container>
		</Section>
	);
}
