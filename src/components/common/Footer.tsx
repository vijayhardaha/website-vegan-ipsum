import React from "react";

import Image from "next/image";

import { FOOTER_NAV_LINKS, INavLink } from "@/constants/navLinks";
import { cn } from "@/utils/classNameUtils";

import { SmartLink } from "./SmartLink";

/**
 * Footer component for the Vegan Ipsum website.
 * Displays navigation links and copyright information.
 *
 * @returns {React.ReactNode} The rendered footer component.
 */
export default function Footer(): React.ReactNode {
	return (
		<footer className="bg-primary-solid text-primary-foreground py-6 pt-12" aria-label="Footer">
			<div className="mx-auto max-w-5xl px-4 md:px-6">
				<div className="space-y-6 text-xs leading-relaxed font-medium">
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
						<SmartLink
							href="/"
							aria-label="Navigate to homepage"
							className="text-xl font-black"
						>
							<Image
								src="/logo-white.svg"
								alt="Vegan Ipsum Logo"
								width={391}
								height={158}
								priority
								className="h-auto w-[150px]"
							/>
							<span className="sr-only">Vegan Ipsum</span>
						</SmartLink>
						<ul
							className="flex flex-wrap items-center justify-center gap-4"
							aria-label="Footer navigation links"
						>
							{FOOTER_NAV_LINKS.map((link: INavLink) => (
								<li key={link.href}>
									<SmartLink
										href={link.href}
										aria-label={link.label}
										className={cn(
											"inline-flex items-center gap-1",
											"hover:text-primary-muted hover:underline"
										)}
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
							aria-label="Visit Vijay Hardaha's Instagram profile"
							className="underline"
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
