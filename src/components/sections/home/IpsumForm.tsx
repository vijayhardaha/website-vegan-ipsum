"use client";

import { SubmitEvent, useCallback, useEffect, useRef, useState } from "react";
import type { JSX } from "react";

import Button from "@/components/primitives/Button";
import Input from "@/components/primitives/Input";
import Label from "@/components/primitives/Label";
import Select from "@/components/primitives/Select";

/**
 * Props for the IpsumForm component.
 */
interface IpsumFormProps {
	setOutput: (output: string) => void;
}

/**
 * Type definition for the different types of units that can be generated (paragraphs, sentences, or words).
 */
type LoremType = "paragraphs" | "sentences" | "words";

/**
 * IpsumForm component for generating vegan ipsum text based on user input.
 *
 * @param {IpsumFormProps} props - The props for the component, including a function to set the generated output.
 * @returns {JSX.Element} The rendered component.
 */
export default function IpsumForm({ setOutput }: IpsumFormProps): JSX.Element {
	const [selectedType, setSelectedType] = useState<LoremType>("paragraphs");
	const [amount, setAmount] = useState<string>("3");
	const [loading, setLoading] = useState<boolean>(false);

	// Ref to store the AbortController across renders
	const abortControllerRef = useRef<AbortController | null>(null);

	/**
	 * Handles the generation of vegan ipsum text by making an API call.
	 * Updates the output or sets an error message in case of failure.
	 */
	const handleGenerate = useCallback(
		async (type: LoremType, amount: string): Promise<void> => {
			if (abortControllerRef.current) {
				abortControllerRef.current.abort(); // Abort any ongoing request
			}

			const controller = new AbortController();
			abortControllerRef.current = controller;
			const signal = controller.signal;

			setLoading(true); // Set loading state

			try {
				const response = await fetch(
					`/api?count=${Number(amount)}&units=${type}&format=plain`,
					{ signal }
				);

				if (!response.ok) {
					throw new Error("Failed to generate text");
				}

				const data: { text: string } = await response.json();

				// Only update state if this specific request wasn't aborted
				if (!signal.aborted) {
					setOutput(data.text);
				}
			} catch (error) {
				if (error instanceof Error && error.name === "AbortError") {
					console.log("Request successfully stopped by user");
					setOutput("Request cancelled."); // Optional: Show cancellation message
					return;
				}

				console.error(error);
				setOutput("Error generating text. Please try again.");
			} finally {
				setLoading(false);
			}
		},
		[setOutput, setLoading]
	);

	useEffect(() => {
		// Call once on mount to generate initial ipsum.
		void handleGenerate(selectedType, amount);

		// 6. CLEANUP FUNCTION
		// This runs when the component unmounts.
		return () => {
			abortControllerRef.current?.abort(); // Abort any ongoing request when the component unmounts
			abortControllerRef.current = null; // Clear the ref to prevent memory leaks
			console.log("Component unmounted, ongoing request aborted if any.");
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	/**
	 * Handles the form submission event.
	 * Prevents default behavior and triggers the text generation process.
	 * @param event - The form submission event
	 */
	const handleSubmit = (event: SubmitEvent<HTMLFormElement>): void => {
		event.preventDefault();
		handleGenerate(selectedType, amount);
	};

	return (
		<form
			id="generate-vegan-ipsum-form"
			onSubmit={handleSubmit}
			className="flex flex-col flex-wrap gap-4 md:flex-row md:space-y-0"
			aria-label="Vegan Ipsum Generator Form"
		>
			<div className="flex flex-1 items-center gap-4">
				<div className="flex-1 space-y-2">
					<Label
						htmlFor="form-amount"
						className="text-secondary-800 mb-2 block text-xs font-bold tracking-wide uppercase"
					>
						Number of units
					</Label>
					<Input
						id="form-amount"
						className="w-full"
						type="number"
						min="1"
						max="30"
						step="1"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						aria-label="Number of units to generate"
						required
					/>
				</div>

				<div className="flex-1 space-y-2">
					<Label
						className="text-secondary-800 mb-2 block text-xs font-bold tracking-wide uppercase"
						htmlFor="form-type"
					>
						Generate As
					</Label>
					<Select
						id="form-type"
						className="w-full"
						value={selectedType}
						options={[
							{ label: "Paragraphs", value: "paragraphs" },
							{ label: "Sentences", value: "sentences" },
							{ label: "Words", value: "words" },
						]}
						onValueChange={(value) =>
							setSelectedType(value as "paragraphs" | "sentences" | "words")
						}
						aria-label="Select the type of units to generate (paragraphs, sentences, or words)"
						required
					/>
				</div>
			</div>

			<Button
				type="submit"
				aria-label="Generate Vegan Ipsum Text"
				disabled={loading}
				className="md:mt-6"
				size="lg"
			>
				{loading ? "Please Wait..." : "Generate Ipsum"}
			</Button>
		</form>
	);
}
