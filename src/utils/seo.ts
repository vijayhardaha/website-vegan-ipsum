/**
 * Return a normalized base URL for the running application.
 *
 * Preference order:
 * 1. `process.env.VERCEL_PROJECT_PRODUCTION_URL`
 * 2. `process.env.VERCEL_BRANCH_URL`
 * 3. `process.env.VERCEL_URL`
 * 4. Fallback to `http://localhost:{PORT}` where PORT defaults to 3000
 *
 * Normalization ensures a scheme is present and removes a trailing slash.
 *
 * @returns {string} The normalized base URL.
 *
 * @example
 * // When no Vercel env vars are set and PORT is 3000
 * getBaseUrl() // -> 'http://localhost:3000'
 */
export const getBaseUrl = (): string => {
	const url =
		process.env.VERCEL_PROJECT_PRODUCTION_URL ||
		process.env.VERCEL_BRANCH_URL ||
		process.env.VERCEL_URL ||
		`http://localhost:${process.env.PORT || 3000}`;

	return url.startsWith("http://") || url.startsWith("https://")
		? url.replace(/\/$/, "")
		: `https://${url.replace(/\/$/, "")}`;
};

/**
 * Construct a canonical URL by combining the base URL with an optional slug.
 *
 * Leading slashes on the provided slug are removed so the result contains exactly one
 * slash between the base URL and the slug.
 *
 * @param {string} [slug] - Optional path segment to append to the base URL.
 * @returns {string} The canonical absolute URL.
 *
 * @example
 * // Assuming getBaseUrl() returns "https://example.com"
 * getCanonicalUrl('about') // -> "https://example.com/about"
 * getCanonicalUrl('/about') // -> "https://example.com/about"
 */
export const getCanonicalUrl = (slug: string = ""): string => {
	return `${getBaseUrl()}/${slug.replace(/^\//, "")}`;
};
