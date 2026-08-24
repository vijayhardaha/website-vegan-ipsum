/**
 * ======================================================================
 * Next Sitemap Configuration
 * ======================================================================
 * Purpose: Generate sitemaps and robots.txt to help search engines
 *          discover and index site content.
 *          Use `npx next-sitemap` for local testing.
 * Docs:    https://github.com/iamvishnusankar/next-sitemap
 * ======================================================================
 */

const { createSitemapConfig } = require('@vijayhardaha/dev-config/next-sitemap');

// Canonical site domain — driven by NEXT_PUBLIC_SITE_URL so the sitemap stays
// in sync with metadataBase/canonical URLs; falls back to the production URL.
const siteDomain = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://veganipsum.vercel.app').replace(/\/+$/, '');

/** @type {import('next-sitemap').IConfig} */
const config = createSitemapConfig({
  siteUrl: siteDomain,
  outDir: process.env.NODE_ENV === 'production' ? '/vercel/output/static' : './public',
});

module.exports = config;
