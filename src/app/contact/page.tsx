import React from "react";

import Link from "next/link";

import PageHeader from "@/components/layout/PageHeader";
import SectionContainer from "@/components/layout/SectionContainer";
import { generateMetadata as genMeta, Metadata } from "@/utils/seoUtils";

/**
 * SEO metadata for the Contact page.
 * @type {Metadata}
 */
export const metadata: Metadata = genMeta({
  title: "Contact Vegan Ipsum",
  description:
    "Get in touch with the creator of Vegan Ipsum. Explore related tools, open-source projects, and social media profiles for ethical web development.",
  slug: "contact",
});

/**
 * Represents a link with an href and display text.
 */
type Link = {
  href: string;
  text: string;
};

/**
 * List of project-related links.
 * Each link includes an href (URL) and display text.
 */
const projectLinks: Link[] = [
  { href: "https://www.npmjs.com/package/vegan-ipsum", text: "Vegan Ipsum NPM Package" },
  {
    href: "https://github.com/vijayhardaha/node-vegan-ipsum",
    text: "Node.js Vegan Ipsum GitHub Repository",
  },
  {
    href: "https://marketplace.visualstudio.com/items/?itemName=vijayhardaha.vegan-ipsum",
    text: "Vegan Ipsum VS Code Extension",
  },
  {
    href: "https://github.com/vijayhardaha/vscode-vegan-ipsum",
    text: "VS Code Vegan Ipsum GitHub Repository",
  },
  {
    href: "https://github.com/vijayhardaha/website-vegan-ipsum",
    text: "Vegan Ipsum Website GitHub Repository",
  },
  {
    href: "https://github.com/vijayhardaha/vegan-ipsum-api",
    text: "Vegan Ipsum API GitHub Repository",
  },
];

/**
 * List of social/contact links for the author.
 * Each link includes an href (URL) and display text.
 */
const socialLinks: Link[] = [
  { href: "https://github.com/vijayhardaha", text: "GitHub Profile" },
  { href: "https://instagram.com/vegan.vijay", text: "Instagram Profile" },
  { href: "https://x.com/vijayhardaha", text: "X (formerly Twitter) Profile" },
  { href: "https://pph.me/vijayhardaha", text: "PeoplePerHour Profile" },
];

/**
 * The ContactPage component renders the contact page of the Vegan Ipsum website.
 *
 * @returns {React.JSX.Element} The rendered ContactPage component.
 */
export default function ContactPage(): React.JSX.Element {
  return (
    <SectionContainer>
      <PageHeader
        title="Contact Vegan Ipsum"
        subtitle="Connect with the creator of Vegan Ipsum. Find links to the projects, tools, and social media profiles. Reach out for collaboration, feedback, or inquiries. All inquiries are welcome!"
      />

      <section aria-labelledby="projects" role="region">
        <h2 id="projects" className="mb-2 text-2xl">
          Vegan Ipsum Projects
        </h2>
        <div className="space-y-4">
          <p>
            Explore the various Vegan Ipsum projects that power this ethical, plant-based lorem ipsum generator. Whether
            you’re interested in the open-source code, API documentation, or developer tools, you’ll find everything you
            need to get started below:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            {projectLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:opacity-75"
                  aria-label={`Open ${link.text} project in a new tab`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-4 text-sm">
            All projects are actively maintained and open-source, welcoming contributions from developers and designers
            passionate about ethical technology and plant-based lifestyles.
          </p>
        </div>
      </section>

      <section aria-labelledby="author-contact" role="region">
        <h2 id="author-contact" className="mb-2 text-2xl">
          Author Contact Links
        </h2>
        <div className="space-y-4">
          <p>
            If you want to connect directly with the creator of Vegan Ipsum, collaborate on new features, provide
            feedback, or discuss potential partnerships, use the following social media and professional links:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:opacity-75"
                  aria-label={`Open ${link.text} profile in a new tab`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-4 text-sm">
            Whether you’re a fellow developer, designer, content creator, or vegan advocate, all inquiries and
            conversations are warmly welcomed.
          </p>
        </div>
      </section>

      <section aria-labelledby="contact-details" role="region">
        <h2 id="contact-details" className="mb-2 text-2xl">
          Additional Contact Details
        </h2>
        <div className="space-y-4">
          <p>
            For business inquiries, collaboration proposals, bug reports, or general feedback about Vegan Ipsum, please
            don’t hesitate to get in touch. Your input helps improve the project and ensures Vegan Ipsum remains a
            valuable resource for the ethical design and development community.
          </p>
          <p>
            You can also join the Vegan Ipsum community on various platforms to stay updated on new releases, feature
            requests, and community discussions.
          </p>
        </div>
      </section>
    </SectionContainer>
  );
}
