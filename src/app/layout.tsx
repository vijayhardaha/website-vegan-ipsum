import type { JSX, ReactNode } from "react";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";
import { Inter, Geist_Mono, Playfair_Display } from "next/font/google";

import Layout from "@/components/layout/Layout";
import { GOOGLE_ANALYTICS_ID, SITE_METADATA } from "@/constants/seo";

import "../styles/globals.css";

/**
 * Sans font configuration for a clean and modern sans-serif font.
 */
export const sansFont = Inter({
	weight: ["400", "500", "600", "700"],
	variable: "--font-sans",
	subsets: ["latin"],
});

/**
 * Mono font configuration for a clean monospaced font.
 */
export const monoFont = Geist_Mono({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-mono",
});

/**
 * Heading font configuration for an elegant serif font.
 */
export const headingFont = Playfair_Display({
	weight: ["400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	variable: "--font-heading",
});

/**
 * Global metadata for the application.
 */
export const metadata: Metadata = SITE_METADATA;

/**
 * Root layout component that wraps the application.
 *
 * @param {ReactNode} children - React children elements to be rendered inside the layout.
 * @returns {JSX.Element} The root layout component with global styles and fonts applied.
 */
export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
	return (
		<html lang="en">
			<GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
			<body
				className={`${sansFont.variable} ${monoFont.variable} ${headingFont.variable} text-foreground bg-background font-base font-sans leading-relaxed font-normal antialiased`}
			>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
