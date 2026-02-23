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
	/* Optional prop to control hover effect */
	hoverEffect?: boolean;
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
	hoverEffect = true,
	...props
}: SmartLinkProps): JSX.Element {
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

	const hoverEffectClasses: string[] = hoverEffect
		? [
				"relative inline-block",
				"after:absolute after:left-0 after:bottom-0",
				"after:h-full after:w-full",
				"after:origin-bottom after:scale-y-0",
				"after:bg-primary-muted",
				"after:transition-transform after:duration-300",
				"hover:after:scale-y-100",
				"after:-z-10",
			]
		: [];

	const defaultLinkClasses =
		"underline-offset-2 underline decoration-transparent hover:decoration-current transition-all duration-300 decoration-[1.5px]";
	const linkClasses = [defaultLinkClasses, ...hoverEffectClasses];

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
				className={cn(
					linkClasses,
					"relative z-10 inline-flex items-center gap-0.5",
					className
				)}
				aria-label={ariaLabel}
				onClick={onClick}
				{...props}
			>
				{children}
				{linkLine && (
					<Icon name="arrowOutward" className="relative top-0.25 text-inherit" />
				)}
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
