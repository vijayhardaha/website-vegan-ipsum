"use client";

import { FormEvent, ReactNode, useEffect, useState } from "react";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import Select from "@/components/ui/select";

/**
 * Props for the IpsumForm component.
 */
interface IpsumFormProps {
	setOutput: (output: string) => void;
}

/**
 * IpsumForm component for generating vegan ipsum text based on user input.
 *
 * @param {IpsumFormProps} props - The props for the component, including a function to set the generated output.
 * @returns {ReactNode} The rendered component.
 */
export default function IpsumForm({ setOutput }: IpsumFormProps): ReactNode {
	const [selectedType, setSelectedType] = useState<"paragraphs" | "sentences" | "words">(
		"paragraphs"
	);
	const [amount, setAmount] = useState<string>("3");
	const [loading, setLoading] = useState<boolean>(false);

	/**
	 * Handles the generation of vegan ipsum text by making an API call.
	 * Updates the output or sets an error message in case of failure.
	 */
	const handleGenerate = async (): Promise<void> => {
		setLoading(true); // Set loading state
		try {
			const response = await fetch(
				`/api/?count=${Number(amount)}&units=${selectedType}&format=plain`
			);

			if (!response.ok) {
				throw new Error("Failed to generate text");
			}

			const data: { text: string } = await response.json();

			setOutput(data.text);
		} catch (error) {
			console.error(error);
			const errorMessage = "Error generating text. Please try again.";
			setOutput(errorMessage);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		handleGenerate(); // Generate text on initial load
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	/**
	 * Handles the form submission event.
	 * Prevents default behavior and triggers the text generation process.
	 * @param event - The form submission event
	 */
	const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		handleGenerate();
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
						aria-label="Select type of text to generate"
						required
					/>
				</div>
			</div>

			<Button
				type="submit"
				aria-label="Generate Vegan Ipsum"
				disabled={loading}
				className="md:mt-6"
				size="lg"
			>
				{loading ? "Please Wait..." : "Generate Ipsum"}
			</Button>
		</form>
	);
}
