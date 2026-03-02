/**
 * ==============================================================================
 * NEXT.JS APPLICATION CONFIG
 * ==============================================================================
 * Purpose: Defines top-level runtime and build behavior for the Next.js app.
 * Docs: https://nextjs.org/docs/app/api-reference/config/next-config-js
 * ==============================================================================
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Keep React Strict Mode enabled to catch potential issues during development.
	reactStrictMode: true,
};

export default nextConfig;
