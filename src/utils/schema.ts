import { SITE_CONFIG } from "@/constants/seo";
import { getCanonicalUrl } from "@/utils/seo";

// Utility types and functions for building Schema.org structured data across the site.
type AnyObject = Record<string, boolean | number | string | string[] | number | object | object[]>;

/**
 * Build a Schema.org `Person` entity describing the site creator.
 *
 * Uses `SITE_CONFIG.creator` values and `getCanonicalUrl` to construct
 * a stable `@id` and to populate common properties used by search engines.
 * The returned object is intended to be merged into a JSON-LD graph.
 *
 * @returns {AnyObject} A plain object representing the `Person` schema.
 */
export function personSchema(): AnyObject {
	const rootUrl = getCanonicalUrl("");
	const personId = `${rootUrl}#person`;
	const orgId = `${rootUrl}#organization`;

	return {
		"@type": "Person",
		"@id": personId,
		name: SITE_CONFIG.creator.name,
		alternateName: SITE_CONFIG.creator.handles,
		jobTitle: SITE_CONFIG.creator.jobTitle,
		url: rootUrl,
		description: SITE_CONFIG.creator.description,
		sameAs: Object.values(SITE_CONFIG.creator.urls),
		worksFor: { "@id": orgId },
		image: {
			"@type": "ImageObject",
			url: `${rootUrl}/avatar.png`,
			width: 512,
			height: 512,
		},
		knowsAbout: [
			"TypeScript",
			"Node.js",
			"API Design",
			"VS Code Extensions",
			"WordPress Development",
			"WooCommerce Development",
			"Next.js",
			"React",
			"Frontend Development",
			"HTML",
			"CSS",
			"JavaScript",
			"Tailwind CSS",
			"Sass",
			"Bootstrap",
			"GitHub",
			"Git",
		],
	};
}

/**
 * Build a Schema.org `Organization` entity for the site/brand.
 *
 * The organization is linked to the `Person` entity via the `founder` property
 * and includes a small `ImageObject` for the logo used by rich results.
 *
 * @returns {AnyObject} A plain object representing the `Organization` schema.
 */
export function organizationSchema(): AnyObject {
	const rootUrl = getCanonicalUrl("");
	const personId = `${rootUrl}#person`;
	const orgId = `${rootUrl}#organization`;

	return {
		"@type": "Organization",
		"@id": orgId,
		name: "Vegan Ipsum",
		url: rootUrl,
		logo: {
			"@type": "ImageObject",
			url: `${rootUrl}/logo-for-schema.png`,
			width: 512,
			height: 512,
		},
		founder: { "@id": personId },
		foundingDate: "2025",
	};
}

/**
 * Options controlling the `WebSite` schema output.
 *
 * Use `mainEntityId` to point the website schema at a page-level entity
 * (for example a `WebApplication` or `SoftwareSourceCode`) so crawlers can
 * understand the relationship between the site and a specific resource.
 */
interface WebSiteOptions {
	/**
	 * The `@id` of the primary entity for the site (optional).
	 * Example: `https://example.com/docs#app`.
	 */
	mainEntityId?: string;
}

/**
 * Build a Schema.org `WebSite` entity describing the entire website.
 *
 * When `options.mainEntityId` is provided the website will be linked to the
 * supplied page-level entity. This is useful when a site hosts a primary
 * application or codebase that should be discovered as the site's main entity.
 *
 * @param {WebSiteOptions} [options] Optional configuration for `WebSite` output.
 * @returns {AnyObject} A plain object representing the `WebSite` schema.
 */
export function websiteSchema(options?: WebSiteOptions): AnyObject {
	const rootUrl = getCanonicalUrl("");
	const personId = `${rootUrl}#person`;

	return {
		"@type": "WebSite",
		"@id": `${rootUrl}#website`,
		name: SITE_CONFIG.name,
		url: rootUrl,
		description: SITE_CONFIG.description,
		inLanguage: "en",
		author: { "@id": personId },
		...(options?.mainEntityId && {
			mainEntity: { "@id": options.mainEntityId },
		}),
	};
}

/**
 * Options for generating a `WebPage` (or specialized page types).
 */
