"use client";

import React from "react";
import { AnchorHTMLAttributes, MouseEvent } from "react";

import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";

import { cn } from "@/utils/classname";

/**
 * Determines the type of link based on the href
 * @param href - The link destination
 * @returns The link type: 'hash', 'internal', or 'external'
 */
const getLinkType = (href: string): "hash" | "internal" | "external" => {
	if (href.startsWith("#")) return "hash";
	if (href.startsWith("/")) return "internal";
	return "external";
};

/**
 * Smoothly scrolls to an element with the given ID
 * @param elementId - The ID of the target element (without the # symbol)
 */
const scrollToElement = (elementId: string): void => {
	const element = document.getElementById(elementId);
	element?.scrollIntoView({ behavior: "smooth", block: "start" });
};

/**
 * Props for the SmartLink component
 */
export interface SmartLinkProps
	extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel"> {
	/** The destination URL or hash anchor */
	href: string;
	/** Additional CSS classes */
	className?: string;
	/** Accessible label for the link */
	"aria-label"?: string;
	/** Child elements to render inside the link */
	children: React.ReactNode;
	/** Optional offset for hash links (useful for fixed headers) */
	scrollOffset?: number;
	/** Optional click handler */
	onClick?: (e: MouseEvent<HTMLAnchorElement>) => void | undefined;
	/* Optional prop to control external link icon display */
	linkLine?: boolean;
}

/**
 * SmartLink Component
 *
 * An intelligent Link component that automatically handles:
 * - Hash links (#anchor) with smooth scroll behavior
 * - Internal links (/path) without external attributes
 * - External links (https://...) with proper security attributes
 */
export const SmartLink = ({
	href,
	className,
	"aria-label": ariaLabel,
	children,
	scrollOffset,
	onClick = undefined,
	linkLine = true,
	...props
}: SmartLinkProps) => {
	const linkType = getLinkType(href);

	/**
	 * Handles click events for hash links
	 */
	const handleHashClick = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const elementId = href.replace("#", "");

		if (scrollOffset !== undefined) {
			// Custom scroll with offset
			const element = document.getElementById(elementId);
			if (element) {
				const elementPosition = element.getBoundingClientRect().top;
				const offsetPosition = elementPosition + window.pageYOffset - scrollOffset;

				window.scrollTo({
					top: offsetPosition,
					behavior: "smooth",
				});
			}
		} else {
			// Default smooth scroll
			scrollToElement(elementId);
		}

		// Call custom onClick if provided
		onClick?.(e);
	};

	// Hash link with smooth scroll
	if (linkType === "hash") {
		return (
			<Link
				href={href}
				scroll={false}
				onClick={handleHashClick}
				className={cn("hover:underline", className)}
				aria-label={ariaLabel}
				{...props}
			>
				{children}
			</Link>
		);
	}

	// External link with security attributes
	if (linkType === "external") {
		return (
			<Link
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={cn("inline-flex items-center gap-1 hover:underline", className)}
				aria-label={ariaLabel}
				onClick={onClick}
				{...props}
			>
				{children}
				{linkLine && <RiExternalLinkLine className="text-inherit" />}
			</Link>
		);
	}

	// Internal link (default)
	return (
		<Link
			href={href}
			className={cn("hover:underline", className)}
			aria-label={ariaLabel}
			onClick={onClick}
			{...props}
		>
			{children}
		</Link>
	);
};
