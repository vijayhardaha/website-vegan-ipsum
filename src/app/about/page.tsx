import type { JSX } from 'react';

import type { Metadata } from 'next';

import JsonLd from '@/components/composites/JsonLd';
import PageHeader from '@/components/composites/PageHeader';
import {
  Introduction,
  Background,
  CoreFeatures,
  CustomizationOptions,
  TechnicalOverview,
  UseCases,
  CTA,
} from '@/components/sections/about';
import { buildMetadata } from '@/utils/meta';
import { generateMasterSchema } from '@/utils/schema';

const title = 'About Vegan Ipsum - Mission Behind the Ethical Placeholder Generator';
const description =
  'Discover the story of Vegan Ipsum. Learn why we created a plant-based, cruelty-free alternative to traditional Lorem Ipsum for conscious designers and developers.';

const pageTitle = (
  <>
    The Mission Behind <span className="text-primary">Vegan Ipsum</span>
  </>
);
const pageDescription =
  'We believe every part of the design process can reflect our values. Vegan Ipsum was built to replace outdated Latin with ethical, plant-based content that inspires conscious creation.';
const pageTags = ['🌿 Ethical Mission', '💻 Open Source', '🧭 Driven by Values', '🚀 Made for Creators'];

// Path for the page, used for metadata and schema generation
const path = '/about';

// SEO metadata for the page.
export const metadata: Metadata = buildMetadata({ title, description, path });

// Schema.org structured data.
const schemaData = generateMasterSchema({
  title,
  description,
  path,
  pageType: 'AboutPage',
  breadcrumbs: [{ name: 'About Vegan Ipsum', path: path }],
});

/**
 * This component renders the about page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function AboutPage(): JSX.Element {
  return (
    <>
      <JsonLd data={schemaData} />

      <PageHeader title={pageTitle} description={pageDescription} tags={pageTags} />

      <Introduction />

      <Background />

      <CoreFeatures />

      <CustomizationOptions />

      <TechnicalOverview />

      <UseCases />

      <CTA />
    </>
  );
}
