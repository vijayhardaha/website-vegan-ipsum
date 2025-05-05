import React from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

/**
 * CallToActionSection component renders a call-to-action section
 * encouraging users to connect with the team for questions,
 * contributions, or feedback.
 *
 * @returns {React.JSX.Element} The rendered call-to-action section.
 */
export default function CallToActionSection(): React.JSX.Element {
  return (
    <section className="bg-muted/65 p-6 md:p-8 lg:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="space-y-2">
          <h2 className="text-2xl">Get in Touch</h2>
          <p>
            Whether you're a developer, designer, content creator, or a passionate vegan, we’d love
            to connect. Share your ideas, contribute to the project, or just drop a friendly hello.
            Feedback and collaboration make this project better.
          </p>
        </div>
        <Button asChild variant="dark" size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
}
