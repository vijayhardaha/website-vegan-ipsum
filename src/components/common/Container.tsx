import { ReactNode } from "react";

import { cn } from "@/utils/classnames";

/**
 * Props for the Container component.
 */
interface Container {
	children: ReactNode;
	className?: string;
}

/**
 * A layout component that wraps its children in a container with consistent spacing.
 *
 * @param {Container} props - The props for the component.
 * @returns {ReactNode} The rendered container component.
 */
export default function Container({ children, className }: Container): ReactNode {
	return (
		<div className={cn("relative mx-auto max-w-5xl px-4 md:px-6", className)}>{children}</div>
	);
}
