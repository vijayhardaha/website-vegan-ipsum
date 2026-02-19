import { SITE_METADATA, SEO_TITLE, SEO_SEPARATOR, SEO_TITLE_POSTFIX } from "@/constants/seo";

/**
 * Props for generating metadata, including title, description, and slug for URL construction.
 *
 * @example
 * const params: SeoProps = { title: 'About', description: 'About page', slug: 'about' };
 */
export interface SeoProps {
	title?: string;
	description?: string;
	slug?: string;
}

/**
 * Interface representing the structure of metadata used for SEO, Open Graph, and Twitter cards.
 *
 * @example
 * const meta: MetaData = {
 *   title: 'Page Title',
 *   description: 'Page description',
 *   alternates: { canonical: 'https://example.com/page' },
 *   openGraph: { title: 'OG Title', description: 'OG Desc', url: 'https://example.com/page' },
 *   twitter: { title: 'Twitter Title', description: 'Twitter Desc' }
 * };
 */
export interface MetaData {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyObject = Record<string, any>;

/**
 * Determine whether a value is a plain object (not null and not an array).
 *
 * @param {AnyObject} value - Value to test.
 * @returns {value is AnyObject} True when the value is a plain object.
 *
 * @example
 * isPlainObject({}) // true
 * isPlainObject([]) // false
 * isPlainObject(null) // false
 */
const isPlainObject = (value: AnyObject): value is AnyObject => {
	return value !== null && typeof value === "object" && !Array.isArray(value);
};

/**
 * Deeply merge two plain objects producing a new object.
 *
 * Behavior:
 * - Arrays from the source replace arrays on the target.
 * - Plain nested objects are merged recursively.
 * - Primitive values from the source override the target.
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
 * // merged -> { a:1, b:2, nested: { x:1, y:2 }, list: [3] }
 */
const mergeDeep = <T extends AnyObject>(target: T, source: AnyObject): T => {
	const output = { ...target } as AnyObject;

	if (isPlainObject(target) && isPlainObject(source)) {
		Object.keys(source).forEach((key) => {
			const targetValue = target[key];
			const sourceValue = source[key];

			if (Array.isArray(sourceValue)) {
				output[key] = sourceValue;
			} else if (isPlainObject(sourceValue) && isPlainObject(targetValue)) {
				output[key] = mergeDeep(targetValue, sourceValue);
			} else {
				output[key] = sourceValue;
			}
		});
	}

	return output as T;
};

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
	if (!title) return SEO_TITLE;
	return [title, SEO_SEPARATOR, SEO_TITLE_POSTFIX].join(" ");
};

/**
 * Generate a complete metadata object for SEO, Open Graph, and Twitter cards.
 *
 * @param {SeoProps} params - The parameters object containing optional title, description and slug.
 * @param {string} [params.title=""] - Page title to include in SEO metadata.
 * @param {string} [params.description=""] - Page description for SEO and social cards.
 * @param {string} [params.slug=""] - URL slug to generate the canonical URL.
 * @returns {MetaData} A metadata object suitable for Next.js metadata and social sharing.
 *
 * @example
 * const meta = buildMetadata({ title: 'Recipes', description: 'Vegan recipes', slug: 'recipes' });
 */
export const buildMetadata = ({ title = "", description = "", slug = "" }: SeoProps): MetaData => {
	return mergeDeep(SITE_METADATA, {
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
