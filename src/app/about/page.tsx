import PageHeader from "@/components/layout/PageHeader";
import SectionContainer from "@/components/layout/SectionContainer";
import { generateMetadata as genMeta, Metadata } from "@/utils/seoUtils";

/**
 * SEO metadata for the About page.
 * @type {Metadata}
 */
export const metadata: Metadata = genMeta({
  title: "About",
  description:
    "Learn about Vegan Ipsum, a lightweight, developer-friendly lorem ipsum alternative with a vegan theme.",
  slug: "about",
});

/**
 * The AboutPage component renders the about page of the Vegan Ipsum website.
 *
 * @returns {React.JSX.Element} The rendered AboutPage component.
 */
export default function AboutPage(): React.JSX.Element {
  return (
    <SectionContainer>
      <PageHeader
        title="About"
        subtitle="A lightweight, developer-friendly lorem ipsum alternative with a vegan theme. Comes as an API, NPM package, CLI, and VS Code extension."
      />

      <section aria-labelledby="what-is-vegan-ipsum-section">
        <h2 id="what-is-vegan-ipsum-section" className="mb-1 text-2xl">
          What Is Vegan Ipsum?
        </h2>
        <p>
          Vegan Ipsum is a modern, developer-centric placeholder text generator that delivers
          content themed around plant-based and eco-conscious vocabulary. Whether you're designing a
          vegan blog, an ethical product website, or just want some fun filler text, Vegan Ipsum is
          a drop-in replacement for traditional lorem ipsum.
        </p>
      </section>

      <section aria-labelledby="background-section">
        <h2 id="background-section" className="mb-1 text-2xl">
          Background
        </h2>
        <p>
          One day, while browsing through the list at{" "}
          <a
            href="https://loremipsum.io/ultimate-list-of-lorem-ipsum-generators/"
            target="_blank"
            rel="noopener noreferrer"
          >
            loremipsum.io
          </a>
          , I noticed a trend—people were creating customized versions of lorem ipsum text for their
          niche communities. Out of curiosity, I searched for a vegan-themed generator, only to
          discover there wasn't any well-maintained or up-to-date project available. That sparked
          the idea for Vegan Ipsum.
        </p>
      </section>

      <section aria-labelledby="core-features-section">
        <h2 id="core-features-section" className="mb-1 text-2xl">
          Core Features
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>API:</strong> Hosted endpoint to fetch vegan-themed placeholder text
            dynamically.
          </li>
          <li>
            <strong>NPM Package:</strong> Install and generate placeholder content inside your
            JavaScript/TypeScript apps.{" "}
            <code className="bg-muted rounded px-1 py-0.5 text-sm">npm install vegan-ipsum</code>
          </li>
          <li>
            <strong>CLI Tool:</strong> Use Vegan Ipsum directly from your terminal to copy
            placeholder content into your project files.
          </li>
          <li>
            <strong>VS Code Extension:</strong> Generate vegan placeholder text with a keyboard
            shortcut inside your editor.
          </li>
        </ul>
      </section>

      <section aria-labelledby="customization-section">
        <h2 id="customization-section" className="mb-1 text-2xl">
          Customization
        </h2>
        <p>
          The NPM and API versions of Vegan Ipsum allow full control over the output. You can
          specify:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>
            <code>count</code> – Number of items to return (default: 3)
          </li>
          <li>
            <code>units</code> – <code>paragraphs</code> | <code>sentences</code> |{" "}
            <code>words</code>
          </li>
          <li>
            <code>format</code> – <code>plain</code> | <code>html</code>
          </li>
        </ul>
      </section>

      <section aria-labelledby="technical-overview-section">
        <h2 id="technical-overview-section" className="mb-1 text-2xl">
          Technical Overview
        </h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Written in modern TypeScript.</li>
          <li>Zero dependencies.</li>
          <li>Functional programming style.</li>
          <li>Supports both CommonJS and ESM.</li>
          <li>Actively maintained with semantic versioning.</li>
        </ul>
      </section>

      <section aria-labelledby="use-cases-section">
        <h2 id="use-cases-section" className="mb-1 text-2xl">
          Use Cases
        </h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Design mockups for vegan and eco-conscious products.</li>
          <li>Placeholder content for ethical brands and campaigns.</li>
          <li>Text generation for educational apps and plant-based startups.</li>
          <li>Fun filler text for blogs, SaaS apps, and personal portfolios.</li>
        </ul>
      </section>
    </SectionContainer>
  );
}