interface WebPageOptions {
	/** Page title to be used in the `name` property. */
	name: string;
	/** Short page description used in the `description` property. */
	description: string;
	/** Path (relative) used to build the canonical URL for the page. */
	path: string;
	/**
	 * The Schema.org page `@type`. Defaults to `WebPage`. Use specialized types
	 * like `AboutPage` or `ContactPage` when appropriate.
	 */
	type?: "WebPage" | "AboutPage" | "ContactPage";
	/** Optional `@id` of a `BreadcrumbList` for this page. */
	breadcrumbId?: string;
	/** Optional `@id` that identifies the page's main entity. */
	mainEntityId?: string;
}

/**
 * Build a Schema.org `WebPage` (or specialized page type) entity.
 *
 * The function links the page to the site (`isPartOf`), publisher and author
 * entities and optionally includes references to breadcrumbs and mainEntity.
 *
 * @param {WebPageOptions} options Options describing the page to model.
 * @returns {AnyObject} A plain object representing the `WebPage` schema.
 */
export function webPageSchema({
	name,
	description,
	path,
	type = "WebPage",
	breadcrumbId,
	mainEntityId,
}: WebPageOptions): AnyObject {
	const canonicalUrl = getCanonicalUrl(path);
	const rootUrl = getCanonicalUrl("");
	const personId = `${rootUrl}#person`;
	const orgId = `${rootUrl}#organization`;
	const webSiteID = `${rootUrl}#website`;

	return {
		"@type": type,
		"@id": `${canonicalUrl}#webpage`,
		url: canonicalUrl,
		name: name,
		description: description,
		isPartOf: { "@id": webSiteID },
		inLanguage: "en",
		publisher: { "@id": orgId },
		author: { "@id": personId },
		...(mainEntityId && { mainEntity: { "@id": mainEntityId } }),
		...(breadcrumbId && { breadcrumb: { "@id": breadcrumbId } }),
	};
}

/**
 * Options for generating a `WebApplication` schema.
 */
interface WebAppOptions {
	/** The Schema.org `@type` for the software (defaults to `WebApplication`). */
	type?: string;
	/** Application name. */
	name: string;
	/** Short description of the application. */
	description: string;
	/** Path (relative) used to build the app's canonical URL. */
	path: string;
	/** The target operating system (defaults to `All`). */
	operatingSystem?: string;
	/**
	 * The application category (defaults to `DeveloperApplication`).
	 * See Schema.org `applicationCategory` values for details.
	 */
	applicationCategory?: string;
	/** Optional sub-category for more specific classification (e.g., "IDE Extension"). */
	applicationSubCategory?: string;
	/** Software version (e.g., `1.0.0`). */
	version?: string;
	/** Price as a string (e.g., `0.00` or `19.99`). */
	price?: string;
	/** Optional download URL for the application (e.g., marketplace or direct link). */
	downloadUrl?: string;
	/** Optional URL where the application can be installed (e.g., app store link). */
	installUrl?: string;
	/** Optional detailed requirements (e.g., "Node.js 18+" or "VS Code v1.60+"). */
	requirements?: string;
	/** When true, indicates the app is based on an existing codebase and should link to it using `isBasedOn`. */
	linkSource?: boolean;
}

/**
 * Build a Schema.org `WebApplication` entity for interactive web tools.
 *
 * Includes basic `Offer` metadata (free by default) and links to author
 * and publisher entities so crawlers can surface relevant rich results.
 *
 * @param {WebAppOptions} options Options describing the web application.
 * @returns {AnyObject} A plain object representing the `WebApplication` schema.
 */
