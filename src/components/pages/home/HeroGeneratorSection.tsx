"use client";

import React, { useState } from "react";

import GeneratorForm from "@/components/pages/home/GeneratorForm";
import { Button } from "@/components/ui/button";

import HeroSection from "./HeroSection";

/**
 * The HeroGeneratorSection component combines the hero section and generator form.
 * It also displays the generated output with a copy-to-clipboard feature.
 *
 * @returns {React.JSX.Element} The rendered section.
 */
export default function HeroGeneratorSection(): React.JSX.Element {
  const [output, setOutput] = useState<string>(""); // Stores the generated output
  const [copied, setCopied] = useState<boolean>(false); // Tracks if the text has been copied

  /**
   * Copies the generated output to the clipboard and shows a "Copied!" message.
   */
  const handleCopyToClipboard = (): void => {
    navigator.clipboard.writeText(output).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  /**
   * Calculates the summary of the generated output.
   * @param {string} text - The generated output text.
   * @returns {string} The summary message.
   */
  const getOutputSummary = (text: string): string => {
    const paragraphs = text.split("\n").filter((line) => line.trim() !== "").length;
    const words = text.split(/\s+/).filter((word) => word.trim() !== "").length;
    const bytes = new TextEncoder().encode(text).length;
    return `Generated ${paragraphs} paragraphs, ${words} words, ${bytes} bytes of text.`;
  };

  return (
    <>
      <section
        className="grid grid-cols-1 items-start gap-12 md:grid-cols-2"
        aria-labelledby="hero-section-title"
      >
        {/* Hero Section */}
        <HeroSection />

        {/* Generator Form */}
        <GeneratorForm setOutput={setOutput} />
      </section>

      {/* Display Form Output */}
      {output && (
        <section
          className="bg-muted/85 mt-16 space-y-4 p-6"
          aria-labelledby="generated-output-title"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <h2 id="generated-output-title" className="text-xl font-bold">
                Generated Output:
              </h2>
              <p className="text-muted-foreground text-sm">{getOutputSummary(output)}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="dark"
                onClick={handleCopyToClipboard}
                aria-label={copied ? "Text copied to clipboard" : "Copy text to clipboard"}
              >
                {copied ? "Copied!" : "Copy Text"}
              </Button>
            </div>
          </div>
          <div className="space-y-4" aria-live="polite">
            {output.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
