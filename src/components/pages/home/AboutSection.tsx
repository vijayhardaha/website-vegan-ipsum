import React from "react";

import Link from "next/link";
import { LiaCodeSolid, LiaNpm, LiaCloudSolid, LiaTerminalSolid } from "react-icons/lia";

import { Button } from "@/components/ui/button";

/**
 * Represents the details of a card displayed in the AboutSection component.
 */
interface CardDetail {
  icon: React.JSX.Element;
  heading: string;
  description: string;
  link: string;
  buttonText: string;
}

/**
 * An array of card details used to render the cards in the AboutSection component.
 */
const cardDetails: CardDetail[] = [
  {
    icon: <LiaCodeSolid />,
    heading: "VS Code Extension",
    description: "Quickly generate vegan Ipsum placeholder text within your VS Code editor.",
    link: "/vscode-extension",
    buttonText: "Get Extension",
  },
  {
    icon: <LiaCloudSolid />,
    heading: "JSON API",
    description: "Fetch compassionate placeholder content via our simple and powerful API.",
    link: "/json-api",
    buttonText: "Explore API",
  },
  {
    icon: <LiaTerminalSolid />,
    heading: "Node CLI Tool",
    description: "Use your terminal to create vegan Ipsum text on demand for any use case.",
    link: "/node-cli",
    buttonText: "Get CLI Tool",
  },
  {
    icon: <LiaNpm />,
    heading: "NPM Package",
    description: "Easily integrate vegan-themed Ipsum generation into any Node.js project.",
    link: "/npm-package",
    buttonText: "Learn More",
  },
];

/**
 * AboutSection component displays information about Vegan Ipsum in a grid of cards.
 * Each card contains an icon, heading, description, and a button with a link.
 *
 * @returns {React.JSX.Element} The rendered AboutSection component.
 */
export default function AboutSection(): React.JSX.Element {
  return (
    <section className="space-y-8" aria-labelledby="about-vegan-ipsum-heading">
      <div className="section-header">
        <h2 id="about-vegan-ipsum-heading" className="text-primary mb-1 text-2xl">
          About Vegan Ipsum
        </h2>
        <div className="space-y-4">
          <p>
            Vegan Ipsum is a thoughtful alternative to traditional placeholder text, featuring
            subtle references to plant-based and compassionate living. It functions just like Lorem
            Ipsum, while offering a fresh thematic option for those who appreciate vegan-aligned
            content, even in mockups.
          </p>

          <p>
            Whether you're building layouts, testing typography, or populating wireframes, Vegan
            Ipsum delivers clean, readable filler content in the form of words, sentences, or
            paragraphs — ready for integration across web and app projects.
          </p>

          <p>
            The content is neutral, non-disruptive, and suitable for all audiences, making it ideal
            for use in production demos, open-source projects, portfolios, and design systems where
            meaningful defaults are preferred.
          </p>

          <p>
            Vegan Ipsum is accessible via multiple tools — REST API, Node CLI, VS Code extension,
            and NPM package — making it easy to adopt in frontend development, automation scripts,
            or editor workflows with minimal setup.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
        {cardDetails.map((card, index) => (
          <div
            key={index}
            className="border-border space-y-2 border p-4"
            role="listitem"
            aria-labelledby={`card-heading-${index}`}
          >
            <div className="text-primary text-4xl">{card.icon}</div>
            <h3 id={`card-heading-${index}`} className="text-foreground text-lg">
              {card.heading}
            </h3>
            <p className="text-muted-foreground text-sm">{card.description}</p>
            <Button asChild size="sm" variant="light" className="mt-4">
              <Link href={card.link} aria-label={`Learn more about ${card.heading}`}>
                {card.buttonText}
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
