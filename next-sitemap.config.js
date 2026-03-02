/**
 * ==============================================================================
 * NEXT-SITEMAP CONFIGURATION
 * ==============================================================================
 * Purpose: Controls sitemap and robots.txt generation for SEO and crawler
 * discoverability across the deployed site.
 * Docs: https://github.com/iamvishnusankar/next-sitemap
 * ==============================================================================
 */

/** @type {import('next-sitemap').IConfig} */
const config = {
	// --- Site Metadata ---
	// Canonical production URL used for sitemap entry generation.
	siteUrl: "https://veganipsum.vercel.app",
	// Generate robots.txt file alongside sitemap output.
	generateRobotsTxt: true,
	// Use a stable sitemap filename prefix.
	sitemapBaseFileName: "sitemap",
	// Indicate expected content update cadence.
	changefreq: "weekly",
	// Provide default sitemap priority for pages.
	priority: 0.7,
	// Do not append trailing slash to generated URLs.
	trailingSlash: false,
	// Exclude framework error pages from sitemap output.
	exclude: ["/404", "/500"],

	// --- URL Entry Transform ---
	/**
	 * Transform each generated sitemap entry.
	 * This removes milliseconds from lastmod.
	 */
	transform: async (config, path) => {
		return {
			loc: path,
			changefreq: config.changefreq,
			priority: config.priority,
			lastmod: new Date().toISOString().replace(/\.\d{3}Z$/, "Z"), // remove milliseconds
		};
	},

	// --- Robots.txt Generation Options ---
	robotsTxtOptions: {
		// Allow all crawlers to access the entire public site.
		policies: [{ userAgent: "*", allow: "/" }],
		// Remove Host entry from generated robots.txt content.
		transformRobotsTxt: async (_, robotsTxt) => {
			const withoutHost = robotsTxt.replace(
				`# Host\nHost: https://veganipsum.vercel.app\n\n`,
				""
			);

			return withoutHost;
		},
	},
};

module.exports = config;
