import type { JSX } from "react";

import Image from "next/image";

import SmartLink from "@/components/composites/SmartLink";
import { FOOTER_NAV_LINKS, NavLink } from "@/constants/navlinks";
import { cn } from "@/utils/classnames";

/**
 * Footer component for the Vegan Ipsum website.
 * Displays navigation links and copyright information.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
export default function Footer(): JSX.Element {
	return (
		<footer className="bg-primary-solid text-primary-foreground py-6 pt-12" aria-label="Footer">
			<div className="mx-auto max-w-5xl px-4 md:px-6">
				<div className="space-y-6 text-xs leading-relaxed font-medium">
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
						<SmartLink
							href="/"
							aria-label="Navigate to homepage"
							className="text-xl font-black"
							hoverEffect={false}
						>
							<Image
								src="/logo-white.svg"
								alt="Vegan Ipsum Logo"
								width={213}
								height={32}
								priority
								className="h-auto w-[180px]"
							/>
							<span className="sr-only">Vegan Ipsum</span>
						</SmartLink>
						<ul
							className="flex flex-wrap items-center justify-center gap-4"
							aria-label="Footer navigation links"
						>
							{FOOTER_NAV_LINKS.map((link: NavLink) => (
								<li key={link.href}>
									<SmartLink
										href={link.href}
										aria-label={link.label}
										className={cn("hover:text-primary-muted")}
										hoverEffect={false}
									>
										{link.label}
									</SmartLink>
								</li>
							))}
						</ul>
					</div>

					<p className="border-border/30 border-t pt-6 text-center md:text-left">
						&copy; 2025-{new Date().getFullYear()} Vegan Ipsum. Crafted with compassion
						by{" "}
						<SmartLink
							href="https://instagram.com/vegan.vijay"
							aria-label="Visit vijay hardaha's instagram profile"
							hoverEffect={false}
						>
							Vijay Hardaha
						</SmartLink>
						.
					</p>
				</div>
			</div>
		</footer>
	);
}
