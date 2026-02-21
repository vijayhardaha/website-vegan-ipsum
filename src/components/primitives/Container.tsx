import type { JSX, ReactNode } from "react";

import { cn } from "@/utils/classnames";

/**
 * Props for the Container component.
 */
interface ContainerProps {
	children: ReactNode;
	className?: string;
}

/**
 * A layout component that wraps its children in a container with consistent spacing.
 *
 * @param {ContainerProps} props - The props for the component.
 * @returns {JSX.Element} The rendered container component.
 */
export default function Container({ children, className }: ContainerProps): JSX.Element {
	return (
		<div className={cn("relative mx-auto max-w-5xl px-4 md:px-6", className)}>{children}</div>
	);
}
