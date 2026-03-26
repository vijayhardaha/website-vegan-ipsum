import { CREATOR, type CreatorConfig } from '@vijayhardaha/schema-builder';
import type { Metadata } from 'next';

/**
 * Site-wide configuration values for SEO and metadata.
 */
export const SITE_CONFIG = {
  name: 'Vegan Ipsum',
  title: 'Vegan Ipsum - Ethical & Plant-Based Lorem Ipsum Generator',
  url: 'https://veganipsum.vercel.app',
  description:
    'Generate ethical, plant-based placeholder text with Vegan Ipsum. The perfect Lorem Ipsum alternative for vegans and conscious designers. Try it for free!',
  category: 'Developer Tools',
  classification: 'Vegan Lorem Ipsum Generator, Web Development Tool, Placeholder Text Generator',
  creator: CREATOR as CreatorConfig,
  organization: {
    name: 'Vegan Ipsum',
    description:
      'Vegan Ipsum is a creative utility platform offering vegan-themed placeholder text, developer tools, and content resources designed to make web projects more ethical, engaging, and unique.',
  },
};

/**
 * The default metadata object used for SEO, Open Graph, and Twitter cards.
 */
export const SEO_KEYWORDS = [
  'vegan ipsum',
  'veggie ipsum',
  'vegan ipsum generator',
  'vegan lorem ipsum',
  'vegan placeholder text',
  'best lorem ipsum for ethical designers',
  'cruelty-free placeholder text',
  'dummy text for vegan projects',
  'ethical lorem ipsum',
  'free cruelty-free lorem ipsum tool',
  'generate vegan placeholder text online',
  'lorem ipsum alternative',
  'placeholder text for sustainable brands',
  'plant-based lorem ipsum',
  'vegan content filler',
  'vegan copy generator',
  'vegan ipsum for web developers',
  'vegan placeholder text generator',
  'vegan web design tools',
];

/**
 * Google Search Console verification code for the site
 */
export const GOOGLE_SITE_VERIFICATION = '4CyrCxZi9TWgvS-GzB1QUhgEl0bKoIzT36368e_vlx0';
export const GOOGLE_ANALYTICS_ID = 'G-XR1TK565WJ';

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
  keywords: SEO_KEYWORDS,
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
