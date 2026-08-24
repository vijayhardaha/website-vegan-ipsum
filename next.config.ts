/**
 * ======================================================================
 * Next Configuration
 * ======================================================================
 * Purpose: Centralized runtime and build-time configuration for Next.js.
 * Docs:    https://nextjs.org/docs/app/api-reference/config/next-config-js
 * ======================================================================
 */

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ---- Core runtime settings ----
  reactStrictMode: true,

  // ---- Security & headers ----
  poweredByHeader: false,

  // ---- Build optimizations ----
  // Power-user features (adjust as needed)
  compiler: {
    // Removes console logs in production (except errors)
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // ---- Security headers ----
  // Applied to every route to harden browsers against common attacks:
  // clickjacking (CSP frame-ancestors / X-Frame-Options), MIME sniffing,
  // referrer leakage, forced HTTPS upgrades (HSTS), and unneeded
  // browser features (Permissions-Policy).
  // Docs: https://nextjs.org/docs/app/api-reference/config/next-config-js/headers
  headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Content-Security-Policy', value: "frame-ancestors 'self'" },
        ],
      },
    ];
  },

  // ---- Redirects ----
  async redirects() {
    return [{ source: '/thumbnail.png', destination: '/preview.png', permanent: true }];
  },
};

export default nextConfig;
