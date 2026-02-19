import { ReactNode } from "react";

import { cn } from "@/utils/classnames";

/**
 * Props for the SectionContainer component.
 */
interface SectionContainerProps {
	children: ReactNode;
	className?: string;
}

/**
 * A layout component that wraps its children in a container with consistent spacing.
 *
 * @param {SectionContainerProps} props - The props for the component.
 * @returns {ReactNode} The rendered container component.
 */
const SectionContainer = ({ children, className }: SectionContainerProps): ReactNode => {
	return <div className={cn(className)}>{children}</div>;
};

export default SectionContainer;
