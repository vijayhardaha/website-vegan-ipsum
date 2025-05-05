// src/constants/navLinks.ts

/**
 * Represents a navigation link.
 * @property {string} label - The display text for the link.
 * @property {string} href - The URL the link points to.
 * @property {boolean} [external] - Indicates if the link is external (optional).
 */
export type INavLink = {
  label: string;
  href: string;
  external?: boolean;
};

/**
 * Navigation links displayed in the header of the website.
 * @type {NavLink[]}
 */
export const HEADER_NAV_LINKS: INavLink[] = [
  { label: "Home", href: "/" },
  { label: "JSON API", href: "/json-api" },
  { label: "VS Code Extension", href: "/vscode-extension" },
  { label: "Node Cli", href: "/node-cli" },
  { label: "NPM Package", href: "/npm-package" },
  { label: "About", href: "/about" },
];

/**
 * Navigation links displayed in the footer of the website.
 * @type {NavLink[]}
 */
export const FOOTER_NAV_LINKS: INavLink[] = [
  { label: "Json API", href: "/json-api" },
  { label: "Node Cli", href: "/node-cli" },
  { label: "NPM Package", href: "/npm-package" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
