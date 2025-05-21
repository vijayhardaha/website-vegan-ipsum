"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label, labelVariants } from "@/components/ui/label";
import { RadioBox } from "@/components/ui/radiobox";
import { cn } from "@/utils/classNameUtils";

interface GeneratorFormProps {
  /** Callback to set the generated output text */
  setOutput: (output: string) => void;
}

export default function GeneratorForm({ setOutput }: GeneratorFormProps): React.JSX.Element {
  const [selectedType, setSelectedType] = useState<"paragraphs" | "sentences" | "words">("paragraphs");
  const [amount, setAmount] = useState<string>("3");
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * Handles the generation of vegan ipsum text by making an API call.
   * Updates the output or sets an error message in case of failure.
   */
  const handleGenerate = async (): Promise<void> => {
    setLoading(true); // Set loading state
    try {
      const response = await fetch(`/api/?count=${Number(amount)}&units=${selectedType}&format=plain`);
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
      setLoading(false); // Reset loading state
    }
  };

  /**
   * Handles the form submission event.
   * Prevents default behavior and triggers the text generation process.
   * @param event - The form submission event
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleGenerate();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-muted/85 w-full space-y-6 p-6" aria-labelledby="generator-form-title">
      <h2 id="generator-form-title" className="sr-only">
        Vegan Ipsum Generator Form
      </h2>

      <div className="space-y-2">
        <Label htmlFor="amount">Number of units</Label>
        <Input
          id="amount"
          type="number"
          min="1"
          max="100"
          step="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          aria-label="Number of units to generate"
          required
        />
      </div>

      <div className="space-y-2">
        <span className={cn(labelVariants())} id="generation-type-label">
          What to Generate:
        </span>
        <div className="flex flex-wrap gap-4" role="radiogroup" aria-labelledby="generation-type-label">
          <RadioBox
            checked={selectedType === "paragraphs"}
            onCheckedChange={() => setSelectedType("paragraphs")}
            aria-label="Generate paragraphs"
          >
            Paragraphs
          </RadioBox>
          <RadioBox
            checked={selectedType === "sentences"}
            onCheckedChange={() => setSelectedType("sentences")}
            aria-label="Generate sentences"
          >
            Sentences
          </RadioBox>
          <RadioBox
            checked={selectedType === "words"}
            onCheckedChange={() => setSelectedType("words")}
            aria-label="Generate words"
          >
            Words
          </RadioBox>
        </div>
      </div>

      <Button type="submit" aria-label="Generate Vegan Ipsum" disabled={loading}>
        {loading ? "Generating..." : "Generate Vegan Ipsum"}
      </Button>
    </form>
  );
}
