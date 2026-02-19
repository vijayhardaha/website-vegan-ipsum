import { getBaseUrl } from "@/utils/seoUtils";

/**
 * Represents the structure of SEO-related constants.
 */
type SEOType = {
	title: string;
	description: string;
	titlePostfix: string;
	separator: string;
};

/**
 * Represents the structure of the base metadata object.
 */
export type BaseMetadataType = {
	title: string;
	description: string;
	metadataBase: URL;
	appleTouchIcon: string;
	alternates: {
		canonical: string;
	};
	keywords: string[];
	author: string;
	robots: string;
	icons: {
		icon: string;
		apple: string;
	};
	verification: {
		google: string;
	};
	openGraph: {
		title: string;
		description: string;
		images: {
			url: string;
			width: number;
			height: number;
		}[];
		type: string;
		siteName: string;
		locale: string;
		url: string;
	};
	twitter: {
		card: string;
		title: string;
		description: string;
		images: string[];
		creator: string;
	};
};

/**
 * An object containing SEO-related constants for the application.
 */
export const SEO: SEOType = {
	title: "Vegan Ipsum - Ethical, Plant-Based Placeholder Text",
	description:
		"Generate free, plant-based vegan lorem ipsum for ethical web design and development projects. A cruelty-free placeholder text generator for compassionate creatives, sustainable brands, and eco-conscious developers.",
	titlePostfix: "Vegan Ipsum",
	separator: "-",
};

/**
 * The base metadata object used for SEO, Open Graph, and Twitter cards.
 */
export const baseMetadata: BaseMetadataType = {
	title: SEO.title,
	description: SEO.description,
	metadataBase: new URL(getBaseUrl()),
	appleTouchIcon: "/apple-touch-icon.png",
	alternates: {
		canonical: getBaseUrl(),
	},
	keywords: [
		"vegan lorem ipsum",
		"vegan placeholder text",
		"vegan ipsum generator",
		"cruelty-free placeholder text",
		"ethical lorem ipsum",
		"plant-based lorem ipsum",
		"dummy text for vegan projects",
		"ethical web design tools",
		"placeholder text generator",
		"lorem ipsum alternative",
		"generate vegan placeholder text online",
		"best lorem ipsum for ethical designers",
		"free cruelty-free lorem ipsum tool",
		"vegan ipsum for web developers",
		"placeholder text for sustainable brands",
		"vegan content filler",
		"ethical UI/UX design",
		"placeholder copy for eco-friendly websites",
		"vegan copy generator",
		"lorem ipsum with meaning",
	],
	author: "Vijay Hardaha",
	robots: "index, follow",
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	verification: {
		google: "4CyrCxZi9TWgvS-GzB1QUhgEl0bKoIzT36368e_vlx0",
	},
	openGraph: {
		title: SEO.title,
		description: SEO.description,
		images: [
			{
				url: "/thumbnail.png",
				width: 512,
				height: 512,
			},
		],
		type: "website",
		siteName: SEO.title,
		locale: "en_US",
		url: "https://veganipsum.vercel.app",
	},
	twitter: {
		card: "summary_large_image",
		title: SEO.title,
		description: SEO.description,
		images: ["/thumbnail.png"],
		creator: "@vijayhardaha",
	},
};
