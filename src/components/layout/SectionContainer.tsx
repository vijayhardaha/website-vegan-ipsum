import React from "react";

import { cn } from "@/utils/classNameUtils";

/**
 * Props for the SectionContainer component.
 */
interface SectionContainerProps {
	children: React.ReactNode;
	className?: string;
}

/**
 * A layout component that wraps its children in a container with consistent spacing.
 *
 * @param {SectionContainerProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered container component.
 */
const SectionContainer: React.FC<SectionContainerProps> = ({ children, className }) => {
	return <div className={cn("space-y-12", className)}>{children}</div>;
};

export default SectionContainer;
