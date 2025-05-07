import React from "react";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Mukta, Geist_Mono, Teko } from "next/font/google";

import Layout from "@/components/layout/Layout";
import { baseMetadata, BaseMetadataType } from "@/constants/seo";

import "../styles/globals.css";

/**
 * Sans font configuration for a versatile sans-serif font.
 */
export const customSans = Mukta({
  weight: ["400", "500", "600", "700"],
  variable: "--font-custom-sans",
  subsets: ["latin"],
});

/**
 * Mono font configuration for a clean monospace font.
 */
export const customMono = Geist_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-custom-mono",
});

/**
 * Mono font configuration for a clean monospace font.
 */
export const customHeading = Teko({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-custom-heading",
});

/**
 * Metadata for the application.
 */
export const metadata: BaseMetadataType = baseMetadata;

/**
 * Root layout component that wraps the application.
 *
 * @param children - React children elements to be rendered inside the layout.
 * @returns The root layout component with global styles and fonts applied.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${customSans.variable} ${customMono.variable} ${customHeading.variable} text-foreground bg-background font-base font-sans font-normal antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
      <GoogleAnalytics gaId="G-XR1TK565WJ" />
    </html>
  );
}
