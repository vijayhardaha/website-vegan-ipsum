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
    <div aria-labelledby="hero-heading">
      <h1 id="hero-heading" className="mb-1 text-4xl">
        Vegan Ipsum
      </h1>
      <p className="text-foreground text-xl">
        Ethical placeholder text for compassionate creators.
      </p>
      <p className="text-muted-foreground mt-4 text-base">
        Vegan Ipsum is a free and open-source tool that generates vegan-themed placeholder text for
        your projects. Whether you're designing a website, creating a presentation, or just need
        some filler text, Vegan Ipsum has you covered.
      </p>
      <div className="mt-6 flex gap-4">
        <Button asChild variant="outline" aria-label="Explore the Vegan Ipsum API">
          <Link href="/json-api">Explore API</Link>
        </Button>
        <Button asChild aria-label="Get the Vegan Ipsum browser extension">
          <Link href="/vscode-extension">Get Extension</Link>
        </Button>
      </div>
    </div>
  );
}