export function webAppSchema({
	type = "WebApplication",
	name,
	description,
	path,
	operatingSystem = "All",
	applicationCategory = "DeveloperApplication",
	applicationSubCategory = "",
	version = "1.0.0",
	price = "0.00",
	downloadUrl,
	installUrl,
	requirements,
	linkSource = false,
}: WebAppOptions): AnyObject {
	const canonicalUrl = getCanonicalUrl(path);
	const rootUrl = getCanonicalUrl("");
	const orgId = `${rootUrl}#organization`;
	const personId = `${rootUrl}#person`;

	return {
		"@type": type,
		"@id": `${canonicalUrl}#app`,
		name: name,
		description: description,
		url: canonicalUrl,
		applicationCategory: applicationCategory,
		...(applicationSubCategory && { applicationSubCategory: applicationSubCategory }),
		operatingSystem: operatingSystem,
		softwareVersion: version,
		// Validates if it's free or paid
		isAccessibleForFree: true,
		author: { "@id": personId },
		creator: { "@id": personId },
		publisher: { "@id": orgId },
		mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },

		// Adds download link only if it exists (e.g., VS Code Marketplace)
		...(downloadUrl && { downloadUrl: downloadUrl }),

		// Adds install URL if provided (e.g., app store or direct install link)
		...(installUrl && { installUrl: installUrl }),

		// Detailed requirements (e.g., "Node.js 18+" or "VS Code v1.60+")
		...(requirements && { softwareRequirements: requirements }),

		// If the app is based on an existing software project, link it using `isBasedOn`
		...(linkSource && { isBasedOn: `${canonicalUrl}#source` }),

		offers: {
			"@type": "Offer",
			price: price,
			priceCurrency: "USD",
			availability: "https://schema.org/InStock",
		},
	};
}

/**
 * Options for generating a `SoftwareSourceCode` schema describing a codebase.
 */
interface SoftwareSourceOptions {
	/** Project/package name. */
	name: string;
	/** Short description of the code or repository. */
	description: string;
	/** Path (relative) used to build the canonical URL for the code page. */
	path: string;
	/** Software version (e.g., `1.0.0`). */
	version?: string;
	/** Public repository URL (e.g., GitHub repo link). */
	repositoryUrl?: string;
	/** Optional URL where the software can be installed or accessed (e.g., live app or package link). */
	installUrl?: string;
	/** Primary language used by the project (defaults to `TypeScript`). */
	programmingLanguage?: string;
	/** Runtime/platform (defaults to `Node.js`). */
	runtimePlatform?: string;
	/** Optional array of keywords to describe the project. */
	keywords?: string[];
}

/**
 * Build a Schema.org `SoftwareSourceCode` entity describing a code repository.
 *
 * The function includes language and platform metadata, repository URL,
 * licensing information and links back to the site author/publisher.
 *
 * @param {SoftwareSourceOptions} options Options describing the source code resource.
 * @returns {AnyObject} A plain object representing the `SoftwareSourceCode` schema.
 */
export function softwareSourceCodeSchema({
	name,
	description,
	path,
	version = "1.0.0",
	repositoryUrl = "",
	installUrl = "",
	programmingLanguage = "TypeScript",
	runtimePlatform = "Node.js",
	keywords = [],
}: SoftwareSourceOptions): AnyObject {
	const canonicalUrl = getCanonicalUrl(path);
	const rootUrl = getCanonicalUrl("");
	const personId = `${rootUrl}#person`;
	const orgId = `${rootUrl}#organization`;

	return {
		"@type": "SoftwareSourceCode",
		"@id": `${canonicalUrl}#sourcecode`,
		name: name,
		description: description,
		url: installUrl || canonicalUrl,
		programmingLanguage: {
			"@type": "ComputerLanguage",
			name: programmingLanguage,
		},
		runtimePlatform: runtimePlatform,
		version: version,
		codeRepository: repositoryUrl,
		keywords: Array.isArray(keywords) ? keywords.join(", ") : keywords,
		license: "https://opensource.org/licenses/MIT",
		author: { "@id": personId },
		publisher: { "@id": orgId },
		maintainer: { "@id": personId },
		copyrightHolder: { "@id": orgId },
		mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
	};
}

/**
 * Single breadcrumb entry used to build `BreadcrumbList` markup.
 */
interface BreadcrumbItem {
	/** Human-facing breadcrumb label. */
	name: string;
	/** Relative path used to construct the item's canonical URL. */
	path: string;
}

/**
 * Build a Schema.org `BreadcrumbList` from an ordered array of `BreadcrumbItem`s.
 *
 * The last item in `items` is used to construct the `@id` for the breadcrumb
 * list (so each page has a stable breadcrumb identifier). Each list item
 * receives a `position` starting at 1.
 *
 * @param {BreadcrumbItem[]} items Ordered breadcrumb entries (first -> last).
 * @returns {AnyObject} A plain object representing the `BreadcrumbList` schema.
 */
