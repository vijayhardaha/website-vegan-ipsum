import { Metadata } from "next";

/**
 * Site-wide configuration values for SEO and metadata.
 */
export const SITE_CONFIG = {
	name: "Vegan Ipsum",
	title: "Vegan Ipsum - Ethical & Plant-Based Lorem Ipsum Generator",
	url: "https://veganipsum.vercel.app",
	description:
		"Generate ethical, plant-based placeholder text with Vegan Ipsum. The perfect Lorem Ipsum alternative for vegans and conscious designers. Try it for free!",
	category: "Web Development Tools",
	creator: {
		name: "Vijay Hardaha",
		description:
			"Full-Stack Web Developer and full-time freelancer specializing in modern web applications and custom digital solutions. Experienced in WordPress and WooCommerce development, building high-performance websites and scalable e-commerce platforms.",
		jobTitle: "Full-Stack Web Developer",
		handle: "@vijayhardaha",
		handles: ["@vijayhardaha", "@vegan.vijay"],
		urls: {
			pph: "https://pph.me/vijayhardaha",
			github: "https://github.com/vijayhardaha",
			instagram: "https://instagram.com/vegan.vijay",
			facebook: "https://facebook.com/vegan.vijay",
			linkedin: "https://linkedin.com/in/vijayhardaha",
			wordpress: "https://profiles.wordpress.org/vijayhardaha/",
			devto: "https://dev.to/vijayhardaha",
			stactoverflow: "https://stackoverflow.com/users/11848895/vijay-hardaha",
			codewars: "https://www.codewars.com/users/vijayhardaha",
		},
	},
};

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
 * Title and description used for SEO, Open Graph, and Twitter cards.
 */
const titleAndDescription = {
	title: SITE_CONFIG.title,
	description: SITE_CONFIG.description,
};

/**
 * The main metadata object containing all SEO-related information for the website.
 */
export const SITE_METADATA: Metadata = {
	...titleAndDescription,
	keywords: SEO_KEYWORDS,
	applicationName: SITE_CONFIG.name,
	authors: [{ name: SITE_CONFIG.creator.name, url: "https://instagram.com/vegan.vijay" }],
	publisher: SITE_CONFIG.creator.name,
	robots: {
		index: true,
		follow: true,
	},
	category: SITE_CONFIG.category,
	icons: {
		icon: [
			{ url: "/icon.svg", type: "image/svg+xml" },
			{ url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon.ico" },
		],
		apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
	},
	verification: {
		google: GOOGLE_SITE_VERIFICATION,
	},
	openGraph: {
		...titleAndDescription,
		images: [
			{
				url: "/thumbnail.png",
				width: 512,
				height: 512,
			},
		],
		type: "website",
		siteName: SITE_CONFIG.name,
		locale: "en_US",
	},
	twitter: {
		...titleAndDescription,
		card: "summary_large_image",
		images: ["/thumbnail.png"],
		creator: SITE_CONFIG.creator.handle,
	},
};
