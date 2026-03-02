"use client";

import { MouseEvent } from "react";
import type { ComponentPropsWithoutRef, JSX } from "react";

import Link from "next/link";

import Icon from "@/components/primitives/Icon";
import { cn } from "@/utils/classnames";

/**
 * Determines the type of link based on the href.
 *
 * @param {string} href - The link destination
 * @returns The link type: 'hash', 'internal', or 'external'
 */
const getLinkType = (href: string): "hash" | "internal" | "external" => {
	if (href.startsWith("#")) return "hash";
	if (href.startsWith("/")) return "internal";
	return "external";
};

/**
 * Smoothly scrolls to an element with the given ID
 *
 * @param {string} elementId - The ID of the target element (without the # symbol)
 */
const scrollToElement = (elementId: string): void => {
	const element = document.getElementById(elementId);
	element?.scrollIntoView({ behavior: "smooth", block: "start" });
};

/**
 * Props for the SmartLink component
 */
interface SmartLinkProps extends Omit<ComponentPropsWithoutRef<typeof Link>, "href"> {
	/** The destination URL or hash anchor */
	href: string;
	/** Optional offset for hash links (useful for fixed headers) */
	scrollOffset?: number;
	/* Optional prop to control external link icon display */
	linkLine?: boolean;
	/* Optional prop to control hover effect style: 'none' | 'border' | 'bg' */
	hoverEffect?: "none" | "border" | "bg";
}

/**
 * SmartLink Component
 *
 * An intelligent Link component that automatically handles:
 * - Hash links (#anchor) with smooth scroll behavior
 * - Internal links (/path) without external attributes
 * - External links (https://...) with proper security attributes
 */
export default function SmartLink({
	href,
	className,
	"aria-label": ariaLabel,
	children,
	scrollOffset,
	onClick = undefined,
	linkLine = true,
	hoverEffect = "bg",
	...props
}: SmartLinkProps): JSX.Element {
	const linkType = getLinkType(href);

	// Dev-time accessibility warning for external links without an accessible name
	if (process.env.NODE_ENV !== "production" && linkType === "external" && !ariaLabel) {
		console.warn(
			`[SmartLink] External link '${href}' does not have an accessible name (aria-label). Provide an aria-label or visible link text.`
		);
	}

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

	// Build classes based on hoverEffect union: 'none' | 'border' | 'bg' (default 'bg')
	const baseClasses = ["relative inline-block", "transition-colors duration-200"];
	let effectClasses: string[] = [];
	let defaultLinkClasses = "";
	let hoverTextClass = "";

	if (hoverEffect === "bg") {
		// default bottom border plus black overlay filling from bottom to top on hover
		defaultLinkClasses = "border-b-2 border-current";
		effectClasses = [
			"after:absolute after:left-0 after:bottom-0 after:h-full after:w-full",
			"after:origin-bottom after:scale-y-0",
			"after:bg-muted",
			"after:transition-transform after:duration-300",
			"hover:after:scale-y-100",
			"after:-z-10",
		];
		hoverTextClass = "hover:text-amber-600";
	} else if (hoverEffect === "border") {
		// no default border; show left-to-right border animation on hover
		defaultLinkClasses = "";
		effectClasses = [
			"after:absolute after:left-0 after:bottom-0",
			"after:block after:h-0.5 after:w-full",
			"after:origin-left after:scale-x-0",
			"after:bg-current",
			"after:transition-transform after:duration-300",
			"hover:after:scale-x-100",
		];
		hoverTextClass = "";
	} else {
		// 'none' — no decorative effect
		defaultLinkClasses = "";
		effectClasses = [];
		hoverTextClass = "";
	}

	const linkClasses = [...baseClasses, defaultLinkClasses, ...effectClasses, hoverTextClass];

	// Hash link with smooth scroll
	if (linkType === "hash") {
		return (
			<Link
				href={href}
				scroll={false}
				onClick={handleHashClick}
				className={cn(linkClasses, className)}
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
				className={cn(linkClasses, "relative inline-flex items-center gap-0.5", className)}
				aria-label={ariaLabel}
				onClick={onClick}
				{...props}
			>
				{children}
				{linkLine && <Icon name="arrowOutward" className="relative top-px text-inherit" />}
			</Link>
		);
	}

	// Internal link (default)
	return (
		<Link
			href={href}
			className={cn(linkClasses, className)}
			aria-label={ariaLabel}
			onClick={onClick}
			{...props}
		>
			{children}
		</Link>
	);
}
