/**
 * Defines the structure of a navigation link and the arrays of
 * links for the header and footer of the website.
 *
 * @property {string} label - The display text for the link.
 * @property {string} href - The URL the link points to.
 */
export interface NavLink {
	label: string;
	href: string;
}

/**
 * Navigation links displayed in the header of the website.
 *
 * @type {NavLink[]}
 */
export const HEADER_NAV_LINKS: NavLink[] = [
	{ label: "Home", href: "/" },
	{ label: "JSON API", href: "/json-api" },
	{ label: "VS Code Extension", href: "/vscode-extension" },
	{ label: "Node CLI", href: "/node-cli" },
	{ label: "NPM Package", href: "/npm-package" },
	{ label: "About", href: "/about" },
];

/**
 * Navigation links displayed in the footer of the website.
 *
 * @type {NavLink[]}
 */
export const FOOTER_NAV_LINKS: NavLink[] = [
	{ label: "Json API", href: "/json-api" },
	{ label: "Node CLI", href: "/node-cli" },
	{ label: "NPM Package", href: "/npm-package" },
	{ label: "About", href: "/about" },
	{ label: "Contact", href: "/contact" },
];
