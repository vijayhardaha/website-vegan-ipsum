import { defaultSeoData, SEO } from "@/constants/seo";

/**
 * Props for generating metadata, including title, description, and slug for URL construction.
 *
 * @example
 * const params: MetadataParams = { title: 'About', description: 'About page', slug: 'about' };
 */
export interface MetadataParams {
	title?: string;
	description?: string;
	slug?: string;
}

/**
 * Interface representing the structure of metadata used for SEO, Open Graph, and Twitter cards.
 *
 * @example
 * const meta: SeoMetadata = {
 *   title: 'Page Title',
 *   description: 'Page description',
 *   alternates: { canonical: 'https://example.com/page' },
 *   openGraph: { title: 'OG Title', description: 'OG Desc', url: 'https://example.com/page' },
 *   twitter: { title: 'Twitter Title', description: 'Twitter Desc' }
 * };
 */
export interface SeoMetadata {
	title: string;
	description: string;

	alternates: {
		canonical: string;
	};

	openGraph: {
		title: string;
		description: string;
		url: string;
	};

	twitter: {
		title: string;
		description: string;
	};
}

/**
 * Generic object type used for utility functions that accept arbitrary objects.
 *
 * Use when a plain object with unknown keys/values is expected.
 *
 * @example
 * const obj: AnyObject = { a: 1, b: "two" };
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyObject = Record<string, any>;

/**
 * Deeply merges two objects producing a new combined object.
 *
 * Behavior:
 * - Arrays from the source replace arrays on the target.
 * - Plain nested objects are merged recursively.
 * - Primitive values from the source override the target.
 *
 * This function is generic and preserves the type of the target object.
 *
 * @template T - The target object type.
 * @param {T} target - The target object to merge into.
 * @param {AnyObject} source - The source object with values to merge.
 * @returns {T} A new object resulting from merging source into target.
 *
 * @example
 * const base = { a: 1, nested: { x: 1 }, list: [1,2] };
 * const override = { b: 2, nested: { y: 2 }, list: [3] };
 * const merged = mergeDeep(base, override);
 * // merged -> { a: 1, b: 2, nested: { x:1, y:2 }, list: [3] }
 */
/**
 * Merge two objects deeply — alias `mergeDeep` preferred for consistency.
 */
const mergeDeep = <T extends AnyObject>(target: T, source: AnyObject): T => {
	const output = { ...target } as AnyObject;

	if (isPlainObject(target) && isPlainObject(source)) {
		Object.keys(source).forEach((key) => {
			const targetValue = target[key];
			const sourceValue = source[key];

			if (Array.isArray(sourceValue)) {
				// Replace arrays (you can customize this behavior)
				output[key] = sourceValue;
			} else if (isPlainObject(sourceValue) && isPlainObject(targetValue)) {
				// Recursively merge nested objects
				output[key] = mergeDeep(targetValue, sourceValue);
			} else {
				// Override primitive values
				output[key] = sourceValue;
			}
		});
	}

	return output as T;
};

/**
 * Checks if a value is a plain object (not null, not an array).
 *
 * @param {AnyObject} value - The value to test.
 * @returns {value is AnyObject} True when the value is a plain object.
 *
 * @example
 * isObject({}) // true
 * isObject([]) // false
 * isObject(null) // false
 * isObject("string") // false
 */
/**
 * A clearer predicate name to indicate we're checking for a plain object.
 *
 * @example
 * isPlainObject({}) // true
 * isPlainObject([]) // false
 */
const isPlainObject = (value: AnyObject): value is AnyObject => {
	return value !== null && typeof value === "object" && !Array.isArray(value);
};

/**
 * Returns a normalized base URL for the running application.
 *
 * Preference order for source:
 * 1. process.env.VERCEL_PROJECT_PRODUCTION_URL
 * 2. process.env.VERCEL_BRANCH_URL
 * 3. process.env.VERCEL_URL
 * 4. Fallback to `http://localhost:{PORT}` where PORT defaults to 3000
 *
 * Normalization behavior:
 * - Ensures the result has a scheme. If the chosen value lacks "http://" or "https://",
 *   "https://" will be prepended.
 * - Removes a trailing slash, if present.
 *
 * @returns The normalized base URL (no trailing slash, always includes a scheme).
 *
 * @example
 * // If VERCEL variables are not set and PORT is 3000:
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
 * Construct a canonical URL by combining the application's base URL with an optional slug.
 *
 * Leading slashes on the provided slug are removed so the result contains exactly one slash between
 * the base URL and the slug. If no slug is provided (empty string), the returned URL will be the
 * base URL followed by a trailing slash.
 *
 * @param slug - Optional path segment to append to the base URL. Leading '/' will be stripped.
 * @returns The canonical absolute URL as a string.
 *
 * @example
 * // Assuming getBaseUrl() returns "https://example.com"
 * getCanonicalUrl('about')    // -> "https://example.com/about"
 * getCanonicalUrl('/about')   // -> "https://example.com/about"
 * getCanonicalUrl()           // -> "https://example.com/"
 */
export const getCanonicalUrl = (slug: string = ""): string => {
	return `${getBaseUrl()}/${slug.replace(/^\//, "")}`;
};

/**
 * Build a consistent SEO title by appending the configured postfix.
 *
 * @param {string} title - The page-specific title.
 * @returns {string} The resulting SEO title, or the site default when title is empty.
 *
 * @example
 * buildSeoTitle('About') // -> 'About - Vegan Ipsum'
 */
const buildSeoTitle = (title: string = ""): string => {
	if (!title) return SEO.title;
	return [title, SEO.separator, SEO.titlePostfix].join(" ");
};

/**
 * Generates a complete metadata object for SEO, Open Graph, and Twitter cards.
 *
 * @param {MetadataParams} params - The parameters object containing optional title, description, and slug.
 * @param {string} [params.title=""] - The page title to be included in the SEO metadata.
 * @param {string} [params.description=""] - The page description for SEO and social media metadata.
 * @param {string} [params.slug=""] - The URL slug for generating the canonical URL.
 * @returns {SeoMetadata} A complete metadata object including title, description, canonical URL, Open Graph metadata, and Twitter card metadata.
 * @example
 * const metadata = buildMetadata({
 *   title: "Vegan Recipes",
 *   description: "Delicious vegan recipes",
 *   slug: "recipes"
 * });
 */
export const buildMetadata = ({
	title = "",
	description = "",
	slug = "",
}: MetadataParams): SeoMetadata => {
	return mergeDeep(defaultSeoData, {
		title: buildSeoTitle(title),
		description: description,
		alternates: {
			canonical: getCanonicalUrl(slug),
		},
		openGraph: {
			title: buildSeoTitle(title),
			description: description,
			url: getCanonicalUrl(slug),
		},
		twitter: {
			title: buildSeoTitle(title),
			description: description,
		},
	});
};
