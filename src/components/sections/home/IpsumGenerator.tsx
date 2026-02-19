"use client";

import React, { useState } from "react";

import { LiaHashtagSolid } from "react-icons/lia";

import Container from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import GeneratorForm from "@/components/sections/home/parts/IpsumForm";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/classNameUtils";

/**
 * IpsumGenerator component for displaying the main introduction and call-to-action buttons.
 *
 * @returns {React.ReactNode} The rendered IpsumGenerator component.
 *
 */
export default function IpsumGenerator(): React.ReactNode {
	const [output, setOutput] = useState<string>(""); // Stores the generated output
	const [copied, setCopied] = useState<boolean>(false); // Tracks if the text has been copied

	/**
	 * Copies the generated output to the clipboard and shows a "Copied!" message.
	 */
	const handleCopyToClipboard = (): void => {
		navigator.clipboard.writeText(output).then(
			() => {
				setCopied(true);
				setTimeout(() => setCopied(false), 1000);
			},
			(err) => {
				console.error("Failed to copy text: ", err);
			}
		);
	};

	/**
	 * Calculates the number of paragraphs in the generated text.
	 * @param {string} text - The generated output text.
	 * @returns The paragraph count of the text.
	 */
	const calculateParagraphs = (text: string): number =>
		text.split("\n").filter((line) => line.trim() !== "").length;

	/**
	 * Calculates the number of words in the generated text.
	 * @param {string} text - The generated output text.
	 * @returns The word count of the text.
	 */
	const calculateWords = (text: string): number =>
		text.split(/\s+/).filter((word) => word.trim() !== "").length;

	/**
	 * Calculates the byte size of the generated text.
	 * @param {string} text - The generated output text.
	 * @returns The byte size of the text.
	 */
	const calculateBytes = (text: string): number => new TextEncoder().encode(text).length;

	/**
	 * Calculates the summary of the generated output.
	 * @param {string} text - The generated output text.
	 * @returns {string} The summary message.
	 */
	const getOutputSummary = (text: string): string =>
		`Generated ${calculateParagraphs(text)} paragraphs, ${calculateWords(text)} words, ${calculateBytes(text)} bytes of text.`;

	return (
		<Section id="generate-vegan-ipsum" aria-label="Online Vegan Ipsum Generator Tool">
			<Container>
				<SectionHeader
					heading={
						<>
							Generate <span className="text-primary">Vegan Ipsum</span>
						</>
					}
					tagline="The Tool"
					icon={<LiaHashtagSolid className="h-4 w-4" />}
				>
					<p>
						Instantly create plant-based placeholder text tailored to your project
						needs.
					</p>

					<div className="border-border mt-8 rounded-2xl border bg-white p-5 md:p-7">
						{/* Generator Form */}
						<GeneratorForm setOutput={setOutput} />

						{/* Display Form Output */}
						{output && (
							<div className="mt-8 space-y-4">
								<div className="flex items-start justify-between gap-12">
									<div className="space-y-0.5">
										<h2 id="generated-text" className="text-xl font-bold">
											Generated Text:
										</h2>
										<p className="text-muted-foreground max-w-[220px] text-sm sm:max-w-lg">
											{getOutputSummary(output)}
										</p>
									</div>
									<div className="flex items-center gap-2">
										<Button
											size="sm"
											variant="secondary"
											onClick={handleCopyToClipboard}
											aria-label={
												copied
													? "Text copied to clipboard"
													: "Copy text to clipboard"
											}
										>
											{copied ? "Copied!" : "Copy"}
										</Button>
									</div>
								</div>

								<div
									className={cn(
										"bg-input/20 border-border space-y-4 rounded-2xl border p-6",
										calculateParagraphs(output) > 4 &&
											"max-h-96 overflow-y-auto"
									)}
									aria-live="polite"
									aria-atomic="true"
								>
									{output.split("\n").map((line, index) => (
										<p key={index}>{line}</p>
									))}
								</div>
							</div>
						)}
					</div>
				</SectionHeader>
			</Container>
		</Section>
	);
}
