import { ReactNode } from "react";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter, Geist_Mono, Playfair_Display } from "next/font/google";

import Layout from "@/components/common/Layout";
import { defaultSeoData, IDefaultSeoData } from "@/constants/seo";

import "../styles/globals.css";

/**
 * Sans font configuration for a versatile sans-serif font.
 */
export const customSans = Inter({
	weight: ["400", "500", "600", "700"],
	variable: "--font-sans",
	subsets: ["latin"],
});

/**
 * Mono font configuration for a clean monospace font.
 */
export const customMono = Geist_Mono({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-mono",
});

/**
 * Mono font configuration for a clean monospace font.
 */
export const customHeading = Playfair_Display({
	weight: ["400", "500", "600", "700", "800"],
	subsets: ["latin"],
	variable: "--font-heading",
});

/**
 * Metadata for the application.
 */
export const metadata: IDefaultSeoData = defaultSeoData;

/**
 * Root layout component that wraps the application.
 *
 * @param {ReactNode} children - React children elements to be rendered inside the layout.
 * @returns {ReactNode} The root layout component with global styles and fonts applied.
 */
export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>): ReactNode {
	return (
		<html lang="en">
			<body
				className={`${customSans.variable} ${customMono.variable} ${customHeading.variable} text-foreground bg-background font-base font-sans leading-relaxed font-normal antialiased`}
			>
				<Layout>{children}</Layout>
			</body>
			<GoogleAnalytics gaId="G-XR1TK565WJ" />
		</html>
	);
}
