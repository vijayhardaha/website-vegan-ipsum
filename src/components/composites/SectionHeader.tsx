import { ReactNode } from "react";

import Icon from "@/components/primitives/Icon";
import { IconName } from "@/constants/icons";
import { cn } from "@/utils/classnames";

/**
 * Props for the SectionHeader component
 */
export interface SectionHeaderProps {
	/** The tagline text displayed above the heading */
	tagline?: ReactNode | string;
	/** The main heading text */
	heading: ReactNode | string;
	/** Optional icon component to display before the tagline */
	icon?: IconName;
	/** Additional CSS classes for the container */
	className?: string;
	/** Additional CSS classes for the tagline */
	taglineClassName?: string;
	/** Additional CSS classes for the heading */
	headingClassName?: string;
	/** Children elements (typically paragraphs) */
	children: ReactNode;
}

/**
 * SectionHeader Component
 *
 * A reusable section header component with tagline, heading, and content area.
 * Provides consistent styling for section introductions throughout the application.
 *
 * @return {ReactNode} The rendered section header component.
 */
export default function SectionHeader({
	tagline,
	heading,
	icon = undefined,
	className,
	taglineClassName,
	headingClassName,
	children,
}: SectionHeaderProps): ReactNode {
	return (
		<div className={cn("", className)}>
			{tagline && (
				<p
					className={cn(
						"text-primary mb-2 inline-flex items-center justify-center gap-1 text-xs font-bold tracking-wide uppercase",
						taglineClassName
					)}
				>
					{icon && <Icon name={icon as IconName} size={4} />} {tagline}
				</p>
			)}
			<h2 className={cn("mb-4 text-3xl md:text-4xl", headingClassName)}>{heading}</h2>
			<div className="space-y-4 md:space-y-6">{children}</div>
		</div>
	);
}
