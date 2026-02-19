import { defaultSeoData, SEO } from "@/constants/seo";

/**
 * Props for generating metadata, including title, description, and slug for URL construction.
 */
export interface IMetaProps {
	title?: string;
	description?: string;
	slug?: string;
}

/**
 * Interface representing the structure of metadata used for SEO, Open Graph, and Twitter cards.
 */
export interface IMetadata {
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

function deepMerge<T extends AnyObject>(target: T, source: AnyObject): T {
	const output = { ...target } as AnyObject;

	if (isObject(target) && isObject(source)) {
		Object.keys(source).forEach((key) => {
			const targetValue = target[key];
			const sourceValue = source[key];

			if (Array.isArray(sourceValue)) {
				// Replace arrays (you can customize this behavior)
				output[key] = sourceValue;
			} else if (isObject(sourceValue) && isObject(targetValue)) {
				// Recursively merge nested objects
				output[key] = deepMerge(targetValue, sourceValue);
			} else {
				// Override primitive values
				output[key] = sourceValue;
			}
		});
	}

	return output as T;
}

function isObject(value: AnyObject): value is AnyObject {
	return value !== null && typeof value === "object" && !Array.isArray(value);
}

/**
 * Retrieves the base URL based on the environment variables.
 *
 * @returns {string} The base URL.
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
 * Computes the canonical URL based on the environment variables.
 *
 * @param {string} slug - The slug for generating the canonical URL.
 * @returns {string} The canonical URL.
 */
export const getCanonicalUrl = (slug: string = ""): string => {
	return `${getBaseUrl()}/${slug.replace(/^\//, "")}`;
};

/**
 * Generates an SEO-friendly title by appending a fixed suffix to the given title.
 *
 * @param {string} title - The main title to be included in the SEO title.
 * @returns {string} The SEO-friendly title in the format: "{title} - Tools by Vijay".
 */
export const generateSeoTitle = (title: string = ""): string => {
	if (!title) {
		return SEO.title;
	}

	return [title, SEO.separator, SEO.titlePostfix].join(" ");
};

/**
 * Generates a complete metadata object for SEO, Open Graph, and Twitter cards.
 *
 * @param {IMetaProps} params - The parameters object containing title, description, and slug.
 * @returns {IMetadata} A metadata object with title, description, canonical URL, and social media metadata.
 */
export const generateMetadata = ({
	title = "",
	description = "",
	slug = "",
}: IMetaProps): IMetadata => {
	return deepMerge(defaultSeoData, {
		title: generateSeoTitle(title),
		description: description,
		alternates: {
			canonical: getCanonicalUrl(slug),
		},
		openGraph: {
			title: generateSeoTitle(title),
			description: description,
			url: getCanonicalUrl(slug),
		},
		twitter: {
			title: generateSeoTitle(title),
			description: description,
		},
	});
};
