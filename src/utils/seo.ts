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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyObject = Record<string, any>;

/**
 * Merge two objects deeply — alias `mergeDeep` preferred for consistency.
 */
const isPlainObject = (value: AnyObject): value is AnyObject => {
    return value !== null && typeof value === "object" && !Array.isArray(value);
};

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

export const getCanonicalUrl = (slug: string = ""): string => {
    return `${getBaseUrl()}/${slug.replace(/^\//, "")}`;
};

const buildSeoTitle = (title: string = ""): string => {
    if (!title) return SEO.title;
    return [title, SEO.separator, SEO.titlePostfix].join(" ");
};

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

// Backwards-compatible alias for existing imports
export { buildMetadata as generateMetadata };
