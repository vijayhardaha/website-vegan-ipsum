import type { JSX } from 'react';

import { contactPageSchema, breadcrumbSchema } from '@vijayhardaha/schema-builder';
import { JsonLd } from '@vijayhardaha/schema-builder/react';
import type { Metadata } from 'next';

import PageHeader from '@/components/composites/PageHeader';
import { Author, Projects } from '@/components/sections/contact';
import { buildMetadata } from '@/utils/meta';
import { globalSchema, buildBreadcrumbs } from '@/utils/schema';
import { siteUrl } from '@/utils/seo';

const title = 'Contact Vegan Ipsum - Creator Profile, GitHub & Project Links';
const description =
  'Connect with the creator of Vegan Ipsum and explore Vegan Ipsum ecosystem. Find GitHub, social links, and collaboration opportunities for ethical developer tools.';

const pageTitle = (
  <>
    Connect with the Creator of a <span className="text-primary">Vegan Ipsum Ecosystem</span>
  </>
);
const pageDescription =
  'Vegan Ipsum is a labor of love for the ethical community. Explore our project links, contribute to the source code, or reach out to the author behind the plant-based filler text. Discover how you can get involved in building a more conscious web.';
const pageTags = ['📦 GitHub Resources', '👤 Follow the Creator', '🤝 Open Source Collaboration'];

const path = '/contact';
const rootUrl = siteUrl();

// SEO metadata for the page.
export const metadata: Metadata = buildMetadata({ title, description, path });

// Schema.org structured data.
const schemaData = [
  ...globalSchema(),
  contactPageSchema({ rootUrl, path, breadcrumb: true }, { name: title, description }),
  breadcrumbSchema({ rootUrl, items: buildBreadcrumbs(path, 'Contact Vegan Ipsum') }),
];

/**
 * This component renders the contact page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function ContactPage(): JSX.Element {
  return (
    <>
      <JsonLd data={schemaData} />

      <PageHeader title={pageTitle} description={pageDescription} tags={pageTags} />

      <Projects />

      <Author />
    </>
  );
}
