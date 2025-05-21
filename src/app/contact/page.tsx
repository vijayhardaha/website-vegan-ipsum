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

      <section aria-labelledby="projects">
        <h2 id="projects" className="mb-1 text-2xl">
          Vegan Ipsum Projects
        </h2>
        <div className="space-y-4">
          <p>Here are some key links to explore the Vegan Ipsum projects:</p>
          <ul className="list-disc space-y-1 pl-6">
            {projectLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:opacity-75"
                  aria-label={`Open ${link.text} in a new tab`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="author-contact">
        <h2 id="author-contact" className="mb-1 text-2xl">
          Author Contact Links
        </h2>
        <div className="space-y-4">
          <p>If you'd like to get in touch with the author, here are the contact links:</p>
          <ul className="list-disc space-y-1 pl-6">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:opacity-75"
                  aria-label={`Open ${link.text} in a new tab`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="contact-details">
        <h2 id="contact-details" className="mb-1 text-2xl">
          Additional Contact Details
        </h2>
        <div className="space-y-4">
          <p>
            If you'd like to reach out for collaboration, feedback, or queries, feel free to contact via the links
            above. All inquiries are welcome!
          </p>
        </div>
      </section>
    </SectionContainer>
  );
}
