import type { JSX } from 'react';

import { webPageSchema, breadcrumbSchema, softwareAppSchema } from '@vijayhardaha/schema-builder';
import { JsonLd } from '@vijayhardaha/schema-builder/react';
import type { Metadata } from 'next';

import Link from '@/components/composites/Link';
import PageHeader from '@/components/composites/PageHeader';
import Button from '@/components/primitives/Button';
import { Introduction, Installation, Usage, Features, Support } from '@/components/sections/vscode-extension';
import { buildMetadata } from '@/utils/meta';
import { globalSchema, buildBreadcrumbs } from '@/utils/schema';
import { siteUrl } from '@/utils/seo';

const title = 'Vegan Ipsum VS Code Extension - Ethical Placeholder Text';
const description =
  'Generate plant-based placeholder text directly in your editor. Install the Vegan Ipsum extension for VS Code to create cruelty-free mockups effortlessly.';

const pageTitle = (
  <>
    Vegan Ipsum for <span className="text-primary">VS Code</span>
  </>
);
const pageDescription =
  'Stop switching tabs to copy-paste. Bring the Vegan Ipsum library directly into your workflow with our lightweight VS Code extension. Learn how to install and use it efficiently without leaving your workspace.';
const pageTags = ['⚡ Instant Commands', '🪶 Lightweight', '📜 MIT Licensed'];

const path = '/vscode-extension';
const rootUrl = siteUrl();

// SEO metadata for the page.
export const metadata: Metadata = buildMetadata({ title, description, path });

// Schema.org structured data.
const schemaData = [
  ...globalSchema(),
  webPageSchema({ rootUrl, path, breadcrumb: true }, { name: title, description }),
  breadcrumbSchema({ rootUrl, items: buildBreadcrumbs(path, 'Vegan Ipsum VS Code Extension') }),
  softwareAppSchema(
    { rootUrl, path },
    {
      name: title,
      description,
      applicationCategory: 'DeveloperApplication',
      applicationSubCategory: 'IDE Extension',
      softwareVersion: '1.0.1',
      downloadUrl: 'https://marketplace.visualstudio.com/items?itemName=vijayhardaha.vegan-ipsum',
      installUrl: 'https://marketplace.visualstudio.com/items?itemName=vijayhardaha.vegan-ipsum',
      softwareRequirements: 'Visual Studio Code v1.80.0 or higher',
      isBasedOn: 'https://github.com/vijayhardaha/vscode-vegan-ipsum',
    }
  ),
];

/**
 * This component renders the VS Code Extension page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function VSCodeExtensionPage(): JSX.Element {
  return (
    <>
      <JsonLd data={schemaData} />

      <PageHeader id="vscode-extension-header" title={pageTitle} description={pageDescription} tags={pageTags}>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button asChild size="lg" variant="primary">
            <Link
              href="https://marketplace.visualstudio.com/items?itemName=vijayhardaha.vegan-ipsum"
              aria-label="Install Extension — Install Vegan Ipsum VS Code Extension from the Visual Studio Marketplace"
            >
              Install Extension
            </Link>
          </Button>
          <Button asChild size="lg" variant="white" className="border-secondary/60 border-2">
            <Link
              href="https://github.com/vijayhardaha/vscode-vegan-ipsum"
              aria-label="View Source — Open the Vegan Ipsum VS Code Extension GitHub repository"
            >
              View Source
            </Link>
          </Button>
        </div>
      </PageHeader>

      <Introduction />

      <Installation />

      <Usage />

      <Features />

      <Support />
    </>
  );
}
