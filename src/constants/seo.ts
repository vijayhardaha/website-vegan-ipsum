import { CREATOR, type CreatorConfig } from '@vijayhardaha/schema-builder';
import type { Metadata } from 'next';

import { siteUrl } from '@/utils/seo';

/**
 * Canonical site origin, resolved from NEXT_PUBLIC_SITE_URL (or Vercel env in
 * production) so metadataBase, canonical URLs, and schema stay on one domain.
 * Falls back to localhost during local development.
 */
const SITE_URL = siteUrl();

/**
 * Site-wide configuration values for SEO and metadata.
 */
export const SITE_CONFIG = {
  name: 'Vegan Ipsum',
  title: 'Vegan Ipsum - Ethical & Plant-Based Lorem Ipsum Generator',
  url: SITE_URL,
  description:
    'Generate ethical, plant-based placeholder text with Vegan Ipsum. The perfect Lorem Ipsum alternative for vegans and conscious designers. Try it for free!',
  category: 'Developer Tools',
  classification: 'Vegan Lorem Ipsum Generator, Web Development Tool, Placeholder Text Generator',
  creator: CREATOR as CreatorConfig,
  organization: {
    name: 'Vegan Ipsum',
    url: SITE_URL,
    description:
      'Vegan Ipsum is a creative utility platform offering vegan-themed placeholder text, developer tools, and content resources designed to make web projects more ethical, engaging, and unique.',
    foundingDate: '2025',
  },
};

/**
 * Google Search Console verification code for the site.
 */
const GOOGLE_SITE_VERIFICATION = '4CyrCxZi9TWgvS-GzB1QUhgEl0bKoIzT36368e_vlx0';

/**
 * Google Analytics measurement ID. Set to an empty string to disable GA.
 * Only activates in production when a non-empty ID is provided.
 */
export const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GA_ID ? process.env.NEXT_PUBLIC_GA_ID.trim() : '';

/**
 * Title and description used for SEO, Open Graph, and Twitter cards.
 */
const titleAndDescription = { title: SITE_CONFIG.title, description: SITE_CONFIG.description };

/**
 * Default image metadata used for Open Graph and Twitter cards.
 */
const seoImage = {
  url: '/preview.png',
  secureUrl: `/preview.png`,
  alt: 'Vegan Ipsum Thumbnail',
  width: 1200,
  height: 630,
  type: 'image/png',
};

/**
 * The main metadata object containing all SEO-related information for the website.
 */
export const SITE_METADATA: Metadata = {
  ...titleAndDescription,
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.creator.name, url: SITE_CONFIG.creator.urls.gravatar }],
  creator: SITE_CONFIG.creator.name,
  publisher: SITE_CONFIG.name,
  robots: { index: true, follow: true },
  category: SITE_CONFIG.category,
  classification: SITE_CONFIG.classification,
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  verification: { google: GOOGLE_SITE_VERIFICATION },
  openGraph: {
    ...titleAndDescription,
    images: seoImage,
    type: 'website',
    siteName: SITE_CONFIG.name,
    locale: 'en_US',
    url: SITE_CONFIG.url,
  },
  twitter: {
    ...titleAndDescription,
    card: 'summary_large_image',
    images: seoImage,
    creator: SITE_CONFIG.creator.handles[0],
  },
  other: { lang: 'en' },
};