export function breadcrumbSchema(items: BreadcrumbItem[]): AnyObject {
	return {
		"@type": "BreadcrumbList",
		"@id": `${getCanonicalUrl(items[items.length - 1]?.path || "")}#breadcrumb`,
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: getCanonicalUrl(item.path),
		})),
	};
}

/**
 * Top-level options for `generateMasterSchema` which composes multiple
 * Schema.org entities appropriate for a given page on the site.
 */
interface MasterSchemaOptions {
	/** Page title used for `WebPage` name. */
	title: string;
	/** Page description used for `WebPage` description. */
	description: string;
	/** Relative path used to generate the canonical URL. */
	path: string;
	/**
	 * Page type. Use `Software` when the page represents a codebase or app.
	 * Defaults to `WebPage`.
	 */
	pageType?: "WebPage" | "AboutPage" | "ContactPage" | "Software";
	/** Set to true when the software is a web application (affects `mainEntity`). */
	isApp?: boolean;
	/** Optional breadcrumb entries to include on non-home pages. */
	breadcrumbs?: { name: string; path: string }[];
	softwareConfig?: AnyObject;
}

/**
 * Compose a list of Schema.org entities for a page based on `options`.
 *
 * The returned array contains the canonical `Person`, `Organization`,
 * `WebSite` and a `WebPage` entry and will conditionally include
 * `BreadcrumbList`, `WebApplication` or `SoftwareSourceCode` depending
 * on the provided `pageType` and `isApp` flags.
 *
 * @param {MasterSchemaOptions} options Configuration describing the page.
 * @returns {Array<AnyObject>} An array of schema objects suitable for JSON-LD injection.
 */
export function generateMasterSchema(options: MasterSchemaOptions): Array<AnyObject> {
	const {
		title,
		description,
		path = "",
		isApp = false,
		pageType = "WebPage",
		breadcrumbs = [],
		softwareConfig = {},
	} = options;

	const canonicalUrl = getCanonicalUrl(path);
	const rootUrl = getCanonicalUrl("");
	const personId = `${rootUrl}#person`;
	const isHome = path === "" || path === "/"; // Simple check

	// Determine IDs
	const breadcrumbId = isHome ? undefined : `${canonicalUrl}#breadcrumb`;
	let mainEntityId = `${rootUrl}#website`;
	const websiteEntityId = `${rootUrl}#website`;
	if (pageType === "AboutPage" || pageType === "ContactPage")
		mainEntityId = `${rootUrl}#organization`;
	if (pageType === "Software") {
		mainEntityId = isApp ? `${canonicalUrl}#app` : `${canonicalUrl}#sourcecode`;
	}

	const fullBreadcrumbs = isHome
		? []
		: [
				{ name: "Home", path: "" },
				...breadcrumbs.filter((b) => b.path !== "" && b.path !== "/"),
			];

	return [
		personSchema(),
		organizationSchema(),
		websiteSchema({ mainEntityId: isHome ? websiteEntityId : undefined }),
		webPageSchema({
			name: title,
			description,
			path,
			type: pageType === "Software" ? "WebPage" : pageType,
			breadcrumbId,
			mainEntityId: isHome ? undefined : mainEntityId,
		}),

		// Only add BreadcrumbList if it's NOT the homepage
		...(!isHome ? [breadcrumbSchema(fullBreadcrumbs)] : []),

		...(pageType === "Software"
			? [
					isApp
						? webAppSchema({ name: title, description, path, ...softwareConfig })
						: softwareSourceCodeSchema({
								name: title,
								description,
								path,
								...softwareConfig,
							}),
				]
			: []),

		...(pageType === "Software" &&
		isApp &&
		softwareConfig?.type === "SoftwareApplication" &&
		softwareConfig?.sourceCodeConfigs
			? [
					{
						"@type": "SoftwareSourceCode",
						"@id": `${canonicalUrl}#source`,
						creator: { "@id": personId },
						...(softwareConfig.sourceCodeConfigs as object),
					},
				]
			: []),
	];
}
