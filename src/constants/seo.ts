import { Metadata } from "next";

import { getBaseUrl } from "@/utils/seo";

/**
 * Primary SEO values used throughout the application.
 */
export const SEO_TITLE = "Vegan Ipsum - Ethical, Plant-Based Placeholder Text";
export const SEO_DESCRIPTION =
	"Generate free, plant-based vegan lorem ipsum for ethical web design and development projects. A cruelty-free placeholder text generator for compassionate creatives, sustainable brands, and eco-conscious developers.";
export const SEO_TITLE_POSTFIX = "Vegan Ipsum";
export const SEO_SEPARATOR = "-";
export const SEO_CANONICAL_URL = getBaseUrl();

/**
 * Shared SEO object (kept for backward compatibility).
 */
export const GLOBAL_SEO = {
	title: SEO_TITLE,
	description: SEO_DESCRIPTION,
	titlePostfix: SEO_TITLE_POSTFIX,
	separator: SEO_SEPARATOR,
};

/**
 * Represents the structure of the base metadata object.
 */
export interface SiteMetadata {
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
}

/**
 * The default metadata object used for SEO, Open Graph, and Twitter cards.
 */
export const SEO_KEYWORDS = [
	"vegan ipsum",
	"veggie ipsum",
	"vegan ipsum generator",
	"vegan lorem ipsum",
	"vegan placeholder text",
	"best lorem ipsum for ethical designers",
	"cruelty-free placeholder text",
	"dummy text for vegan projects",
	"ethical lorem ipsum",
	"free cruelty-free lorem ipsum tool",
	"generate vegan placeholder text online",
	"lorem ipsum alternative",
	"placeholder text for sustainable brands",
	"plant-based lorem ipsum",
	"vegan content filler",
	"vegan copy generator",
	"vegan ipsum for web developers",
	"vegan placeholder text generator",
	"vegan web design tools",
];

/**
 * Google Search Console verification code for the site
 */
export const GOOGLE_SITE_VERIFICATION = "4CyrCxZi9TWgvS-GzB1QUhgEl0bKoIzT36368e_vlx0";
export const GOOGLE_ANALYTICS_ID = "G-XR1TK565WJ";

/**
 * The main metadata object containing all SEO-related information for the website.
 */
export const SITE_METADATA: Metadata = {
	title: SEO_TITLE,
	description: SEO_DESCRIPTION,
	metadataBase: new URL(SEO_CANONICAL_URL),
	alternates: {
		canonical: SEO_CANONICAL_URL,
	},
	keywords: SEO_KEYWORDS,
	applicationName: SEO_TITLE_POSTFIX,
	authors: [{ name: "Vijay Hardaha", url: "https://instagram.com/vegan.vijay" }],
	publisher: "Vijay Hardaha",
	robots: "index, follow",
	category: "Web Development Tools",
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	verification: {
		google: GOOGLE_SITE_VERIFICATION,
	},
	openGraph: {
		title: SEO_TITLE,
		description: SEO_DESCRIPTION,
		images: [
			{
				url: "/thumbnail.png",
				width: 512,
				height: 512,
			},
		],
		type: "website",
		siteName: SEO_TITLE,
		locale: "en_US",
		url: SEO_CANONICAL_URL,
	},
	twitter: {
		card: "summary_large_image",
		title: SEO_TITLE,
		description: SEO_DESCRIPTION,
		images: ["/thumbnail.png"],
		creator: "@vijayhardaha",
	},
};
