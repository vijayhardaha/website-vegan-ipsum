import { ReactNode } from "react";

import { cn } from "@/utils/classname";

/**
 * Props for the Container component.
 */
interface IContainerProps {
	children: ReactNode;
	className?: string;
}

/**
 * A layout component that wraps its children in a container with consistent spacing.
 *
 * @param {IContainerProps} props - The props for the component.
 * @returns {React.ReactElement} The rendered container component.
 */
const Container = ({ children, className }: IContainerProps): ReactNode => {
	return (
		<div className={cn("relative mx-auto max-w-5xl px-4 md:px-6", className)}>{children}</div>
	);
};

export default Container;
