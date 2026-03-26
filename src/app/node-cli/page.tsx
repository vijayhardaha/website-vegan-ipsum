import type { JSX } from 'react';

import { webPageSchema, breadcrumbSchema, softwareAppSchema } from '@vijayhardaha/schema-builder';
import { JsonLd } from '@vijayhardaha/schema-builder/react';
import type { Metadata } from 'next';

import PageHeader from '@/components/composites/PageHeader';
import { Introduction, Installation, Usage, Options, Resources } from '@/components/sections/node-cli';
import { buildMetadata } from '@/utils/meta';
import { globalSchema, buildBreadcrumbs } from '@/utils/schema';
import { siteUrl } from '@/utils/seo';

const title = 'Vegan Ipsum CLI - Generate Ethical Placeholder Text in Terminal';
const description =
  'Generate plant-based placeholder text from your terminal with the Vegan Ipsum Node CLI. A lightweight, ethical tool for developers.';

const pageTitle = (
  <>
    Vegan Ipsum <span className="text-primary">Node CLI</span>
  </>
);
const pageDescription =
  'Speed up your workflow with the Vegan Ipsum Node CLI. Access cruelty-free, plant-based filler text instantly without ever leaving your shell, perfect for scripting, piping, and rapid prototyping.';
const pageTags = [
  '⚡ Instant Command Access',
  '🔗 Pipe-Friendly Output',
  '📦 Global npm Install',
  '⚙️ No Configuration Required',
];

const path = '/node-cli';
const rootUrl = siteUrl();

// SEO metadata for the page.
export const metadata: Metadata = buildMetadata({ title, description, path });

// Schema.org structured data.
const schemaData = [
  ...globalSchema(),
  webPageSchema({ rootUrl, path, breadcrumb: true }, { name: title, description }),
  breadcrumbSchema({ rootUrl, items: buildBreadcrumbs(path, 'Vegan Ipsum Node CLI') }),
  softwareAppSchema(
    { rootUrl, path },
    {
      name: title,
      description,
      applicationCategory: 'DeveloperApplication',
      applicationSubCategory: 'CLI',
      softwareVersion: '1.0.4',
      installUrl: 'https://www.npmjs.com/package/vegan-ipsum',
      runtimePlatform: 'Node.js',
    }
  ),
];

/**
 * This component renders the Node CLI page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function NodeCliPage(): JSX.Element {
  return (
    <>
      <JsonLd data={schemaData} />

      <PageHeader title={pageTitle} description={pageDescription} tags={pageTags} />

      <Introduction />

      <Installation />

      <Usage />

      <Options />

      <Resources />
    </>
  );
}
