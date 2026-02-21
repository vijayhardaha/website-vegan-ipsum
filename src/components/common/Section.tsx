import { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/classnames";

/**
 * Props for the Section component
 */
export interface SectionProps extends HTMLAttributes<HTMLElement> {
	/** Child elements to render inside the section */
	children: ReactNode;
	/** Additional CSS classes */
	className?: string;
}

/**
 * Section Component
 *
 * A reusable semantic section wrapper that accepts className and children.
 * All other HTML section attributes can be passed and will be spread onto the element.
 */
export default function Section({ children, className, ...props }: SectionProps) {
	return (
		<section className={cn("relative py-16 md:py-20", className)} {...props}>
			{children}
		</section>
	);
}
