"use client";

import { ReactNode, useState, useEffect, useRef } from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { LuAlignRight, LuX } from "react-icons/lu";

import { HEADER_NAV_LINKS, NavLink } from "@/constants/navlinks";
import { cn } from "@/utils/classnames";

import Button from "../ui/button";

import SmartLink from "./SmartLink";

/**
 * Header component for the website.
 * Displays the website's logo and a navigation menu with links.
 *
 * @returns {ReactNode} The rendered header component.
 */
export default function Header(): ReactNode {
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
					<SmartLink href="/" aria-label="Navigate to homepage">
						<Image
							src="/logo.svg"
							alt="Vegan Ipsum Logo"
							width={391}
							height={158}
							priority
							className="h-auto w-[180px] py-2"
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
						>
							{isMobileMenuOpen ? <LuX /> : <LuAlignRight />}
						</Button>
						<nav
							aria-label="Main navigation"
							className={`${
								isMobileMenuOpen ? "block" : "hidden"
							} bg-background border-border absolute top-full left-0 w-full border-t shadow-md lg:static lg:block lg:border-none lg:bg-transparent lg:shadow-none`}
						>
							<ul className="flex flex-col space-y-4 p-4 md:px-6 lg:flex-row lg:space-y-0 lg:space-x-6 lg:p-0">
								{HEADER_NAV_LINKS.map((link: NavLink) => (
									<li key={link.href}>
										<SmartLink
											href={link.href}
											className={cn(
												"inline-flex items-center gap-1 text-sm font-semibold decoration-2 underline-offset-2 transition-all",
												"hover:text-primary",
												{
													"text-primary underline": isActive(link.href),
												}
											)}
											aria-label={link.label}
											aria-current={isActive(link.href) ? "page" : undefined}
											onClick={() => setIsMobileMenuOpen(false)}
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
