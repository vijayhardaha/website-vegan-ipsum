import type { JSX } from 'react';

import { webPageSchema, breadcrumbSchema, softwareAppSchema, webApiSchema } from '@vijayhardaha/schema-builder';
import { JsonLd } from '@vijayhardaha/schema-builder/react';
import type { Metadata } from 'next';

import PageHeader from '@/components/composites/PageHeader';
import {
  Introduction,
  BaseUrl,
  RequestMethods,
  Parameters,
  GetRequestExample,
  ResponseFormat,
  ErrorHandling,
  StatusCodes,
} from '@/components/sections/json-api';
import { buildMetadata } from '@/utils/meta';
import { globalSchema, buildBreadcrumbs } from '@/utils/schema';
import { siteUrl } from '@/utils/seo';

const title = 'Vegan Ipsum API - Free JSON Placeholder Text API';
const description =
  'Access the Vegan Ipsum REST API to fetch ethical, plant-based placeholder text. High-performance JSON endpoints for conscious developers.';

const pageTitle = (
  <>
    Fetch Ethical placeholder text via the <span className="text-primary">Vegan Ipsum API</span>
  </>
);
const pageDescription =
  'Build dynamic, cruelty-free mockups with our lightweight REST API. Integrate plant-based placeholder text directly into your frontend or backend applications via simple JSON endpoints. This API provides paragraphs, sentences, or words in plain or HTML format.';
const pageTags = ['🔓 No Auth Required', '🔁 GET Only', '🧾 JSON Responses', '📝 Plain & HTML Formats'];

const path = '/json-api';
const rootUrl = siteUrl();

// SEO metadata for the page.
export const metadata: Metadata = buildMetadata({ title, description, path });

// Schema.org structured data.
const schemaData = [
  ...globalSchema(),
  webPageSchema({ rootUrl, path, breadcrumb: true }, { name: title, description }),
  breadcrumbSchema({ rootUrl, items: buildBreadcrumbs(path, 'Vegan Ipsum JSON API') }),
  softwareAppSchema(
    { rootUrl, path },
    {
      name: title,
      description,
      applicationCategory: 'DeveloperApplication',
      applicationSubCategory: 'API',
      softwareVersion: '1.0.0',
      softwareRequirements: 'HTTP Client, Internet Access',
    }
  ),
  webApiSchema({ rootUrl, path }, { name: title, description }),
];

/**
 * This component renders the JSON API page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function JsonAPIPage(): JSX.Element {
  return (
    <>
      <JsonLd data={schemaData} />

      <PageHeader title={pageTitle} description={pageDescription} tags={pageTags} />

      <Introduction />

      <BaseUrl />

      <RequestMethods />

      <Parameters />

      <GetRequestExample />

      <ResponseFormat />

      <ErrorHandling />

      <StatusCodes />
    </>
  );
}
