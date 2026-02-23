"use client";

import { useState, useEffect, useRef } from "react";
import type { JSX } from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { LuAlignRight, LuX } from "react-icons/lu";

import SmartLink from "@/components/composites/SmartLink";
import Button from "@/components/primitives/Button";
import { HEADER_NAV_LINKS, NavLink } from "@/constants/navlinks";
import { cn } from "@/utils/classnames";

/**
 * Header component for the website.
 * Displays the website's logo and a navigation menu with links.
 *
 * @returns {JSX.Element} The rendered header component.
 */
export default function Header(): JSX.Element {
	const pathname: string = usePathname();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	/**
	 * Effect hook to handle clicks outside the menu.
	 * Closes the mobile menu if a click occurs outside of it.
	 * Cleans up the event listener on component unmount.
	 */
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMobileMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	/**
	 * Determines if a given path is the active route.
	 *
	 * @param {string} path - The path to check against the current pathname.
	 * @returns {boolean} `true` if the path matches the current pathname, otherwise `false`.
	 */
	const isActive = (path: string): boolean => pathname === path;

	return (
		<header className="text-foreground bg-background/85 border-border sticky top-0 z-100 border-b py-3 backdrop-blur-md">
			<div className="mx-auto max-w-5xl px-4 md:px-6">
				<div className="flex items-center justify-between gap-6">
					<SmartLink href="/" aria-label="Navigate to homepage" hoverEffect={false}>
						<Image
							src="/logo.svg"
							alt="Vegan Ipsum Logo"
							width={213}
							height={32}
							priority
							className="h-auto w-[220px] py-2"
						/>
						<span className="sr-only">Vegan Ipsum</span>
					</SmartLink>
					<div className="ml-auto" ref={menuRef}>
						<Button
							size="icon"
							variant="primary-outline"
							className="text-2xl lg:hidden"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
							aria-expanded={isMobileMenuOpen}
							aria-controls="main-menu"
						>
							{isMobileMenuOpen ? <LuX /> : <LuAlignRight />}
						</Button>
						<nav
							id="main-menu"
							aria-label="Main navigation"
							className={cn(
								"bg-background border-border absolute top-full left-0 w-full border-t shadow-md lg:static lg:block lg:border-none lg:bg-transparent lg:shadow-none",
								isMobileMenuOpen ? "block" : "hidden"
							)}
						>
							<ul className="flex flex-col space-y-4 p-4 md:px-6 lg:flex-row lg:space-y-0 lg:space-x-5 lg:p-0">
								{HEADER_NAV_LINKS.map((link: NavLink) => (
									<li key={link.href}>
										<SmartLink
											href={link.href}
											className={cn(
												"inline-flex items-center text-sm font-semibold",
												"hover:text-primary",
												{
													"text-primary font-bold decoration-current":
														isActive(link.href),
												}
											)}
											aria-label={link.label}
											aria-current={isActive(link.href) ? "page" : undefined}
											onClick={() => setIsMobileMenuOpen(false)}
											hoverEffect={false}
										>
											{link.label}
										</SmartLink>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
}
