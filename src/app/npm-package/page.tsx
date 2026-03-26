import type { JSX } from 'react';

import { JsonLd } from '@vijayhardaha/schema-builder/react';
import type { Metadata } from 'next';

import PageHeader from '@/components/composites/PageHeader';
import { Introduction, Installation, Usage, Features } from '@/components/sections/npm-package';
import { buildMetadata } from '@/utils/meta';
import { generateMasterSchema } from '@/utils/schema';

const title = 'Vegan Ipsum NPM Package - Ethical Lorem Ipsum Library';
const description =
  'Integrate plant-based placeholder text into JS projects. A lightweight, zero-dependency NPM library for ethical developers. Install now.';

const pageTitle = (
  <>
    Vegan Ipsum <span className="text-primary">NPM Package</span>
  </>
);
const pageDescription =
  'Build with purpose. Use the Vegan Ipsum NPM package to programmatically generate cruelty-free filler text for your your next project in seconds. Learn how to install and use it in your projects with our comprehensive guide.';
const pageTags = ['🚫 Zero Dependencies', '🟦 TypeScript Ready', '📦 ESM & CJS Support', '⚡ Ultra Lightweight'];

// Path for the page, used for metadata and schema generation
const path = '/npm-package';

// SEO metadata for the page.
export const metadata: Metadata = buildMetadata({ title, description, path });

// Schema.org structured data.
const schemaData = generateMasterSchema({
  title,
  description,
  path,
  isSoftware: true,
  breadcrumbs: [{ name: 'Vegan Ipsum NPM Package', path: path }],
  extraOptions: {
    version: '1.0.4',
    installUrl: 'https://www.npmjs.com/package/vegan-ipsum',
    runtimePlatform: 'Node.js',
  },
});

/**
 * This component renders the NPM Package page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function NpmPackagePage(): JSX.Element {
  return (
    <>
      <JsonLd data={schemaData} />

      <PageHeader title={pageTitle} description={pageDescription} tags={pageTags} />

      <Introduction />

      <Installation />

      <Usage />

      <Features />
    </>
  );
}
