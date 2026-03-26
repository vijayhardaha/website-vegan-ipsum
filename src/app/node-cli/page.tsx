import type { JSX } from 'react';

import { JsonLd } from '@vijayhardaha/schema-builder/react';
import type { Metadata } from 'next';

import PageHeader from '@/components/composites/PageHeader';
import { Introduction, Installation, Usage, Options, Resources } from '@/components/sections/node-cli';
import { buildMetadata } from '@/utils/meta';
import { generateMasterSchema } from '@/utils/schema';

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

// Path for the page, used for metadata and schema generation
const path = '/node-cli';

// SEO metadata for the page.
export const metadata: Metadata = buildMetadata({ title, description, path });

// Schema.org structured data.
const schemaData = generateMasterSchema({
  title,
  description,
  path,
  isSoftware: true,
  breadcrumbs: [{ name: 'Vegan Ipsum Node CLI', path: path }],
  extraOptions: {
    version: '1.0.4',
    installUrl: 'https://www.npmjs.com/package/vegan-ipsum',
    runtimePlatform: 'Node.js',
  },
});

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
